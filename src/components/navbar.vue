<template>
  <nav>
    <div class="navbars container-fluid">
      <div class="navbar-title">
        <i class="fas fa-blog"></i>
        HARPER
      </div>
      <div class="navbar-link">
        <router-link
          to="/"
          @click.native="bottom_line = 'HOME'"
          :class="{ bottom_line: bottom_line === 'HOME' }"
          >HOME</router-link
        >
        <router-link
          to="/order"
          @click.native="bottom_line = 'ORDER'"
          :class="{ bottom_line: bottom_line === 'ORDER' }"
          >ORDER</router-link
        >
        <router-link
          to="/product"
          @click.native="bottom_line = 'PRODUCT'"
          :class="{ bottom_line: bottom_line === 'PRODUCT' }"
          >PRODUCT</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      bottom_line: 'HOME'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_grid.scss';
.bottom_line {
  border-bottom: 3px white solid;
}

nav {
  width: 100%;
  background-color: rgb(41, 32, 32);
  .navbars {
    color: white;
    display: flex;
    align-items: center;
    .navbar-title {
      i {
        margin-right: 5px;
      }
    }
    .navbar-link {
      margin-left: 20px;
      color: white;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      a {
        text-decoration: none;
        color: $text-color;
        padding: 20px 5px;
        @include lapTop {
          padding: 20px;
        }
        transition: all 0.5s;
      }
      a:hover {
        background-color: lighten(rgb(41, 32, 32), 10%);
      }
      a:active {
        background-color: darken(rgb(41, 32, 32), 10%);
      }
    }
  }
}
</style>
