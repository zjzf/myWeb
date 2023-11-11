<template>
    <div>
        <el-popover placement="left-start" title="设置" width="400" trigger="click">

            <el-form label-position="left">
                <el-form-item label="应用模块背景色">
                    <el-color-picker v-model="$store.state.sixHexagonBackgroundColor" show-alpha
                        :predefine="predefineColors">
                    </el-color-picker>
                </el-form-item>
                <el-form-item label="鼠标放在应用模块背景色">
                    <el-color-picker v-model="$store.state.sixHexagonHoverBackgroundColor" show-alpha
                        :predefine="predefineColors">
                    </el-color-picker>
                </el-form-item>

                <el-form-item label="时间颜色">
                    <el-color-picker v-model="$store.state.timeColor" show-alpha
                        :predefine="predefineColors">
                    </el-color-picker>
                </el-form-item>

                <el-form-item label="日期颜色">
                    <el-color-picker v-model="$store.state.calendarColor" show-alpha
                        :predefine="predefineColors">
                    </el-color-picker>
                </el-form-item>

            </el-form>

            <el-button slot="reference" class="setClass" icon="el-icon-s-tools" circle></el-button>
        </el-popover>

    </div>
</template>
    
<script>

export default {
    name: 'sixHexagonAssembly',

    props: {

    },

    data() {
        return {
            color: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
        }
    },

    mounted() {

    },

}
</script>
    
<style></style>
    