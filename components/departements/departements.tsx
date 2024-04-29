import React, { useState } from 'react'
import { MdOutlineColorLens, MdWorkOutline } from "react-icons/md";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi2";
import { Separator } from '../ui/separator'
import { AnimatePresence, motion } from "framer-motion"
import { IoClose } from 'react-icons/io5';

type HoverableDivProps = {
    id: number,
    icon: React.ReactNode;
    filledIcon: React.ReactNode;
};

const HoverableDiv = ({ id, icon, filledIcon }: HoverableDivProps) => {
    return (
        <motion.div
            layout
            layoutId={id.toString()}
            initial={{
                borderRadius: 100,
                width: 140,
                height: 140,
            }}
            whileHover={{
                scale: 1.2,
                borderRadius: 20,
                width: "160px",
                height: '200px',
            }}
            className="flex border-2 border-gray-300 hover:bg-gray-200 shadow-md hover:shadow-xl hover:cursor-pointer justify-center items-center text-blue-950"
        >
            {icon}
        </motion.div>
    );
};
interface Departement {
    id: number;
    title: string;
    icon: React.ReactNode;
    filledIcon: React.ReactNode;
}

const departements: Departement[] = [
    {
        id: 1,
        title: "Resources Humaines",
        icon: <HiOutlineUserGroup size={50} />,
        filledIcon: <HiUserGroup size={50} />,
    },
    {
        id: 2,
        title: "Marketing",
        icon: <MdWorkOutline size={50} />,
        filledIcon: <MdWorkOutline size={50} />,
    },
    {
        id: 3,
        title: "Design",
        icon: <MdOutlineColorLens size={50} />,
        filledIcon: <MdOutlineColorLens size={50} />,
    },
    {
        id: 4,
        title: "Premier departement",
        icon: <MdOutlineColorLens size={50} />,
        filledIcon: <MdOutlineColorLens size={50} />,
    },
];

export default function Departements() {
    const [selectedDepartement, setSelectedId] = useState<Departement | null>(null);

    const handleDepartementClick = (departement: Departement) => {
        setSelectedId(departement);
    };

    return (
        <section id="departements" className={`flex flex-col items-center justify-start p-32 bg-[#f5f7fa] ${selectedDepartement ? '' : ''}`}>
            <h1 className="text-5xl font-bold">Départements</h1>
            <Separator className="mt-14 h-1 w-16 rounded-full bg-blue-900" />
            <p className="text-center mt-20 text-gray-500 text-md">Nos principaux départements</p>
            <div className="flex flex-col lg:flex-row mt-10 lg:space-x-40 space-y-16 lg:space-y-0">
                {departements.map((departement) => (
                    <div key={departement.id} className="flex flex-col items-center text-center" onClick={() => handleDepartementClick(departement)}>
                        <HoverableDiv id={departement.id} icon={departement.icon} filledIcon={departement.filledIcon} />
                        <Separator className="mt-10 h-1 w-10 rounded-full" />
                        <h2 className="mt-8 text-xl">{departement.title}</h2>
                    </div>
                ))}
            </div>


            {selectedDepartement && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            )}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
                <AnimatePresence>
                    {selectedDepartement && (
                        <motion.div
                            layoutId={selectedDepartement.id.toString()}
                            // initial={{ opacity: 0 }}
                            // animate={{ opacity: 1 }}
                            // exit={{ opacity: 0 }}
                            className="bg-[#f5f7fa] w-96 h-80  p-6 !rounded-xl shadow-md "
                        >
                            <motion.button
                                onClick={() => setSelectedId(null)}
                                className="bg-red-500 hover:bg-red-800 text-white float-right p-1 rounded-full"
                            >
                                <IoClose />
                            </motion.button>
                            <motion.h2 className="text-2xl font-bold mb-4">{selectedDepartement.title}</motion.h2>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}