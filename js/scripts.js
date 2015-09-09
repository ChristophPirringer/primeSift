var primeSift = function(input) {

  var upper_limit = parseInt(input);
  var sive = [];

  for(var i = 2; i <= upper_limit; i++){
    sive.push(i);
  };

  single_digits=[2,3,5,7];

  single_digits.forEach(function(number) {
    sive.forEach(function(digit){
      if (digit % number === 0 && number !== digit){
        var index = sive.indexOf(digit);
        sive.splice(index, 1);
      };
    });
  });
  return sive;
};


// $(document).ready(function() {
//   $("form#palindrome").submit(function(event) {
//     var raw_input = $("input#raw_input").val();
//
//     var result = "";
//     if (palindrome(raw_input)){
//       result = "YES";
//     }else{
//       result = "NO";
//     };
//
//     $(".output").text(result);
//     event.preventDefault();
//   });
// });
