/* ==========================================================================
   USFLIX - JAVASCRIPT APPLICATION
   Interactive Netflix replica for Aditya & Shradhha
   ========================================================================== */

// --- EPISODE DATA REUSING WORKSPACE IMAGES REPETITIVELY ---
const SEASONS_DATA = {
  3: [
    { ep: 12, title: "First Home", duration: "48m", thumb: "img1.jpg", desc: "Unpacking endless cardboard boxes, painting the accent wall lavender, and eating cold takeaway on the wooden floor." },
    { ep: 11, title: "Midnight Gelato Run", duration: "36m", thumb: "img2.jpg", desc: "Sneaking out in oversized hoodies at 1 AM because someone had an emergency craving for pistacchio gelato." },
    { ep: 10, title: "The Balcony Sunset", duration: "42m", thumb: "img3.jpg", desc: "Golden rays over the city skyline, sipping warm tea, talking about where we'll be 20 years from today." },
    { ep: 9, title: "Kitchen Dance Disasters", duration: "39m", thumb: "img4.jpg", desc: "Burning the garlic bread because we were too busy spinning to old vinyl records in socks." },
    { ep: 8, title: "Sunday In Bed", duration: "51m", thumb: "img6.jpg", desc: "No alarms, rainy morning outside, warm coffee, and cuddling through the entire morning." },
    { ep: 1, title: "Whispered Promises", duration: "54m", thumb: "heroimg.png", desc: "Standing by the ocean cliff, looking into each other's eyes, and knowing this is forever." }
  ],
  2: [
    { ep: 8, title: "Santorini Clifftop Vow", duration: "58m", thumb: "img2.jpg", desc: "White houses, turquoise waters, the warm Mediterranean breeze, and a moment that stopped time." },
    { ep: 7, title: "Late Night Road Trip", duration: "44m", thumb: "img6.jpg", desc: "Windows down along the coast, highway signs rushing past, singing loudly off-key." },
    { ep: 6, title: "The Rainy Coastline", duration: "41m", thumb: "img3.jpg", desc: "Sharing one umbrella in stormy winds and laughing when the umbrella flipped inside out." },
    { ep: 4, title: "Secret Rooftop Picnic", duration: "38m", thumb: "img1.jpg", desc: "Fairy lights, strawberries, and stargazing while pointing out our own constellations." },
    { ep: 2, title: "Airport Sprint & Hugs", duration: "47m", thumb: "img4.jpg", desc: "Running through terminal 3 after weeks apart, dropping bags, and holding each other tight." }
  ],
  1: [
    { ep: 8, title: "The Rainy Coast", duration: "45m", thumb: "img3.jpg", desc: "Our very first weekend getaway. Exploring hidden coves and discovering how well we fit together." },
    { ep: 5, title: "Bookstore Rainy Afternoon", duration: "35m", thumb: "img6.jpg", desc: "Hiding in the corner aisle of an old bookstore, reading poetry, and stealing little glances." },
    { ep: 3, title: "That Stifled Giggle", duration: "40m", thumb: "img2.jpg", desc: "Trying not to burst out laughing in the middle of a quiet museum gallery." },
    { ep: 1, title: "Café de Flore", duration: "52m", thumb: "img4.jpg", desc: "The very first rainy morning coffee. The nervous smile, the steam rising, and the spark that started everything." }
  ]
};

