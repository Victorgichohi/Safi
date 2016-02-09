$(".banner > div:gt(0)").hide();

setInterval(function() { 
  $('.banner> div:first')
    .fadeOut(5000)
    .next()
    .fadeIn(5000)
    .end()
    .appendTo('.banner');
},  7000);