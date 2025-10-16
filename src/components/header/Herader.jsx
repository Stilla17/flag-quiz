  import React, { useEffect, useState } from "react";
  import axios from "axios";

  function Herader() {
    const Api = "http://localhost:3000/quiz";
    const [DataFoImg, setDataFoImg] = useState(null);
    const [data, setData] = useState([]);
    const [TrueFlags, setTrueFlags] = useState([]);
    const [FalseFlags, setFalseFlags] = useState([]); 
    const [countryName, setCountryName] = useState("");
    const [ball, setBall] = useState(0);

    const fetchData = async () => {
      try {
        const res = await axios.get(Api);
        let flags = res.data.options;
        setData(flags);
        setDataFoImg(res.data.flag);
        console.log(res.data);
        console.log(res.data.options);
      } catch (err) {
        console.error("Ошибка при запросе:", err);
      }
    };    
    
    const handlerCountBall = (value) => {
      if (value) {
        setBall((prev) => prev + 1);
        setTrueFlags((prev) => [...prev, DataFoImg])
      }else{
        setFalseFlags((prev) => [...prev, DataFoImg])
      }

      fetchData();
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (!DataFoImg) return <p>Загрузка...</p>;

    return (
      <div className="flex items-center">
        <div className="w-full shadow-md rounded-md my-[10px]">
          <div className="w-full h-[70px] content-center border border-white border-t-0"><h2 className="font-bold text-[24px] flag text-center sm:text-[34px]">what is this flag</h2></div>
            <div>
              <img
                className="mx-auto h-[200px] rounded-md shadow-md my-[20px] sm:h-[300px]"
                src={DataFoImg}
                alt="flag"
              />
            </div>
          <div className="flex flex-wrap justify-center w-full gap-[20px] mt-[90px]">
            <h2 className="text-white mx-auto w-full text-center text-[24px] font-bold">ball : {ball}</h2>
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => handlerCountBall(item.value)}
                className="p-3 w-full max-w-[500px] text-black bg-gray-100 rounded-md shadow hover:bg-gray-200"
              >
                {item.title}
              </button>
            ))}
          </div>
        <hr className="mt-[20px] border-white"/>
        <div className="flex w-full max-w-[1400px] mx-auto justify-between mt-[20px] text-white">

          <div className="w-full">
            <h2 className="w-full mb-[20px]">correct</h2>
            <div className="flex flex-wrap gap-2 pr-[20px]">
              {TrueFlags.map((flag, i) => (
                <div key={i}>
                <img
                  src={flag}
                  alt="true flag"
                  className="w-[90px] h-[70px] rounded-md "
                />
                <h2></h2>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[200px] border-white border-1"></div>

          <div className="w-full ">
            <h2 className="w-full text-end mb-[20px]">wrong</h2>
            <div className="flex flex-wrap gap-2 px-[20px]">
              {FalseFlags.map((flag, i) => (
                <div key={i}>
                <img
                  src={flag}
                  alt="true flag"
                  className="w-[90px] h-[70px] rounded-md"
                />
                <h2></h2>
              </div>))}
            </div>
          </div>

        </div>
          </div>
        

      </div>
    );
  }
  
  export default Herader;
  