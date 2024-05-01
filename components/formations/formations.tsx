import React, { useState } from 'react'
import Image from 'next/image';

import { Separator } from '../ui/separator'
import { useSectionInView } from '@/lib/hooks';
import uni1 from "@/assets/e1.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Link from 'next/link';
import { IoPersonOutline } from 'react-icons/io5';
import { CiTimer } from 'react-icons/ci';
import YouTube from 'react-youtube';
import { FaSortAmountDown } from "react-icons/fa";




export default function Formations() {
    const { ref } = useSectionInView('Formations', 0.5);
    const [selectedFormation, setSelectedFormation] = useState<any | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const handleFormationClick = (formation: any) => {
        setSelectedFormation(formation);
    };

    const chunkArray = (array: any, size: number) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };



    const formations = [
        {
            title: "Premiere formation",
            description: "Deploy your new project in one-click.",
            youtubeVideo: 'Wg9YjvJ7Ks8',
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            duration: {
                hours: 2,
                minutes: 30,
            },
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
            title: "Premiere formation 1",
            description: "Deploy your new project in one-click.",
            youtubeVideo: 'Wg9YjvJ7Ks8',
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            duration: {
                hours: 2,
                minutes: 30,
            },
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
            title: "Premiere formation 1",
            description: "Deploy your new project in one-click.",
            youtubeVideo: 'Wg9YjvJ7Ks8',
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            duration: {
                hours: 2,
                minutes: 30,
            },
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
            title: "Premiere formation 1",
            description: "Deploy your new project in one-click.",
            youtubeVideo: 'Wg9YjvJ7Ks8',
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            duration: {
                hours: 2,
                minutes: 30,
            },
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
            title: "Premiere formation 1",
            description: "Deploy your new project in one-click.",
            youtubeVideo: 'Wg9YjvJ7Ks8',
            image: { src: uni1.src, alt: "uni1" },
            person: "John Doe",
            location: "Université d'Alger 3",
            duration: {
                hours: 2,
                minutes: 30,
            },
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

    const formationsChunks = chunkArray(formations, 4);


    const opts = {
        height: '600',
        width: '1080',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <motion.section id="Formations"
            ref={ref}
            className="flex flex-col items-center justify-start py-24  ">
            <h1 className="text-5xl font-bold">
                Formations
            </h1>
            <Separator className="mt-14 h-1 w-16 rounded-full bg-blue-900" />
            <p className="text-center mt-10 text-gray-500 text-md">Nos dernières formations</p>
            {/* <span className='flex w-full justify-end px-16'>
                <FaSortAmountDown />
            </span> */}




            <div className={`grid mt-20  justify-center grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-10  gap-y-20 px-16 items-center`}>
                {formationsChunks[currentPage].map((formation: any, index: number) => (
                    <div key={index} onClick={() => handleFormationClick(formation)}>
                        <FormationCard formation={formation} />
                    </div>
                ))}


            </div>

            {selectedFormation && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                    onClick={() => handleFormationClick(null)}></div>
            )}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div>
                    {selectedFormation && (
                        <motion.div
                        >
                            <YouTube
                                videoId={selectedFormation.youtubeVideo}
                                opts={opts}
                                onReady={(event) => event.target.playVideo()}   
                            />
                        </motion.div>
                    )}
                </div>

            </div>



            <Pagination className='mt-20'>
                <PaginationContent>
                    <PaginationPrevious
                        href='#Formations'
                        onClick={() => {
                            if (currentPage > 0) {
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                    />

                    {formationsChunks.map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href='#Formations'
                                onClick={() => setCurrentPage(index)}
                                isActive={index === currentPage}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}


                    <PaginationNext
                        href='#Formations'
                        onClick={() => {
                            if (currentPage < formationsChunks.length - 1) {
                                setCurrentPage(currentPage + 1);
                            }
                        }} />
                </PaginationContent>
            </Pagination>




        </motion.section>
    )
}


const FormationCard = ({ formation }: { formation: any }) => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div
        // layoutId={formation.title}
        // whileHover={{
        //     scale: 1.05,
        //     transition: { duration: 0.3 },
        //     cursor: 'pointer'
        // }}

        >
            <Card className="w-80 h-72 border-2 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
                <CardContent className='relative h-40 m-2'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <div>
                        <Image
                            loader={() => 'https://i.ytimg.com/vi/Wg9YjvJ7Ks8/maxresdefault.jpg'}
                            src={'https://i.ytimg.com/vi/Wg9YjvJ7Ks8/maxresdefault.jpg'}
                            alt={formation.image.alt}
                            layout="fill" objectFit="cover"
                            className="rounded-xl" />

                        <div className="absolute inset-0 flex opacity-50 flex-col text-white items-center justify-center">
                            <FaRegCirclePlay size={70} />
                        </div>

                    </div>



                </CardContent>
                <CardFooter className="flex px-2 items-start flex-col ">
                    <CardTitle className="text-lg font-bold">{formation.title}</CardTitle>
                    <CardDescription className='flex items-center justify-between flex-row w-full'>
                        <span className='text-sm font-light flex items-center gap-2 mt-1'>
                            <IoPersonOutline /> {formation.person}

                        </span>


                    </CardDescription>
                    <span className='flex items-center w-full mt-7 justify-end  gap-2'>
                        <CiTimer /> {formation.duration.hours}h{formation.duration.minutes}
                    </span>

                </CardFooter>
            </Card>




        </div>

    );
};