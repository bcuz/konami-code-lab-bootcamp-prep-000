const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// console.log(code.length)


function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function init() {
  // Write your JavaScript code inside the init() function

  var pressed = []

  document.body.addEventListener('keydown', function(e) {

    pressed.push(e.which)
    // console.log(e.which)

    var last10 = pressed.slice(Math.max(pressed.length - 10, 1))

    if (arraysEqual(last10, code)) {
    	alert("konami")
    }
  })
}

init()
