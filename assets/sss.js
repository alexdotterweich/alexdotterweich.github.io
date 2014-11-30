var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: '.item'
  columnWidth: container.querySelector('.grid-sizer')
});


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

// wanted to make the green border appear when an item was clicked,
// but my css wasn't working so I added it as a css thing when the
// user hovers

$('.item')
  .click(
    function(){
     $(this).css('.item', 'outline: 2px solid green;');
    }
  )
  .hover(
    function(){
      $(this).css('.item', 'opacity: 0.8');
    }
  );


$("#top_bar").click(function(){
  $("#h1").show();
});