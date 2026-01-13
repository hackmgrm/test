let obj = {
  "sign": "1",
  "buystate": "1",
  "message": "账户已购买",
  "transaction_id": "20260113" + Math.floor(Math.random() * 1000000),
  "buy_apns_state": "1",
  "transaction_id_apns": "24000" + Math.floor(100000000 + Math.random() * 900000000),
  "buy_teacher_state": "1",
  "transaction_id_teacher": "T" + Math.floor(1000000 + Math.random() * 9000000),
  "apns_switch": "1",
  "darkhorse_switch": "1",
  "stocknotice_switch": "1",
  "latesDate": "2028-01-13",          // ← 改这里，建议每年更新一次
};

$done({body: JSON.stringify(obj)});
