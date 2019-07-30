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
                  <div class="upload">
                    <div class="upload-drag">
                      <input type="file" name="file" id="file" />
                      <div class="bg">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Drag an image or click here to upload…</p>
                      </div>
                    </div>
                    <div class="upload-pic">
                      <img :src="'https://picsum.photos/100/100?image='+(1000+index)" class="img-fluid" v-for="(item, index) in 5" :key="index"/>
                    </div>
                  </div>
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
                          <input type="text" value="1000" />
                          <!-- {{item.original}} -->
                        </p>
                        <p>Discount</p>
                        <p>
                          <input type="text" value="500" />
                          <!-- {{item.discount}} -->
                        </p>
                      </div>
                    </div>

                    <div class="specification">
                      <div class="specification-title">specification</div>
                      <div
                        class="specification-content"
                        v-for="(item, index) in specificationNum"
                        :key="index"
                      >
                        <p>Size</p>
                        <p class="size">
                          <select class="size-num">
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                          </select>
                        </p>
                        <p>Color</p>
                        <p>
                          <input type="text" value="Gray" />
                        </p>
                        <p>Inventory</p>
                        <p>
                          <input type="text" value="15" />
                        </p>
                      </div>
                    </div>

                    <div class="addnew">
                      <p @click="specificationNum++">ADD NEW SPECIFICATION</p>
                      <i class="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">SAVE DRAFT</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">PUBLISH</button>
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
              <img :src='"https://picsum.photos/70/70?image="+(990+index)' class="img-fluid" />
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
            <div class="btn-group dropdown">
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
      specificationNum: 1,
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
  },
  mounted() {
    /* const bg = document.querySelector(".bg");
    bg.addEventListener("dragover", function(e) {
      e.stopPropagation();
      e.preventDefault();
    });
    bg.addEventListener("dragenter", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.currentTarget);
      e.currentTarget.classList.add("uploadStyle");
    });
    bg.addEventListener("dragleave", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.currentTarget);
      //this.className='upload-bg'
      e.currentTarget.classList.remove("uploadStyle");
    });
    bg.addEventListener("drag", function(e) {
      e.stopPropagation();
      e.preventDefault();
    }); */
  }
};
</script>


<style lang="scss" scoped>
.price-content,
.specification-content {
  p {
    width: 130px;
    text-align: center;
    margin: 0;
    //padding: 10px;
    font-size: 16px;
    border-bottom: 1px rgb(165, 162, 162) solid;
    border-top: 1px rgb(165, 162, 162) solid;
  }
  p:nth-child(odd) {
    padding: 10px;
    background-color: rgb(235, 230, 230);
    border-left: 1px rgb(165, 162, 162) solid;
    border-right: 1px rgb(165, 162, 162) solid;
    color: rgba(0, 0, 0, 0.5);
  }
  p:nth-child(even) {
    border-right: 1px rgb(165, 162, 162) solid;
    margin-right: 10px;
  }
}
.specification {
  margin-bottom: 20px;
  &-content {
    display: flex;
    margin-bottom: 5px;
    .size {
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      &-num {
        padding: 10px;
        outline: none;
        border: none;
      }
    }
  }
}
p {
  input {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    padding: 10px;
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
  width: 50%;
  margin: 0 20px;
  text-align: center;
  margin: 0px 0 45px 0;
  &-drag {
    background-color: #ebebeb;
    margin-bottom: 20px;
    #file {
      display: block;
      width: 100%;
      padding: 50px 0;
      opacity: 0;
      cursor: pointer;
    }
    .bg {
      margin-top: -30%;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        color: gray;
        font-size: 30px;
      }
      p {
        font-size: 16px;
        color: gray;
        margin: 0;
      }
    }
  }
  &-pic {
    display: flex;
    flex-wrap: wrap;
    img {
      width: auto;
      height: auto;
      margin: 0 5px 5px 0;
    }
  }
}
.info {
  width: 50%;
  margin: 0 20px;
  .describe {
    display: flex;
    flex-direction: column;
    * {
      margin-bottom: 15px;
    }
  }
  .addnew {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    p {
      margin: 0 5px 0 0;
    }
  }
  .addnew:hover {
    background-color: lighten(black, 10%);
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
  margin: 20px 0;
  &-option{
    margin-right: 15px;
  }
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
  max-width: 130px;
}
.dropdown-item:active {
  background-color: #6c757d;
  outline: none;
}
.modal-dialog-centered {
  justify-content: center;
  .modal-content {
    width: auto;
  }
}
.uploadStyle {
  border: 3px black dashed;
}
</style>
