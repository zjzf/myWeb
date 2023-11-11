<template>
  <div class="box">
    <div class="dateBox">
      <div class="time">{{ time }}</div>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'timeAssembly',
  data() {
    return {
      date: this.getToday().date,
      time: this.getToday().time,
    };
  },
  mounted() {
    const clock = setInterval(() => {
      this.date = this.getToday().date;
      this.time = this.getToday().time;
    }, 1000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(clock);
    });
  },
  methods: {
    getToday() {
      var datas = new Date();
      var on1 = "/";
      var on2 = ":";
      var onY = datas.getFullYear(); //年
      var onM = datas.getMonth() + 1; //月
      var onD = datas.getDate(); //日
      var onS = datas.getHours(); //时
      var onF = datas.getMinutes(); //分
      var onN = datas.getSeconds(); //秒

      if (onM >= 1 && onM <= 9) {
        //月
        onM = "0" + onM;
      }
      if (onD >= 1 && onD <= 9) {
        //日
        onD = "0" + onD;
      }
      if (onS >= 0 && onS <= 9) {
        //时
        onS = "0" + onS;
      }
      if (onF >= 0 && onF <= 9) {
        //分
        onF = "0" + onF;
      }
      if (onN >= 0 && onN <= 9) {
        //秒
        onN = "0" + onN;
      }

      return {
        date: onY + on1 + onM + on1 + onD,
        time: onS + on2 + onF + on2 + onN,
      };
    }
  }


}
</script>
  
<style scoped>
.dateBox {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.date {
  font-size: 28px;
  color: rgb(35, 169, 242);
  margin-left: 15px;
}

.time {
  font-size: 48px;
  color: #ffffff;
}
</style>
  