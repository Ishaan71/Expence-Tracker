import React from "react";
import { TrendingUp } from "lucide-react";
import { TrendingDown } from 'lucide-react';
import { DollarSign } from 'lucide-react';

const SummaryCard = ({allData}) => {

  const income = allData.filter((item)=> item.status === "Income")
  .reduce((acc,item)=> acc+Number(item.Amount),0)


  const expense = allData.filter((item)=> item.status === "Expense")
  .reduce((acc,item)=> acc+Number(item.Amount),0)


  //  const incomeAmount =()=>{
  //   return income.reduce((acc,item)=>{
  //     return acc+Number(item.Amount)},0)
  //  }

  //  const expense = allData.filter((item)=>{
  //   return item.status === "Expense"
  //  })
  //  const expenseAmount =()=>{
  //   return expense.reduce((acc,item)=>{
  //     return acc+Number(item.Amount)
  //   },0)
  //  }
  return (
    <div className="text-white  grid grid-cols-3 gap-10 mt-20">
      <div className=" flex items-center justify-between p-5 w-full rounded-2xl bg-gradient-to-r border shadow-xl border-emerald-500/20  from-emerald-500/10 to-emerald-600/10 ">
        <div className="">
          <p className="font-medium text-emerald-300">Total Income</p>
          <p className="text-xl font-bold text-emerald-400">${income}</p>
        </div>
        <div className="p-3 bg-emerald-400/10 rounded-2xl">
          <TrendingUp className=" text-emerald-400" size={32} />
        </div>
      </div>
      <div className=" flex items-center justify-between p-5 w-full rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 ">
        <div className="">
          <p className="font-medium text-red-300">Total Expense</p>
          <p className="text-xl font-bold text-red-400">${expense}</p>
        </div>
        <div className="p-3 bg-red-400/10 rounded-2xl">
          <TrendingDown className=" text-red-400" size={32} />
        </div>
      </div>
      <div className=" flex items-center justify-between p-5 w-full rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 ">
        <div className="">
          <p className="font-medium text-red-300">Total Networth</p>
          <p className="text-xl font-bold text-red-400">${income - expense}</p>
        </div>
        <div className="p-3 bg-red-400/10 rounded-2xl">
          <DollarSign className=" text-red-400" size={32} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
