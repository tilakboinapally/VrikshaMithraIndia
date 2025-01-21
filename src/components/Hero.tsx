import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container relative z-10 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary-light text-white rounded-full"
        >
          Join Our Mission
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Growing a Greener Future Together
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          We're dedicated to environmental conservation through tree planting initiatives, education, and community engagement.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light transition-colors duration-300"
          >
            Become a Member
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};