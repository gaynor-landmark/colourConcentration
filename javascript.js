
var firstBlockID = "";
var secondBlockID = "";
var timeoutID;
var matchesNr = 0;
var missesNr = 0;

$(document).ready( function(){
  $(document).on("click", "#board td", function(e){
    var blockID = $(this).attr('id');
    if (canRespond(blockID))
    {
      showBlock(blockID);
    }

   })
  }
)

function canRespond (blockID) {
  var block = $("#" + blockID)
  if (block.hasClass("matched")) {
    return false  // don't respond to the  click
  }
  if (firstBlockID == "" || secondBlockID == "") {
    return true
  }
  return false
}

function showBlock(blockID){
    if  (firstBlockID === "") {
      firstBlockID = blockID;
      var firstblock = $("#" + firstBlockID)
      firstblock.toggleClass("newColour" + blockID);
    } else {
      secondBlockID = blockID
      var secondblock = $("#" + secondBlockID)
      var firstblock = $("#" + firstBlockID)
      console.log(matchesNr, missesNr);
      if (firstBlockID === secondBlockID) {
        // clicking the same block again, so just toggle, don't check
        firstblock.toggleClass("newColour" + blockID);
      } else {
        secondblock.toggleClass("newColour" + blockID);
        if (checkMatch(firstBlockID, secondBlockID)){
          firstblock.addClass("matched")
          secondblock.addClass('matched')
          matchesNr++;
          var msg1 = document.getElementById("message1");
          msg1.textContent = "Matches " + matchesNr;
          firstBlockID = "";
          secondBlockID = "";
        } else {
          missesNr++;
          var msg2 = document.getElementById("message2");
          msg2.textContent = "Misses " + missesNr;
          var x = setTimeout(unset(firstBlockID, secondBlockID),2000);
        };
      }
    }

}

function unset(firstBlockID, secondBlockID){
  //unset the miss-matched colours to pick another match
  var secondblock = $("#" + secondBlockID)
  var firstblock = $("#" + firstBlockID)
  firstblock.toggleClass("newColour" + firstBlockID );
  secondblock.toggleClass("newColour" + secondBlockID );
  firstblock = "";
  secondblock = "";
  window.clearTimeout(timeoutID);      //clear the timeout
}

function checkMatch(blck, pr){
  // if the same color was picked twice - return false
  if (blck == pr){
    pair = "";
    return false;
  }
  //check the pairs to see if this is a match
  switch (blck){
    // row 1
  case "r1c1" :{
   // orange
   if (pr == "r2c1"){
     return true;
   }
   break;
  }
  case "r1c2" :{
   // red
   if (pr == "r2c3"){
     return true;
   }
   break;
  }
  case "r1c3" :{
   // khaki
   if (pr == "r2c4"){
     return true;
   }
   break;
  }
  case "r1c4" :{
   // Indigo
   if (pr == "r4c1"){
     return true;
   }
   break;
  }
  case "r1c5": {
   // MistyRose
   if (pr == "r5c3"){
     return true;
   }
   break;
  }
  //row 2
  case "r2c1": {
   // orange
   if (pr == "r1c1"){
     return true;
   }
   break;
  }
  case "r2c2": {
   // Coral
   if (pr == "r3c4"){
     return true;
   }
   break;
  }
  case "r2c3": {
   // red
   if (pr == "r1c2"){
     return true;
   }
   break;
  }
  case "r2c4":{
   //
   if (pr == "r2c1"){
     return true;
   }
   break;
  }
  case "r2c5": {
   // Sienna
   if (pr == "r5c4"){
     return true;
   }
   break;
  }
//row 3
  case "r3c1" :{
   // Orchid
   if (pr == "r4c2"){
     return true;
   }
   break;
  }
  case "r3c2" :{
   // black
   if (pr == "r6c2"){
     return true;
   }
   break;
  }
  case "r3c3" :{
   // green
   if (pr == "r3c5"){
     return true;
   }
   break;
  }
  case "r3c4":{
   // SpringGreen
   if (pr == "r4c4"){
     return true;
   }
   break;
  }
  case "r3c5" :{
   // green
   if (pr == "r3c3"){
     return true;
   }
   break;
  }
  //row 4
  case "r4c1" :{
   // Indigo
   if (pr == "r1c4"){
     return true;
   }
   break;
  }
  case "r4c2":{
   // Orchid
   if (pr == "r3c1"){
     return true;
   }
   break;
  }
  case "r4c3" :{
   // SpringGreen
   if (pr == "r4c4"){
     return true;
   }
   break;
  }
  case "r4c4" :{
   // SpringGreen
   if (pr == "r4c3"){
     return true;
   }
   break;
  }
  case "r4c5": {
   // SkyBlue
   if (pr == "r5c5"){
     return true;
   }
   break;
  }
  //row 5
  case "r5c1":{
   // Gold
   if (pr == "r5c2"){
     return true;
   }
   break;
  }
  case "r5c2":{
   // Gold
   if (pr == "r5c1"){
     return true;
   }
   break;
  }
  case "r5c3" :{
   // MistyRose
   if (pr == "r1c5"){
     return true;
   }
   break;
  }
  case "r5c4": {
   // Sienna
   if (pr == "r2c5"){
     return true;
   }
   break;
  }
  case "r5c5": {
   // SkyBlue
   if (pr == "r4c5"){
     return true;
   }
   break;
  }
  //row 6

  case "r6c1":{
   // Grey
   if (pr == "r6c3"){
     return true;
   }
   break;
  }
  case "r6c2":{
   // Black
   if (pr == "r3c2"){
     return true;
   }
   break;
  }
  case "r6c3" :{
   // grey
   if (pr == "r6c1"){
     return true;
   }
   break;
  }
  case "r6c4": {
   // Purple
   if (pr == "r6c5"){
     return true;
   }
   break;
  }
  case "r6c5": {
   // Purple
   if (pr == "r6c4"){
     return true;
   }
   break;
  }
  default:
    return false;
  }
}
