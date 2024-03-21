// Tag Declaration

navbar = document.querySelector(".navbar");
navbarBrand = document.querySelector("#navbarBrand");
containerNav = document.querySelector("#containerNav");
nArticles = document.querySelector("#nArticles");
nUsers = document.querySelector("#nUsers");
nComments = document.querySelector("#nComments");
idCategories = document.querySelector("#idCategories");
cardContainer = document.querySelector("#cardContainer");

let items = [
    {name: "item 1", description: "description 1", price: 100, available: true, img: "https:/picsum.photos/199?grayscale" },
    {name: "item 2", description: "description 2", price: 200, available: false, img: "https:/picsum.photos/200?grayscale" },
    {name: "item 3", description: "description 3", price: 300, available: true, img: "https:/picsum.photos/201?grayscale" }
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

//interesection observer
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
        
        //Create cards
        createCards(items);
        
        //Function Declaration
        function createCards(items){
            
            items.forEach( (element,index) => {
                if (index >= items.length - 3){

                let itemcard = document.createElement("div");
                
                itemcard.classList.add("col-11", "col-md-4", "p-0", "itemCard", "position-relative", "d-flex", "justify-content-center", "my-4");
                
                let itemAvailable = `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger z-3">
                New
                </span>
                <div class="card" style="width: 15rem;">
                <div class="overflow-hidden">
                <img src="${element.img}" class="card-img-top transition05" alt="...">
                </div>
                <div class="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <i class="fa-solid fa-heart-circle-plus"></i>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center align-middle">
                <strong>Price</strong><span>${element.price}</span>
                </div></li>
                <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center align-middle">
                <p class="m-0 p-0">Available</p>
                <i class="fa-solid fa-check"></i>
                <!-- <i class="fa-solid fa-xmark"></i> -->
                </div>
                </li>
                </ul>
                <div class="card-body d-flex justify-content-center">
                <button class ="cardButtonBuy border-0 transition05">Buy Now</button>
                <!-- <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> -->
                </div>
                </div>`

                let itemNotAvailable = `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger z-3">
                New
                </span>
                <div class="card" style="width: 15rem;">
                <div class="overflow-hidden">
                <img src="${element.img}" class="card-img-top transition05" alt="...">
                </div>
                <div class="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <i class="fa-solid fa-heart-circle-plus"></i>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center align-middle">
                <strong>Price</strong><span>${element.price}</span>
                </div></li>
                <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center align-middle">
                <p class="m-0 p-0">Sold Out</p>
                <!-- <i class="fa-solid fa-check"></i> -->
                <i class="fa-solid fa-xmark"></i>
                </div>
                </li>
                </ul>
                <div class="card-body d-flex justify-content-center">
                <button class ="cardButtonBuy border-0 transition05">Buy Now</button>
                <!-- <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> -->
                </div>
                </div>`

                if (element.available == true){
                    itemcard.innerHTML = itemAvailable;
                }else{
                    itemcard.innerHTML = itemNotAvailable; 
                }
                
                cardContainer.appendChild(itemcard);

            }
                
            }   ) 
            
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
        
        