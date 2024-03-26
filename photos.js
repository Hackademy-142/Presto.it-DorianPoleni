        
        // TAG DECLARATION
        let navbar = document.querySelector(".navbar");
        let navbarBrand = document.querySelector("#navbarBrand");
        let containerNav = document.querySelector("#containerNav");
        let letnArticles = document.querySelector("#nArticles");
        let nUsers = document.querySelector("#nUsers");
        let nComments = document.querySelector("#nComments");
        let idCategories = document.querySelector("#idCategories");
        let itemsContainer = document.querySelector("#itemsContainer");
        let filterContainer = document.querySelector("#filterContainer");
        let priceRange = document.querySelector("#priceRange");
        
        
        let items = [
            {name: "item 1", description: "description 1", price: 100, available: true, img: "https:/picsum.photos/199?grayscale" },
            {name: "item 2", description: "description 2", price: 200, available: false, img: "https:/picsum.photos/200?grayscale" },
            {name: "item 3", description: "description 3", price: 300, available: true, img: "https:/picsum.photos/201?grayscale" },
            {name: "item 4", description: "description 4", price: 300, available: true, img: "https:/picsum.photos/202?grayscale" }
        ]
        
        //*** MAIN PROGRAM ***
        
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
        
        // FETCH API
        fetch("./photos.json").then( (response) => response.json() ).then( (data) => {
            
            // CREATE CARDS
            //TODO: gli devo passare l'array filtrato e creare in base a quello
            function createCards(array){
                
                //Reset Cards
                itemsContainer.innerHTML = "";
                
                array.forEach( (article,index) => {
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
                    itemcard.classList.add("col-11", "col-md-3", "p-0", "itemCard", "position-relative", "d-flex", "justify-content-center", "m-1", "my-3");
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
                    
                    itemsContainer.appendChild(itemcard);
                    
                }   ) 
                
            }
            createCards(data);
            
            // *** FILTER BY CATEGORY ***
            // SET CATEGORIES
            function setCategories(){
                
                let categories = data.map((el) => el.categoria);        
                let uniqueCategories = [];
                categories.forEach((category) => {
                    if (uniqueCategories.includes(category) == false ){
                        uniqueCategories.push(category);
                    } 
                }   )
                uniqueCategories.sort().forEach( (categoria) => {
                    let div = document.createElement("div");
                    div.classList.add("form-check");
                    div.innerHTML = `
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${categoria}">
                    <label class="form-check-label" for="${categoria}">
                    ${categoria}
                    </label>                                                    
                    `
                    filterContainer.appendChild(div);
                }   )
                
            }            
            setCategories();
            
            let checksInput = document.querySelectorAll(".form-check-input");
            console.log(checksInput);
            
            
            function filterByCategory(array){
                let radioBtn = Array.from(checksInput);
                let checked = radioBtn.find( (el) => el.checked)
                if (checked.id == "All"){
                   return array;
                }else{                    
                    let filtered =  array.filter(( el ) =>  el.categoria == checked.id);                                      
                    return filtered;
                }
            }
            
            
            checksInput.forEach( (el) => {
                el.addEventListener("click", () => globalFilter());
            }
            )

            // *** FILTER BY PRICE ***
            let currentValue = document.querySelector("#currentValue");
            let inputPrice = document.querySelector("#inputPrice");
            
            function findMaxAndMinPrice(){
                let price = data.map( (articolo) => articolo.prezzo);
                let max = Math.max(...price);
                let min = Math.min(...price);
                console.log(min);
                console.log(max);
                inputPrice.max = max;
                inputPrice.min = min;
                inputPrice.value = max;
                currentValue.innerHTML = max;
            }   
            findMaxAndMinPrice();
            
            
            function filterByPrice(array){
                let filtered = array.filter( (el) => el.prezzo <= inputPrice.value);
                return filtered;
            }
            
            inputPrice.addEventListener("input", ()=>{
                currentValue.innerHTML = inputPrice.value
                // filterByPrice();
                 globalFilter();
            })
            
            // *** FILTER BY NAME ***
            let inputWord = document.querySelector("#inputword");
            
            function filterByWord(array){
                let filtered = array.filter( (el) => el.nome.toLowerCase().includes(inputWord.value.toLowerCase()));
              return filtered;
            }
            // filterByWord();
            
            inputWord.addEventListener("input", () => {
                globalFilter();
            })

            // *** GLOBAL FILTER ***
            function globalFilter(){
               let filteredC = filterByCategory(data);
               let filteredP = filterByPrice(filteredC);
               let filteredW = filterByWord(filteredP);
               createCards(filteredW);
            }

            
            
            
        });   
        
        
        
        
        
        
        
        
        
        
        
        
        //FETCH API END
        
        
        
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