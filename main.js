let usersWrapper = document.getElementById('users-list');
let modal = document.getElementById('modal');



fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            preloader.style.display = ('none')
        }, 250)
        console.log(data);
        data.forEach(item => {
            usersWrapper.innerHTML += `<li><button class="lel" id="ok" onclick="userData(${item.id})">${item.name}</button></li>`
        });
    })

let btt = document.getElementsByClassName('lel');
const userData = (id) => {
    preloader.style.display = 'block'
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            modal.innerHTML = ` <div class="modal-row">
        <div class="modal-colon">
            <h2>${data.name}</h2>
            <h2>${data.username}</h2>
            <p><b>adress:</b> ${data.address.city},${data.address.street}</p>
        </div>
        <div class="modal-colon">
            <h2>${data.company.name}</h2>
            <a href="mailto:${data.email}">email: ${data.email}</a>
            <a href="tel:${data.phone}">${data.phone}</a>
            <button onclick="closeModal();">Close</button>
        </div>
        </div>`
            // btt.style.background = "purple";
            for (let i = 0; i < 10; i++) {
                btt[i].style.background = "rgb(2,0,36)"
                btt[i].style.background = "linear-gradient(90deg, rgba(2,0,36,0.9120098723082983) 14%, rgba(229,0,255,1) 97%)"
            }
            btt[id - 1].style.background = "rgb(255,0,0)";
            btt[id - 1].style.background = "linear-gradient(90deg, rgba(255,0,0,1) 18%, rgba(2,0,36,0.9120098723082983) 93%)";
            preloader.style.display = 'none'
        })
}

console.log(btt);

btt.onclick = function () {
    console.log("Hello world");
    // btt[id].style.background = "rgb(2,0,36)"
    // btt[id].style.background = "linear-gradient(90deg, rgba(2,0,36,0.9120098723082983) 14%, rgba(255,0,0,1) 97%)"
}



const closeModal = () => {
    modal.innerHTML = ''
}