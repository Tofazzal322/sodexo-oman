import React from 'react';

const Insights = () => {
    const [index, setIndex] = useState(0);
  const [inspired, setInspired] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("https://quiet-savannah-34726.herokuapp.com/inspired")
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