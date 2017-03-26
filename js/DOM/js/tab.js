/**
 * Created by xiaoxiao on 17/3/25.
 */

// 想要操作谁，就先获取谁

var oTab =document.getElementById('tab');

var tHead = oTab.tHead;

var oThs =tHead.rows[0].cells;

var tBody = oTab.tBodies[0]; //第一个tbody
var allrows = tBody.rows;

var data;

for (var i= 0;i<oThs.length;i++){
	var curth = oThs[i];

	if (curth.className === 'cursor'){
		curth.index = i ;
		curth.flag =-1;
		curth.onclick =function () {
			sort.call(this ,this.index);
			changeRows();

		}
	}
}
// oThs[1].flag =-1
// oThs[1].onclick =function () {
// 	// this = oThs[1]
// 	//sort();   // sort 中this 是window
// 	sort.call( this) ;
// 	changeRows();
// }
// 1 获取后台数据 json 格式的字符串 ajax  （async javascript and xml）
/**/
//创建一个ajax 对象
var xhr =new XMLHttpRequest();
//打开我们请求数据的那个文件的地址 ture 异步请求
xhr.open("get",'./js/data.text',true);

// 3 监听请求状态

xhr.onreadystatechange = function () {

	if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
		var val =xhr.responseText;

		data = JSON.parse(val);
		console.log(data);
		dataBind();
		changeRows();
	}
}
// 4 发送请求
xhr.send(null);

// 2 实现我们的饿数据绑定
function dataBind() {
	var flag = document.createDocumentFragment();
	for (var i= 0;i<data.length;i++){
		var cur = data[i];
		var oTr = document.createElement('tr');
		for (var key in  cur){
			var otd =document.createElement('td');
			otd.innerHTML = cur[key];
			oTr.appendChild(otd);
		}
		flag.appendChild(oTr);
	}
	tBody.appendChild(flag);
	flag = null;
}

// 实现隔行变色
function changeRows() {
	for(var i=0 ;i<allrows.length;i++){
		allrows[i].className= i %2  ===1 ?"bg" :null;
	}

}

// 按照年龄排序
function  sort(n) {
	var ary = Array.prototype.slice.call(allrows);
	//oThs[1].flag *=-1;
	this.flag *=-1;
	var _this =this;
	ary.sort(function (a,b) {
		// this = >window

		var curinn =a.cells[n].innerHTML;
		var nextinn =b.cells[n].innerHTML;

		var curinnnum =parseFloat(a.cells[n].innerHTML);
		var nextinnnum =parseFloat(b.cells[n].innerHTML);
		if(isNaN(curinnnum)|| isNaN(nextinnnum)){
			return curinn.localeCompare(nextinn) * _this.flag;
		}else{
			return (curinnnum - nextinnnum) *_this.flag;
		}


		//return (parseFloat(a.cells[n].innerHTML)-parseFloat(b.cells[n].innerHTML))*_this.flag;

	});
	var flag = document.createDocumentFragment();
	for (var i= 0;i<ary.length;i++){
		var cur = ary[i];


		flag.appendChild(cur);
	}
	tBody.appendChild(flag);
	flag = null;

}


