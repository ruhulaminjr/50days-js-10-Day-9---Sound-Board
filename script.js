const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory','wrong'];

const buttons = document.getElementById('buttons');

sounds.forEach(sound =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click',()=>{
        pauseSong();
     let song = document.getElementById(sound)
       song.play();
    })
    buttons.appendChild(btn);
})

function pauseSong(){
    sounds.forEach(sound =>{
       let song = document.getElementById(sound);
       song.pause();
       song.currentTime = 0 ;
    })
}
