"use client";
import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    handleSubmit: (e: any) => void;
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const SearchPeople: React.FC<Props> = ({ handleSubmit, searchInput, setSearchInput }) => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-0 md:flex-row sm:justify-between mb-5'>
            <div className='flex flex-row gap-2 w-full sm:w-fit'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <Input type='search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search Character' className='w-full md:w-[280px]' />
                </form>
            </div>
            {/* Filters */}
            <div className='flex gap-5 flex-wrap sm:flex-nowrap flex-row'>
                {/* HomeWorld */}
                <Select>
                    <SelectTrigger className="max-w-[100px] min-w-fit">
                        <SelectValue placeholder="Homeworlds" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                {/* Film */}
                <Select>
                    <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Films" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                {/* Species */}
                <Select>
                    <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Species" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default SearchPeople