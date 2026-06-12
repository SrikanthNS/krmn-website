import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

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

const timeline = [
  { year: '2011', event: 'Founded as Kishore & Co., Chartered Accountants in Bengaluru.' },
  { year: '2018', event: 'Reconstituted as KRMN & Associates. Expanded practice areas and team depth.' },
  { year: '2022', event: 'CA Rakesh K A joins as Partner, bringing IFC, IND AS, and international tax expertise.' },
  { year: '2024', event: 'Serving 1000+ clients across startups, SMEs, and corporates across India.' },
]

const values = [
  {
    title: 'Client-centred always',
    desc: "Every engagement is shaped around the client unique situation. We don't fit clients into service packages — we build the service around their needs.",
  },
  {
    title: 'Senior-led delivery',
    desc: 'Partners are directly involved in every significant engagement. Clients deal with senior professionals, not junior associates.',
  },
  {
    title: 'Minimum turnaround time',
    desc: 'We understand that in business, timing matters. Our commitment to rapid, efficient responses is fundamental to how we work.',
  },
  {
    title: 'Transparency without exception',
    desc: 'Clear and consistent communication keeps clients informed and in control. No surprises, no ambiguity.',
  },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/40 text-xs tracking-editorial uppercase mb-4 font-sans">The firm</p>
            <h1 className="font-display font-normal text-white text-4xl md:text-6xl leading-tight max-w-2xl mb-6">
              Over a decade of<br />
              <em className="italic font-normal text-white/60">trusted advisory.</em>
            </h1>
            <p className="text-white/50 text-base font-sans font-light leading-relaxed max-w-xl">
              KRMN & Associates is a full-service Chartered Accountancy firm based in Bengaluru,
              serving businesses across India with audit, taxation, advisory, and compliance services
              since 2011.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firm overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <div className="w-8 h-px bg-slate-300 mb-6" />
              <p className="text-slate-400 text-xs tracking-editorial uppercase mb-4 font-sans">Our story</p>
              <p className="text-slate-700 text-base leading-relaxed mb-5 font-sans">
                KRMN & Associates was initially established in December 2011 in Bengaluru as a
                proprietorship concern under the name "Kishore and Co." The firm was later
                reconstituted into a partnership during July 2018 to expand its capability and
                capacity across practice areas.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 font-sans">
                Registered with ICAI under FRN 013727S, we offer a comprehensive range of
                professional services under one roof — from statutory audits and tax compliance to
                CFO advisory, valuation, and corporate restructuring.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                Our strength lies in a team of highly qualified professionals who hold multiple
                qualifications across various domains. This breadth of expertise allows us to serve
                each client comprehensively, rather than as a narrow specialist.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px bg-border">
                {[
                  { value: '15+', label: 'Years in Practice', sub: 'Since 2011' },
                  { value: '1000+', label: 'Clients Served', sub: 'Across India' },
                  { value: '9', label: 'Practice Areas', sub: 'Under one roof' },
                  { value: '2', label: 'Senior Partners', sub: 'FCA & ACA' },
                ].map(({ value, label, sub }) => (
                  <div key={label} className="bg-surface px-8 py-10">
                    <p className="font-display text-primary text-4xl mb-2">{value}</p>
                    <p className="font-sans text-sm text-slate-600 font-medium mb-1">{label}</p>
                    <p className="font-sans text-xs text-slate-400">{sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-12 font-sans">Firm history</p>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-0">
              {timeline.map(({ year, event }, i) => (
                <Reveal key={year} delay={i * 0.1}>
                  <div className="flex gap-8 md:gap-16 py-8 border-b border-border last:border-0">
                    <span className="font-mono text-sm text-slate-400 shrink-0 w-12 pt-0.5">{year}</span>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans">{event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">How we work</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16">
              Our guiding principles.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map(({ title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="bg-white p-10 group hover:bg-surface transition-colors">
                  <CheckCircle2 size={18} className="text-accent mb-5" />
                  <h3 className="font-sans font-semibold text-primary text-base mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Leadership</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16">
              The Partners.
            </h2>
          </Reveal>

          <div className="space-y-px bg-border">
            {/* Partner 1 */}
            <Reveal>
              <div className="bg-white p-10 md:p-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <div className="md:col-span-3">
                    <div className="w-16 h-16 bg-primary flex items-center justify-center mb-4">
                      <span className="font-display text-white text-2xl">K</span>
                    </div>
                    <h3 className="font-sans font-semibold text-primary text-xl mb-1">Kishore N S</h3>
                    <p className="text-slate-400 text-xs tracking-editorial uppercase font-sans mb-1">BBM, FCA</p>
                    <p className="text-slate-500 text-xs font-sans">Managing Partner</p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 font-sans">
                      Kishore N S is a Fellow Member of the Institute of Chartered Accountants of
                      India (ICAI), having qualified in 2010. With over 15 years of experience, he
                      brings deep expertise across Internal Audit, Statutory Audit, and Taxation.
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 font-sans">
                      His practice spans Direct and Indirect Taxation, FEMA Compliance, and audits
                      for corporates and banks. In 2011, he founded "Kishore & Co., Chartered
                      Accountants" to provide audit, assurance, advisory services, and consultancy
                      in Taxation, Business Advisory, Startup Support, CFO services, and Company Law
                      compliance.
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed font-sans">
                      His approach emphasises tailored solutions that go beyond compliance —
                      delivering strategic insight and proactive guidance to help businesses navigate
                      financial and regulatory complexity.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {['Statutory Audit', 'Direct Taxation', 'FEMA', 'CFO Services', 'Startup Advisory', 'Company Law', 'Tax Planning'].map(tag => (
                        <span key={tag} className="text-[10px] text-slate-400 border border-border px-2.5 py-1 font-sans tracking-wide uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Partner 2 */}
            <Reveal delay={0.1}>
              <div className="bg-white p-10 md:p-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <div className="md:col-span-3">
                    <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-4">
                      <span className="font-display text-white text-2xl">R</span>
                    </div>
                    <h3 className="font-sans font-semibold text-primary text-xl mb-1">Rakesh K A</h3>
                    <p className="text-slate-400 text-xs tracking-editorial uppercase font-sans mb-1">BCom, ACA</p>
                    <p className="text-slate-500 text-xs font-sans">Partner</p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 font-sans">
                      Rakesh K A is an Associate Member of the Institute of Chartered Accountants of
                      India (ICAI), having qualified in 2022. He brings expertise in Process Audits,
                      Financial Controls, International Taxation, and Statutory Audits.
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 font-sans">
                      His experience spans Statutory and Internal Audits, IFC (Internal Financial
                      Controls) and IND AS Implementation, and Direct and Indirect Tax Consulting.
                      Rakesh actively works with clients, overseeing planning, supervision, and
                      control of assignments.
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed font-sans">
                      He provides guidance on financial reporting, system improvements, and
                      strengthening internal controls — helping clients make better decisions through
                      stronger financial infrastructure.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {['IFC Audit', 'IND AS', 'International Taxation', 'Process Audit', 'Indirect Tax', 'Financial Controls'].map(tag => (
                        <span key={tag} className="text-[10px] text-slate-400 border border-border px-2.5 py-1 font-sans tracking-wide uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Registration details */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-x-12 gap-y-6 items-start">
            {[
              { label: 'Registration', value: 'ICAI FRN 013727S' },
              { label: 'Founded', value: 'December 2011' },
              { label: 'Office', value: 'Bengaluru, Karnataka' },
              { label: 'Email', value: 'info@krmn.in' },
              { label: 'Phone', value: '+91 80 4130 7010' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-slate-400 text-[10px] tracking-editorial uppercase font-sans mb-1">{label}</p>
                <p className="text-primary text-sm font-sans font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display font-normal text-white text-4xl md:text-5xl leading-tight mb-6">
                Let's talk about your business.
              </h2>
              <p className="text-white/50 text-base font-sans leading-relaxed mb-10">
                Whether you"re in the early stages or running an established enterprise,
                we'd welcome a conversation about how we can help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-sans font-medium px-6 py-3.5 hover:bg-white/90 transition-colors"
              >
                Get in Touch
                <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
