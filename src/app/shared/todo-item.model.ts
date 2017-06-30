export class TodoItem {
    public id: number;
    public title: string;
    public description: string;
    public compleated: boolean;
    
    
    constructor( id:number, title: string, description: string, compleated: boolean ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.compleated = compleated;
    }

}