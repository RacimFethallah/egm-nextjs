import React, { useEffect, useState } from 'react'
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
import { Event } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';


export default function Evenements() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [apiMonths, setApiMonths] = React.useState<CarouselApi>()
    const [apiEvents, setApiEvents] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)



    useEffect(() => {
        if (!apiMonths) {
            return
        }

        // setCount(api.scrollSnapList().length)
        setCurrent(apiMonths.selectedScrollSnap() + 1)

        apiMonths.on("select", () => {
            setCurrent(apiMonths.selectedScrollSnap() + 1)
        })
    }, [apiMonths])

    // const handlePrevMonth = () => {
    //     setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    // };

    // const handleNextMonth = () => {
    //     setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    // };


    // const remainingMonths = monthNames.slice(currentMonth);

    // // Get the months from the beginning of the year up to the current month
    // const previousMonths = monthNames.slice(0, currentMonth);

    // // Concatenate the remaining months and previous months to start from the current month
    // const monthNamesFromCurrentMonth = [...remainingMonths, ...previousMonths];


    const monthNames = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];


    const events = [
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 30,
                month: 4,
                monthString: '',
                year: 2024,
                hour: 12,
                minute: 0,
            }

        },
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 30,
                month: 5,
                monthString: '',
                year: 2024,
                hour: 12,
                minute: 0,
            }

        },
        {
            title: "Premiere evenement",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 30,
                month: 4,
                monthString: '',
                year: 2024,
                hour: 12,
                minute: 0,
            }

        },

    ];

    const eventsUp = events.map(event => ({
        ...event,
        dateTime: {
            ...event.dateTime,
            monthString: monthNames[event.dateTime.month - 1]
        }
    }));



    const filteredEvents = eventsUp.filter(event => {
        const eventDate = new Date(
            event.dateTime.year,
            event.dateTime.month - 1,
            event.dateTime.day,
            event.dateTime.hour,
            event.dateTime.minute
        );
        const currentDate = new Date();

        return eventDate >= currentDate && event.dateTime.month === current;
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

            <Carousel className="w-full max-w-56 mt-20"
                setApi={setApiMonths}
                opts={{
                    startIndex: currentMonth,
                    // slidesToScroll: 5,
                    // loop: true,
                }}>
                <CarouselContent>
                    {monthNames.map((month, index) => (
                        <CarouselItem key={index}
                            className=''>
                            <div className="flex items-center justify-center">
                                <h2 className="text-3xl font-semibold">{month}</h2>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='text-red-800 border-0 hover:text-blue-900' />
                <CarouselNext className='text-red-800 border-0 hover:text-blue-900' />
            </Carousel>




            {/* old way*/}
            <div className={`grid mt-14 justify-center grid-cols-1 lg:gap-x-36 gap-y-20 ${sortedEvents.length <= 1 ? 'lg:grid-cols-1' : sortedEvents.length == 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3' }`}>
                {sortedEvents.length === 0 && <h1 className='text-xl font-semibold text-gray-500'>Aucun évènement ce mois-ci</h1>}

                {sortedEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}


            </div>


        </section>
    )
}


const EventCard = ({ event }: { event: Event }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card className="w-96 ">
            <CardContent className='relative h-96'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Image
                    src={event.image.src}
                    alt={event.image.alt}
                    layout='fill'
                    objectFit='cover'
                    className={`rounded-t-md transition-all duration-300 ${isHovered ? 'brightness-50' : ''}`}

                />
                <div className='flex flex-col justify-center items-center '>
                    <button
                        className={`absolute bottom-1/2 bg-red-800 hover:bg-blue-900 text-white text-md tracking-widest font-semibold px-6 py-3 rounded-md transition-all duration-300 transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full  opacity-0"}`}
                    >
                        Participer
                    </button>
                </div>

            </CardContent>
            <CardFooter className="flex p-0 items-start ">
                <div className=' w-24 h-20 bg-blue-900  text-white flex flex-col items-center p-1  rounded-bl-md'>
                    <span className='font-bold text-2xl'>{event.dateTime.day}</span>
                    <span className='font-light text-sm'>{event.dateTime.monthString}</span>
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
    );
};



{/* <div className="flex items-center justify-center gap-20 mt-20">
                <button
                    onClick={handlePrevMonth}
                    className="text-4xl font-black hover:text-blue-900 text-red-800 transition-colors duration-300"
                >
                    &larr;
                </button>
                <h2 className="text-3xl  font-bold w-36 text-center">
                    {monthNames[currentMonth]}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="text-4xl font-black hover:text-blue-900 text-red-800 transition-colors duration-300"
                >
                    &rarr;
                </button>
            </div> */}

function setCount(length: number) {
    throw new Error('Function not implemented.');
}
