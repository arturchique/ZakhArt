//взятие информации в массив

let str = document.getElementById('link_list').innerHTML;
str = str.slice(2,str.length -2);
let arr = str.split("', '");
let str2 = document.getElementById('url_list').innerHTML;
str2 = str2.slice(1,str2.length -1);
let arr2 = str2.split(", ");
let str3 = document.getElementById('cost_list').innerHTML;
str3 = str3.slice(1,str3.length -1);
let cost_arr = str3.split(", ");
let str4 = document.getElementById('summary_list').innerHTML;
str4 = str4.slice(2,str4.length -2);
let summary_arr = str4.split("', '");

let k =0;
let img = document.getElementById("image");
img.setAttribute("src", arr[k]);
let a = document.getElementById("link_image");
a.setAttribute("href", "products/" + arr2[k]);
let block_img = document.getElementById("block_img");
let block_sum = document.getElementById("block_sum");
let show = document.getElementById("show_full");
let cost = document.getElementById("costt");
cost.innerHTML = "COST : " + cost_arr[k];
let summary = document.getElementById("sum");
summary.innerHTML = summary_arr[k];
let follow_a = document.getElementById("follow_a");
follow_a.setAttribute("href","products/" + arr2[k]);

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
            block_sum.style.display = "block";
            block_img.style.opacity = "1";
            //анимация смены фотографий
        setTimeout(function(){
            img.style.opacity = "0";
            setTimeout(function(){
                img.style.opacity = "1";
            },500);
        },3500);
        setTimeout(function l(){
            if(block_img.style.display == "block"){
                img.setAttribute("src", arr[k]);
                a.setAttribute("href","products/" + arr2[k]);
                follow_a.setAttribute("href","products/" + arr2[k]);
                cost.innerHTML = "COST : " + cost_arr[k];
                summary.innerHTML = summary_arr[k];
                ++k;
                if(k==arr.length){
                    k = 0;
                }
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
    follow_a.setAttribute("href","products/" + arr2[k]);
    cost.textContent = "COST : " + cost_arr[k];
    summary.innerHTML = summary_arr[k];
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
    follow_a.setAttribute("href","products/" + arr2[k]);
    cost.textContent = "COST : " + cost_arr[k];
    summary.innerHTML = summary_arr[k];
    k++;
    if(k==arr.length){
        k = 0;
    }
}

show.onclick = function full(){
    block_sum.style.top = "7vw";
    block_sum.style.height = "39.4vw";
    block_sum.style.zIndex = "1000";
    setTimeout(function(){
        block_img.style.display = "none";
    },1000);
}


