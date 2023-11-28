fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then((data)=>data.json()).then((parsedData)=>{
    console.log(parsedData)
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then((Data)=>Data.json()).then((ParsedData)=>{
    console.log(ParsedData)
})