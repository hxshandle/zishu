function scrollable(selector){
  $(selector).jScrollPane();
}

function switchContent(toggleSelector,relatedSelector){
  $(toggleSelector).click(function(){
    $(toggleSelector).filter('.active').removeClass('active');
    var $this = $(this);
    var ref = $this.data('ref');
    $this.addClass('active');
    $(relatedSelector).filter('.active').removeClass('active').css({display:'none'});
    $('#'+ref).fadeIn().addClass('active').jScrollPane();
  });

}
