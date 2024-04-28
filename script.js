let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); //getVoices select all voices available in device that is mobile or laptop
    speech.voice=voices[0]; //Default voice

    //Display each voices in the dropdown

    voices.forEach((voice,i) =>(voiceSelect.options[i] = new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",() =>{
    speech.voice = voices[voiceSelect.value]; //To change voice , when clicking or selecting another voice
});

//To convert text to voice
document.querySelector("button").addEventListener("click",() =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});



