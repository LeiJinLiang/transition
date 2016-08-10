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


    var imgall = document.getElementsByTagName('img');
    for (var i = 0, len = imgall.length; i < len; i++) {
        imgall[i].addEventListener('load', function() {
            addClass(this.parentNode, 'zoom1');
        }, false);
        imgall[i].addEventListener('click', function() {
            var _src = this.getAttribute('src');
            var ele = document.getElementById('move');
            ele.setAttribute('src', _src);
        }, false);
    }

    var _init = {
        _showmsg: function() {
            var liall = document.getElementsByClassName('list');
            for (var i = 0, len = liall.length; i < len; i++) {
                -(function(i) {
                    liall[i].addEventListener('click', function() {
                        var ele = document.getElementsByClassName('shadow')[0];
                        var _msg = document.getElementsByClassName('msg')[0];
                        _msg.textContent = localStorage.getItem('index'+i);
                        _msg.setAttribute('index',i);
                        removeClass(ele, 'hidden');
                        addClass(ele, 'fadein');
                    })
                })(i)
            }
        },
        _hidemsg: function() {
            var ele = document.getElementsByClassName('close')[0];
            var _ele=document.getElementsByClassName('shadow')[0];
            var temp=document.getElementsByClassName('msg')[0]; 
            var liall=document.getElementsByClassName('list');
            ele.addEventListener('click', function() {
            	var index=temp.getAttribute('index');
            	localStorage.setItem('index'+index,(temp.textContent));
            	liall[index].textContent=localStorage.getItem('index'+index);
                addClass(_ele, 'hidden');
            }, false);
        },
        _sersrc: function(ele, src) {
            ele.setAttribute('src', src);
        },
        _scrolltop: function() {
            var btn = document.getElementById('top');
            var d = document.documentElement;
            var b = document.body;
            window.onscroll = btnDisplay;
            btn.onclick = function() {
                btn.style.display = "none";
                window.onscroll = null;
                this.timer = setInterval(function() {
                    d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
                    b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
                    if ((d.scrollTop + b.scrollTop) == 0)
                        clearInterval(btn.timer, window.onscroll = btnDisplay);
                }, 10);
            };

            function btnDisplay() {
                btn.style.display = (d.scrollTop + b.scrollTop > 20) ? 'block' : "none";
            }
        },
        _fadeleft:function(){
        		var ele=document.getElementsByClassName('list');
     	  		var move0=function(){
     	  			removeClass(ele[0],'hide');
     	  			addClass(ele[0],'move');
     	  		}
     	  		var move1=function(){
     	  			removeClass(ele[1],'hide');
     	  			addClass(ele[1],'move');
     	  		}
     	  		var move2=function(){
     	  			removeClass(ele[2],'hide');
     	  			addClass(ele[2],'move');
     	  		}
     	  		var move3=function(){
     	  			removeClass(ele[3],'hide');
     	  			addClass(ele[3],'move');
     	  		}
     	  		var move4=function(){
     	  			removeClass(ele[4],'hide');
     	  			addClass(ele[4],'move');
     	  		}
	        	setTimeout(move0,1000);
	        	setTimeout(move1,1200);
	        	setTimeout(move2,1400); 
	        	setTimeout(move3,1600); 
	        	setTimeout(move4,1800);                 	
        },
        _cachedata:function(){
        	var msg=[],list;
        	var list=document.getElementsByClassName('list');
        	for(var i=0,len=list.length;i<len;i++){
        		msg.push(list[i].textContent);
        		localStorage.setItem('index'+i,msg[i]);
        	}
        	
        },
        _setinfo:function(){
        	var ele=document.getElementsByClassName('msg')[0];
        	ele.addEventListener('click',function(){
        		this.setAttribute('contenteditable',true);
        	},false);
        },
        _initdata:function(){
        	 var liall=document.getElementsByClassName('list');
        	 for(var i=0,len=liall.length;i<len;i++){
        	 	if(localStorage.getItem('index0')!==''){
        	 		liall[i].textContent=localStorage.getItem('index'+i);
        	 	}
        	 	
        	 }
        },
        init: function() {
        	this._initdata();
        	this._cachedata();   	
            this._showmsg();
            this._hidemsg();
            this._scrolltop();
            this._fadeleft();
            this._setinfo();
        }
    }
    _init.init();
