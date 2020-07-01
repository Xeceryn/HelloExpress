const notFound = (id) => {
    return `Sorry ${id} not found.`
}
const found = (id) => {
    return `Data ${id} founded.`
}
const success = 'Success'
const created = (id) => {
    return `Account Success created with id: ${id}.`
}
const updated = (id) => {
    return `${id} Success updated.`
}
const deleted = (id) => {
    return `${id} Success deleted.`
}
module.exports = {
    notFound,
    found,
    success,
    created,
    updated,
    deleted
}