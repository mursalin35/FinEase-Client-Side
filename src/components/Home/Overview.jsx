import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Overview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [stats, setStats] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/reports/overview?email=${user.email}`)
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, [user]);

  const { totalBalance, totalIncome, totalExpense } = stats;

  const cards = [
    {
      title: "Total Balance",
      value: totalBalance,
      icon: <FaWallet className="text-green-600 w-6 h-6" />,
      color: "green",
    },
    {
      title: "Total Income",
      value: totalIncome,
      icon: <FaArrowDown className="text-blue-600 w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Total Expenses",
      value: totalExpense,
      icon: <FaArrowUp className="text-red-600 w-6 h-6" />,
      color: "red",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 mt-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-base-200 shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 relative overflow-hidden`}
        >
          <div className="absolute top-4 right-4">{card.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className={`text-2xl font-bold text-${card.color}-600`}>
            ${card.value.toFixed(2)}
          </p>
          <div className="mt-2 text-gray-500 text-sm">
            {/* Optional: You can add percentage change or small chart here */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Overview;
