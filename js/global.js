function openMenu (){
	var mainMenu = document.getElementById('top-menu');
	var className = ' ' + mainMenu.className + ' ';
	~className.indexOf(' open ') ? mainMenu.className = className.replace(' open ', ' ') : mainMenu.className += ' open';
}
jQuery(function ($){
	$(document).ready(function(){
		$('.slideshow').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}]
		});
	});
});