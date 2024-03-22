function getProjects() {
    const urlGitHub = 'https://api.github.com/users/rabelojp/repos'
    var loadingElement = document.getElementById('loading')


    fetch(urlGitHub, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
        loadingElement.style.display = 'none'
        showProjects(response)
    })
    .catch((e) => {
        console.log(e);
    })
}

function showProjects(data) {
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data [i]['clone_url']
        a.target ='_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data [i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
    
}

getProjects()

const backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", function() {

    const scrollTop = window.pageYOFFset || document.documentElement.scrollTop

    if(scrollTop > 50) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }

})

backToTopBtn.addEventListener("click", function(e)  {

    e.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })

})