// --- LOVE LETTERS CONTENT (SPOTLIGHT ARCHIVE) ---
const LETTERS_DATA = {
  1: {
    id: 1,
    chapter: "CHAPTER 01 · OPEN WHEN",
    title: "You Miss My Silly Face",
    postmark: "SPECIAL DELIVERY · PARIS 2022",
    date: "When the room feels a little too quiet",
    mood: "100% Tearjerker",
    snippet: "Kitchen dances, silly jar faces, and why distance means nothing...",
    quote: `"Whenever distance feels heavy, remember my silly kitchen dances. You are never alone—you are my home, and home is never far away."`,
    body: `Whenever distance feels heavy or your day gets too long, remember that my heart is permanently with you.

Think of my silly jar-opening face, our goofy kitchen dances, and how we laugh at things nobody else understands. You know every single one of my flaws, and somehow you make me feel like the luckiest person alive.

Close your eyes, take a deep breath, and smile. You are my home, and home is never far away.`
  },
  2: {
    id: 2,
    chapter: "CHAPTER 02 · UNSPOKEN TRUTHS",
    title: "Why I Choose You Daily",
    postmark: "PROMISE CACHE · EVERY SUNRISE",
    date: "A promise for every ordinary Tuesday",
    mood: "Eternal Vow",
    snippet: "Sleepy mornings, shared coffees, and choosing you in every sunrise...",
    quote: `"I don't just love you for the grand dates. I love you for the sleepy mornings, the shared chai, and the quiet comfort of just being next to you."`,
    body: `I don't just love you for the grand dates or special occasions. I love you for the quiet, ordinary moments in between.

I love the sleepy mornings, your hand finding mine at red lights, and the peaceful silence when we just sit together. Loving you is the easiest choice I make every single morning.

On the easiest days, and especially on the heavy ones—I will always choose you.`
  },
  3: {
    id: 3,
    chapter: "CHAPTER 03 · MONSOON VOWS",
    title: "Midnight Chai Under the Monsoon Rain",
    postmark: "LATE NIGHT DRIVE · 2:00 AM CHAI",
    date: "Petrichor, streetlights & pouring rain",
    mood: "Kulhad Chai & Rain",
    snippet: "Steaming adrak chai, rain on the windshield, and our favorite song on loop...",
    quote: `"Rain on the windshield, steaming kulhad chai in our hands, and you beside me—I realized I have everything I could ever want in this life."`,
    body: `It’s 2 AM, the rain is drumming on the car roof, and the smell of wet earth fills the cool air.

Watching you cradle a hot kulhad of chai in both hands with your feet tucked up on the car seat, I realized I don't need anything else from this world. Just this rain, two cups of chai, and you beside me.

I promise to always be your shelter in every storm, and to never stop sharing late-night chai drives with you.`
  }
};

// --- DOM ELEMENTS ---
const navbar = document.getElementById('navbar');
const profilePill = document.getElementById('profilePill');
const profileMenu = document.getElementById('profileMenu');
const searchBtn = document.getElementById('searchBtn');
const searchBarContainer = document.getElementById('searchBarContainer');
const searchCloseBtn = document.getElementById('searchCloseBtn');
const memorySearchInput = document.getElementById('memorySearchInput');

// Modals
const playerModal = document.getElementById('playerModal');
const playerVideo = document.getElementById('playerVideo');
const playerImage = document.getElementById('playerImage');
const playerTitle = document.getElementById('playerTitle');
const playerPlayCenterIcon = document.getElementById('playerPlayCenterIcon');
const playPauseIcon = document.getElementById('playPauseIcon');
const playerProgressFill = document.getElementById('playerProgressFill');
const playerTimer = document.getElementById('playerTimer');

const episodesModal = document.getElementById('episodesModal');
const episodesListContainer = document.getElementById('episodesListContainer');
const seasonSelect = document.getElementById('seasonSelect');

const letterModal = document.getElementById('letterModal');
const letterTitleDisplay = document.getElementById('letterTitleDisplay');
const letterDate = document.getElementById('letterDate');
const letterFullText = document.getElementById('letterFullText');

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- DROPDOWNS TOGGLE ---
profilePill.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = profileMenu.classList.toggle('show');
  profilePill.parentElement.classList.toggle('open', isOpen);
});

document.addEventListener('click', () => {
  profileMenu.classList.remove('show');
  if (profilePill && profilePill.parentElement) {
    profilePill.parentElement.classList.remove('open');
  }
});

// --- SEARCH TOGGLE ---
searchBtn.addEventListener('click', () => {
  searchBarContainer.classList.add('open');
  memorySearchInput.focus();
});

searchCloseBtn.addEventListener('click', () => {
  searchBarContainer.classList.remove('open');
  memorySearchInput.value = '';
});

// Search functionality
memorySearchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (query.length > 2) {
    // Check if matches any episode or date
    console.log("Searching memories for:", query);
  }
});

