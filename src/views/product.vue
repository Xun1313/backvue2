<template>
  <div class="center container-fluid">
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
            v-for="(item, index) in statusItem"
            :key="item + index"
            @click="statusHandler(item)"
          >
            {{ item }}
          </button>
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
        >
          ADD NEW PRODUCT
        </button>

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
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  ADD NEW PRODUCT
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" @click="deleteProduct()"
                    >&times;</span
                  >
                </button>
              </div>
              <div class="modal-body">
                <div class="add">
                  <div class="upload">
                    <div class="upload-drag">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        @change="fileHandler($event)"
                      />
                      <div class="bg">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Drag an image or click here to upload…</p>
                      </div>
                    </div>
                    <div class="upload-pic">
                      <!-- <img :src="'https://picsum.photos/100/100?image=' + (1000 + index)" class="img-fluid" v-for="(item, index) in 5" :key="index" /> -->
                      <img :src="tempProduct.product.imgUrl" />
                    </div>
                  </div>
                  <div class="info">
                    <div class="describe">
                      <div class="describe-title">Product Name</div>
                      <input
                        type="text"
                        class="describe-text1 form-control"
                        v-model="tempProduct.product.name"
                        placeholder="write something"
                      />
                      <!-- <textarea class="describe-text2 form-control" placeholder="write something"></textarea> -->
                    </div>

                    <div class="price">
                      <div class="price-title">Price</div>
                      <div class="price-content">
                        <p>Original</p>
                        <p>
                          <input type="number" v-model="tempProduct.original" />
                        </p>
                        <p>Discount</p>
                        <p>
                          <input type="number" v-model="tempProduct.discount" />
                        </p>
                      </div>
                    </div>

                    <div class="specification">
                      <div class="specification-title">specification</div>
                      <div
                        class="specification-content"
                        v-for="(item, index) in specificationNum"
                        :key="item + index"
                      >
                        <p>Size</p>
                        <p class="size">
                          <select
                            class="size-num"
                            v-model="tempProduct.detail[index].size"
                          >
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                          </select>
                        </p>
                        <p>Color</p>
                        <p>
                          <input
                            type="text"
                            value="Gray"
                            v-model="
                              tempProduct.detail[index].specification[0].color
                            "
                          />
                        </p>
                        <p>Inventory</p>
                        <p>
                          <input
                            type="text"
                            value="15"
                            v-model="
                              tempProduct.detail[index].specification[0]
                                .inventory
                            "
                          />
                        </p>
                      </div>
                    </div>

                    <button class="addnew" @click="addSpecification()">
                      <p>ADD NEW SPECIFICATION</p>
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  @click="addProduct('unpublished')"
                >
                  SAVE DRAFT
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  @click="addProduct('published')"
                >
                  PUBLISH
                </button>
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
          <template v-for="(item, index) in titleData">
            <th :key="item + index">{{ item }}</th>
          </template>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in productData"
          :key="item.product.name + index"
        >
          <td>
            <input type="checkbox" v-model="item.ischecked" />
          </td>
          <td>
            <!-- Product -->
            <div class="product">
              <img :src="item.product.imgUrl" class="img-fluid" />
              <!-- <img :src="'https://picsum.photos/70/70?image=' + (990 + index)" class="img-fluid" /> -->
              <p>{{ item.product.name }}</p>
            </div>
          </td>

          <td>
            <!-- Original -->
            <!-- ${{Math.floor(Math.random()*1000+1000)}} -->
            ${{ item.original | currency }}
          </td>

          <td>
            <!-- Discount -->
            <!-- ${{Math.floor(Math.random()*500+500)}} -->
            ${{ item.discount | currency }}
          </td>

          <td colspan="3">
            <!-- Size -->
            <div class="group">
              <div
                class="group-item"
                v-for="(detailItem, detailIndex) in item.detail"
                :key="detailItem + detailIndex"
              >
                <div class="group-item-size">{{ detailItem.size }}</div>
                <div class="group-item-detail">
                  <div
                    class="group-item-detail-speci"
                    v-for="(speciItem, speciIndex) in detailItem.specification"
                    :key="speciItem + speciIndex"
                  >
                    <div class="color">{{ speciItem.color }}</div>
                    <div class="inventory">{{ speciItem.inventory }}</div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <!-- Status -->
            <div class="btn-group dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                :class="[
                  item.status === 'published' ? 'btn-success' : 'btn-secondary'
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
                  v-for="(status, index) in statusItem"
                  :key="status + index"
                >
                  {{ status }}
                </button>
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
                    <h5 class="text-left">確定刪除此商品?</h5>
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
const statusItem = ['published', 'unpublished']
const faker = require('faker')
import $ from 'jquery'
export default {
  data() {
    return {
      tempProduct: {
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
      },

      specificationNum: 1,
      titleData: [
        'Product List',
        'Product',
        'Original',
        'Discount',
        'Size',
        'Color',
        'Inventory',
        'Status'
      ],
      optionItem: ['Select All', 'Unselect All', 'published', 'unpublished'],
      statusItem: ['published', 'unpublished'],
      productData: [
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //imgUrl: 'https://picsum.photos/70/70?image=990',
            //name: faker.commerce.product(),
            name: 'coat'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1528817786776-ff2e679ffc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'leather jacket'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1506135385820-d15107bf8e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'hoodies'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1553534389-5cf519d70378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'trench coat'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'jacket'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1576208230153-d898a0a89ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'sweater'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1489007360682-2544382e1e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'vest'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1523853341143-c9a94634ddbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'business suit'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'suit'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        },
        {
          product: {
            imgUrl:
              'https://images.unsplash.com/photo-1579812916820-86121cea9004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            //name: faker.commerce.product()
            name: 'blouse'
          },
          original: Math.floor(Math.random() * 1000 + 1000),
          discount: Math.floor(Math.random() * 500 + 500),
          detail: [
            {
              size: 'L',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },
            {
              size: 'M',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            },

            {
              size: 'S',
              specification: [
                {
                  color: 'Red',
                  inventory: Math.floor(Math.random() * 30 + 20)
                },
                {
                  color: 'Yellow',
                  inventory: Math.floor(Math.random() * 30 + 20)
                }
              ]
            }
          ],
          status: statusItem[Math.floor(Math.random() * 2)],
          ischecked: false,
          id: faker.random.uuid()
        }
      ]
    }
  },
  methods: {
    checkedHandler(val) {
      if (val === 'Select All') {
        this.productData.forEach(e => {
          e.ischecked = true
        })
      } else if (val === 'Unselect All') {
        this.productData.forEach(e => {
          e.ischecked = false
        })
      } else {
        this.productData.forEach(e => {
          e.status === val ? (e.ischecked = true) : (e.ischecked = false)
        })
      }
    },
    statusHandler(val) {
      this.productData.forEach(e => {
        e.ischecked ? (e.status = val) : ''
        e.ischecked = false
      })
    },
    addSpecification() {
      this.tempProduct.detail.push({
        size: 'L',
        specification: [
          {
            color: 'Red',
            inventory: '10'
          }
        ]
      })
      this.specificationNum++
    },
    addProduct(statusItem) {
      let all = []
      let set = []
      /* eslint no-unused-vars: 0 */
      let { detail, status, ...rest } = this.tempProduct
      let realProduct = {
        ...rest,
        detail: [],
        status: statusItem,
        id: faker.random.uuid()
      }
      this.tempProduct.detail.pop()
      this.tempProduct.detail.forEach(e => {
        all.push(e.size)
      })
      set = [...new Set(all)]
      set.forEach((e, i) => {
        const size = this.tempProduct.detail.filter(element => {
          return e === element.size
        })
        //所有同size的
        let specification = []
        size.forEach(elements => {
          specification.push(elements.specification[0])
        })
        //同size不同規格

        realProduct.detail.push({
          size: set[i],
          specification
        })
      })
      this.productData.unshift(realProduct)
      const origin = JSON.parse(localStorage.getItem('productData'))
      if (origin) {
        origin.unshift(realProduct)
        localStorage.setItem('productData', JSON.stringify(origin))
      } else {
        localStorage.setItem('productData', JSON.stringify([realProduct]))
      }
      this.resetTemp()
    },
    deleteProduct(id) {
      if (id) {
        this.productData.forEach((e, i) => {
          e.id === id ? this.productData.splice(i, 1) : ''
        })
        const all = JSON.parse(localStorage.getItem('productData'))
        if (all) {
          all.forEach((e, i) => {
            e.id === id ? all.splice(i, 1) : ''
          })
          localStorage.setItem('productData', JSON.stringify(all))
        }
      }
      this.resetTemp()
    },
    fileHandler(e) {
      if (e.currentTarget.value) {
        const Fr = new FileReader()
        Fr.readAsDataURL(e.currentTarget.files[0])
        Fr.onload = FrEvent => {
          this.tempProduct.product.imgUrl = FrEvent.currentTarget.result
        }
      }
    },
    resetTemp() {
      this.specificationNum = 1
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
  },
  mounted() {
    localStorage.getItem('productData')
      ? this.productData.unshift(
          ...JSON.parse(localStorage.getItem('productData'))
        )
      : ''
    $(document).on('hide.bs.modal', '#exampleModalCenter', () => {
      this.resetTemp()
    })
  }
}
</script>

<style lang="scss" scoped>
.group {
  &-item {
    display: flex;
    align-items: center;
    & + & {
      margin-top: 20px;
    }
    &-size {
      width: 18%;
    }
    &-detail {
      width: 82%;
      &-speci {
        display: flex;
        align-items: center;
        .color {
          width: 50%;
        }
        .inventory {
          width: 50%;
        }
      }
    }
  }
}
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
      flex-grow: 1;
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
    img {
      width: 200px;
      height: auto;
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
    width: 100%;
    outline: none;
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
  margin: auto;
  overflow: auto;
}
.product {
  /* display: flex;
  align-items: center; */
  /* *:nth-child(-n + 2) {
    margin-right: 40px;
  } */
  img {
    width: 100px;
  }
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
}

tr td,
tr th {
  text-align: center;
  vertical-align: middle;
}
th {
  //padding: 15px 0;
}
/* tr td:nth-child(n) {
  width: 10%;
} */
tr td:nth-child(1) {
  //width: 20%;
}
/* tr td:nth-child(4) {
  width: 25%;
} */
tr td:nth-child(n + 2) {
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
