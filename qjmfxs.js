/*
奇迹免费小说

[rewrite_local]
http-response ^https:\//appi.qijizuopin.com\/app_v1\/user\/vip\/getuserinfo url script-response-body https://raw.githubusercontent.com/hackmgrm/test/main/qjmfxs.js
http-response ^https:\//appi.qijizuopin.com\/app_v2\/mymember url script-response-body https://raw.githubusercontent.com/hackmgrm/test/main/qjmfxs2.js


[MITM]
hostname = appi.qijizuopin.com

*/

var body = $response.body
    .replace(/\"data\":\{\"userVipType\":0,\"isUserVip\":false,\"userVipLevel\":-1,\"createDate\":\"\",\"expiredTime\":\"\"\}/, "\"data\":{\"userVipType\":1,\"isUserVip\":true,\"userVipLevel\":3,\"createDate\":\"\",\"expiredTime\":1894118400\}");
$done({ body });
