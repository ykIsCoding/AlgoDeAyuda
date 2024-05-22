<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import { onMounted } from 'vue'
import { revealText } from '@/utils/animation/textAnimations';
import { router } from '@/utils/routing/routeUtils';

const appStore = useAppStore()
onMounted(() => {
  revealText('.revealText')
})
</script>

<template>
    <div class="d-flex flex-column justify-center ma-15 ga-5">
    <div class="d-flex flex-row justify-start">
      <Button @click="router.push('/')" label="Volver"></Button>
    </div>
    <div class="align-self-start d-flex flex-column ga-5 flex-grow-1 justify-center w-100">
        <span class="text-md-h3 text-h5 font-weight-black text-uppercase text-secondary w-md-50 w-100 revealText">no soy el remplazo de desarolladores.</span>
        <span class="text-md-h3 text-h5 text-primary font-weight-black text-uppercase w-md-50 w-100 revealText">Solo una Herramienta</span>
    </div>
    <div>

    </div>
</div>
</template>