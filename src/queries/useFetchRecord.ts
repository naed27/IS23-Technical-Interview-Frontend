
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchRecord = () => {
  
  const query = useQuery({
    queryKey:[`fetch_record`],
    queryFn: async () => {
      const { data: record } = await axios.get("http://localhost:8080/api/record");
      console.log(record);
      return record
    },
  });

  return query
}

export default useFetchRecord