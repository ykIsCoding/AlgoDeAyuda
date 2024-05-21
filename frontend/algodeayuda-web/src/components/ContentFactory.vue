<script setup>
import {ref} from 'vue'
var breaking = ref(false)
const generateSectionContent = (im) =>{
    const linkRegExp = /.*\[(.+)\]\((.+)\).*/im
    const headingRegExp = /\<header\>(.+)(\<\/header\>)/im
    const subHeadingRegExp = /\<subheader\>(.+)(\<\/subheader\>)/im
    const textRegExp = /\<text\>(.+)(\<\/text\>)/im
    const allRegExp = /(?=.*)([^*]+)/imu
    let trimmedItem =im.toString().trim() //allRegExp.test(im)?im.match(allRegExp)[1]:''
    if(trimmedItem=='<break/>'){
        breaking.value = true
        return
    }
    if(trimmedItem.match(headingRegExp)){
        
        return {
            class:'revealText text-h4 rounded-sm font-weight-black text-uppercase text-primary w-50',
            content:trimmedItem.match(headingRegExp)[1]
        }
        
    }
    if(trimmedItem.match(subHeadingRegExp)){
        return {
            class:'revealText font-weight-black text-h6 text-primary w-75',
            content:trimmedItem.match(subHeadingRegExp)[1]
        }
       
    }

    if(trimmedItem.match(linkRegExp)){
            return {
            class:'revealText',
            content:trimmedItem.match(linkRegExp)[1],
            link:trimmedItem.match(linkRegExp)[2]
        
        }
        
    }

    if(trimmedItem.match(textRegExp)){
        return {
            class:'revealText font-weight-medium text-h6 text-primary w-75',
            content:trimmedItem.match(textRegExp)[1],
        }
    }

    return {
            class:'revealText text-body-1 font-weight-bold text-primary w-75',
            content:trimmedItem
        }
        
}



const props = defineProps(['item'])

</script>
<template>
    <v-divider v-if="breaking" class="border-opacity-75" :thickness="2" color="success"></v-divider>
    <component v-if="!generateSectionContent(props.item).link" is="div" :class="generateSectionContent(props.item).class">
        {{ generateSectionContent(props.item).content?.trim() }}
    </component>
    <a v-if="generateSectionContent(props.item).link??''" :href="generateSectionContent(props.item).link?.trim()">{{ generateSectionContent(props.item).content.trim() }}</a>
</template>