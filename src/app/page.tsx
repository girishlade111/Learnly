'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  ArrowRight,
  Plus,
  Minus,
  ChevronUp,
  Menu,
  X,
} from 'lucide-react'

/* ──────────────────────── Reusable animation helpers ──────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

/* ──────────────────────── 1. Header / Navbar ──────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Course', 'FAQ']

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto flex items-center justify-between px-6 md:px-20 lg:px-32 py-5">
        <a href="#" className="text-2xl font-bold tracking-tight text-white">
          Learnly
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase()}`}
              whileHover={{ color: '#aaaaaa' }}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l}
            </motion.a>
          ))}
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm border border-white/30 rounded px-5 py-2 text-white hover:bg-white/10 transition-colors"
          >
            Sign Up
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/90 border-t border-white/5"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-lg"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href="#pricing"
                className="border border-white/30 rounded px-5 py-2 text-white text-center"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* ──────────────────────── 2. Hero Section ──────────────────────── */

function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-12 px-6 md:px-20 lg:px-32">
      {/* Large heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-4xl"
      >
        Learn the rudiment of design with{' '}
        <span className="text-white/60">John Steed</span>...
      </motion.h1>

      {/* Video placeholder */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        className="mt-12 relative w-full aspect-video max-w-5xl bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center cursor-pointer group"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
        {/* Play button */}
        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white/70 transition-colors"
        >
          <Play className="w-8 h-8 text-white/80 ml-1" fill="currentColor" />
        </motion.div>
        {/* Decorative corner marks */}
        <span className="absolute top-4 left-4 text-[10px] tracking-widest text-white/20 uppercase">
          Preview
        </span>
        <span className="absolute bottom-4 right-4 text-[10px] tracking-widest text-white/20 uppercase">
          02:34
        </span>
      </motion.div>

      {/* Massive text graphic */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-20 py-12 overflow-hidden"
      >
        <p className="text-[clamp(2rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-tight text-center text-white/90 whitespace-nowrap">
          Great Things From Small Places
        </p>
        <p className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-center text-white/30 mt-2">
          — You Can Do Great Things
        </p>
      </motion.div>
    </section>
  )
}

/* ──────────────────────── 3. Intro / Sell Section ──────────────────────── */

function IntroSection() {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-32">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4"
      >
        Become an Exceptional Designer
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl"
      >
        Craft your design career one experience at a time starting now!
      </motion.h2>

      {/* Dark container card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={2}
        className="mt-16 bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row gap-10 md:gap-20 items-start"
      >
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold leading-snug text-white/90">
            Starting your design journey in safe hands
          </h3>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-base text-white/50 leading-relaxed">
            Join thousands of aspiring designers who have transformed their
            careers with our expert-led curriculum. From fundamentals to
            advanced techniques, we guide you every step of the way.
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border border-white/30 rounded px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors w-fit"
          >
            Sign up now <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

/* ──────────────────────── 4. Social Proof ──────────────────────── */

function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-32">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white/30 max-w-3xl"
      >
        The best career decision you&apos;ll ever make.
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        className="mt-10 max-w-2xl"
      >
        <p className="text-lg text-white/70 leading-relaxed">
          <span className="underline underline-offset-4 decoration-white/30">
            Design is the art of
          </span>{' '}
          communication, and the best designers are those who can translate
          complex ideas into simple, beautiful experiences.
          <span className="text-white/40 ml-2">— John Steed</span>
        </p>
      </motion.div>

      <motion.a
        href="#testimonials"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-flex items-center gap-2 border border-white/20 rounded px-6 py-3 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors"
      >
        See all reviews <ArrowRight className="w-4 h-4" />
      </motion.a>
    </section>
  )
}

/* ──────────────────────── 5. Testimonials ──────────────────────── */

