let timer = null;
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}
let count=0;
const m = document.getElementById("clear");


//データの保存
function save(){
  let test = new TestClass();
  let key = "message";
  let value = timer;
  test.set(key, parseInt(value)-1);
  test.save().then(function(){
    console.log("成功");
  })
  .catch(function(err){
    console.log("error "+err);
  });
}
// データの読み込み
function load(){
  let value = timer;
  TestClass
  .order("message")
  .fetchAll().then(function(results){
      if (parseInt(value)-1<results[0].message) {
        alert("High Score!");
      }
  })
  .catch(function(err){
    console.log("error "+err);
  });
}

function gameStart() {
  let size=5;
  let qNum=Math.floor(Math.random()*q.length);

  for(let i=0; i<size*size; i++){
    let s=document.createElement("span");
    s.textContent=q[qNum][0];
    s.setAttribute("id", "num"+i);
    cells.appendChild(s);
    s.addEventListener("click", function(){
      if ( this.textContent==q[qNum][1]) {
        correct.play();
        while(cells.firstChild){
          cells.removeChild(cells.firstChild);
        }
        count++;
        if (count<MAX) {
          gameStart();
        }else{
          //alert("Game Clear!");
          save();
          load();

          let p = document.createElement("p");
          p.textContent = "GAME CLEAR!";
          m.appendChild(p);

          clearTimeout(timer);
        }
      }else{
        wrong.play();
      }
    });
    if(i%size == size-1){
      const br=document.createElement("br");
      cells.appendChild(br);
    }
  }
  let p = Math.floor(Math.random()*size*size);
  let ans = document.getElementById("num"+p);
  ans.textContent=q[qNum][1];
}

function time() {
  let now = new Date();
  let eTime = parseInt((now.getTime() - start.getTime())/1000);
  score.textContent=eTime;
  timer=setTimeout("time()", 1000);
}
