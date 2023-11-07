import { PlanetList } from "@/types/api";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetHomeworld = () => {
    return useQuery({
        queryKey: ["homeworld"],
        queryFn: async () => {
            try {
                const response = await axios.get<PlanetList>("https://swapi.dev/api/planets");
                const data = response.data;
                return data;
            }
            catch (e) {
                console.log(e);
            }
        }
    })
}