// gpcx.js
// 

let obj = {
  "sign": "1",
  "buystate": "1",
  "message": "账户已购买",
  "transaction_id": "1",
  "buy_apns_state": "1",
  "transaction_id_apns": "240002147952008",
  "buy_teacher_state": "1",
  "transaction_id_teacher": "1",
  "apns_switch": "1",
  "darkhorse_switch": "1",
  "stocknotice_switch": "1",
  "latesDate": "2026-01-12",
  "userNo": "2307776"
};

$done({body: JSON.stringify(obj)});
