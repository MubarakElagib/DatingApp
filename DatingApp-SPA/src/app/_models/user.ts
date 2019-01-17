import { Photo } from './Photo';

export interface User {

    id: number;
    username: string;
    gender: string;
    age: string;
    knownAs: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
