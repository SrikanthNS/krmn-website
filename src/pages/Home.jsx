import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Shield, BarChart2, FileText, Briefcase, TrendingUp, Scale } from 'lucide-react'

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Thin rule ─── */
function Rule() {
  return <div className="w-8 h-px bg-slate-300 mb-6" />
}

/* ─── Services Data ─── */
const services = [
  {
    icon: Shield,
    title: 'Audit & Assurance',
    desc: 'Statutory, internal, tax and GST audits. Independent, thorough, and actionable.',
  },
  {
    icon: FileText,
    title: 'Direct Tax',
    desc: 'Income tax compliance, planning, assessments, transfer pricing, and cross-border advisory.',
  },
  {
    icon: TrendingUp,
    title: 'GST & Indirect Tax',
    desc: 'End-to-end GST compliance, advisory, audits, refunds, and dispute resolution.',
  },
  {
    icon: BarChart2,
    title: 'CFO & Financial Advisory',
    desc: 'Strategic financial oversight, fund sourcing, forecasting, and investment structuring.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Law',
    desc: 'Company incorporation, restructuring, compliance, and MCA filings.',
  },
  {
    icon: Scale,
    title: 'Valuation Services',
    desc: 'Business, ESOP, intangible asset, and related-party transaction valuations.',
  },
]

/* ─── Stats ─── */
const stats = [
  { value: '15+', label: 'Years in Practice' },
  { value: '200+', label: 'Clients Served' },
  { value: '9', label: 'Practice Areas' },
  { value: '2011', label: 'Established' },
]

/* ─── Industries ─── */
const industries = [
  'Technology & SaaS',
  'Manufacturing',
  'Real Estate',
  'Healthcare',
  'Financial Services',
  'Retail & FMCG',
  'Startups & Founders',
  'Non-Profit & NGOs',
]

