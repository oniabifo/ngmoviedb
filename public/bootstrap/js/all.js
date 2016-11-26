var tSpeed = 350; //Transition speed
var sSpeed = 5000; // 7000 Default

$('#slider-1').flexslider({
	animationSpeed: tSpeed,
	slideshowSpeed: sSpeed,
});

 $('#slider-2').flexslider({
 	selector: "img",
    controlNav: "thumbnails"
});