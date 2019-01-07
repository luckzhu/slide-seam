var allButtons = $('.buttons > li');
var n=0;
var size = allButtons.length;
  
$(allButtons).on('click',function(x){
  
  var index = $(x.currentTarget).index()
  var p = index * -400
  
  $('.images').css({
    transform: 'translateX(' + p + 'px)'
  })
  
  n = index
  
  allButtons.eq(index)
    .addClass('active')
    .siblings('.active').removeClass('active')
})

allButtons.eq(n)
    .addClass('active')
    .siblings('.active').removeClass('active')

var timerID = setInterval(() => {
  n += 1
  allButtons.eq(n % size).trigger('click')
  },2000)


$('.window').on('mouseenter', function(){
  window.clearInterval(timerID)
})

$('.window').on('mouseleave', function(){
  timerID = setInterval(() => {
  n += 1
  allButtons.eq(n % size).trigger('click')
  },2000)
})