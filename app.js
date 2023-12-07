// fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=chicken`).then((data)=>{

//     return data.json();
// }).then((completedata)=>{
//     // console.log(completedata.meals)
//    let data1=" ";

//    completedata.meals.forEach((values) => {
    
//     data1+=`<div class="grid">

//    <img src=${values.strMealThumb} alt="img">
//    <p>${values.strMeal}</p>

// </div>`
    
//    });
//    document.querySelector(".grid-conatiner").innerHTML=data1;

// }).catch((err)=>{
//     console.log(err);
// })



fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=lamb`).then((data)=>{

    return data.json();
}).then((completedata)=>{
    // console.log(completedata.meals)
   let data1=" ";

   completedata.meals.forEach((values) => {
    
    data1+=`<div class="grid">

   <img src=${values.strMealThumb} alt="img">
   <p>${values.strMeal}</p>

</div>`
    
   });
   document.querySelector(".grid-conatiner").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})



// document.querySelector(".grid-conatiner").style.display="none"

const btn =document.getElementById("button")
const search_value=document.querySelector(".search_bar").value


















fetch(`https://www.themealdb.com/api/json/v1/1/random.php`).then((Random)=>{

    return Random.json();
}).then((Randomdata)=>{
    // console.log(completedata.meals)
   let Random1=" ";
  

   Randomdata.meals.forEach((values) => {
    
    Random1=`<div class=".grid">

   <img src=${values.strMealThumb} alt="img">
   <p>${values.strMeal}</p>

</div>`
    
   });
   document.querySelector(".grid").innerHTML=Random1;
 


}).catch((err)=>{
    console.log(err);
})

