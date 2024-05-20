import {ref} from 'vue'

var status = ref(false)
var message = ref('')
var messageHeader = ref('')
function updateStatus(msg,msgHeader) {
  status.value = true
  message.value = msg
  messageHeader.value = msgHeader
}

function closeToast(){
    status.value = false
}

export default {status,message,messageHeader,updateStatus,closeToast}