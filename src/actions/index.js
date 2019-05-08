export function fetchMadlib() {
  return fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25').then(response => response.json()).then(function(json) {console.log(json)
  });
}
