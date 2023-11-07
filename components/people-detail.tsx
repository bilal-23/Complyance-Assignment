import React from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useGetPerson } from '@/queries/getPerson';
import { Skeleton } from './ui/skeleton';
import { Separator } from "@/components/ui/separator"

interface Props {
    name: string;
    url: string;
}
const PeopleDetail: React.FC<Props> = ({ name, url }) => {
    const { data: person, isLoading, error } = useGetPerson(url);
    const addDate = person?.created;
    const date = new Date(addDate ?? "")
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
            </DialogHeader>

            <DialogDescription className='mb-10 border flex flex-col sm:flex-row-reverse md:w-auto justify-between'>
                {error && <p>Something went wrong</p>}
                {isLoading && <SkeletonLoader />}
                {person && !isLoading && <>
                    <div className='flex items-center justify-center w-full sm:w-[190px] h-[206px]'>
                        <img
                            src={`https://picsum.photos/200/200?random=${1}`}
                            alt={name}
                            className="mx-auto w-auto h-full"
                        />
                    </div>
                    <div className='flex flex-col justify-center gap-2 items-center flex-1 p-2'>
                        <p><span className='font-bold mr-2'>Height:</span> {+person.height / 100}m</p>
                        <p><span className='font-bold mr-2'>Mass:</span> {+person.mass}kg</p>
                        <p><span className='font-bold mr-2'>Created:</span>{formattedDate}</p>
                        <p><span className='font-bold mr-2'>Film Appearance:</span>{person.films.length}</p>
                        <p><span className='font-bold mr-2'>Birth Year:</span>{person.birth_year}</p>
                        <Separator />
                        <p className='font-bold'>Homeworld Details</p>
                        <p><span className='font-bold mr-2'>Name:</span>{person.homeworld.name}</p>
                        <p><span className='font-bold mr-2'>Terrain:</span>{person.homeworld.terrain}</p>
                        <p><span className='font-bold mr-2'>Climate:</span>{person.homeworld.climate}</p>
                        <p><span className='font-bold mr-2'>Population:</span>{person.homeworld.population}</p>
                        <p><span className='font-bold mr-2'>Residents:</span>{person.homeworld.residents.length}</p>
                    </div>
                </>
                }
            </DialogDescription>
        </DialogContent>
    )
}

export default PeopleDetail;


const SkeletonLoader = () => {
    return <>
        <Skeleton className='w-[462px] h-[206px]' />
    </>

}