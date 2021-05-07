/**  
 * タイマーを開始する
 */

let finish 
let intervalId
function startTimer(){
  let second = document.querySelector("#time-input").value
  finish = Date.now() + second * 1000
  intervalId = setInterval(checkRemainingTime,50)
} 

/**
 * タイマーを終了する
 */
function stopTimer(){

}

/**
 * 残り時間をチェックする繰り返し
 */
function checkRemainingTime(){
  let remain = finish - Date.now()
  //残り時間が０以下になったらタイマーを終了する
  if (remain <= 0){
    stopTimer()
    alert("時間になりました")
  }
}

/**
 * 残り時間を表示する
 */
function setDisplay(second){

}