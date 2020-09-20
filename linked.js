// find all the users that have not been linked

const { allUsers, linked: linkedUsers } = require('./users')

unlinkedUsers = (users, linked) => {
    return users.filter(user => {
        return !linked.some(l => user.id === l.id)
    })
}

const ulUsers = unlinkedUsers(allUsers, linkedUsers)

console.log(ulUsers)