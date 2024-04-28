import React, { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
import YouTube from "react-youtube";
import { AnimatePresence, motion } from 'framer-motion';
import { Skeleton } from "@/components/ui/skeleton"

export default function About() {

    const [showVideo, setShowVideo] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);


    const [opts, setOpts] = useState({
        height: '360',
        width: '600',
        playerVars: {
            autoplay: 0,
        },
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setOpts((prevOpts) => ({
                    ...prevOpts,
                    width: '100%',
                }));
            } else {
                setOpts((prevOpts) => ({
                    ...prevOpts,
                    width: '600',
                }));
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call the handler once to set the initial width

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVideoReady(true);
        }, 2000); // Trigger handleVideoReady after 3 seconds

        return () => clearTimeout(timeoutId);
    }, []);


    const toggleVideo = () => {
        setShowVideo((prevShowVideo) => !prevShowVideo);
    };

    const handleVideoReady = () => {
        setIsVideoReady(true);
    };

    return (
        <section id="about"
            className="flex lg:flex-row flex-col items-center justify-around py-14 gap-10 lg:gap-28 px-20 ">


            <motion.div className='mt-10'
                layoutId='Wg9YjvJ7Ks8'>
                {isVideoReady ? (
                    <YouTube videoId="Wg9YjvJ7Ks8"
                        opts={opts} onReady={handleVideoReady}
                        onPlay={(event) => { if (showVideo == false) { event.target.pauseVideo(); setShowVideo(true) } }} />
                ) : (
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[340px] w-[600px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                )}
            </motion.div>



            {showVideo && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
                    onClick={toggleVideo}></div>
            )}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <AnimatePresence>
                    {showVideo && (
                        <motion.div
                            layoutId='Wg9YjvJ7Ks8'
                            className="mt-10"
                        >
                            <YouTube
                                videoId="Wg9YjvJ7Ks8"
                                opts={opts}
                                onReady={(event) => event.target.playVideo()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>




            <div className='flex flex-col items-center justify-center lg:order-last order-first'>
                <h1 className="text-4xl font-bold text-blue-900">
                    About <span className='text-orange-600'>EGM</span>
                </h1>
                <Separator className="mt-5 mb-8 h-1 w-16 rounded-full bg-blue-900" />
                <p className='text-center lg:text-start text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultrices sapien, sed molestie lorem. Sed lacinia ut metus et pulvinar. Donec scelerisque purus quis sapien vestibulum finibus. Ut quis ultricies risus. Duis finibus lorem ac erat dignissim ultricies. Donec eu scelerisque nisl. Phasellus vel elit mollis, scelerisque leo vel, dictum eros.

                    Mauris venenatis fringilla justo porta pretium. Suspendisse bibendum imperdiet ipsum, id venenatis eros congue vitae. Praesent rhoncus turpis ac orci ullamcorper, a sollicitudin est fermentum. Quisque blandit, tortor at fringilla pulvinar, elit tortor mattis orci, quis bibendum nisi nunc ut ex. Quisque nec porta ex, malesuada finibus massa. Nunc sodales nunc diam, nec faucibus nisl semper at. Aliquam viverra purus et neque vestibulum varius. In consequat varius commodo. Vivamus ac eros eleifend, consectetur augue in, volutpat massa.

                </p>

            </div>

            {/* <button className='mt-20 bg-blue-900 hover:bg-red-800 transition-all duration-300 text-white text-lg font-semibold rounded-lg py-3 px-10'>
                Voir Tout
            </button> */}


        </section>
    )
}
