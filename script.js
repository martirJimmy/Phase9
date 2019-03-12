a = document.getElementById("soul");
b = document.getElementById("power");
c = document.getElementById("reality");
d = document.getElementById("time");
e = document.getElementById("space");
f = document.getElementById("mind");
g = document.getElementById("gauntlet");


	function nextImage(el){
		if (el.src.match("Images/soulstone.jpg")){
		el.src = "Images/timestone.jpg";
		} else if (el.src.match("Images/timestone.jpg")){
		el.src = "Images/spacestone.jpg";
		} else if (el.src.match("Images/spacestone.jpg")){
		el.src = "Images/soulstone.jpg";
		} else {
	}
}

		
	function nextImage2(el){
		if (el.src.match("Images/powerstone.jpg")){
		el.src = "Images/realitystone.jpg";
		} else if (el.src.match("Images/realitystone.jpg")){
		el.src = "Images/mindstone.jpg";
		} else if (el.src.match("Images/mindstone.jpg")){
		el.src = "Images/powerstone.jpg";
		} else {
	}
}

	function nextImage3(el){
		if (el.src.match("Images/realitystone.jpg")){
		el.src = "Images/mindstone.jpg";
		} else if (el.src.match("Images/mindstone.jpg")){
		el.src = "Images/powerstone.jpg";
		} else if (el.src.match("Images/powerstone.jpg")){
		el.src = "Images/realitystone.jpg";
		} else {
	}
}

	function nextImage4(el){
		if (el.src.match("Images/timestone.jpg")){
		el.src = "Images/realitystone.jpg";
		} else if (el.src.match("Images/realitystone.jpg")){
		el.src = "Images/powerstone.jpg";
		} else if (el.src.match("Images/powerstone.jpg")){
		el.src = "Images/timestone.jpg";
		} else {
	}
}

	function nextImage5(el){
		if (el.src.match("Images/spacestone.jpg")){
		el.src = "Images/realitystone.jpg";
		} else if (el.src.match("Images/realitystone.jpg")){
		el.src = "Images/powerstone.jpg";
		} else if (el.src.match("Images/powerstone.jpg")){
		el.src = "Images/spacestone.jpg";
		} else {
	}
}

	function nextImage6(el){
		if (el.src.match("Images/mindstone.jpg")){
		el.src = "Images/soulstone.jpg";
		} else if (el.src.match("Images/soulstone.jpg")){
		el.src = "Images/timestone.jpg";
		} else if (el.src.match("Images/timestone.jpg")){
		el.src = "Images/mindstone.jpg";
		} else {
	}
}
	function checkConfiguration(el){
		if(a.src.match("Images/soulstone.jpg") && b.src.match("Images/mindstone.jpg") && c.src.match("Images/powerstone.jpg") && d.src.match("Images/realitystone.jpg") && e.src.match("Images/spacestone.jpg") && f.src.match("Images/timestone.jpg")){
			a.classList.add("opaque");
			b.classList.add("opaque");
			c.classList.add("opaque");
			d.classList.add("opaque");
			e.classList.add("opaque");
			f.classList.add("opaque");
			el.src = "Images/spaceship1.png";
			document.getElementById("gauntlet").classList.add("display");
			document.getElementById("rocket").classList.remove("display");
			console.log("YOU WON!");
		} else {
		
	}
}


	