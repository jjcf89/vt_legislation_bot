$(function() {
	if ($.fn.dataTable) {
		// On non-tabbed pages and not the witness history search
		// use the hash to store the filter text
		// if(!$(".data-tab").length && !$('.witness-history-search').length){
		// 	$.extend(true, $.fn.dataTable.defaults, {
		// 		// Set the filter from the hash
		// 		"search": { "search": window.location.hash.replace(/[#]/g,"") },
		// 	});

		// 	$('body').on('keyup', '.dataTables_filter input', function(event){
		// 		event.preventDefault();
		// 		if(this.value.length > 0){
		// 			// On Keyup add the filter to the hash
		// 			window.location.hash = this.value;
		// 		}
		// 		else{
		// 			// This stops the page from reloading
		// 			window.location.hash = '##';
		// 		}
		// 	});
		// };

		// Set datatable defaults
		$.extend(true, $.fn.dataTable.defaults, {
			"dom": "<'dt-row'<'dt-column'i><'dt-column'f>>t<'dt-row'<'dt-left'l><'dt-right'p>>",
			"lengthMenu": [ [50,-1], [50, "All"] ],
			"displayLength": 50,
			"language" : {
				"emptyTable" : "<i class='fa fa-warning'></i> No data to display.",
				"loadingRecords": "<i class='fa fa-circle-o-notch fa-spin'></i> Loading&hellip;",
				"search" : "Refine results",
				"paginate": {
					"next": "Next",
					"previous" : "Prev"
				}
			}
		});
	}
});