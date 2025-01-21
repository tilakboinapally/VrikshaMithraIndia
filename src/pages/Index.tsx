import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { GetInvolved } from "@/components/GetInvolved";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Programs />
      <GetInvolved />
    </main>
  );
};

export default Index;