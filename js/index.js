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

    //Password confirmation check
    $('#passconfirm').blur(function(){
        if($('#pass').val()!=$('#passconfirm').val()){
            $('#passconfirm').addClass('invalid');
        }
    });
    
    //Checks if all fields are valid before form is submitted
    $('#submit-reg-form').click(function(e){
        let c=false;
        $('#regform :input').each(function(){
            if($(this).hasClass('valid')==false){
                c=true;
                e.preventDefault();
            }
        });
        if(c){
            Materialize.toast('You have not filled in all the details correctly!',3000,'rounded');
        }
    });

});