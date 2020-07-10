//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();

});





function hamburgerMenu() {
  
  $( "#content" ).toggle();
  $( "#hamburger-menu" ).toggle();
  
}
if  (window.innerWidth <= 991) {
  $( ".layout--bg" ).css('height', window.innerHeight) ;
} 


// $( "#inner-layout .layout--container" ).css('width', 'calc('+innerWidth+' - 36vw)') ;



// if  (window.innerWidth >= 1024) {
//   $( ".layout--container" ).css('width', 'calc('+innerWidth+'px - ('+innerWidth+'px / 2.7))') ;

//   window.onresize = function() {
//     $( ".layout--container" ).css('width', 'calc('+innerWidth+'px - ('+innerWidth+'px / 2.7))') ;
//   }
// }








// window.onresize = function() {
  
//   this.console.log($( ".layout--hero" ).height());

//   // $( ".layout--container " ).css('margin-top', ($( ".layout--hero" ).height() * 0.8) -  (window.innerHeight - (window.innerHeight - 210)));
  
//   if ((window.innerHeight <= 1080) || (window.innerWidth <= 1920))  {
//     $( ".layout--container " ).css('margin-top', ($( ".layout--hero" ).height() * 0.8) -  (window.innerHeight - (window.innerHeight - 220)));
//     this.console.log('a');
//   }
//   if ((window.innerHeight <= 900) || (window.innerWidth <= 1440))  {
//     $( ".layout--container " ).css('margin-top', ($( ".layout--hero" ).height() * 0.8) -  (window.innerHeight - (window.innerHeight - 160)));
//     this.console.log('b');
//   }
//   if ((window.innerHeight <= 768) || (window.innerWidth <= 1366))  {
//     $( ".layout--container " ).css('margin-top', ($( ".layout--hero" ).height() * 0.8) -  (window.innerHeight - (window.innerHeight - 160)));
//     this.console.log('c');
//   }

//   if ((window.innerHeight <= 650) || (window.innerWidth <= 1366))  {
//     $( ".layout--container " ).css('margin-top', ($( ".layout--hero" ).height() * 0.8) -  (window.innerHeight - (window.innerHeight - 120)));
//     this.console.log('d');
//   }

//   // if ((window.innerHeight <= 650) || (window.innerWidth <= 1050))  {
//   //   $( ".layout--container " ).css('margin-top', ($( ".layout--hero" ).height() * 0.8) -  (window.innerHeight - (window.innerHeight - 140)));
//   //   this.console.log('d');
//   // }
 
// }

var path = window.location.pathname.split('/')[2].split('.')[0];

if (path == 'urun-icerigi'){
  $( ".topnav--item__1" ).addClass('topnav--item--active');
}
if (path == 'beslenme-tablosu'){
  $( ".topnav--item__2" ).addClass('topnav--item--active');
}
if (path == 'kimler-rapor-yazabilir'){
  $( ".topnav--item__3" ).addClass('topnav--item--active');
}
if (path == 'pirinc-proteini-bazli-formula-ile-tarifler'){
  $( ".topnav--item__4" ).addClass('topnav--item--active');
}
if (path == 'doz-hesapla'){
  if  (window.innerWidth > 1024) {
    $( ".module--title__module__doz" ).css('display', 'block');
  } 
  $( ".inner__header__doz__hesapla__js" ).css('display', 'none');
  
}
if (path == 'presentil-hesapla'){
  if  (window.innerWidth > 1024) {
    $( ".module--title__module__presentil" ).css('display', 'block');
  } 
  $( ".inner__header__presentil__hesapla__js" ).css('display', 'none');
}

  $('input[name="weight-energy"]').val("---")
  $('input[name="daily-energy"]').val("---")
  $('input[name="monthly-energy"]').val("---")

  $('input[name="baby-weight"]').on('input', function() {
    calculate(0);
  });
  $('input[name="weight-energy"]').on('input', function() {
    calculate(1);
  });
$('#percentage').on('change', function() {
  calculate(0);
});



