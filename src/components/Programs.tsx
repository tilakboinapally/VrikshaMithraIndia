import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Urban Forestry",
    description: "Creating green spaces in urban areas through strategic tree planting.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    title: "Community Engagement",
    description: "Empowering communities through environmental education and workshops.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Biodiversity Conservation",
    description: "Protecting and preserving local ecosystems and wildlife habitats.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

export const Programs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference through our various initiatives
            and programs focused on environmental conservation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};