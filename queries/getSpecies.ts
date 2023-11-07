import { StarWarsSpecies, StarWarsSpeciesDetail } from "@/types/api";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetSpecies = () => {
    return useQuery({
        queryKey: ["species"],
        queryFn: async () => {
            try {
                const response = await axios.get<StarWarsSpecies>("https://swapi.dev/api/species");
                const data = response.data;
                return data;
            }
            catch (e) {
                console.log(e);
            }
        }
    })
}


export const useGetSpeciesById = (url: string) => {
    return useQuery({
        queryKey: ["species", url],
        queryFn: async () => {
            try {
                const res = await axios.get<StarWarsSpeciesDetail>(url);
                const data = res.data;
                return data;
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}