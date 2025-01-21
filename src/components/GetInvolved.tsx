import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const GetInvolved = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Get Involved
          </h2>
          <p className="text-gray-700 mb-8">
            There are many ways to contribute to our mission. Whether through
            volunteering, donations, or spreading awareness, your support makes a
            difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light transition-colors duration-300"
            >
              Volunteer Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Make a Donation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};