window.addEventListener("DOMContentLoaded", () => {

    let timerCards;
    let cardsSpeed = 100;
    let isActive = true;

    let cardIndex = 3;


    const flexBottom = {
        flexWrap: "wrap",

    }

    const rowBottom = {
        flexDirection: "row"
    }

    let cards = document.querySelector(".cards");
    let timer;
    let timerSpeed = 1000;

    let timerCount = 0;

    const searchBox = document.getElementById("search-Id");


    function showAlert(mssg) {
        window.console.info(mssg);
    }


    function theCards() {
        fetch("assets/JSON/products.json")
            .then(res => res.json())
            .then(products => {

                const { title, price, image } = products;

                title.forEach((item, index) => {
                    cards.innerHTML +=
                        `
                    <div class="card">
                  <div class="img-card">
                         <img src="${image[index]}" alt="cardPhoto">
                     </div>

                     <div class="title-card">
                         <h1>${item}</h1>
                     </div>

                     <div class="price-card">
                         <p>${item, price[index]} TL</p>
                     </div>
                     </div>`;



                    function filterSearch() {
                        searchBox.addEventListener("input", () => {
                            let valueSearch = searchBox.value.toLowerCase();
                            let result = title.filter(item =>
                                item.toLowerCase().includes(valueSearch)
                            );

                            cards.innerHTML = "";

                            if (cards.innerHTML != "") {
                                showAlert();
                            }
                            else {
                                showAlert(item);
                                result.forEach(itm => {
                                    cards.innerHTML +=
                                        `
                        <div class="card">
                          <div class="img-card">
                        <img src="${image[index]}" alt="cardPhoto">
                          </div>

                        <div class="title-card">
                         <h1>${itm}</h1>
                        </div>

                        <div class="price-card">
                         <p>${item, price[index]} TL</p>
                        </div>
                        </div>`;

                                });
                            }
                        });
                    }
                    filterSearch();
                });
            });
    }



    function thecardWrap() {
        if (cards.children.length >= cardIndex) {
            Object.assign(cards.style, flexBottom);
        }
        else if (cards.children.length <= cardIndex) {
            Object.assign(cards.style, rowBottom);
        }
    }

    timer = setInterval(() => {
        timerCount++;
        if (timerCount === 1) {
            thecardWrap();
        }
        else {
            clearInterval(timer);
        }
    }, timerSpeed);


    if (isActive) {
        timerCards = setTimeout(() => {
            theCards();
        }, cardsSpeed);
    }


});