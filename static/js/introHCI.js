'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

var images = [
				'lorempixel.abstract.1.jpeg',
				'lorempixel.abstract.8.jpeg',
				'lorempixel.city.1.jpeg',
				'lorempixel.city.2.jpeg',
				'lorempixel.people.1.jpeg',
				'lorempixel.people.2.jpeg',
				'lorempixel.technics.1.jpeg',
				'lorempixel.technics.2.jpeg'
			 ]
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		var thetext = $(this).text();
		console.log(thetext);
		if(thetext == 'Test Javascript'){
			$(this).html("You clicked on me!!!!");
		}
		else {
			$(this).html("You clicked on me already at " + (new Date()) + "!!!");
		}

		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$('#submitBtn').click(formClick);
}

function projectClick(e) { 
	e.preventDefault();
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.toggleClass("hidden");
    }

    var image = $(containingProject).find(".img");
    image.attr("src", "images/" + images[Math.floor(Math.random()*images.length)]);
}

function formClick(e){
	e.preventDefault();

	var the_project = $("#project").val();

	$(the_project).animate({
		width: $("#width").val()
	})

	var updatedText = $("#description").val();
	$(the_project + " .project-description p").text(updatedText);
}