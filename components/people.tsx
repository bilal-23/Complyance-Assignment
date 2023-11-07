"use client"
import { useGetPeople } from '@/queries/getPeople';
import React, { useEffect } from 'react'
import PeopleCard from './people-card';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Person } from '@/types/api';



const People = () => {
    const { data, isLoading, error, fetchNextPage, fetchPreviousPage, isFetchingNextPage, isFetchingPreviousPage } = useGetPeople();
    const [page, setPage] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(0);

    useEffect(() => {
        if (totalPages === 0) {
            setTotalPages(Math.trunc(data?.pages[0].count / 10) + 1);
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

    if (isLoading || isFetchingNextPage || isFetchingPreviousPage) {
        return <div className='flex flex-col items-center'>
            {
                data && <div className='flex gap-2 self-end'>
                    {page > 0 && <Button size={"sm"} variant={"ghost"}
                        onClick={handleFetchPreviousPage}>Prev</Button>}
                    <p className='text-sm flex justify-center items-center'>{page + 1}/{totalPages}</p>
                    {page < totalPages - 1 && <Button size={"sm"} variant={"ghost"}
                        onClick={handleFetchNextPage}>Next</Button>}
                </div>
            }
            <SkeletonLoading />
        </div>

    }
    if (error) {
        return <div className="flex gap-10 flex-wrap justify-center p-4">
            <p className='text-lg text-red-500 font-semibold'>Something went wrong </p>
        </div>
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex gap-2 self-end'>
                {page > 0 && <Button size={"sm"} variant={"ghost"}
                    onClick={handleFetchPreviousPage}>Prev</Button>}
                <p className='text-sm flex justify-center items-center'>{page + 1}/{totalPages}</p>
                {page < totalPages - 1 && <Button size={"sm"} variant={"ghost"}
                    onClick={handleFetchNextPage}>Next</Button>}
            </div>
            <div className="flex gap-10 flex-wrap justify-center p-4">
                {data && data.pages[page].results.map((person: Person, index: number) => {
                    return <PeopleCard key={person.url} index={index} name={person.name} species={person.species[0]} />
                })}
            </div>
        </div>
    )
}

export default People;


const SkeletonLoading = () => {
    return <div className="flex gap-10 flex-wrap justify-center p-4">
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
        <Skeleton className='w-[201px] h-[285px]' />
    </div>
}