$(document).on('turbolinks:load', function (){
  $(function(){
    $('.js-text_field').on('keyup', function (){
      // キーボードを入力したタイミングで以下の処理を実行する
      var title = $.trim($(this).val());
  
      $.ajax({
        type: 'GET',
        url: '/messages/searches',
        data: {title: title},
        dataType: 'json'
      })
      .done(function(data){
        $('.js-messages li').remove();
  
        $(data).each(function(i, message){
          $('.js-messages').append(
            `<li class="message"><a href="/messages/${message.id}">${message.title}</a></li>`
          )
        })
      })
    });
  });
})
