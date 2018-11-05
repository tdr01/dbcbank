/* 
	author: istockphp.com
*/
jQuery(function($) {
    var validation_holder;

    $("form#saveLeaveNumberForm input[name='button2']").click(function() {

    var validation_holder = 0;
         
        var fname 			= $("form#saveLeaveNumberForm input[name='fname']").val();
        var fname_regex	                = /^[A-Za-z \\s]{2,40}$/;
        var lname 			= $("form#saveLeaveNumberForm input[name='lname']").val();
        var lname_regex		        = /^[A-Za-z \\s]{2,20}$/;
        var email 			= $("form#saveLeaveNumberForm input[name='email']").val();
        var email_regex 	        = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check
        var state      		        = $("form#saveLeaveNumberForm select[name='state_id']").val(); 
        var city      		        = $("form#saveLeaveNumberForm select[name='city_id']").val(); 
        var area_code                   = $("form#saveLeaveNumberForm input[name='area_code']").val();
        var area_code_regex		= /^[0-9]{2,6}$/; // reg ex phone check
        var landline_no 		= $("form#saveLeaveNumberForm input[name='landline_no']").val();
        var landline_no_regex		= /^[0-9]{6,10}$/; // reg ex phone check
        var phone 			= $("form#saveLeaveNumberForm input[name='mobile_no']").val();
        var phone_regex		        = /^[0-9]{10,10}$/; // reg ex phone check
        var captcha                     = $("form#saveLeaveNumberForm input[name='captcha']").val();
        var terms_condition             = $("form#saveLeaveNumberForm input[name='terms_condition']");

        /* validation start */	
        
        if(fname === "" || fname === "First name *") {
                $("span.val_fname").html("Enter first name").addClass('validate');
                validation_holder = 1;
        } else {
                if((!fname_regex.test(fname)) && (fname !== "First name *")){ // if invalid email
                        $("span.val_fname").html("Enter only Alphabetic name").addClass('validate');
                        validation_holder = 1;
                } else {
                        $("span.val_fname").html("");
                }
        }
        if(lname === "" || lname === "Last name *") {
                $("span.val_lname").html("Enter last name").addClass('validate');
                validation_holder = 1;
        } else {
                if((!lname_regex.test(lname)) && (lname !== "Last name *")){ // if invalid email
                        $("span.val_lname").html("Enter only Alphabetic name").addClass('validate');
                        validation_holder = 1;
                } else {
                        $("span.val_lname").html("");
                }
        }
        if(email === "" || email === "Email ID *") {
                $("span.val_email").html("Enter email id").addClass('validate');
                validation_holder = 1;
        } else {
                if((!email_regex.test(email)) && (email !== "Email ID *")){ // if invalid email
                        $("span.val_email").html("Invalid Email").addClass('validate');
                        validation_holder = 1;
                } else {
                        $("span.val_email").html("");
                }
        }
        
        if(state === "") {
                $("span.val_state_id").html("Select state").addClass('validate');
                validation_holder = 1;
        } else {
                $("span.val_state_id").html("");
        }
        
        if(city === "") {
                $("span.val_city_id").html("Select city").addClass('validate');
                validation_holder = 1;
        } else {
                $("span.val_city_id").html("");
        }
        
        
        if((landline_no !== "")) 
        { 
            if(area_code === "" || area_code === "Area code*") {
                    $("span.val_area_code").html("Enter Area Code").addClass('validate');
                    validation_holder = 1;
            } else { 
                $("span.val_area_code").html("");
            }
        }
        
        if((landline_no !== "")) 
        {
            if(area_code !== "" && area_code !== "Area code*") {
                if((isNaN(area_code)) && (area_code !== "Area code*")){ // if Country Code
                    $("span.val_area_code").html("Enter Numeric value").addClass('validate');
                    validation_holder = 1;
                }
                else if((!area_code_regex.test(area_code)) && (area_code !== "Area code*")){ // if invalid phone
                         $("span.val_area_code").html("Invalid Area Code").addClass('validate');
                         validation_holder = 1;
                }
                else {
                        $("span.val_area_code").html("");
                }
            } 
        }  
        
        
        if((landline_no === "" || landline_no === "Landline no. *") && (phone === "" || phone === "Mobile no. *")) { 
                $("span.val_phone").html("Enter Landline No or Mobile No.").addClass('validate');
                validation_holder = 1;
        } else { 
            $("span.val_phone").html("");
        } 
        
        if(landline_no !== "" && landline_no !== "Landline no. *") {  
                if((!landline_no_regex.test(landline_no)) && (landline_no !== "Landline no. *")){ // if invalid phone
                 $("span.val_landline_no").html("Invalid Landline No.").addClass('validate');
                 validation_holder = 1;
                 }
                 else {
                    $("span.val_landline_no").html("");
                 }  
        } 
        if((phone !== "" && phone !== "Mobile no. *")) {  
                if((!phone_regex.test(phone)) && (phone !== "Mobile no. *")){ // if invalid phone
                 $("span.val_phone").html("Invalid Mobile No.").addClass('validate');
                 validation_holder = 1;
                 }
                 else {
                    $("span.val_phone").html("");
                 }    
        } 
        
        if(captcha === "" || captcha === "Captcha code *") {
                $("span.val_captcha").html("Enter captcha code").addClass('validate');
                validation_holder = 1;
        } else {
                $("span.val_captcha").html("");
        }
        
        if(terms_condition.is(':checked') === false) {
                $("span.val_terms_condition").html("Check authorize").addClass('validate');
                validation_holder = 1;
        } else {
                $("span.val_terms_condition").html("");
        }
        
        if(validation_holder === 1) { // if have a field is blank, return false
                $("p.validate_msg").slideDown("fast");
                return false;
        }  validation_holder = 0; // else return true
        /* validation end */	
        
        
    }); // click end 
    
     
     
}); // jQuery End


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
    }
    return true;
}
