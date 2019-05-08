export function fetchMadlib() {
  return fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25').then(response => response.json(),
  error => console.log('Error ', error)
  ).then(function(json) {
    if (json.length > 0) {
      const title = json.title;
      const blanks = json.blanks;
      const value = json.value;
    } else {
      console.log('no Madlib available');
    }
    console.log(json)
  });
}
