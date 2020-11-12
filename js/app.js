// ********** set date ************
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// ********** scroll ************
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
	const scrollHeight = window.pageYOffset;
	
	if(scrollHeight > 500) {
		topLink.style.display = "block";
	}
	else {
		topLink.style.display = "none";
	}
});