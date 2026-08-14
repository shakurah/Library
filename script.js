const myLibrary = [];

function Book(name, author, datePublished) {
    this.id =  crypto.randomUUID();
    this.name = name;
    this.author =  author;
    this.Published = datePublished;
}

function addToLibrary(name, author, datePublished) {
    let bookObj = {}
    bookObj =  new Book(name, author, datePublished);
    myLibrary.unshift(bookObj)
    
}

addToLibrary("Black Swan", "Nassim Taleb", "2003");
addToLibrary("inside the box", "David Epstein", "2026");


function displayBooks() {
    const container = document.querySelector(".books");
    container.innerHTML = "";


    for (const book of myLibrary){
        console.log(book);
        let bookCard =  document.createElement("div");
        bookCard.innerHTML = `
            <p> Book Title :  ${book.name} </p> 
            <p> Book Author :  ${book.author} </p> 
            <p> Date Published :  ${book.datePublished} </p>`
        bookCard.className = 'card';
        container.appendChild(bookCard)

    }
}

displayBooks()