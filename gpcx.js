let obj = JSON.parse($response.body);

// 通知提示
let msg = `用户号: ${obj.userNo}\n状态: ${obj.buystate === "1" ? "✅ 已购买" : "❌ 未购买"}`;
$notification.post("股票账户状态", "查询成功", msg);

// 如果要伪造返回结果，可以直接修改
obj.buystate = "1";
obj.message = "账户已购买";

$done({body: JSON.stringify(obj)});
