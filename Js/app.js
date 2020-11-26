$(document).ready(function () {
  $(".right-sidebar__triangle").on("click", function () {
    $(".right-sidebar").toggleClass("right-sidebar__active");
    $(".right-sidebar__triangle").toggleClass("right-sidebar__triangle_active");

    $(".left-sidebar__toggle").removeClass("left-sidebar__burger_active");
    $(".left-sidebar").removeClass("left-sidebar_active");
  });
  $(".left-sidebar__toggle").on("click", function () {
    $(this).toggleClass("left-sidebar__burger_active");
    $(".left-sidebar").toggleClass("left-sidebar_active");

    $(".right-sidebar").removeClass("right-sidebar__active");
    $(".right-sidebar__triangle").removeClass("right-sidebar__triangle_active");
    $(".right-sidebar__profile").toggleClass("display_none");
  });
});
