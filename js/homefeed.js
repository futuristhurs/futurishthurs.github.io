var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/content');
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    var html = '';
    for (var i = 0; i < data.length; i++) {
      html += '<div class="feed-item">' +
        '<h2>' + data[i].title + '</h2>' +
        '<p>' + data[i].description + '</p>' +
        '</div>';
    }
    document.getElementById('home-feed').innerHTML = html;
  }
  else {
    // Handle the error
  }
};
xhr.send();
