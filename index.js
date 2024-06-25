const locationInput=document.querySelector("#location");
const submit=document.querySelector("#submit");
const display=document.querySelector("#display");
const image=document.querySelector('#image');

async function weather(location){
    try{
        gif("loading");
        let response=await fetch(`http://api.weatherapi.com/v1/current.json?key=e642ba8f65084c028db104052242206&q=${location}`,{mode:"cors"});
        let data=await response.json();
        return(data.current.condition.text);
    }
    catch(error){
        throw Error();
    }
}

async function gif(gif){
    try{
        let response=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Ras4RdA2aTdOpWwXjoHJfsUPkg3G67ms&q=${gif}`,{mode:"cors"});
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let result=await response.json();
        console.log(result);
        console.log(result.data[0].images.original.url);
        image.src=result.data[0].images.original.url;
    }
    catch(error){
        throw Error();
    }
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let location=locationInput.value;

    weather(location)
    .then(result=>{
        gif(result);

        display.textContent=`The weather is ${result} right now!`
    })
    .catch(error=>{
        display.textContent="Invalid location"
        image.src="";
    });
})

//Convert code from 34-43 to async await and display gif