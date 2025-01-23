

// // 实现模糊查询=======================================
// let keyword = document.querySelector('.keyword'); // 获取输入框
// let searchHelper = document.querySelector('.search-helper'); // 获取搜索的下拉列表


// // 定义数组，存储搜索的内容
// let searchArr =['小米手机', '华为手机', '苹果手机', '小米电视', '小米平板', '苹果12', '苹果13', '苹果手表'];

// // 给输入框绑定内容改变事件
// keyword.oninput = function(){
//     searchHelper.innerHTML = '';
//     for(let i = 0; i < searchArr.length; i++){
//         if(searchArr[i].indexOf(keyword.value) != -1){
//             searchHelper.innerHTML += '<p>'+searchArr[i]+'</p>';
//             searchHelper.style.display = 'block';
//         }
//     }
// }

// keyword.onblur = function(){
//     searchHelper.style.display = 'none';
// }



let hotWord = document.querySelector('.hot-word');

let list=document.querySelector('.search-helper');



(function(){
let hotWords = ['手机', '冰箱', '笔记本', '平板', '钱', '绵阳师范', '成都', '绵阳', '资源与环境', '充电器', '耳机', '保护套', '充电宝', '银行', '手机壳', '电池', '电源', '三体', '电池保护套', '电池充电宝', '电池保险柜', '外星人', '太阳'];
let index = 0;

setInterval(function(){
    index++;
    if(index > hotWords.length - 1){
        index = 0;
    }             
    
    hotWord.placeholder = hotWords[index];


},2000)
})();


let listArr=['手机', '土豆', '笔记本', '平板', '电视', '猪肉', '牛肉', '鱼', '羊肉', '螺蛳粉', '耳机', '保护套', '充电宝', '银行', '手机壳', '北京', '电源'];
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

//   $("ul li:eq("+index+") ").toggleClass("abc");
//     });
// });
// 轮播图左边的小东西
// $(function (){
//     $("ul li").hover(function(){
//         var indext = $("ul li").index(this);
//         $("ul li:eq("+index+") div").show();
//         $("ul li:eq("+index+") ").toggleClass("abc");
//     },function(){
//         var indext = $("ul li").index(this);
//         $("ul li:eq("+index+") div").hide();






let img = document.querySelector('.img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let lis = document.querySelectorAll('.banner-btn li');

let imgArr = ['1.webp', '2.jpg', '3.jpg', '4.jpg', '5.webp', '6.webp', '7.jpg', '8.jpg'];

let count = 0;


function cutImg(){
    img.src = './images/' + imgArr[count];

    for(let i = 0; i < lis.length; i++){
        lis[i].className = '';
    }

    lis[count].className = 'active';
}


let timer = setInterval(function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
}, 2000);


next.onclick = function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
}


prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }
    cutImg();
}


slide.onmouseover = function(){
    clearInterval(timer);
}


slide.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        if(count > imgArr.length - 1){
            count = 0;
        }
        cutImg();
    }, 2000);
}

for(let i = 0; i < lis.length; i++){
    lis[i].onclick = () => {

        count = i;
        cutImg();
    };
}



// let header = document.querySelector('.header');
// let banner = document.querySelector('.banner');
// let elevator = document.querySelector('.elevator');






let elevator = document.querySelector('.elevator');
let header = document.querySelector('.header');
let items = document.querySelectorAll('.items');
let eleA = document.querySelectorAll('.elevator>a');
let slideBanner = document.querySelector('.banner-slide');


let to =header.offsetHeight+slideBanner.offsetHeight+40;

let floor = [];
for (let w = 0;w<items.length ; w++){
    to=to+items[w].offsetHeight;
    floor.push(to);
}

console.log(floor);

function clear(){
    for(let w = 0;w<eleA.length;w++){
        eleA[w].className='';
    }
}


window.onscroll = function(){
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    let top1 = header.offsetHeight+slideBanner.offsetHeight+40;
    console.log(top1);
    if(top >= top1){
        elevator.className = 'elevator elevator-fix';
    }else{
        elevator.className = 'elevator';
    }
    if(top >= top1 && top <  floor[0]){
        clear();
        eleA[0].className = 'active';
    }
    else if(top >= floor[0] && top <= floor[1]){
        clear();
        eleA[1].className = 'active';
    }
    else if(top >= floor[1] && top < floor[2]){
        clear();
        eleA[2].className = 'active';
    }
    else if(top >= floor[2]){
        clear();
        eleA[3].className = 'active';
    }
    if(top < top1){
        clear();
    }

}



