"use client";

import React from 'react'
import PeopleCard from './people-card';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Person } from '@/types/api';
import { InfiniteData } from '@tanstack/react-query';


interface Props {
    data: InfiniteData<any, unknown> | undefined;
    isLoading: boolean;
    isError: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    handleFetchPreviousPage: () => void;
    handleFetchNextPage: () => void;
    totalPages: number;
    page: number;

}
const People: React.FC<Props> = ({ data, isLoading, isFetchingNextPage, isFetchingPreviousPage, handleFetchNextPage, handleFetchPreviousPage, page, totalPages, isError }) => {


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
    if (isError) {
        return <div className="flex gap-10 flex-wrap justify-center p-4">
            <p className='text-lg text-red-500 font-semibold'>Something went wrong </p>
        </div>
    }

    if (data?.pages[0].results.length === 0) {
        return <div className="flex gap-10 flex-wrap justify-center p-4">
            <p className='text-lg text-red-500 font-semibold'>No results found </p>
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
                    return <PeopleCard url={person.url} key={person.url} index={index} name={person.name} species={person.species[0]} />
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