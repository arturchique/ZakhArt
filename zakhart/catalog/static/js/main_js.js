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
       k++;
       setTimeout(function l(){
            img.setAttribute("src", arr[k]);
            a.setAttribute("href","products/" + arr2[k]);
            k++;
            if(k==arr.length){
                k = 0;
            }
            setTimeout(l,4000);

        },5000);

//анимация кнопки
setTimeout(()=>document.getElementsByClassName('circle').style.height = '300px', 2000);