//Biz Logic
// import {Shots} from './sims.js';
class Team {
  constructor (teamName, scorer, captain, manager, scorerPic, captainPic, managerPic, sotm, sota, crf, cra) {
    this.teamName = teamName;
    this.scorer = scorer;
    this.captain = captain;
    this.manager = manager;
    this.scorerPic = scorerPic;
    this.captainPic = captainPic;
    this.managerPic = managerPic;
    this.sotm = sotm;
    this.sota = sota;
    this.crf = crf;
    this.cra = cra
  }
}
class Game {
  constructor() {
    this.array = []
  }
}

var shots = [ 7,5,4,13,8,5,8,10,12,8,6,12,13,17,11,8,11,9,7,10,16,7,9,8,5,6,9,5,4,7,9,10,8,10,12,7,13,8,7,8,12,8,14,7,7,11,8,11,12,8,10,14,11,13,14,8,11,6,13,11,12,8,11,9,11,12,14,10,7,8,6,7,12,11,9,11,10,8,12,11,12,7,9,16,9,6,10,15,13,10,11,10,14,6,10,12,13,14,12,7,12,12,11,14,9,15,9,7,10,7,10,9,13,10,9,7,9,7,8,13,9,9,9,13,3,8,6,13,9,10,9,9,6,4,4,6,9,12,12,6,16,6,9,10,15,13,10,9,10,12,11,6,7,13,9,12,13,8,7,11,9,14,6,7,11,7,11,10,12,8,6,9,10,12,7,10,10,15,14,7,8,11,12,10,7,7,8,5,11,12,8,9,5,6,14,11,11,9,8,15,4,7,16,12,22,8,10,5,12,13,14,3,7,10,9,11,5,11,7,8,12,7,9,11,9,10,9,6,4,7,12,6,5,4,9,13,8,9,9,8,14,15,8,12,7,15,5,18,7,8,6,10,11,19,7,13,11,17,9,12,5,11,7,14,12,13,13,9,16,10,10,8,5,14,7,8,11,10,16,6,10,14,13,14,12,7,6,6,9,12,14,9,12,9,11,12,11,13,8,7,6,4,14,12,6,6,7,10,12,6,6,10,8,9,6,14,12,9,11,8,11,9,11,9,11,8,12,10,4,9,9,9,10,13,12,5,6,8,8,12,6,16,13,10,14,3,12,14,6,9,11,9,13,9,10,11,8,14,6,10,8,5,12,10,8,14,10,15,14,9,11,13,14,6,5,17,9,11,10,9,11,13,6,9,12,7,11,9,10,10,11,13,9,9,13,10,12,13,9,9,13,12,11,11,12,8,8,7,15,8,10,5,12,9,9,15,9,12,12,7,5,8,11,12,11,15,3,9,11,6,4,7,12,13,8,8,8,15,10,11,14,10,8,14,11,5,11,13,6,15,5,7,4,9,11,11,9,6,16,10,11,8,12,11,14,9,8,12,11,9,12,8,14,11,12,11,11,11,7,10,12,7,11,6,12,15,11,11,9,6,9,6,12,9,10,9,7,10,9,13,6,5,7,15,9,11,5,9,5,11,13,7,8,13,4,12,9,6,14,7,12,9,11,7,14,5,7,8,12,9,8,6,10,9,17,6,13,4,12,7,6,7,7,15,18,8,6,11,10,8,13,8,13,6,13,5,9,11,7,15,9,11,7,11,12,10,13,13,17,11,11,5,7,4,13,9,13,7,9,11,5,8,12,13,13,15,9,15,11,9,9,7,12,9,9,6,9,14,10,4,9,6,8,11,9,11,10,12,10,7,15,5,6,13,9,11,12,17,16,6,11,4,10,12,9,15,11,9,13,12,9,8,10,13,10,11,12,11,13,6,10,7,9,8,14,9,10,6,15,12,9,7,12,11,5,5,9,7,10,17,7,11,7,10,13,6,13,8,6,7,11,11,6,17,7,15,11,10,8,8,13,14,10,14,11,9,8,16,6,11,13,7,10,7,9,7,10,11,14,8,8,8,7,6,8,14,5,10,12,13,10,8,10,6,9,6,8,11,7,9,12,7,6,12,11,10,7,7,10,5,7,13,8,4,16,6,12,13,4,13,10,8,8,11,6,8,10,12,10,11,9,14,16,12,4,10,12,7,9,10,12,8,8,9,8,11,5,10,9,5,18,11,13,9,15,9,13,3,13,5,13,10,11,11,8,11,8,10,5,8,10,10,13,10,13,10,10,11,8,10,22,14,12,13,14,10,9,12,9,3,11,9,15,6,9,14,12,10,4,8,8,11,6,16,13,8,9,8,8,8,14,8,13,13,7,7,11,9,6,7,8,10,15,9,14,6,13,8,8,7,4,6,6,7,13,4,9,14,4,8,9,10,14,10,12,11,7,10,5,12,7,13,10,8,12,5,4,10,13,9,10,7,11,10,5,13,8,10,8,6,13,11,13,6,11,10,15,10,8,15,13,9,9,12,8,12,13,9,14,5,12,9,8,11,8,11,14,10,11,9,12,13,9,10,14,9,7,11,12,11,7,16,3,14,6,13,10,10,12,8,5,6,6,7,16,7,8,11,11,8,8,9,9,14,10,10,10,10,9,7,8,7,2,7,16,9,16,8,6,10,9,13,14,11,13,8,14,6,6,10,19,10,6,7,12,11,10,12,8,9,8,11,7,8,15,17,10,5,10,11];



