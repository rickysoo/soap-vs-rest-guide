import Header from "@/components/header";
import Introduction from "@/components/introduction";
import ApiBasics from "@/components/api-basics";
import Comparison from "@/components/comparison";
import CodeExamples from "@/components/code-examples";
import InteractiveTesting from "@/components/interactive-testing";
import BestPractices from "@/components/best-practices";
import Glossary from "@/components/glossary";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Introduction />
      <ApiBasics />
      <Comparison />
      <CodeExamples />
      <InteractiveTesting />
      <BestPractices />
      <Glossary />
      <Footer />
    </div>
  );
}
