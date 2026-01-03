import Banner from "../../components/Home/Banner";
import BudgetingTips from "../../components/Home/BudgetingTips";
import FAQ from "../../components/Home/FAQ";
import FinanceTips from "../../components/Home/FinanceTips";
import FinancialPlanning from "../../components/Home/FinancialPlanning";
import Highlights from "../../components/Home/Highlights";
import Overview from "../../components/Home/Overview";
import Statistics from "../../components/Home/Statistics";
import TrustBy from "../../components/Home/TrustBy";

const Home = () => {
  document.title = "FinEase";
  // alternet title <title>{`Services | ${serviceId}`}</title>
  return (
    <div className="space-y-16">
      <Banner />
      <Overview />

      <BudgetingTips />
      <Statistics />

      <FinancialPlanning />
      <Highlights />

      <FinanceTips />
      <TrustBy />
      <FAQ />
    </div>
  );
};

export default Home;
