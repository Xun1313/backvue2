<template>
  <div class="center">
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
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >ADD NEW PRODUCT</button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">ADD NEW PRODUCT</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="add">
                  <div class="upload">123</div>
                  <div class="info">
                    <div class="describe">
                      <div class="describe-title">Product Discription</div>
                      <input
                        type="text"
                        class="describe-text1 form-control"
                        placeholder="write something"
                      />
                      <textarea class="describe-text2 form-control" placeholder="write something"></textarea>
                    </div>

                    <div class="price">
                      <div class="price-title">Price</div>
                      <div class="price-content">
                        <p>Original</p>
                        <p>
                          123
                          <!-- {{item.original}} -->
                        </p>
                        <p>Discount</p>
                        <p>
                          123
                          <!-- {{item.discount}} -->
                        </p>
                      </div>
                    </div>

                    <div class="specification">
                      <div class="specification-title">specification</div>
                      <div class="specification-content">
                        <p>Size</p>
                        <p>L</p>
                        <p>Color</p>
                        <p>Gray</p>
                        <p>Inventory</p>
                        <p>15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">SAVE DRAFT</button>
                <button type="button" class="btn btn-primary">PUBLISH</button>
              </div>
            </div>
          </div>
        </div>
        <!-- <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          data-display="static"
        >ADD NEW PRODUCT</button>
        <div class="dropdown-menu dropdown-menu-lg-right">
          <button
            class="dropdown-item"
            type="button"
            v-for="item in titleData"
            :key="item"
            @click="dataHandler(item)"
          >{{item}}</button>
        </div>-->
      </div>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <template v-for="item in titleData">
            <th>{{item}}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productData" :key="item.status[0]+index">
          <td>
            <!-- Product -->
            <div class="product">
              <input type="checkbox" v-model="item.ischecked" />
              <!-- <img :src="$faker().image.imageUrl()" class="img-fluid" />
              <p>{{$faker().commerce.product()}}</p>-->
              <!-- <img :src="item.product.imgUrl" class="img-fluid" /> -->
              <img :src=""https://picsum.photos/70/70?image="+(990+index)" class="img-fluid" />
              <p>{{item.product.p}}</p>
            </div>
          </td>

          <td>
            <!-- Original -->
            <!-- ${{Math.floor(Math.random()*1000+1000)}} -->
            ${{item.original}}
          </td>

          <td>
            <!-- Discount -->
            <!-- ${{Math.floor(Math.random()*500+500)}} -->
            ${{item.discount}}
          </td>

          <td>
            <!-- Size -->
            <div class="size">
              <p class="size-first">L</p>
              <p class="size-second">M</p>
              <p class="size-third">S</p>
            </div>
          </td>

          <td>
            <!-- Color -->
            <div class="color">
              <div class="color-kind">
                <p>Red</p>
                <p>Yellow</p>
              </div>
              <div class="color-kind">
                <p>Red</p>
                <p>Yellow</p>
              </div>
              <div class="color-kind">
                <p>Red</p>
                <p>Yellow</p>
              </div>
            </div>
          </td>

          <td>
            <!-- Inventory庫存 -->
            <div class="inventory">
              <!-- <div class="inventory-num">
                <p>{{Math.floor(Math.random() * 30+20)}}</p>
                <p>{{Math.floor(Math.random() * 30+20)}}</p>
              </div>
              <div class="inventory-num">
                <p>{{Math.floor(Math.random() * 30+20)}}</p>
                <p>{{Math.floor(Math.random() * 30+20)}}</p>
              </div>
              <div class="inventory-num">
                <p>{{Math.floor(Math.random() * 30+20)}}</p>
                <p>{{Math.floor(Math.random() * 30+20)}}</p>
              </div>-->
              <div class="inventory-num">
                <p>{{item.inventory.one}}</p>
                <p>{{item.inventory.two}}</p>
              </div>
              <div class="inventory-num">
                <p>{{item.inventory.three}}</p>
                <p>{{item.inventory.four}}</p>
              </div>
              <div class="inventory-num">
                <p>{{item.inventory.five}}</p>
                <p>{{item.inventory.six}}</p>
              </div>
            </div>
          </td>

          <td>
            <!-- Status -->
            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle"
                :class="[item.status==='published'?'btn-success':'btn-secondary']"
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
const statusItem = ["published", "unpublished"];
var faker = require("faker");
export default {
  data() {
    return {
      titleData: [
        "Product",
        "Original",
        "Discount",
        "Size",
        "Color",
        "Inventory",
        "Status"
      ],
      optionItem: ["Select All", "Unselect All", "published", "unpublished"],
      statusItem: ["published", "unpublished"],
      productData: [
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        },
        {
          product: {
            imgUrl: faker.image.imageUrl(),
            p: faker.commerce.product()
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          inventory: {
            one: Math.floor(Math.random() * 30 + 20),
            two: Math.floor(Math.random() * 30 + 20),
            three: Math.floor(Math.random() * 30 + 20),
            four: Math.floor(Math.random() * 30 + 20),
            five: Math.floor(Math.random() * 30 + 20),
            six: Math.floor(Math.random() * 30 + 20)
          },
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false
        }
      ]
    };
  },
  methods: {
    checkedHandler(val) {
      if (val === "Select All") {
        this.productData.forEach(e => {
          e.ischecked = true;
        });
      } else if (val === "Unselect All") {
        this.productData.forEach(e => {
          e.ischecked = false;
        });
      } else {
        this.productData.forEach(e => {
          e.status === val ? (e.ischecked = true) : (e.ischecked = false);
        });
      }
    },
    statusHandler(val) {
      this.productData.forEach(e => {
        e.ischecked ? (e.status = val) : "";
        e.ischecked = false;
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.price-content,
.specification-content {
  p {
    padding: 15px;
    border-bottom: 1px rgb(165, 162, 162)  solid;
    border-top: 1px rgb(165, 162, 162)  solid;
  }
  p:nth-child(odd) {
    background-color: rgb(235, 230, 230);
    border-left: 1px rgb(165, 162, 162) solid;
    border-right: 1px rgb(165, 162, 162)  solid;
    color: rgba(0, 0, 0, 0.5)
  }
  p:nth-child(even) {
    border-right: 1px rgb(165, 162, 162)  solid;
    margin-right: 10px
  }
}
.specification {
  &-content {
    display: flex;
  }
}
.price {
  &-content {
    display: flex;
  }
}
.add {
  display: flex;
  justify-content: space-between;
}
.upload {
  outline: 1px solid red;
}
.info {
  .describe {
    display: flex;
    flex-direction: column;
    * {
      margin-bottom: 15px;
    }
  }
}
.center {
  width: 95%;
  margin: auto;
}
.product {
  display: flex;
  align-items: center;
  *:nth-child(-n + 2) {
    margin-right: 40px;
  }
  img {
    width: 100px;
  }
}
.inventory {
  display: flex;
  flex-direction: column;
}
.color {
  display: flex;
  flex-direction: column;
}
.size {
  display: flex;
  flex-direction: column;
}
.edit {
  display: flex;
  &-status {
    margin-right: auto;
  }
}

tr td,
tr th {
  text-align: center;
  vertical-align: middle;
}

tr td:first-child {
  width: 300px;
}

tr td:last-child {
  max-width: 100px;
}
</style>
