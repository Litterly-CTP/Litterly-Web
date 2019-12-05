
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $("#mainNavbar");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });

//Google Maps 
