$(function(){
  scrollable('.news-entity.active');
  switchContent('#brand-news .nav-list a','.news-entity');
  var $list = $('#brand-news .nav-list');
  var step = 140;
  var containerHeight = 560;
  var listHeight = $list.height();
  $('#brand-news .pre').click(function(){
    var pos = $list.position();
    var top = pos.top;
    
  });
});
