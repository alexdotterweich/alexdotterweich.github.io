var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: '.item'
  columnWidth: container.querySelector('.grid-sizer')
});

.grid-sizer { width: 20%; }

@media screen and (min-width: 720px) {
  /* 10 columns for larger screens */
  .grid-sizer { width: 10%; }
}
<script>  
  $(window).ready(function() {
  jQuery("#content").load("top.html", function(){
    $('#masonryContainer').masonry({  
      // options
      itemSelector : '.item',
      columnWidth : 10,
      isAnimated: !Modernizr.csstransitions,
      easing: 'linear' 
    });
  });
});
</script>
