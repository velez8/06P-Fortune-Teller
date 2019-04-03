$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    var food = $(".food").val();
    var amount = $(".amount").val();
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = "By the year 2025 "+ name + " " + food + parseInt(amount);
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});