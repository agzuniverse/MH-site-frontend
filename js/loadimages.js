$(document).ready(function(){
    jQuery.getJSON("../assets/gallery/images.json",function(data){
        console.log(data.album1[1]);
        //$('#thumbs').append("<div class='col s6 m3 l3'><div class='card'><div class='card-image'><img src="../assets/mh-dark.jpg'>
        //        <span class='card-title'>MH-site</span>
        //    </div>
        //</div>
    //</div>')
    });

});