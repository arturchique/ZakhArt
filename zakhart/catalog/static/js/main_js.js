//взятие информации в массив

let str = document.getElementById('link_list').innerHTML;
str = str.slice(2,str.length -2);
let arr = str.split("', '");
let str2 = document.getElementById('url_list').innerHTML;
str2 = str2.slice(1,str2.length -1);
let arr2 = str2.split(", ");
let k =0;
let img = document.getElementById("image");
img.setAttribute("src", arr[k]);
let a = document.getElementById("link_image");
a.setAttribute("href", "products/" + arr2[k]);
let block_img = document.getElementById("block_img");
k++;

//анимация кнопки

let element = document.getElementById('circle');
let my_time = 30;
let img2 = document.getElementById('image');
let flag = false;
function animationRound(){
    my_time+=1;
    element.style.transform = "scale(" + 1.05 + "  ," + 1.05 +")";
    if(my_time > 80){
        requestAnimationFrame(animationRound2);
    }
    else if(flag){
        element.style.transform = "scale(" + 1 + " ," + 1 +")";
     }
    else{
        requestAnimationFrame(animationRound);
    }
}
function animationRound2(){
    my_time-=1;
    element.style.transform = "scale(" + 0.95 + " ," + 0.95 +")";
    if(my_time < 30){
        requestAnimationFrame(animationRound);
       }
     else if(flag){
        element.style.transform = "scale(" + 1 + " ," + 1 +")";
     }
    else{
        requestAnimationFrame(animationRound2);
     }
}
let Idreq;
Idreq = requestAnimationFrame(animationRound);

//анимация раскрытия и прочие при нажатии

element.onclick = function al(){
        element.style.borderRadius = "0%";
        flag = true;
        element.style.transform = "scale(" + 1 + " ," + 1 +")";
        element.style.height = "100vh";
        element.style.width = "70vw";
        element.style.left = "15vw";
        element.style.top = "0vh";
        setTimeout(function(){
            block_img.style.display = "block";
            block_img.style.opacity = "1";
            //анимация смены фотографий
        setTimeout(function(){
            img.style.opacity = "0";
            setTimeout(function(){
                img.style.opacity = "1";
            },500);
        },3500);
        setTimeout(function l(){
            img.setAttribute("src", arr[k]);
            a.setAttribute("href","products/" + arr2[k]);
            ++k;
            if(k==arr.length){
                k = 0;
            }
            setTimeout(function(){
                img.style.opacity = "0";
                setTimeout(function(){
                   img.style.opacity = "1";
                },500);
            },3500);
            let timerid = setTimeout(l,4000);
        },4000);
 },1500);

}


let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");

arrow1.onclick = function forw_img(){
    img.setAttribute("src", arr[k]);
    a.setAttribute("href","products/" + arr2[k]);
    ++k;
    if(k==arr.length){
        k = 0;
    }
}
arrow2.onclick = function back_img(){
    if(k==0){
        k = arr.length-2;
    }
    else if(k==1){
        k = arr.length-1;
    }
    else{
        k-=2;
    }
    img.setAttribute("src", arr[k]);
    a.setAttribute("href","products/" + arr2[k]);
    k++;
    if(k==arr.length){
        k = 0;
    }
}


