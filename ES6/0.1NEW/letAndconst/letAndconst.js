/**
 * Created by xiaoxiao on 16/10/16.
 */

for (var i = 0; i < 3; i++){
	setTimeout(function () {
		console.log(i)
	},1000)
}

for (var i = 0; i < 3; i++){
	;(function (i) {
		setTimeout(function () {
			console.log(i)
		},1000);
	})(i);
}

for (let i = 0; i < 3; i++){
	setTimeout(function () {
		console.log(i)
	},1000)
}