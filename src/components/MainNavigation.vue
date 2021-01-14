<template>
  <nav class="navbar navbar-dark bg-dark">
  <ul class="nav nav-tabs nav-spec center">
    <li class="nav-item col-md-4 center">
      <a class="nav-link menu-btn center" @click="goWindowsPart"  v-bind:class="{active: windowsActive}" href="#">Windows</a>
    </li>
    <li class="nav-item col-md-4 center">
      <a class="nav-link menu-btn center" @click="goRoomsPart" v-bind:class="{active: roomsActive}" href="#" tabindex="-1">Rooms</a>
    </li>
  </ul>
  </nav>
</template>


<script>
export default {
  name: 'MainNavigation',
  data: function() {
    return { windowsActive: true, roomsActive: false}
  },
  methods: {
    goWindowsPart() {
      this.windowsActive=true;
      this.roomsActive=false;
      this.$emit("show-menu","windows");
    },
    goRoomsPart() {
      this.roomsActive=true;
      this.windowsActive=false;
      this.$emit("show-menu","rooms");
    }
  }
}
</script>

<style lang="scss" scoped>

.room {
  .top-row {
    cursor: pointer;
  }
}

.center {
  margin: auto;
}

.menu-btn:active{
  background: linear-gradient(118deg, #7367F0, rgba(115, 103, 240, 0.7));
  box-shadow: 0 0 6px 1px rgba(115, 103, 240, 0.6);
  color: #FFFFFF;
  border-radius: 4px;
  border: 0px;
}

.menu-btn{
  background: linear-gradient(118deg, #7367F0, rgba(115, 103, 240, 0.7));
  color: #989898;
  border-radius: 4px;
  border: 0px;
}

.menu-btn:hover{
  box-shadow: 0 0 6px 1px rgba(115, 103, 240, 0.6);
  color: #FFFFFF;
  border-radius: 4px;
  border: 0px;
}

.nav-spec{
  width: 100%;
  border-bottom: 0px solid #dee2e6;
}

.navbar{
  background-color: #283045!important;
}

.nav-tabs .nav-link.active {
  color: #ffffff!important;
}
</style>