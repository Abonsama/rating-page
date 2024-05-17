let pg1 = document.querySelector(".pg1");
let pg2 = document.querySelector(".pg2");
let stars = document.querySelector(".stars");
let sub = document.querySelector(".Submit");
let buttons = document.querySelectorAll(".nums button");

pg2.classList.add("none");

document.addEventListener("click", function (e) {
    let choice = e.target.innerText;

    // Check if the clicked element is a button
    if (e.target.tagName === "BUTTON") {
        // Remove background style from all buttons
        buttons.forEach(button => button.classList.remove("background"));

        if (!isNaN(parseInt(choice)) === true) {
            if (e.target.classList.contains("background")) {
                e.target.classList.remove("background");
            } else {
                e.target.classList.add("background");
            }
            let rate = choice;
            txt = `You selected ${rate} out of 5`;
            stars.innerText = txt;
        }
    }

    if (choice === "Submit") {
        if (stars.innerText !== "") {
            pg1.classList.add("none");
            pg2.classList.remove("none");
        }
    }
    if (choice === "back to vote") {
        if (stars.innerText !== "") {
            pg2.classList.add("none");
            pg1.classList.remove("none");
        }
    }
});
// the old version
/*let pg1 =document.querySelector(".pg1")
let pg2 =document.querySelector(".pg2")
let stars =document.querySelector(".stars")
let sub = document.querySelector(".Submit")

pg2.classList.add("none")
document.addEventListener("click",function(e){
    let choice = e.target.innerText
    if(!isNaN(parseInt(choice))=== true){
        if(e.target.classList.contains("background")){
            e.target.classList.remove("background")
        }else{
            e.target.classList.add("background")
        }
        let rate = choice
        txt = `You selected ${rate} out of 5`
        stars.innerText = txt
    } 
    if (choice ==="Submit"){
        if(stars.innerText!==""){            
        pg1.classList.add("none")
        pg2.classList.remove("none")
        }
    }
    if (choice ==="back to vote"){
        if(stars.innerText!==""){            
        pg2.classList.add("none")
        pg1.classList.remove("none")
        }
    }
}) */