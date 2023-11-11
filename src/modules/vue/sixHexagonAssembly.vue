<template>
    <div>
        <div class="hex-container"
            :style="{ '--hexagon-color': $store.state.sixHexagonBackgroundColor, '--hexagon-hover-color': $store.state.sixHexagonHoverBackgroundColor }">
            <div class="hexagon">
                <router-link class="routerClass" to="/musicPage">
                    <div class="hexagon-item">
                        音乐
                    </div>
                </router-link>
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
.routerClass {
    text-decoration: none;
    /* 去除下划线 */
    color: inherit;
    /* 继承父元素的文字颜色 */
}

.hex-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    /* 允许六边形自动换行 */
}

.hexagon {
    width: 30%;
    /* 六边形的宽度 */
    height: 35%;
    color: #fff;
    /* 六边形的高度 */
    background-color: var(--hexagon-color);
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

@keyframes orbit {
    from {
        transform: rotate(0deg) translateX(150px) rotate(0deg);
        /* 初始位置 */
    }

    to {
        transform: rotate(360deg) translateX(150px) rotate(-360deg);
        /* 终止位置 */
    }
}

.hexagon:hover {

    .hexagon-item {
        background-color: var(--hexagon-hover-color);
        transform: scale(1.15);
        /* 鼠标悬停时进行缩放（放大） */
    }

}

.hexagon-item {
    /* 使用动画让元素绕中心旋转 */
    width: 80%;
    /* 六边形的宽度 */
    height: 80%;
    /* 六边形的高度 */
    background-color: var(--hexagon-color);
    /* 六边形的背景颜色 */
    position: relative;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    text-align: center;
    margin: 10%;
    line-height: 550%;
    /* 行高等于容器高度 */
    /* 调整六边形之间的间距 */
    transition: transform 0.8s ease;
}

.hexagon:nth-child(1) {
    /* animation: orbit 10s linear infinite; */
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
    