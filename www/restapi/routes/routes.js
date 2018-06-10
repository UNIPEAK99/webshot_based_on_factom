const md5File = require('md5-file');
var appRouter = function (app) {
  app.get("/new", function(req, res) {
    
    var factrul = req.query.url;
    //var facttag = req.query.tag;
  //  var factdescription = req.query.desc;
console.log("url= ");   
console.log(factrul);
    
    res.setHeader("Access-Control-Allow-Origin", "*");

                                   

var PythonShell = require('python-shell');
var num = Math.random(1000000)
console.log(factrul);
var options = {
        args: [factrul, num]
};

PythonShell.run('prt.py',options, function (err) {
  if (err) throw err;
  console.log('finished');

var hash = md5File.sync(`/home/njtu1133/factom-db/public/${num}.png`);

//var hash = md5File.sync(`/home/njtu1133/factom-db/public/google.png`);
var Client = require('node-rest-client').Client;
    // direct way
    var client = new Client();
   var aBase64 = Buffer.from(`http://webshot.weku.io:3000/${num}.png`).toString('base64')


    var args = {
      data: {"external_ids":["aWJt",aBase64],"content":aBase64},
      headers: { 'Content-Type': 'application/json',
      'factom-provider-token': 'hYddpZgJ8v2YMLADBz12IleUBpdJBVR7UHVqR2qL5dJpMY21' } // request headers
    };

    client.post("https://apiplus-api-sandbox-testnet.factom.com/v1/chains/", args, function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);

        res.status(200).send(data.chain_id);
    });

 });

/*
var hash = md5File.sync(`/home/njtu1133/factom-db/public/image${num}.png`);

var Client = require('node-rest-client').Client;
    // direct way
    var client = new Client();
   
    var args = {
      data: {"external_ids":["aWJt","aWJt"],"content":"aWJT"},
      headers: { 'Content-Type': 'application/json',
      'factom-provider-token': 'hYddpZgJ8v2YMLADBz12IleUBpdJBVR7UHVqR2qL5dJpMY21' } // request headers
    };

    client.post("https://apiplus-api-sandbox-testnet.factom.com/v1/chains/", args, function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
	
        res.status(200).send(data.chain_id);
    });




	  res.status(200).send("66c11f9845b474e191faa38fe049affb50a5f364995f618ca9ecc14f3e95ff6b" );*/
  });


  app.get("/get", function(req, res) {
    
    var chainid= req.query.chainId;
    console.log(chainid);
   // res.setHeader("Access-Control-Allow-Origin", "*");
 
   
  
  
     var Client = require('node-rest-client').Client;
	
    // direct way
    var client = new Client();

    var args = {
     //   path: { "id": '${chainid}' }, // path substitution var
        headers: { 'Content-Type': 'application/json',
        'factom-provider-token': 'hYddpZgJ8v2YMLADBz12IleUBpdJBVR7UHVqR2qL5dJpMY21' } // request headers
    };


    client.get(`https://apiplus-api-sandbox-testnet.factom.com/v1/chains/${chainid}/entries/first`, args,
        function (data, response) {
            // parsed response body as js object
	var Ascii = Buffer.from(data.content, 'base64').toString('ascii');
            console.log(Ascii);
            // raw response
            //console.log(response);
res.setHeader("Access-Control-Allow-Origin", "*");
res.status(200).send(Ascii);

        }); 
  
  
  
  });

  app.get("/search", function(req, res) {
    
    var mytag= req.query.tag;
    console.log(mytag);
    
    res.status(200).send("Welcome to our restful API" );
  });

}

module.exports = appRouter;

function md5(filename){
  var hash = md5File.sync(filename);
      
    console.log(`The MD5 sum of ${filename} is: ${hash}`)
   return hash;
}
