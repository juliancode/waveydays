// form validation

$("#contactform").validate({
    
    // Specify the validation rules
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        message: "required"
    },
    
    // Specify the validation error messages
    messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        message: "Please enter a message"
    },
    
    submitHandler: function(form) {
        sendMsg();
    }
});
