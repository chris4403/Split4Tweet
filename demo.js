$(function() {
   $('#original').on('keyup', function() {
      $('#count').text($('#original').val().length);
   });
   $('#dosplit').on('click', function() {
     $('section').text('');
     var value = $('#original').val();
     if ($('#minimize').get(0).checked) value = Split4Tweet.minimize(value);
     value = Split4Tweet.split(value);
     for (var i = 0, len = value.length; i < len ; i++) {
         var $p = $('<p/>');
         var $div = $('<div class="tweet"></div>').text(value[i]);
         var $a = $('<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(value[i]) + '" target="_blank">Tweet</a>');
         $('section').append($p.append($div).append($a));
     }
   });
});
