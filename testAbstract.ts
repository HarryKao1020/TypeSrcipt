abstract class Department{
    constructor(public name:string){
    }

    printName():void{
        console.log(`Departmet name : ${this.name}`);
    }

    abstract printMeeting() : void;
}

class AccountingDepartment extends Department{
    constructor(public name:string){
        super(name)
    }

    printMeeting(): void{
        console.log("The Accounting Department meets each Monday at 10am.");
    };

    generateReports(): void{
        console.log("Generating accounting reports");
        
    }
}

var ac = new AccountingDepartment("Accounting and Auditing")
ac.printMeeting();