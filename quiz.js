
// ### It accepts a single object as an argument. The object should have two key/value pairs.
var myTree = {
  // 1. A key that specifies the height of the pine tree.
  treeHeight: ,
  // 1. A key that specifies which character to use to build the pine tree
  treeChar:
}


// 1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
myTree.treeHeight = document.querySelector("how-tall").innerHTML;

// 1. The character to use should be from user input in a `<input type="text">` field in the DOM.
myTree.treeChar = document.querySelector("what-char").innerHTML


// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.
var tree = function () {
  for (var i = 0; i <= myTree.treeHeight; i++) {
    //include  3 apostrophes, then js
    //number of spaces for top of tree = treeHeight - 1
    //space decrease by one each line
    //char increases by 2 each line
    //base of tree = (treeHeight X 2) - 1
    //conclude with three closing apostrophes

  }
// Once the user enters in a number, and a character,
   // the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_,
   //or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
   //This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key,
     //or presses the button, then display an alert stating that both fields must have a value.

}
