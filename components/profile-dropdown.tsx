"use client";

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

interface Props {
    image: string;
    name: string;
    email: string;
}
const ProfileDropdown: React.FC<Props> = ({ image, name, email }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="w-8 h-8 flex justify-center items-center">
                    <AvatarImage className="w-8 h-8" src={image ?? ""} />
                    <AvatarFallback className="w-8 h-8">
                        {name && name.charAt(0) + ".."}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[1000] mr-2">
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex justify-between items-start flex-col">
                    <p className="text-base">
                        {name}
                    </p>
                    {email}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex justify-between cursor-pointer"
                    onClick={() => {
                        signOut();
                    }}
                >
                    Logout{" "}
                    <LogOut className="w-4 h-4  cursor-pointer" />
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown