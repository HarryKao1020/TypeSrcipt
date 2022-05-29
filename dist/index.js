"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ---------------- 基本類型 ------------------ //
let str = 'bruce';
let str1;
str1 = "bruce2";
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
// 任何類型都可以，跟寫JS一樣了
let test = 123;
// 陣列
let arr = ['a', 'b', 'c'];
let arr2 = [['a', 'b'], ['c']];
// 元祖
let tuple = [1, 'a', true];
let tuple1 = [1, 'a', true];
// ------- Enum 枚舉 --------- //
// 開直播功能<api  --> 獲取直播狀態
// 成功 失敗 直播中
// 0    -1     1 
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const staus = LiveStatus.STREAMING;
// ----- Union(變數多類型) -------//
let aaa;
aaa = 1000;
aaa = "str";
let a1;
a1 = 999;
a1 = "apple";
const obj = {
    name: "Harry",
    desc: "He is a handsome guy"
};
const obj2 = {
    name: "Petter",
    desc: "He is a handsome guy",
    age: 18
};
const student = {
    name: "John",
    age: 22
};
// ------
// interface 跟 type的差別在 
// interface可以擴充，type不行
// ------------------- function ------------------------//
// 參數
// function hello(){}
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    // return a+b --error
    return 999;
}
// undefined
function hello4(name, age) {
    if (age === undefined)
        return -1;
    // console.log("結果:"+name+age)
}
function hello5(name, age) {
    console.log("結果:" + name + age);
}
hello4("harry");
hello5("harry", 15);
// --箭頭涵式
// void
const func = () => {
};
// number
const func2 = () => {
    return 999;
};
// ------------ 斷言 as unknow ----------------//
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
// 假設data1是動態的
const beta = data1;
// ------------------- class ------------------------//
//private 私有
//public 公開
//protected 受保護
class Live {
    constructor(roomName1, id1, name1) {
        console.log('建立直播中...建立直播中...');
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}
const live = new Live('1號直播間', '00001', '庭庭');
console.log(live);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUM5QyxJQUFJLEdBQUcsR0FBRSxPQUFPLENBQUE7QUFDaEIsSUFBSSxJQUFXLENBQUM7QUFDaEIsSUFBSSxHQUFDLFFBQVEsQ0FBQTtBQUViLElBQUksR0FBRyxHQUFTLElBQUksQ0FBQTtBQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUE7QUFDZCxJQUFJLENBQUMsR0FBUSxJQUFJLENBQUE7QUFDakIsSUFBSSxFQUFFLEdBQVcsU0FBUyxDQUFBO0FBRTFCLGtCQUFrQjtBQUNsQixJQUFJLElBQUksR0FBUyxHQUFHLENBQUE7QUFFcEIsS0FBSztBQUNMLElBQUksR0FBRyxHQUFVLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtBQUM5QixJQUFJLElBQUksR0FBWSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVyQyxLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RCLElBQUksTUFBTSxHQUF5QixDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUE7QUFHL0MsK0JBQStCO0FBRS9CLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1osaUJBQWlCO0FBRWpCLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUVELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUE7QUFFbEMsK0JBQStCO0FBQy9CLElBQUksR0FBb0IsQ0FBQztBQUN6QixHQUFH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