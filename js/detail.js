let hotWord = document.querySelector('.hot-word');

let list=document.querySelector('.list');



(function(){

let hotWords = ['宝宝零食', '电脑', '笔记本', '平板电脑', '电视', '路由器', '鼠标', '键盘', '鼠标垫', '充电器', '耳机', '保护套', '充电宝', '保险柜', '手机壳', '电池', '电源', '电池充电器', '电池保护套', '电池充电宝', '电池保险柜', '电源适配器', '电源适配器保护套'];
let index = 0;

setInterval(function(){
    index++;
    if(index > hotWords.length - 1){
        index = 0;
    }             

    hotWord.placeholder = hotWords[index]

},2000)
})();


let listArr=['宝宝零食', '电脑', '笔记本', '平板电脑', '电视', '路由器', '鼠标', '键盘', '鼠标垫', '充电器', '耳机', '保护套', '充电宝', '保险柜', '手机壳', '电池', '电源'];
hotWord.oninput = function(){
    list.innerHTML= '';
    let value = hotWord.value;
    for (let i = 0; i < listArr.length; i++) {
        if(listArr[i].indexOf(value) !== -1){
            list.innerHTML = list.innerHTML + `<p>${listArr[i]}</p>`;
            list.style.display='block';
        }
    }
}

function showDropdown(){
    document.getElementById('searchBar').style.z - index == '999';
}


hotWord.onblur=function(){
    list.style.display='none';
}






let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let ul = document.querySelector('.spec-items ul');
let lis = document.querySelectorAll('.spec-items ul li');

prev.onclick = function(){
    ul.style.left = '0';
    prev.style.background = 'url()';
}



next.onclick = function(){
    ul.style.left = '-116px';
}



let img = document.querySelector('.img');
let imgs = document.querySelectorAll('.spec-items img');


for(let i =0; i < lis.length; i++){
    lis[i].onmouseover = function(){
        for(let j = 0; j < lis.length; j++){
            lis[j].className='';
        }

        lis[i].className = 'img-hover';
        img.src = imgs[i].src;
    }
}

// function showDropdown(){
//     document.getElementById('searchBar').style.z - index == '999';
// }

let mainImg = document.querySelector('.main-img');
let zoomPup = document.querySelector('.zoom-pup');
let zoomDiv = document.querySelector('.zoom-div');
let bigImg = document.querySelector('.zoom-div img');
mainImg.onmouseover = function(){
    zoomPup.style.display = 'block';
    zoomDiv.style.display = 'block';
}
mainImg.onmouseout = function(){
    zoomPup.style.display = 'none';
    zoomDiv.style.display = 'none';
}

//
mainImg.onmousemove = function(e){
    let pageY = e.pageY;
    let pageX = e.pageX;
    let offsetTop = mainImg.offsetTop;
    let offsetLeft = mainImg.offsetLeft;
    let h = zoomPup.clientHeight / 2;
    let w = zoomPup.clientWidth / 2;

    let top = pageY - offsetTop -h;
    let left = pageX - offsetLeft - w;
    if(top <= 0){
        top = 0;
    }else if(top >= mainImg.clientHeight - zoomPup.clientHeight){
        top = mainImg.clientHeight - zoomPup.clientHeight;
    }

    if(left <= 0){
        left = 0;                                                                 
    }else if(left >= mainImg.clientWidth - zoomPup.clientWidth){
        left = mainImg.clientWidth - zoomPup.clientWidth;
    }



    zoomPup.style.top = top + 'px';
    zoomPup.style.left = left + 'px';

    let y = top / (mainImg.clientHeight - zoomPup.clientHeight);

    let yy = y * (800 - 540);


    bigImg.style.top = -yy + 'px';

    let x = left / (mainImg.clientWidth - zoomPup.clientWidth);

    let xx = x* (800 - 540);
    bigImg.style.left = -xx + 'px';

}