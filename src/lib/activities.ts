import { supabase } from './supabase';

export interface Activity {
  id: number;
  title: string;
  category: string;
  status: 'ongoing' | 'completed';
  description: string;
  start_date: string;
  end_date: string | null;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface ActivityFormData {
  title: string;
  category: string;
  status: 'ongoing' | 'completed';
  description: string;
  start_date: string;
  end_date: string | null;
  image_url: string;
}

export async function getActivities(): Promise<Activity[]> {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }

  return data || [];
}

export async function getActivity(id: number): Promise<Activity | null> {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching activity:', error);
    throw error;
  }

  return data;
}

export async function createActivity(activityData: ActivityFormData): Promise<Activity> {
  const { data, error } = await supabase
    .from('activities')
    .insert([activityData])
    .select()
    .single();

  if (error) {
    console.error('Error creating activity:', error);
    throw error;
  }

  return data;
}

export async function updateActivity(id: number, activityData: Partial<ActivityFormData>): Promise<Activity> {
  const { data, error } = await supabase
    .from('activities')
    .update(activityData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating activity:', error);
    throw error;
  }

  return data;
}

export async function deleteActivity(id: number): Promise<void> {
  const { error } = await supabase
    .from('activities')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting activity:', error);
    throw error;
  }
}

export function isAdmin(userEmail: string | undefined): boolean {
  if (!userEmail) return false;

  const adminEmails = import.meta.env.VITE_ADMIN_EMAILS?.split(',').map((email: string) => email.trim()) || [];
  return adminEmails.includes(userEmail);
}

export function subscribeToActivities(callback: (activities: Activity[]) => void) {
  const channel = supabase
    .channel('activities-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'activities'
      },
      async () => {
        const activities = await getActivities();
        callback(activities);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
