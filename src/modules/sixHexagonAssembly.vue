<template>
    <div>
        <div class="hex-container">
            <div class="hexagon">
                <div class="hexagon-item">
                    音乐
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-item">
                    暂无
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-item">
                    暂无
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-item">
                    暂无
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-item">
                    暂无
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-item">
                    暂无
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-item">
                    暂无
                </div>
            </div>
            <!-- 在这里放置更多的六边形 -->
        </div>
    </div>
</template>
    
<script>

export default {
    name: 'sixHexagonAssembly',

    mounted() {

    },

}
</script>
    
<style>
.hex-container {
    width: 480px;
    display: flex;
    flex-wrap: wrap;
    /* 允许六边形自动换行 */
}

.hexagon {
    width: 150px;
    /* 六边形的宽度 */
    height: 120px;
    color: #fff;
    /* 六边形的高度 */
    background-color: rgb(30, 37, 48);
    /* 六边形的背景颜色 */
    position: relative;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    /* 使用 clip-path 剪裁来创建六边形形状 */
    margin: 5px;
    /* 调整六边形之间的间距 */

    transition: transform 0.8s ease;

    &::before {
        content: '';
        position: absolute;
        top: 5px;
        /* 镂空部分相对于六边形的位置 */
        bottom: 5px;
        left: 5px;
        right: 5px;
        background-color: #fff;
        /* 镂空部分的背景色 */
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        /* 使用相同形状的 clip-path 创建镂空效果 */
    }


}


.hexagon:hover {
    .hexagon-item {
        background-color: rgb(35, 169, 242);
        transform: scale(1.08);
        /* 鼠标悬停时进行缩放（放大） */
    }
}

.hexagon-item {
    width: 80%;
    /* 六边形的宽度 */
    height: 80%;
    /* 六边形的高度 */
    background-color: rgb(30, 37, 48);
    /* 六边形的背景颜色 */
    position: relative;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    text-align: center;
    margin-top: 8.5%;
    margin-left: 10%;
    line-height: 550%;
    /* 行高等于容器高度 */
    /* 调整六边形之间的间距 */
    transition: transform 0.8s ease;
}

.hexagon:nth-child(1) {
    transform: translate(25%, 50%)
}

.hexagon:nth-child(2) {
    transform: translate(0%, 0%)
}

.hexagon:nth-child(3) {
    transform: translate(-25%, 50%)
}

.hexagon:nth-child(4) {
    transform: translate(25%, 50%)
}

.hexagon:nth-child(5) {
    transform: translate(0%, 0%)
}

.hexagon:nth-child(6) {
    transform: translate(-25%, 50%)
}

.hexagon:nth-child(7) {
    transform: translate(105%, 0%)
}
</style>
    