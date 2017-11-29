/*
  Please add all Javascript code to this file.

  Noticed - 
  1st start with a console.log, then the $(function() {} with console.log inside of it
  2nd think about the event handlers

  when you injecting the DOM with the html, you need to traverse the response, you do that with the console.log(response) in 
  A__$.get(`https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json`, function(response) {
		console.log(response);
		AND HERE - 
  B__console.log(article);

  In the end of the class on Thursday, you did not get the Pop Up to work properly, so that would be the next thing to do.

  Try each time when you add new code, to run the whole thing and see what happens in the DOM/URL

  3. was to review the HTML - look there
*/

var articles = []; //19. add this articles, we are going to add to push them and add them to the global space
$(function(){ //2. document ready function, is designed to ensure that your function is called once all the DOM elements of the page are ready to be used. 2b.try with console.log("hello world") as well
	//console.log("hello world"); //1. to make sure the connection actually works before you start

	// Event Handlers 5. 
	// $('#popUp').addClass('hidden'); // 4. to test the popup, comment out the hidden action to see if it works on its own.and then later put back in below. 
	$('.closePopUp').on('click', function(){ //5. correct
		$('#popUp').addClass('hidden');
	});

	// Invoke JSON get function 6.
	//$.get(`http://digg.com/api/news/popular.json`, function(response) { //10a. comment this out

	// Invoke heroku to avoid getting the No 'Access-Control-Allow-Origin' error 10b.
	$.get(`https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json`, function(response) {
		console.log(response);

		//7. next thing to do is to close your popup when the response has been loaded, that you hide the popup player
		$('#popUp').addClass('hidden'); //7.

		$('#main').html(''); //13b. this clears the page

		//12. Add Articles - note that the i < response.data.feed.length must match var article - traverse path always
		for(var i = 0; i < response.data.feed.length; i++) {
			var article = response.data.feed[i];
			articles.push(article); //20a. when getting the response your getting access to each article in the array

			console.log(article);

		//13d. Put Article template here, 14 now take your article to get titles to show up
			var s ="";
			s += '<article class="article">';
			s += '<div class = "description1">' + article.content.title_alt	+ '</div>';
		    s += '	<section class="featuredImage">';
		    s += '		<img src="' + article.content.media.images[0].original_url +'" alt="" />'; //17.
		    s += '	</section>';
		    s += '	<section class="articleContent">';
		    s += '		<a href="#' + i + '"><h3>' + response.data.meta.title +'</h3></a>'; //14.		//18. his special id for href index
		    s += '		<h6>' + article.content.description + '</h6>'; //15.
		    s += '	</section>';
		    s += '	<section class="impressions">';
		    s += '		' + article.digg_score; //16.
		    s += '	</section>';
		    s += '	<div class="clearfix"></div>'; /*<!--  means that it clean box for the next row -->*/
		    s += '</article>';

		    $('#main').append(s);  //13c. has been copied and transformed with append
		};
		    
	});

$('#main').on('click', '.article a', function(){	//19. - if we need to access the object later on, then we need to store it somewhere, so we create a global array, then we push the article into the articles array, now we are getting into buttons, and when we get into new sources then we truncate the array
    var index = $(this).context.hash.substr(1);
 	var article = article[i];						//20b.
 	console.log(article);
    console.log(index);
  });			//this is just grabbing the index of the title, 

		// Clear main 8. Ultimately this is just a test, you will change later
		/* $('#main').html('');		13b. - copy and paste into for loop above


/*	//Build article template 9a.			13a. - copy and paste into for loop above and comment this out
	var s ="";
	s += '<article class="article">';
    s += '	<section class="featuredImage">';
    s += '		<img src="images/article_placeholder_1.jpg" alt="" />';
    s += '	</section>';
    s += '	<section class="articleContent">';
    s += '		<a href="#"><h3>Test article title</h3></a>';
    s += '		<h6>Lifestyle</h6>';
    s += '	</section>';
    s += '	<section class="impressions">';
    s += '		526';
    s += '	</section>';
    s += '	<div class="clearfix"></div>'; 
    s += '</article>';*/

    // put the s into the main 11.
    	//	$('#main').html(s);		13c. - copy and paste into for loop above

});

