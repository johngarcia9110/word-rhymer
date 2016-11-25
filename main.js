var api = 'https://api.datamuse.com/words?rel_rhy=';
var query = api + userWord + '&callback';
var rhymingWord = document.getElementById('result');
var numberOfRhymes = 5;
var userWord = '';

var displayRhyme = function(wordOne, rhymingWords){
  rhymingWord.innerHTML = wordOne +' rhymes with: ' + '<br>' + rhymingWords.join(', ');
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
  userWord = document.getElementById('userWord').value; //get the submitted word
  userWord = userWord.match(/\D/g).join(''); //get only the letters

  getJSON(api + userWord + '&callback',function(err, data) { //send to api
    var wordsThatRhyme = [];
    for(var i = 0; i < numberOfRhymes; i++){
      wordsThatRhyme.push(data[i].word);
    }
    displayRhyme( userWord , wordsThatRhyme);//display words in document
  });

}
