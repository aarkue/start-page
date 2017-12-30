var pressed = false;

$(function() {


  $('.box').dblclick(function(e) {
    openSite("!" + this.classList[1], '');
  });
  $('.no-search').dblclick(function(e) {
    openSite("!" + this.classList[1], '');
  });
  $('.no-search').click(function(e) {
    if (e.shiftKey) openSite("!" + this.classList[1], '');
  });
  $('.dark').click(function(e){
    if(window.location.href.indexOf("dark") > -1){
      window.open("index.html","_self");
    }else{
      window.open("dark.html","_self");
    }
  });
  $('.help').click(function(e){
    console.log("help");
    window.open("https://aarkue.eu/explore/start-page/","_blank");
  });

  $('.box').click(function(e) {
    if (e.shiftKey) {
      openSite("!" + this.classList[1], '');
    } else {
      $('.box').removeClass("selected");
      $('.' + this.classList[1]).addClass("selected");
      console.log(this.classList[1]);
      $('#search-field').val("!" + this.classList[1] + " ");
      $('#search-field').focus(); //TODO: Reactivate
    }
    return false;
  });


  $('#search-field').keyup(function(event) {
    if (event.keyCode === 13) {
      $("#search-button").click();
    }
  });
});

function search() {
  var t = $('#search-field').val();
  openSite(t.substr(0, t.indexOf(' ')), t);
}

function getSearchText(t, l) {
  return encodeURIComponent(t.substring(l));
}

function openSite(c, t) {
  console.log(c);
  console.log(t);
  switch (c) {
    case '!g':
      if (t === '') {
        window.open("https://google.com", "_blank");
      } else {
        console.log("Google mode!");
        window.open("https://www.google.com/search?q=" + getSearchText(t, 3), '_blank');

      }
      break;
    case '!r':
      if (t === '') {
        window.open("https://www.reddit.com/ ", '_blank');
      } else {
        window.open("https://www.google.com/search?q=" + getSearchText(t, 3) + " site:reddit.com ", '_blank');
      }
      break;
    case '!yt':
      if (t === '') {
        window.open("https://www.youtube.com/ ", '_blank');
      } else {
        window.open("https://www.youtube.com/results?search_query=" + getSearchText(t, 4), '_blank');
      }
      break;
    case '!so':
      if (t === '') {
        window.open("https://stackoverflow.com/", "_blank");
      } else {
        window.open("https://stackoverflow.com/search?q=" + getSearchText(t, 4), '_blank');
      }
      break;
    case '!aw':
      if (t === '') {
        window.open("https://wiki.archlinux.org/", "_blank");
      } else {
        window.open("https://www.google.com/search?q=" + getSearchText(t, 4) + " site:wiki.archlinux.org ", '_blank');
      }
      break;
    case '!d':
      if (t === '') {
        window.open("https://duckduckgo.com/", "_blank");
      } else {
        window.open("https://www.duckduckgo.com/?kp=-1&q=" + getSearchText(t, 3), '_blank');
      }
      break;
    case '!a':
      if (t === '') {
        window.open("https://www.amazon.de/?tag=httpswwwy051c-21", "_blank");
      } else {
        //TODO: Remove Ref-Link for public public version
        window.open("https://www.amazon.de/s/?field-keywords=" + getSearchText(t, 3) + "&tag=httpswwwy051c-21", "_blank");
      }
      break;
    case '!w':
      if (t === '') {
        window.open("https://www.wikipedia.org/", "_blank");
      } else {
        window.open("https://wikipedia.org/w/?search=" + t.substring(3).replace(/\s/g, '+', 3), '_blank');
      }
      break;
    case '!wa':
      if (t === '') {
        window.open("https://www.wolframalpha.com/", "_blank");
      } else {
        window.open("https://www.wolframalpha.com/input/?i=" + getSearchText(t, 4), '_blank');
      }
      break;
    case '!tw':
      window.open("https://www.twitch.tv/directory/following", "_blank");
      break;
    case '!edu':
      if (t === '') {
        window.open("https://www.google.com/search?q=site:*.edu", "_blank");
      } else {
        window.open("https://www.google.com/search?q=" + getSearchText(t, 5) + " site:*.edu", '_blank');
      }
      break;
    case '!w3':
      if (t === '') {
        window.open("https://www.w3schools.com/");
      } else {
        window.open("https://www.google.com/search?q=" + getSearchText(t, 4) + " site:w3schools.com", '_blank');
      }
      break;
    default:
      window.open("https://www.google.com/search?q=" + getSearchText(t, 0), '_blank');
      break;
  }
}
