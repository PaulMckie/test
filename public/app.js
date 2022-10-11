import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Payment } from './classes/payment.js';
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
const form = document.querySelector(".new-item-form");
// input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
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
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["FILM"] = 1] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 2] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 3] = "PERSON";
})(resourceType || (resourceType = {}));
const docOne = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { title: 'name of teh wind' }
};
const docTwo = {
    uid: 10,
    resourceType: resourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(docOne, docTwo);
