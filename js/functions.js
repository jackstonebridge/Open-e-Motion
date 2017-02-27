$(document).ready(function(){

  var location = "Rovereto";

  if(location == "Trento"){

    $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/trento', function(data) {

      $.each( data, function(i, val){

        console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots)

      });

    });

  } else if(location == "Rovereto"){

    $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/rovereto', function(data) {

      $.each( data, function(i, val){

        console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots)

      });

    });

  } else if(location == "Pergine Valsugana"){

    $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/pergine_valsugana', function(data) {

      $.each( data, function(i, val){

        console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots)

      });

    });

  };

  function click(){
    console.log("Works!")
  }

});
