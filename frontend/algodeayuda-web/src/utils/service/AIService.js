import axios from 'axios';

async function postPrompt(content){
 
  
    const response =await axios({
        method: 'post',
        url: `${import.meta.env.VITE_BACKEND_ENDPOINT}/gai/chat`,
        data: content
      });
    return response.data??{}
}

export {postPrompt}