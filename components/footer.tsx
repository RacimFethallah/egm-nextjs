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
        <footer className='flex flex-row justify-between p-10 px-40'>
            <div className='space-y-10'>
                <Image
                    src={logo.src}
                    width={150}
                    height={100}
                    alt="Picture of the author"
                />
                <Image
                    src={universite.src}
                    width={150}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
            <div className='w-[300px]'>
                <p className='font-bold text-lg ml-2'>Contact us</p>
                <Separator className="mt-2 mb-8 font-bold" />
                <ul className='space-y-5 text-base'>
                    <li><a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                        href="tel:+213799039212"><CiPhone size={18} />+213 799-03-92-12</a>
                    </li>
                    <li><a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                        href="https://www.google.com/maps/place/Universit%C3%A9+d'Alger+3+Annexe+Ben+Aknoun/@36.7639659,3.0112916,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1b1054e13c1:0xbd8bd5f377cb6f67!8m2!3d36.7639616!4d3.0138665!16s%2Fg%2F11h_ccgmk2?entry=ttu" target="_blank"><CiLocationOn size={18} />Université d&apos;Alger 3, Algiers, Algeria</a></li>
                    <li><a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                        href="mailto:egmclubua3@gmail.com"><CiMail size={18} />egmclubua3@gmail.com</a></li>
                </ul>
                <ul className='flex flex-row mt-10 space-x-6 items-center '>
                    <li className='hover:cursor-pointer'>
                        <Avatar>
                            <AvatarFallback className='hover:bg-slate-300 transition-all'>
                                <a href="https://www.facebook.com/EGMClub.UA3/" target='_blank'><CiFacebook size={24} />
                                </a>
                            </AvatarFallback>
                        </Avatar>
                    </li>
                    <li className='hover:cursor-pointer '>
                        <Avatar>
                            <AvatarFallback className='hover:bg-slate-300 transition-all'>
                                <a href="https://www.instagram.com/egm_club/" target='_blank'><CiInstagram size={24} />
                                </a>
                            </AvatarFallback>
                        </Avatar>
                    </li>
                    <li className='hover:cursor-pointer '>
                        <Avatar>
                            <AvatarFallback className='hover:bg-slate-300 transition-all'>
                                <a href="https://www.linkedin.com/company/ecoclubua3?trk=public_profile_topcard-current-company" target='_blank'><CiLinkedin size={24} /></a></AvatarFallback>
                        </Avatar>
                    </li>
                    <li className='hover:cursor-pointer'>
                        <Avatar>
                            <AvatarFallback className='hover:bg-slate-300 transition-all'>
                                <a href="https://www.youtube.com/channel/UCaUqjEN8-HQQS7zkxaSheZw?sub_confirmation=1" target='_blank'><CiYoutube size={24} /></a>
                            </AvatarFallback>
                        </Avatar>
                    </li>
                </ul>
            </div>

        </footer>
    )
}
