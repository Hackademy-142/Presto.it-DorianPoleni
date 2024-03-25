        
        // TAG DECLARATION
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
            {name: "item 3", description: "description 3", price: 300, available: true, img: "https:/picsum.photos/201?grayscale" },
            {name: "item 4", description: "description 4", price: 300, available: true, img: "https:/picsum.photos/202?grayscale" }
        ]
        
        //MAIN PROGRAM
        
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
        
        fetch("./photos.json").then( (response) => response.json() ).then( (data) => {
            
            function createCards(){
                data.forEach( (article,index) => {
                    //Create last 3 Card Object entries
                    if (index >= items.length - 3){
                        //Create Card Object
                        let sAvailable = "NA";
                        let faAvailable = "NA";
                        
                        if (article.available == true){
                            sAvailable = "Available";
                            faAvailable = "fa-solid fa-check";
                        } else{
                            sAvailable = "Not Available";
                            faAvailable = "fa-solid fa-xmark";
                            
                        }
                        
                        let itemcard = document.createElement("div");
                        itemcard.classList.add("col-11", "col-md-3", "p-0", "itemCard", "position-relative", "d-flex", "justify-content-center", "m-1");
                        let itemAvailable = `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger z-3">
                                                New
                                                </span>
                                                <div class="card" style="width: 15rem;">
                                                <div class="overflow-hidden">
                                                <img src="${article.img}" class="card-img-top transition05" alt="...">
                                                </div>
                                                <div class="card-body d-flex flex-column justify-content-between align-items-center">
                                                <h5 class="card-title">${article.nome}</h5>
                                                <p class="card-text">${article.categoria}</p>
                                                <i class="fa-solid fa-heart-circle-plus"></i>
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                <div class="d-flex justify-content-between align-items-center align-middle">
                                                <strong>Price</strong><span>${article.prezzo}</span>
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
                                                </div>`
                        
                        itemcard.innerHTML = itemAvailable;
                        
                        cardContainer.appendChild(itemcard);
                        
                    }
                    
                }   ) 
                
            }
            createCards()







        });   
        
        //Function Declaration

        
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