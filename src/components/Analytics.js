import React from "react";
import Laptop from "../assets/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
            sem leo. Nullam in orci sed tellus pharetra sagittis vel nec ante.
            Vivamus et ante posuere, condimentum magna vel, varius urna. Cras
            nec dui rhoncus, dapibus tortor vel, tempus eros. Ut faucibus velit
            vitae sapien sollicitudin, a accumsan orci eleifend.{" "}
          </p>
          <button className="bg-black w-[200px] rounded text-bold font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
