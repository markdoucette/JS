// JavaScript Document

$('.bio_text').hide();

$('.btn_show').click(function(){
	
	var btn = $(this);
	var txt = $(this).next();
	
	if(txt.is(':visible')){
		btn.text('Show Bio');	
	}else{
		btn.text('Hide Bio');
	};
	
	txt.slideToggle(500);
	$(this).parent().toggleClass('highlight');
		
});
