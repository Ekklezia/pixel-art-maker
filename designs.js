$(document).ready(function(){
  const button =$("#resetButton");
  const table = $("#pixel_canvas");
//my pixel art project function
function makeGrid() {
    //my values (or function's values:))
    let rows = $('#input_height').val();
    let columns = $('#input_width').val();
    let color;
  // no country for old canvas!
$('#pixel_canvas').children().remove();
//our grid is a little one 
if(rows<=0||rows>100||columns<=0||columns>100){
  alert("Please choose your grid width and grid height values under 100!");
  return true;
}
  // and the oscar goes to rows and columns!
    for (let x = 0; x < rows; x++) {
        $('#pixel_canvas').append('<tr></tr>');
        };
    for (let y = 0; y < columns; y++) {
            $('tr').append('<td></<td>');
        };

    // we can't imagine a pixelart without colors
    $('td').on('click', function () {
        color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
    });
  //and now we should add the "remove color" thing
$('td').on("dblclick",function(){
  color = $('#colorPicker').val();
    $(this).attr("bgcolor", "lightgrey");
    });
  // clean the canvas
  $("#resetButton").on("click",function(evt) {$("#pixel_canvas").empty();
 });

}

//let's call the our little grid. I took "input[type='submit']" part from html
$("input[type='submit']").click(function (event) {
    event.preventDefault();
    makeGrid();
});

})
