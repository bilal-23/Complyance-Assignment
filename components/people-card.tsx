"use client"
import React from 'react'
import { motion } from 'framer-motion';
interface Props {
    name: string;
    index: number;
    species: string;
}
const PeopleCard: React.FC<Props> = ({ name, index, species }) => {

    return (
        <motion.div
            key={name}
            className={`w-[201px] h-[285px] flex flex-col justify-center items-center border cursor-pointer rounded-lg shadow-lg  hover:scale-105`}
            whileHover={{ scale: 1.05 }}
            layoutId={name}
        >
            <img
                src={`https://picsum.photos/200/200?random=${index}`}
                alt={name}
                className="mb-4 w-full"
            />
            <p className="p-4 text-xl font-bold mb-2">{name}</p>
        </motion.div>
    )
}

export default PeopleCard