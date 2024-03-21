// Tag Declaration

navbar = document.querySelector(".navbar");
navbarBrand = document.querySelector("#navbarBrand");
containerNav = document.querySelector("#containerNav");
nArticles = document.querySelector("#nArticles");
nUsers = document.querySelector("#nUsers");
nComments = document.querySelector("#nComments");
idCategories = document.querySelector("#idCategories")

let items = [
    {name: "item 1", description: "description", price: 100, available: true },
    {name: "item 2", description: "description", price: 100, available: true },
    {name: "item 3", description: "description", price: 100, available: true }
]



//Main Program
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

let isIntersected = false;

const intersectNArticles = new IntersectionObserver( 
    (entries) => {
        entries.forEach( 
            (entry) => {
                if (entry.isIntersecting && isIntersected == false){
                    counterTimer(10,100,nArticles);
                    counterTimer(500,100,nUsers);
                    counterTimer(300,100,nComments);
                    isIntersected = true;
                }
            })
        }
        )
        
        intersectNArticles.observe(nArticles);
        
        
//Function Declaration
function createCards(items){
    
}





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
        
        