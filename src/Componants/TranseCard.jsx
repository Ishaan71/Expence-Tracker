import React from "react";
import { TrendingUp } from "lucide-react";
import { TrendingDown } from "lucide-react";
import { Tag } from "lucide-react";
import { Calendar } from "lucide-react";
import { Trash2 } from "lucide-react";

const TranseCard = ({ allData,handleDelete,handleBox,box }) => {

  return (
    <div className="space-y-3 mt-2 ">
      {allData.map((item, index) => {
        return (
          <div
            key={index}
            className={` bg-gray-800/50 h-[70px] rounded-md
              flex items-center justify-between   p-4 `}
          >
            {item.status === "Income" ? (
              <div className="px-2 py-2 bg-emerald-400/10 rounded-2xl">
                <TrendingUp className=" text-emerald-400" size={32} />
              </div>
            ) : (
              <div className="px-2 py-2 bg-red-400/10 rounded-2xl">
                <TrendingDown className=" text-red-400" size={32} />
              </div>
            )}

            <div className="text-sm  text-center">
              <p>{item.Description}</p>
              <div className=" flex gap-2">
                <p className="flex items-center gap-1">
                  <Tag size={10} /> {item.Category}
                </p>
                <p className="flex items-center gap-1">
                  <Calendar size={10} />
                  {item.Date}
                </p>
              </div>
            </div>

            <p
              className={`text-2xl ${
                item.status === "Income" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {item.status === "Income" ? "+" : "-"} {item.Amount}
            </p>
            <span>
              <Trash2 size={30} onClick={()=>{handleDelete(item)}} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TranseCard ;
