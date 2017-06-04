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


//
// $.get(apiCall, function(res){
// 			console.log(res);
// 			$("#info").html("<img src='http://pokeapi.co/media/img/"+id+".png' /><h3>"+res.name+"</h3>");
// 			$("#info").append("<h4>Types</h4><ul></ul>");
// 			for (var j = 0; j < res.types.length; j++){
// 				$("#info ul").append("<li>"+res.types[j].name+"</li>");
// 			};
// 			$("#info").append("<h4>Height</h4><p>"+res.height+"</p>");
// 			$("#info").append("<h4>Weight</h4><p>"+res.weight+"</p>");
// 		}, 'json');
