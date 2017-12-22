//Variables
var inputColor= document.getElementById('colorPicker');
let inputHeight;
let inputWidth;


//switch on hover vs click
let hoverSwitch;

function makeGrid(inputHeight) {
  event.preventDefault();

inputHeight=document.getElementById('input_height').value;
inputWidth=document.getElementById('input_width').value;
var table= document.getElementById('pixel_canvas');

table.innerHTML=""


let row;
for (var i = 0; i <inputHeight; i++) {
let row=table.insertRow(i);
  for (var j = 0; j < inputWidth ; j++) {
   let cell=row.insertCell(j);

   //coloring the table
   if (hoverSwitch===true) {

       cell.addEventListener("mouseover", function(event) {
         cell.style.backgroundColor=inputColor.value;
     });
//remove color
cell.addEventListener("dblclick", function(event) {
  cell.style.backgroundColor="";
});

   }
else {

cell.addEventListener("click", function(event) {
cell.style.backgroundColor=inputColor.value;
  });

  //remove color
  cell.addEventListener("dblclick", function(event) {
    cell.style.backgroundColor="";
  });
}

console.log(hoverSwitch);
  }


}

console.log("fga");

};
