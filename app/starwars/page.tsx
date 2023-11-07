import React from 'react'
import People from '@/components/people';

const StarWars = () => {

    return (
        <section className="container grid items-center px-4 sm:px-8 md:px-10 gap-6 pb-8 pt-6 md:py-10">
            <div className=' w-full mx-auto'>
                <People />
            </div>
        </section>
    )
}

export default StarWars