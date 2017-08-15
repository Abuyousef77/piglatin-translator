$(document).ready(function(){
  $(".main").submit(function(event){
    event.preventDefault();
    var userSentence = $("#comment").val();
    for(var i = 0; i < userSentence.length; i++){
      if(userSentence[i] === "a"){
        userSentence[i] = "-";
      } else if (userSentence[i] === "e") {
        userSentence[i] = "-";
      } else if (userSentence[i] === "i") {
        userSentence[i] = "-";
      } else if (userSentence[i]) === "o") {
        userSentence[i] = "-";
      } else if (userSentence[i] === "u") {
        userSentence[i] = "-";
      } else {
        userSentence[i] = userSentence[i];
      }
    };
    
  });
});
