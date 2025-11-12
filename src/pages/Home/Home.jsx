import Banner from "../../components/Home/Banner";
import BudgetingTips from "../../components/Home/BudgetingTips";
import FinancialPlanning from "../../components/Home/FinancialPlanning";
import Overview from "../../components/Home/Overview";


const Home = () => {
  document.title="FinEase"
    // alternet title <title>{`Services | ${serviceId}`}</title>
  return (
    <div className="space-y-16">
      <Banner />
      <Overview />
      <BudgetingTips />
      <FinancialPlanning />
    </div>
  );
};

export default Home;
