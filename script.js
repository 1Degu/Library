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
            Book.prototype.fullAuthorsName = function() {
              console.log(this.author, this.title);
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

   
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

