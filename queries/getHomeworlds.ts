import { Planet, PlanetList } from "@/types/api";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetAllHomeworld = () => {
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
export const useGetHomeworld = (url: string) => {
    return useQuery({
        queryKey: ["homeworld", url],
        queryFn: async () => {
            try {
                const response = await axios.get<Planet>(url);
                const data = response.data;
                return data;
            }
            catch (e) {
                console.log(e);
            }
        }
    })
}
