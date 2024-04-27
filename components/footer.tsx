import React from 'react'
import Image from "next/image";
import logo from "@/assets/logo.png";
import universite from "@/assets/index.png";

import { Separator } from './ui/separator'
import { CiFacebook, CiInstagram, CiLinkedin, CiLocationOn, CiMail, CiPhone, CiYoutube } from 'react-icons/ci'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function Footer() {
    return (
        <footer className='flex flex-col'>
            <div className='flex flex-row px-40 p-10 space-y-14 lg:space-y-0 justify-between items-center lg:items-start'>
                <div className='space-y-10 flex flex-row lg:flex-col'>
                    <Image
                        src={logo.src}
                        width={150}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        className='hidden lg:block'
                        src={universite.src}
                        width={150}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className='w-[300px]'>
                    <p className='font-bold text-lg ml-2 text-center lg:text-start'>Contactez-Nous</p>
                    <div className='flex flex-row'>
                        <Separator className="mt-2 mb-8 h-0.5 w-12 bg-red-800" />
                        <Separator className="mt-2 mb-8 h-0.5" />


                    </div>
                    <ul className='space-y-5 text-base'>
                        <li><a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                            href="tel:+213799039212"><CiPhone size={18} />+213 799-03-92-12</a>
                        </li>
                        <li><a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                            href="https://www.google.com/maps/place/Universit%C3%A9+d'Alger+3+Annexe+Ben+Aknoun/@36.7639659,3.0112916,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1b1054e13c1:0xbd8bd5f377cb6f67!8m2!3d36.7639616!4d3.0138665!16s%2Fg%2F11h_ccgmk2?entry=ttu" target="_blank"><CiLocationOn size={18} />Université d&apos;Alger 3, Algiers, Algeria</a></li>
                        <li><a className='flex items-center gap-2 text-red-900 hover:text-blue-950 transition-all hover:cursor-pointer'
                            href="mailto:egmclubua3@gmail.com"><CiMail size={18} />egmclubua3@gmail.com</a></li>
                    </ul>
                    <ul className='flex flex-row mt-10 space-x-6 justify-center lg:justify-start items-center '>
                        <li className='hover:cursor-pointer'>
                            <Avatar>
                                <AvatarFallback className='hover:bg-[#395b98] hover:text-white transition-all'>
                                    <a href="https://www.facebook.com/EGMClub.UA3/" target='_blank'><CiFacebook size={24} />
                                    </a>
                                </AvatarFallback>
                            </Avatar>
                        </li>
                        <li className='hover:cursor-pointer '>
                            <Avatar>
                                <AvatarFallback className='hover:text-white hover:bg-gradient-to-br hover:from-[#734fbf] hover:via-[#e33a6d] hover:to-[#f5a67a] transition-all'>
                                    <a href="https://www.instagram.com/egm_club/" target='_blank'><CiInstagram size={24} />
                                    </a>
                                </AvatarFallback>
                            </Avatar>
                        </li>
                        <li className='hover:cursor-pointer '>
                            <Avatar>
                                <AvatarFallback className='hover:bg-[#0e76ab] hover:text-white transition-all'>
                                    <a href="https://www.linkedin.com/company/ecoclubua3?trk=public_profile_topcard-current-company" target='_blank'><CiLinkedin size={24} /></a></AvatarFallback>
                            </Avatar>
                        </li>
                        <li className='hover:cursor-pointer'>
                            <Avatar>
                                <AvatarFallback className='hover:bg-[#d95139] hover:text-white transition-all'>
                                    <a href="https://www.youtube.com/channel/UCaUqjEN8-HQQS7zkxaSheZw?sub_confirmation=1" target='_blank'><CiYoutube size={24} /></a>
                                </AvatarFallback>
                            </Avatar>
                        </li>
                    </ul>
                </div>
                <div className='w-[300px]'>
                    <p className='font-bold text-lg ml-2 text-center lg:text-start'>Newsletter</p>
                    <div className='flex flex-row mt-2 mb-6'>
                        <Separator className=" h-0.5 w-12 bg-red-800" />
                        <Separator className=" h-0.5" />
                    </div>
                    <p className='text-base font-light mb-3'>Abonnez vous a notre newsletter pour recevoir les dernieres news de EGM.</p>

                    <form className='flex flex-col space-y-5'>
                        <input type="email" placeholder='Your email' className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800' />
                        <button className='bg-red-800 text-white p-2 rounded-md hover:bg-blue-950 transition-all'>Subscribe</button>
                    </form>
                </div>

            </div>


            <div className='w-full text-white text-sm font-light bg-[#0d2d62] p-1 pl-40'>


                © 2024. All Rights Reserved.


            </div>

        </footer>
    )
}
