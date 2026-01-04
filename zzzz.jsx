{/* Monthly Summary */}
<div
  className="mt-10 glass-card bg-white/70 dark:bg-[#2C2C3A]/80
  border border-indigo-100 dark:border-[#3D3A64]
  p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl
  max-w-5xl mx-auto"
>
  <h2 className="text-lg font-semibold mb-4 text-[#632ee3] dark:text-[#8C7BFF]">
    📅 Monthly Summary
  </h2>

  {monthlyLoading ? (
    <p className="text-gray-500 dark:text-[#B0B3C6] text-sm">
      Loading chart...
    </p>
  ) : (
    <div className="w-full h-[260px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={monthlyReport}
          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis
            dataKey="_id"
            stroke="#6B6B82"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke="#6B6B82"
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(99,46,227,0.08)" }}
            contentStyle={{
              borderRadius: 10,
              border: "none",
              backgroundColor: "#fff",
            }}
          />
          <Bar
            dataKey="totalAmount"
            fill="#12d0e6"
            radius={[8, 8, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )}
</div>
