import { reactive } from 'vue'

const maxStages = 4

export const store = reactive({
  stage: 0,
  nextStage(){
    this.stage = Math.min(maxStages,this.stage+1)
  },
  prevStage(){
    this.stage= Math.max(this.stage - 1,0)
  }
})