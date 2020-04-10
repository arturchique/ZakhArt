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
let ava = document.getElementById("ava");
let p1_show = document.getElementById("p1_sh");
let p2_show = document.getElementById("p2_sh");
let block_categories = document.getElementById("block_cat");
let trans_anim1 = document.getElementById("transition_anim1");
let trans_anim2 = document.getElementById("transition_anim2");
let trans_anim3 = document.getElementById("transition_anim3");
let trans_anim4 = document.getElementById("transition_anim4");

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
            block_categories.style.display = "block";
            block_img.style.opacity = "1";
            //анимация смены фотографий
        setTimeout(function(){
            trans_anim1.style.width = "100%";
            trans_anim3.style.width = "100%";
            trans_anim2.style.width = "100%";
            trans_anim4.style.width = "100%";
            setTimeout(function(){
                trans_anim1.style.float = "right";
                trans_anim2.style.float = "right";
                trans_anim3.style.float = "right";
                trans_anim4.style.float = "right";
                trans_anim1.style.width = "0%";
                trans_anim2.style.width = "0%";
                trans_anim3.style.width = "0%";
                trans_anim4.style.width = "0%";
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
                trans_anim1.style.float = "left";
                trans_anim1.style.width = "100%";
                trans_anim2.style.float = "left";
                 trans_anim2.style.width = "100%";
                trans_anim3.style.float = "left";
                trans_anim4.style.float = "left";
                trans_anim3.style.width = "100%";
                trans_anim4.style.width = "100%";
                setTimeout(function(){
                    trans_anim1.style.float = "right";
                    trans_anim2.style.float = "right";
                    trans_anim3.style.float = "right";
                    trans_anim4.style.float = "right";
                    trans_anim1.style.width = "0%";
                    trans_anim2.style.width = "0%";
                    trans_anim3.style.width = "0%";
                    trans_anim4.style.width = "0%";
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

let show_flug = false;
show.onclick = function full(){
    if(!show_flug){
        block_sum.style.top = "5.5vw";
        block_sum.style.height = "39.4vw";
        block_sum.style.zIndex = "1000";
        setTimeout(function(){
            block_img.style.display = "none";
            show_flug = true;
        },1000);
        ava.style.width = "8vw";
        ava.style.height = "8vw";
        ava.style.borderRadius = "50%";
        ava.style.top = "1vw";
        ava.style.right = "1vw";
        follow_a.style.top = "10vw";
        follow_a.style.right = "1vw";
        follow_a.style.fontSize = "1vw";
        setTimeout(function(){
            p1_show.style.display = "none";
            p2_show.style.display = "block";
        },750);
        show.style.transform = "rotateX(180deg)";
         p2_show.style.transform = "rotateX(180deg)";
    }
    if(show_flug){
        block_sum.style.top = "37.9vw";
        block_sum.style.height = "7vw";
        block_sum.style.zIndex = "1000";
        block_img.style.display = "block";
        ava.style.width = "3vw";
        ava.style.height = "2.8vw";
        ava.style.borderRadius = "0%";
        ava.style.top = "0.5vw";
        ava.style.right = "0.5vw";
        follow_a.style.top = "3.7vw";
        follow_a.style.right = "0.5vw";
        follow_a.style.fontSize = "0.8vw";
        p2_show.style.transform = "rotateX(0deg)";
         setTimeout(function(){
            p1_show.style.display = "block";
            p2_show.style.display = "none";
        },750);
        show.style.transform = "rotateX(360deg)";
        show_flug = false;

    }
}


