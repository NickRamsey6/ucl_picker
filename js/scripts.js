//Biz Logic
class Team {
  constructor (teamName, scorer, captain, manager, scorerPic, captainPic, managerPic) {
    this.teamName = teamName;
    this.scorer = scorer;
    this.captain = captain;
    this.manager = manager;
    this.scorerPic = scorerPic;
    this.captainPic = captainPic;
    this.managerPic = managerPic;
  }
}
class Game {
  constructor() {
    this.array = []
  }
}


var Inter0910 = new Team("Inter Milan 2009-2010", "Milito", "Zanetti", "Mourinho", 'images/inter0910/milito.jpeg', 'images/inter0910/zanetti.jpeg', 'images/inter0910/mourinho.jpeg');
var Barca1011 = new Team("Barcelona 2010-2011", "Messi", "Puyol", "Guardiola", 'images/barca1011/messi.jpg', 'images/barca1011/puyol.jpg', 'images/barca1011/pep.jpg')
var Chelsea1112 = new Team("Chelsea 2011-2012", "Drogba", "Terry", "DiMatteo", 'images/chels1112/drogba.jpg', 'images/chels1112/jt.jpg', 'images/chels1112/dimatteo.jpg');
var Bayern1213 = new Team("Bayern Munich 2012-2013", "Muller", "Lahm", "Heynckes", 'images/bayern1213/muller.png', 'images/bayern1213/lahm.jpg', 'images/bayern1213/heynckes.jpg');
var RealMadrid1314 = new Team("Real Madrid 2013-2014", "Ronaldo", "Ramos", "Ancelotti", 'images/realmadrid1314/ronaldo.jpg', 'images/realmadrid1314/ramos.jpg', 'images/realmadrid1314/ancelotti.jpg');
var Barca1415 = new Team("Barcelona 2014-2015", "Messi", "Xavi", "Enrique", 'images/barca1415/messi.jpg', 'images/barca1415/xavi.jpg', 'images/barca1415/enrique.jpg');
var RealMadrid1516 = new Team("Real Madrid 2015-2016", "Ronaldo", "Ramos", "Zidane", 'images/realmadrid1516/ronaldo.jpg', 'images/realmadrid1516/ramos.jpg', 'images/realmadrid1516/zidane.jpg');
var RealMadrid1617 = new Team("Real Madrid 2016-2017", "Ronaldo", "Ramos", "Zidane", 'images/realmadrid1617/ronaldo.jpg', 'images/realmadrid1617/ramos.jpg', 'images/realmadrid1617/zidane.jpg');
var RealMadrid1718 = new Team("Real Madrid 2017-2018", "Ronaldo", "Ramos", "Zidane", 'images/realmadrid1718/ronaldo.jpg', 'images/realmadrid1718/ramos.jpg', 'images/realmadrid1718/zidane.jpg');
var Liverpool1819 = new Team("Liverpool 2018-2019", "Salah", "Hnderson", "Klopp", 'images/liverpool1819/salah.jpg', 'images/liverpool1819/henderson.jpg', 'images/liverpool1819/klopp.jpg');
var game = new Game;
game.array.push(Inter0910);
game.array.push(Barca1011);
game.array.push(Chelsea1112);
game.array.push(Bayern1213);
game.array.push(RealMadrid1314);
game.array.push(Barca1415);
game.array.push(RealMadrid1516);
game.array.push(RealMadrid1617);
game.array.push(RealMadrid1718);
game.array.push(Liverpool1819);

// var goalsFor = function(team1Offense, team2Defense) {
//   return team1Offense - team2Defense;
// }
//
// var goalsAgainst = function(team1Defense, team2Offense) {
//   return team1Defense - team2Offense
// }
//
// var mindGames = function(team1Tactics, team2Tactics) {
//   return team1Tactics - team2Tactics
// }





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
  $("#play").click(function(event) {
    $("#matchup").hide();
    $("#result").show();
    // var off = goalsFor(game.array[team1].offense, game.array[team2].defense);
    // console.log(off)
    // var def = goalsAgainst(game.array[team1].defense, game.array[team2].offense);
    // console.log(def)
    // var coach = mindGames(game.array[team1].tactics, game.array[team2].tactics);
    // console.log(coach)
  })
  })
})
