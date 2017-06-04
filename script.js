$(document).ready(function(){
	$("form").submit(function(){
		var loc = $("#location").val();
		var apiCall = "http://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=e8794b59d0fe753ff80c512a2b08763f&units=imperial";

		$.get(apiCall, function(res){
			console.log(res);
			$("#forecast").html("<h1>"+loc+"</h1>");
			$("#forecast").append("<h4>Tempurature: "+res.main.temp+"</h4>");
		}, 'json');



		return false;
	})
})
