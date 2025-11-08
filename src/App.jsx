import React, { useEffect } from "react";
import Header from "./Componants/Header";
import SummaryCard from "./Componants/SummaryCard";
import AddExpenseForm from "./Componants/AddExpenseForm";
import Transactions from "./Componants/Transactions";
import { useState } from "react";

const App = () => {
  const [box, setbox] = useState("All")
 const stored=JSON.parse(localStorage.getItem("allData"))  
  const [allData, setallData] = useState(stored ||[])
  useEffect(() => {
     localStorage.setItem( "allData",JSON.stringify(allData))
  }, [allData]) 

const handleDelete =(removeData)=>{
  const update = allData.filter((data)=> data !== removeData)
  setallData(update)
}
 const handleBox =(boxStatus)=>{
  return setbox(boxStatus)
 }
  console.log("allData id:",allData)
  return (
    <div className="min-h-screen  bg-gradient-to-r via-purple-500/10 ">
      {/* Full background */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Content center limit */}
        <Header />
        <SummaryCard allData={allData} />
        <div className=" flex gap-3">
          <AddExpenseForm setallData={setallData} />
          <Transactions handleBox={handleBox} box={box} allData={allData} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default App;
