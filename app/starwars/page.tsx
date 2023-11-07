"use client"
import React, { useEffect } from 'react'
import People from '@/components/people';
import SearchPeople from '@/components/search-people';
import useGetSearchPeople from '@/queries/getSearchPeople';
const StarWars = () => {
    const {
        searchTerm,
        setSearchTerm, isLoading, isError,
        data,
        fetchNextPage,
        fetchPreviousPage,
        isFetchingPreviousPage,
        isFetchingNextPage,
    } = useGetSearchPeople();
    const [page, setPage] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(0);


    useEffect(() => {
        if (data) {
            setTotalPages(Math.trunc(data.pages[0].count / 10) + 1);
        }
    }, [data])

    const handleFetchNextPage = () => {
        setPage(+page + 1);
        fetchNextPage();
    }
    const handleFetchPreviousPage = () => {
        setPage(+page - 1);
        fetchPreviousPage();
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('submitted');
    }


    return (
        <section className="container grid items-center px-4 sm:px-8 md:px-10 gap-6 pb-8 pt-6 md:py-10">
            <div className=' w-full mx-auto'>
                <SearchPeople handleSubmit={handleSubmit} setSearchInput={setSearchTerm} searchInput={searchTerm} />
                <People data={data} handleFetchNextPage={handleFetchNextPage} handleFetchPreviousPage={handleFetchPreviousPage} isError={isError} isFetchingNextPage={isFetchingNextPage} isFetchingPreviousPage={isFetchingPreviousPage} isLoading={isLoading} page={page} totalPages={totalPages} />
            </div>
        </section>
    )
}

export default StarWars