const Inter0910 = new Team("Inter Milan 2009-2010", "Milito", "Zanetti", "Mourinho", 'images/inter0910/milito.jpeg', 'images/inter0910/zanetti.jpeg', 'images/inter0910/mourinho.jpeg', 4.69, 3.77, 0.28, 0.18);
const Barca1011 = new Team("Barcelona 2010-2011", "Messi", "Puyol", "Guardiola", 'images/barca1011/messi.jpg', 'images/barca1011/puyol.jpg', 'images/barca1011/pep.jpg', 7.54, 2.85, 0.31, 0.24)
const Chelsea1112 = new Team("Chelsea 2011-2012", "Drogba", "Terry", "DiMatteo", 'images/chels1112/drogba.jpg', 'images/chels1112/jt.jpg', 'images/chels1112/dimatteo.jpg');
const Bayern1213 = new Team("Bayern Munich 2012-2013", "Muller", "Lahm", "Heynckes", 'images/bayern1213/muller.png', 'images/bayern1213/lahm.jpg', 'images/bayern1213/heynckes.jpg');
const RealMadrid1314 = new Team("Real Madrid 2013-2014", "Ronaldo", "Ramos", "Ancelotti", 'images/realmadrid1314/ronaldo.jpg', 'images/realmadrid1314/ramos.jpg', 'images/realmadrid1314/ancelotti.jpg');
const Barca1415 = new Team("Barcelona 2014-2015", "Messi", "Xavi", "Enrique", 'images/barca1415/messi.jpg', 'images/barca1415/xavi.jpg', 'images/barca1415/enrique.jpg');
const RealMadrid1516 = new Team("Real Madrid 2015-2016", "Ronaldo", "Ramos", "Zidane", 'images/realmadrid1516/ronaldo.jpg', 'images/realmadrid1516/ramos.jpg', 'images/realmadrid1516/zidane.jpg');
const RealMadrid1617 = new Team("Real Madrid 2016-2017", "Ronaldo", "Ramos", "Zidane", 'images/realmadrid1617/ronaldo.jpg', 'images/realmadrid1617/ramos.jpg', 'images/realmadrid1617/zidane.jpg');
const RealMadrid1718 = new Team("Real Madrid 2017-2018", "Ronaldo", "Ramos", "Zidane", 'images/realmadrid1718/ronaldo.jpg', 'images/realmadrid1718/ramos.jpg', 'images/realmadrid1718/zidane.jpg');
const Liverpool1819 = new Team("Liverpool 2018-2019", "Salah", "Hnderson", "Klopp", 'images/liverpool1819/salah.jpg', 'images/liverpool1819/henderson.jpg', 'images/liverpool1819/klopp.jpg');
const game = new Game;
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

const team1Chances = function(t1sotm, t2sota) {
  let sum = t1sotm + t2sota
  return sum/2;
}

const t1score = function(t1sotm, t2sota, t1crf, t2cra) {
  return ((t1sotm + t2sota)/2) * ((t1crf + t2cra)/2);
}

const t2score = function(t2sotm, t1sota, t2crf, t1cra) {
  return ((t2sotm + t1sota)/2) * ((t2crf + t1cra)/2);
}

const final = function (t1score, t2score) {
  return t1score - t2score;
}





//UI Logic
$(document).ready(function() {
  $("#pickEm").submit(function(event) {
    event.preventDefault();
    var team1 = $("select#team1").val();
    var team2 = $("select#team2").val();
    console.log(shots[shots.length -1]);
    $("#team1Name").append(game.array[team1].teamName);
    $("#team1Scorer").append(game.array[team1].scorer);
    document.getElementById("team1ScorerPic").src=game.array[team1].scorerPic;
    $("#team1Captain").append(game.array[team1].captain);
    document.getElementById("team1CaptainPic").src=game.array[team1].captainPic;
    $("#team1Manager").append(game.array[team1].manager);
    document.getElementById("team1ManagerPic").src=game.array[team1].managerPic;
    $("#team2Name").append(game.array[team2].teamName);
    $("#team2Scorer").append(game.array[team2].scorer);
    document.getElementById("team2ScorerPic").src=game.array[team2].scorerPic;
    $("#team2Captain").append(game.array[team2].captain);
    document.getElementById("team2CaptainPic").src=game.array[team2].captainPic;
    $("#team2Manager").append(game.array[team2].manager);
    document.getElementById("team2ManagerPic").src=game.array[team2].managerPic;

    $("#opening").hide();
    $("#matchup").show();
    // console.log(game.array[team1].scorer);
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
    let chances = team1Chances(game.array[team1].sotm, game.array[team2].sota);
    console.log(chances);
    let t1 = t1score(game.array[team1].sotm, game.array[team2].sota, game.array[team1].crf, game.array[team2].cra);
    console.log(t1)
    let t2 = t2score(game.array[team2].sotm, game.array[team1].sota, game.array[team2].crf, game.array[team1].cra);
    console.log(t2);
    let result = final(t1, t2);
    console.log(result);
  })
    // let score = team1Score(game.array[team1.sotm], game.array[team2.sota], game.array[team1.crf], game.array[team2.cra]);
    // console.log(score);
    // var off = goalsFor(game.array[team1].offense, game.array[team2].defense);
    // console.log(off)
    // var def = goalsAgainst(game.array[team1].defense, game.array[team2].offense);
    // console.log(def)
    // var coach = mindGames(game.array[team1].tactics, game.array[team2].tactics);
    // console.log(coach)
  })
})
