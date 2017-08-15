// BUSINESS/BACKEND LOGIC
var replaceVowels = function(sentenceWithVowels) {
  var vowels = ["a", "e", "i", "o", "u"];

  sentenceWithVowels.toLowerCase();
  for(var i = 0; i < sentenceWithVowels.length; i++){
    for(var k = 0; k < vowels.length; k++){
      sentenceWithVowels = sentenceWithVowels.replace(vowels[k], "-");
    };
  };

  return sentenceWithVowels;
};

// USER/FRONTEND LOGIC
$(document).ready(function(){
  $(".main").submit(function(event){
    event.preventDefault();

    // Find and store user input
    var userSentence = $("#comment").val();

    var vowellessSentence = replaceVowels(userSentence);
    // Hides the answer
    $("textarea").hide();

    $(".outputtext").text(vowellessSentence);
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
