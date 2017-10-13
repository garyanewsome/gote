document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
    case 49:
      var elm = document.getElementById('audio-one')
      elm.play()
      keyPress(e, elm)
      break
    case 50:
      var elm = document.getElementById('audio-two')
      elm.play()
      keyPress(e, elm)
      break
    case 51:
      var elm = document.getElementById('audio-three')
      elm.play()
      keyPress(e, elm)
      break
    case 52:
      var elm = document.getElementById('audio-four')
      elm.play()
      keyPress(e, elm)
      break
    case 53:
      var elm = document.getElementById('audio-five')
      elm.play()
      keyPress(e, elm)
      break
    case 54:
      var elm = document.getElementById('audio-six')
      elm.play()
      keyPress(e, elm)
      break
    case 55:
      var elm = document.getElementById('audio-seven')
      elm.play()
      keyPress(e, elm)
      break
    case 56:
      var elm = document.getElementById('audio-eight')
      elm.play()
      keyPress(e, elm)
      break
    case 57:
      var elm = document.getElementById('audio-nine')
      elm.play()
      keyPress(e, elm)
      break
    default:
      console.log("Welcome to 'gote'!")
  }
})

function keyPress(e, elm){
  var clicked = elm.id.split('-')
  var thisId = clicked[1]
  pressedButton = document.getElementById(thisId)
  pressedButton.style.backgroundImage = "url('/images/pressed.svg')"

  document.addEventListener('keyup', function(pressedButton) {
    document.getElementById(thisId).style.backgroundImage="url('/images/unpressed.svg')"
  })
}
