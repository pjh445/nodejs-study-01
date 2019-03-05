var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
	var pathname=url.parse(_url,true).pathname;
    var title = queryData.id;
	
    if(pathname === '/'){// 주소값에 "/index.html"등이 없다면 실행됨.
	
	  if(title===undefined){
			
		fs.readdir('./data',function(error,filelist){
				//console.log(filelist);//배열오브젝트반환됨
			
			var title="Welcome";
			var description="Hellow, Node.js!";
			var list='<ul>';	
			var i=0;
			while(i<filelist.length){
				list+=`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
				i++;
			}
			list+='</ul>';
			
			var template = 
				`<!doctype html>
				<html>
				<head>
				  <title>WEB1 - ${title}</title>
				  <meta charset="utf-8">
				</head>
				<body>
				  <h1><a href="/">WEB</a></h1>
				  ${list}				  
				  <h2>${title}</h2>
				  <p>${description}</p>
				</body>
				</html>`;
				response.writeHead(200);
				response.end(template);
		});
	}else{
			fs.readdir('./data',function(error,filelist){
				//console.log(filelist);//배열오브젝트반환됨
				fs.readFile(`data/${title}`,'utf8',	function(err,description){
					
					var list='<ul>';	
					var i=0;
					while(i<filelist.length){
						list+=`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
						i++;
					}
					list+='</ul>';
					var template = 
					`<!doctype html>
					<html>
					<head>
					  <title>WEB1 - ${title}</title>
					  <meta charset="utf-8">
					</head>
					<body>
					  <h1><a href="/">WEB</a></h1>
					  ${list}
					  <h2>${title}</h2>
					  <p>${description}</p>
					</body>
					</html>`;
					response.writeHead(200);
					response.end(template);
				});
			}); 
		}
	}else{
		  response.writeHead(404);
		  response.end("Not found!!");
    }	
});
app.listen(3000);
