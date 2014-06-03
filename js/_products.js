$(function() {
  var seriesType = "large";
  var seriesSeason = "spring";
  function showBigImg(el) {
    ImageTour.show(el);
  }
  $('.prod-series-section-gallery').productsGallery({
    itemClick: showBigImg,
    height: 530,
    perNumber:4
  });

  $('.sub-menu a:first').addClass('active');

  $('.video-nav li').click(function(){
    var $this = $(this);
    var ref = $this.data('ref');
    var root = $this.parents('.video-wrapper');
    $('iframe',root).attr('src',ref);
  });
  
  // handle menu click
  $('.sub-menu a').click(function(){
    var $this = $(this);
    $('.sub-menu a').removeClass('active');
    $this.addClass('active');
    var menuKey = $this.text().toLowerCase();
    switch(menuKey){
      case "seasons":
        seriesSeason = "spring";
        seriesType = "large";
        $('#prod-series-'+seriesSeason+'-'+seriesType).removeClass('active');
        $('#prod-seasons').addClass('active');
        $('#prod-series').removeClass('active');
        break;
      case "large":
      case "collocation":
      case "video":
        $('#prod-series-'+seriesSeason+'-'+seriesType).removeClass('active');
        seriesType = menuKey;
        $('#sub-menu-prod-'+seriesSeason).addClass('active');
        $('#prod-seasons').removeClass('active');
        $('#prod-series').addClass('active');
        $('#prod-series-'+seriesSeason+'-'+seriesType).addClass('active');
        if(menuKey == "video"){
          $('.left',$('#prod-series-'+seriesSeason+'-'+seriesType)).jScrollPane();
        }

        break;
      case "spring":
      case "summer":
      case "autumn":
      case "winter":
        $('#prod-series-'+seriesSeason+'-'+seriesType).removeClass('active');
        seriesSeason = menuKey;
        $('#sub-menu-prod-'+seriesType).addClass('active');
        $('#prod-seasons').removeClass('active');
        $('#prod-series').addClass('active');
        $('#prod-series-'+seriesSeason+'-'+seriesType).addClass('active');
        break;
      default:
        break;
    }

  });

});

