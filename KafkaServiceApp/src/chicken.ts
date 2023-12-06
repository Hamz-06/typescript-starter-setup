
export class Chicken{
    
    message: string = '';
    readonly id: string = '1234';
    private priv: string = 'private';

    cluck(message:string){
        console.log(message)
        this.message = message;
    }
}

