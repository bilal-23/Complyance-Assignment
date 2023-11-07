"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog";
import PeopleDetail from './people-detail';
interface Props {
    name: string;
    index: number;
    species: string;
    url: string;
}
const PeopleCard: React.FC<Props> = ({ name, index, species, url }) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog onOpenChange={(e) => {
            setOpen(e);
        }}>
            <DialogTrigger>
                <motion.div
                    key={name}
                    className={`w-[201px] h-[285px] flex flex-col justify-between items-center border cursor-pointer rounded-lg shadow-lg  hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    layoutId={name}
                >
                    <img
                        src={`https://picsum.photos/200/200?random=${index}`}
                        alt={name}
                        className="w-full"
                    />
                    <p className="p-4 text-xl font-bold mb-2">{name}</p>
                </motion.div>
            </DialogTrigger>
            {open && <PeopleDetail name={name} url={url} />}
        </Dialog>
    )
}

export default PeopleCard