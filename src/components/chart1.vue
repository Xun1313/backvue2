<template>
  <div class="firstChart">
    <canvas class="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
var moment = require("moment");
/* Chart.defaults.global.defaultFontColor = "red";
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 30;
Chart.defaults.global.defaultFontStyle = 'bolder'; */
export default {
  data() {
    return {
      moment: moment,
      dateArr: [],
      valueArr: []
    };
  },
  props: ["date", "dateNum"],
  methods: {
    createChart() {
      const myChart = document.querySelector(".myChart").getContext("2d");
      const chart = new Chart(myChart, {
        type: "bar",
        data: {
          labels: this.dateArr,//x 軸的key
          datasets: [
            {
              //label: [1, 2, 3, 4], // 圖表標題legends要顯示的東西,可用display開關
              data: this.valueArr, //  各筆數據的value
              //backgroundColor: ["#f87979", "green", "red", "purple"],
              backgroundColor: "green",
              //borderColor: ["red", "#f87979", "green", "orange"],
              borderWidth: 1,
              //hoverBorderWidth: 5,
              //hoverBackgroundColor: "black",
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "ALL EXPENSES",
            fontSize: 25
          },
          legend: {
            display: false,
            position: "right",
            labels: {
              fontColor: "black"
            }
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          tooltips: {
            enabled: true
          },
          scales: {
            yAxes: [
              {
                //position:'right',
                ticks: {
                  beginAtZero: true,
                  fontSize:15
                }
              }
            ],
            xAxes: [
              {
                //position:'right',
                ticks: {
                  fontSize:15
                }
              }
            ]
          }
        }
      });

      /* let chart = new Chart(myChart, {
        type: "bar",
        data: {
          datasets: [
            {
              data: [10, 20, 30, 40, 50, 60]
            }
          ],
          labels: ["January", "February", "March", "April", "May", "June"]
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  min: "April"
                }
              }
            ]
          }
        }
      }); */
    },
    days() {
      for (let i = 0; i <= this.dateNum; i++) {
        if (this.dateNum === 12) {
          this.dateArr.push(
            moment()
              .subtract(i, "M")
              .format("MM") + "月"
          );
        } else {
          this.dateArr.push(
            moment()
              .subtract(i, "d")
              .format("MM-DD")
          );
        }
        this.valueArr.push(Math.floor(Math.random() * 5000 + 5000));
      }
      this.dateArr.reverse();
    },
    refreshChart() {
      this.dateArr = [];
      this.days();
      document.querySelector(".myChart").remove();
      document.querySelector(".chartjs-size-monitor").remove();
      const canvas = document.createElement("canvas");
      canvas.classList.add("myChart");
      document.querySelector(".firstChart").appendChild(canvas);
      this.createChart();
    }
  },
  mounted() {
    this.days();
    this.createChart();
  },
  watch: {
    dateNum() {
      this.refreshChart();
    }
  }
};
</script>

<style lang="scss" scoped>
.firstChart{
  width: 75%;
}
</style>
