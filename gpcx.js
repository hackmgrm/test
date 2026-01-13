// stock_user.js
let url = "https://stock.53site.com/RecommendStock/v3.5.4/adduser.php";

$httpClient.get(url, function(error, response, data) {
  if (error) {
    $notification.post("股票账户状态", "请求失败", error);
  } else {
    try {
      let obj = JSON.parse(data);
      let msg = `用户号: ${obj.userNo}\n状态: ${obj.buystate === "1" ? "✅ 已购买" : "❌ 未购买"}`;
      $notification.post("股票账户状态", "查询成功", msg);
    } catch (e) {
      $notification.post("股票账户状态", "解析失败", e.message);
    }
  }
  $done();
});