function calculate(arr){

  var baby_age = $('select[name=baby-age] option').filter(':selected').val();
  var baby_weight = $('input[name="baby-weight"]').val();
  var percentage = $('select[name=percentage] option').filter(':selected').val();


  var Kcal_arr = [120,140,120,120,110,110,110,110,110,110,105,105,105,105];
  var Kcal = Kcal_arr[baby_age];

  var olcek = (baby_age <= 6) ? 22.68 : 22.74;
  var miktar = (baby_age <= 6) ? 4.5 : 4.7;
  var adet = (baby_age <= 6) ? 2016 : 1936;
  var product = (baby_age <= 6) ? 'RP1' : 'RP2';

  var asset_root = "assets/img/";
  var product_image = (baby_age <= 6) ? asset_root+'product-1.png' : asset_root+'product-2.png' ;
  
  if (baby_weight) {

    if(arr==0)
      $('input[name="weight-energy"]').val(Kcal);
    if(arr==1 || arr==3)
      Kcal=$('input[name="weight-energy"]').val();

    daily_energy = (percentage*(Kcal * baby_weight)/100);
    monthly_energy = (daily_energy * 30);
    olcek_v = daily_energy /  olcek;
    quantity_v = olcek_v *  miktar;
    box_v = monthly_energy /  adet;

    $('input[name="daily-energy"]').val(daily_energy);
    $('input[name="monthly-energy"]').val(monthly_energy);
    $('.scale').html(Math.round(olcek_v));
    $('.quantity').html(Math.round(quantity_v));
    $('.box').html(Math.round(box_v));
    $('.product').html(product);
    $("#product_image").attr("src", product_image)   
    
   
    if(arr==3){
      console.log("arg = 3");
      // modal_raport_detail(percentage,daily_energy,monthly_energy,olcek_v,quantity_v,box_v,product);
      $(".modal-content-yuzde").html(percentage);
      $(".modal-content-miktar-urun").html(monthly_energy + "Kcal Evolvia" +  product);
      $(".modal-content-olcek").html(daily_energy+"gr - "+ Math.round(olcek_v)+" ölçek");
      $(".modal-content-pozoloji").html("6X5 ?");
    }

  }
}


function restrictAlphabets(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
      return true;
  else
      return false;
}


function weightControl(baby_weight,totalControl){
  if (baby_weight > 20 || baby_weight < 1 ) {
    var msg = "Presentil hesaplaması için ağırlık 1kg - 20kg aralığında olmalı";
    if(totalControl != 1){
      alertPopup(msg);
    } else {
      return msg;
    }
  } else {
    return true;
  }
  
}
function heightControl(baby_height,totalControl){
  if (baby_height > 110 || baby_height < 30 ) {
    var msg = "Presentil hesaplaması için boy 30cm - 110cm aralığında olmalı";
    if(totalControl != 1){
      alertPopup(msg);
    } else {
      return msg;
    }
  } else {
    return true;
  }
}
function headControl(baby_head,totalControl){
  if (baby_head > 52 || baby_head < 34 ) {
    var msg = "Presentil hesaplaması için baş çevresi 34cm - 52cm aralığında olmalı";

    if(totalControl != 1){
      alertPopup(msg);
    } else {
      return msg;
    }
  } else {
    return true;
  }
}

function alertTotalControl(baby_weight, baby_height, baby_head){
  var messages = new Array();

  if (baby_weight && baby_weight!=null){
    if (weightControl(baby_weight,1)!=true){
      messages.push(weightControl(baby_weight,1));
    }
  }
  if (baby_height && baby_height!=null){
    if (heightControl(baby_height,1)!=true){
      messages.push(heightControl(baby_height,1));
    }
  }
  if (baby_head && baby_head!=null){
    if (headControl(baby_head,1)!=true){
      messages.push(headControl(baby_head,1));
    }
  }

  if (messages.length>0){
    alertPopup(messages,1);
  }
  

}


// alertPopup("Presentil hesaplaması için ağırlık 1kg - 20kg aralığında olmalı");
// alertPopup("Presentil hesaplaması için boy 30cm - 110cm aralığında olmalı");
// alertPopup("Presentil hesaplaması için baş çevresi 34cm - 52cm aralığında olmalı");




var baby_name = getParameterByName('baby-name');
var baby_gender = getParameterByName('baby-gender');

var baby_weight = getParameterByName('baby-weight');

var baby_birthday = getParameterByName('baby-birthday'); 
var baby_age = getParameterByName('baby-age');

var baby_height = getParameterByName('baby-height');
var baby_head = getParameterByName('baby-head');


alertTotalControl(baby_weight, baby_height, baby_head);




var presentil_x_sabit = 23;
var presentil_x_sabit_boy = 32;
var presentil_x_sabit_bas = 27;
var presentil_x_carpan = 17;
var presentil_x = 0;

var presentil_y_sabit = 520;
var presentil_y_sabit_boy = 570;
var presentil_y_sabit_bas = 1355;
var presentil_y_carpan = 10;
var presentil_y_carpan_boy = 5.2;
var presentil_y_pixel_carpan = 2.6;
var presentil_y = baby_weight * presentil_y_pixel_carpan;

