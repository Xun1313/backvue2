<template>
  <div class="container">
    <div class="date">
      <template v-for="item in allDateRange">
        <div
          class="date-result"
          v-if="date===item.bigDate"
        >{{moment().add(-1,item.smallDate).format('YYYY-MM-DD')}}>{{moment().format('YYYY-MM-DD')}}</div>
      </template>
      <div class="btn-group date-picker">
        <button
          type="button"
          class="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{{date}}</button>
        <div class="dropdown-menu dropdown-menu-right">
          <button
            class="dropdown-item"
            type="button"
            v-for="item in allDateRange"
            :key="item.bigDate"
            @click="changeDate(item.bigDate,item.num)"
          >{{item.bigDate}}</button>
        </div>
      </div>
    </div>

    <div class="home-title">
      <div
        class="home-title-item"
        v-for="item in home_title_item"
        :key="item.title"
        :class="item.bgc"
      >
        <div class="home-title-item-top">
          <div>
            <p class="home-title-word">{{item.title}}</p>
            <p class="home-title-money">${{$faker().commerce.price()}}</p>
          </div>
          <i class="fas fa-2x" :class="item.pic"></i>
        </div>
        <div class="home-title-item-bottom">+{{Math.round(Math.random()*15+1)}}% From Previous Month</div>
      </div>
    </div>

    <!-- <chart1 :chart-data="chartdataloaded" /> -->
    <section class="chart">
      <chart1 :date="date" :dateNum="dateNum" class="chart1"></chart1>
      <div class="chart-items">
        <div class="chart-items-item bg-light" v-for="item in chart_data" :key="item.title">
          <div class="chart-items-item-title">{{item.title}}</div>
          <div class="w-100"></div>
          <div class="chart-items-item-value">{{Math.floor(Math.random()*4700+300)}}</div>
          <div
            class="chart-items-item-level"
            :class="[item.level?'text-success':'text-danger']"
          >{{item.level?'+':'-'}}{{(Math.random()*3+0.1).toFixed(2)}}%</div>
          <div class="w-100"></div>
          <div class="progress chart-items-item-progress">
            <div
              class="progress-bar"
              :class="item.progress_color"
              role="progressbar"
              :style="{width:Math.random()*101+'%'}"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="browser_device">
      <div class="device bg-light">
        <div class="device-title">Device Usage</div>
        <div class="device-content">
          <div class="device-content-chart">
            <chart2 :device='device'></chart2>
          </div>
          <div class="device-content-data">
            <!-- <div class="device-content-data-title">
              <div class="title1">Device</div>
              <div class="title2">Progress</div>
            </div> -->
            <table class="table device-content-data-value">
              <thead>
                <tr>
                  <th scope="col" class="title1">Device</th>
                  <th scope="col" class="title2">Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in device" :key="item.model">
                  <td class="model">{{item.model}}</td>
                  <td class="progresses">{{item.progress}}</td>
                </tr>
              </tbody>
            </table>
            <!-- <div class="device-content-data-value" >
              <div class="model">{{item.model}}</div>
              <div class="progresses">{{item.progress}}%</div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="browser bg-light">
        <div class="browser-title">Browser Status</div>
        <div class="browser-item" v-for="item in browser" :key="item.name">
          <div class="browser-icon-name">
            <div class="browser-icon">
              <i class="fab fa-2x" :class="item.icon"></i>
            </div>
            <div class="browser-name">{{item.name}}</div>
          </div>
          <div class="browser-value-level">
            <div class="browser-value">{{Math.round(Math.random()*49000+1000)}}</div>
            <div class="browser-level">
              <div class="browser-level-detail">
                <p>
                  {{item.random?'INCREASE':'DECLINE'}}
                  <span
                    :class="[item.random?'text-success':'text-danger']"
                  >{{Math.floor(Math.random()*1000*+1)}}</span>
                  VIEWS
                </p>
                <p>last week: {{Math.floor(Math.random()*40000+10000)}}</p>
              </div>
              <i
                class="fas"
                :class="[item.random?'fa-arrow-up text-success':'fa-arrow-down text-danger']"
              >{{Math.round(Math.random()*20+10)}}%</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  &-items {
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: space-around;
    &-item {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;
      padding: 20px;
      &-title {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 15px;
      }
      &-value,
      &-level {
        font-weight: bold;
        margin-right: 10px;
      }
      &-progress {
        width: 100%;
        height: 5px;
        margin-top: 10px;
        .progress-bar {
          height: 5px;
        }
      }
    }
  }
}
.browser_device {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.device {
  padding: 30px;
  width: 49%;
  &-title {
    font-size: 30px;
    font-weight: bolder;
  }
  &-content {
    /* display: flex;
    justify-content: space-between; */
    margin-top: 5px;
    &-data {
      display: flex;
      flex-direction: column;
      /* &-title {
        display: flex;
        justify-content: space-around;
        font-size: 22px;
      } */
      
      &-value {
        /* display: flex;
        justify-content: space-around;
        * {
          text-align: right;
          width: 45%;
        } */
        text-align: center;
        margin-top: 20px;
        .title1,.title2 {
        //display: flex;
        font-weight: bold;
        margin-bottom: 15px;
        //justify-content: space-around;
      }
      }
    }
    &-chart {
      margin-top: 10px;
    }
  }
}
.browser {
  padding: 30px;
  width: 49%;
  &-title {
    margin-bottom: 60px;
    font-size: 30px;
    font-weight: bolder;
  }
  &-item {
    display: flex;
    margin-bottom: 60px;
    justify-content: space-between;
  }
  &-icon-name {
    display: flex;
    align-items: center;
    font-size: 22px;
    .browser-icon {
      margin-right: 20px;
    }
    .browser-name {
      opacity: 0.5;
      font-weight: 500;
    }
  }
  &-value-level {
    display: flex;
    justify-content: flex-end;
    .browser-value {
      margin-right: 20px;
      font-weight: bold;
    }
    .browser-level {
      transition: all 0.5s;
      position: relative;
      .browser-level-detail {
        position: relative;
        transition: all 0.5s;
        padding: 20px;
        background-color: black;
        color: white;
        z-index: 10;
        position: absolute;
        right: -20px;
        bottom: 75px;
        width: 250px;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          margin: 0;
          display: flex;
          span {
            margin: 0 10px;
          }
        }
        p:last-child {
          opacity: 0.5;
        }
      }
      .browser-level-detail:after {
        content: "";
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        bottom: -10px;
        background-color: black;
        transform: rotate(50deg);
        z-index: -1;
        right: 25px;
      }
    }
    .browser-level:hover .browser-level-detail {
      transition: all 0.5s;
      display: flex;
    }
  }
}
.date {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &-result {
    margin-right: 10px;
  }
}