// --- CINEMA VIDEO PLAYER SIMULATOR ---
let isPlaying = false;
let playerProgressInterval = null;
let currentProgress = 35;
const playerImages = ['heroimg.png', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img6.jpg'];
let playerImgIndex = 0;

function openPlayerModal(title = "Fav Episode: Aditya & Shradhha", videoSrc = null) {
  playerTitle.textContent = title;
  
  if (videoSrc === 'video.mp4') {
    if (playerVideo) {
      playerVideo.src = 'video.mp4';
      playerVideo.style.display = 'block';
      if (playerImage) playerImage.style.display = 'none';
      playerVideo.currentTime = 0;
      playerVideo.play().catch(e => console.log('Autoplay gesture needed:', e));
    }
    isPlaying = true;
    updatePlayButtonIcons(true);
  } else {
    // Video is strictly reserved for Fav Episode button
    if (playerVideo) {
      playerVideo.pause();
      playerVideo.currentTime = 0;
      playerVideo.removeAttribute('src');
      playerVideo.style.display = 'none';
    }
    if (playerImage) {
      playerImage.style.display = 'block';
      if (title.includes('First Home')) playerImage.src = 'img1.jpg';
      else if (title.includes('Santorini') || title.includes('Stargazing')) playerImage.src = 'img2.jpg';
      else if (title.includes('Rainy Coast') || title.includes('Storm')) playerImage.src = 'img3.jpg';
      else if (title.includes('Café')) playerImage.src = 'img4.jpg';
      else if (title.includes('Sunset') || title.includes('Drive')) playerImage.src = 'img6.jpg';
      else playerImage.src = 'heroimg.png';
    }
    startPlayerPlayback();
  }

  playerModal.classList.add('open');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
}

function closePlayerModal() {
  if (playerVideo) {
    playerVideo.pause();
    playerVideo.currentTime = 0;
    playerVideo.removeAttribute('src');
    playerVideo.style.display = 'none';
  }
  playerModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  stopPlayerPlayback();
}

function startPlayerPlayback() {
  isPlaying = true;
  updatePlayButtonIcons(true);
  clearInterval(playerProgressInterval);
  
  // Play soft romantic audio chord
  playMelodyNote(440, 0.4);

  playerProgressInterval = setInterval(() => {
    currentProgress += 0.5;
    if (currentProgress >= 100) {
      currentProgress = 0;
      // Cycle image for romantic slideshow
      playerImgIndex = (playerImgIndex + 1) % playerImages.length;
      playerImage.src = playerImages[playerImgIndex];
    }
    playerProgressFill.style.width = currentProgress + '%';
    
    // Update timer display
    const currentSecs = Math.floor((currentProgress / 100) * 2520);
    const m = Math.floor(currentSecs / 60);
    const s = currentSecs % 60;
    playerTimer.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')} / 42:00`;
  }, 500);
}

function stopPlayerPlayback() {
  isPlaying = false;
  updatePlayButtonIcons(false);
  clearInterval(playerProgressInterval);
}

function togglePlayerPause() {
  if (playerVideo && playerVideo.style.display !== 'none') {
    if (playerVideo.paused) {
      playerVideo.play();
      isPlaying = true;
      updatePlayButtonIcons(true);
    } else {
      playerVideo.pause();
      isPlaying = false;
      updatePlayButtonIcons(false);
    }
  } else {
    if (isPlaying) {
      stopPlayerPlayback();
    } else {
      startPlayerPlayback();
    }
  }
}

function updatePlayButtonIcons(playing) {
  if (playing) {
    playPauseIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    playerPlayCenterIcon.parentElement.style.opacity = '0.3';
  } else {
    playPauseIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    playerPlayCenterIcon.parentElement.style.opacity = '1';
  }
}

function seekPlayer(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
  if (playerVideo && playerVideo.style.display !== 'none' && playerVideo.duration) {
    playerVideo.currentTime = (percentage / 100) * playerVideo.duration;
  } else {
    currentProgress = percentage;
    playerProgressFill.style.width = percentage + '%';
  }
}

function skipPlayer(seconds) {
  if (playerVideo && playerVideo.style.display !== 'none' && playerVideo.duration) {
    playerVideo.currentTime = Math.max(0, Math.min(playerVideo.duration, playerVideo.currentTime + seconds));
  } else {
    currentProgress = Math.min(100, currentProgress + 4);
    playerProgressFill.style.width = currentProgress + '%';
  }
}

if (playerVideo) {
  playerVideo.addEventListener('timeupdate', () => {
    if (playerVideo.duration) {
      const pct = (playerVideo.currentTime / playerVideo.duration) * 100;
      playerProgressFill.style.width = pct + '%';
      const curM = Math.floor(playerVideo.currentTime / 60);
      const curS = Math.floor(playerVideo.currentTime % 60);
      const durM = Math.floor(playerVideo.duration / 60);
      const durS = Math.floor(playerVideo.duration % 60);
      playerTimer.textContent = `${curM.toString().padStart(2, '0')}:${curS.toString().padStart(2, '0')} / ${durM.toString().padStart(2, '0')}:${durS.toString().padStart(2, '0')}`;
    }
  });

  playerVideo.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButtonIcons(true);
  });

  playerVideo.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButtonIcons(false);
  });

  playerVideo.addEventListener('ended', () => {
    isPlaying = false;
    updatePlayButtonIcons(false);
  });
}

