const Overview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1F1F2E] dark:text-white">
        Dashboard Overview
      </h1>

      <p className="mt-2 text-[#6B6B82] dark:text-gray-400">
        Track your finances and performance at a glance
      </p>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Total Balance", value: "$12,450" },
          { title: "Monthly Income", value: "$3,200" },
          { title: "Expenses", value: "$1,850" },
        ].map((stat) => (
          <div
            key={stat.title}
            className="p-6 rounded-xl bg-white dark:bg-[#12121A] shadow-sm"
          >
            <p className="text-sm text-[#6B6B82]">{stat.title}</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F1F2E] dark:text-white">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
