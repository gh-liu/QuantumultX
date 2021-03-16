// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
    $done(Null);
  }
  
  var body = $response.body;
  var obj = JSON.parse(body);
  var title = obj['country'];
  var subtitle = obj['city'] + ' ' + obj['isp'];
  var ip = obj['query'];
  // var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType'];
  var description = "国家" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' + "数据中心" + ":" + obj['org'];
  
  
  $done({title, subtitle, ip, description});
  