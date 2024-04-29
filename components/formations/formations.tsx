import React from 'react'
import { Separator } from '../ui/separator'
import { useSectionInView } from '@/lib/hooks';

export default function Formations() {
    const { ref } = useSectionInView('Formations', 0.5);

    return (
        <section id="Formations"
        ref={ref}
            className="flex flex-col items-center justify-start py-32 ">
            <h1 className="text-5xl font-bold">
                Formations
            </h1>
            <Separator className="mt-14 h-1 w-16 rounded-full bg-blue-900" />
            <div className={`grid mt-20  justify-center grid-cols-1 lg:gap-x-40 gap-y-20`}>
                {/* {sortedEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))} */}


            </div>
            {/* <button className='mt-20 bg-blue-900 hover:bg-red-800 transition-all duration-300 text-white text-lg font-semibold rounded-lg py-3 px-10'>
                Voir Tout
            </button> */}


        </section>
    )
}
