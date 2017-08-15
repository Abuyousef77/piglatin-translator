$(document).ready(function(){
  $(".main").submit(function(event){
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var userSentence = $("#comment").val();

    userSentence.toLowerCase();

    for(var i = 0; i < userSentence.length; i++){
      for(var k = 0; k < vowels.length; k++){
        userSentence = userSentence.replace(vowels[k], "-");
      };
    };
    $("textarea").hide();
    $(".outputtext").text(userSentence);
  });
});




// for(var i = 0; i < userSentence.length; i++){
//   if(userSentence[i] === "a"){
//     userSentence = userSentence.replace("a", "-");
//   } else if (userSentence[i] === "e") {
//     userSentence = userSentence.replace("a", "-");
//   } else if (userSentence[i] === "i") {
//     userSentence = userSentence.replace("a", "-");
//   } else if (userSentence[i] === "o") {
//     userSentence = userSentence.replace("a", "-");
//   } else if (userSentence[i] === "u") {
//     userSentence = userSentence.replace("a", "-");
//   } else {
//     ;
//   }
// };
