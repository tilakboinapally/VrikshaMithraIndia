import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "Trees Planted" },
  { number: "50+", label: "Communities Served" },
  { number: "1000+", label: "Volunteers" },
  { number: "20+", label: "Active Programs" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-light">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};