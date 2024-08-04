import DashCard from "./DashCard";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiMoney } from "react-icons/bi";
import { FaShoppingBasket, FaPlus, FaShoppingBag, FaCheck, FaTimes, FaDollarSign, FaArrowDown } from 'react-icons/fa';
import Table from "../components/TableData/Table.jsx";
import DashNavbar from "./DashNavbar";
import ChartSection from "./ChartSection";
import Donutchart from "./charts/Donutchart";

const Dashboard = ({ isOpen, setIsOpen }) => {
  const cardList = [
    {
      label: "Total Orders",
      icon: <FaShoppingBasket />,
      color: "bg-blue-100 text-blue-700",
      amount: 75,
      rate: 3,
    },
    {
      label: "Total Delivered",
      icon: <FaShoppingBag />,
      color: "bg-green-100 text-green-700",
      amount: 70,
      rate: -3,
    },
    {
      label: "Total Cancelled",
      icon: <FaShoppingBag />,
      color: "bg-red-100 text-red-700",
      amount: 5,
      rate: 3,
    },
    {
      label: "Total Revenue",
      icon: <FaDollarSign />,
      color: "bg-pink-100 text-pink-700",
      amount: "$12K",
      rate: -3,
    },
  ];

  return (
    <section className="flex flex-col h-screen w-full overflow-scroll py-4 px-8">
      <DashNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-wrap gap-8">
        <div className="flex-grow flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cardList.map((card, index) => (
              <DashCard card={card} key={index} />
            ))}
          </div>
        </div>

        <Donutchart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mt-8">
        <ChartSection />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
      <Table />
      </div>

    </section>
  );
};

export default Dashboard;
