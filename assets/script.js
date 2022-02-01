// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kurleigh Ryan" // HINT: Replace this with your own name!
 console.log (yourName);
 
 let gb=0
  // Gingerbread
 let gbPlusBtn=document.querySelector ("#add-gb")
 let gbminusBtn=document.querySelector ("#minus-gb")
// We'll use these variables to track the counts of each cookie type
function updateQuantity (displaygb){ 
    let GBTotal=document.querySelector("#qty-gb")
    GBTotal.innerHTML=displaygb
}
let Gingerbread =0;
gbminusBtn.addEventListener("click",function(e){
   if (Gingerbread>0){
        Gingerbread--
        console.log (Gingerbread)
        updateQuantity (Gingerbread)
    }})

gbPlusBtn.addEventListener("click",function(e){
             ++Gingerbread
             console.log (Gingerbread)
             updateQuantity(Gingerbread)

         });
 
let cc = 0
// Chocolate Chip
let ccPlusBtn=document.querySelector ("#add-cc")
let ccminusBtn=document.querySelector ("#minus-cc")
// We'll use these variables to track the counts of each cookie type
function updateQuantity (displaycc){ 
   let CCTotal=document.querySelector ("#qty-cc")
   CCTotal.innerHTML=displaycc
}
let ChocolateChip =0;
ccminusBtn.addEventListener("click",function(e){
   if (ChocolateChip>0){
       ChocolateChip--
       console.log (ChocolateChip)
        updateQuantity (ChocolateChip)
        }})     
ccPlusBtn.addEventListener("click",function(e){
    ++ChocolateChip
    updateQuantity(ChocolateChip)
    console.log (ChocolateChip)
  })

let sugar = 0
 // Sugar Sprinkle
var sugarPlusBtn=document.querySelector ("#add-sugar")
var sugarminusBtn=document.querySelector ("#minus-sugar")
// We'll use these variables to track the counts of each cookie type
function updateQuantity (displaysugar){ 
   let SSTotal=document.querySelector("#qty-sugar")
   SSTotal.innerHTML=displaysugar
}
let SugarSprinkle =0;
sugarminusBtn.addEventListener("click",(e) => {
        if (SugarSprinkle > 0) {
            SugarSprinkle--
            console.log (SugarSprinkle)
            updateQuantity(SugarSprinkle);
        }})
sugarPlusBtn.addEventListener("click", function (e) {
            ++ SugarSprinkle
            console.log (SugarSprinkle)
            updateQuantity(SugarSprinkle)
});
        /*
            // selecting the element with an id of credit
            //const credit = document.querySelector('#credit');
        // selecting the element with an id of add-gb
        //const gbPlusBtn = document.querySelector('#add-gb');
        // Code to update name display
        //credit.textContent = `Created by ${yourName}`;

        // Event listener for clicks on the "+" button for Gingerbread cookies
//gbPlusBtn.addEventListener('click', function () {
            // HINT: You can delete this console.log after you no longer need it!
//console.log('Gingerbread + button was clicked!');

           // let footer = "KurleighRyan"
           // console.log(footer);
            // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        //});
        // TODO: Hook up event listeners for the rest of the buttons
   // }

// TODO: Hook up event listeners for the rest of the buttons
*/