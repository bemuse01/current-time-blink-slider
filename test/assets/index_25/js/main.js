new Vue({
    el: '#wrap',
    data(){
        return{
            arr: [
                {id: 0, text: '35', show: true},
                {id: 1, text: '', show: false}
                /* {id: 0, text: '', style: {background: "red"}, show: true},
                {id: 1, text: '', style: {background: "blue"}, show: false},
                {id: 2, text: '', style: {background: "green"}, show: false} */
            ],
            time: {
                sec: '',
                min: '',
                hour: ''
            }
        }
    },
    computed: {
        watchSeconds(){
            return this.time.sec
        }
    },
    watch: {
        watchSeconds(){
            let item = this.arr.shift()
            item.show = false
            this.arr.push(item)
            this.arr[0].text = this.time.sec
            this.arr[0].show = true
        }
    },
    mounted(){
        this.animate()
    },
    methods: {
        updateCurrentTime(){
            let date = new Date()
            let sec = date.getSeconds()
            let min = date.getMinutes()
            let hour = date.getHours()

            this.time.sec = sec < 10 ? '0' + sec : sec
            this.time.min = min < 10 ? '0' + min : min
            this.time.hour = hour < 10 ? '0' + hour : hour
        },
        render(){
            this.updateCurrentTime()
        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})