/* 
	author: istockphp.com
*/
jQuery(function($) {
    var validation_holder;

    $("form#shareEmailForm input[name='submit']").click(function() {

    var validation_holder = 0;
        
        var emailto 			= $("form#shareEmailForm input[name='emailto']").val();
        var emailto_regex 	        = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check
        
        var sender 			= $("form#shareEmailForm input[name='sender']").val();
        var sender_regex	        = /^[A-Za-z]{2,100}$/;
        
        var emailfrom 			= $("form#shareEmailForm input[name='emailfrom']").val();
        var emailfrom_regex 	        = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check
       
        var subject                     = $("form#shareEmailForm input[name='subject']").val();
        var subject_regex		= /^[a-zA-Z]{1,100}$/; // reg ex phone check
        var message                     = $("form#shareEmailForm textarea[name='message']").val();
        var message_regex		= /^[a-zA-Z]{1,500}$/; // reg ex phone check

        /* validation start */
        
       if(emailto == "") {
                $("span.val_emailto").html("Enter Email ID").addClass('validate');
                validation_holder = 1;
        } else {
                if(!emailto_regex.test(emailto)){ // if invalid email
                        $("span.val_emailto").html("Invalid Email ID").addClass('validate');
                        validation_holder = 1;
                } else {
                        $("span.val_emailto").html("");
                }
        }
        
       if(sender == "") {
                $("span.val_sender").html("Enter Sender Name").addClass('validate');
                validation_holder = 1;
        } else {
                if(!isNaN(sender)){ // if invalid email
                        $("span.val_sender").html("Enter only Alphabetic name").addClass('validate');
                        validation_holder = 1;
                } else {
                    $("span.val_sender").html("");   
                }
        }
        
        if(emailfrom == "") {
                $("span.val_emailfrom").html("Enter Your Email ID").addClass('validate');
                validation_holder = 1;
        } else {
                if(!emailfrom_regex.test(emailfrom)){ // if invalid email
                        $("span.val_emailfrom").html("Invalid Email ID").addClass('validate');
                        validation_holder = 1;
                } else {
                        $("span.val_emailfrom").html("");
                }
        }
        
        
        if(subject == "") {
                $("span.val_subject").html("Enter Subject").addClass('validate');
                validation_holder = 1;
        } else {
                $("span.val_subject").html("");
        }
        
        if(message == "") {
                $("span.val_message").html("Enter Message").addClass('validate');
                validation_holder = 1;
        } else {
                $("span.val_message").html("");
        }
        
        if(validation_holder == 1) { // if have a field is blank, return false
                $("p.validate_msg").slideDown("fast");
                return false;
        }  validation_holder = 0; // else return true
        /* validation end */
                
        
    }); // click end 

}); // jQuery End