import { lazy, useId } from "react";
import React from "react";
import Barchart from "../charts/Barchart";
import {
  FaBullseye,
  FaHamburger,
  FaUtensils,
  FaChevronRight,
} from "react-icons/fa";
import "./OrderTable.css";
import { FaStar } from 'react-icons/fa'; // Filled star icon
import { FaRegStar } from 'react-icons/fa'; // Empty star icon

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const reviews = [
  {
    name: "Jenny Wilson",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    rating: 4,
    text: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 3,
    text: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Normally wings are wings, but theirs are lean meaty and tender, and perfectly crispy. We also had the calamari, and it was just right.",
  },
];

const Table = () => {
  return (
    <>
      <div className="col-span-2 mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md px-6 py-4">
      <h3 className="text-white text-left text-xl font-bold pb-4">Recent Orders</h3>
        <div className="flex flex-col justify-between items-center h-80">
          <div className="table-container">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.customer}</td>
                    <td>{order.orderNo}</td>
                    <td>{order.amount}</td>
                    <td className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8 grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md px-6 py-4">
      <h3 className="text-white text-left text-xl font-bold">Customer's Feedback</h3>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="review-header">
              <img
                src={review.image}
                alt={review.name}
                className="review-image"
              />
              <h3 className="review-name">{review.name}</h3>
            </div>
            <div className="review-rating">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className={`star ${idx < review.rating ? '' : 'star-empty'}`}>
                  {idx < review.rating ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Table;
