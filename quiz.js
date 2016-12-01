
// ### It accepts a single object as an argument. The object should have two key/value pairs.
var myTree = {
  // 1. A key that specifies the height of the pine tree.
  treeHeight: 0,
  // 1. A key that specifies which character to use to build the pine tree
  treeChar: ""
}



//Create array that will output in console log one string at a time;
var treeBuilder = [];
// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.
// ### It accepts a single object as an argument. The object should have two key/value pairs.
var tree = function (myTree) {
  // 1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
      //and convert to a number
    var userTreeHeight = parseInt(document.querySelector(".how-tall").value);
    myTree.treeHeight = userTreeHeight;
// 1. The character to use should be from user input in a `<input type="text">` field in the DOM.
    var userTreeChar = document.querySelector(".what-char").value;
    myTree.treeChar = userTreeChar;
      //include  3 apostrophes, then js
  console.log("'''js");
  for (var i = 0; i <= myTree.treeHeight; i++) {

    //number of spaces for top of tree = treeHeight - 1
        //space decrease by one each line
    for (var j = 0; j < myTree.treeHeight; j++) {
      //will add value of (i-1) spaces to each line
      treeBuilder[i] = treeBuilder[i] + " ";
    }
    for (var k = 0; k < ((i * 2) + 1); k++) {
      //char increases by 2 each line
      //base of tree = (treeHeight X 2) - 1
      treeBuilder[i] = treeBuilder[i] + treeBuilder[i].treeChar;
    }
    console.log(treeBuilder[i]);
  }

    //conclude with three closing apostrophes
  console.log("'''");
}


// If either of the input fields does not have a value in it when the user presses the enter key,
     //or presses the button, then display an alert stating that both fields must have a value.
var checkFields = function () {
  if (document.querySelector(".how-tall").value === "" || document.querySelector(".what-char").value === "") {
    alert("Both fields must have a value");
  } else {
   tree(myTree);
  }
}

// Once the user enters in a number, and a character,

   // the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_,

   //or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
   var but = document.querySelector(".grow");
   but.addEventListener("click", checkFields);
   //This requires you to add an event listener to the button, as well as an event listener for the enter/return key.
