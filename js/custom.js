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

$('body').on('click', "#about-me .read-more-link", function(){
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

$(window).on("scroll touchmove", function () {
  $('#show-menu').toggleClass('nav-dark', $(document).scrollTop() > headerHeight);
});



// Show / Hide Menu

$('#show-menu').on("click", function() {
    $('#navigation').fadeIn().removeClass('menu-padding');
});

$('.hide-menu').on("click", function() {
    $('#navigation').fadeOut().addClass('menu-padding');
})


// Slick slider on portfolio pages

$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '80px',
    variableWidth: true
});

// Filter blog articles by category

$('#article-category-filter a').click(function(){
    $('#article-list li').addClass('hidden');
    
    var $chosen_category = $(this).attr('href').slice(1);
    
    $('#article-list li').each(function(){
        if ($(this).hasClass($chosen_category)) {
            $(this).removeClass("hidden");
        } else {
            console.log("no class");
        }
    });
});

// Remove certain article categories

$('#article-category-filter li').each(function(){
    var $category = $(this).find('a').attr('href');
    
    if (($category == '#work') || ($category == '#featurework') || ($category == '#blog')) {
        $(this).hide();
    }
})