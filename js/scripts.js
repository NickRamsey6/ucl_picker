//Biz Logic
class Team {
  constructor (teamName, scorer, captain, manager, scorerPic, captainPic, managerPic) {
    this.teamName = teamName;
    this.scorer = scorer;
    this.captain = captain;
    this.manager = manager;
    this.scorerPic = scorerPic;
    this.captainPic = captainPic;
    this.managerPic = managerPic
  }
}
class Game {
  constructor() {
    this.array = []
  }
}


var Chelsea = new Team("Chelsea 2011-2012", "Drogba", "Terry", "DiMatteo", 'images/chels1112/drogba.jpg', 'images/chels1112/jt.jpg', 'images/chels1112/dimatteo.jpg');
var Inter = new Team("Inter Milan 2009-2010", "Milito", "Zanetti", "Mourinho", 'images/inter0910/milito.jpeg', 'images/inter0910/zanetti.jpeg', 'images/inter0910/mourinho.jpeg');
var game = new Game;
game.array.push(Inter);
game.array.push(Chelsea);





//UI Logic
$(document).ready(function() {
  $("#preview").click(function(event) {
    var team1 = $("select#team1").val();
    var team2 = $("select#team2").val();

    $("#team1Scorer").append(game.array[team1].scorer);
    document.getElementById("team1ScorerPic").src=game.array[team1].scorerPic;
    $("#team1Captain").append(game.array[team1].captain);
    document.getElementById("team1CaptainPic").src=game.array[team1].captainPic;
    $("#team1Manager").append(game.array[team1].manager);
    document.getElementById("team1ManagerPic").src=game.array[team1].managerPic;
    $("#team2Scorer").append(game.array[team2].scorer);
    document.getElementById("team2ScorerPic").src=game.array[team2].scorerPic;
    $("#team2Captain").append(game.array[team2].captain);
    document.getElementById("team2CaptainPic").src=game.array[team2].captainPic;
    $("#team2Manager").append(game.array[team2].manager);
    document.getElementById("team2ManagerPic").src=game.array[team2].managerPic;
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
