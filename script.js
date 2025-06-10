// 감정별 데이터 구조
const moodData = {  "우울": {
    bgImage: "images/backgrounds/gloom.gif",
    songs: [
      {
        title: "While My Guitar Gently Weeps",
        artist: "George Harrison",
        image: "images/gorge.jpeg",
        music: "music/while.mp3",
        text: "'모든 실수들과 함께, 우리는 분명 배우는 중일 거야.<br>여전히 내 기타는 부드럽게 울고 있어.' ",
       
      },
      {
        title: "Knockin' on Heaven's Door",
        artist: "Bob Dylan",
        image: "images/Bob.jpg",
        music: "music/bob.mp3",
        text: "Knock-knock-knockin' on Heaven's door.<br>반전주의 음악의 대표이자 밥 딜런의 명곡.",
       
      },
      {
        title: "Eleanor Rigby",
        artist: "The Beatles",
        image: "images/elenor.jpg",
        music: "music/ele.mp3",
        text: "'Ah, look at all the lonely people, Where do they all come from? <br> 저 외로운 사람들을 봐. 그들은 어디서 온 걸까' 쌀쌀한 가을에 들어보세요.",
        
      },
      {
        title: "Tears in Heaven",
        artist: "Eric Clapton",
        image: "images/tears.jpeg",
        music: "music/tears.mp3",
        text: "'내가 천국에서 널 만난다면, 넌 내 이름을 기억하고 있을까?'",
       
      }
    ]
  },
  "사랑": {
    bgImage: "images/backgrounds/love3.gif",
    songs: [
      {
        title: "Layla",
        artist: "Eric Clapton",
        image: "images/layla.jpg",
        music: "music/Layla.mp3",
        text: "친구의 여자를 사랑했네. 애릭 클랩튼이 자신의 절친인 비틀즈의 맴버 조지 해리슨의 아내, <br>패티 보이드에게 바치는 구애의 곡. 'Layla! you got me on my knees!'",
        
      },
      {
        title: "Silver spring",
        artist: "Fleetwood Mac",
        image: "images/silver.jpeg",
        music: "music/Silver Springs (2004 Remaster).mp3",
        text: "'Time cast a spell on you, but you won't forget me' 시간이 너에게 마법을 걸었지만, 넌 날 잊지 못할 거야. <br>사랑의 감정을 처절하게 담아낸 곡. <br>끊을 수 없는 질긴 사랑을 할 때, 이 노래를 들어보세요.",
        
      },
      {
        title: "Dangerous",
        artist: "Roxette",
        image: "images/danger.jpg",
        music: "music/danger.mp3",
        text: "팜므 파탈같은 상대의 매력에서 헤어나오지 못해 갈팡 질팡하는 마음을 담은 곡. 1970년대 액션영화에서 영감을 받아 작곡되었다.<br> 'Hold on tight, you know she's a little bit dangerous' ",
       
      },
      {
        title: "Hysteria",
        artist: "Def Leppard",
        image: "images/hys.jpg",
        music: "music/Hys.mp3",
        text: "사랑에 빠졌을때, 만약 당신이 있는 그곳이 한여름 밤이라면.. 이 곡을 들어보세요.<br> 마법에 걸린것 처럼 격렬한 사랑에 빠진 감정을 노래하는 곡. 'Oh, I get hysterical, hysteria, can you feel it, do you believe it'  ",
       
      }
    ]
  },
  "향수": {
    bgImage: "images/backgrounds/sc.gif",
    songs: [
      {
        title: "Starman",
        artist: "David Bowie",
        image: "images/star.jpg",
        music: "music/da.mp3",
        text: "'하늘에서 기다리는 Starman이 있어. 여기로 와서 우릴 만나고 싶어 하지만, 우리 마음을 다치게 할 거라고 생각하지' <br>잔잔한 멜로디, 어딘가 쓸쓸한 그의 목소리가 매력적이다. 새벽 밤공기를 맡으며 듣기 좋은 곡.",
      },
      {
        title: "Sonnet",
        artist: "The Vere",
        image: "images/Sonnet.jpg",
        music: "music/sonn.mp3",
        text: "'그녀에게 아직 사랑의 감정이 조금이라도 남아있다면, 우리는 다시 사랑 할 수 있지 않을까?' <br>애인과의 오래된 추억을 뒤적이던 중, 그녀에 대한 생각에 잠긴 화자의 심정에 대한 곡. 따뜻한 5월의 향수가 느껴진다. ",
        
      },
      {
        title: "In My Life",
        artist: "The Beatles",
        image: "images/my.jpg",
        music: "music/in.mp3",
        text: "'어떤 사람들은 떠났고, 어떤 사람들은 살아있죠. 살아가면서 난 그 모두를 사랑해 왔어요' <br>과거의 친구들과 사랑했던 순간들을 회상하며, 변해버린 현재에 대한 아련한 감정을 노래하는 곡. ",
        
      },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        image: "images/stair.jpg",
        music: "music/stair.mp3",
        text: "'당신이 갈 수 있는 길은 2개지만, 멀리 본다면 발 올린 길을 바꿀 시간은 충분해요'<br>점진적으로 고조되는 멜로디와 심오한 가사, 아련한 향수가 느껴지는 곡",
        
      }
    ]
  },
  "행복": {
    bgImage: "images/backgrounds/happy2.gif",
    songs: [
      {
        title: "Tiny Dancer",
        artist: "Elton John",
        image: "images/Tiny Dancer.jpg",
        music: "music/Tiny Dancer.mp3",
        text: "분위기가 고조되는 코러스가 매력적. 두 영국인이 바라보는 캘리포니아의 정취 <br>'Hold me closer tiny dancer, Count the headlights on the highway!' 드라이브 할때 듣기 좋은 곡.",
        
      }
      ,{
        title: "Mr.Blue Sky",
        artist: "Electric Light Orchestra",
        image: "images/blue.jpg",
        music: "music/blue.mp3",
        text: "말 그대로 하늘이 파랗게 갠 느낌! <br>기분 전환이 필요할 때",
        
      },
      {
        title: "She’s a Rainbow",
        artist: "The Rolling Stones",
        image: "images/she.jpg",
        music: "music/she.mp3",
        text: "사랑이 처음 시작될 때의 눈부신 찬란함. <br> She comes in colors everywhere",
        
      },
      {
        title: "Modern Love",
        artist: "David Bowie",
        image: "images/modern.jpg",
        music: "music/modern.mp3",
        text: "빠르고 경쾌한 비트 위에 현대인의 사랑과 갈등을 솔직하게 풀어낸, 에너지 넘치는 곡",
        
      }
    ]
  },
  "고독": {
    bgImage: "images/backgrounds/pale.mp4",
    songs: [
      {
        title: "People are strange",
        artist: "The doors",
        image: "images/doors.jpeg",
        music: "music/doors.mp3",
        text: "'네가 낯선 사람일때,사람들은 이상해' <br> 낯선 세상에서 느끼는 소외와 고독을 몽환적이면서도 신비롭게 그려내다",
      
      },
      {
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        image: "images/wish.jpg",
        music: "music/wish.mp3",
        text: "잃어버린 친구에 대한 그리움과 쓸쓸함.<br>가사와 멜로디에 스며들어 위로받고 싶을 때",
      
      },
      {
        title: "Landslide",
        artist: "Fleetwood Mac",
        image: "images/land.jpg",
        music: "music/land.mp3",
        text: " 변화와 성장 속에서 느끼는 외로움과 불안을 노래하다.<br> 'Can I handle the seasons of my life'",
      
      },
      {
        title: "Pale Blue Eyes",
        artist: "The Velvet Underground",
        image: "images/pale.jpg",
        music: "music/pale.mp3",
        text: "애틋하고 서정적인 사랑과 그리움, <br> 밤에 듣기 좋은 고독감이 묻어나는 저음 보컬의 명곡. ",
      
      }
    ]
  },
  "그리움": {
    bgImage: "images/backgrounds/nos.mp4",
    songs: [
      {
        title: "Sister Golden Hair",
        artist: "America",
        image: "images/sister.jpg",
        music: "music/sister.mp3",
        text: "I tried to make it Sunday, but I got so damn depressed <br>사랑을 놓친 뒤, 다시 다가갈 수 없음을 아는 사람의 안타까운 그리움. ",
      
      },
      {
       title: "Love Her Madly",
        artist: "The Doors",
        image: "images/loveher.jpg",
        music: "music/loveher.mp3",
        text: " 도어스 특유의 텁텁한 그리움. <br>Don’t you love her as she’s walking out the door! ",
      
      },
      {
       title: "Love of My Life",
        artist: "Queen",
        image: "images/loveof.jpg",
        music: "music/loveof.mp3",
        text: " 조용한 밤, 누군가를 너무 사랑했던 기억이 갑자기 밀려올 때 듣기 좋은 곡<br>Love of my life, you’ve hurt me ",
      },
      {
       title: "For No One",
        artist: "The Beatles",
        image: "images/for.jpg",
        music: "music/for.mp3",
        text: " 마음이 멀어진 사람과의 추억을 곱씹고 싶을 때 <br> 체념 속의 그리움을 담은 노래",
      }
    ]
  },
    "희망": {
    bgImage: "images/backgrounds/hope.gif",
    songs: [
      {
        title: "You Can’t Always Get What You Want",
        artist: "The Rolling Stones",
        image: "images/youcant.jpg",
        music: "music/youcant.mp3",
        text: " 좌절감에 빠졌지만, 포기하지 않고 희망을 찾고 싶을 때.<br>ou can’t always get what you want, but if you try sometimes, you just might find... ",
      
      },
      {
       title: "Don’t Stop Believin’",
        artist: "Journey",
        image: "images/dontstop.jpg",
        music: "music/dontstop.mp3",
        text: "Don’t stop believin’!<br>힘들고 지칠 때, 포기하지 말고 끝까지 버텨야 할 때 듣기 좋은 곡 ",
      
      },
      {
       title: "Have You Ever Seen The Rain",
        artist: "Creedence Clearwater Revival",
        image: "images/haveyou.jpeg",
        music: "music/haveyou.mp3",
        text: " 결국은 밝은 날이 올 것이란 희망을 주는 곡<br>비 온 후에 듣기 좋다 ",
      },
      {
       title: "Simple Man",
        artist: "Lynyrd Skynyrd",
        image: "images/simple.jpeg",
        music: "music/simple.mp3",
        text: "인생을 복잡하게 만들지 말고, 진솔하고 단순하게 살아가라는 어머니의 말씀으로 쓰여진 곡 <br>'Be a simple kind of man!' ",
      }
    ]
  }


  
};


 

