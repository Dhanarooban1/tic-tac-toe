let winingArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  let currentplayer = "x";
  let boardArr = ["", "", "", "", "", "", "", "", ""];
  
  function iswining() {
    for (let ele of winingArray) {
      let a = ele[0];
      let b = ele[1];
      let c = ele[2];
  
      if (
        boardArr[a] && //check if boardarr 
        boardArr[a] === boardArr[b] &&
        boardArr[a] === boardArr[c]
      ) {
        return boardArr[a];
      }
    }
    return null;
  }
  
  function isDraw (){
    return !boardArr.includes("");
  }
  
  
  //Make boxes functional
   let boxes =document.querySelectorAll(".box");
  
   boxes.forEach(function (box,idx){
    box.addEventListener("click", function(){
      handleclick(idx);
    });
   });
  
   let result = document.getElementById("result");
   let message = document.getElementById("message");
  
   function handleclick(idx){ 
     if (boardArr[idx] === "")  {
    boardArr[idx] = currentplayer;
    boxes[idx] .innerText = currentplayer;
    
    let win = iswining();
    if (win){
      result.style.visibility = "visible";
      message.innerText = "winner is" + currentplayer
    }
    else if( isDraw() ){
      result.style.visibility = "visible";
      message.innertext = "It is draw"
    }
    else{
      // if (currentplayer ==='x'){
      //   currentplayer = '0'
      // }else{
      //   currentplayer = 'x'
      // }
      currentplayer = currentplayer === "x" ? "o" : "x"
    }
  }}
  
  let button = document.getElementById('button')
   button.onclick = function(){
    history.go(0)
   }
  
  