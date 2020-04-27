const btnStart = document.querySelector("#btnStart");
const name = document.querySelector("#name");
const signInPan = document.querySelector('#signIn');
const player = document.querySelector('#player');
const cover = document.querySelector('#cover');
const menuList = document.querySelector('#menuList');
const archiveList = document.querySelector('#archive');
const videoTitle = document.querySelector('#videoTitle h3');
const btnBar = document.querySelector('#btnBar');
const nav = document.querySelector('nav');

let btnFlag = false;
let userName

const videos = [
    
    {
        course: 'Building a Personal Webiste',
        title: 'Creating a Design Portfolio',
        url: 'https://www.youtube.com/embed/0cxRveJYnxo',
        week: '14' 
    },
    {
        course: 'Building a Personal Webiste',
        title: 'Demo: Adobe Portfolio',
        url: "https://www.youtube.com/embed/zT95t34sA-M",
        week: '14' 
    },
    {
        course: 'Building a Personal Webiste',
        title: 'Assignment: Create Your Website',
        url: "./assignment.html",
        week: '14' 
    }
]

const archivedVideos = [
    {
        course: 'Responsive Design and Mobile UI',
        title: 'Lecture: Responsive Design and Mobile UI',
        url: 'https://www.youtube.com/embed/JMRsNRveMtc',
        week: '12'
    },
    {
        course: 'Responsive Design and Mobile UI',
        title: 'Adobe XD Demo 1: Hover and Component State',
        url: 'https://www.youtube.com/embed/G8hL8ULlwY8',
        week: '12'
    },
    {
        course: 'Responsive Design and Mobile UI',
        title: 'Project Demo: App Store Clone',
        url: 'https://www.youtube.com/embed/8DQID1cNLT4',
        week: '12'
    },
    {
        course: 'Advanced Design in Adobe XD',
        title: 'Auto Animate with Component States',
        url: "https://www.youtube.com/embed/bM_dgrqHa9A",
        week: '13' 
    },
    {
        course: 'Advanced Design in Adobe XD',
        title: 'Image Editing, Exporting, and Sharing',
        url: 'https://www.youtube.com/embed/P8DmmNI0U6c',
        week: '13' 
    }

]

var firebaseConfig = {
    apiKey: "AIzaSyCstqaNTffHq57R459MRQTbsBPvL_C7mtU",
    authDomain: "fir-354ef.firebaseapp.com",
    databaseURL: "https://fir-354ef.firebaseio.com",
    projectId: "fir-354ef",
    storageBucket: "fir-354ef.appspot.com",
    messagingSenderId: "91662137907",
    appId: "1:91662137907:web:bfe743fbaf47a6f523c146"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const dataname = 'remoteLearning'

// Create Menu
for(let i = 0; i < videos.length; i++){
    createMenu(videos[i].title, menuList);
}
for(let i = 0; i < archivedVideos.length; i++) {
    createMenu(archivedVideos[i].title, archiveList);
}

// Click to Show Menu
let opened = false;
btnBar.addEventListener('click', () => {
    
    if (opened){
        btnBar.style.marginLeft = '16px';
        btnBar.className = 'fa fa-bars fa-lg'
        nav.style.visibility = 'hidden';
    } else {
        btnBar.style.marginLeft = '246px';
        btnBar.className = 'fa fa-times fa-lg';
        nav.style.visibility = 'visible';
    }
    opened = !opened;
})

// Click to Avtivate corrent video
const menu = document.querySelectorAll('nav a');
player.src = videos[0].url;

for (let i = 0; i < videos.length; i++) {
    menu[i].addEventListener('click', function (e) {
        player.src = videos[i].url;
        e.preventDefault();
        for (let j = 0; j < videos.length; j++) {
            menu[j].style.fontWeight = 'normal';
        }
        this.style.fontWeight = 'bold';
        if( window.innerWidth < 800){
            nav.style.visibility = 'hidden';
        } 
        
    })
}

const archiveMenu = document.querySelectorAll('#archive a');
for (let i = 0; i < archivedVideos.length; i++) {
    archiveMenu[i].addEventListener('click', function (e) {
        player.src = archivedVideos[i].url;
        e.preventDefault();
        for (let j = 0; j < archivedVideos.length; j++) {
            archiveMenu[j].style.fontWeight = 'normal';
        }
        this.style.fontWeight = 'bold';
    })
}

// Videos
videoTitle.innerHTML = 'Week' + videos[videos.length-1].week + ': ' + videos[videos.length-1].course;

// Sign student names
name.addEventListener('change', function () {
    if (name.value.length < 2) {
        btnStart.style.background = '#999999';
        btnFlag = false;
    } else {
        btnStart.style.background = "#0DC771";
        btnFlag = true;
    }
})

btnStart.addEventListener('click', function () {
    if (btnFlag === true) {
        let date = new Date();
        let time = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
        userName = name.value;
        console.log(time)
        database.ref().child(dataname + '/' + userName + '/').update({
            'startTime': time
        });
        signInPan.style.visibility = 'hidden';
        cover.style.visibility = 'hidden';
        endTime();
    } else {
        alert('Please enter your full name first.')
    }
}, false)

function endTime() {

    let count = 0;

    setInterval(function () {
        let time = new Date();
        console.log(time.toLocaleTimeString());
        console.log(name.value);
        database.ref().child(dataname + '/' + userName + '/').update({
            'endTime': time.getHours() + ':' + time.getMinutes()
        });
        count++;
    }, 300000);

}

function stopTimer() {
    timeEnd = new Date();
    timeStamp = timeEnd - timeStart;
}

function createMenu(videoTitle, list){
    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    newA.innerHTML = videoTitle;
    newA.href = '';
    newLi.appendChild(newA);
    list.appendChild(newLi);
}

function addMenuAction(menuItem) {
    menuItem.addEventListener('click', function (e) {
        player.src = videos[i].url;
        e.preventDefault();
        for (let j = 0; j < videos.length; j++) {
            menu[j].style.fontWeight = 'normal';
        }
        this.style.fontWeight = 'bold';
    })
}