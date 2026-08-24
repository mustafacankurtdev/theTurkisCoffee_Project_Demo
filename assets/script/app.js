// window.addEventListener("DOMContentLoaded", () => {




//     // let Timer;
//     // let timerSpeed = 1000;
//     // let count = 0;

//     // let Image = ["assets/photoAll/coffePhoto1.jpg",
//     //     "assets/photoAll/coffePhoto2.jpg"];

//     // let ImageSec = document.querySelector(".imageSec");


//     // function slider() {
//     //     Timer = setInterval(() => {
//     //         count++;
//     //         if (count == 1) {
//     //             ImageSec.src = Image[0];
//     //         }
//     //         else if (count == 2) {
//     //             ImageSec.src = Image[1];
//     //         }
//     //         else {
//     //             count = 0;
//     //             window.console.info(" Count Equals 0!");
//     //         }

//     //         // count++;
//     //         // ImageSec.src = Image[count];
//     //     }, timerSpeed);
//     // }





//     // const products = [
//     //     {
//     //         product: "Laptop",
//     //         price: 1000,
//     //     }
//     // ]

//     // let exampleSection = document.querySelector(".theExample");
//     // const productsGo = products.
//     //     filter((prdct) => {
//     //         if (prdct.product === "Laptop") {
//     //             window.console.info("Laptop is here!", "Ürününüz:", prdct);
//     //         }
//     //         else if (prdct.price < 1000) {
//     //             window.console.info("Price is less than 1000!", "Ürününüz:", prdct);
//     //         }

//     //         if (prdct.product === "Laptop") {

//     //         exampleSection.innerHTML =
//     //             `
//     //          <div class="theExample" style="width: 100%;
//     //          height: 100px;" >
//     //             ${prdct.product}
//     //          </div>
//     //         `;
//     //         }

//     //     });
//     // const example = products.map((prdct) => {

//     //     exampleSection.innerHTML =
//     //         `
//     //      <div class="theExample" style="width: 100%;
//     //      height: 100px;" >
//     //         ${prdct.product}
//     //      </div>
//     //     `;
//     // });


// });


window.addEventListener("DOMContentLoaded", () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowTotal = Math.floor(windowHeight + 270 + 420);

    //1420 screen Height

    const isActive = {
        display: "flex"
    }

    const isnotActive = {
        display: "none"
    }

    let upCircle = document.querySelector(".head-up");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= windowTotal) {
            Object.assign(upCircle.style, isActive);
        }
        else {
            Object.assign(upCircle.style, isnotActive);
        }


        let isTrue = false;
        let userPlaceholder = "Adınız:";
        let lastPlaceholder = "Soyadınız:";

        let mailPlaceholder = "Mailiniz:";
        let textareaPlaceholder = "Şikayetleriniz:";

        const shadowforInptu = {
            transition: "BoxShadow 1.2s ease-out",
            boxShadow: "2px 2px 2px lightblue"
        }

        // let borderRadius;

        // shadowforInptu.borderRadius = "25px";

        // console.info(shadowforInptu);

        function removePlacholder(us, la, mail, txtarea) {
            us = document.querySelector(".input-row-1");
            us.addEventListener("focus", () => {
                isTrue = true;
                if (isTrue === true) {
                    us.placeholder = "";
                    la.placeholder = lastPlaceholder;
                    mail.placeholder = mailPlaceholder;
                    txtarea.placeholder = textareaPlaceholder;
                }
            });

            la = document.querySelector(".input-row-2");
            la.addEventListener("focus", () => {
                isTrue = true;
                if (isTrue === true) {
                    la.placeholder = "";
                    us.placeholder = userPlaceholder;
                    mail.placeholder = mailPlaceholder;
                    txtarea.placeholder = textareaPlaceholder;
                }
            });

            mail = document.getElementById("email-Id");
            mail.addEventListener("focus", () => {
                isTrue = true;
                if (isTrue) {
                    la.placeholder = lastPlaceholder;
                    us.placeholder = userPlaceholder;
                    txtarea.placeholder = textareaPlaceholder;
                    mail.placeholder = "";
                }
            });

            txtarea = document.getElementById("texrarea-Id")
            txtarea.addEventListener("focus" , () => {
               isTrue = true;
               if(isTrue){
                la.placeholder = lastPlaceholder;
                us.placeholder = userPlaceholder;
                mail.placeholder = mailPlaceholder;
                txtarea.placeholder = "";
               }
            });



            Object.assign(txtarea.style ,us.style, la.style, mail.style, shadowforInptu);



        }

        removePlacholder();



    });
    // let countHeight = 0;
    // let timer = setInterval(() => {
    //     countHeight++;
    //     console.log(countHeight);
    //     if(countHeight === windowTotal){

    //         clearInterval(timer);
    //     }
    // }, 10)


    // the change font in the javascript , This's just try!
    // let tryforMath = document.querySelector(".try");

    // let total = 15.5;
    // let totalFont = Math.floor(total + 35);

    // const styleFont = {
    //     fontSize: `${totalFont}px`
    // }

    // Object.assign(tryforMath.style ,styleFont)

});