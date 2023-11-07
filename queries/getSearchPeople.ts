import { useState } from 'react';
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from 'axios';
import { debounce } from '@/lib/debounce';
import { SearchResult } from '@/types/api';

const useGetSearchPeople = () => {
    const [totalPages, setTotalPages] = useState(0);

    // State for the search term
    const [searchTerm, setSearchTerm] = useState('');

    // Debounce the search term input
    const debouncedSearchTerm = debounce(setSearchTerm, 100);

    // The infinite query hook
    const { data, error, isLoading, isError, fetchNextPage, isFetchingPreviousPage, fetchPreviousPage, hasNextPage, isFetching, isFetchingNextPage, status, } = useInfiniteQuery({
        queryKey: ["people", searchTerm],
        queryFn: async ({ pageParam = 1 }) => {
            const response = await axios.get<SearchResult>(`https://swapi.dev/api/people/?search=${searchTerm}&page=${pageParam}`);
            const data = response.data;
            if (data) {
                setTotalPages(data.count);
            }
            return data;
        },
        getNextPageParam: (lastPage: any) => {
            const nextPage = lastPage?.next ?? "";
            if (nextPage) {
                const url = new URL(nextPage);
                const pageParam = url.searchParams.get("page");
                return pageParam;
            }
        },
        getPreviousPageParam: (firstPage: any) => {
            const previousPage = firstPage?.previous;
            if (previousPage) {
                const url = new URL(previousPage);
                const pageParam = url.searchParams.get("page");
                return pageParam;
            }
        },
        initialPageParam: "1",
        maxPages: totalPages
    });

    // Return everything you need for your component
    return {
        data,
        error, isLoading, isError,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        isFetchingPreviousPage,
        searchTerm,
        setSearchTerm: debouncedSearchTerm, // Use the debounced version for setting the search term
    };
};

export default useGetSearchPeople;
