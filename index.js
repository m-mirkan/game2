

function appearRules(){
  const element = document.getElementById("score");

  const score= element.textContent;
      console.log( score);
    rules = document.getElementById("rules");
    body = document.getElementById("body");
    
    const screenWidth = window.innerWidth;
    if(screenWidth > 450){
        body.style.background ="hsl(237, 49%, 15%)";
        rules.style.display ="flex";
    }else{
        body.innerHTML = `
        <div id="title-rules"  style=" position:absolute ;bottom:85%"> RULES</div>

         <div id ="score" style ="visibility:hidden">${score} </div>
         
        <img id="rules-pic" style=" position:absolute ;bottom:25%"  src="images/image-rules-bonus.svg">


    
          <img style=" position:absolute ;bottom:10%" id="pic-close" onclick="closeRules()"  src="images/icon-close.svg">
        
    
        `

   body.classList.remove("body");
   body.classList.add("fakebody");



    }
       
    
  
  
}


function closeRules() {

    var rules = document.getElementById("rules");
    var body = document.getElementById("body");
    const screenWidth = window.innerWidth;
    if(screenWidth > 450){ body.style.background = "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))";
    rules.style.display = "none";}else{
      const element = document.getElementById("score");

    var score =  element.textContent;
        body.innerHTML = `
      
<section id="game"  class="game">
<div id="gameInfos" class="gameInfos">
  <div class="name"> ROCK <br> PAPER<br> SCISSORS <br>LIZARD <br>SPOCK </div>
   <div id="score-box" class="score-box">   
       <div id="score-text"> S C O R E</div>
       <div id="score"> ${score}</div>

   </div>
</div>

<div class="choices">
<div class=" circle-scissores">  <div class=" circle " > <img id="scissores" src="images/icon-scissors.svg"></div> </div> 
  <div class="circle-rock"> <div class=" circle " >  <img id="rock" src="images/icon-rock.svg"> </div></div>
  <div class="circle-paper"> <div class=" circle ">  <img id="paper" src="images/icon-paper.svg"> </div></div>
  <div class="circle-lizard"> <div class=" circle "> <img id="lizard" src="images/icon-lizard.svg"> </div> </div>
  <div class="circle-spock"> <div class=" circle "><img id="spock" src="images/icon-spock.svg"> </div> </div>

 <img id="pentagon"   src="images/bg-pentagon.svg">
</div>


<div id="rules" class="rules"> 
   

  <div class="rules-header">
    <div id="title-rules"> RULES</div>
    <img id="pic-close" onclick="closeRules()"  src="images/icon-close.svg">
  </div>

   <img id="rules-pic"  src="images/image-rules-bonus.svg">
  </div>

<button id="rules-button"  onclick="appearRules()">
 R U L E S
</button>
</section>

<script src="index.js"></script>
    
        `
    body.classList.remove("fakebody");
    body.classList.add("body");    
    }
   
  }






  function winner(id,robot){
    let res = 1 ;
    let nid = id.toString();
    let nrobot = robot.toString();
    let combinedValue = nid + "-" + nrobot;

    switch (combinedValue) {
      case "1-2" :
         res = 1;
        break;
      
      case   "1-3":
         res =2;
        break;
      
        case   "1-4":
          res = 1;
        break;

        case   "1-5":
          res = 2;
        break;

        case   "2-1":
          res = 2;
        break;
      
        case   "2-3":
          res = 1;
        break;
        case   "2-4":
          res = 2;

        break;
        case   "2-5":
          res = 1;

        break;
        case   "3-1":
          res = 1;

        break;
        case   "3-2":
          res = 2;

        break;
        case   "3-4":
          res = 1;

        break;
        case   "3-5":
          res = 2;

        break;
        case   "4-1":
          res = 2;

        break;
        case   "4-2":
          res = 1;

        break;
        case   "4-3":
          res = 2;

        break;
        case   "4-5":
          res = 1;

        break;
        case   "5-1":
          res = 1;

        break;
        case   "5-2":
          res = 2;

        break;
        case   "5-3":
          res = 1;

        break;
        case   "5-4":
          res = 2;

        break;
  default: res = 3;

    }


   return res;
  }



  function start( id){
    let pic = "";
     let color = "hsl(39, 89%, 49%)";
     switch(id){
      case 1 :
         pic ="images/icon-scissors.svg";
         color ="hsl(39, 89%, 49%)";
        break;  
        case 2 : 
        pic ="images/icon-paper.svg";
        color ="hsl(230, 89%, 62%) ";
          break;
          case 3 :
            pic ="images/icon-rock.svg";
            color ="hsl(349, 71%, 52%)";
      
            break;
            case 4 :  pic ="images/icon-lizard.svg";
            color ="hsl(261, 73%, 60%)";
              break;
              case 5 : pic ="images/icon-spock.svg";
              color =" hsl(189, 59%, 53%)";
            
                break;
     }
     const fight = document.getElementById("choices");
     
      fight.innerHTML = ` 
      <div class="fight"> 
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; font-size:24px; color:white;"> 
      YOU PICKED
      <div style="background-color: ${color};   margin-top : 30%;" class="circle-chosen">
      <div class="circle-ch">
        <img id="scissors" src="${pic}">
      </div>
    </div>
      
      </div>
    
      <div id="res"> </div>

      <div id="robot" style="display: flex; flex-direction: column; align-items: center; justify-content: center; font-size:24px; color:white;">
      THE HOUSE PICKED
      <div style=" margin-top : 40%;">
      <div style="background-color: hsl(237, 49%, 15%);" class="circle-ch">
      </div>
      </div>
    </div>
    
      
    
   

    </div>
       
        
      `
      setTimeout(() => flip(id), 500);
    }

  function one(){
   let id =  Math.floor(Math.random() * (5)) + 1;
    let pic = "";
    let color = "hsl(39, 89%, 49%)";
    switch(id){
     case 1 :
        pic ="images/icon-scissors.svg";
        color ="hsl(39, 89%, 49%)";
       break;  
       case 2 :  
       pic ="images/icon-paper.svg";
       color ="hsl(230, 89%, 62%) ";
         break;
         case 3 : 
         pic ="images/icon-rock.svg";
                color ="hsl(349, 71%, 52%)";
     
           break;
           case 4 :  pic ="images/icon-lizard.svg";
           color ="hsl(261, 73%, 60%)";
             break;
             case 5 : pic ="images/icon-spock.svg";
             color =" hsl(189, 59%, 53%)";
           
               break;
    }
    let robot = document.getElementById("robot");
    robot.innerHTML = 
    
    `
     
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; font-size:24px; color:white;"> 
    THE HOUSE PICKED
    <div style="background-color: ${color};   margin-top : 30%;" class="circle-chosen">
    <div class="circle-ch">
      <img id="scissors" src="${pic}">
    </div>
  </div>
    
    </div>
    
    `
    return id;
 }


