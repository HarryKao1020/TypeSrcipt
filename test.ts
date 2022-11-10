var list : number[] = [1,2,3,4]
var newList : Array<number | string> = [22,33,44,55,"Bob","James"]

newList[10] = "TEN"

for(let x in newList){
    console.log(newList[x]);
    
}
console.log("-----------------");

for(let x of newList){
    console.log(x);
    
}
console.log("-----------------");

newList.forEach(e=>{console.log(e)})


let x :[string,number,boolean]
x=["string",123,true]

x.forEach(e=>{console.log(e)})


let fruit :[string,number]
fruit=["apple",50];

for(let x of fruit){
    console.log(x)
}

enum Color {Red,Blue,Green}
console.log(Color.Red);


function error(message:string):never{
    throw new Error(message)
}

function fail(){
    return error("Somet")
}

const numLivesForCat = 30;
const kitty={
    name:"Aurora",
    numLives: numLivesForCat
}

kitty.name="Dddd"

console.log(kitty.name);

function add (x:number,y:number) : number{
    return x+y;
}

console.log(add(50,60));


let newAdd=(x:number , y:number) :number=>{
    return x +y
}

console.log(newAdd(80,250));

var buildName =(firstName:string,lastName:string) =>{
    return firstName+" "+lastName
}

var result1 =buildName("Bob","Lee")
console.log(result1);


var buildName2  = (firstNmae:string,lastName? :string) :string =>{
    return `${firstNmae} ${lastName}`
}
var result2 = buildName2("Lebron","James")
console.log(result2);

var buildName3 = (firstName:string, lastName:string="Smith"):string =>{
    return firstName + lastName
}

console.log(buildName3("Bob"));
console.log(buildName3("Bod","Will"));
console.log(buildName3("Lebron",undefined));


// =============
console.log("------------");
var buildName4 = (firstName:string ,...restOfName:string[]) =>{
    return firstName+" "+ restOfName.join(" ")
}
console.log(buildName4("Bob","Will","Leo","Harry"));
console.log(buildName4("James"))
console.log(buildName4("LEE","Adam"));



