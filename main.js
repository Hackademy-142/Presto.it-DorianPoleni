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
        //  TEXTToLogo
        navbarBrand.innerHTML ="";
        navbarBrand.innerHTML = `<img src="./media/logoipsum-212.svg" alt="">`    
    }
    else{   
        //LogotoTEXT
        navbarBrand.innerHTML ="";
        navbarBrand.innerHTML = `Presto.it`
        
        navbar.classList.remove("navbarScrolled");
        // navbarBrand.classList.remove("brandScrolled");
        navbar.classList.add("transitionStandard");
    }
    
    
})


counterTimer(10,100,nArticles);
counterTimer(500,100,nUsers);
counterTimer(300,100,nComments);




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
    }, (time/setPoint)*time);
}
