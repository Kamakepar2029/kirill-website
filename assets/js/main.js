(function($) {
    var selectors = [];
  
    var check_binded = false;
    var check_lock = false;
    var defaults = {
      interval: 250,
      force_process: false
    }
    var $window = $(window);
  
    var $prior_appeared;
  
    function process() {
      check_lock = false;
      for (var index = 0; index < selectors.length; index++) {
        var $appeared = $(selectors[index]).filter(function() {
          return $(this).is(':appeared');
        });
  
        $appeared.trigger('appear', [$appeared]);
  
        if ($prior_appeared) {
          var $disappeared = $prior_appeared.not($appeared);
          $disappeared.trigger('disappear', [$disappeared]);
        }
        $prior_appeared = $appeared;
      }
    }
  
    // "appeared" custom filter
    $.expr[':']['appeared'] = function(element) {
      var $element = $(element);
      if (!$element.is(':visible')) {
        return false;
      }
  
      var window_left = $window.scrollLeft();
      var window_top = $window.scrollTop();
      var offset = $element.offset();
      var left = offset.left;
      var top = offset.top;
  
      if (top + $element.height() >= window_top &&
          top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
          left + $element.width() >= window_left &&
          left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
        return true;
      } else {
        return false;
      }
    }
  
    $.fn.extend({
      // watching for element's appearance in browser viewport
      appear: function(options) {
        var opts = $.extend({}, defaults, options || {});
        var selector = this.selector || this;
        if (!check_binded) {
          var on_check = function() {
            if (check_lock) {
              return;
            }
            check_lock = true;
  
            setTimeout(process, opts.interval);
          };
  
          $(window).scroll(on_check).resize(on_check);
          check_binded = true;
        }
  
        if (opts.force_process) {
          setTimeout(process, opts.interval);
        }
        selectors.push(selector);
        return $(selector);
      }
    });
  
    $.extend({
      // force elements's appearance check
      force_appear: function() {
        if (check_binded) {
          process();
          return true;
        };
        return false;
      }
    });
  })(jQuery);

function dc(elem, k=0){
    if (elem.split('.').length > 1){
        return document.getElementsByClassName(elem.replace('.',''))[k];
    }
    if (elem.split('$').length > 1){
        return document.getElementsByTagName(elem.replace('#',''))[k];
    }
    if (elem.split('#').length > 1){
        return document.getElementById(elem.replace('$',''));
    }
}

const delta = 800;

document.body.scrollTop + delta >  dc('.content__box__left__layer__right').offsetTop;

function onAppear(th){
    console.log('appear');
}

$('.content__box__left__layer__bottom').on('appear', onAppear(this));

document.addEventListener("DOMContentLoaded", function(event) {
        dc('.content__box__left').classList.add('onappear');
        dc('.content__box__right').classList.add('onappear');
        window.onscroll = function(){
          if (come(".content__box__layers")) {
              if ($(".content__box__layers")[0].classList.contains('onappear-flex')){
                  let rgh = 0;
              }else{
                  $(".content__box__layers")[0].classList.add('onappear-flex');
                  $(".content__box__right__layer__bottom")[0].classList.add('uline');
                  $(".content__box__left__layer__bottom")[0].classList.add('uline');
                  $(".content__box__center__layer__bottom")[0].classList.add('uline');
                  $('.content__box__left__layer__bottom anim')[0].classList.add('uline-anim');
                  $('.content__box__right__layer__bottom anim')[0].classList.add('uline-anim');
                  $(".content__box__center__layer__bottom anim")[0].classList.add('uline-anim');
              }
          }
      
          if (come(".content_box__description__langs")){
            if ($(".content_box__description__langs")[0].classList.contains('onappear-flex')){
              let rgh = 0;
            }else{
                $(".content_box__description__langs")[0].classList.add('onappear-flex');
                $(".content__box__my__works")[0].classList.add('onappear-flex');
            }
          }
      }
});