if (baby_age){
  $("#baby_birthday option[value='"+baby_age+"']").prop('selected', true);
  presentil_x = baby_age;

} else if  (baby_birthday){
  birth_date = baby_birthday.split('/');
  birth_year = birth_date[2].trim();
  birth_month = birth_date[1].trim();
  birth_day = birth_date[0].trim();
  
  var startDate= new Date(birth_year+"-"+birth_month+"-"+birth_day);
  var endDate  = new Date();
  var datediff = (endDate.getFullYear()*12+endDate.getMonth())-(startDate.getFullYear()*12+startDate.getMonth());
  
  
  if (datediff == 0 ){
    $("#baby_birthday option[value='0']").prop('selected', true);
    datediffRounded = 0;
  }
  if (datediff > 0 && datediff <= 3 ){
    $("#baby_birthday option[value='3']").prop('selected', true);
    datediffRounded = 3;
  }
  if (datediff > 3 && datediff <= 6 ){
    $("#baby_birthday option[value='6']").prop('selected', true);
    datediffRounded = 6;
  }
  if (datediff > 6 && datediff <= 9 ){
    $("#baby_birthday option[value='9']").prop('selected', true);
    datediffRounded = 9;
  }
  if (datediff > 9 && datediff <= 12 ){
    $("#baby_birthday option[value='12']").prop('selected', true);
    datediffRounded = 12;
  }
  if (datediff > 12 && datediff <= 15 ){
    $("#baby_birthday option[value='15']").prop('selected', true);
    datediffRounded = 15;
  }
  if (datediff > 15 && datediff <= 18 ){
    $("#baby_birthday option[value='18']").prop('selected', true);
    datediffRounded = 18;
  }
  if (datediff > 18 && datediff <= 24 ){
    $("#baby_birthday option[value='24']").prop('selected', true);
    datediffRounded = 24;
  }
  if (datediff > 24 && datediff <= 30 ){
    $("#baby_birthday option[value='30']").prop('selected', true);
    datediffRounded = 30;
  }
  if (datediff > 30 && datediff <= 36 ){
    $("#baby_birthday option[value='36']").prop('selected', true);
    datediffRounded = 36;
  }

  
  // presentil_x = datediff;
  presentil_x = datediffRounded;

}


$('input[name="baby_name"]').val(baby_name);
$("#baby_gender option[value='"+baby_gender+"']").prop('selected', true);
$('input[name="baby_weight"]').val(baby_weight );
$('input[name="baby_height"]').val(baby_height);
$('input[name="baby_head"]').val(baby_head );


// $('input[name="baby_height"]').val(90);  //silinecek
// $('input[name="baby_head"]').val(42); // initial values silinecek


presentilBoyBasControl(1);


$(".hesapla-btn").click(function() {
  presentilBoyBasControl();
});


presentil_ciz(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y);

$('#baby_birthday').on('change', function() {
  presentil_x  = $('select[name=baby_birthday] option').filter(':selected').val();
  presentil_ciz(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y);

  if ($('input[name="baby_height"]').val()){
    presentil_y_boy  = $('input[name="baby_height"]').val() ;
    presentil_ciz_boy(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_boy);
  } 
  if ($('input[name="baby_head"]').val()){
    presentil_y_bas  = $('input[name="baby_head"]').val() * presentil_y_pixel_carpan;
    presentil_ciz_bas(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_bas);
  } 

});


$('input[name="baby_weight"]').on('keyup', function() {
  baby_weight = $('input[name="baby_weight"]').val();
  if (baby_weight) {
    if (weightControl(baby_weight) == true) {
      presentil_y  = baby_weight * presentil_y_pixel_carpan;
      presentil_ciz(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y);
    }
   
  }
});

// $('input[name="baby_height"]').on('keyup', function() {
//   baby_height = $('input[name="baby_height"]').val();
//   if (baby_height) {
//     heightControl(baby_height);
//     presentil_y_boy  = baby_height ;
//     presentil_ciz_boy(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_boy);
//   }
// });

// $('input[name="baby_head"]').on('keyup', function() {
//   baby_head = $('input[name="baby_head"]').val();
//   if (baby_head) {
//     presentil_y_bas  = baby_head * presentil_y_pixel_carpan;
//     presentil_ciz_bas(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_bas);
//   }
// });



// $('.baby_height_btn').on('click', function() {
//     baby_height = $('input[name="baby_height"]').val();
//     if (baby_height) {
//       heightControl(baby_height);
//       presentil_y_boy  = baby_height ;
//       presentil_ciz_boy(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_boy);
//     }
//   });

