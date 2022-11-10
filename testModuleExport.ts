export const  numberRegExp = /^[0-9]+$/;


interface StringVaildator{
    isAcceptable():void;
}

export class ZipCodeVaildator implements StringVaildator {
    isAcceptable(): void {
        console.log("Hi ZipCodeVaildator");
        
    }
}

