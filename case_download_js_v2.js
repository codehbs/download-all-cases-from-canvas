var href;
var re = new RegExp("^(http|https)://cb.hbsp.harvard.edu/cbmp/pl", "i"); 
var re2 = new RegExp("^(http|https)://hbs.instructure.com/courses/", "i");  
var re3 = new RegExp("^(http|https)://services.hbsp.harvard.edu/services", "i");  

$("a").each(function() {
 	  href = $( this ).attr( "href" );
 	  if (re.test(href) || re2.test(href) || re3.test(href)){
 	  	console.log(href);
 	  	$( this ).click();
 	  }
});