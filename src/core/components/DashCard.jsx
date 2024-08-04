import { useId } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const DashCard = ({ card }) => {
  const { color, label, rate, amount, icon } = card;
  const uid = useId();

  return (
    <>
<div
  className="flex flex-col px-4 py-4 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 w-full"
  key={uid}
>
  <div
    className={`grid place-items-center rounded-full h-[40px] w-[40px] text-3xl ${color}`}
  >
    {icon}
  </div>
  <div className="mt-2 text-left">
    <p className="text-white text-sm text-left">{label}</p>
    <div className="flex justify-between items-center">
      <p className="text-white text-3xl font-bold">{amount}</p>
      <p className="flex items-center text-sm">
        {rate > 0 ? (
          <>
            <span className="font-bold text-green-500">
             ▲
            </span>
            <span className="font-bold text-green-500">{rate}%</span>
          </>
        ) : (
          <>
            <span className="font-bold text-red-500">
             ▼
            </span>
            <span className="font-bold text-red-500">{rate}%</span>
          </>
        )}
      </p>
    </div>
  </div>
</div>



</>

  );
};

export default DashCard;
