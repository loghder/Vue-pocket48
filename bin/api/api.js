const COMMONHEADERS = {
  'Content-Type': 'application/json',
  'Connection': 'keep-alive',
  'Cache-Control': 'maxAge=30',
  'Host': 'pocketapi.48.cn',
  'accept': '*/*',
  'Accept-Language': 'zh-Hans-CN;q=1',
  'User-Agent': 'PocketFans201807/6.0.0 (iPhone; iOS 12.2; Scale/2.00)',
  'Accept-Encoding': 'gzip, deflate',
  'appInfo': JSON.stringify({
    "vendor": "apple",
    "deviceId": "0",
    "appVersion": "6.0.0",
    "appBuild": "190409",
    "osVersion": "12.2.0",
    "osType": "ios",
    "deviceName": "iphone",
    "os": "ios"
  })
}
const api = {
  top: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923",
  random: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472",
  vkey: (req) => {
    return {
      host: 'c.y.qq.com',
      port: '',
      path: "/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=" + req.query.songmid + '&filename=C400' + req.query.songmid + '.m4a&guid=126548448',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  },
  keySearch: function (req) {
    const searchObj = {
      page: req.query.page || 1,
      num: req.query.num || 30,
      group: req.query.group || 'SNH48',
    }
    return {
      host: 'c.y.qq.com',
      port: '',
      path: '/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=' + searchObj.page + '&n=' + searchObj.num + '&w=' + searchObj.group,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  },
  board_postData: (request) => JSON.stringify({
    "roomId": request.body.roomId, //房间id, 详见roomList
    "ownerId": request.body.ownerId,
    "nextTime": request.body.nextTime || 0
  }),
  board_options: (request) => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/im/api/v1/chatroom/msg/list/homeowner',
      method: 'POST',
      headers: {
        ...COMMONHEADERS,
        token: request.body.token
      }
    }
  },
  allMember_postData: () => JSON.stringify({}),
  allMember_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/user/api/v1/client/update/group_team_star',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  login_postData: (request) => JSON.stringify({
    "pwd": request.body.password, 
    "mobile": request.body.account, 
  }),
  login_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/user/api/v1/login/app/mobile',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  allLive_postData: (req) => JSON.stringify({
    "liveId": req.query.id || 0,
    "record": req.query.record || true,
    "next": req.query.next || 0,
    "userId": req.query.userId
  }),
  allLive_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/live/api/v1/live/getLiveList',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  openLive_postData: (req) => JSON.stringify({
    "record": req.query.isReview || false, 
    "groupId": req.query.groupId || 0, 
    "teamId": req.query.teamId || 0,
    "liveId": 0,
    "next": req.query.next || 0
  }),
  openLive_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/live/api/v1/live/getOpenLiveList',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  livePage_postData: (req) => JSON.stringify({
    "liveId": req.query.id 
  }),
  livePage_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/live/api/v1/live/getLiveOne',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  openPage_postData: (req) => JSON.stringify({
    "liveId": req.query.id 
  }),
  openPage_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/live/api/v1/live/getOpenLiveOne',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  comment_postData: (req) => JSON.stringify({
    "roomId": req.body.id, 
    "nextTime": req.body.nextTime
  }),
  comment_options: (req) => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/im/api/v1/chatroom/msg/list/all',
      method: 'POST',
      headers: {
        ...COMMONHEADERS,
        token: req.body.token
      }
    }
  },
  userInfo_postData: (req) => JSON.stringify({
    "userId": req.body.userId
  }),
  userInfo_options: (req) => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/user/api/v1/user/info/home',
      method: 'POST',
      headers: {
        ...COMMONHEADERS,
        token: req.body.token
      }
    }
  },
  memberInfo_postData: (req) => JSON.stringify({
    "name": req.body.name
  }),
  memberInfo_options: () => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/im/api/v1/im/search',
      method: 'POST',
      headers: {
        ...COMMONHEADERS
      }
    }
  },
  roomInfo_postData: (req) => JSON.stringify({
    "sourceId": req.body.userId,
    "type": 0
  }),
  roomInfo_options: (req) => {
    return {
      host: 'pocketapi.48.cn',
      port: '',
      path: '/im/api/v1/im/room/info/type/source',
      method: 'POST',
      headers: {
        ...COMMONHEADERS,
        token: req.body.token
      }
    }
  },
  akina_options: (req) => {
    let limit = req.query.limit || 8
    return {
      host: 'space.bilibili.com',
      port: '',
      path: "/ajax/member/getSubmitVideos?mid=1315101&pagesize=" + limit + "&tid=0&page=1&keyword=&order=pubdate",
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  },
  coupleTag_options: (req) => {
    return {
      host: 'api.bilibili.com',
      port: '',
      path: "/x/web-interface/tag/top?pn=1&ps=20&tid="+req.query.coupleId,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  },
  containerDetail_options: (req) => {
    return {
      host: 'm.weibo.cn',
      port: '',
      path: "/api/container/getIndex?containerid="+req.query.containerId,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  },
  mBlogContainer_options: (req) => {
    return {
      host: 'm.weibo.cn',
      port: '',
      path: "/api/container/getIndex?containerid=100103type%3D1%26q%3D"+encodeURI(req.query.containerName),
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  },
  mBlogData_options: (req) => {
    return {
      host: 'm.weibo.cn',
      port: '',
      path: "/api/container/getIndex?type=uid&value="+req.query.weiboUid,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      }
    }
  }
}
module.exports = api