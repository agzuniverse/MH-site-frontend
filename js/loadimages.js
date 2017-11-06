$(document).ready(function(){

    //Load the thumbnails
    for(let album in data){
        for(let image in data[album]){
            if(image=='thumb'){
                let s="<div class='col s6 m3 l3'><div id='"+album+"'class='card waves-effect waves-light'><div class='card-image'><img src='../assets/gallery"+data[album][image]+"'><span class='card-title'>MH-site</span></div></div></div>";
                $('#thumbs').append(s);
            }
        }
    }

    //Initialize carousel in gallery page for inital load
    let s="<div class='carousel carousel-slider' data-indicators='true'>";
    for(let image in data[Object.keys(data)[0]]){
        if(image!='thumb'){
            s=s+"<div class='carousel-item'><img src='../assets/gallery"+data[Object.keys(data)[0]][image]+"'></div>";
        }
    }
    s=s+"</div>";
    $('.carousel-container').html(s);
    $('.carousel').carousel({fullWidth:true});

    //Clicking on thumbnail changes carousel content to that album
    $('#thumbs').on('click','.card',function(){
        let album=$(this).attr('id');
        let s="<div class='carousel carousel-slider' data-indicators='true'>";
        for(let image in data[album]){
            if(image!='thumb'){
                s=s+"<div class='carousel-item'><img src='../assets/gallery"+data[album][image]+"'></div>";
            }
        }
        s=s+"</div>";
        $('.carousel-container').html(s);
        $('.carousel').carousel({fullWidth:true});

    });
});