/* ─── Why KRMN ─── */
const pillars = [
  {
    number: '01',
    title: 'Tailored, not templated',
    desc: 'We design every engagement around your specific situation. Not a standard service package adapted to fit.',
  },
  {
    number: '02',
    title: 'Proactive, not reactive',
    desc: 'We stay ahead of regulatory changes so you are informed before an issue becomes a problem.',
  },
  {
    number: '03',
    title: 'Transparent by default',
    desc: 'Clear communication, no surprises. You are always informed and involved in every decision.',
  },
  {
    number: '04',
    title: 'Multi-disciplinary depth',
    desc: 'Our team brings overlapping expertise across tax, audit, law, and finance — serving you comprehensively.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end bg-primary overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Faint vertical rule */}
        <div className="absolute left-[62%] top-0 bottom-0 w-px bg-white/[0.04] hidden lg:block" />

        {/* Top tagline */}
        <div className="absolute top-24 left-6 md:left-10 max-w-7xl w-full mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white/40 text-xs tracking-editorial uppercase font-sans">
              Chartered Accountants · Est. 2011 · Bengaluru
            </span>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-20 md:pb-28 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-white/40 text-xs tracking-editorial uppercase mb-8 font-sans"
            >
              Financial Advisory & Tax Practice
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display font-normal text-white leading-[1.08] text-[clamp(2.8rem,7vw,6rem)] max-w-3xl mb-8"
            >
              Trusted counsel for{' '}
              <em className="italic text-white/70 font-normal">serious</em>{' '}
              business decisions.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-lg font-sans font-light leading-relaxed max-w-xl mb-12"
            >
              KRMN & Associates is a full-service Chartered Accountancy firm advising startups,
              SMEs, and enterprises on audit, taxation, compliance, and strategic financial matters.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-sans font-medium px-6 py-3.5 hover:bg-white/90 transition-colors"
              >
                Schedule a Consultation
                <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-sm font-sans font-light px-6 py-3.5 hover:border-white/40 hover:text-white transition-colors"
              >
                View Practice Areas
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/10 divide-x divide-y md:divide-y-0 divide-white/10"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="px-6 py-5">
                <p className="font-display text-white text-3xl mb-1">{value}</p>
                <p className="text-white/40 text-xs font-sans uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Mandate bar ── */}
      <section className="bg-surface border-b border-border py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-x-10 gap-y-2 items-center">
            <span className="text-slate-400 text-xs tracking-editorial uppercase shrink-0">Practice Areas</span>
            {[
              'Statutory Audit', 'Direct Tax', 'GST Compliance', 'CFO Services',
              'Corporate Law', 'Valuation', 'Startup Advisory', 'Transfer Pricing', 'IFC Audit',
            ].map((s) => (
              <span key={s} className="text-slate-500 text-xs font-sans whitespace-nowrap">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Rule />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">What we do</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight max-w-xl">
              Comprehensive services across every financial discipline.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="bg-white p-8 group hover:bg-surface transition-colors duration-200 h-full">
                  <div className="w-9 h-9 border border-border flex items-center justify-center mb-6 group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors">
                    <Icon size={16} className="text-slate-400 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary text-base mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">{desc}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-accent text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/services">Learn more</Link>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-sans text-slate-600 border-b border-slate-300 pb-0.5 hover:text-primary hover:border-primary transition-colors"
            >
              View all services
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── About / Firm Intro ── */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left */}
            <Reveal>
              <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">About the firm</p>
              <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-8">
                Built on depth.<br />
                <em className="italic font-normal text-slate-500">Delivered with precision.</em>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6 font-sans">
                Founded in 2011 as Kishore & Co. and reconstituted as KRMN & Associates in 2018,
                we have spent over fifteen years building a practice that prioritises substance over
                scale. We are registered with ICAI under FRN 013727S.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm mb-8 font-sans">
                Our partners bring deep expertise in statutory audit, direct and indirect taxation,
                FEMA, transfer pricing, IND AS implementation, and corporate restructuring.
                Every engagement is handled with senior involvement — not delegated away.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-sans text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors"
              >
                Meet the partners
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>

            {/* Right — numbered pillars */}
            <div className="space-y-0">
              {pillars.map(({ number, title, desc }, i) => (
                <Reveal key={number} delay={i * 0.08}>
                  <div className="flex gap-6 py-7 border-b border-border last:border-0 group">
                    <span className="font-mono text-[10px] text-slate-300 mt-0.5 shrink-0">{number}</span>
                    <div>
                      <h3 className="font-sans font-semibold text-primary text-sm mb-2">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-sans">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Rule />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Who we serve</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16 max-w-xl">
              Across sectors. For businesses at every stage.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 0.05}>
                <div className="bg-white px-6 py-7 group hover:bg-primary transition-colors duration-300">
                  <p className="font-sans text-sm font-medium text-primary group-hover:text-white transition-colors">{ind}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners snapshot ── */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Rule />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Leadership</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16">
              The partners.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {/* Partner 1 */}
            <Reveal>
              <div className="bg-white p-10 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-sans font-semibold text-primary text-lg mb-1">Kishore N S</h3>
                    <p className="text-slate-400 text-xs tracking-editorial uppercase font-sans">BBM, FCA — Managing Partner</p>
                  </div>
                  <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center">
                    <span className="font-display text-primary text-lg">K</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  Fellow Member of ICAI, qualified 2010. Over 15 years of practice in Internal Audit,
                  Statutory Audit, Direct and Indirect Taxation, FEMA Compliance, and advisory for
                  corporates and banks. Founded Kishore & Co. in 2011 to serve businesses across
                  audit, startup support, CFO services, and company law.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Statutory Audit', 'Taxation', 'FEMA', 'CFO Services', 'Startup Advisory'].map(tag => (
                    <span key={tag} className="text-[10px] text-slate-400 border border-border px-2.5 py-1 font-sans tracking-wide uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Partner 2 */}
            <Reveal delay={0.1}>
              <div className="bg-white p-10 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-sans font-semibold text-primary text-lg mb-1">Rakesh K A</h3>
                    <p className="text-slate-400 text-xs tracking-editorial uppercase font-sans">BCom, ACA — Partner</p>
                  </div>
                  <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center">
                    <span className="font-display text-primary text-lg">R</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  Associate Member of ICAI, qualified 2022. Expertise in Process Audits, Financial
                  Controls, International Taxation, and Statutory Audits. Experienced in IFC and
                  IND AS implementation, and Direct and Indirect Tax consulting.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['IFC Audit', 'IND AS', 'International Tax', 'Process Audit', 'Indirect Tax'].map(tag => (
                    <span key={tag} className="text-[10px] text-slate-400 border border-border px-2.5 py-1 font-sans tracking-wide uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-white/40 text-xs tracking-editorial uppercase mb-6 font-sans">Get in touch</p>
              <h2 className="font-display font-normal text-white text-4xl md:text-5xl leading-tight mb-8">
                Ready to discuss your<br />
                <em className="italic font-normal text-white/60">financial and compliance</em> needs?
              </h2>
              <p className="text-white/50 text-base font-sans leading-relaxed mb-10 max-w-lg">
                Whether you"re a founder building your first company, a CFO navigating a complex audit,
                or a business owner managing compliance — we"re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary text-sm font-sans font-medium px-6 py-3.5 hover:bg-white/90 transition-colors"
                >
                  Schedule a Consultation
                  <ArrowUpRight size={15} />
                </Link>
                <a
                  href="mailto:info@krmn.in"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-sm font-sans font-light px-6 py-3.5 hover:border-white/40 hover:text-white transition-colors"
                >
                  info@krmn.in
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
