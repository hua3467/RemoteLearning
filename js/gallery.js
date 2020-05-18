const dataURL = 'https://raw.githubusercontent.com/hua3467/RemoteLearning/master/objects/data.json';
const uiux_list = document.querySelector('#uiuxList');
const classes = {
    card: 'card',
    active: 'active'
};

let workList = '';

fetch(dataURL)
.then(response => {
    return response.json();
})
.then( data => {
    data.uiux.forEach( info => {
        workList += `<li class=${classes.card}>
                    
                    <div class="cover-image" 
                        id=${info.id} 
                        onclick="openPage('${info.url}')"
                        onmouseenter="mouseIn(this)" 
                        onmouseleave="mouseOut(this)" 
                        style = "background-image: url(${info.images.cover}); 
                        background-size: cover; 
                        filter: grayscale(0%);">
                        <h3>View Project</h3>
                    </div>
                    <div class="links">
                        <p>Try Prototypes:</p>
                        <a 
                        href=${info.prototype_web} 
                        class="btn" 
                        target="_blank"
                        ${info.prototype_web==="#"?"style='visibility: hidden'":""}
                        >Website</a>
                        <a href=${info.prototype_mobile} class="btn" target="_blank">Mobile App</a>
                    </div>
                </li>\n`;
    })
    uiux_list.innerHTML = workList;

})


// update nav status
const navItems = document.querySelectorAll('nav a');

const uiux = document.querySelector('#uiux');
const graphic = document.querySelector('#graphic');
const drawing = document.querySelector('#drawing');

navItems.forEach((link) => {
    activeTab(link);
})

window.addEventListener( 'scroll', () => {
    
    if(window.scrollY >= uiux.offsetTop - 100 && window.scrollY < graphic.offsetTop - 160){
        
        navItems.forEach((item) => {
            item.classList.remove('active-nav');
        });
        navItems[0].classList.add('active-nav');

    } else if (window.scrollY >= graphic.offsetTop - 160 && window.scrollY < drawing.offsetTop - 160){
        navItems.forEach((item) => {
            item.classList.remove('active-nav');
        });
        navItems[1].classList.add('active-nav');

    } else if (window.scrollY >= drawing.offsetTop - 160){
        navItems.forEach((item) => {
            item.classList.remove('active-nav');
        });
        navItems[2].classList.add('active-nav');

    } else {
        navItems.forEach((item) => {
            item.classList.remove('active-nav');
        });
    }
})

function mouseIn(e){
    e.childNodes[1].style.visibility = 'visible';
    e.style.filter = 'grayscale(50%)';
    e.style.cursor = 'pointer';
}
function mouseOut(e){
    e.childNodes[1].style.visibility = 'hidden';
    e.style.filter = 'grayscale(0%)';
}

function activeTab(element){
    element.addEventListener( 'click', (e) => {
        navItems.forEach((item) => {
            item.classList.remove('active-nav');
        });
        e.target.classList.add('active-nav');
    })
};

function openPage(url) {
    if(url !== ''){
        window.open(url, '_blank');
    }
};