function togglePlayerFullscreen() {
  const elem = playerModal.querySelector('.player-screen');
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => alert("Fullscreen preview not supported"));
  } else {
    document.exitFullscreen();
  }
}

// Close player when clicking outside screen
playerModal.addEventListener('click', (e) => {
  if (e.target === playerModal) {
    closePlayerModal();
  }
});


// --- EPISODES MODAL & SEASONS SELECTOR ---
function openEpisodesModal() {
  renderEpisodes(seasonSelect.value || "3");
  episodesModal.classList.add('open');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
}

function closeEpisodesModal() {
  episodesModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
}

function changeSeason(seasonNum) {
  renderEpisodes(seasonNum);
}

function renderEpisodes(seasonNum) {
  const episodes = SEASONS_DATA[seasonNum] || SEASONS_DATA[3];
  episodesListContainer.innerHTML = '';

  episodes.forEach((ep) => {
    const item = document.createElement('div');
    item.className = 'episode-item';
    item.innerHTML = `
      <div class="ep-number">${ep.ep}</div>
      <div class="ep-thumb-wrap">
        <img src="${ep.thumb}" alt="${ep.title}" loading="lazy">
      </div>
      <div class="ep-details">
        <div class="ep-title-row">
          <span class="ep-title">${ep.title}</span>
          <span class="ep-duration">${ep.duration}</span>
        </div>
        <p class="ep-desc">${ep.desc}</p>
      </div>
    `;
    item.onclick = () => {
      closeEpisodesModal();
      openLightbox(ep.thumb, `S${seasonNum}:E${ep.ep} · ${ep.title}`);
    };
    episodesListContainer.appendChild(item);
  });
}

episodesModal.addEventListener('click', (e) => {
  if (e.target === episodesModal) {
    closeEpisodesModal();
  }
});


// --- LOVE LETTER MODAL ---
function openLetterModal(id) {
  const targetId = id || 1;
  const letter = LETTERS_DATA[targetId] || LETTERS_DATA[1];
  if (!letter) return;

  if (letterTitleDisplay) {
    letterTitleDisplay.textContent = letter.title;
  }
  if (letterDate) {
    letterDate.textContent = letter.date;
  }
  if (letterFullText) {
    letterFullText.textContent = letter.body;
  }

  if (letterModal) {
    letterModal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  // Gentle romantic chime
  try {
    playMelodyNote(523.25, 0.4);
  } catch (err) {
    // Ignore audio policy restrictions
  }
}

function closeLetterModal() {
  if (letterModal) {
    letterModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

if (letterModal) {
  letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) {
      closeLetterModal();
    }
  });
}


// --- MY LIST TOGGLE ---
function toggleMyList(btn) {
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    showToast("Added to Aditya & Shradhha's Private Vault ♥");
  } else {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
    showToast("Removed from My List");
  }
}

// Toast notification function
function showToast(message) {
  let toast = document.getElementById('usflix-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'usflix-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(30, 30, 30, 0.95);
      border: 1px solid #444;
      color: #fff;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.8);
      z-index: 9999;
      pointer-events: none;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2500);
}


// --- WEB AUDIO SYNTHESIZER FOR ROMANTIC AMBIENT SOUNDTRACKS ---
let audioCtx = null;
let currentPlayingTrack = null;
let ambientInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playMelodyNote(freq, duration = 0.5) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {
    console.log("Audio waiting for user gesture:", err);
  }
}

// ==========================================================================
// REAL HTML5 SOUNDTRACK ENGINE (ADITYA & SHRADHHA PLAYLIST)
// ==========================================================================
const SOUNDTRACK_PLAYLIST = [
  {
    id: 0,
    title: "Haseen",
    artist: "Aditya & Shradhha",
    sub: "Romantic Melodies",
    file: "music/haseen.mp3",
    thumb: "music/haseen.jpg"
  },
  {
    id: 1,
    title: "Idhar Zara Sa Dekhlo",
    artist: "Aditya & Shradhha",
    sub: "Acoustic Love",
    file: "music/idhar zara sa dekhlo.mp3",
    thumb: "music/idhar zara sa dekhlo.jpg"
  },
  {
    id: 2,
    title: "Jaan Ho Meri",
    artist: "Aditya & Shradhha",
    sub: "Forever Yours",
    file: "music/jaan ho meri.mp3",
    thumb: "music/jaan ho meri.webp"
  }
];

