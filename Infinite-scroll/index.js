const container = document.getElementById("container")
const loading = document.querySelector(".loading")

getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()
getUsersList()

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    console.log({scrollTop, scrollHeight, clientHeight})

    if(clientHeight + scrollTop >= scrollHeight - 5) {
        showLoadingIndicator()
    }
})

const showLoadingIndicator = () => {
    loading.classList.add('show')
    setTimeout(getUsersList, 1000)
}

async function getUsersList() {
    const users = await fetch("https://randomuser.me/api")
    const userData = await users.json()

    const data = {user: userData.results[0]}

    showData(data)
}

const showData = (data) => {
    const username = document.createElement('h4')
    username.classList.add('userName')
    username.innerHTML = `<h4> ${data.user.name.first} ${data.user.name.last} </h4>`

    container.appendChild(username)
    loading.classList.remove('show')
}