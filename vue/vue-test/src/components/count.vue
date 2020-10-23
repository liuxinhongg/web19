<template>
    <div class="countbox">
        <h2>简单的计数器</h2>
        <el-button type="success" @click="add(3)">增加</el-button>
        <span>{{num}}</span>
        <el-button type="warning" @click="jian(2)">减少</el-button>
        {{num2}}
        <h1>{{news}}</h1>

        <marquee behavior="scroll" direction="right" scrollamount="100">我是跑马灯标签</marquee>
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions} from "vuex"
    export default {
        // data(){
        //     return {
        //         //读取vuex里面state的num
        //         num:this.$store.state.num
        //     }
        // },
        // computed:用来监控自己定义的一个变量，变量不在data里面声明，直接在computed里面定义，
        // 然后可以在页面上进行数据双向绑定，展示结果
        // computed与watch的区别
        // watch:主要是用于监控vue实例的变化，变量必须在data里面声明才可以，
        // watch监控的是一个变量，还可以是一个对象
        computed: {
            ...mapState({
                num(){
                    return this.$store.state.num
                },
                news(){
                    return this.$store.state.msg
                }
            }),
            ...mapGetters({
                num2:'count'
            })
           
        },
        methods:{
            ...mapActions({
                // add:"addAction"
                aa:"addAction"
            }),
            add(num){
                this.aa()
                // this.num+=5;
                //提交mutations里面的方法需要通过this.$store.commit("increment")
                // this.$store.commit("increment",{
                //     n:num,
                //     name:"zhangsan"
                // });
                /*
                this.$store.commit("increment",{
                    n:num,
                    name:"zhangsan"
                });
                */
            //    this.$store.dispatch(actions里面的方法)
            //     this.$store.dispatch("addAction")
            },
            jian(num){
                // this.num-=5;
                this.$store.commit("mincrement",{
                    n:num,
                    name:"lisi"
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.countbox{
    width: 300px;
    margin: 100px auto;
    text-align: center;
}
</style>