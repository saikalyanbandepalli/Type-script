import { book } from './book';
import { Library } from './library';
 
const lib= new Library();
 
const book1 = new book("Book1","harry");
const book2 = new book("Book2","potter");
const book3 = new book("Book3","shinchan");
 
lib.addBook(book1);
lib.addBook(book2);
lib.addBook(book3); 
console.log(lib.listBooks());