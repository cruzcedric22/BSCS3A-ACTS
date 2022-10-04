window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    


    var mapTile = new Image();
    mapTile.src = 'images/map2.png';
    mapTile.onload = function(){

        
    var charTile = new Image();
    charTile.src = 'images/chara1.png';
    charTile.onload = function(){
        context.drawImage(charTile, 128, 0, 32, 32 ,250,400,150,150);
    }

    var ctrlTile = new Image();
    ctrlTile.src = 'images/pad.png';
    ctrlTile.onload = function(){
        context.drawImage(ctrlTile, 0, 1,100,100,50,350, 200,200);
    }
       // context.drawImage(mapTile, 0, 0 , 100, 100, 300, 200,100 , 100);
       //ulap
       context.drawImage(mapTile, 0,32, 15,15,0,0, 900,550);
       
       
       
       //sahig
       for(var i = 0; i < 18; i++){
       context.drawImage(mapTile, 0,0, 15,15,0+(50*i),550, 50,50);
       }
    //    context.drawImage(mapTile, 0,0, 15,15,50,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+50,550, 50,50); 
    //    context.drawImage(mapTile, 0,0, 15,15,50+100,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+150,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+200,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+250,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+300,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+350,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+400,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+450,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+500,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+550,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+600,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+650,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+700,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+750,550, 50,50);
    //    context.drawImage(mapTile, 0,0, 15,15,50+800,550, 50,50);

    }
}