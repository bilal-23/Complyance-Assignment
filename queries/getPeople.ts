import { PeopleApi } from "@/types/api";
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios";
import { useState } from "react";


export const useGetPeople = () => {
    const [totalPages, setTotalPages] = useState(0);

    return useInfiniteQuery({
        queryKey: ["people"],
        queryFn: async ({ pageParam = 1 }) => {
            try {
                const response = await axios.get<PeopleApi>(
                    `https://swapi.dev/api/people/?page=${pageParam}`
                );
                const data = response.data;
                if (!totalPages) {
                    setTotalPages(data.count);
                }
                return data;
            } catch (err) {
                console.log(err);
            }
        },
        getNextPageParam: (lastPage: any, allPages) => {
            const nextPage = lastPage.next;
            if (nextPage) {
                const url = new URL(nextPage);
                const pageParam = url.searchParams.get("page");
                return pageParam;
            }
        },
        getPreviousPageParam: (firstPage: any, allPages) => {
            const previousPage = firstPage.previous;
            if (previousPage) {
                const url = new URL(previousPage);
                const pageParam = url.searchParams.get("page");
                return pageParam;
            }
        },
        initialPageParam: "1",
        maxPages: totalPages
    });
};


// {
//     queryKey: ["people"],
//     queryFn: async () => {
//         try {
//             const response = await axios.get<PeopleApi>("https://swapi.dev/api/people");
//             const data = response.data;
//             return data;
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }
// }