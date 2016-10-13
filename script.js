// Your JS goes here
'use strict';

var createSquares = function() {
  for(var i = 0; i < 54; i++) {
    if(i % 2 === 0) {
      var div = document.createElement('div');
      document.body.appendChild(div);
      div.style.width = '11.1%';
      div.style.height = '11.1%';
      div.style.float = 'left';
      div.style.paddingBottom = '11.1%';
      div.style.backgroundColor = 'red';
      console.log(div);
    }
    else {
      var div1 = document.createElement('div');
      document.body.appendChild(div1);
      div1.style.width = '11.1%';
      div1.style.height = '11.1%';
      div1.style.float = 'left';
      div1.style.paddingBottom = '11.1%';
      div1.style.backgroundColor = 'black';
      console.log(div1);
    }
  }
};

createSquares();