//   $('.baby_head_btn"]').on('click', function() {
//   baby_head = $('input[name="baby_head"]').val();
//   if (baby_head) {
//     presentil_y_bas  = baby_head * presentil_y_pixel_carpan;
//     presentil_ciz_bas(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_bas);
//   }
// });


    function presentilBoyBasControl(dontAllowToPopupAtStartup){
      var baby_height = $('input[name="baby_height"]').val();
      var baby_head = $('input[name="baby_head"]').val();
      var controlCounter = 0;
      if (baby_height){
        controlCounter = controlCounter + 1;
        if (heightControl(baby_height,dontAllowToPopupAtStartup) == true) {
          controlCounter = controlCounter - 1;
          $( ".presentil-degerler__boy__presentil" ).show();
          presentil_y_boy  = baby_height;
          presentil_ciz_boy(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_boy,dontAllowToPopupAtStartup);
        } else {$( ".presentil-degerler__boy__presentil" ).hide();}
      } else {
        $( ".presentil-degerler__boy__presentil" ).hide();
      }
      if (baby_head){
        controlCounter = controlCounter + 1;
        if (headControl(baby_head,dontAllowToPopupAtStartup) == true) {
          controlCounter = controlCounter - 1;
          $( ".presentil-degerler__bas__presentil" ).show();
          presentil_y_bas = baby_head * presentil_y_pixel_carpan;
          presentil_ciz_bas(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_bas,dontAllowToPopupAtStartup);
        } else {$( ".presentil-degerler__bas__presentil" ).hide();}
      } else {
        $( ".presentil-degerler__bas__presentil" ).hide();
      }  

      if (dontAllowToPopupAtStartup!=1 && controlCounter > 0) {
        alertTotalControl(null, baby_height, baby_head);
      } 

      
    }





function presentil_ciz(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y){
  var p_x = presentil_x_sabit + (presentil_x_carpan * presentil_x);
  var p_y = presentil_y_sabit - (presentil_y_carpan * (presentil_y));

  $('#dot_kg').attr('x', p_x);
  $('#dot_kg').attr('y', p_y);
}

function presentil_ciz_boy(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_boy){
  var p_x = presentil_x_sabit_boy + (presentil_x_carpan * presentil_x);
  var p_y = presentil_y_sabit_boy - (presentil_y_carpan_boy * (presentil_y_boy));

  $('#dot_boy').attr('x', p_x);
  $('#dot_boy').attr('y', p_y);
}


function presentil_ciz_bas(presentil_x_sabit, presentil_x_carpan, presentil_x, presentil_y_sabit, presentil_y_carpan, presentil_y_bas){

  console.log(presentil_y_bas);
  var p_x = presentil_x_sabit_bas + (presentil_x_carpan * presentil_x);
  var p_y = presentil_y_sabit_bas - (10 * (presentil_y_bas));

  $('#dot_bas').attr('x', p_x);
  $('#dot_bas').attr('y', p_y);
}




function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


$( ".urun--icerik--product--detail--1" ).hide();
$( ".urun--icerik--product--detail--2" ).hide();

$( ".product__detail__button__1" ).click(function() {
  $( ".urun--icerik--main" ).hide();
  $( ".urun--icerik--product--detail--1" ).show();
});

$( ".urun--icerik--product--detail--1__back" ).click(function() {
 
  $( ".urun--icerik--main" ).show();
  $( ".urun--icerik--product--detail--1" ).hide();
});

$( ".urun--icerik--product--detail--other--product--button__1" ).click(function() {
  $( ".urun--icerik--product--detail--1" ).hide();
  $( ".urun--icerik--product--detail--2" ).show();
});


$( ".product__detail__button__2" ).click(function() {
  $( ".urun--icerik--main" ).hide();
  $( ".urun--icerik--product--detail--2" ).show();
});

$( ".urun--icerik--product--detail--2__back" ).click(function() {
  $( ".urun--icerik--main" ).show();
  $( ".urun--icerik--product--detail--2" ).hide();
});

$( ".urun--icerik--product--detail--other--product--button__2" ).click(function() {
  $( ".urun--icerik--product--detail--1" ).show();
  $( ".urun--icerik--product--detail--2" ).hide();
});


$( ".urun--icerik--product--detail--full" ).click(function() {
  history.back();
});


