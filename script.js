console.log("Coffee House Loaded Successfully");

// Order Button
const button = document.getElementById("orderBtn");

if(button){

    button.addEventListener("click",function(){

        alert("Thank you for choosing Coffee House!");

    });

}

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

if(topBtn){

    topBtn.addEventListener("click",function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

// Today's Date
const date = document.getElementById("date");

if(date){

    date.innerHTML = new Date().toDateString();

}