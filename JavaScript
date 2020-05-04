var items = [];
var wordsNum = parseInt( items.length);
$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/173aSAdivqGW2TNZfA9IEyUdKhgU99VHQZfWGPWX6A3E/1/public/values?alt=json', function(data) {
     console.log(data);
    var d = data.feed.entry;
    
    
    for(var i in d) {
    var item = {};
    item.bibleWord = d[i].gsx$bibleword.$t;
    item.bibletitle = d[i].gsx$bibletitle.$t;
    item.backpic = d[i].gsx$backpic.$t;
    items.push(item);
          
    }
    console.table(items);
  });
});


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

$(function()
  {
    $('#mainbutton').click(function(){
    
      var inDex = getRandom(0,items.length-1);
      
        document.getElementById("biblewords").innerHTML=items[inDex].bibleWord;  document.getElementById("bibletitle").innerHTML=items[inDex].bibletitle;
      document.getElementById('backPic').style.backgroundImage = 'url('+items[inDex].backpic+')';
      document.getElementById('backPic').style.backgroundSize = 'cover';
      
    });
  }
);
