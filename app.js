var coin = document.querySelectorAll(".coin");
var mining = document.querySelectorAll(".mining");
var show = document.querySelectorAll(".show")
var coins = document.querySelector(".coins")
var ltc = document.querySelector("#ltc")
var btc = document.querySelector("#btc")
var eth = document.querySelector("#eth")
// var fa = document.querySelector(".fa");


for (let i = 0; i < coin.length; i++) {
    coin[i].addEventListener("click", function(){
        coin[i].classList.toggle('dark-theme');
       if(coin[i].classList.contains("dark-theme")){
        // console.log("pray")
        show[i].style.display = "none";
        mining[i].style.display= "block"
       } else{
        show[i].style.display = "block";
        mining[i].style.display= "none";
       }
      
    //    if (coin[i].classList.contains("dark-theme")){
    //     console.log(":party")
    // var i = 0;
    //     coin[i].classList.remove('dark-theme');
    // //    eth.classList.remove('dark-theme');
    //    }
//    if (!(ltc.classList.contains("dark-theme")) && !(btc.classList.contains("dark-theme"))){
//     eth.className = "dark-theme"
//    } else if (!(eth.classList.contains("dark-theme")) && !(btc.classList.contains("dark-theme"))){
//     btc.className = "dark-theme"
//    } else if(!(eth.classList.contains("dark-theme")) && !(btc.classList.contains("dark-theme"))){
//     ltc.className = "dark-theme"
//    }
//    if (eth.className = "dark-theme"){

//    }
        if (ltc.classList.contains("dark-theme")){
        console.log("pa")
       btc.classList.remove('dark-theme');
       eth.classList.remove('dark-theme');
       } 
       if (btc.classList.contains("dark-theme")){
        console.log(":party1")
       ltc.classList.remove('dark-theme');
       eth.classList.remove('dark-theme');
       } 
       if (eth.classList.contains("dark-theme")){
        console.log(":party2")
       ltc.classList.remove('dark-theme');
       btc.classList.remove('dark-theme');
       }
// for (let i = 0; i < coins.length; i++) {
//     if(coin[i].className = "dark-theme"){
//         coins[i].classList.remove('dark-theme')
//     }
// }
   
        })
       
 }





 // document.body.classList.toggle("dark-theme");
    // if(document.body.classList.contains("dark-theme")){
    //     show.style.display = "none"
    //     mining.style.display = "block"
       
    // }else{
    //     show.style.display = "block"
    //     mining.style.display = "none"
    // }

/*
coin.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        show.style.display = "none"
        mining.style.display = "block"
       
    }else{
        show.style.display = "block"
        mining.style.display = "none"
    }
}*/

