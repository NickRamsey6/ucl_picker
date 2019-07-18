//Biz Logic
class Team {
  constructor (teamName, scorer, captain, manager, pic) {
    this.teamName = teamName;
    this.scorer = scorer;
    this.captain = captain;
    this.manager = manager;
    this.pic = pic;
  }
}
class Game {
  constructor() {
    this.array = []
  }
}


var Chelsea = new Team("Chelsea 2011-2012", "Drogba", "Terry", "DiMatteo", 'images/drogba.jpg');
var Inter = new Team("Inter Milan 2009-2010", "Milito", "Zanetti", "Mourinho");
var game = new Game;
game.array.push(Inter);
game.array.push(Chelsea);





//UI Logic
$(document).ready(function() {
  $("#preview").click(function(event) {
    var team1 = $("select#team1").val();
    var team2 = $("select#team2").val();

    $("#team1Scorer").append(game.array[team1].scorer);
    document.getElementById("team1ScorerPic").src=game.array[team1].pic;
    $("#team1Captain").append(game.array[team1].captain);
    $("#team1Manager").append(game.array[team1].manager);
    $("#team2Scorer").append(game.array[team2].scorer);
    $("#team2Captain").append(game.array[team2].captain);
    $("#team2Manager").append(game.array[team2].manager);
    $("#opening").hide();
    $("#matchup").show();

  //   if(team1==="Inter Milan 2009-2010") {
  //     $("#T1Inter10").show();
  //     $("#scorer").empty().append(Inter.scorer);
  //     $("#captain").empty().append(Inter.captain);
  //   }
  //   else if(team1==="Chelsea 2011-2012") {
  //     $("#T1Chelsea12").show();
  //   }
  //   if(team2==="Inter Milan 2009-2010") {
  //     $("#T2Inter10").show();
  //   }
  //   else if(team2==="Chelsea 2011-2012") {
  //     $("#T2Chelsea12").show();
  //   }
  // })
  // $("#play").click(function(event) {
  //   $("#matchup").hide();
  //   $("#result").show();
  })
})
