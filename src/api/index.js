import axios from "axios";
let BASEURL = 'http://music.cpengx.cn'
let cookie = JSON.parse(localStorage.getItem('cookie'))
    //获取banner 0：PC，1：android。2：iphone，3：ipad
export function getBanner(type = 0) {
    return axios.get(`${BASEURL}/banner?type=${type}`)
}

//发现歌单
export function gePlaylist() {
    let timestamp = (new Date()).getTime()

    return axios.get(`${BASEURL}/personalized?limit=10&cookie=${cookie}&timestamp=${timestamp}`)
}

//获取歌单详情
export function getPlaylistDetail(id) {
    let timestamp = (new Date()).getTime()
    return axios.get(`${BASEURL}/playlist/detail?id=${id}&cookie=${cookie}&timestamp=${timestamp}`)
}

//获取歌词
export function getLyric(id) {
    let timestamp = (new Date()).getTime()

    return axios.get(`${BASEURL}/lyric?id=${id}&cookie=${cookie}&timestamp=${timestamp}`)
}
//搜索歌曲
export function searchMusic(keyWord) {
    let timestamp = (new Date()).getTime()

    return axios.get(`${BASEURL}/cloudsearch?keywords=${keyWord}&cookie=${cookie}&timestamp=${timestamp}`)
}
//用户登录
export function phoneLogin(username, password) {
    let timestamp = (new Date()).getTime()
    return axios.get(`${BASEURL}/login/cellphone?phone=${username}&password=${password}&timestamp=${timestamp}`)
}
//获取用户详情
export function userDetail(uid) {
    let timestamp = (new Date()).getTime()

    return axios.get(`${BASEURL}/user/detail?uid=${uid}&cookie=${cookie}&timestamp=${timestamp}`)
}
//获取VIP成长值
export function growthPoint() {
    let timestamp = (new Date()).getTime()
    return axios.get(`${BASEURL}/vip/growthpoint?cookie=${cookie}&timestamp=${timestamp}`)
}
//领取VIP成长值
export function getGrowthPoint() {
    let timestamp = (new Date()).getTime()
    return axios.get(`${BASEURL}/vip/growthpoint/get?cookie=${cookie}&timestamp=${timestamp}`)
}
//获取用户歌单
export function getUserPlaylist(uid) {
    let timestamp = (new Date()).getTime()
    return axios.get(`${BASEURL}/user/playlist?cookie=${cookie}&timestamp=${timestamp}&uid=${uid}`)
}
//获取歌曲评论
export function getMusicComment(id) {
    return axios.get(`${BASEURL}/comment/music?id=${id}`)
}