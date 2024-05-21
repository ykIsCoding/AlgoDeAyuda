
import axios from 'axios';

async function postPrompt(content){
 
  
    const response =await axios({
        method: 'post',
        url: `http://localhost:5000/gai/chat`,
        data: content
      });
    return response.data??{}
}

export {postPrompt}