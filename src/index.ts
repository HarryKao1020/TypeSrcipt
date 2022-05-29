// ---------------- 基本類型 ------------------ //
let str ='bruce'
let str1:string;
str1="bruce2"

let num:number =1000
let boo = true
let n :null =null
let un:undefined=undefined

// 任何類型都可以，跟寫JS一樣了
let test : any = 123

// 陣列
let arr:string[]=['a','b','c']
let arr2:string[][]=[['a','b'],['c']]

// 元祖
let tuple=[1,'a',true]
let tuple1:[number,string,boolean]=[1,'a',true]


// ------- Enum 枚舉 --------- //

// 開直播功能<api  --> 獲取直播狀態
// 成功 失敗 直播中
// 0    -1     1 

enum LiveStatus{
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const staus = LiveStatus.STREAMING

// ----- Union(變數多類型) -------//
let aaa :number | string;
aaa= 1000
aaa="str"

// ----- type -------//
type A = number | string; //宣告類型 可以重複使用

let a1:A;
a1 =999
a1="apple"
// a1=true  ---error

// ----- interface -------//

interface user{
    name:string;
    age:number;
}
// ------ object ------ //
type CARD_OBJ={
    name:string;
    desc:string;
}

const obj:CARD_OBJ={
    name:"Harry",
    desc:"He is a handsome guy"
}

interface CARD2{
    name:string;
    desc:string;
}

const obj2:CARD2={
    name:"Petter",
    desc:"He is a handsome guy",
    age:18
}
interface CARD2{
    age:number;
}

interface CARD3{
    name:string;
    age:number;
    BMI?:number; //可選可不選
}
const student:CARD3={
    name:"John",
    age:22
}
// ------
// interface 跟 type的差別在 
// interface可以擴充，type不行

// ------------------- function ------------------------//
// 參數
// function hello(){}
function hello(a:string,b:string){
    return a+b
}

function hello2(a:string,b:string):number{
    // return a+b --error
    return 999
}

// undefined
function hello4(name:string,age?:number) {
    if(age===undefined) return -1
    // console.log("結果:"+name+age)
    
}
function hello5(name:string,age:number) {
    console.log("結果:"+name+age)
}
hello4("harry")
hello5("harry",15)


// --箭頭涵式
// void
const func =()=>{

}

// number
const func2 =()=>{
    return 999
}

// ------------ 斷言 as unknow ----------------//

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
}
// 從json取出來的東西 TS不知道類型，所以要定義type給他 用as Data
type Data ={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}


const data1:Data={
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta ={
    name:string;
}

// 假設data1是動態的
const beta = data1 as unknown as Beta


// ------------------- class ------------------------//

//private 私有
//public 公開
//protected 受保護

class Live{
    public roomName:string
    private id:string
    protected name:string
    constructor(roomName1:string,id1:string,name1:string){
        console.log('建立直播中...建立直播中...')
        this.roomName=roomName1
        this.id=id1
        this.name=name1
    }
}

const live = new Live('1號直播間','00001','庭庭')
console.log(live)