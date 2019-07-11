<template>
  <div class="secondChart">
    <canvas class="myChart2"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {};
  },
  props: ["device"],
  methods: {
    createChart() {
      const myChart = document.querySelector(".myChart2").getContext("2d");
      const chart = new Chart(myChart, {
        type: "doughnut",
        data: {
          labels: this.device.map(e => {
            return e.model;
          }),
          datasets: [
            {
              data: this.device.map(e => {
                return e.progress;
              }),
              backgroundColor: ["red", "blue", "green", "purple", "orange"],
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            position: "right",
            labels: {
              fontSize:15
            }
          }
        }
      });
    }
  },
  mounted() {
    this.createChart();
  }
};
</script>

<style lang="scss" scoped>
.secondChart {
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  flex-grow: 1 */
}
</style>
