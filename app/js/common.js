// SLIDER
(function() {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 2000,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    effect: 'fade',
    fade: {
      crossFade: true
    }
  });
})();

// Gamburger
var user = detect.parse(navigator.userAgent);

//Gamburger
var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");

McButton.click( function(e) {
  e.preventDefault();
  $(this).toggleClass("active");
  if (McButton.hasClass("active")) {
      McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
      McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
            .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
      McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
      McButton.velocity("reverse");
      McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
            .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
      McBar1.velocity("reverse", {delay: 800});
  }
});

// CAROUSEL
(function() {
  carousel = new Swiper('.carousel_container', {
    containerModifierClass: 'carousel_container-',
    wrapperClass: 'carousel_wrapper',
    slideClass: 'carousel_item',
    slidesPerView: 2,
    spaceBetween: 30,
    nextButton: '.carousel_button-next',
    prevButton: '.carousel_button-prev',
    loop: true,
    breakpoints: {
      1140: {
        slidesPerView: 1,
        spaceBetween: 50
      }
    }
  });
})();

$('.magazine__toggle').on( "click", function( ) {
  $(this).toggleClass( 'active' );
  $( this ).prev().toggleClass( 'active' );
  if($(this).hasClass('active')) {
    $(this).html('<span>' + 'скрыть все предложения' + '</span>');
    $(this).find('span').css("background-image", "url(../img/icons/arrow__upt.png)");
  } else {
    $(this).html('<span>' + 'Предложения других кэшбэк-сервисов' + '</span>');
    $(this).find('span').css("background-image", "url(../img/icons/icon-arrow-down.png)");

  }
});

//Popup
$(function(){
  var magnificPopup = $.magnificPopup.instance;
  $('.link-popup').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 300,
    // fixedContentPos: false,
    mainClass: 'mfp-fade',
    callbacks: {
      beforeOpen: function() {
          $('.wrap').addClass('wrap--blur');
      },
      close: function() {
          $('.wrap').removeClass('wrap--blur');
      }
    }
  });
  $('.modal_close').each(function(){
    $(this).on('click', function(){
      magnificPopup.close();
    });
  });
  $('.modal_anymore').each(function(){
    $(this).on('click', function(){
      magnificPopup.close();
    });
  });
});

// Accordion
(function(){
  var d = document,
  accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
  setAria,
  setAccordionAria,
  switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);

  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

    setAriaAttr = function(el, ariaType, newProperty){
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded){
    switch(expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
//function
switchAccordion = function(e) {
  e.preventDefault();
  var thisAnswer = e.target.parentNode.nextElementSibling;
  var thisQuestion = e.target;
  if(thisAnswer.classList.contains('is-collapsed')) {
    setAccordionAria(thisQuestion, thisAnswer, 'true');
  } else {
    setAccordionAria(thisQuestion, thisAnswer, 'false');
  }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i=0,len=accordionToggles.length; i<len; i++) {
    if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

//Tabs
$(".tab_content").hide();
$(".tab_content:last").show(); // последний

$("ul.tabs li").click(function() {

  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

});

$(".tab_drawer_heading").click(function() {
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#"+d_activeTab).fadeIn();

  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});
$('ul.tabs li').last().addClass("tab_last");

// Tooltip
$('.toggle-like').hover(function(){
  var coord = $(this).position(),
      heightTooltip = $(this).next('.toggle-like-box').innerHeight(),
      widthTooltip = $(this).next('.toggle-like-box').innerWidth();
  $(this).next('.toggle-like-box').css({top: coord.top - (heightTooltip / 2), left: (coord.left - widthTooltip - 20)}).toggleClass('toggle-like-box_active');
});

// Overlay
(function() {
  var triggerBttn = $('.trigger-overlay'),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = $('.link-scroll--inner');
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.add( overlay, 'close' );
      $('html').css('overflow', 'auto');
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
      $('html').css('overflow', 'hidden');
    }
  }

  triggerBttn.bind( 'click', toggleOverlay );
  closeBttn.bind( 'click', toggleOverlay );
  closeBttn.bind('click', function(){
    var McButton = $("[data=hamburger-menu]");
    var McBar1 = McButton.find("b:nth-child(1)");
    var McBar2 = McButton.find("b:nth-child(2)");
    var McBar3 = McButton.find("b:nth-child(3)");

    McButton.toggleClass("active");
    if (McButton.hasClass("active")) {
      McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
      McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
            .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
      McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
    } else {
      McButton.velocity("reverse");
      McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
            .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
      McBar1.velocity("reverse", {delay: 800});
    }
  })
})();
