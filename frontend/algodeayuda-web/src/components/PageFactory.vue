<script setup>
import { useAppStore } from '@/state/appStore';
import StageOnePage from '@/pages/StageOnePage.vue';
import StageTwoPage from '@/pages/StageTwoPage.vue';
import StageThreePage from '@/pages/StageThreePage.vue';
import StageFourPage from '@/pages/StageFourPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue'

const appStore = useAppStore()
const generateContent = (stage) =>{
    switch(stage){
        case 0: return StageOnePage
        case 1: return StageTwoPage
        case 2: return StageThreePage
        case 3: return StageFourPage
        default: NotFoundPage
    }
        
}

appStore.$subscribe((mutation, state) => {
    generateContent(state.stage)
})
</script>
<template>
    <component :is="generateContent(appStore.getStage)" />
</template>