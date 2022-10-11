import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('luigi', 'plumbing work', 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);


// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv =>{
// //     console.log(inv.client, inv.amount, inv.format());
// })

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invOne.client = 'yoshi';
// invTwo.amount = 400;

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// input
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

let values: [string, string, number];
values = [tofrom.value, details.value, amount.valueAsNumber]

let doc: HasFormatter;
if (type.value === 'invoice') {
    doc = new Invoice(...values)
} else {
    doc = new Payment(...values)
}

list.render(doc, type.value, 'end');

})

// tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true]; // types are fixed once a tuple is defined

// let student: [string, number];
// student = ['chun-li', 223423];

// GENERICS

// const addUID = <T extends {name: string}>(obj: T) => { // capures properties of type
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: 'yoshi', age: 40});
// // let docTwo = addUID('hello')

// console.log(docOne.age);

// // with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docThree: Resource<string> = {
//     uid: 1,
//     resourceName: 'person',
//     data: 'shaun'
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toliet roll']
// }

// console.log(docThree, docFour);

// ENUM

// enum resourceType { BOOK, FILM, DIRECTOR, PERSON }

// interface Resource<T> {
//     uid: number;
//     resourceType: number;
//     data: T;
// }

// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: resourceType.BOOK,
//     data: { title: 'name of the wind' }
// }

// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: resourceType.PERSON,
//     data: { name: 'yoshi' }
// }

// console.log(docOne, docTwo);