// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kurleigh Ryan" // HINT: Replace this with your own name!
 console.log (yourName)

 let gb=Gingerbread= 0 // Gingerbread
 let gbPlusBtn=documentquery.Selector ("add-ab")
 let gbminusBtn=documentquery.sekector ("minus-gb")
// We'll use these variables to track the counts of each cookie type
function updateQuantity (displaygb){ 
    let Gingerbread=documentquery.Selector(".total-Gingerbread")
}
let Gingerbread =0
gbminusBtn.addEventListener("click",function (e){
    if (Gingerbread>0){
        Gingerbread--
        } else {
            updateQuantity (Gingerbread)}
        
         if gbPlusBtn.addEventListener("click",function(e){
             updateGingerbread("Gingerbread:"++Gingerbread)
         })


let cc = 0 // Chocolate Chip
let ccPlusBtn=documentquery.Selector ("add-ab")
let ccminusBtn=documentquery.sekector ("minus-gb")
// We'll use these variables to track the counts of each cookie type
function updateQuantity (displaycc){ 
   let ChoclateChip=documentquery.Selector(".total-ChocolateChip")
}
let ChocolateChip =0
ccminusBtn.addEventListener("click",function (e){
   if (ChocolateChip>0){
       ChocolateChip--
       }else {
           updateQuantity (ChocolateChip)}
       }  
        if ccPlusBtn.addEventListener("click",function(e){
            updateChocolateChip("ChocolateChip:"++ChocolateChip)
        })

let sugar = 0 // Sugar Sprinkle
let sugarPlusBtn=documentquery.Selector ("add-sugar")
let sugarminusBtn=documentquery.sekector ("minus-sugar")
// We'll use these variables to track the counts of each cookie type
function updateQuantity (displaygb){ 
   let Sugar-Sprinkle=documentquery.Selector(".total-Sugar Sprinkle")
}
let SugarSprinkle =0
sugarminusBtn.addEventListener("click",function (e){
   if (SugarSprinkle>0){
       SugarSprinkle--
       } else {
        updateQuantity (SugarSprinkle)}
        if sugarPlusBtn.addEventListener("click",function(e){
            updateSugarSprinkle("SugarSprinkle:"{++SugarSprinkle})
        })




// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons