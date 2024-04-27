import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from '../ui/separator'
import uni1 from "@/assets/e1.jpg";
import Image from 'next/image';
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from 'react-icons/ci';
export default function Evenements() {

    const events = [
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 12,
                month: 9,
                year: 2024,
                hour: 12,
                minute: 0,
            }

        },
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 12,
                month: 7,
                year: 2024,
                hour: 12,
                minute: 0,
            }
        },
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 12,
                month: 8,
                year: 2024,
                hour: 12,
                minute: 0,
            }
        },
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 12,
                month: 6,
                year: 2024,
                hour: 12,
                minute: 0,
            }
        },

    ];

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(
            event.dateTime.year,
            event.dateTime.month - 1,
            event.dateTime.day,
            event.dateTime.hour,
            event.dateTime.minute
        );
        const currentDate = new Date();
        return eventDate >= currentDate;
    })

    const sortedEvents = filteredEvents.sort((a, b) => {
        const dateA = new Date(
            a.dateTime.year,
            a.dateTime.month - 1,
            a.dateTime.day,
            a.dateTime.hour,
            a.dateTime.minute
        );
        const dateB = new Date(
            b.dateTime.year,
            b.dateTime.month - 1,
            b.dateTime.day,
            b.dateTime.hour,
            b.dateTime.minute
        );
        return dateB.getTime() - dateA.getTime();
    })



    return (
        <section id="Evenements"
            className="flex flex-col items-center justify-start py-32 ">
            <h1 className="text-5xl font-bold">
                Évènements
            </h1>
            <Separator className="mt-14 h-1 w-16 rounded-full bg-blue-900" />
            {/* <p className="text-center mt-20 text-gray-500 text-md">
                Nos principaux départements
            </p> */}
            <div className={`grid mt-20  justify-center grid-cols-1 lg:gap-x-40 gap-y-20 ${events.length == 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
                {sortedEvents.map((event, index) => (
                    <Card className="w-96 " key={index}>
                        {/* <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                            <CardDescription>{event.description}</CardDescription>
                        </CardHeader> */}
                        <CardContent className='relative h-96'>
                            <Image
                                src={event.image.src}
                                alt={event.image.alt}
                                layout='fill'
                                objectFit='cover'
                                className='rounded-t-md hover:cursor-pointer transition-all duration-300 hover:brightness-50'

                            />
                        </CardContent>
                        <CardFooter className="flex p-0 items-start ">

                            <div className=' w-24 h-20 bg-blue-900  text-white flex flex-col items-center p-1  rounded-bl-md'>
                                <span className='font-bold text-2xl'>{event.dateTime.day}</span>
                                <span className='font-light text-sm'>{event.dateTime.month}</span>

                                <span className='font-bold text-xs'>{event.dateTime.hour}:{event.dateTime.minute < 10 ? `0${event.dateTime.minute}` : ''}</span>


                            </div>



                            <div className='flex pl-2 pt-2 flex-col items-start line-clamp-1  '>
                                <h1 className='text-md font-semibold'>
                                    {event.title}
                                </h1>
                                <span className='text-sm font-light flex items-center gap-2 mt-1'>
                                    <IoPersonOutline /> {event.person}
                                </span>
                                <span className='text-sm font-light flex items-center gap-2'>
                                    <IoLocationOutline /> {event.location}
                                </span>

                            </div>
                        </CardFooter>
                    </Card>
                ))}


            </div>
            <button className='mt-20 bg-blue-900 hover:bg-red-800 transition-all duration-300 text-white text-lg font-semibold rounded-lg py-3 px-10'>
                Voir Tout
            </button>


        </section>
    )
}
