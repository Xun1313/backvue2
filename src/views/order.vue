<template>
  <div class="order">
    <div class="countdown"></div>
    <div class="edit">
      <!-- option -->
      <div class="edit-option dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
        >
          <i class="fas fa-tasks"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            class="dropdown-item"
            type="button"
            v-for="item in optionItem"
            :key="item"
            @click="checkedHandler(item)"
          >{{item}}</button>
        </div>
      </div>

      <!-- status -->
      <div class="edit-status dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
        >
          <i class="far fa-edit"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            class="dropdown-item"
            type="button"
            v-for="item in statusItem"
            :key="item"
            @click="statusHandler(item)"
          >{{item}}</button>
        </div>
      </div>

      <!-- section -->
      <div class="edit-section btn-group">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          data-display="static"
        >EDIT SECTION</button>
        <div class="dropdown-menu dropdown-menu-lg-right">
          <button
            class="dropdown-item"
            type="button"
            v-for="item in titleData"
            :key="item"
            @click="dataHandler(item)"
          >{{item}}</button>
        </div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <template v-for="item in titleData">
            <th v-if="!isopen.includes(item)">{{item}}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in orderData" :key="item.status[0]+index">
          <td v-if="!isopen.includes('Order List')">
            <!-- Order List -->
            <input type="checkbox" v-model="item.ischecked" />
            {{index}}
          </td>

          <td v-if="!isopen.includes('Customer')">
            <!-- Customer -->
            <!-- {{$faker().name.firstName()}} -->
            {{item.customer}}
          </td>

          <td v-if="!isopen.includes('productlist')">
            <!-- productlist -->
            <div class="product">
              <div class="product-content">
                <div class="product-detail">
                  <!-- <p>{{$faker().commerce.product()}}</p>
                  <p>${{Math.floor(Math.random()*950+50)}}</p>-->
                  <p>{{item.productlistProduct1.name}}</p>
                  <p>{{item.productlistProduct1.price}}</p>
                </div>
                <!-- <div class="product-num">x{{Math.floor(Math.random()*3+1)}}</div> -->
                <div class="product-num">x{{item.productlistProduct1.num}}</div>
              </div>
              <div class="product-content">
                <div class="product-detail">
                  <!-- <p>{{$faker().commerce.product()}}</p>
                  <p>${{Math.floor(Math.random()*950+50)}}</p>-->
                  <p>{{item.productlistProduct2.name}}</p>
                  <p>{{item.productlistProduct2.price}}</p>
                </div>
                <!-- <div class="product-num">x{{Math.floor(Math.random()*3+1)}}</div> -->
                <div class="product-num">x{{item.productlistProduct2.num}}</div>
              </div>
            </div>
          </td>

          <td v-if="!isopen.includes('Total')">
            <!-- Total -->
            <!-- ${{Math.floor(Math.random()*1000+500)}} -->
            {{item.total}}
          </td>

          <td v-if="!isopen.includes('Add to Cart')">
            <!-- Add to Cart -->
            <!-- {{moment().subtract(Math.floor(Math.random()*365),'d').format('YYYY/MM/DD')}} -->
            {{item.AddtoCart}}
          </td>

          <td v-if="!isopen.includes('Check-out')">
            <!-- Check-out -->
            <!-- {{moment().subtract(Math.floor(Math.random()*365),'d').format('YYYY/MM/DD')}} -->
            {{item.CheckOut}}
          </td>

          <td v-if="!isopen.includes('Address')" class="beyond">
            <!-- Address -->
            <!-- {{$faker().address.secondaryAddress()}} -->
            {{item.address1}}
            <br />
            <!-- {{$faker().address.country()}} -->
            {{item.address2}}
          </td>

          <td v-if="!isopen.includes('Phone')">
            <!-- Phone -->
            <!-- {{$faker().phone.phoneNumberFormat()}} -->
            {{item.phone}}
          </td>

          <td v-if="!isopen.includes('Email')" class="beyond">
            <!-- Email -->
            <!-- {{$faker().internet.exampleEmail()}} -->
            {{item.email}}
          </td>

          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle"
                :class="[item.status==='Paid'?'btn-success':'',item.status==='Unpaid'?'btn-secondary':'',item.status==='Shipping'?'btn-warning':'',item.status==='Done'?'btn-primary':'']"
                data-toggle="dropdown"
                data-display="static"
              >{{item.status}}</button>
              <div class="dropdown-menu dropdown-menu-lg-right">
                <button
                  class="dropdown-item"
                  type="button"
                  @click="item.status=status"
                  v-for="status in statusItem"
                  :key="status"
                >{{status}}</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
var moment = require("moment");
var faker = require("faker");
const statusItem = ["Paid", "Unpaid", "Shipping", "Done"];
export default {
  //勾選  isopen
  //改狀態  有isope有是true的才能改狀態
  //隱藏td
  data() {
    return {
      isopen: [],
      titleData: [
        "Order List",
        "Customer",
        "Product List",
        "Total",
        "Add to Cart",
        "Check-out",
        "Address",
        "Phone",
        "Email",
        "Status"
      ],
      optionItem: [
        "Select All",
        "Unselect All",
        "Paid",
        "Unpaid",
        "Shipping",
        "Done"
      ],
      statusItem: ["Paid", "Unpaid", "Shipping", "Done"],
      orderData: [
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          customer: faker.name.findName(),
          productlistProduct1: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), "d")
            .format("YYYY/MM/DD"),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        }
      ],
      moment: moment
    };
  },
  methods: {
    checkedHandler(val) {
      if (val === "Select All") {
        this.orderData.forEach(e => {
          e.ischecked = true;
        });
      } else if (val === "Unselect All") {
        this.orderData.forEach(e => {
          e.ischecked = false;
        });
      } else {
        this.orderData.forEach(e => {
          e.status === val ? (e.ischecked = true) : (e.ischecked = false);
        });
      }
    },
    statusHandler(val) {
      this.orderData.forEach(e => {
        e.ischecked ? (e.status = val) : "";
        e.ischecked = false;
      });
    },
    dataHandler(val) {
      //isopen裡有該title就要隱藏,沒有就要出現
      if (this.isopen.includes(val)) {
        this.isopen.splice(this.isopen.indexOf(val), 1);
      } else {
        this.isopen.push(val);
      }
    },
  }
  /* watch: {
    ['titleData.isopen']:{
      handler(val,oldVal){
        this.orderData.forEach(e=>{
          e.isopen=false
        })
      },
    }
  }, */
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      text-align: left;
    }
  }
  &-content:first-child {
    border-bottom: 1px solid gray;
  }
}

tr th,
tr td {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  vertical-align: middle;
}

.beyond {
  max-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  //white-space: nowrap;
}
.order {
  //overflow: hidden;
  font-size: 16px;
  width: 95%;
  margin: auto;
}
.edit {
  display: flex;
  &-status {
    margin-right: auto;
  }
}
</style>
