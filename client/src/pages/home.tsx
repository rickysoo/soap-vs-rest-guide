import Header from "@/components/header";
import Introduction from "@/components/introduction";
import Comparison from "@/components/comparison";
import CodeExamples from "@/components/code-examples";
import InteractiveTesting from "@/components/interactive-testing";
import BestPractices from "@/components/best-practices";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Introduction />
      <Comparison />
      <CodeExamples />
      <InteractiveTesting />
      <BestPractices />
      <Footer />
    </div>
  );
}
