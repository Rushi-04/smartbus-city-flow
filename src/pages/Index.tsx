import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/ImpactSection";
import DemoSection from "@/components/DemoSection";
import AdminDashboard from "@/components/AdminDashboard";
import VehicleStatus from "@/components/VehicleStatus";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* <ProblemSection /> */}
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ImpactSection />
        <DemoSection />
        <AdminDashboard />
        <VehicleStatus />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
