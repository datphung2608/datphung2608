var img=[];
var curimg=0;
function load_imges(){
    for(i=2;i<6;i++){
        img[i]=new Image();
        img[i].src="images/rose"+i+".jpeg";

    }
}
function next(){
    if(curimg<img.length-1){
        curimg++;
    document.getElementById("rose").src=img[surimg].src;    
    }
    if(curimg==img.length-1){
        curimg=0;
    }
}
function back(){
    if (curimg>0){
        curimg--;
    document.getElementById("rose").src=img[curimg].src;    
    }
    if(curimg==0){
        curimg=img.length-1;
    }
}