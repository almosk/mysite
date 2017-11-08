// $(function() {
//   $(document).on('scroll', function() {
//     var globalSection = document.getElementsByClassName('global')[0]
//     var globalSectionTop = Math.abs(globalSection.getBoundingClientRect().top)
//     var firstSection = document.getElementsByClassName('firstPageWrapper')[0]
//     var firstSectionHeight = firstSection.offsetHeight;
//     var documentHeight = document.documentElement.clientHeight
//
//     var scrollNow = 0
//
//     console.log('проскроленность', globalSectionTop, 'высота секции', firstSectionHeight, scrollNow)
//
//     if (globalSectionTop > scrollNow) {
//       scrollNow = globalSectionTop
//
//       if  (globalSectionTop > (firstSectionHeight - documentHeight)) {
//         $('html,body').animate({
//          scrollTop: firstSectionHeight
//          }, 1000);
//       }
//     }
//   })
// })
