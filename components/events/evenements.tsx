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
import { IoClose, IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from 'react-icons/ci';
import { Event } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';


export default function Evenements() {
    const { ref } = useSectionInView('Evenements', 0.5);

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
            title: "Premiere evenement 1",
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
            title: "Premiere evenement 1",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: "https://img.freepik.com/photos-gratuite/groupe-personnes-creatives-analysant-resultat-du-travail_329181-15516.jpg?t=st=1714598838~exp=1714602438~hmac=65b2bf7d04252237eb13540f3d1a54893cae1e120acc4f68ea9ed0cc725131d5&w=1060", alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            dateTime: {
                day: 30,
                month: 6,
                monthString: '',
                year: 2024,
                hour: 12,
                minute: 0,
            }

        },
        {
            title: "Premiere evenement 2",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: "https://livedemo00.template-help.com/wt_59029_v3/images/event-01-540x540.jpg", alt: "uni1" },
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
            title: "Premiere evenement 2",
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
            title: "Premiere evenement 2",
            description: "Deploy your new project in one-click.sfsdsdsdsdfsdfsdfsdfsdxcvxcvxvsdfsdfsdfsdfewrewrfdfsdfdsfsdewredfsdfsddsfsd",
            image: { src: 'https://img.freepik.com/photos-gratuite/groupe-personnes-dessinant-crayons-toile-assistant-cours-art-professeur-afro-americain-debout-classe-montrant-objet-nature-morte-expliquant-comment-dessiner-formes-proportions_482257-68908.jpg?t=st=1714598777~exp=1714602377~hmac=75a6e6f559c190f511cc996c56771c11b4d469a9ef0f045e9af6999ea440a888&w=1060', alt: "uni1" },
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
            title: "Premiere evenement 3",
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


    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    function handleEventClick(event: Event): void {
        setSelectedEvent(event);
    }



    return (
        <motion.section
            id="Evenements"
            ref={ref}
            className="flex flex-col items-center justify-start py-28 ">
            <h1 className="text-5xl font-bold">
                Évènements
            </h1>
            <Separator className="mt-14 h-1 w-16 rounded-full bg-blue-900" />

            <Carousel className="w-full max-w-56 mt-20"
                setApi={setApiMonths}
                opts={{
                    startIndex: currentMonth,
                    // slidesToScroll: 5,
                    loop: true,
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
                <CarouselPrevious
                    disabled={current == currentMonth + 1}
                    className='text-red-800 border-0 hover:text-blue-900' />
                <CarouselNext
                    disabled={current == currentMonth}
                    className='text-red-800 border-0 hover:text-blue-900' />
            </Carousel>




            {/* old way*/}
            <div className={`grid mt-14 justify-center grid-cols-1 lg:gap-x-20 gap-y-16 ${sortedEvents.length <= 1 ? 'lg:grid-cols-1' : sortedEvents.length == 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
                {sortedEvents.length === 0 && <h1 className='text-xl font-semibold text-gray-500'>Aucun évènement ce mois-ci</h1>}

                {sortedEvents.map((event, index) => (
                    <div key={index}
                        onClick={() => { }}>
                        <EventCard event={event} />
                    </div>

                ))}


            </div>
            {selectedEvent && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            )}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
                <AnimatePresence>
                    {selectedEvent && (
                        <motion.div
                            layoutId={selectedEvent.title}
                            className="bg-[#f5f7fa] w-96 h-80  p-6 !rounded-xl shadow-md "
                        >
                            <motion.button
                                onClick={() => setSelectedEvent(null)}
                                className="bg-red-500 hover:bg-red-800 text-white float-right p-1 rounded-full"
                            >
                                <IoClose />
                            </motion.button>
                            <motion.h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</motion.h2>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>



        </motion.section>
    )
}


const EventCard = ({ event }: { event: Event }) => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div
        // layoutId={event.title}
        >
            <Card className="w-96 border-2 rounded-xl ">
                <CardContent className='relative h-96 m-2'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Image
                        loader={() => event.image.src}
                        src={event.image.src}
                        alt={event.image.alt}
                        layout='fill'
                        objectFit='cover'
                        className={`rounded-lg transition-all duration-300  ${isHovered ? 'brightness-50' : ''}`}

                    />


                    <div className='flex flex-col justify-center items-center '>
                        <Link href={'https://forms.gle/vRTSDyN56rKQmHNm6'}
                            target='_blank'
                            className={`absolute bottom-1/2 bg-red-800 hover:bg-blue-900 text-white text-md tracking-widest font-semibold px-6 py-3 rounded-md transition-all duration-300 transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full  opacity-0"}`}

                        >
                            Participer
                        </Link>
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




        </div>

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
