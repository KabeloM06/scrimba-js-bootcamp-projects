// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes = []) {
	// your code here
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

const book1 = new Book (1, 'Hary Potter', 'J.K. Rowling');
const book2 = new Book (2, 'Dune', 'Frank Herbert');

Book.prototype.addTheme = function(newTheme) {
	this.themes = [...this.themes, newTheme];
}



book1.addTheme('Fantasy');
book2.addTheme('Fantasy');

console.log(book1, book2);