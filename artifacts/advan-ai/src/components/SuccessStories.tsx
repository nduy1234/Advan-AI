import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const BOOKING_URL = "https://cal.com/day-nguyen"

const stats = [
  { value: "340%", label: "Pipeline increase in 60 days", orange: true },
  { value: "15+", label: "Qualified demos booked monthly", orange: false },
  { value: "92%", label: "Email deliverability rate", orange: false },
  { value: "$0", label: "Paid until results delivered", orange: false },
]

export function SuccessStories() {
  return (
    <section className="py-8 lg:py-12 bg-[#F8F7F4]" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-[#E85D04] uppercase tracking-wider"
          >
            Proven Results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="outline"
              asChild
              className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent rounded-full px-6"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                See your growth potential
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl p-6 ${stat.orange ? "bg-[#E85D04]" : "bg-white"}`}
            >
              <p className={`text-4xl lg:text-5xl font-light mb-2 ${stat.orange ? "text-white" : "text-[#E85D04]"}`}>
                {stat.value}
              </p>
              <p className={`text-sm leading-snug ${stat.orange ? "text-white/80" : "text-[#666]"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p
            className="text-lg lg:text-xl text-[#444] leading-relaxed italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            "Advan AI completely transformed our outbound. We went from struggling to book a single demo to having a predictable pipeline that fuels our Series A growth. The ROI has been incredible."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
