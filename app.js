// Search Bar Functionality
const searchInput = document.querySelector('.search input');
const songItems = Array.from(document.getElementsByClassName('songItem'));

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    songItems.forEach(item => { 
        const songName = item.getElementsByTagName('h5')[0].innerText.toLowerCase();
        if (searchTerm === '') {
            // Show all items if search input is cleared
            item.style.display = 'block';
        } else if (songName.includes(searchTerm)) {
            // Show item if the song name matches the search term
            item.style.display = 'block';
        } else {
            // Hide item if it doesn't match
            item.style.display = 'none';
        }
    });
});
// End of Search Bar Functionality


// Left-Right Button Scroll for Song List
let popSongLeft = document.getElementById('pop_song_left');
let popSongRight = document.getElementById('pop_song_right');
let popSongsContainer = document.getElementsByClassName('pop_songs')[0];

const scrollAmount = 330; // Change this value to adjust scroll distance

popSongRight.addEventListener('click', () => {
    // Scroll the container to the right
    popSongsContainer.scrollLeft += scrollAmount;
});

popSongLeft.addEventListener('click', () => {
    // Scroll the container to the left
    popSongsContainer.scrollLeft -= scrollAmount;
});
// End of Left-Right Button Scroll


// Language Switcher Functionality
function switchLanguage() {
    const language = document.getElementById('languageSwitcher').value;

    if (language === 'bn') {
        // Change headers and other UI text to Bangla
        document.querySelector('h1').textContent = 'সংগীত স্ট্রিমিং প্ল্যাটফর্ম';
        document.querySelector('.menu_side h1').textContent = 'প্লেলিস্ট';
        document.querySelector('.search input').setAttribute('placeholder', 'গান অনুসন্ধান করুন...');
        document.querySelector('.buttons button:nth-child(1)').textContent = 'প্লে';
        document.querySelector('.buttons button:nth-child(2)').textContent = 'অনুসরণ করুন';
        document.querySelector('.h4 h4').textContent = 'জনপ্রিয় গানসমূহ';
        
        // Update Playlist section
        document.querySelectorAll('.Playlist h4')[0].textContent = 'প্লেলিস্ট';
        document.querySelectorAll('.Playlist h4')[1].textContent = 'শেষ শ্রবণ';
        document.querySelectorAll('.Playlist h4')[2].textContent = 'প্রস্তাবিত';
        
        // Update menu navigation (Discover and My Library)
        document.querySelectorAll('nav ul li')[0].textContent = 'আবিষ্কার করুন';
        document.querySelectorAll('nav ul li')[1].textContent = 'আমার লাইব্রেরি';

    } else {
        // Revert back to English text
        document.querySelector('h1').textContent = 'Music Streaming Platform';
        document.querySelector('.menu_side h1').textContent = 'Playlist';
        document.querySelector('.search input').setAttribute('placeholder', 'Search Music...');
        document.querySelector('.buttons button:nth-child(1)').textContent = 'PLAY';
        document.querySelector('.buttons button:nth-child(2)').textContent = 'FOLLOW';
        document.querySelector('.h4 h4').textContent = 'POPULAR SONGS';
        
        // Update Playlist section back to English
        document.querySelectorAll('.Playlist h4')[0].textContent = 'Playlist';
        document.querySelectorAll('.Playlist h4')[1].textContent = 'Last Listening';
        document.querySelectorAll('.Playlist h4')[2].textContent = 'Recommend';
        
        // Update menu navigation back to English (Discover and My Library)
        document.querySelectorAll('nav ul li')[0].textContent = 'Discover';
        document.querySelectorAll('nav ul li')[1].textContent = 'My Library';
    }
}
document.getElementById('languageSwitcher').addEventListener('change', switchLanguage);
// End of Language Switcher


// Song Array
const music = new Audio('Audio/1.mp3');

const songs = [
    {
        id: 1,
        songName: `Amazing <br>
        <div class="subtitle">Rex Orange County</div>`,
        poster: "img/img1.jpg"
    },
    {
        id: 2,
        songName: `Birds of a Feather <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster: "img/img2.jpg"
    },
    {
        id: 3,
        songName: `Another Love<br>
        <div class="subtitle">Tom Odell</div>`,
        poster: "img/img1.jpg"
    },
    {
        id: 4,
        songName: `Stay <br>
        <div class="subtitle">The Kid Laroi</div>`,
        poster: "img/img2.jpg"
    },{
        id: 5,
        songName: `Levatating <br>
        <div class="subtitle">Dua Lipa</div>`,
        poster: "img/img1.jpg"
    },
    {
        id: 6,
        songName: `Photograph <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "img/img2.jpg"
    },{
        id: 7,
        songName: `Say you wont let go<br>
        <div class="subtitle">James Arthur</div>`,
        poster: "img/img1.jpg"
    },
    {
        id: 8,
        songName: `Darlin <br>
        <div class="subtitle">The Beach boys</div>`,
        poster: "img/img2.jpg"
    },
    {
        id: 9,
        songName: `Kodom <br>
        <div class="subtitle">Blue Jeans</div>`,
        poster: "img/img1.jpg"
    },
    {
        id: 10,
        songName: `Vindeshi Tara <br>
        <div class="subtitle">Chondrobindu</div>`,
        poster: "img/img2.jpg"
    },
    {
        id: 11,
        songName: `Ki name deke bolbo tomake<br>
        <div class="subtitle">Mitfah</div>`,
        poster: "img/img2.jpg"
    },
    {
        id: 12,
        songName: `There is a light that never goes out <br>
        <div class="subtitle">The Smiths</div>`,
        poster: "img/img1.jpg"
    },
    {
        id: 13,
        songName: `The One that got away <br>
        <div class="subtitle">Katty Perry</div>`,
        poster: "img/img2.jpg"
    },
    {
        id: 14,
        songName: `Somebody that I used to know <br>
        <div class="subtitle">Gotye</div>`,
        poster: "img/img2.jpg"
    }
];
// End of Song Array


// Music Play/Pause Functionality
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        // Play the music
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    } else {
        // Pause the music
        music.pause();
        wave.classList.remove('active');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    });
};

// Click event for each song to play
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id; // Get song ID
        music.src = `audio/${index}.mp3`; // Change audio source
        poster_master_play.src = `img/${index}.jpg`; // Change poster
        music.play();

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
        return els.id == index;
        });

        songTitles.forEach (elss => {
            let {songName,poster} =elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })

        // Highlight the current song
        makeAllBackground();
        document.getElementsByClassName('songItem')[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});
// End of Music Play/Pause


// Seek bar and music progress functionality
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    sec1 = sec1 < 10 ? `0${sec1}` : sec1;
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    sec2 = sec2 < 10 ? `0${sec2}` : sec2;
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    bar2.style.width = `${progressBar}%`;
    dot.style.left = `${progressBar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});
// End of Seek Bar Functionality


// Volume Control
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    } else {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});
// End of Volume Control
