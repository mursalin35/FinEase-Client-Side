const BudgetingTips = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#1F1F2E]">
          Budgeting Tips
        </h2>
        <div className="h-1 w-32 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white/90 backdrop-blur border border-[#E2E0F5] shadow-[0_4px_20px_rgba(99,46,227,0.1)] rounded-xl">
          <h4 className="font-semibold text-lg mb-2 text-[#2E1F47]">
            Track Your Spending
          </h4>
          <p className="text-[#6B6B82] leading-relaxed">
            Monitor daily expenses to identify unnecessary spending and improve budgeting discipline.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white/90 backdrop-blur border border-[#E2E0F5] shadow-[0_4px_20px_rgba(99,46,227,0.1)] rounded-xl">
          <h4 className="font-semibold text-lg mb-2 text-[#2E1F47]">
            Follow The 50/30/20 Rule
          </h4>
          <p className="text-[#6B6B82] leading-relaxed">
            Allocate 50% to needs, 30% to wants, and save the remaining 20% for future goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BudgetingTips;
