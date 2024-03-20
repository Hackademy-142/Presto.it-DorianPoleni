// Tag Declaration

navbar = document.querySelector(".navbar");
navbarBrand = document.querySelector("#navbarBrand");
containerNav = document.querySelector("#containerNav");
nArticles = document.querySelector("#nArticles");
nUsers = document.querySelector("#nUsers");
nComments = document.querySelector("#nComments");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200){
     navbar.classList.add("navbarScrolled");
     navbar.classList.add("transitionStandard");
    //  navbarBrand.classList.remove("navbar-brand");
    //  navbarBrand.classList.add("brandScrolled");

    //  TEXTToLogo
    //  navbarBrand.innerHTML ="";
    // containerNav.innerHTML = `<img src="./media/logoipsum-212.svg" alt="">`
    // containerNav.appendChild(logo); 


    }
    else{   
        //LogotoTEXT
        // containerNav.innerHTML ="";
        // containerNav.innerHTML = ` <a class="navbar-brand" id="navbarBrand">Presto.it</a>`
        // containerNav.appendChild(logo); 

        navbar.classList.remove("navbarScrolled");
        navbarBrand.classList.remove("brandScrolled");
        navbar.classList.add("transitionStandard");
    }


})


counterTimer(1000,1,nArticles);
counterTimer(500,10,nUsers);
counterTimer(200,20,nComments);




//Function Declaration
function counterTimer(setPoint, time, target){
    let counter = 0;

    let interval = setInterval(() => {
        if (counter < setPoint){
            counter++;
            console.log(counter);
            target.innerHTML = counter;
        }
        else {
            clearInterval(interval);
        }
    }, time);
}
