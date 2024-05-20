import { postPrompt } from '@/utils/service/AIService'
import { defineStore } from 'pinia'
const maxStages = 3
export const useAppStore = defineStore('formStage', {
    state: () => {
        return {
        resetState:true,
          stage: 0,
          problemContent:'',
          errorContent:'',
          response:''
        }
    },
    actions:{
        nextStage(){
            this.resetState = false
            this.stage = (this.stage+1)%(maxStages+1)
            
        },
        prevStage(){
            this.stage = Math.max(this.stage - 1,0)
        },
        reset(){
            this.resetState=true
            this.stage=0
            this.problemContent=[],
            this.errorContent=[],
            this.response = []
        },
        async query(){
            try{
            let contentObj = {
                problem:this.getProblemContent,
                errorFaced:this.getErrorContent
              }
            
            this.response = await postPrompt(contentObj)
            return true
            }catch(e){
                console.log(e)
                return false
            }
        }

    },
    getters:{
        getStage: (state)=>state.stage,
        getProblemContent: (state)=>state.problemContent,
        getErrorContent: (state)=>state.errorContent,
        getResponse:(state)=>state.response
    },
    
})