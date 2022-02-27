setTimeout(function () {
	document.getElementById("loading").classList.add("animated");
	document.getElementById("loading").classList.add("fadeOut");
	setTimeout(function () {
		document.getElementById("loading").classList.remove("animated");
		document.getElementById("loading").classList.remove("fadeOut");
		document.getElementById("loading").style.display = "none";
	}, 800);
}, 1500);


 $(function () {
		$(".scroll-down").click(function () {
			$("html, body").animate(
				{ scrollTop: $("section.ok").offset().top },
				"slow"
			);
			return false;
		});
 });
