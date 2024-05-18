<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';

const appStore = useAppStore()

</script>

<template>
  <div class="d-flex flex-column h-100 w-100 justify-space-between">
    <div class="d-flex w-100 flex-row justify-end">
      <p class="text-right">
        He ayudado 789 Gente con sus problemas de programacion
      </p>
    </div>
    <div class="align-self-start flex">
    <h1 class="font-weight-black text-uppercase text-secondary text-h2">Algo</h1>
    <br/>
    <h1 class="font-weight-black text-uppercase text-secondary text-h2">De</h1>
    <br/>
    <h1 class="font-weight-black text-uppercase text-secondary text-h2">Ayuda</h1>
    <br>
    <p class="text-left">
      Un assitante de Intelligencia Artificiales para aprender programacion
    </p>
  </div>
  <div class="d-flex justify-end ga-4">
    <Button outlined @click="null" label="Sobre Este"></Button>
    <Button @click="appStore.nextStage()" label="Next"></Button>
  </div>
  
</div>
</template>