let currentTrackIndex = -1;
let isMusicPlaying = false;
const globalAudioPlayer = document.getElementById('globalAudioPlayer');
const floatingMusicBar = document.getElementById('floatingMusicBar');
const floatingMusicWidget = document.getElementById('floatingMusicWidget');
const floatingMusicTrigger = document.getElementById('floatingMusicTrigger');

function toggleFloatingPlayer(e) {
  if (e) e.stopPropagation();
  if (!floatingMusicWidget) return;
  if (floatingMusicWidget.classList.contains('revealed')) {
    collapseFloatingPlayer();
  } else {
    revealFloatingPlayer();
  }
}

function revealFloatingPlayer() {
  if (!floatingMusicWidget) return;
  // If no track selected yet, default to first track so player has content
  if (currentTrackIndex < 0) {
    currentTrackIndex = 0;
    const track = SOUNDTRACK_PLAYLIST[0];
    const titleEl = document.getElementById('floatingTrackTitle');
    const subEl = document.getElementById('floatingTrackSub');
    const discImg = document.getElementById('floatingDiscImg');
    if (titleEl) titleEl.textContent = track.title;
    if (subEl) subEl.textContent = track.artist;
    if (discImg) discImg.src = track.thumb;
  }
  floatingMusicWidget.classList.add('revealed');
}

function collapseFloatingPlayer(e) {
  if (e) e.stopPropagation();
  if (floatingMusicWidget) {
    floatingMusicWidget.classList.remove('revealed');
  }
}

function updateMusicUI(isPlaying) {
  // Update floating bar and widget
  if (floatingMusicWidget) {
    if (isPlaying) {
      floatingMusicWidget.classList.add('playing');
    } else {
      floatingMusicWidget.classList.remove('playing');
    }
  }

  if (floatingMusicBar) {
    if (currentTrackIndex >= 0) {
      const track = SOUNDTRACK_PLAYLIST[currentTrackIndex];
      const titleEl = document.getElementById('floatingTrackTitle');
      const subEl = document.getElementById('floatingTrackSub');
      const discImg = document.getElementById('floatingDiscImg');
      const playPauseIcon = document.getElementById('floatingPlayPauseIcon');

      if (titleEl) titleEl.textContent = track.title;
      if (subEl) subEl.textContent = track.artist;
      if (discImg) discImg.src = track.thumb;

      if (floatingMusicTrigger) {
        floatingMusicTrigger.setAttribute('title', isPlaying 
          ? `Now Playing: ${track.title} ♪ (Tap to reveal player)` 
          : `Soundtrack: ${track.title} (Tap to reveal player)`);
      }

      if (isPlaying) {
        floatingMusicBar.classList.add('playing');
        if (playPauseIcon) {
          playPauseIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        }
      } else {
        floatingMusicBar.classList.remove('playing');
        if (playPauseIcon) {
          playPauseIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
        }
      }
    }
  }

  // Update modal cards
  SOUNDTRACK_PLAYLIST.forEach((t, idx) => {
    const card = document.getElementById(`soundtrack-card-${idx}`);
    if (card) {
      if (idx === currentTrackIndex && isPlaying) {
        card.classList.add('playing');
      } else {
        card.classList.remove('playing');
      }
    }
  });

  // Sync hero volume icon
  const heroIcon = document.getElementById('heroVolumeIcon');
  if (heroIcon) {
    if (isPlaying) {
      heroIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
    } else {
      heroIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
    }
  }
}

function playMusicTrack(index) {
  if (index < 0 || index >= SOUNDTRACK_PLAYLIST.length) return;
  if (!globalAudioPlayer) return;

  // Toggle if clicked already playing track
  if (currentTrackIndex === index && isMusicPlaying) {
    globalAudioPlayer.pause();
    return;
  }

  currentTrackIndex = index;
  const track = SOUNDTRACK_PLAYLIST[index];
  
  if (globalAudioPlayer.src.indexOf(encodeURI(track.file)) === -1 && !globalAudioPlayer.src.endsWith(track.file)) {
    globalAudioPlayer.src = encodeURI(track.file);
  }

  globalAudioPlayer.play().then(() => {
    isMusicPlaying = true;
    updateMusicUI(true);
    localStorage.setItem('usflix_track_index', index);
    localStorage.setItem('usflix_music_playing', 'true');
    showToast(`Playing Soundtrack: ${track.title} ♪`);
  }).catch(err => {
    console.log("Playback awaiting user gesture:", err);
  });
}

