
const gallery = document.querySelector('#paginated_gallery');
const gallery_scroller = gallery.querySelector('.gallery_scroller');

gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

var k;
for(k=0;k<movies.length;k++)
{
var colored_card = document.createElement("DIV");
colored_card.classList.add('colored_card');

var relativeContainer = document.createElement("DIV");
  relativeContainer.classList.add('relativeContainer');
  colored_card.appendChild(relativeContainer);

  var overlay = document.createElement("DIV");
  overlay.classList.add('overlay');
  relativeContainer.appendChild(overlay);

  var text = document.createElement("DIV");
  text.classList.add('text');
  overlay.appendChild(text);

  var movietitle = document.createElement("div");
  movietitle.innerHTML = movies[k].title;
  movietitle.classList.add('movietitle');
  text.appendChild(movietitle);

  var genre = document.createElement("div");
  genre.innerHTML = movies[k].category;
  genre.classList.add('genre');
  text.appendChild(genre);

  var button1 = document.createElement("button");
  button1.classList.add('button1');
  button1.innerHTML = "Delete";
  text.appendChild(button1);
  
  var likebutton = document.createElement("i");
  likebutton.classList.add('fa', 'fa-thumbs-up', 'thumbs', 'likebutton');
  likebutton.style="font-size:48px;color:white";
  text.appendChild(likebutton);

  var dislikebutton = document.createElement("i");
  dislikebutton.classList.add('fa', 'fa-thumbs-down', 'thumbs', 'dislikebutton');
  dislikebutton.style="font-size:48px;color:white";
  text.appendChild(dislikebutton);

  var likedislikeratio = document.createElement("div");
  likedislikeratio.classList.add('likedislikeratio');
  var likespercent = (movies[k].likes/(movies[k].likes+movies[k].dislikes))*100;
  var dislikespercent = (movies[k].dislikes/(movies[k].likes+movies[k].dislikes))*100;
  likedislikeratio.style="background-image: linear-gradient(90deg,rgb(0,255,0) "+likespercent+"%,rgb(255,0,0) "+dislikespercent+"%)";
  //background-image: linear-gradient(90deg,rgb(0,255,0) 50%,rgb(255,0,0) 50%);

  text.appendChild(likedislikeratio);

document.getElementById("gallery_scroller_id").appendChild(colored_card);
}

const gallery_item_size =  gallery_scroller.querySelector('div').clientWidth;

var item = gallery.querySelectorAll('.gallery_scroller > div');
var i=1;

setAlignment();
function scrollToNextPage() {
  goAhead();
}
function scrollToPrevPage() {
  goBack();
}


// window.addEventListener('wheel', function(e) {
//   if (e.deltaY > 1) 
//   {
//     goAhead();
//   }
//   else if(e.deltaY < 125) 
//   {
//     goBack();
//   }
// });

function goAhead()
{
  if(i<item.length-2)
    {
    setAlignment();
    gallery_scroller.scrollBy(gallery_item_size, 0);
    i++;
    item[i].style.backgroundImage="url('"+movies[i].url+"')";
    item[i].style.backgroundSize="cover";
    item[i].style.height="65%";
    item[i].style.pointerEvents = "auto";
    }
}

function goBack()
{
  if(i>1)
    {
    setAlignment();
    gallery_scroller.scrollBy(-gallery_item_size, 0);
    i--;
    item[i].style.background="url('"+movies[i].url+"')";
    item[i].style.backgroundSize="cover";
    item[i].style.height="65%";
    item[i].style.pointerEvents = "auto";
    }
}

function setAlignment() {
  const alignment = "center";
  var j=0;





  var card=gallery.querySelectorAll('.gallery_scroller > div');
  for (j=1;j<card.length;j++)
  {

    card[j].style.scrollSnapAlign = alignment;
    card[j].style.background="linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('"+movies[j].url+"')";
    card[j].style.backgroundSize="cover";
    card[j].style.height="45%";
    card[j].style.pointerEvents = "none";

  }

  // Currently changing scroll alignment does not force a re-snap in Chrome.
  // This is a bug: http://crbug.com/866127
  // In meantime, if desired a scroll snap can be triggered using a small 
  // scripted scroll e.g.: `gallery_scroller.scrollBy(1, 0);`
}
