import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Upload, FileText, Users, GraduationCap, Clock, X, CheckCircle2 } from 'lucide-react'

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

const culturePoints = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    desc: 'Work alongside experienced professionals who value knowledge sharing and mentorship. Every engagement is a learning opportunity.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Growth',
    desc: 'We invest in our people. Regular training, workshops, and full support for professional certifications including CA, CPA, and ACCA.',
  },
  {
    icon: Clock,
    title: 'Balanced by Design',
    desc: 'We believe great work comes from balanced lives. Flexible schedules and a culture that respects your time beyond the office.',
  },
]

const perks = [
  'Competitive compensation',
  'Certification support',
  'Mentorship programme',
  'Flexible working hours',
  'Health insurance',
  'Continuous learning budget',
]

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  })
  const [resume, setResume] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setResume(file)
    }
  }

  const removeFile = () => {
    setResume(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
            <p className="text-white/40 text-xs tracking-editorial uppercase mb-4 font-sans">Join Us</p>
            <h1 className="font-display font-normal text-white text-4xl md:text-6xl leading-tight max-w-2xl mb-6">
              Build a career<br />
              <em className="italic font-normal text-white/60">with substance.</em>
            </h1>
            <p className="text-white/50 text-base font-sans font-light leading-relaxed max-w-xl">
              We are always looking for talented individuals who share our commitment to
              excellence, integrity, and meaningful client work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Why KRMN</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16 max-w-xl">
              More than a workplace.<br />
              <em className="italic font-normal text-slate-500">A place to grow.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {culturePoints.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="bg-white p-8 md:p-10 group hover:bg-surface transition-colors duration-200 h-full">
                  <div className="w-9 h-9 border border-border flex items-center justify-center mb-5 group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors">
                    <Icon size={16} className="text-slate-400 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary text-base mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <Reveal className="lg:col-span-4">
              <div className="w-8 h-px bg-slate-300 mb-6" />
              <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Benefits</p>
              <h2 className="font-display font-normal text-primary text-3xl md:text-4xl leading-tight">
                What we offer.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                {perks.map((perk) => (
                  <div key={perk} className="bg-white px-6 py-5 flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span className="text-slate-600 text-sm font-sans">{perk}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Open Positions</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16 max-w-xl">
              Current openings.
            </h2>
          </Reveal>

          <Reveal>
            <div className="border border-border p-12 md:p-16 text-center">
              <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto mb-6">
                <FileText size={20} className="text-slate-300" />
              </div>
              <h3 className="font-display font-normal text-primary text-2xl mb-3">No open positions right now.</h3>
              <p className="text-slate-500 text-sm font-sans leading-relaxed max-w-md mx-auto mb-8">
                We don't have any specific openings at the moment, but we're always interested
                in hearing from talented professionals. Submit a general application below.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-accent text-sm font-sans font-medium hover:underline"
              >
                Submit your resume <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left — info */}
            <Reveal className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="w-8 h-px bg-slate-300 mb-6" />
                <p className="text-slate-400 text-xs tracking-editorial uppercase mb-8 font-sans">General Application</p>
                <p className="text-slate-600 text-sm font-sans leading-relaxed mb-6">
                  Interested in joining KRMN & Associates? Send us your resume and a brief note
                  about yourself. We'll keep your details on file and reach out when a suitable
                  opportunity arises.
                </p>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Your information is treated with the same confidentiality we bring to every client engagement.
                </p>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.1} className="lg:col-span-8">
              {submitted ? (
                <div className="border border-border bg-white p-12 text-center">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-normal text-primary text-2xl mb-3">Application received.</h3>
                  <p className="text-slate-500 text-sm font-sans leading-relaxed max-w-sm mx-auto">
                    Thank you for your interest. We've received your application and will review it carefully.
                    We'll be in touch if there's a suitable opportunity.
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
                          placeholder="you@email.com"
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

                    {/* Position interest */}
                    <div className="bg-white p-0">
                      <label className="block">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Area of Interest</span>
                        <select
                          name="position"
                          value={form.position}
                          onChange={handleChange}
                          className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-slate-600 border-0 outline-none appearance-none cursor-pointer"
                        >
                          <option value="">Select an area...</option>
                          <option value="Audit & Assurance">Audit & Assurance</option>
                          <option value="Direct Tax">Direct Tax</option>
                          <option value="Indirect Tax">Indirect Tax</option>
                          <option value="CFO Advisory">CFO & Financial Advisory</option>
                          <option value="Corporate Law">Corporate Law</option>
                          <option value="General">General / Not sure yet</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Resume upload */}
                  <div className="bg-white border-t border-border p-0">
                    <div className="px-5 pt-5 pb-1">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans">Resume / CV (PDF)</span>
                    </div>
                    <div className="px-5 pb-5">
                      {resume ? (
                        <div className="flex items-center gap-3 border border-border px-4 py-3">
                          <FileText size={16} className="text-accent shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-sans text-primary truncate">{resume.name}</p>
                            <p className="text-[10px] text-slate-400 font-sans">
                              {(resume.size / 1024).toFixed(0)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-slate-400 hover:text-primary transition-colors p-0.5"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full flex items-center gap-3 border border-dashed border-slate-300 px-4 py-6 hover:border-accent/40 hover:bg-accent/[0.02] transition-colors cursor-pointer"
                        >
                          <Upload size={16} className="text-slate-400" />
                          <span className="text-sm text-slate-400 font-sans">Click to upload PDF</span>
                        </button>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Cover note */}
                  <div className="bg-white border-t border-border p-0">
                    <label className="block">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-editorial font-sans px-5 pt-5 pb-1">Brief cover note</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about yourself, your experience, and what kind of role you're looking for..."
                        className="w-full px-5 pb-5 pt-0 bg-transparent text-sm font-sans text-primary placeholder-slate-300 border-0 outline-none resize-none focus:bg-surface transition-colors"
                      />
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-sans font-medium px-8 py-4 hover:bg-secondary transition-colors"
                    >
                      Submit Application
                      <ArrowUpRight size={15} />
                    </button>
                    <p className="text-slate-400 text-xs font-sans mt-4">
                      All applications are reviewed personally by the partners. We respond to every submission.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="w-8 h-px bg-slate-300 mb-6" />
            <p className="text-slate-400 text-xs tracking-editorial uppercase mb-3 font-sans">Our Process</p>
            <h2 className="font-display font-normal text-primary text-4xl md:text-5xl leading-tight mb-16 max-w-xl">
              What to expect.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                step: '01',
                title: 'Application review',
                desc: 'Every resume is reviewed personally by the partners. We look for curiosity, rigour, and a genuine interest in the work we do.',
              },
              {
                step: '02',
                title: 'Conversation',
                desc: 'A relaxed, two-way conversation to understand your background, goals, and whether there is a mutual fit.',
              },
              {
                step: '03',
                title: 'Joining the team',
                desc: 'A structured onboarding with mentorship from day one. You will be working on real engagements from the start.',
              },
            ].map(({ step, title, desc }, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <div className="bg-white p-10">
                  <p className="font-mono text-[10px] text-slate-300 mb-5">{step}</p>
                  <h3 className="font-sans font-semibold text-primary text-base mb-3">{title}</h3>
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
