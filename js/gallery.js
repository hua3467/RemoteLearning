const url = 'https://api.jsonbin.io/b/5ec08a7547a2266b1479b4be';
const uiux_list = document.querySelector('#uiuxList');
const classes = {
    card: 'card',
    active: 'active'
};

let workList = '';

fetch(url, {
    headers: {"secret-key": "$2b$10$dFdHf4TwUXPO.VlRulEXbeAkKpO1cBwmU5Fke3mK6UvguDLvtxJyy"}
})
.then(response => {
    return response.json();
})
.then( data => {
    data.forEach( info => {
        workList += `<li class=${classes.card}>
                    
                    <div class="cover-image" id=${info.id}>
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

    data.forEach( (info) => {
        const currentCard = document.querySelector('#' + info.id);
        currentCard.style.backgroundImage = `url(${info.images.cover})`;
        currentCard.style.backgroundSize = 'cover';
        currentCard.addEventListener('click', () => {
            if(info.url !== ''){
                window.open(info.url, '_blank');
            }
            
        })
        currentCard.addEventListener('mouseenter', (e) => {
            if(info.url !== ''){
                e.target.childNodes[1].style.visibility = 'visible';
                e.target.style.filter = 'grayscale(50%)';
                e.target.style.cursor = 'pointer';
            }
        })
        currentCard.addEventListener('mouseleave', (e) => {
            if(info.url !== ''){
                e.target.childNodes[1].style.visibility = 'hidden';
                e.target.style.filter = 'grayscale(0%)';
            }
        })
    })
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

function activeTab(element){
    element.addEventListener( 'click', (e) => {
        navItems.forEach((item) => {
            item.classList.remove('active-nav');
        });
        e.target.classList.add('active-nav');
    })
}
