
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface AxiosResult {
  data: string
}

const useFetchAllData = () => {
  
  const query = useQuery({
    queryKey:[`fetch_all_data`],
    queryFn: async () => {
      const result :AxiosResult = await axios.get('http://localhost:8080/api/data')
      return result
    },
  });

  return query
}

export default useFetchAllData