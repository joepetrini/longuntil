var count = 3;

function init(){
	var date = new Date;
	var minute = date.getMinutes();
	var hour = date.getHours();
	if (hour < 12) {
		$('#am1').addClass('highlight');
	}
	else {
		$('#pm1').addClass('highlight');
	}
	if (hour == 0) {hour = 12;}
	hour = hour > 12 ? hour - 12 : hour;
	$('#h1_'+hour).addClass('highlight');
	minute = minute > 9 ? minute : '0'+minute;
	$('#m1_'+minute).addClass('highlight');
}

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
	v = getVals();
	for (var i = 0; i < v.length; i++){
		if (v[i] == '') {return;}
	}
	$('#button').removeAttr("disabled");
}

function getVals(){
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
	return [h1,h2,m1,m2,a1,a2];	
}

function submit(){
	v = getVals();
	var url = '/'+v[0]+'-'+v[2]+v[4]+'-to-'+v[1]+'-'+v[3]+v[5];
	window.location = url;
}
