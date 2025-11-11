const FinancialPlanning = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
          <span className="text-[#1F1F2E]">Why Financial</span> Planning Matters
        </h2>
        <div className="h-1 w-52 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
      </div>

      {/* Card */}
      <div className="p-6 bg-white backdrop-blur border border-[#d2cef8] shadow-[0_4px_20px_rgba(99,46,227,0.1)] rounded-xl">
        <p className="text-[#6B6B82] leading-relaxed text-lg">
          Financial planning helps you set clear goals, reduce financial stress, and build
          long-term stability. By understanding your spending habits and setting realistic
          savings targets, you can ensure a more secure and confident financial future.
        </p>
      </div>
    </section>
  );
};

export default FinancialPlanning;