const testimonials = [
  {
    quote:
      '"This course completely changed how I approach design. The lessons are practical, clear, and incredibly well-structured."',
    name: 'James Li',
    role: 'UI/UX Designer',
  },
  {
    quote:
      '"I went from knowing nothing about design to landing my first role in just 3 months. The mentorship was invaluable."',
    name: 'Jenny Tan',
    role: 'Product Designer',
  },
  {
    quote:
      '"The community and feedback loops made all the difference. I\'ve never grown this fast in my career."',
    name: 'Nina Wong',
    role: 'Visual Designer',
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            whileHover={{ y: -6 }}
            className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between gap-8 transition-shadow hover:shadow-lg hover:shadow-white/[0.02]"
          >
            <p className="text-base text-white/60 leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-4">
              {/* Placeholder avatar */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold text-white/60">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white/90">{t.name}</p>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────────── 6. Course Modules ──────────────────────── */

const modules = [
  {
    title: 'Module 1',
    features: [
      'Introduction to design fundamentals',
      'Figma lessons',
      'Color theory & typography',
      'Layout & composition',
    ],
  },
  {
    title: 'Module 2',
    features: [
      'Advanced UI components',
      'Prototyping & interaction design',
      'Design systems & tokens',
      'Responsive design patterns',
    ],
  },
  {
    title: 'Module 3',
    features: [
      'Portfolio building strategies',
      'Real-world case studies',
      'Interview preparation',
      'Career growth planning',
    ],
  },
]

function CourseModules() {
  return (
    <section id="course" className="py-24 px-6 md:px-20 lg:px-32">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4"
      >
        Areas covered in the course
      </motion.p>

      {/* Stacked / overlapping cards */}
      <div className="relative mt-8">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`bg-[#111111] border border-white/5 rounded-2xl p-8 md:p-10 ${
              i === 0
                ? 'relative z-30'
                : i === 1
                ? 'relative z-20 -mt-4 md:-mt-6 ml-4 md:ml-8'
                : 'relative z-10 -mt-4 md:-mt-6 ml-8 md:ml-16'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-6">
              {m.title}
            </h3>
            <ul className="space-y-3 mb-8">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/20 rounded px-5 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/40 transition-colors"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────────── 7. Pricing Section ──────────────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-20 lg:px-32">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-center"
      >
        Get a sign up demo today
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Free tier */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-8 md:p-10 text-black flex flex-col"
        >
          <p className="text-sm uppercase tracking-widest text-black/40 mb-2">
            Self-paced
          </p>
          <p className="text-4xl font-bold mb-1">$0</p>
          <p className="text-sm text-black/40 mb-8">/mo</p>
          <ul className="space-y-3 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-black/60">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              Access all lessons
            </li>
            <li className="flex items-center gap-3 text-sm text-black/60">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              Future updates included
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full border-2 border-black rounded py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors"
          >
            Demo for Free
          </motion.button>
        </motion.div>

        {/* Pro tier */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          whileHover={{ scale: 1.05 }}
          className="bg-[#111111] border border-white/5 rounded-2xl p-8 md:p-10 text-white flex flex-col"
        >
          <p className="text-sm uppercase tracking-widest text-white/40 mb-2">
            Professional Mentorship
          </p>
          <p className="text-4xl font-bold mb-1">$299</p>
          <p className="text-sm text-white/40 mb-8">/mo</p>
          <ul className="space-y-3 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              Access all lessons
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              Future updates included
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white rounded py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────── 8. FAQ Section ──────────────────────── */

const faqItems = [
  {
    q: 'My Students Already Know More Than Me',
    a: 'Our curriculum is designed for all levels. Even if you have some knowledge, our structured approach ensures you fill gaps and build a solid foundation for professional work.',
  },
  {
    q: 'How long do I have access to the course?',
    a: 'Once you enroll, you have lifetime access to all course materials, including future updates and new modules.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes! We offer a 30-day money-back guarantee. If you are not satisfied, just reach out and we will refund your payment in full.',
  },
  {
    q: 'Do I need any prior design experience?',
    a: 'No prior experience is required. Our course starts from the very basics and progressively builds up to advanced concepts.',
  },
  {
    q: 'What tools do I need for the course?',
    a: 'You will need a computer with internet access. We primarily use Figma, which is free to use. All other tools and resources are provided within the course.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 md:px-20 lg:px-32">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-12"
      >
        FAQ
      </motion.h2>

      <div className="max-w-3xl divide-y divide-white/10">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="py-5"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="text-base md:text-lg text-white/80 hover:text-white transition-colors">
                  {item.q}
                </span>
                <span className="shrink-0 text-white/40">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm text-white/50 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

/* ──────────────────────── 9. Newsletter ──────────────────────── */

function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-24 px-6 md:px-20 lg:px-32 border-t border-white/5">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Stay Updated With The Latest From Learnly
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-[#0a0a0a] border border-white/10 rounded px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-white text-black rounded px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Submit <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

/* ──────────────────────── 10. Footer ──────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 md:px-20 lg:px-32 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30">
          Copyright &copy; 2024 Learnly
        </p>
        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Get Started
          </a>
          <a href="#faq" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Support
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            Back to Top <ChevronUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ──────────────────────── Main Page ──────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <SocialProof />
        <TestimonialsSection />
        <CourseModules />
        <PricingSection />
        <FAQSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
