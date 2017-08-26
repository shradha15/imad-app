// counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    //make a req to counter endpoint
    
    //capture the reponse and store it in a variable 
    
    //render the variable in correct spam
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHtml = counter.toString();
};
