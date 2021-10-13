jQuery(document).ready(function($) {

	'use strict';


	/************** Toggle *********************/
    // Cache selectors
    var lastId,
        topMenu = $(".menu-first"),
        topMenuHeight = 50,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          
          if($(this).hasClass('external')) {
            return;
          }
            
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });



    $(window).scroll(function(){
         $('.main-header').toggleClass('scrolled', $(this).scrollTop() > 1);
     });



    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


    $('.flexslider').flexslider({
      slideshow: true,
      slideshowSpeed: 3000,  
      animation: "fade",
      directionNav: false,
    });


    $('.toggle-menu').click(function(){
        $('.menu-first').toggleClass('show');
        // $('.menu-first').slideToggle();
    });

    $('.menu-first li a').click(function(){
      $('.menu-first').removeClass('show');
    });


    /************** LightBox *********************/
      $(function(){
        $('[data-rel="lightbox"]').lightbox();
      });


});



$(function(){
  $("#confirm").click(function(){
      modalClose();
      //컨펌 이벤트 처리
  });
  $("#modal-open").click(function(){   $("#popup").css('display','flex').hide().fadeIn();
  });
  $("#close").click(function(){
      modalClose();
  });
  function modalClose(){
    $("#popup").fadeOut();
  } 
                         
});
$(function(){
  $("#confirm02").click(function(){
      modalClose();
      //컨펌 이벤트 처리
  });
  $("#modal-open02").click(function(){   $("#popup02").css('display','flex').hide().fadeIn();
  });
  $("#close02").click(function(){
      modalClose();
  });
  function modalClose(){
    $("#popup02").fadeOut();
  }                        
});
$(function(){
  $("#confirm03").click(function(){
      modalClose();
      //컨펌 이벤트 처리
  });
  $("#modal-open03").click(function(){   $("#popup03").css('display','flex').hide().fadeIn();
  });
  $("#close03").click(function(){
      modalClose();
  });
  function modalClose(){
    $("#popup03").fadeOut();
  }                        
});
$(function(){
  $("#confirm04").click(function(){
      modalClose();
      //컨펌 이벤트 처리
  });
  $("#modal-open04").click(function(){   $("#popup04").css('display','flex').hide().fadeIn();
  });
  $("#close04").click(function(){
      modalClose();
  });
  function modalClose(){
    $("#popup04").fadeOut();
  }                        
});

