const btnStart = document.querySelector("#btnStart");
const name = document.querySelector("#name");
const signInPan = document.querySelector('#signIn');
const player = document.querySelector('#player');
const cover = document.querySelector('#cover');
const menuList = document.querySelector('ul');
let btnFlag = false;
let userName

const lectureUrls = [
    'https://www.youtube.com/embed/JMRsNRveMtc', //Lecture-Mobile
    'https://www.youtube.com/embed/G8hL8ULlwY8', //Demo-Hover
    'https://www.youtube.com/embed/8DQID1cNLT4' //Demo-Assignment
]

const videos = [{
        title: 'Lecture: Responsive Design and Mobile UI',
        url: 'https://www.youtube.com/embed/JMRsNRveMtc'
    },
    {
        title: 'Adobe XD Demo 1: Hover and Component State',
        url: 'https://www.youtube.com/embed/G8hL8ULlwY8'
    },
    {
        title: 'Project Demo: App Store Clone',
        url: 'https://www.youtube.com/embed/8DQID1cNLT4'
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

for(let i = 0; i < videos.length; i++){
    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    newA.innerHTML = videos[i].title;
    newA.href = '';
    newLi.appendChild(newA);
    menuList.appendChild(newLi);
}

const menu = document.querySelectorAll('nav a');

for (let i = 0; i < videos.length; i++) {
    menu[i].addEventListener('click', function (e) {
        player.src = videos[i].url;
        e.preventDefault();
    })
}

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