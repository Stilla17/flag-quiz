import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import axios from "axios";

function Herader() {
  const Api = "http://localhost:3000/quiz";
  const [DataFoImg, setDataFoImg] = useState(null); 
  const [data, setData] = useState([]);             
  const [value , setvalue] = useState(false)

  const fetchData = async () => {
    await axios
      .get(Api)
      .then((res) => {
        let flags = res.data.options;
        setData(flags);       
        setDataFoImg(res.data.flag); 
        console.log(res.data);
        console.log(res.data.options);
      })
      .catch((err) => {
        console.error("Ошибка при запросе:", err);
      });
  };

  console.log(value);

  const serchvalue = () => {
    
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  if (!DataFoImg) return <p>Загрузка...</p>;

  return (
    <div>
      <nav>
        <Nav />
      </nav>

      <div className="w-full flex justify-between items-center max-w-[1200px] mx-auto mt-[140px] py-[20px] px-[20px] bg-white shadow-md rounded-md">
        
        <img
          className="w-[400px] h-[250px] border rounded-md shadow-md"
          src={DataFoImg}
          alt="flag"
        />

        <div className="flex flex-col gap-3 ">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setvalue(item.value)}
              className="p-3 w-full max-w-[200px] bg-gray-100 rounded-md shadow hover:bg-gray-200"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Herader;
