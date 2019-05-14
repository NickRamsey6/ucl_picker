//Biz Logic
function Team(scorer, captain, manager) {
  this.scorer = scorer;
  this.captain = captain;
  this.manager = manager;
}

var Chelsea = new Team("Drogba", "Terry", "DiMatteo");
var Inter = new Team("Milito", "Zanetti", "Mourinho");












//UI Logic
$(document).ready(function() {
  $("#preview").click(function(event) {
    var team1 = $("select#team1").val();
    var team2 = $("select#team2").val();
    $("#opening").hide();
    $("#matchup").show();
    if(team1==="Inter Milan 2009-2010") {
      $("#T1Inter10").show();
      $("#scorer").empty().append(Inter.scorer);
      $("#captain").empty().append(Inter.captain);
    }
    else if(team1==="Chelsea 2011-2012") {
      $("#T1Chelsea12").show();
    }
    if(team2==="Inter Milan 2009-2010") {
      $("#T2Inter10").show();
    }
    else if(team2==="Chelsea 2011-2012") {
      $("#T2Chelsea12").show();
    }
  })
  $("#play").click(function(event) {
    $("#matchup").hide();
    $("#result").show();
  })
})
