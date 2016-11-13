/**
 * Created by xiaoxiao on 16/11/12.
 */

var  http= require('http');
var fs =require('fs');

function serve(request,response) {
	//headers
	//method
	//url

	console.log(request.url);

	//相应
	//response.statusCode = 404;
	response.statusCode = 200;
	response.setHeader('name',"zfpx");
	response.setHeader('Content-Type',"text/html;charest=utf-8")
	fs.readFile('./index.html',function (err,data) {
		if(err){
		}
		response.write(data);
		response.end();
	})
	//response.write(new Date().toString());



	//response.end()
}
// 每当请求来的时候处理
var server = http.createServer(serve);

server.listen(8080,function (err) {
	console.log('服务启动成功');
})