"use strict";
(function(){
  enchant();
  var assets = {
    "logo": "img/enchant.png",
    "ball": "img/icon1.png"
  };
  window.onload = function(){
    var game = new Core(400,300);
    game.preload(assets);
    game.onload = function(){
      var scene = new Scene();
      var ball = new Sprite(16,16);
      var ballSpeed = 0;

      scene.addEventListener(Event.ENTER_FRAME, function(e){
        ball.x += ballSpeed * e.elapsed / 1000
        if(ball.x > 400){
          ball.x = 0;
        }
      }); 
      ball.image = game.assets["ball"];
      scene.addChild(ball);
      game.pushScene(scene);
    }
    game.start();
  }

})();
