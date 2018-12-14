// Psuedo coding
// a game with 4 crystals and Random Result-->
// Every crystal needs to have a random number 1-12-->
// When clicking any crystal, it ashould be adding with the previous result-->
// until it equals the total score-->
// If it is greater than the Random Result, then we add to the lost counter-->
// If it is equal, then we increment a win counter-->
// A new random number should be generated every single time we win or lose-->
// to those 4 crystals-->


let random_result;
let lose = 0;
let win = 0;
let previous = 0;
let images = ["Assests/images/kinetic_Crystal.jpg","Assests/images/Savraj_Crystal.png", "Assests/images/FFIII_Model_-_Water_Crystal.png", "Assests/images/Crystal_alliance.png" ];

let startAndReset = function() {

    $(".crystals").empty();


random_result = Math.floor(Math.random() * 69 ) + 30;


$("#result").html('Random-Result: ' + random_result);
for (let i = 0; i < images.length; i++) {
    let random = Math.floor(Math.random() * 11 ) + 1;
    //console.log(random);

    let crystal = $("<img>");

        crystal.attr({
            "class":'crystal', 
            "data-random": random,
            "src": images[i]
            
        
    });

    crystal.html(random);

    


    $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
    }
startAndReset();

    $(document).on('click', ".crystal", function () {

        let num = parseInt($(this).attr('data-random'));
        $("#previous").html("Total Score: " + previous);
        previous += num;

        console.log(previous);
        
        if(previous > random_result){
            lose++;
            $("#lose").html("You Lost: " + lose)
            previous = 0;
            startAndReset();
        }

        else if(previous === random_result){
            win++;

            $("#win").html("You Win: " + win);
            previous = 0;
            startAndReset();

        }
        
    });
   
