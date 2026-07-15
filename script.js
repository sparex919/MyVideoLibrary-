const library = {
    Chemistry: [
        {
            name: "Chemical Equilibrium",
            videos: [
                "https://drive.google.com/file/d/FILE_ID_2/preview",
                "https://drive.google.com/file/d/1WNt0K2EH0tEcAzMgvdEcoxfXqW8Z5EiN/preview",
                "https://drive.google.com/file/d/FILE_ID_3/preview",
                "https://drive.google.com/file/d/FILE_ID_4/preview",
                "https://drive.google.com/file/d/FILE_ID_5/preview"
            ]
        }
    ],

    Mathematics: [
        {
            name: "Permutations and Combinations",
            videos: [
                "https://drive.google.com/file/d/FILE_ID_1/preview",
                "https://drive.google.com/file/d/FILE_ID_2/preview",
                "https://drive.google.com/file/d/FILE_ID_3/preview",
                "https://drive.google.com/file/d/FILE_ID_4/preview",
                "https://drive.google.com/file/d/FILE_ID_5/preview",
                "https://drive.google.com/file/d/FILE_ID_6/preview",
                "https://drive.google.com/file/d/FILE_ID_7/preview",
                "https://drive.google.com/file/d/FILE_ID_8/preview",
                "https://drive.google.com/file/d/FILE_ID_9/preview"
            ]
        }
    ]
};

const videos = [];

for (const subject in library) {

    library[subject].forEach(chapter => {

        chapter.videos.forEach((link,index)=>{

            videos.push({
                title:`${chapter.name} ${index+1}`,
                url:link
            });

        });

    });

}

const search=document.getElementById("search");
const videoList=document.getElementById("videoList");
const player=document.getElementById("player");
const nowPlaying=document.getElementById("nowPlaying");

function load(list){

    videoList.innerHTML="";

    list.forEach(video=>{

        const div=document.createElement("div");

        div.className="videoItem";

        div.innerHTML="▶ "+video.title;

        div.onclick=()=>{

            nowPlaying.innerText=video.title;

            player.style.display="block";

            player.src=video.url;

        };

        videoList.appendChild(div);

    });

}

load(videos);

search.addEventListener("input",()=>{

    const text=search.value.toLowerCase();

    load(videos.filter(v=>
        v.title.toLowerCase().includes(text)
    ));

});