var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
   

        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            $("#percentage").trigger("change");
            $("#baby_birthday").trigger("change");
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    
    b.appendChild(c);
    
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      
    });
}
function closeAllSelect(elmnt) {
 
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


$("#datetimepicker1").datepicker({
  format: 'dd / mm / yyyy',
  autoclose:true,
  language: 'tr'
});

$(".datepicker .datepicker-inline").hide();
$("#baby-birthday").change(function(){
  $(".datepicker .datepicker-inline").hide();
});

$("#datetimepicker1 > div > div.datepicker-days > table > thead > tr:nth-child(2) > th.prev").html(' <img class="presentil-hesapla--img__prev filter-dark-blue" src="assets/img/prev.svg">');
$("#datetimepicker1 > div > div.datepicker-days > table > thead > tr:nth-child(2) > th.next").html(' <img class="presentil-hesapla--img__prev filter-dark-blue" src="assets/img/next.svg">');



function transform (n) {
	if (n > 15) {
    	return "15+";
    }
    return n;
}



if  (window.innerWidth <= 991) {
  $( ".layout--bg" ).css('height', window.innerHeight) ;
} 


var grid_num_bab_weight = (window.innerWidth > 1024) ? 21 : 7;
var grid_num_baby_height = (window.innerWidth > 1024) ? 15 : 5;
var grid_num_baby_head = 5;

$("#slider-baby-weight").ionRangeSlider({
  grid:true,
  min: 1,
  max: 22,
  from: 6.4,
  step: 0.1,
  prettify: my_prettify_2,
  grid_num: grid_num_bab_weight,
  
});

$("#slider-baby-height").ionRangeSlider({
  grid: true,
  min: 40,
  max: 115,
  step: 1,
  from:60,
  prettify: my_prettify,
  grid_num: grid_num_baby_height,
});


$("#slider-baby-head").ionRangeSlider({
  grid: true,
  min: 30,
  max: 55,
  step: 1,
  from:34,
  prettify: my_prettify,
  grid_num: grid_num_baby_head,
});



function my_prettify (n) {
  return n + " cm";
}
function my_prettify_2 (n) {
  return n + " kg";
}





//   window.onload=function(){
//     var poppy = sessionStorage.getItem('popupOnce_');
//     var modal_warning = document.getElementById("warning-modal");


//     if(!poppy){
//       modal_warning.style.display = "block";
//     }

    
//     $("#warning-modal-continue-btn").click (function() {
//       sessionStorage.setItem('popupOnce_','true');
//       modal_warning.style.display = "none";
//     });

    
     
// }





// Raport Modals

var modal_raport = document.getElementById("raport-modal");
var btn_raport = document.getElementById("raport-modal-btn");

btn_raport.onclick = function() {
  modal_raport.style.display = "block";
  $("html, body").animate({ scrollTop: 0 });
}

window.onclick = function(event) {
  if (event.target == modal_raport) {
    modal_raport.style.display = "none";
  }
}

// Raport Detail Modals

var modal_raport_detail = document.getElementById("raport-modal-detail");
var btn_raport_detail = document.getElementById("raport-modal-detail-btn");
var span = document.getElementById("close-modal");
// modal_raport_detail.style.display = "block";

btn_raport_detail.onclick = function() {
  modal_raport_detail.style.display = "block";
  modal_raport.style.display = "none";
  showDetail();
 

}

span.onclick = function() {
  modal_raport_detail.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal_raport_detail) {
    modal_raport_detail.style.display = "none";
     
  }
}




function showDetail() {
  var selected = $('input[name="report-detail"]:checked').val();
  var selected_replaced = selected.replace(/\./g, '_');
  var selected_txt = $('.'+selected_replaced+'').html();

  $("#icd").html(selected + ' ' + selected_txt);
  $("#icd_text").html(selected_txt);

  calculate(3);
  
}




function alertPopup(message,total){

  var modal = document.getElementById("alert-modal");
  modal.style.display = "block";

  if (total!=1){
    $(".warning-text").html(message);
  }else{
    $(".warning-text").html('');
    $.each( message, function( key, value ) {
      console.log(value);
      $(".warning-text").append(value);
      $(".warning-text").append("<br>");
    });
  }
  
  $(".close").click (function() {
    modal.style.display = "none";
  });

}



 

$(".custom-select").click(function() {
  $(".select-selected").click();
  
});



$('#raport-modal-print-btn').click(function(){
  // window.print();
  // $("#print_area_modal_detail").printThis();
  // $("#print_area_modal_detail").print();

  $("#raport-modal-print-btn").hide();
  $(".close").hide();
  $("#print_area_modal_detail").show();

  window.print();
});


window.onafterprint = function(){
  $("#raport-modal-print-btn").show();
  $(".close").show();
}



function resetDozHesapla(){
  // $('input[name="baby-name"]').val("")
  // $('input[name="baby-weight"]').val("")
  // $('input[name="weight-energy"]').val("---")


  // $("#baby-age option[value='13']").prop('selected', true);



  // $("#percentage option[value='50']").prop('selected', true);

  location.reload();
}