function toggleMusicPlayback() {
  if (!globalAudioPlayer) return;
  if (currentTrackIndex === -1) {
    playMusicTrack(0);
    return;
  }

  if (globalAudioPlayer.paused) {
    globalAudioPlayer.play().then(() => {
      isMusicPlaying = true;
      updateMusicUI(true);
      localStorage.setItem('usflix_music_playing', 'true');
      showToast(`Resumed: ${SOUNDTRACK_PLAYLIST[currentTrackIndex].title}`);
    }).catch(err => console.log(err));
  } else {
    globalAudioPlayer.pause();
    isMusicPlaying = false;
    updateMusicUI(false);
    localStorage.setItem('usflix_music_playing', 'false');
    showToast(`Paused: ${SOUNDTRACK_PLAYLIST[currentTrackIndex].title}`);
  }
}

function nextMusicTrack() {
  const nextIdx = (currentTrackIndex + 1) % SOUNDTRACK_PLAYLIST.length;
  playMusicTrack(nextIdx);
}

function prevMusicTrack() {
  if (globalAudioPlayer && globalAudioPlayer.currentTime > 3) {
    globalAudioPlayer.currentTime = 0;
    return;
  }
  const prevIdx = (currentTrackIndex - 1 + SOUNDTRACK_PLAYLIST.length) % SOUNDTRACK_PLAYLIST.length;
  playMusicTrack(prevIdx);
}

function stopMusicPlayback() {
  if (globalAudioPlayer) {
    globalAudioPlayer.pause();
    globalAudioPlayer.currentTime = 0;
  }
  isMusicPlaying = false;
  updateMusicUI(false);
  collapseFloatingPlayer();
  localStorage.setItem('usflix_music_playing', 'false');
  currentTrackIndex = -1;
  showToast("Soundtrack stopped");
}

if (globalAudioPlayer) {
  globalAudioPlayer.addEventListener('play', () => {
    isMusicPlaying = true;
    updateMusicUI(true);
  });
  globalAudioPlayer.addEventListener('pause', () => {
    isMusicPlaying = false;
    updateMusicUI(false);
  });
  globalAudioPlayer.addEventListener('ended', () => {
    // Auto-advance to next song
    nextMusicTrack();
  });
  globalAudioPlayer.addEventListener('timeupdate', () => {
    if (globalAudioPlayer.currentTime > 0) {
      localStorage.setItem('usflix_track_time', globalAudioPlayer.currentTime);
    }
  });
}

// Restore soundtrack state from localStorage on page load in app.js
window.addEventListener('DOMContentLoaded', () => {
  const savedIndex = localStorage.getItem('usflix_track_index');
  const wasPlaying = localStorage.getItem('usflix_music_playing') === 'true';
  const savedTime = parseFloat(localStorage.getItem('usflix_track_time') || '0');

  if (savedIndex !== null && !isNaN(parseInt(savedIndex))) {
    const idx = parseInt(savedIndex);
    if (idx >= 0 && idx < SOUNDTRACK_PLAYLIST.length) {
      currentTrackIndex = idx;
      const track = SOUNDTRACK_PLAYLIST[idx];
      if (globalAudioPlayer) {
        globalAudioPlayer.src = encodeURI(track.file);
        if (savedTime > 0) {
          globalAudioPlayer.currentTime = savedTime;
        }
      }
      const titleEl = document.getElementById('floatingTrackTitle');
      const subEl = document.getElementById('floatingTrackSub');
      const discImg = document.getElementById('floatingDiscImg');
      if (titleEl) titleEl.textContent = track.title;
      if (subEl) subEl.textContent = track.artist;
      if (discImg) discImg.src = track.thumb;

      if (wasPlaying && globalAudioPlayer) {
        globalAudioPlayer.play().then(() => {
          isMusicPlaying = true;
          updateMusicUI(true);
        }).catch(() => {
          // Auto-resume on first interaction if blocked by browser policy
          const resumeOnFirstClick = () => {
            if (localStorage.getItem('usflix_music_playing') === 'true' && globalAudioPlayer && globalAudioPlayer.paused) {
              globalAudioPlayer.play().catch(() => {});
            }
            document.removeEventListener('click', resumeOnFirstClick);
          };
          document.addEventListener('click', resumeOnFirstClick);
        });
      }
    }
  }
});

