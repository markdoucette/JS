// JavaScript Document

// hide all the content panes when the page loads
  $('#bio01 > div').hide();
  
  // uncomment the next line if you'd like the first pane to be visible by default
  // $('#bio > div:first').show();
  
  $('#bio01 h3').click(function() {
    $(this).next().animate({
      'height':'toggle'
    }, 'slow', 'easeOutBounce');
  });
  
  $('#bio02 > div').hide();
  
  // uncomment the next line if you'd like the first pane to be visible by default
  // $('#bio > div:first').show();
  
  $('#bio02 h3').click(function() {
    
	var thisPane = $(this).next();
	
	if(thisPane.is(':visible')){
		thisPane.animate({
			'height':'toggle'
    	}, 'slow', 'easeOutBounce');	
	}else{
		
		$('#bio02 > div:visible').animate({
			'height':'toggle'
    	}, 'slow', 'easeOutBounce');	
	
		$(this).next().animate({
      		'height':'toggle'
    	}, 'slow', 'easeOutBounce');
			
	};
	
 	});