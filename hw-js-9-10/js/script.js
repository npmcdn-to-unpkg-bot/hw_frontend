jQuery(function(){

jQuery(".gallery").jCarouselLite({

        btnNext: ".next",

        btnPrev: ".prev"

    });

});


$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    }); 


$('#navigation').slimmenu(
{
    resizeWidth: '800',
    collapserTitle: 'Main Menu',
    animSpeed: 'medium',
    easingEffect: null,
    indentChildren: false,
    childrenIndenter: '&nbsp;'
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34160351-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


var interval = setInterval(function(){
  

  var fusionad = document.getElementById("fusionads");

  if (fusionad){

   
    clearInterval(interval);
    
    
    var closead = document.createElement("a");
    closead.id = "close-fusionad";
    closead.innerHTML = "x";
    closead.href = "#";
    document.body.appendChild(closead);

    
    document.getElementById("close-fusionad").addEventListener("click", function(e) {
      e.preventDefault();
      this.remove();
      fusionad.remove();
    });

  }

},100); 