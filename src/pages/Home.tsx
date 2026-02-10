import { useEffect, useRef } from 'react'
import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Factory,
  Cog,
  Wrench,
  Users,
  Award,
  Clock,
  Briefcase,
  Cpu,
  Settings,
  Package,
  Shield,
} from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion'
import type { Variants } from 'framer-motion'

import type { LucideIcon } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}


const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}


const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, {
    once: true,
    margin: '-100px',
  })

  useEffect(() => {
    if (!inView) return
    const node = nodeRef.current

    let startTime: number | null = null
    const duration = 2000

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(from + (to - from) * easeProgress)

      if (node) {
        node.textContent = currentValue.toString()
      }

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [inView, from, to])

  return <span ref={nodeRef}>{from}</span>
}

const StatsSection = () => {
  const stats = [
    {
      icon: Clock,
      value: 35,
      label: 'Yıllık Tecrübe',
      suffix: '+',
    },
    {
      icon: Briefcase,
      value: 500,
      label: 'Tamamlanan Proje',
      suffix: '+',
    },
    {
      icon: Users,
      value: 150,
      label: 'Mutlu Müşteri',
      suffix: '+',
    },
    {
      icon: Award,
      value: 7,
      label: 'Teknik Destek',
      suffix: '/24',
    },
  ]

  return (
    <section className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#E8612D 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mb-4 group-hover:bg-[#E8612D]/20 transition-colors duration-300 border border-gray-700 group-hover:border-[#E8612D]/30">
                <stat.icon className="w-8 h-8 text-[#E8612D]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-baseline">
                <AnimatedCounter from={0} to={stat.value} />
                <span className="text-[#E8612D] text-2xl ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const headingText = 'Üçgül Makina | Endüstriyel Üretimde Güç'
  const words = headingText.split(' ')


  const container = {
    hidden: {
      opacity: 0,
    },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    }),
  }

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}


  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0f172a] -mt-16">
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/30 z-10" />
        <img
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg"
          alt="Industrial Workshop"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#E8612D]/10 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8612D]/10 border border-[#E8612D]/20 text-[#E8612D] text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E8612D] animate-pulse"></span>
            ÜÇGÜL MAKİNA
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-[-0.02em] flex flex-wrap justify-center gap-1 md:gap-2 leading-[1.05]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word: string, index: number) => (
  <motion.span
    variants={child}
    key={`${word}-${index}`}
    className="inline-block"
  >
    {word}
  </motion.span>
))}

          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-light"
          >
            Üçgül Makina ailesi olarak deneyimli kadromuz ile sorunsuz ve
            zamanında teslimat şirketimizin ana prensibidir.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.5,
              duration: 0.8,
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
          >
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/services")}
  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
>
  HİZMETLERİMİZ
</motion.button>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/contact")}
  className="px-8 py-4 bg-[#E8612D] text-white font-semibold rounded-lg hover:bg-[#d55626] shadow-lg shadow-[#E8612D]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
>
  BİZE ULAŞIN
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</motion.button>

          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  )
}

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
}: {
icon: LucideIcon
  title: string
  desc: string
}) => (
  <motion.div
    whileHover={{
      y: -5,
      transition: {
        duration: 0.3,
      },
    }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group relative overflow-hidden h-full"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8612D]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />

    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E8612D] transition-colors duration-300 relative z-10 shadow-sm">
      <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
    </div>

    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E8612D] transition-colors duration-300 relative z-10">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed relative z-10 line-clamp-3">
      {desc}
    </p>
  </motion.div>
)

