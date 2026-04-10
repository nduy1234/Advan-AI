import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    number: "01",
    title: "AI Outbound",
    description: "Generate predictable pipeline on autopilot. We source ideal prospects, personalize outreach with AI, manage deliverability, and book qualified meetings directly to your calendar.",
    result: "Fill your pipeline with qualified leads.",
    color: "#E85D04",
    items: [
      "ICP-based lead sourcing",
      "AI-personalized email sequences",
      "Automated follow-ups",
      "Qualified meetings booked for your team",
    ],
  },
  {
    number: "02",
    title: "AI Reactivation",
    description: "Unlock revenue already in your database. We identify dormant leads and past opportunities, re-engage them with AI-driven campaigns, and route interested prospects back to sales.",
    result: "Monetize your existing database with intelligent re-engagement.",
    color: "#7c3aed",
    items: [
      "Database segmentation & scoring",
      "AI re-engagement campaigns",
      "Multi-touch follow-up automation",
      "Qualification & meeting routing",
    ],
  },
  {
    number: "03",
    title: "AI Conversion",
    description: "Turn website traffic into booked meetings. We qualify visitors in real time, automate follow-up, and drive high-intent prospects directly into your calendar.",
    result: "Capture and convert inbound demand automatically.",
    color: "#059669",
    items: [
      "Real-time visitor qualification",
      "AI chat & booking assistant",
      "Automated meeting scheduling",
      "CRM tagging & routing",
    ],
  },
]

const DURATION = 4500

export function NewStandardSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimers = () => {
    setProgress(0)
    clearInterval(intervalRef.current!)
    clearInterval(progressRef.current!)

    const startTime = Date.now()
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      setProgress(Math.min((elapsed / DURATION) * 100, 100))
    }, 30)

    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % features.length)
    }, DURATION)
  }

  useEffect(() => {
    if (!paused) startTimers()
    return () => {
      clearInterval(intervalRef.current!)
      clearInterval(progressRef.current!)
    }
  }, [paused, active])

  const handleTabClick = (i: number) => {
    setActive(i)
    startTimers()
  }

  const current = features[active]

  return (
    <section
      id="platform"
      className="py-12 lg:py-20 bg-white relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-[#E85D04] uppercase tracking-wider mb-4"
          >
            A New Standard for B2B Revenue Growth
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-[#1a1a1a] leading-[1.2] mb-6 text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A fully managed AI Growth Engine that delivers qualified sales meetings and predictable pipeline.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Tabs */}
          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.button
                key={f.title}
                onClick={() => handleTabClick(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  active === i
                    ? "bg-white border-[#ece9e4] shadow-lg"
                    : "bg-[#F8F7F4] border-transparent hover:border-[#ece9e4]"
                }`}
              >
                {active === i && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: f.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: "linear" }}
                  />
                )}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#999]">{f.number}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1a1a1a]">{f.title}</p>
                    {active === i && (
                      <p className="text-sm text-[#666] mt-1 leading-relaxed line-clamp-2">{f.description}</p>
                    )}
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: active === i ? f.color : "#ddd" }}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="bg-[#F8F7F4] rounded-3xl p-8 min-h-[360px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                  style={{ backgroundColor: `${current.color}15`, color: current.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: current.color }} />
                  {current.title}
                </div>

                <h3
                  className="text-2xl lg:text-3xl font-light text-[#1a1a1a] mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {current.description}
                </h3>

                <div
                  className="inline-block text-sm font-medium px-4 py-2 rounded-xl mb-8"
                  style={{ backgroundColor: `${current.color}12`, color: current.color }}
                >
                  <span className="font-bold">Result:</span> {current.result}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-[#ece9e4]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        strokeWidth={2}
                        style={{ color: current.color }}
                      />
                      <span className="text-sm text-[#1a1a1a] font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
