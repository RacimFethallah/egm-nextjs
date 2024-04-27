import React from 'react'
import { MdOutlineColorLens, MdWorkOutline } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Separator } from '../ui/separator'

export default function Departements() {
    return (
        <section id="departements"
            className="flex flex-col items-center justify-start p-32 ">
            <h1 className="text-5xl font-bold">
                Départements
            </h1>
            <Separator className="mt-14 h-1 w-16 rounded-full bg-blue-900" />
            <p className="text-center mt-20 text-gray-500 text-md">
                Nos principaux départements
            </p>
            <div className="flex flex-col lg:flex-row mt-10 lg:space-x-40 space-y-16 lg:space-y-0">
                <div className="flex flex-col items-center text-center">
                    <div className="flex w-40 h-40 border-2 border-gray-300 rounded-full justify-center items-center text-blue-950">
                        <HiOutlineUserGroup size={50} />
                    </div>
                    <Separator className="mt-10 h-1 w-10 rounded-full" />
                    <h2 className="mt-8 text-xl">
                        Resources Humaines
                    </h2>

                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="flex w-40 h-40 border-2 border-gray-300 rounded-full justify-center items-center text-blue-950">
                        <MdWorkOutline size={50} />
                    </div>
                    <Separator className="mt-10 h-1 w-10 rounded-full" />
                    <h2 className="mt-8 text-xl">
                        Marketing
                    </h2>

                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex w-40 h-40 border-2 border-gray-300 rounded-full justify-center items-center text-blue-950">
                        <MdOutlineColorLens size={50} />
                    </div>
                    <Separator className="mt-10 h-1 w-10 rounded-full" />
                    <h2 className="mt-8 text-xl">
                        Design
                    </h2>

                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex w-40 h-40 border-2 border-gray-300 rounded-full justify-center items-center text-blue-950">
                        first
                    </div>
                    <Separator className="mt-10 h-1 w-10 rounded-full" />
                    <h2 className="mt-8 text-xl">
                        Premier departement
                    </h2>

                </div>

            </div>

        </section>
    )
}
