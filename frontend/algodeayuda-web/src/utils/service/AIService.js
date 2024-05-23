import axios from 'axios';
console.log(process.env)
async function postPrompt(content){
 
  
    const response =await axios({
        method: 'post',
        url: `${process.env.VUE_APP_BACKEND_ENDPOINT}/gai/chat`,
        data: content
      });
    return response.data??{}
}

export {postPrompt}