import React from 'react';

const Insights = () => {
    const [index, setIndex] = const [state, setstate] = useState(initialState)(0);
  const [inspired, setInspired] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("http://localhost:5000/inspired")
      .then((res) => res.json())
      .then((data) => setInspired(data));
  }, []);
    return (
        <div className='mb-5 mt-5'>
            <h1 className='title-1 fw-bold text-center'> Insights </h1>
            
        </div>
    );
};

export default Insights;