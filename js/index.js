//Place all JS code inside this
$(document).ready(function(){


    //Used for responsive navbar
    $('.button-collapse').sideNav({
        menuWidth: 200,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      }
    );  

    //Animate navbar to solid black on scroll
    $(document).scroll(function(){
        $('nav').css('background-color','rgba(0,0,0,'+$(document).scrollTop()/100+')');
    });

});