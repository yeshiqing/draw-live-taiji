let divCode = document.querySelector('#drawProcess')
let style = document.querySelector('#renderStyle')
let stringOrigin = `
/*
你好，我是世清，
这是我用 HTML + CSS 代码画出的太极图，
给你展示一下绘制的过程✨
*/
/* 
首先准备一个 div#taiJi 
*/
#taiJi {
    box-shadow: 0 0 3px rgba(0, 0, 0.6);
    width: 200px;
    height: 200px;
}

/*
接着，我们把 div 变成八卦中的太极。
*/
#taiJi {
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(0, 0, 0, 1) 49%, rgba(0, 0, 0, 1) 100%);
}

/* 
准备两个神奇的小球，作为阴阳鱼的眼睛
 */
#taiJi::before {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 24%, rgba(0, 0, 0, 1) 26%, rgba(0, 0, 0, 1) 100%);
    left: 50%;
    transform: translateX(-50%);
}

#taiJi::after {
    border: 1px solid white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 24%, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 1) 100%);
    left: 50%;
    transform: translateX(-50%);
    bottom: 0%;
}

`
let n = 1
let speed = 20

let goNextStep = () => {
    setTimeout(() => {
        let char = stringOrigin[n]
        style.innerHTML += char
        if (char === '\n') {
            char = '<br>'
        } else if (char === ' ') {
            char = '&nbsp;'
        }
        divCode.innerHTML += char
        divCode.scrollIntoView(false)
        if (n < stringOrigin.length - 1) {
            n = n + 1
            goNextStep()
        }
    }, 1000 / speed)
}

goNextStep()