const ServicesSection = () => {
  const services = [
    {
      icon: Cog,
      title: 'Mühendislik & Tasarım',
      desc: 'Özel tasarım mühendisliği hizmetleri sunulmaktadır. Müşteri ihtiyaçlarına göre özel tasarımlar yapılır ve üretime hazır hale getirilir.',
    },
    {
      icon: Factory,
      title: 'İmalat & Montaj',
      desc: 'Çelik profiller, makine parçaları ve komple ürün imalatı yapılmaktadır. Kaliteli ve dayanıklı ürünler üretilmektedir.',
    },
    {
      icon: Cpu,
      title: 'Otomasyon Sistemleri',
      desc: 'Makine otomasyon sistemleri tasarlanır ve kurulur. Endüstri 4.0 standartlarında modern çözümler sunulmaktadır.',
    },
    {
      icon: Settings,
      title: 'İmalat & Montaj Hizmetleri',
      desc: 'Alüminyum ürünlerinin İmalatı da yer almaktadır. İmalat sürecinin her aşamasında kalite kontrol sağlanmaktadır.',
    },
    {
      icon: Package,
      title: 'Yedek Parça & Servisi',
      desc: 'Makinerimizin çeşitli yedek parçaları ve teknik destek hizmetleri sağlanmaktadır. Profesyonel servis ekibimiz 24/7 hazırdır.',
    },
    {
      icon: Factory,
      title: 'Fason Metal İşleme',
      desc: 'Metal işleme hizmetleri kapsamında CNC tornalar, frezeler ve diğer modern makine parkımız kullanılmaktadır.',
    },
    {
      icon: Wrench,
      title: 'Bakım & Onarım',
      desc: 'Çeşitli imalat makinelerinin bakımı, onarımı ve teknik destek hizmetleri yapılmaktadır.',
    },
    {
      icon: Shield,
      title: 'Kalite Kontrol',
      desc: 'Her aşamada kalite kontrol prosedürleri uygulanarak en yüksek standartta ürün teslimatı sağlanmaktadır.',
    },
  ]

  const duplicatedServices = [...services, ...services]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Hizmet Alanlarımız
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: '100%',
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="absolute -bottom-2 left-0 h-1.5 bg-[#E8612D] rounded-full"
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6">
            Modern teknoloji parkurumuz ve uzman kadromuzla endüstriyel
            ihtiyaçlarınıza özel çözümler üretiyoruz.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 10,
                  ease: 'linear',
                },
              }}
              className="flex gap-6"
            >
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  className="w-[280px] flex-shrink-0"
                >
                  <FeatureCard
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const QualitySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInLeft}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-[#E8612D] rounded-2xl transform translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
              alt="Quality Control"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />

            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                type: 'spring',
              }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border-l-4 border-[#E8612D]"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Kalite Standartları
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    ISO 9001:2015
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInRight}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kalite Politikamız
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Müşteri memnuniyetini en üst düzeyde tutmak, sürekli iyileştirme
              prensibiyle çalışmak ve uluslararası kalite standartlarına uygun
              üretim yapmak temel ilkemizdir.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="space-y-6"
            >
              {[
                'ISO 9001:2015 Kalite Yönetim Sistemi',
                'Sıfır Hata Prensibi ile Üretim',
                'Sürekli Eğitim ve Personel Gelişimi',
                'Çevreye Duyarlı Sürdürülebilir Üretim',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:bg-[#E8612D]/5 transition-colors duration-300 border border-transparent hover:border-[#E8612D]/20"
                >
                  <div className="bg-[#E8612D]/10 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-[#E8612D]" />
                  </div>
                  <span className="font-medium text-gray-800">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const CTABanner = () => {
    const navigate = useNavigate()

  return (
    <section className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#E8612D]/20 to-transparent opacity-30" />
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#E8612D]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projeniz için hazır mısınız?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Uzman ekibimizle iletişime geçin, size özel çözümlerimizi
              anlatalım.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <button
  onClick={() => navigate('/contact')}
  className="px-8 py-4 bg-[#E8612D] text-white font-bold rounded-lg hover:bg-[#d55626] shadow-lg shadow-[#E8612D]/30 transition-all duration-300 transform hover:-translate-y-1"
>
  Hemen Teklif Alın
</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ProjectsAndActivities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInLeft}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-4 tracking-tight">
              PROJELERİMİZ
            </h2>
            <div className="w-16 h-1 bg-[#E8612D] rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Üçgül makina olarak pek çok farklı projenin imalatını yaptık.
              Tamamlanan ve üretim devam eden projelerine gözatmak için...
            </p>
            <motion.a
              href="#"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8612D] text-white font-semibold rounded-lg hover:bg-[#d55626] shadow-lg shadow-[#E8612D]/20 transition-colors duration-300"
            >
              DEVAMINI GÖR
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInRight}
            className="w-full lg:w-1/2"
          >
            <div className="relative group overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-[#E8612D] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#E8612D]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8612D]/0 to-[#E8612D]/0 group-hover:from-[#E8612D]/5 group-hover:to-[#E8612D]/10 transition-all duration-300 z-10" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8612D]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Projelerimiz"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInRight}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-4 tracking-tight">
              FAALİYET ALANLARI
            </h2>
            <div className="w-16 h-1 bg-[#E8612D] rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              1972'den bu yana çeşitli imalat sektöründe iş yapan firmalara.
              Teknik servis, danışmanlık, makine revizyonlarına üretimlerinin
              kalitesini üretim hızımı artırma vb. konularda destek vermekteyiz.
            </p>
            <motion.a
              href="#"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8612D] text-white font-semibold rounded-lg hover:bg-[#d55626] shadow-lg shadow-[#E8612D]/20 transition-colors duration-300"
            >
              DEVAMINI GÖR
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInLeft}
            className="w-full lg:w-1/2"
          >
            <div className="relative group overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-[#E8612D] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#E8612D]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8612D]/0 to-[#E8612D]/0 group-hover:from-[#E8612D]/5 group-hover:to-[#E8612D]/10 transition-all duration-300 z-10" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8612D]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Teknik Çizim"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <QualitySection />
      <CTABanner />
      <ProjectsAndActivities />
    </>
  )
}

export default Home
