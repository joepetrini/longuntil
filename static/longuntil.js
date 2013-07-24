function ignore(a) {
	$.get('/backend/ignore/'+a, function(data) {
		$('#alert_'+a).fadeOut(500, function(){
			$('#alert_'+a).remove();	
		});
	});
}

function set_id(id, type, src) {
	$.get('/backend/set_id?id='+id+'&type='+type+'&field='+src, function(data) {
		$('#alert_'+a).fadeOut(500, function(){
			$('#alert_'+a).remove();
		});
	});
}