// 키워드 클릭 이벤트 등록 (DOMContentLoaded 후 실행하는 게 안전)
document.addEventListener("DOMContentLoaded", () => {
  // .keyword 요소들 선택
  const keywords = document.querySelectorAll('.keyword');

  keywords.forEach(span => {
    span.addEventListener('click', () => {
      const mood = span.dataset.mood;
      if(mood) displaySongs(mood);
    });
  });
});

// 추천곡 리스트 보여주는 함수
function displaySongs(mood) {
  const songList = document.getElementById("songList");
  const description = document.getElementById("description");
  const main = document.querySelector("main");
  const playPauseButton = document.getElementById("customPlayPause");
  const audio = document.getElementById("audioPlayer");

  // 기존 내용 초기화
  songList.innerHTML = "";
  description.style.display = "none";
  description.innerHTML = "";
  audio.style.display = "none";
  audio.pause();
  audio.src = "";
  if (playPauseButton) {
    playPauseButton.style.display = "none";
    playPauseButton.src = "images/play.png";
  }

  // moodData에 해당 감정 데이터가 있는지 확인
  if (moodData[mood]) {
    // 배경 이미지 설정
    main.style.backgroundImage = `url(${moodData[mood].bgImage})`;
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";
    main.style.backgroundRepeat = "no-repeat";

    // 곡 데이터 배열 반복
    moodData[mood].songs.forEach(song => {
      const card = document.createElement("div");
      card.className = "song-card";
      card.innerHTML = `
        <img src="${song.image}" alt="${song.title}">
        <strong>${song.title}</strong><br><em>${song.artist}</em>
      `;
card.addEventListener("click", () => {
  // 코멘트 처리
  description.innerHTML = song.text.split(",").map(t => t.trim()).join(" | ");
  description.style.display = "block";
  description.style.fontSize = "0.9rem";

  // 음악 재생 준비
  audio.src = song.music;
  audio.style.display = "none"; // 기본 컨트롤 안 보이게
  audio.pause();

  // 이미지 플레이버튼 보이게
  if (playPauseButton) {
    playPauseButton.style.display = "inline-block";
    playPauseButton.src = "images/play.png";

    // 이벤트 초기화 (이미지 버튼만)
    const newBtn = playPauseButton.cloneNode(true);
    playPauseButton.parentNode.replaceChild(newBtn, playPauseButton);

    newBtn.onclick = () => {
      if (audio.paused) {
        audio.play();
        newBtn.src = "images/pause.png";
      } else {
        audio.pause();
        newBtn.src = "images/play.png";
      }
    };
  }
});

      
      songList.appendChild(card);
    });
  } else {
    // moodData에 해당 감정이 없으면 배경 초기화 및 메시지 출력
    main.style.backgroundImage = "";
    songList.innerHTML = `<p class="no-songs-message">해당 감정에 맞는 곡을 찾을 수 없어요.</p>`;
  }
}
