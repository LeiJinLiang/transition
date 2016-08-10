    var addClass = function(element, oClass) {
        if (!hasClass(element, oClass))
            element.className += ' ' + oClass;
    }

    var hasClass = function(element, oClass) {
        return element.className.match(new RegExp('(^|\\s)' + oClass + '(\\s|$)'));
    }

    var removeClass = function(element, oClass) {
        var cls = new RegExp('(^|\\s)' + oClass + '(\\s|$)');
        if (hasClass(element, oClass)) {
            element.className = element.className.replace(cls, '')
        }
    }


    var toggleClass = function(element, oClass) {
        if (!hasClass(element, oClass)) { addClass(element, oClass); } else { removeClass(element, oClass); };
    }
var image_list=[];
image_list.push('http://ww2.sinaimg.cn/mw690/8375b114jw1f287myvc5xj21hc1hctt7.jpg');
image_list.push('http://ww1.sinaimg.cn/mw690/8375b114jw1f287n6uhfbj22o02o0e81.jpg');
image_list.push('http://ww3.sinaimg.cn/mw690/8375b114jw1f287ndqldhj21hc1hck9q.jpg');
image_list.push('http://ww3.sinaimg.cn/mw690/8375b114jw1f287niugcij22o02o04qs.jpg');
image_list.push('http://ww4.sinaimg.cn/mw690/8375b114jw1f287nl5xvpj20rs0qxtnj.jpg');

var count=function(){
	var _ele=document.getElementsByTagName('img')[0];
	var ele=document.getElementById('container');
	var num=0;
	return function(){
		num++;
		if((num-1)%4==0){
			// console.log(0);
			_ele.setAttribute('src',image_list[0]);
			removeClass(ele,'zoom5');
			addClass(ele,'zoom1');
		}else if(((num/2)-1)%2==0){
			// console.log(num);
			_ele.setAttribute('src',image_list[1]);
			removeClass(ele,'zoom1');
			addClass(ele,'zoom5');
		}else if((num+1)%4==0){
			// console.log(num);
			_ele.setAttribute('src',image_list[2]);
			removeClass(ele,'zoom5');
			addClass(ele,'zoom1');
		}else if((num%4)==0){
			// console.log(num);
			_ele.setAttribute('src',image_list[3]);
			removeClass(ele,'zoom1');
			addClass(ele,'zoom5');
		}
	}
}()


setInterval(count,1000);