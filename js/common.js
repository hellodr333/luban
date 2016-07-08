

window.onload=function(){
	var aBannerImg=document.getElementsByClassName('baner_img');
	var aBannerUl=document.getElementById('banner_ul');
	var aBannerLi=document.getElementsByClassName('banner_li');
	var oPrev=document.getElementById('banner_prev');
	var oNext=document.getElementById('banner_next');
	var oSmallPrev=document.getElementById('sBanner_prev');
	var oSmallNext=document.getElementById('sBanner_next');

	var oBanner=document.getElementById('banner');
	var oSmallBanner=document.getElementById('smallBanner');
	var aSmallBannerLi=oSmallBanner.getElementsByTagName('li');

	var now=0;
	var now2=0;


	var H=document.documentElement.clientHeight;
	var W=document.documentElement.clientWidth;
	for(var i=0;i<aBannerImg.length;i++){
		aBannerImg[i].style.width=W+'px';
		aBannerImg[i].style.height=H-172+'px';
	};
	aBannerUl.style.height=H-172+'px';

	window.onresize=function(){
		var H=document.documentElement.clientHeight;
		var W=document.documentElement.clientWidth;
		for(var i=0;i<aBannerImg.length;i++){
			aBannerImg[i].style.width=W+'px';
			aBannerImg[i].style.height=H-172+'px';
		};
		aBannerUl.style.height=H-172+'px';
	}
	

	// banner start
	oNext.onclick=next;
	oPrev.onclick=function(){
		now--;
		if(now==-1){
			now=aBannerLi.length-1;
		}
		tab();
		
	}
	function next(){
		now++;
		if(now==aBannerLi.length){
			now=0;
		}
		tab();	
	}
	function tab(){
		for(var i=0;i<aBannerLi.length;i++){
			aBannerLi[i].className='banner_li';	
			aBannerLi[i].children[1].className='txt';
		}
		aBannerLi[now].className='banner_li cur';
		aBannerLi[now].children[1].className='txt animated fadeInDown';
	}

	var timer=setInterval(next,2000);
	oBanner.onmouseover=function(){
		clearInterval(timer);	
	};
	oBanner.onmouseout=function(){
		timer=setInterval(next,2000);	
	};
	// banner end

	// small banner start
	oSmallNext.onclick=next2;
	function next2(){		
		now2++;
		if(now2==aSmallBannerLi.length){
			now2=0;
		}
		tab2();
	};

	oSmallPrev.onclick=function(){
		now2--;
		if(now2==-1){
			now2=aSmallBannerLi.length-1;
		}
		tab2();
	}

	function tab2(){
		for(var i=0;i<aSmallBannerLi.length;i++){
			aSmallBannerLi[i].className='';	
		}
		aSmallBannerLi[now2].className='cur';
	}
	
	var timer2=setInterval(next2,2000);
	oSmallBanner.onmouseover=function(){
		clearInterval(timer2);	
	};
	oSmallBanner.onmouseout=function(){
		timer2=setInterval(next2,2000);	
	};

	// small banner end

	


}