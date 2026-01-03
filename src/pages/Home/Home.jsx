import Banner from "../../components/Home/Banner";
import BudgetingTips from "../../components/Home/BudgetingTips";
import FAQ from "../../components/Home/FAQ";
import FinanceTips from "../../components/Home/FinanceTips";
import FinancialPlanning from "../../components/Home/FinancialPlanning";

import Overview from "../../components/Home/Overview";
import Statistics from "../../components/Home/Statistics";
import TrustBy from "../../components/Home/TrustBy";

const Home = () => {
  document.title = "FinEase";
  // alternet title <title>{`Services | ${serviceId}`}</title>
  return (
    <div className="space-y-16 ">
      <Banner />
      <div className="space-y-16 max-w-7xl mx-auto ">
        <Overview />

      <BudgetingTips />
      <Statistics />

      <FinancialPlanning />
      <FinanceTips />

      <TrustBy />
      <FAQ />
      </div>
    </div>
  );
};

export default Home;
