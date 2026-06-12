import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react'

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

const serviceOptions = [
  'Audit & Assurance',
  'Direct Tax',
  'Indirect Tax',
  'CFO & Financial Advisory',
  'Corporate Law',
  'Valuation Services',
  'Startup Advisory',
  'Regulatory Compliance',
  'Other / Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to a form backend
    setSubmitted(true)
  }

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
            <p className="text-white/40 text-xs tracking-editorial uppercase mb-4 font-sans">Get in touch</p>
            <h1 className="font-display font-normal text-white text-4xl md:text-6xl leading-tight max-w-2xl mb-6">
              Let's start a<br />
              <em className="italic font-normal text-white/60">conversation.</em>
            </h1>
            <p className="text-white/50 text-base font-sans font-light leading-relaxed max-w-lg">
              Share your situation and we'll follow up to schedule a consultation at your convenience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left — contact info */}
            <Reveal className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="w-8 h-px bg-slate-300 mb-6" />
                <p className="text-slate-400 text-xs tracking-editorial uppercase mb-8 font-sans">Contact details</p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={13} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] tracking-editorial uppercase font-sans mb-1">Email</p>
                      <a href="mailto:info@krmn.in" className="text-primary text-sm font-sans hover:text-accent transition-colors">info@krmn.in</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={13} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] tracking-editorial uppercase font-sans mb-1">Phone</p>
                      <a href="tel:+918041307010" className="text-primary text-sm font-sans hover:text-accent transition-colors block">+91 80 4130 7010</a>
                      <a href="tel:+919036635523" className="text-primary text-sm font-sans hover:text-accent transition-colors block">+91 90366 35523</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={13} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] tracking-editorial uppercase font-sans mb-1">Office</p>
                      <p className="text-slate-600 text-sm font-sans leading-relaxed">
                        No.1231, Flat F01,<br />
                        Sai Krishna Residency,<br />
                        48th Cross, 37th Main,<br />
                        Poornapragna Layout,<br />
                        Bengaluru – 560 061
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={13} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] tracking-editorial uppercase font-sans mb-1">Working Hours</p>
                      <p className="text-slate-600 text-sm font-sans">Mon – Sat: 9:30 AM – 6:30 PM</p>
                      <p className="text-slate-400 text-xs font-sans mt-1">IST (India Standard Time)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-slate-400 text-[10px] tracking-editorial uppercase font-sans mb-2">Registration</p>
                  <p className="text-slate-500 text-xs font-sans">ICAI Firm Registration No. 013727S</p>
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.1} className="lg:col-span-8">
              {submitted ? (
                <div className="border border-border p-12 text-center">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <ArrowUpRight size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-normal text-primary text-2xl mb-3">Thank you.</h3>
                  <p className="text-slate-500 text-sm font-sans leading-relaxed max-w-sm mx-auto">
                    We've received your enquiry. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                    {/* Name */}
                    <div className="bg-white p-0">
                      <label className="block">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Full Name *</span>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-primary placeholder-slate-300 border-0 outline-none focus:bg-surface transition-colors"
                        />
                      </label>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-0">
                      <label className="block">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Email Address *</span>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-primary placeholder-slate-300 border-0 outline-none focus:bg-surface transition-colors"
                        />
                      </label>
                    </div>

                    {/* Phone */}
                    <div className="bg-white p-0">
                      <label className="block">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Phone Number</span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-primary placeholder-slate-300 border-0 outline-none focus:bg-surface transition-colors"
                        />
                      </label>
                    </div>

                    {/* Company */}
                    <div className="bg-white p-0">
                      <label className="block">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Company / Organisation</span>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-primary placeholder-slate-300 border-0 outline-none focus:bg-surface transition-colors"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="bg-white border-t border-border p-0">
                    <label className="block">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Area of Interest</span>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-slate-600 border-0 outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select a service area...</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Message */}
                  <div className="bg-white border-t border-border p-0">
                    <label className="block">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Tell us about your situation</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Briefly describe what you are looking for and how we can help..."
                        className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-primary placeholder-slate-300 border-0 outline-none resize-none focus:bg-surface transition-colors"
                      />
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-sans font-medium px-8 py-4 hover:bg-secondary transition-colors"
                    >
                      Send Enquiry
                      <ArrowUpRight size={15} />
                    </button>
                    <p className="text-slate-400 text-xs font-sans mt-4">
                      We respond within one business day. Your information is kept strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ-style expectations */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-12 font-sans">What to expect</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                step: '01',
                title: 'Initial discussion',
                desc: 'We begin with a brief conversation to understand your situation, goals, and what you need. No pressure, no sales pitch.',
              },
              {
                step: '02',
                title: 'Scoping the engagement',
                desc: 'We define the scope of work clearly, with transparent pricing and timelines agreed upfront before any engagement begins.',
              },
              {
                step: '03',
                title: 'Delivery with senior involvement',
                desc: 'Partners are directly involved in your engagement. You will work with experienced professionals, not junior staff.',
              },
            ].map(({ step, title, desc }) => (
              <Reveal key={step}>
                <div className="bg-white p-10">
                  <p className="font-mono text-[10px] text-slate-300 mb-5">{step}</p>
                  <h3 className="font-sans font-semibold text-primary text-sm mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
