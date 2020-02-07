<template>
  <div class="order container-fluid">
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
          >
            {{ item }}
          </button>
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
          >
            {{ item }}
          </button>
        </div>
      </div>

      <!-- section -->
      <div class="edit-section btn-group">
        <div class="dropdown">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            data-display="static"
          >
            EDIT SECTION
          </button>
          <div class="dropdown-menu dropdown-menu-lg-right">
            <button
              class="dropdown-item edit-section-item"
              type="button"
              v-for="item in titleData"
              :key="item"
              @click="dataHandler(item, $event)"
            >
              <i class="fas fa-check" v-if="!isopen.includes(item)"></i>
              <h5 class="edit-section-item-name">{{ item }}</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <template v-for="(item, index) in titleData">
            <th v-if="!isopen.includes(item)" :key="item + index">
              {{ item }}
            </th>
          </template>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in orderData" :key="item.status[0] + index">
          <td v-if="!isopen.includes('Order List')">
            <!-- Order List -->
            <input type="checkbox" v-model="item.ischecked" />
          </td>

          <td v-if="!isopen.includes('Customer')">
            <!-- Customer -->
            {{ item.customer }}
          </td>

          <td v-if="!isopen.includes('productlist')">
            <!-- productlist -->
            <div class="product">
              <div class="product-content">
                <div class="product-detail">
                  <p>{{ item.productlistProduct1.name }}</p>
                  <p>${{ item.productlistProduct1.price | currency }}</p>
                </div>
                <div class="product-num">
                  x{{ item.productlistProduct1.num }}
                </div>
              </div>
              <div class="product-content">
                <div class="product-detail">
                  <p>{{ item.productlistProduct2.name }}</p>
                  <p>${{ item.productlistProduct2.price | currency }}</p>
                </div>
                <div class="product-num">
                  x{{ item.productlistProduct2.num }}
                </div>
              </div>
            </div>
          </td>

          <td v-if="!isopen.includes('Total')">
            <!-- Total -->
            ${{ item.total | currency }}
          </td>

          <td v-if="!isopen.includes('Add to Cart')">
            <!-- Add to Cart -->
            {{ item.AddtoCart }}
          </td>

          <td v-if="!isopen.includes('Check-out')">
            <!-- Check-out -->
            {{ item.CheckOut }}
          </td>

          <td v-if="!isopen.includes('Address')" class="beyond">
            <!-- Address -->
            {{ item.address1 }}
            <br />
            {{ item.address2 }}
          </td>

          <td v-if="!isopen.includes('Phone')">
            <!-- Phone -->
            {{ item.phone }}
          </td>

          <td v-if="!isopen.includes('Email')" class="beyond">
            <!-- Email -->
            {{ item.email }}
          </td>

          <td>
            <div class="dropdown">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  :class="[
                    item.status === 'Paid' ? 'btn-success' : '',
                    item.status === 'Unpaid' ? 'btn-secondary' : '',
                    item.status === 'Shipping' ? 'btn-warning' : '',
                    item.status === 'Done' ? 'btn-primary' : ''
                  ]"
                  data-toggle="dropdown"
                  data-display="static"
                >
                  {{ item.status }}
                </button>
                <div class="dropdown-menu dropdown-menu-lg-right">
                  <button
                    class="dropdown-item"
                    type="button"
                    @click="item.status = status"
                    v-for="status in statusItem"
                    :key="status"
                  >
                    {{ status }}
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              :data-target="`#deleteModal${index}`"
            >
              delete
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              :id="`deleteModal${index}`"
              data-backdrop="static"
              tabindex="-1"
              role="dialog"
              aria-labelledby="deleteModal"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      再次確定
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h5 class="text-left">確定刪除此訂單?</h5>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      @click="deleteProduct(item.id)"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
var moment = require('moment')
var faker = require('faker')
const statusItem = ['Paid', 'Unpaid', 'Shipping', 'Done']
export default {
  data() {
    return {
      isopen: [],
      titleData: [
        'Order List',
        'Customer',
        'Product List',
        'Total',
        'Add to Cart',
        'Check-out',
        'Address',
        'Phone',
        'Email',
        'Status'
      ],
      optionItem: [
        'Select All',
        'Unselect All',
        'Paid',
        'Unpaid',
        'Shipping',
        'Done'
      ],
      statusItem: ['Paid', 'Unpaid', 'Shipping', 'Done'],
      orderData: [
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'coat',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'leather jacket',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'hoodies',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'trench coat',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'jacket',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'sweater',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'vest',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'business suit',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'suit',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'blouse',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'coat',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'leather jacket',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'hoodies',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'trench coat ',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'jacket',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'sweater',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        },
        {
          status: statusItem[Math.floor(Math.random() * 4)],
          ischecked: false,
          id: faker.random.uuid(),
          customer: faker.name.findName(),
          productlistProduct1: {
            name: 'business suit',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          productlistProduct2: {
            name: 'vest',
            price: Math.floor(Math.random() * 950 + 50),
            num: Math.floor(Math.random() * 3 + 1)
          },
          total: Math.floor(Math.random() * 1000 + 500),
          AddtoCart: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          CheckOut: moment()
            .subtract(Math.floor(Math.random() * 365), 'd')
            .format('YYYY/MM/DD'),
          address1: faker.address.secondaryAddress(),
          address2: faker.address.country(),
          phone: faker.phone.phoneNumberFormat(),
          email: faker.internet.exampleEmail()
        }
      ],
      moment: moment
    }
  },
  methods: {
    checkedHandler(val) {
      if (val === 'Select All') {
        this.orderData.forEach(e => {
          e.ischecked = true
        })
      } else if (val === 'Unselect All') {
        this.orderData.forEach(e => {
          e.ischecked = false
        })
      } else {
        this.orderData.forEach(e => {
          e.status === val ? (e.ischecked = true) : (e.ischecked = false)
        })
      }
    },
    statusHandler(val) {
      this.orderData.forEach(e => {
        e.ischecked ? (e.status = val) : ''
        e.ischecked = false
      })
    },
    dataHandler(val, e) {
      //isopen裡有該title就要隱藏,沒有就要出現
      if (this.isopen.includes(val)) {
        e.currentTarget.childNodes[1].style.marginLeft = '10px'
        this.isopen.splice(this.isopen.indexOf(val), 1)
      } else {
        e.currentTarget.childNodes[1].style.marginLeft = '30px'
        this.isopen.push(val)
      }
    },
    deleteProduct(id) {
      if (id) {
        this.orderData.forEach((e, i) => {
          e.id === id ? this.orderData.splice(i, 1) : ''
        })
      }
      this.resetTemp()
    },
    resetTemp() {
      this.tempProduct = {
        product: {
          imgUrl: '',
          name: ''
        },
        original: '',
        discount: '',
        detail: [
          {
            size: 'L',
            specification: [
              {
                color: 'Red',
                inventory: '10'
              }
            ]
          },
          {
            size: 'L',
            specification: [
              {
                color: 'Red',
                inventory: '10'
              }
            ]
          }
        ],
        status: '',
        ischecked: false
      }
    }
  }
}
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
  margin: auto;
  overflow: auto;
}
.edit {
  display: flex;
  margin: 20px 0;
  &-option {
    margin-right: 15px;
  }
  &-status {
    margin-right: auto;
  }
  &-section {
    &-item {
      display: flex;
      align-items: center;
      padding: 10px 30px;
      &-name {
        margin: 0 0 0 10px;
        font-size: 20px;
      }
    }
  }
}
.dropdown-item:active {
  background-color: #6c757d;
  outline: none;
}
</style>