async function flip(lo) {
  let outCome = 0;
  let i = 1;
  let id = 0;
  
  while (i < 8 || id === lo  ) {
    id = one();
    await new Promise(resolve => setTimeout(resolve, 200));
    i++;
  }

 outCome =  winner(lo,id);
 
 await new Promise(resolve => setTimeout(resolve, 500));
    
 let res = document.getElementById("res");
 let score = document.getElementById("score");
 if(outCome === 1){
  score.innerHTML = (parseInt(score.innerHTML) +1).toString();
  res.innerHTML=`
 
  
 
  <div id="note"> YOU WIN </div>

`
 }else{
  score.innerHTML = (parseInt(score.innerHTML) - 1).toString();

  res.innerHTML=`
 

 
  <div id="note">  YOU LOSE </div>

`
 }
 res.innerHTML =  res.innerHTML + `
 <div onclick="playAgain()" id="playAgain"> PLAY AGAIN </div>
 `
  
   
}

function playAgain(){
   choices = document.getElementById("choices");
   choices.innerHTML = `
   
   <div onclick="start(1)" class=" circle-scissores">  <div class=" circle " > <img id="scissores" src="images/icon-scissors.svg"></div> </div> 
     <div onclick="start(3)"  class="circle-rock"> <div class=" circle " >  <img id="rock" src="images/icon-rock.svg"> </div></div>
     <div onclick="start(2)"  class="circle-paper"> <div class=" circle ">  <img id="paper" src="images/icon-paper.svg"> </div></div>
     <div onclick="start(4)"  class="circle-lizard"> <div class=" circle "> <img id="lizard" src="images/icon-lizard.svg"> </div> </div>
     <div onclick="start(5)"  class="circle-spock"> <div class=" circle "><img id="spock" src="images/icon-spock.svg"> </div> </div>
 
    <img id="pentagon"   src="images/bg-pentagon.svg">
  
   `

}
  
  
