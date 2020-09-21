var app = (function() {

	var cinema_;

	var fecha_;
	
	var listFunctions_;

	var setcinema = function(cinema) {
		cinema_ = cinema;
	}

	var setfecha = function(fecha) {
		fecha_ = fecha;
	}

	var getfuctionsByNameData = function(cinema, fecha) {
		console.log(cinema);
		console.log(fecha);
		apimock.getFunctionsByCinemaAndDate(cinema,fecha,call);
	}

    function call(functions){
    	listFunctions_ = [];
        functions.map(function (fun) {
        	listFunctions_.push({
        		name: fun.movie.name,
        		genre: fun.movie.genre,
        		hour: fun.date.split(" ")[1]}); 
        });
        updateTable();
    }

    function updateTable() {

    	for (i = 0; i < listFunctions_.length; i++) {
    		console.log(listFunctions_[i]);
    		$("#idtable > tbody").append(
    				'<tr><td>' + listFunctions_[i].name + '</td>' + 
    				'<td>' + listFunctions_[i].genre + '</td>' + 
    				'<td>' + listFunctions_[i].hour + '</td>' + 
    				'<td>' + "en desarrollo" + '</td></tr>');
    		}
    }

	return {
		getFuctionsByNameData : function(cinema, fecha) {
			setcinema(cinema);
			setfecha(fecha);
			getfuctionsByNameData(cinema, fecha);
		}
	}
})();