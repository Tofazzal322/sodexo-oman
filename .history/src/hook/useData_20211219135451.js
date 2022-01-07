import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://quiet-savannah-34726.herokuapp.com/food-services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

export default useData;
