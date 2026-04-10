import { motion } from "framer-motion"
import { ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const BOOKING_URL = "https://cal.com/day-nguyen"

export function SuccessStories() {
  return (
    <section className="py-8 lg:py-12 bg-[#F8F7F4]" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#E85D04] uppercase tracking-wider mb-6"
            >
              Proven Results
            </motion.p>
          </div>
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

        {/* Main Success Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg mb-8"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative h-56 lg:h-auto lg:min-h-[320px] overflow-hidden">
              <img
                src="/success-story.jpg"
                alt="Startup team celebrating pipeline growth milestone"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-5 left-5">
                <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg">
                  <span className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-wide">Case Study</span>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-14">
              <h3
                className="text-2xl lg:text-3xl font-light text-[#1a1a1a] mb-8 leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                How a startup went from{" "}
                <span className="italic">zero outbound pipeline to 15+ qualified demos per month</span>{" "}
                in 30 days
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#E85D04] rounded-2xl p-6 text-white"
                >
                  <p className="text-4xl lg:text-5xl font-light mb-2">340%</p>
                  <p className="text-sm opacity-80">Pipeline increase in 60 days</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#F8F7F4] rounded-2xl p-6"
                >
                  <p className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-2">15+</p>
                  <p className="text-sm text-[#666]">Qualified demos per month</p>
                </motion.div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Built complete outbound infrastructure in week 1",
                  "First qualified demo booked within 14 days",
                  "Achieved 38% reply rate across target segments",
                  "Scaled to 15+ demos/month by day 30",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#555]">{item}</span>
                  </div>
                ))}
              </div>

              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E85D04] hover:text-[#D45A04] transition-colors">
                Build your growth engine
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-8 h-8 text-[#E85D04] mx-auto mb-6 opacity-60" />
            <p
              className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "Advan AI gave us the outbound infrastructure we never had the bandwidth to build internally. Within three weeks, we went from zero pipeline to 12 qualified demos on the calendar. It's become a core part of our revenue strategy."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E85D04]/20 flex items-center justify-center">
                <span className="text-[#E85D04] font-bold text-sm">EJ</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Emily Johnson</p>
                <p className="text-white/50 text-xs">CEO, B2B SaaS Startup</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
