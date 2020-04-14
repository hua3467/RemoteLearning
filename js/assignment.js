const assignmentList= [
    {
        course: 'Building a Personal Webiste',
        title: 'Assignment: Create Your Website',
        url: "./assignment.html",
        week: '14',
        description: [
            'Build a personal website with any website buider.',
            'In your website, please include a home page, a list or a galley of your projects, and some introduction about yourself',
            '<b>What to Submit: </b>Please submit a link of your website to Blackboard.',
            '<b>Here are some examples that might inspaire you: </b>'
        ],
        exampleUrls: [
            'https://www.nanwang-design.com/',
            'https://iamicecream.com/',
            'http://www.courtneysabo.com/',
            'http://melaniedaveid.com/',
            'http://brianhkpark.me/',
            'https://muradoelvira.com/',
            'https://madsberg.dk/'
        ]
    }
]

// get DOM elements
const orderedList = document.querySelector('ol');

const assDesc = assignmentList[0].description;
const assExampleUrls = assignmentList[0].exampleUrls;

for(let i = 0; i < assDesc.length; i++ ){
    createList(assDesc[i], orderedList);
    
}

function createList (desc, list) {
    let newListItem = document.createElement('li');
    newListItem.innerHTML = desc;

    if(desc.includes('examples')) {
        let newList = document.createElement('ul');
        for(let j = 0; j < assExampleUrls.length; j++) {
            insertSubList(newList, assExampleUrls[j]);
        } 
        newListItem.appendChild(newList);
    }
    
    list.appendChild(newListItem);

    
} 

function insertSubList(parentNode, url){
    
    let newListItem = document.createElement('li');
    let newLink = document.createElement('a');
    newLink.innerHTML = url;
    newLink.href = url;
    newLink.target = '_blank';
    newListItem.appendChild(newLink);
    parentNode.appendChild(newListItem);
}