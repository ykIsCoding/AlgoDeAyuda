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
        <span class="revealText text-h2 font-weight-black text-uppercase text-secondary w-50 ">no soy el remplazo de desarolladores.</span>
        <span class="revealText text-h2 font-weight-black text-uppercase text-secondary w-50">Solo una Herramienta</span>
    </div>
    <div>

    </div>
</div>
</template>