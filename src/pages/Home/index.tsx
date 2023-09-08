import { fetchData } from "api/services/service";
import { Table } from "components";
import { useEffect, useState } from "react";
import { columns } from "./column";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result.results);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchDataAsync();
  }, []);

  return <div>{data && <Table data={data} columns={columns} />}</div>;
};

export default Home;
