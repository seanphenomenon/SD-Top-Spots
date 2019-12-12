$(document).ready(function() {
// write your code here

//GOAL: Given this data is an array of objects, figure out how to iterate through array of objects and append name, description, and location information to HTML table. 

// Ideas: jQuery $.each method & For loop

$.getJSON("data.json", function(data){ 
  $.each(data, function(key,value){
    $('#topSpotTable').append(`<tr><td>${value.name}</td><td>${value.description}</td><td><a href="https://www.google.com/maps?q=${value.location}">Open in Google Maps</a></td></tr>`);
    
  });    

})
})














// For Loop below iterates through array of objects looking for name values only.
  
// var n = 0;
//   for (n=0; n<data.length; n++) {
//     var name = data[n]["name"]
//     console.log(name);
//   }
  

// For loop below is iterates through array of objects looking for description values only. 

// var d = 0; 

//   for (d=0; d<data.length; d++){
//    var description = data[d] ["description"]
//    console.log(description);
// }


// For loop below is iterates through array objects looking for location values only.

// var l = 0;

//   for (l=0; l<data.length; l++){
//     var location = data [l] ["location"]
//     console.log(location);
// }
// });
  

