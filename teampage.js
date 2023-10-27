// team page js


function generate_team() {
  var final_html = "";
  for (i in fruitbrawl_team) {
    var add_html = `
      <div class="member-card ctr1">
        <img class="member-image round" src="${fruitbrawl_team[i]["photo"]}" alt="${fruitbrawl_team[i]["alt"]}">
        <div class="membertext">
          <p class="name ctr2">${fruitbrawl_team[i]["name"]}</p>
          <p class="title ctr2">${fruitbrawl_team[i]["title"]}</p>
          <p class="description ctr2">${fruitbrawl_team[i]["description"]}</p>
        </div>
      </div>`;
    final_html += add_html;
  }
  document.getElementById("teamdiv").innerHTML = final_html;
}

generate_team();