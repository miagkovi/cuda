"use strict";

$("document").ready(function() {
	$("#load_more_projects").click(function() {
		$.ajax({
			url: "projects.html",
			cache: false
		}).done(function(html) {
			$("#ajax_section").append(html);
		});
		$("#load_more_projects").hide();
	})
});