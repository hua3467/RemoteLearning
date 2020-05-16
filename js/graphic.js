const file_location = 'http://students.cs.ndsu.nodak.edu/~aayang/RemoteLearning/images/'
const figure_items = [{
        image: "BandIzakMoleterno.jpg",
    },
    {
        image: "EdwinDegges.jpg"
    },
    {
        image: "Isolation.jpg"
    },
    {
        image: "JackieChan.jpg"
    },
    {
        image: "Maeve.jpg"
    },
    {
        image: "MultiFigureNarrative.jpg"
    },
    {
        image: "MultipleFigure.jpg"
    },
    {
        image: "PALS2.jpg"
    },
    {
        image: "Rosenkranz.jpg"
    },
    {
        image: "SarthakKaushik.jpg"
    },
    {
        image: "SelfPortrait.jpg"
    },
    {
        image: "selfportraitedited.jpg"
    },
    {
        image: "SeminoleScizophrenic.jpg"
    },
    {
        image: "swenson.jpg"
    },
    {
        image: "Tamika.jpg"
    },
];
const graphic_items = [{
        image: "AlexLight.jpg"
    },
    {
        image: 'AlexLight_1.jpg'
    },
    {
        image: 'AlexLight_2.jpg'
    },
    {
        image: 'AlexLight_3.jpg'
    },
    {
        image: 'AlexLight_4.jpg'
    },
    {
        image: 'AllyMurphy.jpg'
    },
    {
        image: 'CamrynRoadley.jpg'
    },
    {
        image: 'CamrynRoadley_1.jpg'
    },
    {
        image: 'CamrynRoadley_2.jpg'
    },
    {
        image: 'CamrynRoadley_3.jpg'
    },
    {
        image: 'GraceRobinson.jpg '
    },
    {
        image: 'MusabAtaelmanan.jpg'
    },
    {
        image: 'MusabAtaelmanan-1.jpg'
    },
    {
        image: 'MusabAtaelmanan-2.jpg'
    },
    {
        image: 'SantanahGerhard.jpg'
    },
    {
        image: 'SantanahGerhart.jpg'
    },
    {
        image: 'SantanahGerhart_1.jpg'
    },
    {
        image: 'SantanahGerhart_2.jpg'
    },
    {
        image: 'AudrewBeauclair.jpg'
    },
    {
        image: 'AudreyBeuclair.jpg'
    },
    {
        image: 'AudreyBeuclair_1.jpg'
    },
    {
        image: 'HalimaShittu.jpg'
    },
    {
        image: 'HalimaShittu_1.jpg'
    },
    {
        image: 'YukiCoyle.jpg'
    },
    {
        image: 'YukiCoyle_copy.jpg'
    },
    {
        image: 'YukiCoyle_1.jpg'
    },
    {
        image: 'OsamuShibuya.jpg'
    },
    {
        image: 'JeredJohnson.jpg'
    },
    {
        image: 'CharlesBoevers.jpg'
    },
    {
        image: 'MaxwellPickett.jpg'
    },
    {
        image: 'MA_isometric_illustration.jpg'
    }
]

const folderNames = {
    figure: 'figureDrawing/',
    figure_thumb: 'figureThumbnails/thumb_',
    graphic: 'graphicDesign/',
    graphic_thumb: 'graphicThumbnails/thumb_'
}


const drawingUl = document.querySelector('#drawingList');
const graphicUl = document.querySelector('#graphicList');
const lightBox = document.querySelector('#lightbox');
const btnClose = document.querySelector("#close");
const rightBtn = document.querySelector('#rightArrow');
const leftBtn = document.querySelector('#leftArrow');

let currentImageIndex = 0;
let currentFolder = '';
let currentSection = '';

figure_items.forEach((item) => {

    const list = document.createElement('li');
    list.className = 'card'
    list.style.backgroundImage = `url(${file_location}${folderNames.figure_thumb}${item.image})`;
    list.style.backgroundSize = 'cover';
    list.style.cursor = 'zoom-in';

    list.addEventListener('click', () => {
        console.log(`url(${file_location}${folderNames.figure}${item.image})`)
        lightBox.style.visibility = 'visible';
        lightBox.style.backgroundImage = `url(${file_location}${folderNames.figure}${item.image})`;
        currentFolder = folderNames.figure
        currentImageIndex = figure_items.findIndex(x => x.image === item.image);
        currentSection = figure_items;
        disableScroll();
    })

    drawingUl.appendChild(list);
})

graphic_items.forEach((item) => {

    const list = document.createElement('li');
    list.className = 'card'
    list.style.backgroundImage = `url(${file_location}${folderNames.graphic_thumb}${item.image})`;
    list.style.backgroundSize = 'cover';
    list.style.cursor = 'zoom-in';

    list.addEventListener('click', () => {

        lightBox.style.visibility = 'visible';
        lightBox.style.backgroundImage = `url(${file_location}${folderNames.graphic}${item.image})`;
        currentFolder = folderNames.graphic
        currentImageIndex = graphic_items.findIndex( x => x.image === item.imgae);
        currentSection = graphic_items;
        console.log(currentImageIndex, item)
        disableScroll();
    })

    graphicUl.appendChild(list);
})

btnClose.addEventListener('click', () => {
    lightBox.style.visibility = 'hidden';
    enableScroll();
})

rightBtn.addEventListener('click', (e) => {
    currentImageIndex++
    if (currentImageIndex === currentSection.length) {
        currentImageIndex = 0;
        lightBox.style.backgroundImage = `url(${file_location}${currentFolder}${currentSection[currentImageIndex].image})`;
    } else {
        lightBox.style.backgroundImage = `url(${file_location}${currentFolder}${currentSection[currentImageIndex].image})`;
    }

})

leftBtn.addEventListener('click', () => {
    currentImageIndex--;
    console.log(currentImageIndex)
    console.log(currentSection[currentImageIndex])
    if (currentImageIndex <= -1) {
        currentImageIndex = currentSection.length - 1;
        lightBox.style.backgroundImage = `url(${file_location}${currentFolder}${currentSection[currentImageIndex].image})`;
    } else {
        lightBox.style.backgroundImage = `url(${file_location}${currentFolder}${currentSection[currentImageIndex].image})`;
    }
})

function disableScroll() {
    document.body.classList.add('stop-scrolling');
}

function enableScroll() {
    document.body.classList.remove('stop-scrolling');
}