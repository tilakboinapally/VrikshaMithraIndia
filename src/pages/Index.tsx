import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { GetInvolved } from "@/components/GetInvolved";
import NavigationBar from "@/components/NavigationBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <Hero />
      <Stats />
      <Programs />
      <GetInvolved />
    </main>
  );
};

export default Index;