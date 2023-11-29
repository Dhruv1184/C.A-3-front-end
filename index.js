 
 fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((data)=>data.json()).then((parsedData)=>{
 

    const ingredients = document.getElementById('Ingredients')
    const ingredientsList = document.getElementById('list')
    function DisplayIngredients(){
        if (ingredientsList.style.display == 'contents'){
            ingredientsList.style.display = 'none'
        }else{
            ingredientsList.style.display = 'contents'
        }
    }
    ingredients.addEventListener('click', DisplayIngredients);

    const mainDiv = document.getElementById('randomList')
    let random = Math.floor(Math.random()*parsedData.meals.length)
    

    for( let i = random ; i < 10 ;i++){
        let box = document.createElement('div');
        box.setAttribute('id','box');

        let img = document.createElement('img');
        img.setAttribute('id','rImg');
        img.setAttribute('src',parsedData.meals[i].strMealThumb)

        let name = document.createElement('h1');
        name.setAttribute('id','name')
        name.innerHTML = parsedData.meals[i].strMeal
        box.appendChild(img)
        box.appendChild(name)
        mainDiv.appendChild(box)
    }

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((Data) => Data.json()).then((randomData)=>{
      
        const ingredientName = document.getElementById('heading2');
        const ingredientimg = document.getElementById('ingredientimg');
        ingredientimg.src = randomData.meals[0].strMealThumb
        ingredientName.innerText = randomData.meals[0].strMeal


        const Ingri = document.getElementsByClassName('I1');
        Ingri[0].innerHTML =  randomData.meals[0].strIngredient1
        Ingri[1].innerHTML =  randomData.meals[0].strIngredient2
        Ingri[2].innerHTML =  randomData.meals[0].strIngredient3
        Ingri[3].innerHTML =  randomData.meals[0].strIngredient4
        Ingri[4].innerHTML =  randomData.meals[0].strIngredient5
        Ingri[5].innerHTML =  randomData.meals[0].strIngredient6
    })
    })

   
    const search = document.getElementById('search')
    searchItem=()=>{
        const Value = search.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Value}`

        fetch(url)
        .then((data)=>data.json()).then((searchedData)=>{
            
    
            
            const searchedDiv= document.getElementById('searchList')
            searchedDiv.innerHTML = ''
            for(let j = 0; j < 10;j++){
                let searchbox = document.createElement('div')
                searchbox.setAttribute('id','searchBox')
    
                let imaage = document.createElement('img');
                imaage.setAttribute('id','sImg');
                imaage.setAttribute('src',searchedData.meals[j].strMealThumb)
                        
                let Sname = document.createElement('h1');
                Sname.setAttribute('id','Sname')
                Sname.innerHTML = searchedData.meals[j].strMeal
    
                searchbox.appendChild(imaage)
                searchbox.appendChild(Sname)
                searchedDiv.appendChild(searchbox)
                
            }
        
        })

       
    }
    
    const srcbtn = document.getElementById('searchbtn')
    srcbtn.addEventListener('click',()=>{
        searchItem()
        
    })
    

   
   