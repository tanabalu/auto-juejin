<template>
    <el-row :gutter="24">
        <!-- 操作区 -->
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <el-form ref="form" label-width="120px">
                    <el-form-item label="uid">
                        <el-input v-model="uid"></el-input>
                    </el-form-item>
                    <el-form-item label="authorization">
                        <el-input v-model="authorization"></el-input>
                    </el-form-item>
                    <el-form-item label="x-tt-gameid">
                        <el-input v-model="gameId"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="记住我">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item> -->
                    <!-- <el-form-item label="Resources">
                        <el-radio-group v-model="form.resource">
                        <el-radio label="Sponsor"></el-radio>
                        <el-radio label="Venue"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Activity form">
                        <el-input v-model="form.desc" type="textarea"></el-input>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" @click="submit">Create</el-button>
                        <el-button :disabled="isLoading">Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
        <!-- 日志区 -->
        <el-col :span="12"><div class="grid-content bg-purple">第三方</div></el-col>
    </el-row>
</template>

<script lang="ts">
interface State {

}

enum LoggerType {
  // 游戏开始
  // 游戏进度
  // 游戏卡顿了哦，开始探路
  // 探路中提示

  // 路径到达上限提示

  // 手动停止前进提示

  // 接口请求错误
}

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            // 总共执行冲刺方案次数
            maxSweepTimes: 1,
            // 当前冲刺方案执行次数
            currentSweepTime: 0,
            // 自动探路循环次数
            // 当前探路循环执行次数
            // 多少米自动回巢
            maxDeep: 60000,
            // 回巢底线是多少米
            minDeep: 1,
            // 向前进还是回巢？
            isBacking: false,
            // 用户id
            uid: '',
            // 游戏id
            gameId: '',
            // authid
            authorization: '',
            // 日志列表
            logList: [],
            // 是否正在发送请求
            isLoading: false,
            // 是否停止执行
            isStopRun: false,
            // 当前位置
            postion: {
                x: 0,
                y: 0,
            },
            // 当前矿石数量
            currentMineral: 0,
        };
    },
    methods: {
        // 开始扫楼
        submit() {
            if (!this.checkIntegrity()) {
                // 如果信息填写不完整，提示并结束进程
                return;
            }

            this.go();
        },
        // 下行扫楼
        go() {
            if (this.position.y >= this.maxDeep) {
                this.isBacking = true;
                return;
            }

            if (this.currentSweepTime >= this.maxSweepTimes || this.isStopRun) {
                // 如果循环次数超限
                return;
            }


            // this.isLoading = true;


        },
        // 检验是否
        checkIntegrity(): boolean {

        },
        // 上行扫楼
        back() {
            if (this.position.y <= this.minDeep) {
                // 全局结束
                return;
            }
        },
        // 增加打印日志
        logger() {
            
        },
        // 清空当前日志
        clearLog() {

        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content {
    /* background-color: red; */
}
</style>