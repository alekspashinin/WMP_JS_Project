<template>
  <form @submit="submitForm" method="post">
    <h3>Rename Rooms</h3>
    <label for="room-id">Room :</label>

    <select class="select2 w-100" id="room-id" name="room-id" v-model="roomId">
      <option v-for="room in rooms" :value="room.id">{{ room.name }}</option>
    </select>
    <br>

    <!-- <label for="room-id">Floor :</label>
    <select class="select2 w-100" id="floor-id" name="floor-id" v-model="floorId">
      <option value="1">Floor 1</option>
      <option value="2">Floor 2</option>
      <option value="3">Floor 3</option>
    </select>
    <br> -->
    <label for="room-name">New Room Name :</label>
    <input class="select2 w-100 text-center" type="text" id="room-name" name="room-name" v-model="roomName"><br>
    <br>
    <br>
    <input class="menu-btn input-btn center" type="submit" value="Rename Room">
  </form>
</template>

<script>
import axios from 'axios';
import {API_HOST} from '../config';
import Vue from 'vue'
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);

export default {
  name: 'RoomsUpdate',
  props: ['room'],
  data: function() {
    return {
      rooms: [],
      roomId: '',
      floorId: '',
      roomName: ''
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/rooms`);
    let rooms = response.data;
    this.rooms = rooms;
    //Vue.$toast.info('List of Rooms Charged')
  },
  methods: {
    openModal() {
      this.$refs.RoomsList.create();
    },
    submitForm: function(e) {
      e.preventDefault();
      let roomData = {  "id": this.roomId,
                        "name": this.roomName};
      //console.log(roomData)
      this.$emit('form-submitted', roomData);
      let index = this.rooms.findIndex(room => room.id === this.roomId);
      this.rooms[index].name = roomData.name;
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
  border: 0;
}

.menu-btn{
  background: linear-gradient(118deg, #7367F0, rgba(115, 103, 240, 0.7));
  color: #989898;
  border-radius: 4px;
  border: 0;
}

.menu-btn:hover{
  box-shadow: 0 0 6px 1px rgba(115, 103, 240, 0.6);
  color: #FFFFFF;
  border-radius: 4px;
  border: 0;
}

.input-btn{
  padding: .5rem 1rem;
  text-decoration: none;
}

</style>