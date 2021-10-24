function come(elem) {
    var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();
  
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }