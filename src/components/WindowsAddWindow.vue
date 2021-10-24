<template>
  <form @submit="submitForm" method="post">
    <h3>Create Windows</h3>
    <label for="window-id">New Window Name :</label>
    <input class="select2 w-100 text-center" type="text" id="window-id" name="window-id" v-model="windowId"><br>
    <label for="window-status">Status :</label>
    <select class="select2 w-100" id="window-status" name="window-status" v-model="windowStatus">
      <option value="OPEN">Open</option>
      <option value="CLOSED">Closed</option>
    </select>
    <br>
    <label for="room-id">Room :</label>
    <select class="select2 w-100" id="room-id" name="room-id" v-model="roomId">
      <option v-for="room in roomsx" :value="room.id">{{ room.name }}</option>
    </select>
    <br>
    <br>
    <input class="menu-btn input-btn center" type="submit" value="Create Window">
  </form>
</template>

<script>
import axios from 'axios';
import {API_HOST} from '../config';
import Vue from 'vue'
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);

export default {
  name: 'WindowsAddWindow',
  data: function() {
    return {
      roomsx: [],
      windowId: '',
      windowStatus: '',
      roomId: ''
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/rooms`);
    let roomsx = response.data;
    this.roomsx = roomsx;
  },
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      let window = { "id": null,
                  "name": this.windowId,
                  "windowStatus": this.windowStatus,
                  "roomId": this.roomId
      };
      console.log(window)
      //this.$emit('form-submitted', window);
      if(this.$emit('form-submitted', window)) {
        Vue.$toast.success('Window Created');
      }
      else{
        Vue.$toast.error('Error Creation of Window');
      }
    },
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