;//note:if you run this file locally
//you will not geyt a server status
//you can comment out mlines 9 and 26 to ,make it work locallty
function clickme()
{
var xhr=new XMLHttpRequest();//create httpv request object (1:runs first)
xhr.onload=function(){//when readystate changes
//following conditional not worlk loaclly-only pn a server
//if(xhr.status==200){
    responseObject =JSON.parse(xhr.responseText);//4
    //build up string with new content
    var newContent='';//5
var number=document.getElementById('num').value;
number=parseInt(number);
    for(var i=0;i<responseObject.events.length;i++){//loop through object 6
        if(number==responseObject.events[i].ID)
        {
        newContent +='<div class="event">';
        newContent +='<img src="'+responseObject.events[i].map +'"';
        newContent +='<p><b>' +responseObject.events[i].ID+'</b><br>';
        newContent +='<p><b>' +responseObject.events[i].Name+'</b><br>';
        newContent +='<p><b>' +responseObject.events[i].DOB+'</b><br>';
        newContent +='<p><b>' +responseObject.events[i].College+'</b><br>';
        newContent +='</div>';
        }
console.log(number);
    }
    document.getElementById('conent').innerHTML = newContent;//7
};
//}
xhr.open('GET','data2.json',true);//prepare the request
xhr.send(null);//send request 3
}
