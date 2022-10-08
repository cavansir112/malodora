$(document).ready(function () {


    $("#md-icons").click(function(){
        $(".navbar-mobile-liner").css({left: "0"})
        $("body").css({overflow: "hidden"})
    });

    $("#removeMenu").click(function(){
      $(".navbar-mobile-liner").css({left: "-100%"})
      $("body").css({overflow: "visible"})
    });

    $(".search").click(function(){
        $(".menu-search").toggle()
    })

    let partData = $("#products0");
    let partData2 = $("#products1");
    let partData3 = $("#products2");
    let partData4 = $("#products3");
    let partData5 = $("#products4");



    let part = data;

    for (let i = 0; i < part.length; i++) {
      partData.append(`<div id="pro${data.id}" class="products">
                            <img src="${part[i].img}" alt="">
                            <div class="products-name ">
                                <h6>${part[i].name}</h6>
                                <img src="${part[i].cost}" alt="">
                            </div>
                        </div>`)
    }

    let part2 = data2;

    for (let i = 0; i < part2.length; i++) {
      partData2.append(`<div id="pro${part2[i].id}" class="products">
                            <img src="${part2[i].img}" alt="">
                            <div class="products-name ">
                                <h6>${part2[i].name}</h6>
                                <img src="${part2[i].cost}" alt="">
                            </div>
                        </div>`)
    }

    let part3 = data3;

    for (let i = 0; i < part3.length; i++) {
      partData3.append(`<div id="pro${part3[i].id}" class="products">
                            <img src="${part3[i].img}" alt="">
                            <div class="products-name ">
                                <h6>${part3[i].name}</h6>
                                <img src="${part3[i].cost}" alt="">
                            </div>
                        </div>`)
    }

    let part4 = data4;

    for (let i = 0; i < part4.length; i++) {
      partData4.append(`<div id="pro${part4[i].id}" class="products">
                            <img src="${part4[i].img}" alt="">
                            <div class="products-name ">
                                <h6>${part4[i].name}</h6>
                                <img src="${part4[i].cost}" alt="">
                            </div>
                        </div>`)
    }

    let part5 = data5;

    for (let i = 0; i < part3.length; i++) {
      partData5.append(`<div id="pro${part5[i].id}" class="products">
                            <img src="${part5[i].img}" alt="">
                            <div class="products-name ">
                                <h6>${part5[i].name}</h6>
                                <img src="${part5[i].cost}" alt="">
                            </div>
                        </div>`)
    }

    let partMenu = $("#productsLis li");

    for(let i = 0; i < partMenu.length; i++){
        $(`.nav${i}`).click(function(){
           for(let j = 0; j < $(".products-box").length; j++){
            $(`#products${j}`).removeClass("products-active")
            $(`.nav${j}`).removeClass("active")
           }
          $(`#products${i}`).addClass("products-active")
          $(`.nav${i}`).addClass("active")
        })
    }

    


});

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function myFunction() {
    var input, filter, ul, li, a, i, addList;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ulSearch");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      addList = document.getElementsByClassName("addList");
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        addList.innerHTML = li[i]
        console.log("dv")
      } else {
        addList.innerHTML = ""
        console.log("dvvv")


      }
    }
  }
