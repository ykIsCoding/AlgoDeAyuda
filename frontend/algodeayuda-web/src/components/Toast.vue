<template>
    <div class="text-center">
      <v-snackbar
        v-model="status"
        vertical
      >
        <div class="text-subtitle-1 pb-2">This is a snackbar message</div>
  
        <p>{{ message }}</p>
  
        <template v-slot:actions>
          <v-btn
            color="indigo"
            variant="text"
            @click="closeToast"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
<script setup>
import { inject,ref,provide} from 'vue'
const {status,message,closeToast} = inject('showToast')
</script>