import React from 'react'
import { Skeleton } from './ui/skeleton';
import { motion } from 'framer-motion';

const PeopleCardSkeleton = () => {
    return (
        <div className="flex gap-10 flex-wrap justify-center p-4">
            {Array(10).fill(0).map(() => {
                return <motion.div>
                    <Skeleton className='w-[201px] h-[285px]' />
                </motion.div>
            })}

        </div>
    )
}

export default PeopleCardSkeleton