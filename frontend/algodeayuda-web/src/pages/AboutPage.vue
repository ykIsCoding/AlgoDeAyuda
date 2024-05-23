<script setup>
import Button from '@/components/Button.vue';
import { useAppStore } from '@/state/appStore';
import { onMounted } from 'vue'
import { revealText, fadeInText} from '@/utils/animation/textAnimations';
import { router } from '@/utils/routing/routeUtils';
import AccordionPanel from '@/components/AccordionPanel'

const appStore = useAppStore()
onMounted(() => {
  revealText('.revealText')
  fadeInText('.fadeInText')
})

const questions = [
  {
    title:'Cuales los datos desde usarios que recogido por la aplicaion?',
    answer:'Solo el recuento de usarios y cualquier informacion enviado por el usario'
  },
  {
    title:'Cuales los modelos de Intelligencia Artificiales en esta aplicacion?',
    answer:'GPT de OpenAI y Gemeni de Google'
  },
]
</script>

<template>
    <div class="d-flex flex-column justify-center ma-5 ma-sm-15 ga-5">
    <div class="d-flex flex-row justify-start">
      <Button @click="router.push('/')" label="Volver"></Button>
    </div>
    <div class="align-self-start d-flex flex-column flex-grow-1 justify-center w-100">
        <span class="text-md-h3 text-h4 font-weight-black text-uppercase text-secondary w-md-50 w-100 revealText"><span class="text-uppercase">no soy el remplazo de desarolladores.</span></span>
        <span class="text-md-h3 text-h4 text-primary font-weight-black text-uppercase w-md-50 w-100 revealText"><span class="text-uppercase">Solo una Herramienta</span></span>
      </div>
    <div>
      <p class="text-justify fadeInText font-weight-medium mt-5 w-md-75 w-100 text-md-h6 text-sm-subtitle-1">
        Con el avance de la IA, existe un gran potencial para ayudarnos a aprender programación y cualquier cosa relacionada con la tecnología mucho mejor, más fácil y más rápido.
        Esto siempre que se introduzcan las entradas correctas en el modelo de IA. El modelo de IA puede explicarnos conceptos e información complejos y dirigirnos
        a los recursos pertinentes para enriquecer el aprendizaje.
        <br/><br/>Sin embargo, debemos tener en cuenta que la inteligencia artificial aún no ha alcanzado un nivel que pueda reemplazar a los humanos, y mucho menos el proceso de aprendizaje.
        Por lo tanto, esta aplicación fue desarrollada para ser utilizada como herramienta.
      </p>
    </div>
    <div>
      <span class="text-md-h3 text-h4 text-primary font-weight-black text-uppercase w-md-50 w-100 revealText"><span class="text-uppercase">prestaciónes</span></span>
      <div class="mt-5 d-flex flex-column flex-md-row w-75 ga-5">
        <p class="text-justify fadeInText font-weight-medium mt-5 w-md-75 w-100 text-md-h6 text-sm-subtitle-1">1. diseño responsivo</p>
        
        <p class="text-justify fadeInText font-weight-medium mt-5 w-md-75 w-100 text-md-h6 text-sm-subtitle-1">2. rapida y intelligente</p>
        
        <p class="text-justify fadeInText font-weight-medium mt-5 w-md-75 w-100 text-md-h6 text-sm-subtitle-1">3. sencilla y facil de usar</p>
      </div>
    </div>
    <div class="d-flex flex-column">
      <span class="text-md-h3 text-h4 text-primary font-weight-black text-uppercase w-md-50 w-100 revealText"><span class="text-uppercase">preguntas frecuentes</span></span>
      <div class="mt-5">
        <AccordionPanel :content="questions"/>
      </div>
    </div>
    <div class="d-flex flex-column">
      <span class="text-md-h3 text-h4 text-primary font-weight-black text-uppercase w-md-50 w-100 revealText"><span class="text-uppercase">
comentarios y sugerencias</span></span>
<div>
  <p class="text-justify fadeInText font-weight-medium mt-5 w-md-75 w-100 text-md-h6 text-sm-subtitle-1">
    Para cualquier sugerencias o comentarios, por favor contactame por Linkedin <a href="https://www.linkedin.com/in/yong-kang-lim-a4447423b/">aqui</a>.      
  </p>
</div>
    </div>
    <div>

    </div>
</div>
</template>