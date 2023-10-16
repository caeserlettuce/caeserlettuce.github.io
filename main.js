

var slideimgs = [
  {
    "image": "/assets/siteimg/fbrawl_art1.jpg",
    "description": "Fruit Brawl concept art"
  },
  {
    "image": "/assets/siteimg/fbrawl-1.jpg",
    "description": "Fruit Brawl play testing"
  },
  {
    "image": "/assets/siteimg/fruitbrawl-coin.png",
    "description": "Fruit Brawl logo on a wooden coin!"
  },
  {
    "image": "/assets/siteimg/fbrawl-2.jpg",
    "description": "Fruit Brawl Kiwi build"
  }
]

var fruitbrawl_team = [
  {
    "name": "Potato429",
    "photo": "/assets/profile/potato429.png",
    "title": "Fruit Brawl Lead"
  },
  {
    "name": "RammyTheDuck",
    "photo": "/assets/profile/rammytheduck.png",
    "title": "Lead Artist & Designer"
  },
  {
    "name": "pugface_",
    "photo": "/assets/profile/pugface.png",
    "title": "Webpage Designer"
  },
]


var slideimgs_length = slideimgs.length;
var slideimgs_slide = document.getElementById("slideimgs-slide");
var slideimgs_index = 0;
var slide_transition = 2000; // anne reference ?????
var slsf = 100; // size factor (doesnt apply to arrows and will screw things up now)

function init_slideimgs() {
  var add_html = "";
  var slideimgs_pushed = [...slideimgs];
  slideimgs_pushed.push(slideimgs[0]);
  document.getElementById("slideimgs").setAttribute("viewBox", `0 0 ${2 * slsf} ${1 * slsf}`)
  for (i in slideimgs_pushed) {
    add_html += `
<image href="${slideimgs_pushed[i]["image"]}" x="${i * (2 * slsf)}" width="${2 * slsf}" height="${1 * slsf}" />
<foreignObject x="${i * (2 * slsf)}" y="0" width="${2 * slsf}" height="${1 * slsf}">
  <xhtml:div class="slide-description ctr1"><xhtml:span class="sldesc ctr2">${slideimgs_pushed[i]["description"].replaceAll("\n", "<br>")}</xhtml:span></xhtml:div>
</foreignObject>
`; 
  }
  //add_html += `<image href="${slideimgs[0]}" x="${slideimgs_length * 20}" width="20" height="10" />\n`;
  slideimgs_slide.innerHTML = add_html;
  slideimgs_slide.style.transitionDuration = `${slide_transition}ms`;
}

init_slideimgs();

function slide_images(direction) {
  console.log(slideimgs_index);
  if (slideimgs_index + direction > slideimgs_length) {  // if its going past the end (at the end, going farther)
    // remove transition, skip to beginning, add transition, then slide forward (seamless)
    slideimgs_slide.style.transitionDuration = `0ms`;
    slideimgs_slide.style.transform = `translateX(0px)`;
    setTimeout( () => {
      slideimgs_slide.style.transitionDuration = `${slide_transition}ms`;
      slideimgs_index = 0;
      slideimgs_index += direction;
      slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
    }, 10);
  } else if (slideimgs_index + direction < 0) {           // if its going past the beginning (at the beginning, going earlier)
    // slide backward, if its going to go behind 0, remove transition, skip to end, add transition, and slide backward (also seamless)
    slideimgs_slide.style.transitionDuration = `0ms`;
    slideimgs_slide.style.transform = `translateX(${slideimgs_length * -(2 * slsf)}px)`;
    setTimeout( () => {
      slideimgs_slide.style.transitionDuration = `${slide_transition}ms`;
      slideimgs_index = slideimgs_length;
      slideimgs_index += direction;
      slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
    }, 10);

  } else {
    slideimgs_index += direction;
    slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
  }
  console.log(slideimgs_index);
}


var slider_interval = setInterval( () => {
  slide_images(1);
}, 10000)



for (i in fruitbrawl_team) {
  
}