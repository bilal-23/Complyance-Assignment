import { Person, Planet } from "@/types/api";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetPerson = (url: string) => {

    return useQuery({
        queryKey: ["person", url],
        queryFn: async () => {
            try {
                const res = await axios.get<Person>(url);
                const data = res.data
                const planetList = await axios.get<Planet>(data.homeworld);
                const planetData = planetList.data;
                return { ...data, homeworld: planetData };
            }
            catch (err) {
                console.log(err);
            }
        },
    })
}