let search = document.querySelector('.search');
let searchM = document.querySelector('.search-m');
let banner = document.querySelector('.banner');
let form = document.querySelector('.form');
let searchLogo = document.querySelector('.search_logo');



document.onscroll = function(){
    let top = document.documentElement.scrollTop || document.body.scrollTop;

    let headerHeight = header.offsetHeight; 
    let bannerHeight = banner.offsetHeight;

    if(top >= headerHeight + bannerHeight){
        elevator.className = 'elevator elevator-fix';
        search.className = "search search-fix";
        searchM.style.height = '50px';
        form.style.top = '8px';
        searchLogo.style.display = 'block';
    }else{
        elevator.className = 'elevator';
        search.className = "search ";
        searchM.style.height = '60px';
        form.style.top = '25px';
        searchLogo.style.display = 'none';
    }
}



//图片跳转
// document.getElementById('gwym').addEventListener('click',function(){
//     window.location.href = 'detail.html';
// });


//
// const tssp1 = document.getElementById('gwym');
//     tssp1.addEventListener('mouseenter', function () {
//         tssp1.style.cursor = 'pointer';
//     });
//     tssp1.addEventListener('mouseleave', function () {
//         tssp1.style.cursor = 'default';
//     });
//     tssp1.addEventListener('click', function () {
//         window.location.href = 'detail.html';
//     });



//sb导航栏
// var li_list=document.querySelectorAll(".ul");
// var showbox=document.querySelector(".lzt");
// var leftmenu=document.querySelector(".leftmenu");
// var centerblock=document.querySelector(".centerblock");
//     function savePosBox(){
//         var htmlscroll=document.documentElement.scrollTop;
//         showbox.style.left=(centerblock.offsetLeft+leftmenu.offsetWidth)+"px";
//         if(leftmenu.offsetTop>htmlscroll){
//             showbox.style.top=leftmenu.offsetTop+"px";
//         }
//         else{
//             showbox.style.top=htmlscroll+"px";
//         }
//     }
//     for(var i=0;i<li_list.length;i++)
//     {
//         li_list[i].index=i;

//         console.log(li_list[i].index);
//         li_list[i].onmouseenter=function(){
//             showbox.style.opacity=1;
//             savePosBox();
//             showbox.innerHTML="我是第"+this.index+"个选项卡";
//         }
//         li_list[i].onmouseleave=function(){
//             showbox.style.opacity=0;
//         }
//     }

// const ting = document.getElementById('ting');
// const xian = document.getElementById('xian');
// ting.addEventListener('mouseenter',function(){
//     xian.style.display = 'block';
// });
// ting.addEventListener('mouseleave',function(){
//     xian.style.display = 'none';
// });

const ting = document.querySelectorAll('.ting');
        const xian = document.getElementById('xian');
        ting.forEach((element)=>{
            element.addEventListener('mouseenter',function(){
                xian.style.display = 'block';
                let rect = element.getBoundingClientRect();
                // xian.style.left =rect.right+ 'px' ;
                // xian.style.top = rect.top +'px';
            })
            element.addEventListener('mouseleave',function(){
                xian.style.display = 'none';
            });
        });






        const yc = document.getElementById('yc');
        const content = yc.querySelector('p');
        const contentHeight = content.offsetHeight;
        

        yc.addEventListener('mouseenter',function(){
            this.style.maxHeight = contentHeight + 'px';
        });
        yc.addEventListener('mouseleave',function(){
            this.style.maxHeight = '0';
        });



        window.addEventListener('scroll',function(){
            var xian = document.getElementById('xian');
            var scrollY = window.scrollY ||document.documentElement.scrollTop;
            if(scrollY>300){
                var popOutRatio = (scrollY-100) / 200;
                popOutRatio = Math.min(popOutRatio,1);
                xian.style.transform = 'translateX(-50%)translateY(' + (-200 * popOutRatio) + 'px)';
            }else{
                xian.style.transform = 'translateX(-50%)translateY(0)';
            }
        });
// ting.forEach((element)  => {
//     element.addEventListener('mouseenter',function(){
//         xian.style.display = 'block';
//         let rect = element.getBoundingClientRect();
//         xian.style.left = rect.right + 'px';
//         xian.style.top = rect.top +'px';
//     });
//     element.addEventListener('mouseleave',function(){
//         xian.style.display = 'none';
//     });
// })


// ting.addEventListener('mouseenter',function(){
//     xian.style.display = 'block';
// });
// ting.addEventListener('mouseleave',function(){
//     xian.style.display = 'none';
// });
