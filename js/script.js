/* 
JJ McCormick
final-dev/js/script.js
*/

//book1 obj
var book1 = new Object();
book1.img = "./img/html.jpg";
book1.imgalt = "book cover 1";
book1.auth = "Duckett, J. (2014)";
book1.title = "HTML & CSS: Design & Build Websites, 1st. Wiley";
book1.isbn10 = "1118008189";
book1.isbn13 = "978-111800818";
book1.link = "www.htmlandcssbook.com";

//book2 obj
var book2 = new Object();
book2.img = "./img/jsbook.png";
book2.auth = "Duckett, J. (2014)";
book2.title = "JavaScript and jQuery: Interactive Front-End Web Development, 1st Wiley.";
book2.isbn10 = "1118531647";
book2.isbn13 = "978-1118531648";
book2.link = "www.javascriptbook.com";

//when window load this function displays all cotent in book1ele and book2ele in html doc
window.onload = function(){
    var book1html =
    '<div class= "book1-wrapper">' +
    '<div class="bookimg" id="box1"><img src="' + this.book1.img +'" alt="' + this.book1.imgalt +'"></div>'
    +'<div class="bookinfo" id="box2">'
    +  '<h3>' + this.book1.title +'</h3>'
    +'<ul>'
     + '<li>Author: ' + this.book1.auth +'</li>'
      +'<li>Book Title: ' + this.book1.title +'</li>'
      +'<li>ISBN-10: ' + this.book1.isbn10 +' </li>'
      +'<li>ISBN-13: ' + this.book1.isbn13 +'</li>'
      +'<li>Website: <a href="' + this.book1.link +'"> ' + this.book1.link +'</a></li>'
      +'</ul>'
    +'</div>';

    var book2html =
    '<div class= "book1-wrapper">' +
    '<div class="bookimg" id="box1"><img src="' + this.book2.img +'" alt="' + this.book2.imgalt +'"></div>'
    +'<div class="bookinfo" id="box2">'
    +  '<h3>' + this.book2.title +'</h3>'
    +'<ul>'
     + '<li>Author: ' + this.book2.auth +'</li>'
      +'<li>Book Title: ' + this.book2.title +'</li>'
      +'<li>ISBN-10: ' + this.book2.isbn10 +' </li>'
      +'<li>ISBN-13: ' + this.book2.isbn13 +'</li>'
      +'<li>Website: <a href="' + this.book2.link +'"> ' + this.book2.link +'</a></li>'
      +'</ul>'
    +'</div>';
    
    //execution of displayed doc
    document.getElementById("book1ele").innerHTML = book1html;
    document.getElementById("book2ele").innerHTML = book2html;

  
}


