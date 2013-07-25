var count = 0;

function select_min(a,num) {
	$('div.min'+num).removeClass('highlight');
	$(a).addClass('highlight');
	count++;
	enableButton();
}

function select_hour(a,num) {
	$('div.hour'+num).removeClass('highlight');
	$(a).addClass('highlight');
	count++;
	enableButton();
}

function select_ampm(a) {
	$(a).addClass('highlight');
	if (a.id=='am1') {
		$('#pm1').removeClass('highlight');	
	}
	else if (a.id=='pm1') {
		$('#am1').removeClass('highlight');	
	}	
	else if (a.id=='am2') {
		$('#pm2').removeClass('highlight');	
	}	
	else if (a.id=='pm2') {
		$('#am2').removeClass('highlight');	
	}
	count++;
	enableButton();
}

function enableButton(){
	if (count == 6){
		$('#button').removeAttr("disabled");
	}
		$('#button').removeAttr("disabled");
}

function submit(){
	var h1 = h2 = m1 = m2 = a1 = a2 = '';
	$('#hours1').children().each(function() {
		if ($(this).hasClass('highlight')){
			h1 = $(this).children(":first").html();
		}
	});
	
	$('#hours2').children().each(function() {
		if ($(this).hasClass('highlight')){
			h2 = $(this).children(":first").html();
		}
	});
		$('#minutes1').children().each(function() {
		if ($(this).hasClass('highlight')){
			m1 = $(this).children(":first").html();
		}
	});	
	$('#minutes2').children().each(function() {
		if ($(this).hasClass('highlight')){
			m2 = $(this).children(":first").html();
		}
	});	

	if ($('#am1').hasClass('highlight')) {
		a1 = 'am';
	}
	else if ($('#pm1').hasClass('highlight')) {
		a1 = 'pm';
	}	
	if ($('#am2').hasClass('highlight')) {
		a2 = 'am';
	}	
	else if ($('#pm2').hasClass('highlight')) {
		a2 = 'pm';
	}	
	//alert(h1);
	var url = '/'+h1+'-'+m1+a1+'-to-'+h2+'-'+m2+a2;
	alert(url);
}
