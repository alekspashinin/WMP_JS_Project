<template>
  <form @submit="submitForm" method="post">
    <h3>Create Rooms</h3>
    <label for="room-id">New Room Name :</label>
    <input class="select2 w-100" id="room-id"  type="text" name="room-id" v-model="roomId">
    <br>
    <label for="room-id">Floor :</label>
    <select class="select2 w-100" id="floor-id" name="floor-id" v-model="floorId">
      <option value="1">Floor 1</option>
      <option value="2">Floor 2</option>
      <option value="3">Floor 3</option>
    </select>
    <br>
    <label for="target-temperature">Current Temperature :</label>
    <input class="select2 w-100 text-center" type="text" id="current-temperature" name="current-temperature" v-model="currentTemperature"><br>
    <label for="target-temperature">Target Temperature :</label>
    <input class="select2 w-100 text-center" type="text" id="target-temperature" name="target-temperature" v-model="targetTemperature"><br>
    <br>
    <input class="menu-btn input-btn center" type="submit" value="Create Room">
  </form>
</template>

<script>
import Vue from 'vue'
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);

export default {
  name: 'RoomsAddRoom',
  props: ['room'],
  data: function() {
    return {
      roomId: '',
      floorId: '',
      currentTemperature: '',
      targetTemperature: ''
    }
  },
  methods: {
    openModal() {
      this.$refs.RoomsList.create();
    },
    submitForm: function(e) {
      e.preventDefault();
      let room = {  "id": null,
                    "name": this.roomId,
                    "currentTemperature": this.currentTemperature,
                    "targetTemperature": this.targetTemperature,
                    "floor": this.floorId
      };
      console.log(room);
      this.$emit('form-submitted', room);
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