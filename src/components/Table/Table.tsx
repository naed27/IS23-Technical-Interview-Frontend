import { Data } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";
import Fields from "./components/Fields";
import Item from "./components/Items";
import { useControlStore } from "../../stores/useControlStore";

const Table = () => {
  const { setSchema, setData, data, schema, setCompanies} = useControlStore()
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    const getData = async () => {
      try{
        const { data: data } = await axios.get("http://localhost:8080/api/data");
        const { data: schema } = await axios.get("http://localhost:8080/api/schema");
        const { data: companies } = await axios.get("http://localhost:8080/api/companies");
        setIsLoading(false);
        setSchema(schema)
        setCompanies(companies.data)
        setData(data.map((data: Data)=> ({ ...data, isDeleted: false })));
      }catch(error){
        setIsLoading(false);
      }finally{
        setIsLoading(false);
      }
    };
    getData();
  }, [setSchema, setData, setCompanies]);

  if (isLoading || data === null) {
    return <div>Loading...</div>;
  }

  if (!schema || data.length ===0) {
    return <div>Not found</div>;
  }

  // Calculate the starting and ending indexes of the items to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full pb-12">
      <div className="flex flex-col w-full gap-4">
        <div className="w-full text-sm">
          <table className="w-full border-collapse border border-gray-300">
            <Fields schema={schema} />
            <tbody>
              {currentItems.map((item) => (
                <Item key={item.id} item={item} schema={schema} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;