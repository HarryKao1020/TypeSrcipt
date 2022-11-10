let passcode  = "secret passcode";

export class Employee{
    private _fullName: string;
    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        if (passcode && passcode =="secret passcode"){
            this._fullName = value;
        }else{
            console.log("Error : unauthorized update of employee!");
            
        }
        
    }
}

let employee = new Employee();
employee.fullName ="Bob smith"
if(employee.fullName){
    console.log(employee.fullName);
}