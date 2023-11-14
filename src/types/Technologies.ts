
export interface Course {
    Name: string;
    school: string;
    year: number;
}

export interface Technology {
    name: string;
    hasCertify: boolean;
    hasCourse: boolean;
    courses?: Course[];
    description: string;
    index: number;
    imageUrl: string;
}