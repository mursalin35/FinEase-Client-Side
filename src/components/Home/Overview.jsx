// const Overview = ({ totalBalance = 0, totalIncome = 0, totalExpense = 0 }) => {}
import React from 'react';

const Overview = () => {
    return (
     <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
        <p className="text-2xl font-bold text-green-600">totalBalance</p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h3 className="text-lg font-semibold mb-2">Total Income</h3>
        <p className="text-2xl font-bold text-blue-600">totalIncome</p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h3 className="text-lg font-semibold mb-2">Total Expenses</h3>
        <p className="text-2xl font-bold text-red-600">totalExpense</p>
      </div>
    </section>
    );
};

export default Overview;