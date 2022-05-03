jQuery(document).on('click', '.tab-menu li a', function(){  
    var target = jQuery(this).attr('data-rel');
    jQuery('.tab-menu li a').removeClass('active');
    jQuery(this).addClass('active');
    jQuery("#"+target).fadeIn('slow').siblings(".tab-box").hide();
    return false; 
});