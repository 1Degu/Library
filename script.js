 let myLibrary = [];

            function Book(title, author, pages, readStatus) {
              this.title = title;
              this.author = author;
              this.pages = pages;
              this.readStatus = readStatus;
            }
            
            function addBookToLibrary(title, author, pages, readStatus) {
              let newBook = new Book(title, author, pages, readStatus);
              myLibrary.push(newBook);
            }
            

            let submitForm = document.getElementById("submitForm");

    submitForm.addEventListener("submit", function (event) {
      event.preventDefault();
            let author = document.getElementById("Author").value;
            let title = document.getElementById("Title").value;
            let pages = document.getElementById("Pages").value;
            let readStatus = document.getElementById("readStatus").checked;
        
      
            addBookToLibrary(title, author, pages, readStatus);

           
            console.log(myLibrary);

        
        
    } );

