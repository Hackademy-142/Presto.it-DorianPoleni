// *** Tag Declaration ***

navbar = document.querySelector(".navbar");
navbarBrand = document.querySelector("#navbarBrand");
containerNav = document.querySelector("#containerNav");
nArticles = document.querySelector("#nArticles");
nUsers = document.querySelector("#nUsers");
nComments = document.querySelector("#nComments");
idCategories = document.querySelector("#idCategories");
cardContainer = document.querySelector("#cardContainer");
badgeContainer1 = document.querySelector("#badgeContainer1");

let items = [
    {name: "item 1", description: "description 1", price: 100, available: true, img: "https:/picsum.photos/199?grayscale" },
    {name: "item 2", description: "description 2", price: 200, available: false, img: "https:/picsum.photos/200?grayscale" },
    {name: "item 3", description: "description 3", price: 300, available: true, img: "https:/picsum.photos/201?grayscale" },
    {name: "item 4", description: "description 4", price: 300, available: true, img: "https:/picsum.photos/202?grayscale" }
]




// *** Main Program ***
window.addEventListener("scroll", () => {
    if (window.scrollY > 0){
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
        
        
        fetch("./photos.json").then( (response) => response.json()).then( (data)  => {
            //Swiper
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                },
                loop: true,
                spaceBetween: 30,                
                autoplay: {
                  delay: 1500,
                  disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            
            
            //Create cards
            createCards(data);
            
            // *** Function Declaration ***
            function createCards(data){
                data.forEach( (element,index) => {
                    //Create last 3 Card Object entries
                    
                    //Create Card Object
                    let sAvailable = "NA";
                    let faAvailable = "NA";
                    
                    if (element.available == true){
                        sAvailable = "Available";
                        faAvailable = "fa-solid fa-check";
                    } else{
                        sAvailable = "Not Available";
                        faAvailable = "fa-solid fa-xmark";
                        
                    }
                    
                    let itemcard = document.createElement("div");
                    // itemcard.classList.add("col-11", "col-md-4", "p-0", "itemCard", "position-relative", "d-flex", "justify-content-center", "my-4");
                    itemcard.classList.add("swiper-slide", "itemCard");
                    let itemAvailable = ` 
                    <div class="card" style="width: 15rem;">
                    <div class="overflow-hidden">
                    <img src="${element.img}" class="card-img-top transition05" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between align-items-center">
                    <h5 class="card-title">${element.nome}</h5>
                    <p class="card-text">${element.categoria}</p>
                    <i class="fa-solid fa-heart-circle-plus"></i>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center align-middle">
                    <strong>Price</strong><span>${element.prezzo}</span>
                    </div></li>
                    <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center align-middle">
                    <p class="m-0 p-0">${sAvailable}</p>
                    <i class="${faAvailable}"></i>
                    <!-- <i class="fa-solid fa-xmark"></i> -->
                    </div>
                    </li>
                    </ul>
                    <div class="card-body d-flex justify-content-center">
                    <button class ="cardButtonBuy border-0 transition05">Buy Now</button>
                    <!-- <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a> -->
                    </div>
                    </div>
                    `
                    
                    // let itemAvailable = `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger z-3 swiper-slide">
                    //                         New
                    //                         </span>
                    //                         <div class="card" style="width: 15rem;">
                    //                         <div class="overflow-hidden">
                    //                         <img src="${element.img}" class="card-img-top transition05" alt="...">
                    //                         </div>
                    //                         <div class="card-body d-flex flex-column justify-content-between align-items-center">
                    //                         <h5 class="card-title">${element.name}</h5>
                    //                         <p class="card-text">${element.description}</p>
                    //                         <i class="fa-solid fa-heart-circle-plus"></i>
                    //                         </div>
                    //                         <ul class="list-group list-group-flush">
                    //                         <li class="list-group-item">
                    //                         <div class="d-flex justify-content-between align-items-center align-middle">
                    //                         <strong>Price</strong><span>${element.price}</span>
                    //                         </div></li>
                    //                         <li class="list-group-item">
                    //                         <div class="d-flex justify-content-between align-items-center align-middle">
                    //                         <p class="m-0 p-0">${sAvailable}</p>
                    //                         <i class="${faAvailable}"></i>
                    //                         <!-- <i class="fa-solid fa-xmark"></i> -->
                    //                         </div>
                    //                         </li>
                    //                         </ul>
                    //                         <div class="card-body d-flex justify-content-center">
                    //                         <button class ="cardButtonBuy border-0 transition05">Buy Now</button>
                    //                         <!-- <a href="#" class="card-link">Card link</a>
                    //                         <a href="#" class="card-link">Another link</a> -->
                    //                         </div>
                    //                         </div>`
                    
                    itemcard.innerHTML = itemAvailable;
                    
                    cardContainer.appendChild(itemcard);
                    
                    
                    
                }   ) 
                
            }
            
            
            
            
        });
        
        
        
        function counterTimer(setPoint, time, target){
            let counter = 0;
            let interval = setInterval(() => {
                
                if (counter < setPoint){
                    counter++;
                    // console.log(counter);
                    target.innerHTML = counter;
                }
                else {
                    clearInterval(interval);
                }
            }, (time/setPoint)*time);
            
        }
        
        
        
        
        
        
        