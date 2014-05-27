$(function() {
  function showBigImg() {}
  $('.prod-gallery').productsGallery({
    itemClick: showBigImg,
    height: 530,
    perNumber:4
  });
});

