const locationInput=document.querySelector("#location");
const submit=document.querySelector("#submit");
const display=document.querySelector("#display");

async function weather(location){
    try{
        let response=await fetch(`http://api.weatherapi.com/v1/current.json?key=e642ba8f65084c028db104052242206&q=${location}`);
        let data=await response.json();
        return(data.current.condition.text);
    }
    catch(error){
        throw Error();
    }
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let location=locationInput.value;
    weather(location).then(result=>display.textContent=`The weather is ${result} right now!`).catch(error=>display.textContent="Invalid location");
})

weather("new_delhi");