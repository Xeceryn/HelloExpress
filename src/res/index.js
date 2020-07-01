const successGet = (status, values, response, message) => {
    const data = {
        'status': status,
        'message': message,
        'values': values
    }
    response.json(data)
    response.end()
}
const successCreated = (status, response, message) => {
    const data = {
        'status': status,
        'message': message,
    }
    response.json(data)
    response.end()
}
module.exports = {
    successGet,
    successCreated
}