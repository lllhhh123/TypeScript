// let str:string = '123'

// let muban:string = 'web${str}'
// console.log(muban);


// let notANumber: number = NaN;//Nan
// let num: number = 123;//普通数字
// let infinityNumber: number = Infinity;//无穷大
// let decimal: number = 6;//十进制
// let hex: number = 0xf00d;//十六进制
// let binary: number = 0b1010;//二进制
// let octal: number = 0o744;//八进制s

// let a:boolean = false
// console.log(a);


// let b:boolean = Boolean(1)
//  console.log(b);


//  let createdBoolean: Boolean = new Boolean(1) //使用构造函数 Boolean 创造的对象不是布尔值；new Boolean() 返回的是一个 Boolean 对象 

 
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数



// function voidFn(): void {
//     console.log('test void')
// }

// void 类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数

// void也可以定义undefined 和 null类型

// let u: void = undefined

// let n: void = null;  ts默认开启严格模式，如果不关闭会执行 不能将类型“null”分配给类型“void”。 等一系列禁令

// let u: undefined = undefined;//定义undefined
// let n: null = null;//定义null

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量

//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = "1"
 
// num2 = test
 
// 安装 1.npm install @types/node -D 
//      2.npm install ts-node -g  即可不用转为js也能够直接运行ts文件（使用 ts-node app.ts命令）
// let str:string = "我的很大，你要忍一下"

// console.log(str);

// let anys:any = '爷发烧了'
//  1.没有强制限定哪种类型，随时切换类型都可以 我们可以对 any 进行任何操作，不需要检查类型
// 2.声明变量的时候没有指定任意类型默认为any;3.弊端如果使用any 就失去了TS类型检测的作用
// 
// anys = 18
// anys = true
// anys = {}
// anys = []
// anys = Symbol('123')

// 4.TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。与 any 一样，所有类型都可以分配给unknown unknow  unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow

// unknow 只能作为夫类型，不能作为子类型（不能把unknow赋值给别的属性，unknow只能赋值给unknow）

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
// let obj:any = {b:1}
// obj.a
 
 
// 如果是unknow 是不能调用属性和方法 如果使用unknow 去调用方法则报错

// let obj:unknown = {b:1,ccc:():number=>213}
// obj.b
// obj.ccc()

//  interface A{name:string}
//  interface A{age:number}
//  var x:A={name:'XX',age:20}
// //  继承
// interface A{
//     name:string 
// }
// interface B extends A{
//     age:number
// }

// let obj:B ={
//     age:18,
//     name:"string"
// }

// console.log(obj);


//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
// interface Person {
//     b:string,
//     a:string
// }
 
// const person:Person  = {
//     a:"213"
// }


//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
// interface Person {
//     b?:string,
//     a:string
// }
 
// const person:Person  = {
//     a:"213"
// }
// console.log(person);


//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性 使用 | 联合类型（后面会讲）
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集(即定义了什么类型，那么这个接口里的所有属性都必须是这个类型)

// interface Person {
//     b?:string,
//     a:string,
//     [propName: string]: any;
// }
 
// const person:Person  = {
//     a:"213",
//     c:"123"
// }

// 只读属性 readonly
// readonly 只读属性是不允许被赋值的只能读取
//这样写是会报错的
//应为a是只读的不允许重新赋值
// interface Person {
//     b?: string,
//     readonly a: string,
//     [propName: string]: any;
// }
 
// const person: Person = {
//     a: "213",
//     c: "123"
// }
 
// person.a = 123


// 添加函数

// interface Person {
//     b? : string,
//     readonly a:string,
//     [proName: string]: any;
//     cb():number //返回什么就定义什么 如果没有返回值就定义void 
// }

// const person: Person ={
//     a:'123',
//     c:'213',
//     cb:()=>{
//         return 123;
        
//     }
// }
