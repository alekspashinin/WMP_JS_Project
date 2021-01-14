<template>
  <div class="windows-list row center match-height">
    <div class="col-md-3 center">
      <div class="card min-height">
        <windows-add-window @form-submitted="submitForm"></windows-add-window>
      </div>
    </div>
    <div class="col-md-4 center">
      <div class="card min-height">
        <h3>List of Windows</h3>
        <br>
    <windows-list-item
        v-for="window in windows"
        :window="window"
        :key="'999'+ window.id"
        @window-updated="updateWindow"
    >
    </windows-list-item>
      </div>
    </div>
    <div class="col-md-3 center">
      <div class="card min-height">
    <windows-update @form-submitted="updateName"></windows-update>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import {API_HOST} from '../config';
import WindowsListItem from './WindowsListItem';
import WindowsUpdate from './WindowsUpdate';
import WindowsAddWindow from './WindowsAddWindow';
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);



export default {
  components: {
    WindowsAddWindow,
    WindowsListItem,
    WindowsUpdate
  },
  name: 'WindowsList',
  data: function() {
    return {
      windows: []
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/windows`);
    let windows = response.data;
    this.windows = windows;
    Vue.$toast.info('List of Windows Charged');
  },
  methods: {
    updateWindow(newWindow) {
      let index = this.windows.findIndex(window => window.id === newWindow.id);
      if (newWindow === '') {
        this.windows.splice(index, 1);
      } else {
        this.windows.splice(index, 1, newWindow);
      }
    },
    async updateName(winData) {
      let response = await axios.put(`${API_HOST}/api/windows/${winData.id}/updateName/${winData.name}`);
      let upWin = response.data;
      let index = this.windows.findIndex(window => window.id === upWin.id);
      this.windows[index].name = upWin.name;
      Vue.$toast.info('Name Updated!')
    },
    async submitForm(window) {
      let response = await axios.post(`${API_HOST}/api/windows`,window);
      let newWindow = response.data;
      this.windows.push(newWindow);
      console.log(newWindow)
      // eslint-disable-next-line no-empty
      if(newWindow.id) {
        Vue.$toast.success('Success!')
      }
      else{
        Vue.$toast.error('Error!');
      }
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

.card{
  font-family: 'Montserrat', Helvetica, Arial, serif;
  font-size: 1rem;
  font-weight: 400!important;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d2d6;
  background-color: #283045!important;
  padding: 15px;
}
body{
  height: 100%;
}

.spec_mrgn60top{
  margin-top: 60px;
}

.min-height{
  min-height: 350px;
}

.spec_mrgn30{
  margin-top: 30px;
}

.center {
  margin: auto;
}

</style>
