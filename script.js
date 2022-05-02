var r = 0;
var rt = 0;
var rd = false;

var r2 = 0;
var rt2 = 0;
var rd2 = false;

var slideOb = new IntersectionObserver(
	(entries, slideOb) => { 
  	entries.forEach(entry => {
			r++;
			if(!rd) {
				rt++;
			}
			if(r > rt) {
				entry.target.setAttribute("class", "slideRight");
    		slideOb.unobserve(entry.target);
			}
  	});
		if(!rd) {
			rd = true;
		}
	}, 
	{
  	root: null,
  	rootMargin: '0px',
  	threshold: 0.5
	}
);

document.querySelectorAll('.slideRightAdd').forEach(
	item => {
		slideOb.observe(item)
	}
);

var fadeOb = new IntersectionObserver(
	(entries, fadeOb) => { 
  	entries.forEach(entry => {
			r2++;
			if(!rd) {
				rt2++;
			}
			if(r2 > rt2) {
				entry.target.setAttribute("class", "appear");
    		fadeOb.unobserve(entry.target);
			}
  	});
		if(!rd2) {
			rd2 = true;
		}
	}, 
	{
  	root: null,
  	rootMargin: '0px',
  	threshold: 1
	}
);

document.querySelectorAll('.appearAdd').forEach(
	item => {
		fadeOb.observe(item)
	}
);