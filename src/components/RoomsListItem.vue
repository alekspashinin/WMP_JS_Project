<template>
  <div class="room border border-secondary rounded p-2 mb-2" :class="{expanded: isExpanded}">
    <div class="top-row d-flex" @click="toggleExpand">
      <div class="room-name text-muted small-pad-right">Floor {{room.floor}}</div>
      <div class="room-name fw-bold pe-3">{{room.name}}</div>
      <div class="room-name text-muted pe-3">Cur Temp : {{room.currentTemperature}}</div>
      <div class="room-name text-muted">Tar Temp : {{room.targetTemperature}}</div>

      <div class="expand-button ms-auto">
        {{ isExpanded ? '&#9660;' : '&#9658;' }}
      </div>
    </div>
    <template v-if="isExpanded">
      <hr/>
      <div class="details d-flex">
        <button @click="deleteRoom" type="button" class="btn btn-danger">Delete room</button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import {API_HOST} from '../config';

export default {
  name: 'RoomsListItem',
  props: ['room'],
  data: function() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    async deleteRoom() {
      await axios.delete(`${API_HOST}/api/rooms/${this.room.id}`);
      this.$emit('room-deleted', this.room.id);
    }
  }
}
</script>

<style lang="scss" scoped>

.open-status {
  .icon {
    position: relative;
  }

  &.open {
    color: #198754;
    .icon {
      font-size: 12px;
      top: -3px;
    }
  }

  &.closed {
    color: #dc3545;
  }
}

.room {
  .top-row {
    cursor: pointer;
  }
}

.small-pad-right {
  padding-right: 30px;
}
</style>
