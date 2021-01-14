<template>
  <div id="app">
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    >
    </vue-particles>
    <div class="spec_pdng60top"></div>
    <header>
      <div class="title">{{title}}</div>
    </header>
    <div class="spec_mrgn60top"></div>
    <section class="main-content col-6 mx-auto">
      <main-navigation @show-menu="showMenu"></main-navigation>
    </section>
    <div class="spec_mrgn60top"></div>
      <section id="html-headings-default" class="row d-flex flex-column h-100">
      <windows-list v-if="display ==='windows'"></windows-list>
      <rooms-list v-if="display ==='rooms'"></rooms-list>
        <div class="spec_mrgn60top"></div>
      </section>
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';
import WindowsList from './components/WindowsList.vue';
import RoomsList from './components/RoomsList.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
    WindowsList,
    RoomsList
  },
  data: function() {
    return {
      title: 'WMP JS Project',
      display: "windows"
    }
  },
  methods: {
    showMenu(choice) {
      this.display=choice;
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Montserrat', Helvetica, Arial, serif;
  font-size: 1rem;
  font-weight: 400!important;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d2d6;
  background-color: #161D31;
}

#particles-js {
  height: 100vh;
  position:absolute;
  z-index: 0;
}

.card{
  background-color: #283045!important;
}

.spec_mrgn60top{
  margin-top: 60px;
}

.spec_pdng60top{
  padding-top: 60px;
}

.spec_pdng60bot{
  padding-bottom: 60px;
}

.spec_mrgn30{
  margin-top: 30px;
}

.center {
  margin: auto;
}

.navbar{
  border-radius: 4px;
}

</style>
