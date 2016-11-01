$(document).ready(() => {
  console.log('mic script loaded!');

  // check if browser supports geolocation and get current geolocation
  if ('getlocation' in navigator) {
    navigator.geolocation.getCurrentPosition(pos => {
      const currentLat = pos.coords.latitude;
      const currentLng = pos.coords.longitude;
    });
  } else {
    console.log('geolocation not available');
  }

  // create new html5 webkitSpeechRecognition obj
  const speechRecognition = new webkitSpeechRecognition();

  // btn starts the speechRecognition
  const mic = $('#speak');
  mic.on('click', () => {
    speechRecognition.start();
  });

  // after speechRecognition, it gets the transcribed speech and
  // uses hidden form to send the transcribed text to '/search'
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
