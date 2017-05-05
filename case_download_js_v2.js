// download jQuery 
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.2.1.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

setTimeout(download, 3000);

function download(){
	var href;
	var re = new RegExp("^(http|https)://cb.hbsp.harvard.edu/cbmp/pl", "i"); 
	var re2 = new RegExp("^(http|https)://hbs.instructure.com/courses/", "i");  
	var re3 = new RegExp("^(http|https)://services.hbsp.harvard.edu/services", "i");  

	$("a").each(function() {
	 	  href = $( this ).attr( "href" );
	 	  if (re.test(href) || re2.test(href) || re3.test(href)){
	 	  	console.log(href);
	 	  	$( this )[0].click();
	 	  }
	});
}