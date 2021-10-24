<template>
  <form @submit="submitForm"method="post">
    <h3>Rename Windows</h3>
    <label for="window-id">Window :</label>
    <select class="select2 w-100" id="window-id" name="window-id" v-model="windowId">
      <option v-for="window in windowsx" :value="window.id">{{ window.name }}</option>
    </select>
    <br>

    <!-- <label for="room-id">Room :</label>
    <select class="select2 w-100" id="window-id" name="window-id" v-model="roomId">
      <option value="1">Room 1</option>
      <option value="2">Room 2</option>
      <option value="3">Room 3</option>
    </select>
    <br> -->
    <label for="window-new-name">New Name :</label>
    <input class="select2 w-100" id="window-new-name" type="text" name="window-new-name" v-model="windowNewName">
    <br>
    <br>
    <input class="menu-btn input-btn center" type="submit" value="Rename Window">
  </form>
</template>

<script>
import axios from 'axios';
import {API_HOST} from '../config';
import Vue from 'vue'
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);

export default {
  name: 'WindowsUpdate',
  data: function() {
    return {
      windowsx: [],
      windowId: '',
      roomId: '',
      windowNewName: ''
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/windows`);
    let windowsx = response.data;
    this.windowsx = windowsx;
  },
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      let winData = {   "id": this.windowId,
                        "name": this.windowNewName};
      this.$emit('form-submitted', winData);
      let index = this.windowsx.findIndex(window => window.id === this.windowId);
      this.windowsx[index].name = winData.name;
    },
    async UpdateList(){
      let response = await axios.get(`${API_HOST}/api/windows`);
      let windowsx = response.data;
      this.windowsx = windowsx;
    }
  }
}
</script>

<style lang="scss" scoped>

.select2{
  background: #283046;
  border: 1px solid #3B4253;
  color: #B4B7BD;
  border-radius: 4px;
  min-height: 2.714rem;
  padding: 5px;
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

.input-btn{
  padding: .5rem 1rem;
  text-decoration: none;
}

</style>