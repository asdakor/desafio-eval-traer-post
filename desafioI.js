let posts = [];
(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        posts = data
    } catch (error) {
        console.log(error)
    }
})();

const postList = document.querySelector('#post-list')
let contador = 0
function getPosts(){
    postList.innerHTML += `<li>${posts[contador].title}</li>
    <p>${posts[contador].body}</p>`
    contador++
}
    
