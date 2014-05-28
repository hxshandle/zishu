$(function() {
  function showBigImg(el) {
    ImageTour.show(el);
  }
  $('.prod-gallery').productsGallery({
    itemClick: showBigImg,
    height: 530,
    perNumber:4
  });
});

