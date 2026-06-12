import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Shield, FileText, TrendingUp, BarChart2,
  Briefcase, Scale, Building2, Users, ArrowUpRight
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
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

const services = [
  {
    id: 'audit',
    icon: Shield,
    title: 'Audit & Assurance',
    tagline: 'Independent. Thorough. Credible.',
    description: 'We conduct statutory, internal, tax, and GST audits with a focus on accuracy, regulatory compliance, and actionable insight.',
    items: [
      'Statutory Audits for corporate and non-corporate entities',
      'Internal Audits and process reviews',
      'Tax Audits under the Income Tax Act',
      'GST Audits under applicable GST law',
      'IFC (Internal Financial Controls) Audits',
      'Analytical review of financial statements',
      'Evaluation and reporting on internal control systems',
      'Preparation of Consolidated Financial Statements',
      'Finalization of accounts and tax computation',
      'Audit reports with actionable compliance recommendations',
    ],
  },
  {
    id: 'direct-tax',
    icon: FileText,
    title: 'Direct Tax Services',
    tagline: 'Compliant. Strategic. Defensible.',
    description: 'Comprehensive direct tax solutions for individuals, domestic companies, foreign entities, NRIs, and trusts.',
    items: [
      'Income Tax return filing for all client categories',
      'Corporate and personal tax compliance',
      'Tax Assessments, Appeals, and Authority representation',
      'Transfer Pricing advisory — domestic and international',
      'E-TDS return filing and compliance',
      'Specialized NRI taxation advisory',
      'Cross-border transaction advisory under DTAA',
      'Representation before DRP and AAR',
      'Investment and organisational restructuring for tax efficiency',
      'Wealth Tax returns and compliance',
    ],
  },
  {
    id: 'indirect-tax',
    icon: TrendingUp,
    title: 'Indirect Tax',
    tagline: 'End-to-end. Proactive. Resolved.',
    description: 'Full-spectrum GST advisory, compliance, and representation — from registration to dispute resolution.',
    items: [
      'GST Registration and compliance management',
      'E-filing of GST returns',
      'Transaction planning under GST',
      'Contract vetting for indirect tax implications',
      'GST Audits and preventive compliance reviews',
      'Show Cause Notice handling — initiation to resolution',
      'Representation before CBEC, Tribunals, AARs',
      'Assistance with GST Refunds, Rebates, and Incentives',
      'Arbitration for indirect tax disputes',
      'ERP/MIS implementation for GST compliance',
    ],
  },
  {
    id: 'cfo-advisory',
    icon: BarChart2,
    title: 'CFO & Financial Advisory',
    tagline: 'Strategic. Operational. Hands-on.',
    description: 'Senior financial oversight and advisory for businesses that need strategic financial direction without a full-time CFO.',
    items: [
      'Oversight of day-to-day financial operations',
      'Strategic fund sourcing and utilisation planning',
      'Project costing, budgeting, and financial forecasting',
      'Investment strategy and operational structuring advisory',
      'MIS Reporting for management decision-making',
      'Working capital and term loan advisory for startups',
      'Regulatory registration and licensing assistance',
      'Payroll processing — PF, ESI, Professional Tax',
      'Accounting and bookkeeping services',
      'Stock audits and fixed asset verification',
    ],
  },
  {
    id: 'corporate-law',
    icon: Briefcase,
    title: 'Corporate Law Services',
    tagline: 'Structured. Compliant. Informed.',
    description: 'End-to-end corporate legal solutions ensuring compliance with the Companies Act and related regulations.',
    items: [
      'Company Incorporation — Private, Public, LLP, Offshore',
      'Liaison offices, branch offices, and project offices',
      'Private placement services and ESOP advisory',
      'Representation before Company Law Board',
      'Corporate Restructuring — Mergers, Demergers, Winding-up',
      'Corporate Governance — Board and shareholder meeting minutes',
      'MCA statutory form preparation and filing',
      'Liaison with RoC, Regional Directors, and Tribunals',
      'STPI and SEZ registrations for EOUs',
      'FEMA compliance and advisory',
    ],
  },
  {
    id: 'valuation',
    icon: Scale,
    title: 'Valuation Services',
    tagline: 'Independent. Credible. Defensible.',
    description: 'Rigorous valuation services for transactions, compliance, litigation support, and regulatory requirements.',
    items: [
      'Business Valuation — entire entities or specific units',
      'ESOP and share valuation under Companies Act and FEMA',
      'Intangible asset valuation — goodwill, patents, trademarks',
      'Fairness Opinions and independent analysis',
      'Financial asset and liability valuation for reporting',
      'Related-party transaction valuation and transparency',
      'Liaison with merchant bankers and Registered Valuers',
      'Valuation certificates for regulatory compliance',
    ],
  },
  {
    id: 'startup-advisory',
    icon: Building2,
    title: 'Startup Advisory',
    tagline: 'Early-stage to scale-up.',
    description: 'Practical financial and compliance advisory for founders building businesses in India.',
    items: [
      'Company incorporation and initial compliance setup',
      'Startup India registration and incentive advisory',
      'CFO-as-a-Service for early-stage companies',
      'Investor-ready financial reporting and modelling',
      'Working capital and term loan advisory',
      'ESOP structuring and valuation',
      'Due diligence preparation and support',
      'Tax planning from inception',
      'Regulatory licensing — GST, PF, ESI, PT',
      'Industrial licensing approvals',
    ],
  },
  {
    id: 'compliance',
    icon: Users,
    title: 'Regulatory Compliance',
    tagline: 'Covered. Current. Consistent.',
    description: 'Ongoing compliance management across tax, corporate, and labour laws — so nothing falls through the cracks.',
    items: [
      'Annual filing and ROC compliance',
      'TDS/Withholding Tax compliance and certificate issuance',
      'PF, ESI, and Professional Tax return management',
      'Shop and Establishments Act compliance',
      'Income tax scrutiny representation',
      'Review of internal systems and procedural controls',
      'Advisory on personal taxation and TDS handling',
      'Accounts finalization and statutory compliance reporting',
    ],
  },
]

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id)

  useEffect(() => {
    const observers = []
    services.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])
  return (
    <>
      {/* Page header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/40 text-xs tracking-editorial uppercase mb-4 font-sans">Practice Areas</p>
            <h1 className="font-display font-normal text-white text-4xl md:text-6xl leading-tight max-w-2xl mb-6">
              Eight practice areas.<br />
              <em className="italic font-normal text-white/60">One trusted firm.</em>
            </h1>
            <p className="text-white/50 text-base font-sans font-light leading-relaxed max-w-xl">
              From incorporation to audit, from GST to valuation — we cover every dimension
              of your financial and compliance needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service index */}
      <section className="bg-surface border-b border-border py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-xs font-sans px-3 py-2 whitespace-nowrap rounded transition-colors ${
                  activeId === s.id
                    ? 'text-primary bg-white font-medium'
                    : 'text-slate-500 hover:text-primary hover:bg-white'
                }`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail */}
      <div className="bg-white">
        {services.map((service, idx) => {
          const Icon = service.icon
          const isEven = idx % 2 === 0
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 md:py-28 border-b border-border ${isEven ? 'bg-white' : 'bg-surface'}`}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  {/* Left */}
                  <Reveal className="lg:col-span-4">
                    <div className="sticky top-32">
                      <div className="w-10 h-10 border border-border flex items-center justify-center mb-6">
                        <Icon size={18} className="text-slate-400" />
                      </div>
                      <p className="text-slate-400 text-[10px] tracking-editorial uppercase mb-3 font-sans">
                        0{idx + 1}
                      </p>
                      <h2 className="font-display font-normal text-primary text-3xl md:text-4xl leading-tight mb-4">
                        {service.title}
                      </h2>
                      <p className="text-accent text-sm font-sans italic mb-5">{service.tagline}</p>
                      <p className="text-slate-500 text-sm leading-relaxed font-sans">{service.description}</p>
                    </div>
                  </Reveal>

                  {/* Right */}
                  <Reveal delay={0.1} className="lg:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                      {service.items.map((item, i) => (
                        <div key={i} className={`bg-${isEven ? 'white' : 'surface'} px-5 py-5 flex gap-3 items-start hover:bg-primary group transition-colors duration-200`}>
                          <div className="w-1 h-1 rounded-full bg-slate-300 mt-2 shrink-0 group-hover:bg-white/40" />
                          <p className="text-slate-600 text-sm leading-relaxed font-sans group-hover:text-white/80 transition-colors">{item}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="text-white/40 text-xs tracking-editorial uppercase mb-4 font-sans">Next step</p>
            <h2 className="font-display font-normal text-white text-4xl md:text-5xl mb-6 leading-tight">
              Not sure where to start?
            </h2>
            <p className="text-white/50 text-base font-sans leading-relaxed mb-10 max-w-lg mx-auto">
              Most businesses need services across multiple areas. Let's have a conversation
              about your situation and figure out the right approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary text-sm font-sans font-medium px-6 py-3.5 hover:bg-white/90 transition-colors"
            >
              Schedule a Free Consultation
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
