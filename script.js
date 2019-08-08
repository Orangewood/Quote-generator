var endpoint = 'https://talaikis.com/api/quotes/random/';

function quoteFunction(){
  console.log("connected");

  $.ajax({
    url: endpoint,
    type: "GET",
    success: function(data) {

      $('#quote')[0].innerHTML = data.quote
      $('#author')[0].innerHTML = ' - ' +                 data.author

    }
  });
}
function tweetFunction(){
window.open("https://twitter.com/intent/tweet?text="
+ ('"' + $('#quote')[0].innerHTML + '" ' + $('#author')[0].innerHTML ))
}