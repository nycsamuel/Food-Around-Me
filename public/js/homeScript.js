// DOM loaded
$(document).ready(() => {
  console.log('script loaded!');

  // check if browser supports geolocation
  if ('getlocation' in navigator) {
    navigator.geolocation.getCurrentPosition(pos => {
      const currentLat = pos.coords.latitude;
      const currentLng = pos.coords.longitude;
    });
  } else {
    console.log('geolocation not available');
  }

  const speechRecognition = new webkitSpeechRecognition();

  const talkBtn = $('#speak');

  talkBtn.on('click', () => {
    speechRecognition.start();
  });

  speechRecognition.onresult = event => {
    console.log(event.results[0][0].transcript);
    let words = event.results[0][0].transcript;

    // send words to the server
    const hiddenForm  = $('#hiddenForm');
    const hiddenInput = $('<input>');
    hiddenInput.attr('type', 'hidden');
    hiddenInput.attr('name', 'speech');
    hiddenInput.attr('value', words);
    hiddenForm.append(hiddenInput);
    hiddenForm.submit();
  };
});


/*
$.ajax({
  type    : 'POST',
  data    : { speech: words },
  url     : '/search',
  success : () => console.log('success'),
})
.done(() => {
  // $('#hiddenForm').submit();
});

$('#hiddenForm').submit();
*/
