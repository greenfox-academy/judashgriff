"use strict"

let images = [
    {"title": "Avalokiteśvara",
    "text": "Avalokiteśvara is a bodhisattva who embodies the compassion of all Buddhas. She is vastly renowned in Southeast Asia, China and Tibet with different names and forms. In the picture above is easy to see her most known and common form with the 1000 arms and 500 heads.",
    "url": "assets/avalokitesvara.png"},

    {"title": "Ākāśagarbha",
    "text": "Ākāśagarbha Bodhisattva is a bodhisattva\
     who is associated with the great element of space.",
    "url": "assets/akashagarbha.png"},

    {"title": "Amitābha",
    "text": "Amitābha, also Amida or Amitāyus, is a\
     celestial buddha according to the scriptures of\
     Mahāyāna Buddhism.According to the scriptures,\
     Amitābha possesses infinite merits resulting \
    from good deeds over countless past lives as a \
    bodhisattva named Dharmakāra. Amitābha means \
    'Infinite Light' so Amitābha is also called \
    'The Buddha of Immeasurable Life and Light'.",
    "url": "assets/amitabha.png"},

    {"title": "Guanyin",
    "text": "Guanyin or Guan Yin is an East Asian \
    bodhisattva associated with compassion as \
    venerated by Mahayana Buddhists. She is \
    commonly known as the 'Goddess of Mercy'\
     in English and Gayatri in Hindi. The \
    Chinese name Guanyin is short for Guanshiyin, \
    meaning '[The One Who] Perceives the Sounds \
    of the World'.",
    "url": "assets/koan_yin.png"},

    {"title": "Padmasambhava",
    "text": "Padmasambhava (lit. 'Lotus-Born'), \
    also known as Guru Rinpoche, was an 8th-century \
    Indian Buddhist master. Although there was a \
    historical Padmasambhava, nothing is known of \
    him apart from helping the construction of the \
    first Buddhist monastery in Tibet at Samye, at \
    the behest of Trisong Detsen, and shortly \
    thereafter leaving Tibet due to court intrigues. \
    A number of legends have grown around Padmasambhava's \
    life and deeds, and he is widely venerated as a \
    'second Buddha' across Tibet, Nepal, Bhutan, and \
    the Himalayan states of India.",
    "url": "assets/padmasambhava.png"},

    {"title": "Tara",
    "text": "Tara or Ārya Tārā, also known as Jetsun \
    Dölma in Tibetan Buddhism, is a female Bodhisattva \
    in Mahayana Buddhism who appears as a female Buddha \
    in Vajrayana Buddhism. She is known as the \
    'mother of liberation', and represents the \
    virtues of success in work and achievements. \
    She is known as Tara Bosatsu (多羅菩薩) in Japan, \
    and occasionally as Duōluó Púsà (多羅菩薩) in \
    Chinese Buddhism.",
    "url": "assets/white_tara.png"}
]

let leftArrow = document.querySelector(".left");
let righrArrow = document.querySelector(".right");

let mainPic = document.querySelector("#center");
let mainHead = document.querySelector(".text h3");
let mainText = document.querySelector(".text p");

let selector = document.querySelector("#selectors");

let current = 0;

let i = 0;
images.forEach(function(element){
    let newPic = document.createElement("span");
    newPic.classList.add("pic");
    newPic.classList.add("img" + [i]);
    let link = document.createElement("a");
    link.style.backgroundImage = "url(" + images[i]['url'] + ")"
    newPic.appendChild(link);
    selector.appendChild(newPic);
    i += 1; 
});

mainText.textContent = images[current]["text"];
mainPic.style.backgroundImage = 'url(' + images[current]["url"] + ')';
mainHead.textContent = images[current]["title"];

leftArrow.addEventListener("click", function(){
    if (current === 0) {
        current = images.length -1;
    } else {
        current -= 1;
    };
    refresh();
});

righrArrow.addEventListener("click", function(){
    if (current === images.length -1) {
        current = 0;
    } else {
        current += 1;
    };
    refresh();
});

function refresh() {
    mainHead.textContent = images[current]["title"];
    mainText.textContent = images[current]["text"];
    mainPic.style.backgroundImage = 'url(' + images[current]["url"] + ')';
};

let body = document.querySelector("body");

mainPic.addEventListener("click", function(){
    mainPic.classList.toggle("shown");
    body.classList.toggle("dark");
    mainHead.classList.toggle("hidden");
    mainText.classList.toggle("hidden");
});