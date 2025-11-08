import React from "react";
import { Wallet } from "lucide-react";

const Header = () => {
  return (
    <div className="text-center flex flex-col relative top-10 items-center text-white">
      <div className="bg-gradient-to-r from-blue-600/50 to-cyan-400/50 border border-blue-400/30 p-2 rounded-2xl">
        <Wallet size={80} color="white" />
      </div>
      <h1 className="text-3xl mt-2">Expense Tracker</h1>
      <p>Store Your Finance</p>
    </div>
  );
};

export default Header;