.home-title {
  display: flex;
  justify-content: space-between;
  .home-title-item {
    padding: 25px;
    width: 250px;
    .home-title-item-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home-title-word {
        font-weight: 500;
      }
      .home-title-money {
        font-weight: bolder;
        font-size: 25px;
      }
    }
    .home-title-item-bottom {
      display: flex;
    }
  }
}
.dropdown-item:active {
  background-color: #6c757d;
  outline: none;
}
</style>

<script>
var moment = require("moment");
import chart1 from "../components/chart1";
import chart2 from "../components/chart2";
export default {
  data() {
    return {
      device: [
        {
          model: "IOS",
          progress: Math.floor(Math.random()*20+10)
        },
        {
          model: "Android",
          progress: Math.floor(Math.random()*20+10)
        },
        {
          model: "Blackberry",
          progress: Math.floor(Math.random()*20+10)
        },
        {
          model: "Symbian",
          progress: Math.floor(Math.random()*20+10)
        },
        {
          model: "Others",
          progress: Math.floor(Math.random()*20+10)
        }
      ],
      chart_data: [
        {
          title: "Published Project",
          level: Math.floor(Math.random() * 2),
          progress_color: "bg-danger"
        },
        {
          title: "Completed Task",
          level: Math.floor(Math.random() * 2),
          progress_color: "bg-primary"
        },
        {
          title: "Successfull Task",
          level: Math.floor(Math.random() * 2),
          progress_color: "bg-info"
        },
        {
          title: "Ongoing Project",
          level: Math.floor(Math.random() * 2),
          progress_color: "bg-warning"
        }
      ],
      browser: [
        {
          name: "Apple Safari",
          icon: "fa-google",
          random: Math.floor(Math.random() * 2)
        },
        {
          name: "Mozila Firefox",
          icon: "fa-internet-explorer",
          random: Math.floor(Math.random() * 2)
        },
        {
          name: "Internet Explorer",
          icon: "fa-firefox",
          random: Math.floor(Math.random() * 2)
        },
        {
          name: "Google Chrome",
          icon: "fa-safari",
          random: Math.floor(Math.random() * 2)
        },
        {
          name: "Opera mini",
          icon: "fa-opera",
          random: Math.floor(Math.random() * 2)
        }
      ],
      moment: moment,
      date: "Daily",
      dateNum: 1,
      allDateRange: [
        { bigDate: "Daily", smallDate: "d", num: 1 },
        { bigDate: "Weekly", smallDate: "w", num: 7 },
        { bigDate: "Monthly", smallDate: "M", num: 30 },
        { bigDate: "Yearly", smallDate: "y", num: 12 }
      ],
      home_title_item: [
        {
          title: "Total Profit",
          pic: "fa-money-bill-wave",
          bgc: "bg-danger"
        },
        {
          title: "Total Orders",
          pic: "fa-list-alt",
          bgc: "bg-primary"
        },
        {
          title: "Average Price",
          pic: "fa-dollar-sign",
          bgc: "bg-info"
        },
        {
          title: "Product Sold",
          pic: "fa-check-circle",
          bgc: "bg-success"
        }
      ]
    };
  },
  methods: {
    changeDate(bigDate, num) {
      this.date = bigDate;
      this.dateNum = num;
    }
  },
  computed: {
    chartdataloaded() {
      return {
        labels: ["今天", "昨天", "一週前"], // 位於 x 軸的各筆數據 key
        datasets: [
          {
            //label: "排名", // x 軸的標籤項目
            backgroundColor: "rgba(0,0,0,0.1)",
            data: ["2", "2", "2"], // 位於 y 軸對應的各筆數據 value
            backgroundColor: ["#f87979", "green", "red"],
            borderColor: ["red", "#f87979", "green"],
            borderWidth: 1,
            pointHoverBorderColor: "#777",
            pointHoverBorderWidth: 3
          }
        ]
      };
    }
  },
  components: {
    chart1,
    chart2
  }
};
</script>
