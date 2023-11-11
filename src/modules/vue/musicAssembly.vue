<template>
    <div class="box">
        <div class="container">
            <div class="spectrum spectrum1"></div>
            <div class="spectrum spectrum2"></div>
            <div class="spectrum spectrum3"></div>
            <div class="spectrum spectrum4"></div>
            <div class="spectrum spectrum5"></div>
            <div class="spectrum spectrum6"></div>
            <div class="spectrum spectrum7"></div>
            <div class="spectrum spectrum8"></div>
            <div class="spectrum spectrum9"></div>
            <div class="spectrum spectrum10"></div>
        </div>
        <div class="container down">
            <div class="spectrum spectrum1"></div>
            <div class="spectrum spectrum2"></div>
            <div class="spectrum spectrum3"></div>
            <div class="spectrum spectrum4"></div>
            <div class="spectrum spectrum5"></div>
            <div class="spectrum spectrum6"></div>
            <div class="spectrum spectrum7"></div>
            <div class="spectrum spectrum8"></div>
            <div class="spectrum spectrum9"></div>
            <div class="spectrum spectrum10"></div>
        </div>
    </div>
</template>
    
<script>
        let tt=require("../static/static") 
        let fun=require('../api/home')
export default {
    name: 'timeAssembly',
    data() {
        return {
        };
    },
    async mounted() {

        let bb=await fun.getBanner()
        console.log(bb);
    },
    methods: {
    }


}
</script>
    
<style scoped>
/* 设置绝对定位并居中 */
.container {
    transform: translate(-50%, 50%);
}

/* 设置spectrum为inline-block使之排练在一行并设置动画 */
.spectrum {
    width: 20px;
    height: 120px;
    background: #000000;
    display: inline-block;
    border-radius: 6px;
    transform-origin: bottom;
    animation: dancing 1s ease-in-out infinite;
}

/* 设置每一个的颜色和延迟，造成一种此起彼伏的感觉 */
.spectrum1 {
    background-color: #002FC9;
    animation-delay: 0.1s;
}

.spectrum2 {
    background-color: #390F8A;
    animation-delay: 0.2s;
}

.spectrum3 {
    background-color: #89083F;
    animation-delay: 0.3s;
}

.spectrum4 {
    background-color: #CC0004;
    animation-delay: 0.4s;
}

.spectrum5 {
    background-color: #DE2C00;
    animation-delay: 0.5s;
}

.spectrum6 {
    background-color: #FF8900;
    animation-delay: 0.6s;
}

.spectrum7 {
    background-color: #53D600;
    animation-delay: 0.7s;
}

.spectrum8 {
    background-color: #ABF101;
    animation-delay: 0.8s;
}

.spectrum9 {
    background-color: #FFEB20;
    animation-delay: 0.9s;
}

.spectrum10 {
    background-color: #9933CD;
    animation-delay: 1s;
}

@keyframes dancing {
    0% {
        transform: scaleY(0.1);
    }

    50% {
        transform: scaleY(1);
    }

    100% {
        transform: scaleY(0.1);
    }
}

/* 设置倒影，选择180度，并移位，设置透明度 */
.container.down {
    transform: rotateX(180deg) translate(-50%, -50%);
    opacity: 0.3;
}
</style>
    