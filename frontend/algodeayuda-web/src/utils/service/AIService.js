
import axios from 'axios';

async function postPrompt(content){
  console.log('content',content)
  console.log(`http://localhost:5000/oai/chat`)
    const response =await axios({
        method: 'post',
        url: `http://localhost:5000/gai/chat`,
        data: content
      });
    return response.data??''
}

export {postPrompt}