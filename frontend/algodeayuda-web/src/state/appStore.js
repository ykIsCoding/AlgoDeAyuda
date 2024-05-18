import { defineStore } from 'pinia'

const maxStages = 3
export const useAppStore = defineStore('formStage', {
    state: () => {
        return {
          stage: 0,
          problemContent:[],
          errorContent:[]
        }
    },
    actions:{
        nextStage(){
            this.stage = Math.min(maxStages,this.stage+1)
        },
        prevStage(){
            this.stage = Math.max(this.stage - 1,0)
        },

    },
    getters:{
        getStage: (state)=>state.stage
    }
})