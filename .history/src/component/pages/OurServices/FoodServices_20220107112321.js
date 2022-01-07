import React from "react";
import Insights from "../InspiredThinking/Insights";
import FoodExperience from "./FoodServicesSection/FoodExperience";
import FoodServiceBanner from "./FoodServicesSection/FoodServiceBanner";
import OurFoodServices from "./FoodServicesSection/OurFoodServices";

const FoodServices = () => {
  return (
    <div className="">
      <FoodServiceBanner></FoodServiceBanner>
      <OurFoodServices></OurFoodServices>
      <FoodExperience></FoodExperience>
      <div className="blue-bg p-4 mt-5 ">
        <Insights></Insights>
      </div>
    </div>
  );
};

export default FoodServices;
