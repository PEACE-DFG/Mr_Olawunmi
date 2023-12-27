// json - Javascript object notation 
// JSON is useed to transmit data between server and web applications, store and organize data

const user ={
  "name": "John",
  "age":30
}
console.log(user);

//API -APPLICATION PROGRAMMING INTERFACE
/*
api is sas set of rules or tools that allows different applications interact
with one another

*/

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/sound')
.then(res=> res.json())
.then(response=>{
  console.log(response[0].meanings[0])
  console.log(response[0].meanings[0].definitions[0].definition)
})


function display(){
  let input_value =  document.getElementById('user-input').value;
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + input_value)
  .then(res=> res.json())
  .then(response=>{
    console.log(response[0])
    console.log(response[0].meanings[0].definitions[0].definition)


    let word = input_value 
    let meaning = response[0].meanings[0].definitions[0].definition
    document.getElementById('word').innerHTML = word
    document.getElementById('definition').innerHTML = meaning
  })

}