function formatResponse(response){
    response = response.split("\n").join('')
    const allRegExp = /(?=.*)([^*]+)/gimu
    console.log(response.match(allRegExp))
    return response.match(allRegExp)
}

export {formatResponse}