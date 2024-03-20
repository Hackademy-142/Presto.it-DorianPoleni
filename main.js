// Tag Declaration

navbar = document.querySelector(".navbar");
navbarBrand = document.querySelector("#navbarBrand");
containerNav = document.querySelector("#containerNav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
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