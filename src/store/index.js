// import { createStore } from 'vuex'
import { reactive } from 'vue'

const store = {
    state: reactive({
        playlist: [{
            id: 132402226,
            name: "Wake",
            al: {
                picUrl: "http://p3.music.126.net/Uo7OXdK3g4LQdc2hzJ14qQ==/109951166328143737.jpg",
                id: 132402226,
                name: "Wake"
            }
        }],
        playCurrentIndex: 0,
        lyric: [],
        currentTime: 0,
        isPaused: true,
        // isPaused: false,
        user: {
            isLogin: false,
            account: {},
            userDetail: {}
        }
    }),
    setPlayList(value) {
        this.state.playlist = value
    },
    deleteSong(i, count) {
        this.state.playlist.splice(i, count)
    },
    setPlayIndex(value) {
        this.state.playCurrentIndex = value

    },
    setPlayPaused(value) {
        this.state.isPaused = value
    },
    setLyric(value) {
        this.state.lyric = value
    },
    setCurrentTime(value) {
        this.state.currentTime = value * 1000
    },
    setUpdateMusic(value) {
        this.state.playlist[this.state.playCurrentIndex] = value
    },
    setUser(value) {
        this.state.user.isLogin = value[0]
        this.state.user.account = value[1]

    },
    setUser2(value) {
        this.state.user.isLogin = value.isLogin
        this.state.user.account = value.account
    },
    setUser3(value) {
        this.state.user.userDetail = value
    },

}
export default store