var playerInfo = document.getElementById("info");
var btn_getInfo = document.getElementById("btn");
document.getElementById("count").innerHTML = 0;
document.getElementById("myInput").style.display = 'none';

btn_getInfo.addEventListener("click",function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://thakersamveg608.github.io/ajax-implementation/data.json');
    ourRequest.onload = function(){
        var data = JSON.parse(ourRequest.responseText);
        console.log(data);
        renderHTML(data);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
    
    for(i=0;i<data.length;i++){
        htmlString+="<tr><td>" + data[i].name + "</td><td>" + data[i].club + "</td><td>" + data[i].country + "</td></tr>";
    }
    if(i==data.length){
        document.getElementById("count").innerHTML=i;
		document.getElementById("btn").style.display='none';
		document.getElementById("myInput").style.display='block';
    }
    playerInfo.insertAdjacentHTML('beforeend', htmlString);
}

function myFunction() {
    var input,filter,table,tr,td,firstCol,secondCol,thirdCol;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("info");
    tr  = table.getElementsByTagName("tr");
    var count = 0;
    for (i = 0; i < tr.length; i++) {
       var td = tr[i].getElementsByTagName("td")[0];
           var td1 = tr[i].getElementsByTagName("td")[1];
              var td2 = tr[i].getElementsByTagName("td")[2];
            if (td+td1+td2) {
              if ((td.innerHTML.toUpperCase().indexOf(filter)+td1.innerHTML.toUpperCase().indexOf(filter)+td2.innerHTML.toUpperCase().indexOf(filter)) > -3) {
                tr[i].style.display = ""; 
                count++;
                   document.getElementById('count').innerHTML=count;
              } else {
                tr[i].style.display = "none";
                document.getElementById('count').innerHTML=count;
              }    
        }
      }
}