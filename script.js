// javascript time

var character = document.getElementById("character") // create variable character and initialize it with the character div in the html file

var obstacle = document.getElementById("obstacle") //same thing but for obstacle div 

function jump(){ //create a function jump
    character.classList.add("animate") //add animate(.css) to character's class list
    
    setTimeout(function(){
        character.classList.remove("animate") // remove the function class so that we can keep jumping
    },500) //after 500ms (which is the duration of the jump)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")) 
    //this is calculating the top position of the character to be compare to the position of the obstacle
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))

    // first 2 conditions: if obstacle is directly under character (our character's width is 20px wide)
    // last condition: our charactertop hasn't jumped over obstacle
    if (obstacleLeft < 20 && obstacleLeft > 0 && characterTop >= 130){
        obstacle.style.animation = "none" //stops animation of obstacle
        obstacle.style.display = "none" //stops displaying obstacle
        alert('you lose!') //tells user that they lost 
        score.style.display = "none"
    }
},10)

var increaseScore = setInterval(function(){
    var score = document.getElementById('score') // get the score object from html and store it in a variable
    var value = score.innerHTML // create a value variable that will be incremented
    value++ //increment the value 
    score.innerHTML = value //set the html text of the score to be equal to the value that we are incrementing
},1000) //incrementing score every second (the time it takes for a block to come and pass)


//I WAS TRYING TO INCREMENT SCORE BY WHEN CHARACTER'S POSITION IS OVER THE OBSTACLE'S POSITION

// function increaseScore(){
//     var score = document.getElementById('score')
//     var value = score.innerHTML
//     value += 1
//     score.innerHTML = value
// }

// if (obstacleLeft < 20 && obstacleLeft > 20 && characterTop <= 130){
//     increaseScore()
// }
