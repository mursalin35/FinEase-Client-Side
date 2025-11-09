const BudgetingTips = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Budgeting Tips</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white border shadow rounded-xl">
          <h4 className="font-semibold text-lg mb-2">Track Your Spending</h4>
          <p className="text-gray-600">
            Monitor daily expenses to identify unnecessary spending and improve budgeting discipline.
          </p>
        </div>

        <div className="p-6 bg-white border shadow rounded-xl">
          <h4 className="font-semibold text-lg mb-2">Follow The 50/30/20 Rule</h4>
          <p className="text-gray-600">
            Allocate 50% to needs, 30% to wants, and save the remaining 20% for future goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BudgetingTips;