// Hero soundtrack ambient toggle
function toggleAmbientMusic() {
  if (isMusicPlaying) {
    toggleMusicPlayback();
  } else {
    if (currentTrackIndex >= 0) {
      toggleMusicPlayback();
    } else {
      playMusicTrack(0);
    }
  }
}

// Backwards compatibility alias
function playAudioTrack(trackId, title) {
  const idx = Math.max(0, Math.min(SOUNDTRACK_PLAYLIST.length - 1, trackId - 1));
  playMusicTrack(idx);
}

// --- ANIMATE NUMBERS ON SCROLL ---
let statsAnimated = false;
function animateStats() {
  const statsSection = document.getElementById('stats');
  if (!statsSection || statsAnimated) return;

  const rect = statsSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.85) {
    statsAnimated = true;
    document.querySelectorAll('.count-up').forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const isLarge = target > 1000;
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        el.textContent = isLarge ? count.toLocaleString() : count;
      }, 35);
    });
  }
}

window.addEventListener('scroll', animateStats);

// --- SOUNDTRACK MODAL ---
const soundtracksModal = document.getElementById('soundtracksModal');
function openSoundtrackModal() {
  if (soundtracksModal) {
    soundtracksModal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSoundtrackModal() {
  if (soundtracksModal) {
    soundtracksModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

if (soundtracksModal) {
  soundtracksModal.addEventListener('click', (e) => {
    if (e.target === soundtracksModal) {
      closeSoundtrackModal();
    }
  });
}

// --- LIGHTBOX MODAL & MEMORY NAVIGATION ---
const TOP_MOMENTS_LIST = [
  {
    src: 'img1.jpg',
    title: 'Parisian Terrace Coffee',
    meta: "Our little coffee ritual where you steal half my drink and smile innocent. Wouldn't trade it for the world ♥"
  },
  {
    src: 'img2.jpg',
    title: 'Santorini Clifftop Golden Hour',
    meta: "Wind in your hair, cotton-candy pink sky, and the exact second I knew you were my forever."
  },
  {
    src: 'img3.jpg',
    title: 'Misty Beach Sunset Walk',
    meta: "Cold sea breeze, wet sand between our toes, and your hand safely tucked in my jacket pocket."
  },
  {
    src: 'img4.jpg',
    title: 'Quiet Mornings & Croissants',
    meta: "Fresh croissants, warm tea, and talking about where we'll be 20 years from today."
  },
  {
    src: 'img6.jpg',
    title: 'Golden Coastline Drive',
    meta: "Windows down, singing totally off-key to our favorite song, hair a total mess."
  },
  {
    src: 'heroimg.png',
    title: 'Eternity on the Mountain Peak',
    meta: "Standing above the clouds holding your hand. The best part of the world is right beside me."
  },
  {
    src: 'img2.jpg',
    title: 'Stargazing & Midnight Talks',
    meta: "Pointing out our own silly constellations and whispering secrets under a blanket of stars."
  },
  {
    src: 'img3.jpg',
    title: 'Laughing in the Storm',
    meta: "Soaking wet shoes, an umbrella turned inside out, and the hardest belly laugh of our lives."
  }
];

let currentMemoryIndex = 0;
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');

function openMemoryByIndex(index) {
  currentMemoryIndex = (index + TOP_MOMENTS_LIST.length) % TOP_MOMENTS_LIST.length;
  updateMemoryContent();
  if (lightboxModal) {
    lightboxModal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
}

function updateMemoryContent() {
  const item = TOP_MOMENTS_LIST[currentMemoryIndex];
  if (!item) return;
  if (lightboxImage) {
    lightboxImage.style.opacity = '0.35';
    setTimeout(() => {
      lightboxImage.src = item.src;
      if (lightboxTitle) lightboxTitle.textContent = item.title;
      if (lightboxMeta) lightboxMeta.textContent = item.meta;
      const counterEl = document.getElementById('lightboxCounter');
      if (counterEl) counterEl.textContent = `Moment ${currentMemoryIndex + 1} of ${TOP_MOMENTS_LIST.length}`;
      lightboxImage.style.opacity = '1';
    }, 120);
  }
}

function nextMemory(e) {
  if (e) e.stopPropagation();
  currentMemoryIndex = (currentMemoryIndex + 1) % TOP_MOMENTS_LIST.length;
  updateMemoryContent();
}

function prevMemory(e) {
  if (e) e.stopPropagation();
  currentMemoryIndex = (currentMemoryIndex - 1 + TOP_MOMENTS_LIST.length) % TOP_MOMENTS_LIST.length;
  updateMemoryContent();
}

function openLightbox(src, title, meta) {
  // If moment matches an item in TOP_MOMENTS_LIST, sync to its index
  const matchIdx = TOP_MOMENTS_LIST.findIndex(m => m.title === title || m.src === src);
  if (matchIdx !== -1) {
    openMemoryByIndex(matchIdx);
    return;
  }

  if (lightboxModal) {
    if (lightboxImage) lightboxImage.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title || 'Our Moment';
    if (lightboxMeta) lightboxMeta.textContent = meta || '';
    const counterEl = document.getElementById('lightboxCounter');
    if (counterEl) counterEl.textContent = 'Moment';
    lightboxModal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  if (lightboxModal) {
    lightboxModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

if (lightboxModal) {
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });
}

// Arrow Key Navigation for Lightbox Modal
document.addEventListener('keydown', (e) => {
  if (lightboxModal && lightboxModal.classList.contains('open')) {
    if (e.key === 'ArrowRight') {
      nextMemory();
    } else if (e.key === 'ArrowLeft') {
      prevMemory();
    }
  }
});

// Global function to close any open modal and restore home view
function closeAllModals() {
  closePlayerModal();
  closeEpisodesModal();
  closeLetterModal();
  closeSoundtrackModal();
  closeLightbox();
  if (galleryModal) closeGalleryModal();
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
}

// --- GALLERY MODAL ---
const galleryModal = document.getElementById('galleryModal');
function openGalleryModal() {
  if (galleryModal) {
    galleryModal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeGalleryModal() {
  if (galleryModal) {
    galleryModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

if (galleryModal) {
  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
      closeGalleryModal();
    }
  });
}

// Close modals and collapse floating player on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
    if (searchBarContainer) searchBarContainer.classList.remove('open');
    collapseFloatingPlayer();
  }
});

// Collapse floating music player on clicking outside
document.addEventListener('click', (e) => {
  if (floatingMusicWidget && floatingMusicWidget.classList.contains('revealed')) {
    if (!floatingMusicWidget.contains(e.target)) {
      collapseFloatingPlayer();
    }
  }
});

// --- AMBIENT FLOATING HEARTS (MINIMAL & DELICATE) ---
function initFloatingHearts() {
  const container = document.getElementById('floatingHeartsContainer');
  if (!container) return;

  const heartGlyphs = ['♥', '♡'];

  function spawnDelicateHeart() {
    // Keep max 4 active hearts on screen at any time (very sparse & non-intrusive)
    if (container.childElementCount >= 4) return;

    const heart = document.createElement('span');
    heart.className = 'ambient-heart';
    heart.textContent = heartGlyphs[Math.floor(Math.random() * heartGlyphs.length)];

    const startX = (Math.random() * 88 + 6).toFixed(1); // 6vw to 94vw
    const duration = (Math.random() * 5 + 12).toFixed(1); // 12s to 17s slow drift
    const size = Math.floor(Math.random() * 7 + 11); // 11px to 17px (tiny)
    const opacity = (Math.random() * 0.2 + 0.16).toFixed(2); // 0.16 to 0.36 (subtle)
    const swayX = (Math.random() * 34 - 17).toFixed(0) + 'px'; // -17px to +17px gentle sway

    heart.style.left = startX + 'vw';
    heart.style.fontSize = size + 'px';
    heart.style.setProperty('--target-opacity', opacity);
    heart.style.setProperty('--sway-x', swayX);
    heart.style.animationDuration = duration + 's';

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, parseFloat(duration) * 1000);
  }

  // Initial gentle spawn
  setTimeout(spawnDelicateHeart, 800);
  setTimeout(spawnDelicateHeart, 3200);

  // Spawn interval (every 4.5s)
  setInterval(spawnDelicateHeart, 4500);
}

window.addEventListener('DOMContentLoaded', initFloatingHearts);

console.log("USFLIX for Aditya & Shradhha loaded successfully.");
