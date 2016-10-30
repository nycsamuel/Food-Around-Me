$(document).ready(() => {
  console.log('dom loaded!');

  const speechRecognition = new webkitSpeechRecognition();
  speechRecognition.onresult = event => {
    console.log(event.results[0][0].transcript);
    let words = event.results[0][0].transcript;
    $.ajax({
      type    : 'POST',
      data    : words,
      url     : 'http://localhost:3000/search',
      success : () => console.log(success),
    });
  };

  const talkBtn = $('#speak');

  talkBtn.on('click', () => {
    speechRecognition.start();
  });

});
