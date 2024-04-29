import { links } from "./data";

export type Event = {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    person: string;
    location: string;
    dateTime: {
        day: number;
        month: number;
        monthString: string;
        year: number;
        hour: number;
        minute: number;
    };
};


export type SectionName = (typeof links)[number]["name"];