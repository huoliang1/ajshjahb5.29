import indexCss from './public/css/index.css';

import imgSrc from './public/images/vue.png';  
let pp = document.createElement('p')

pp.innerText = "我爱你赵丽颖";


document.getElementById('root').appendChild(pp);

let myFunc = ()=>{
    console.log("嘿嘿");
}

myFunc();

let a = 100;
console.log(a);


// 创建图片
let imgNode = new Image() 
imgNode.src = imgSrc
document.getElementById('root').appendChild(imgNode);