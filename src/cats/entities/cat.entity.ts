export class Cat {

    name: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
    
    constructor(name: string, imageUrl: string, imageAlt: string, description: string){
        this.name = name;
        this.imageUrl = imageUrl;
        this.imageAlt = imageAlt;
        this.description = description;
    }
}