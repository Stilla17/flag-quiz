  import React, { useEffect, useState } from "react";
  import axios from "axios";

  function Herader() {
    const Api = "http://localhost:3000/quiz";
    const [DataFoImg, setDataFoImg] = useState(null);
    const [data, setData] = useState([]);
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
      }
      fetchData();
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (!DataFoImg) return <p>Загрузка...</p>;

    return (
      <div className="border flex items-center mt-[50px]">
        <div className="w-full shadow-md rounded-md my-[10px]">
          <h2 className="font-bold text-[34px] flag text-center">what is this flag</h2>
          <hr className="border-white my-[20px]"/>
            <div>
              <img
                className="mx-auto h-[300px] border rounded-md shadow-md "
                src={DataFoImg}
                alt="flag"
              />
            </div>
          {/* <div className="flex flex-wrap justify-center w-full gap-[20px]">
            <h2 className="text-black">ball : {ball}</h2>
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => handlerCountBall(item.value)}
                className="p-3 w-full max-w-[500px] text-black bg-gray-100 rounded-md shadow hover:bg-gray-200"
              >
                {item.title}
              </button>
            ))}
          </div> */}
        
        <div className="flex w-full max-w-[1400px] mx-auto border justify-between border-t-white mt-[50px]">

        <div>
          <h2>true</h2>
        </div>

        <div className="h-[200px] border-white border-1"></div>

        <div>
          <h2>false</h2>
        </div>

        </div>
          </div>
        

      </div>
    );
  }
  
  export default Herader;
  