const myLibrary = [];

function Book(name, author, datePublished) {
    this.id =  crypto.randomUUID();
    this.name = name;
    this.author =  author;
    this.published = datePublished;
    this.read = false;
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
            <p> Date Published :  ${book.published} </p>
            <button class="read-book false-read" data-id=${book.id} data-read=${book.read}> Read </button> 
            <button class="remove-book" data-id=${book.id}> Remove </button>
            `
        bookCard.className = 'card';
        const readBook = bookCard.querySelector(".read-book")
        readBook.addEventListener('click', (e) => {
            const UniqueId = e.target.dataset.id
            const index = myLibrary.findIndex(item => item.id === UniqueId)
            console.log(e.target.dataset.read) 
            if (e.target.dataset.read === "false"){
                    myLibrary[index].read = true
                    
                    readBook.className = "true-read";
                    console.log(e.target.dataset.read)
            }
            else {
                myLibrary[index].read = false

                readBook.className = "false-read";
            }
        })
        const removeBook = bookCard.querySelector(".remove-book")
        removeBook.addEventListener('click', (e) => {
            const UniqueId = e.target.dataset.id
            const index = myLibrary.findIndex(item => item.id === UniqueId)

            if (index !== -1){
                myLibrary.splice(index, 1)
            }
            displayBooks()

        })
        container.appendChild(bookCard)

    }
}

const dialog = document.querySelector("dialog#newBook")
const addBookBtn = document.getElementById("addBook")


displayBooks()



addBookBtn.addEventListener('click', (e) => {
    const title = document.getElementById("title")
    const author =  document.getElementById("author")
    const date = document.getElementById("date")  
    addToLibrary(title.value, author.value, date.value ) 
    e.preventDefault()
    dialog.close()
    displayBooks()
})

