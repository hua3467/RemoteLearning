const uiux_info = [
    {
        url: '',
        prototype_web: 'https://xd.adobe.com/view/f5aa7e79-58e2-406a-78b0-7ec53b65a4c9-839b/?fullscreen&hints=on',
        prototype_mobile: 'https://xd.adobe.com/view/59fe00a5-299e-4f7e-5508-4a9964854f09-2fcf/?fullscreen&hints=on',
        title: 'JoCo',
        authors: ['Cody Larson', 'Jodi Claflin']
    },
    {
        url: '',
        prototype_web: 'https://xd.adobe.com/view/616d7aa2-3d7c-4bf7-49ee-c77599d724c8-175c/?fullscreen&hints=on',
        prototype_mobile: 'https://xd.adobe.com/view/04ab066b-0957-4622-7a5e-c3948d289747-729a/',
        title: 'Movie Knight',
        authors: ['Andrew Stoffel', 'Sara Lundy', 'Cassidy Brown', 'Ben Reyes']
    },
    {
        url: '',
        prototype_web: '#',
        prototype_mobile: 'https://xd.adobe.com/view/294b9447-32dd-4dc5-6c84-088e752cc617-5f7a/screen/a2163660-d5a0-4d6a-95d4-ed9849b6bcc8/iPhone-X-XS-11-Welcome-Page',
        title: 'Crisp Finds',
        authors: ['Ava Martinsen', 'Ryan Lebsch', 'Keeley Watson']
    },
    {
        url: '',
        prototype_web: 'https://xd.adobe.com/view/fc75d45f-1f6d-4575-53b5-aa051982e102-8a44/?fullscreen&hints=on',
        prototype_mobile: 'https://xd.adobe.com/view/92819fd1-da61-4684-66f2-03a02bf42a5b-e4b0/',
        title: 'GRID',
        authors: ['Jonathon Dalton', 'Charles Biggs']
    },
    {
        url: '',
        prototype_web: 'https://xd.adobe.com/view/73f0360c-9974-4292-70a5-566de4693276-05c1/?fullscreen&hints=on',
        prototype_mobile: 'https://xd.adobe.com/view/8a5fb792-0691-4f66-6d17-9ef4cefa9eca-fc6e/screen/a104e736-d64c-4a1c-bd05-561c7da54009/Home-Page',
        title: 'What\'s For Lunch',
        authors: ['Benjamin Swenson', 'Anh Tao', 'Bailey Cowling']
    },
    {
        url: '',
        prototype_web: 'https://xd.adobe.com/view/f672c16e-91c6-4403-4595-d884f5755843-8043/?fullscreen&hints=on',
        prototype_mobile: 'https://xd.adobe.com/view/4bbb420c-12f7-46a1-7dd7-00d030845ec6-3d8a/?fullscreen&hints=on',
        title: 'Hebo',
        authors: ['Izak Moleterno', 'Jacob Schwitalla', 'Elizabeth Hurteau']
    },
    {
        url: 'https://xd.adobe.com/view/7a0f7fe5-3c67-4828-4e32-4d09b81e1c52-0c3e/?fullscreen',
        prototype_web: 'https://xd.adobe.com/view/eb8530ba-e757-45a7-4db7-78df8298447c-9db4/?fullscreen',
        prototype_mobile: 'https://xd.adobe.com/view/742a7a24-7af6-4f8a-63b7-d4b163535ac8-021b/',
        title: 'Food Eats',
        authors: ['Ashlyn Dilley', 'Cassandra Tweed', 'Josephine Linehan']
    },
]

const classes = {
    workList: 'work-list',
    active: 'active'
};
let workList = '';

const uiux_list = document.querySelector('#uiuxList');

uiux_info.forEach( (info) => {
    workList += `<li class=${classes.workList}>
                <h3>${info.title}</h3>
                <a 
                href=${info.prototype_web} 
                class="btn" 
                target="_blank"
                ${info.prototype_web==="#"?"style='visibility: hidden'":""}
                >Try Website</a>
                <a href=${info.prototype_mobile} class="btn" target="_blank">Try Mobile App</a>
            </li>\n`
     
})
console.log(workList);
uiux_list.innerHTML = workList;