import { StarWarsFilm } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSpecies = () => {
    return useQuery({
        queryKey: ["films"],
        queryFn: async () => {
            try {
                const response = await axios.get<StarWarsFilm>("https://swapi.dev/api/films");
                const data = response.data;
                return data;
            }
            catch (e) {
                console.log(e);
            }
        }
    })
}