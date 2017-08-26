// counter code
var button = document.getElementById('counter');

button.onclick = function(){
    //create a req to object
    var request = new XmlHttpRequest();
    
    //capture the reponse and store it in a variable 
    request.onreadystatechange = function () {
    if( request.readystate === XmlHttpRequest.Done)        
    {
        //take some action
       if (request.status==200) {
           varcounter = request.responseText;
           var span = document.getElementById('count');
        span.innerHtml = counter.toString();
       }
    }
        //not done
    };
    //make the request
    request.open('GET','http://u2015shradhaagrawal.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
    
};
