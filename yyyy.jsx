 {/* -------- Monthly Summary -------- */}
      <div className="mt-10 glass-card bg-white/70 dark:bg-[#2C2C3A]/80 border border-indigo-100 dark:border-[#3D3A64] p-6 rounded-2xl shadow-lg hover:shadow-xl max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-[#632ee3] dark:text-[#8C7BFF]">
          📅 Monthly Summary
        </h2>
        {monthlyLoading ? (
          <p className="text-gray-500 dark:text-[#B0B3C6] text-sm">Loading chart...</p>
        ) : (
          <div className="flex justify-center">
            <BarChart width={700} height={300} data={monthlyReport}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" stroke="#6B6B82" />
              <YAxis stroke="#6B6B82" />
              <Tooltip
                contentStyle={{  borderRadius: 8, color: "#2C2C3A" }}
              />
              <Bar dataKey="totalAmount" fill="#1cdcee" radius={[6, 6, 0, 0]} />
            </BarChart>
          </div>
        )}
      </div>