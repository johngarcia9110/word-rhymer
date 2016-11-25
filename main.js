//TODO: form validation

var api = 'https://api.datamuse.com/words?rel_rhy=';
var query = api + userWord + '&callback';
var rhymingWord = document.getElementById('result');
var userWord = '';

var displayRhyme = function(wordOne, wordTwo){
  console.log(userWord);
  rhymingWord.innerHTML = '"' + wordOne + '"' +' ryhmes with: ' + '"' + wordTwo + '"';
}

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.responseType = "json";
  xhr.onload = function() {
  var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
}

var getRhyme = function(){
  userWord = document.getElementById('userWord').value;

  getJSON(api + userWord + '&callback',function(err, data) {

    displayRhyme( userWord , data[0].word);

  });

}
