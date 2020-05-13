var customlocale = {
	        "direction": "ltr",
	        "format": "DD/MM/YYYY",
	        "separator": " - ",
	        "applyLabel": "Seleccionar",
	        "cancelLabel": "Cancelar",
	        "fromLabel": "Desde",
	        "toLabel": "Hasta",
	        "customRangeLabel": "Personalizado",
	        "daysOfWeek": [
	            "Do",
	            "Lu",
	            "Ma",
	            "Mi",
	            "Ju",
	            "Vi",
	            "Sa"
	        ],
	        "monthNames": [
	            "Enero",
	            "Febrero",
	            "Marzo",
	            "Abril",
	            "Mayo",
	            "Junio",
	            "Julio",
	            "Agosto",
	            "Septiembre",
	            "Octubre",
	            "Noviembre",
	            "Diciembre"
	        ],
	        "firstDay": 1
	    }
var options = {
    "singleDatePicker": true,
	"showDropdowns": true,
    "linkedCalendars": false,
    "showCustomRangeLabel": false,
    "startDate": moment(),
    "endDate": moment(),
	"locale": customlocale
}
$('.rangofechas').daterangepicker({
	  "showDropdowns": true,
	    "ranges": {
	        "Hoy": [moment(), moment()],
	        "Ayer": [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	        "Últimos 7 Días": [moment().subtract(6, 'days'), moment()],
	        "Últimos 30 Días": [moment().subtract(29, 'days'), moment()],
	        "Este Mes": [moment().startOf('month'), moment().endOf('month')],
	        "Ultimo Mes": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	    },
	    "locale": customlocale,
	    "alwaysShowCalendars": true,
	    "opens": "center"
	}, function(start, end, label) {
		$('#fechadesde').val(start.format('DD/MM/YYYY'));
		$('#fechahasta').val(end.format('DD/MM/YYYY'));
	});
$('#checkhora').on('change',function(){
	updateconfig();
});
updateconfig();


function updateconfig(){
	if($('#inputfecha').val()=='')
		options.startDate = moment();
	else
		options.startDate = $('#inputfecha').val();	  
	
	if ($('#checkhora').is(':checked'))
	{
		options.timePicker = true;
	 	$('#inputhora').val(moment().format('HH:mm'));
	}
	else
	{
		options.timePicker = false;
		$('#inputhora').val('');
	}
	$('#inputfecha').daterangepicker(options, function(start, end, label) {
  		$('#inputhora').val(start.format('HH:mm'));
});
}