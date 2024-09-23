const form = document.querySelector(".top-banner form");
const apiKey = "4246f9c69acc6507f2cb6cf19f556ec0";
let inputVal = "belgrade,RS";
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     inputVal = input.value;
// });


const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

async function weatherCall(){
    try{
        const res = await fetch(url);
        if(!res.ok){
        throw new Error(`Error handling URL-request, status ${res.status}`);
        }
        const response = await res.json();
         return console.log(response);
    }
    catch(error){
        console.error(`Error fetching Weather data for ${inputVal}, please try another city`,error);
        msg.textContent = "Please search for a valid city";
        throw error;
    }
}


weatherCall();