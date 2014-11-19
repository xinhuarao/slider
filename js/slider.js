(function(){
    var div = document.getElementsByClassName("box");
    div = div[0];
    var btnL = document.getElementsByClassName("btn-l");
    btnL = btnL[0];
    var btnR = document.getElementsByClassName("btn-r");
    btnR = btnR[0];
    var container = document.querySelector(".container");
    
    var Slider={
        init: function(){
            var _self = this;
            container.style.marginLeft="-520px";
            _self.leftOrRight();
            _self.bindEvent();
        },
        nextSlider: function(){
            if (container.style.marginLeft == "-2600px") {
                container.style.marginLeft = "0px";
            }
            var temp = setInterval(function() {
                    container.style.marginLeft = parseInt(container.style.marginLeft.split("px")[0]-20)+"px";
                    if (parseInt(container.style.marginLeft.split("px")[0]) % -520 == 0) {
                        clearInterval(temp);
                    }
                },10);
        },
        lastSlider: function() {
            if (container.style.marginLeft == "0px") {
                container.style.marginLeft = "-2600px";
            }
            var temp = setInterval(function() {
                    container.style.marginLeft = parseInt(container.style.marginLeft.split("px")[0]-0+20)+"px";
                    if (parseInt(container.style.marginLeft.split("px")[0]) % -520 == 0) {
                        clearInterval(temp);
                    }
                },10);
        },
        leftOrRight: function() {
            btnL.style.left = "-30px";
            btnR.style.right = "-30px";
            var aniFr = function() {
                var temp = setInterval(function() {
                    btnL.style.left = parseInt(btnL.style.left.split("px")[0])+2+"px";
                    btnR.style.right = parseInt(btnR.style.right.split("px")[0])+2+"px";
                    if (parseInt(btnL.style.left.split("px")[0]) >= 0) {
                        clearInterval(temp);
                    }
                },1);   
            };
            div.onmouseenter = aniFr;
            div.onmouseleave = function() {
                var temp = setInterval(function() {
                    btnL.style.left = parseInt(btnL.style.left.split("px")[0])-2+"px";
                    btnR.style.right = parseInt(btnR.style.right.split("px")[0])-2+"px";
                    if (parseInt(btnL.style.left.split("px")[0]) <= -30) {
                        clearInterval(temp);
                    }
                },1);   
            };
        },
        bindEvent: function() {
            var _self = this;
            btnR.onclick = _self.nextSlider;
            btnL.onclick = _self.lastSlider;
        }
    };
    Slider.init();
}());