import { useRef } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
} from 'lucide-react'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs
      .sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
      .then(
        () => {
          alert('Talebiniz başarıyla gönderildi.')
          formRef.current?.reset()
        },
        () => {
          alert('Bir hata oluştu. Lütfen tekrar deneyin.')
        }
      )
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Maps Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="relative w-full h-[300px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407921.8523987964!2d34.998696673437514!3d36.988571400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f7a1f0961d7%3A0x4e0e88ea9209448f!2zw5zDp2fDvGwgTWFraW5h!5e0!3m2!1str!2str!4v1770636554522!5m2!1str!2str"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Üçgül Makina Konum"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Bize Ulaşın
          </h1>
          <p className="text-gray-600 text-lg">24 saat içinde dönüş yapıyoruz.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 rounded-2xl shadow-sm p-8 md:p-10 border border-orange-100/50">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Adınız ve soyadınız"
                      className="w-full h-12 px-4 text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] placeholder-gray-300 transition-all duration-[600ms]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ornek@email.com"
                      className="w-full h-12 px-4 text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] placeholder-gray-300 transition-all duration-[600ms]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2">
                    Telefon{' '}
                    <span className="text-gray-400 text-[10px]">(opsiyonel)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0 (___) ___ __ __"
                    className="w-full h-11 px-4 text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] placeholder-gray-300 transition-all duration-[600ms]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    rows={7}
                    className="w-full px-4 py-3 text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] placeholder-gray-300 resize-none transition-all duration-[600ms]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-[14px] transition-all duration-[600ms]"
                >
                  Talep Gönder
                </button>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Gönder butonuna bastığınızda talebiniz doğrudan iletilir.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information - Single Card */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
              {/* WhatsApp - Primary CTA */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Hızlı İletişim
                </h3>
                <a
                  href="https://wa.me/905349765239?text=Merhaba%20Üçgül%20Makina,%20endüstriyel%20üretim%20ve%20makine%20çözümleriniz%20hakkında%20bilgi%20ve%20teklif%20almak%20için%20web%20siteniz%20üzerinden%20iletişime%20geçiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-all duration-[600ms] group hover:scale-[1.02]"
                >
                  <MessageCircle
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-[600ms]"
                  />
                  WhatsApp ile Ulaşın
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Hızlı teklif için
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100"></div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <a
                  href="https://maps.app.goo.gl/Xmai1MvgRopVVA7N8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-100 transition-colors">
                    <MapPin size={16} className="text-orange-500" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-1.5">
                      Adres
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-[#E8612D] transition-colors">
                      Organize Sanayi Bölgesi, Doğu Sanayi Sitesi E2 Blok No:6,
                      Adana
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+903223213270" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-100 transition-colors">
                    <Phone size={16} className="text-orange-500" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-1.5">
                      Telefon
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-[#E8612D] transition-colors">
                      (0322) 321 32 70
                      <br />
                      (0322) 324 10 24
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:m3gul@3gulmakina.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-100 transition-colors">
                    <Mail size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-1.5">
                      E-posta
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-[#E8612D] transition-colors">
                      m3gul@3gulmakina.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100"></div>

              {/* Social Media */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Bizi Takip Edin
                </h3>
                <div className="flex gap-3 mb-3">
                  <a
                    href="https://www.instagram.com/ucgul.makina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 bg-gray-50 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-[600ms] group"
                  >
                    <Instagram
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-[600ms]"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=sAaogpxCUnw&list=LL&index=4&t=2s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 bg-gray-50 hover:bg-red-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-[600ms] group"
                  >
                    <Youtube
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-[600ms]"
                    />
                  </a>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Projelerimizi ve üretim sürecimizi takip edin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-10">
          Not: EmailJS ayarlarında SERVICE_ID, TEMPLATE_ID ve PUBLIC_KEY
          değerlerini kendi hesabınızdan girmeniz gerekir.
        </p>
      </div>
    </div>
  )
}

export default ContactPage
