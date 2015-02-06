/**
 * Created by aakanksha on 6/2/15.
 */
function allowDrop(event,ui) {
    event.preventDefault();
     var u=event;
}
var b,c;
var data;
var count=0;
function drop(event) {
    event.preventDefault();
    data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    //document.getElementById("demo").innerHTML = "The p element was dropped";
    b = data;
    // document.getElementById('footer').innerHTML=data.text();
    $('#' + event.target.id).hide('explode');
    c = event.target.id
    alert(c);

    $('#footer').append($('#footer').text($('#' + event.target.id).text()))
    $('#footer').slideDown(500);
    count++;

    alert("the value of b:" + b);


}

var sourceId=b;
var targetID=c;




function result() {




    if(sourceId.charAt(sourceId.length-1 )== targetID.charAt(targetID.length-1))
    {
        count+=1;
        score();





    }



}
function score() {

    alert("your score is" + count);




}






    function dragStart(event) {
        event.dataTransfer.setData("Text", event.target.id);

        //var c=$('#'+event.target(b));


        $('#footer').text($('#' + event.target.id).text());
        //uid.drop.get(uid);


    }



$(document).ready (function(){

    $('#main_con').html('<div id ="header" ></div>');
    $('#header').html('<div id ="container_left"  "><strong>MATCH THE FOLLOWING</strong></div>');

    $('#main_con').append('<div id ="container_left1" "> <img src="CSC_0689.JPG.jpg" class="img-thumbnail" > left container</div>');

    <!-- left division -->
    $('#container_left').append('<div id ="container_right" >right container</div>')

    $('#container_left1').html('<div id ="left_1" class ="left_1" draggable="true"  ondrop="drop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" ondragover="allowDrop(event,ui)"  >MULTIPLE INHERITANCE </div>')

    $('#container_left1').append('<div id ="left_2"  class="left_1" draggable="true"  ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" >KERNEL</div>')


    $('#container_left1').append('<div id ="left_3" class="left_1" draggable="true"  ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" containment =#right_2" snap="#right_2" snapMode = "both" snapTolerance ="30 " >SUPER KEYWORD</div>')

    $('#container_right').html('<div id ="right_1"  draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" >OPERATING SYSTEM</div>')

    $('#container_right').append('<div id ="right_2" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)" >JAVA</div>')

    $('#container_right').append('<div id ="right_3"   revert="true" droppable="true" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)" ondrag="dragging(event)";tolerance="fit" >C++</div>')



    $('#main_con').append('<div id="footer"  > footer</div>')
    $('#main_con').append(' <button type="button" id="score" onclick="result()" >SCORE</button>' )
    $('#main_con').append(' <button type="reset"  id="reset" onclick="resetform()" >RESET</button>' )

    $('#footer').hide();
});


