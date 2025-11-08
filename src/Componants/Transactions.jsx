import React from "react";
import TranseCard from "./TranseCard";

const Transactions = ({ allData, handleDelete, handleBox, box }) => {
  const filteredData =
    box === "All" ? allData : allData.filter((item) => item.status === box);
  return (
    <div className="mt-5 border px-3 py-4 border-white/40 w-full rounded-2xl max-h-[550px] overflow-y-auto ">
      <div className="flex gap-2 h-1/9 p-1  rounded-md  shadow-2xl shadow-purple-500/10">
        <div
          className={`flex justify-center items-center  w-full ${
            box === "All"
              ? "bg-gray-600/20"
              : "bg-gradient-to-r from-purple-500/40 via-pink-500/50 to-red-600/40"
          }  rounded-md text-gray-300`}
          onClick={() => handleBox("All")}
        >
          All
        </div>
        <div
          className={`flex justify-center items-center w-full ${
            box === "Income"
              ? "bg-gray-600/20"
              : "bg-gradient-to-r from-purple-500/40 via-pink-500/50 to-red-600/40"
          }  rounded-md text-gray-300`}
          onClick={() => handleBox("Income")}
        >
          Income
        </div>
        <div
          className={`flex justify-center items-center w-full ${
            box === "Expense"
              ? "bg-gray-600/20"
              : "bg-gradient-to-r from-purple-500/40 via-pink-500/50 to-red-600/40"
          }  rounded-md text-gray-300`}
          onClick={() => handleBox("Expense")}
        >
          Expense
        </div>
      </div>

      <TranseCard
        handleBox={handleBox}
        box={box}
        allData={filteredData}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Transactions;
