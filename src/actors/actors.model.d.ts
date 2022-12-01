export interface actorCreationDTO{
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}

export interface actorMovieDTO {
    id: number;
    name: any;
    character: string;
    picture: string;
    children?: React.ReactNode;
}