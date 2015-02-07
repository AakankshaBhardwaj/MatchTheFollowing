/**
 * Created by aakanksha on 6/2/15.
 */
function allowDrop(event,ui) {
    event.preventDefault();
     //var u=event;
}
var b,c;
var data;
var count=0;
function drop(event) {
    event.preventDefault();
    data = event.dataTransfer.getData("Text");//dragged element
    event.target.appendChild(document.getElementById(data));
    b = data;
    // document.getElementById('footer').innerHTML=data.text();
    $('#' + event.target.id).hide('explode');
    c = event.target.id
   // alert(c);  // the value of destination

    $('#footer').append($('#footer').text($('#' + event.target.id).text()));
    $('#footer').slideDown(500);

    /*createItem();

    function createItem()

    {
       //alert("create function is called");
        //alert (b);alert(c);
       // var val= $('#'+b).html(); //extract the text of the source
        var valL=$('#'+c).text(); // extract the text of target and source
       // alert(valS);
        alert(valL);  // shows left+right
        //var newItem=  '<>'+ "+valLast; // make a new item  to be added
        //alert(newItem);
        //if(b.charAt(sourceID.length-1 )== lastID.charAt(lastID.length-1)){score+=1;}
        $('#footer').append('<div id= '+addID+'>'+ " "+"valL  " + '</div>');
         $('#footer').text(valL);

    }
*/
  result();

    //alert("the value of b:" + b);

    function result() {

        if (b.charAt((b.length) - 1) == c.charAt((c.length) - 1)) {
            // alert("true");
            count++;
            //alert("your score is" + count);

            score(count);

        }
        else
            score(count);     //alert("you have " + count + "perfect match");

    }



}
    function dragStart(event) {
        event.dataTransfer.setData("Text", event.target.id);

        //var c=$('#'+event.target(b));
        // $('#footer').text($('#' + event.target.id).text());
        //uid.drop.get(uid);
//The dataTransfer object is similar to the clipboardData object, but it can be used for customizing drag-and-drop operations.
        //The dataTransfer object is only accessible through the event object in case of the following events: ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart and the ondrop.

    }
function score( count){
    $('#score').text("Your score is "+count);

}


function reset()
{
    location.reload();

}






$(document).ready (function(){

    $('#main_con').html('<div id ="header" ></div>');
    $('#header').html('<div id ="container_left"  "><strong>MATCH THE FOLLOWING</strong></div>');

    $('#main_con').append('<div id ="container_left1" "> <img src="CSC_0689.JPG.jpg" class="img-thumbnail" > left container</div>');

    <!-- left division -->
    $('#container_left').append('<div id ="container_right" >right container</div>')

    $('#container_left1').html('<div id ="left_1" class ="left_1" draggable="true"  droppable="true" ondrop="drop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" ondragover="allowDrop(event)"  >MULTIPLE INHERITANCE </div>')

    $('#container_left1').append('<div id ="left_2"  class="left_1" draggable="true" droppable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" >KERNEL</div>')


    $('#container_left1').append('<div id ="left_3" class="left_1" draggable="true"  droppable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" containment =#right_2" snap="#right_2" snapMode = "both" snapTolerance ="30 " >SUPER KEYWORD</div>')

    $('#container_right').html('<div id ="right_1"  draggable="true"  droppable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" >C++</div>')

    $('#container_right').append('<div id ="right_2" draggable="true"  droppable="true"ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" >OPERATING SYSTEM</div>')

    $('#container_right').append('<div id ="right_3"  droppable="true" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)";tolerance="fit" >JAVA</div>')

    $('#main_con').append('<div id="footer"  > footer</div>')

    $('#main_con').append(' <button type="button" id="score"  >SCORE</button>' )

    $('#main_con').append(' <button type="reset"  id="reset" onclick="reset()" >RESET</button>' )

    $('#footer').hide();
});



