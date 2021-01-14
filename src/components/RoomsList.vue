<template>
  <div class="windows-list row center match-height">
    <div class="col-md-3 center">
      <div class="card min-height">
        <rooms-add-room @form-submitted="submitForm"></rooms-add-room>
      </div>
    </div>
    <div class="col-md-4 center">
      <div class="card min-height">
        <h3>List of Rooms</h3>
        <br>
    <rooms-list-item
        v-for="room in rooms"
        :room="room"
        :key="room.id"
        @room-deleted="deleteRoom"
    >
    </rooms-list-item>
      </div>
    </div>
    <div class="col-md-3 center">
      <div class="card min-height">
    <rooms-update @form-submitted="updateName"></rooms-update>
  </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import {API_HOST} from '../config';
import RoomsListItem from './RoomsListItem';
import RoomsAddRoom from './RoomsAddRoom';
import RoomsUpdate from './RoomsUpdate';
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

export default {
  components: {
    RoomsAddRoom,
    RoomsListItem,
    RoomsUpdate
  },
  name: 'RoomsList',
  data: function() {
    return {
      rooms: []
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/rooms`);
    let rooms = response.data;
    this.rooms = rooms;
    Vue.$toast.info('List of Rooms Charged')
  },
  methods: {
    deleteRoom(id) {
      let index = this.rooms.findIndex(room => room.id === id);
      this.rooms.splice(index, 1);
    },
    async updateName(roomData) {
      let response = await axios.put(`${API_HOST}/api/rooms/${roomData.id}/updateName/${roomData.name}`);
      let upRoom = response.data;
      let index = this.rooms.findIndex(room => room.id === upRoom.id);
      this.rooms[index].name = upRoom.name;
      Vue.$toast.info('Name Updated!')
    },
    async submitForm(room) {
      let response = await axios.post(`${API_HOST}/api/rooms`,room);
      let newRoom = response.data;
      this.rooms.push(newRoom);
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

.spec_mrgn30{
  margin-top: 30px;
}

.center {
  margin: auto;
}

.min-height{
  min-height: 350px;
}

</style>
