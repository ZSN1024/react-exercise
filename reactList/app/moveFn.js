/**
 * Created by oker on 2017/2/4.
 */
function getStyle(obj, name) {
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function startMove(obj, json, fnEnd){
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        let bStop=true;
        for(let attr in json) {
            let cur=0;

            if(attr==='opacity') {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            } else {
                cur=parseInt(getStyle(obj, attr));
            }
            let speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!==json[attr])
                bStop=false;

            if(attr==='opacity') {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            } else {
                obj.style[attr]=cur+speed+'px';
            }
        }
        if(bStop) {
            clearInterval(obj.timer);
            if(fnEnd)
                fnEnd();
        }
    }, 30);
}
