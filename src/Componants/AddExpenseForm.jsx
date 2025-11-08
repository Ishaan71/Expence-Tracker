import React, { useRef } from "react";
import { Plus, Slice } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { TrendingDown } from "lucide-react";
import { useState } from "react";

const AddExpenseForm = ({setallData }) => {
  const deskRef = useRef(null);
  const amountRef = useRef(null);
  const cateRef = useRef(null);
  const dateRef = useRef(null);
  const addRef = useRef(null);
  const [formdata, setformdata] = useState({
    Description: "",
    Amount: "",
    Category: "Salary",
    Date: "",
    status: "Income",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => {
      return {
        ...prev,
        [name]:
          name === "Description"
            ? value.charAt(0).toUpperCase() + value.slice(1)
            : name === "Amount"
            ? parseFloat(value) || ""
            : value,
      };
    });
  };

  const handleSubmit = () => {
    if (
      formdata.Description.trim() === "" ||
      !formdata.Amount ||
      formdata.Category.trim() === "" ||
      formdata.Date.trim() === "" ||
      formdata.status === ""
    ) {
      return alert("Fill The Form");
    }
    console.log("formDta is :", formdata);

    setallData((prev) => {
      return [...prev, formdata];
    });

    setformdata({
      Description: "",
      Amount: "",
      Category: "Salary",
      Date: "",
      status: "Income",
    });
  };
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (nextRef && nextRef.current) {
        nextRef.current.focus(); 
      } else {
        handleSubmit(); 
      }
    }
  };

  const handlestatus = (statusName) => {
    setformdata((prev) => {
      return { ...prev, status: statusName };
    });
  };

  return (
    <div className="p-5 flex flex-col border w-full max-w-[320px] min-w-[300px] max-h-[550px]   border-white/40 rounded-2xl mt-5 gap-3">
      <div className=" flex gap-2 items-center">
        <div className="p-1  rounded-md border border-purple-500/50">
          <Plus />
        </div>
        <p>Add New Enter</p>
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Entry Type</label>
        <div className=" flex justify-between gap-2">
          <button
            onClick={() => {
              handlestatus("Income");
            }}
            className={`${
              formdata.status === "Income"
                ? "bg-gray-600/20  "
                : "border border-emerald-500/20  bg-gradient-to-r  from-emerald-500/10 to-emerald-600/10 text-emerald-400 "
            }py-2  px-4   flex gap-2 rounded-md items-center justify-center flex-1 `}
          >
            <TrendingUp />
            Income
          </button>
          <button
            onClick={() => {
              handlestatus("Expense");
            }}
            className={`${
              formdata.status === "Expense"
                ? "bg-gray-600/20"
                : "bg-gradient-to-r border  border-red-500/20 from-red-500/10 to-red-600/10 text-red-400"
            }   py-2 px-4 flex gap-2 rounded-md items-center    justify-center flex-1 `}
          >
            <TrendingDown />
            Expense
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-2">
        <label htmlFor="">Description</label>
        <input
          name="Description"
          ref={deskRef}
          onKeyDown={(e) => {
            handleKeyDown(e, amountRef);
          }}
          value={formdata.Description}
          onChange={handleChange}
          type="text"
          className="py-2 outline-0 px-4 border border-white/20 rounded-xl"
          placeholder="What's This For"
        />
      </div>
      <div className=" grid grid-cols-1 gap-2">
        <label htmlFor="">Amount</label>
        <input
          name="Amount"
          value={formdata.Amount}
          onChange={handleChange}
          ref={amountRef}
          onKeyDown={(e) => {
            handleKeyDown(e, cateRef);
          }}
          min={1}
          type="number"
          className="py-2 outline-0 px-4 border border-white/20 rounded-xl"
          placeholder="What's This For"
        />
      </div>
      <div className=" grid grid-cols-1 gap-2">
        <label htmlFor="">Category</label>
        <select
          name="Category"
          value={formdata.Category}
          onChange={handleChange}
          ref={cateRef}
          onKeyDown={(e) => {
            handleKeyDown(e, dateRef);
          }}
          className="
        bg-black py-2 outline-0 px-4 border border-white/20 rounded-xl "
        >
          <option value="Salary">Salary</option>
          <option value="Freelace">Freelance</option>
          <option value="Gift">Gift</option>
          <option value="Wifi Bill">Wifi Bill</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className=" grid grid-cols-1 gap-2">
        <label htmlFor="">Date</label>
        <input
          name="Date"
          value={formdata.Date}
          onChange={handleChange}
          ref={dateRef}
          onKeyDown={(e) => {
            handleKeyDown(e, addRef);
          }}
          type="date"
          className="py-2 outline-0 px-4 border border-white/20 rounded-xl "
          placeholder="What's This For"
        />
      </div>
      <div className=" flex justify-between">
        <button
          ref={addRef}
          onClick={handleSubmit}
          className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10  py-2 px-4 text-emerald-400 flex gap-2 rounded-md items-center border border-emerald-500/20   justify-center"
        >
          Add Entry
        </button>
        <button
          onClick={() => {
            setformdata({
              Description: "",
              Amount: "",
              Category: "Salary",
              Date: "",
              status: "Income",
            });
          }}
          className="py-2  px-5 bg-gradient-to-r from-red-500/10 to-red-600/10 border text-red-400 border-red-500/20  flex gap-2 rounded-md items-center justify-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
