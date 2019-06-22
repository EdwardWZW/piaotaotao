class Move {
	constructor(dom){
       this.dom = dom;
       this.index = 0;
	   this.slide = $(".banner").width();
	}
	init(){
        let that = this;
		setInterval(function(){
			that.autoplay();
		},3000);
	}
	autoplay(){
		this.clickMove("right");
	}
	clickMove(direction){
        if(direction === "right"){
            this.index++;
            // this.index>3?this.index=1:this.index;
            // this.dom.css({
            // 	left:-this.index*this.slide
            // })
            if(this.index>3){
            	this.index = 1;
            	this.dom.css({
            		left:"0"
            	})
            }

        }else if(direction === "left"){
            this.index--;

            if(this.index<0){
            	this.index = 3;
            	this.dom.css({
            		left:-3*this.slide
            	})
            }
        }
        this.dom.animate({
        	left:-this.index*this.slide
        })
        

	}
 
}
let a = new Move($(".b-wrap"));
a.init();
//左右按钮
$("#left").click(function(){
	a.index--;
	a.index<0?a.index=3:a.index;
	a.clickMove("left");
	a.dom.animate({left:-this.index*this.slide})
})
$("#right").click(function(){
	a.index++;
	a.index<3?a.index=1:a.index;
	a.clickMove("right");
	a.dom.animate({left:-this.index*this.slide})
})

$("#ad i").click(function(){
	let slide = $(".banner").width();
	$("#ad").addClass("abso").animate({
		left:-slide
	});
})