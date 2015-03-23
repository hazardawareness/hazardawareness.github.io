// Smooth Scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});


// Read More Links

$('.read-more').addClass('read-more-hide').after('<span class="read-more-link">+ Read More</span>').height(120);


var readMoreClicked = function(a) {
    a.prev('.read-more').removeClass('read-more-hide').addClass('read-more-show').after('<span class="read-less-link">-</span>').animate({
            height: "100%"
        }, 500);
        a.remove();
};

var readLessClicked = function(a) {
    a.prev('.read-more').removeClass('read-more-show').addClass('read-more-hide').after('<span class="read-more-link">+ Read More</span>').animate({
            height: "120px"
        }, 500);
        a.remove();
};

$('body').on('click', ".read-more-link", function(){
    if ($(this).parent().hasClass('project')) 
    {
        var thisProject = $(this).parent();
        thisProject.addClass('project-show');
        readMoreClicked($(this));
        
        $('html,body').animate({
          scrollTop: thisProject.offset().top
        }, 600);
        
            
        } else {
            readMoreClicked($(this));
        }
});

$('body').on('click', ".read-less-link", function(){
     if ($(this).parent().hasClass('project')) {
        $(this).parent().removeClass('project-show');
        readLessClicked($(this));
    } else {
        readLessClicked($(this));
    }
});


// Dark Menu On WHite

var headerHeight = ($('header.main-header').height() - 20 );


// Hide Menu On Scroll

$(window).on("scroll touchmove", function () {
  $('#navigation').toggleClass('hide-menu', $(document).scrollTop() > 50);
  $('#navigation').toggleClass('nav-dark', $(document).scrollTop() > headerHeight);
});


// Toggle Menu On Click

var topClick = $('<span class="menu-click-area"></span>');
$('body').append(topClick);

$('.menu-click-area').click(function(){
    $('#navigation').toggleClass('hide-menu');
});
