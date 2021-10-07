let form = document.querySelector("form#weather-input");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let city = e.target["zip-input"].value;

        fetch(`https://www.wttr.in/${city}?format=j1`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        let selectCity = data.nearest_area[0].areaName[0].value;
        let region = data.nearest_area[0].region[0].value;
        let country = data.nearest_area[0].country[0].value;
        let feelsLike = data.current_condition[0].FeelsLikeF;


        ////future forcast day 1
        let todayAvg = data.weather[0].avgtempF;
        let todayMax = data.weather[0].maxtempF;
        let todayMin = data.weather[0].mintempF;

        ////future forcast day 2
        let tomorrowAvg = data.weather[1].avgtempF;
        let tomorrowMax = data.weather[1].maxtempF;
        let tomorrowMin = data.weather[1].mintempF;

        ////future forcast day 3
        let dayAfterAvg = data.weather[2].avgtempF;
        let dayAfterMax = data.weather[2].maxtempF;
        let dayAfterMin = data.weather[2].mintempF;





        let display = document.querySelector(".display");
        let futureForcast = document.querySelector(".future-forcast");


        display.innerHTML = `
            <h2>${selectCity}</h2>
                <div id="city-name"><strong>Area:</strong> ${selectCity}</div>
                <div id="state-name"><strong>Region:</strong> ${region}</div>
                <div id="country-name"><strong>Country:</strong> ${country}</div>
                <div id="city-temp"><strong>Currently:</strong> Feels like ${feelsLike}°F</div>
            
        `;

        futureForcast.innerHTML =`
            <div id="today-temp">
                <h3>Today</h3>
                <div class="average"><strong>Average Temperture:</strong> ${todayAvg}˚F</div>
                <div class="max"><strong>Max Temperture:</strong> ${todayMax}˚F</div>
                <div class="min"><strong>Min Temperture:</strong> ${todayMin}˚F</div>
            </div>  

            <div id="tomorrow-temp">
                <h3>Tomorrow</h3>
                <div class="average"><strong>Average Temperture:</strong> ${tomorrowAvg}˚F</div>
                <div class="max"><strong>Max Temperture:</strong> ${tomorrowMax}˚F</div>
                <div class="min"><strong>Min Temperture:</strong> ${tomorrowMin}˚F</div>
            </div>

            <div id="day-after-temp">
                <h3>Day After Tomorrow</h3>
                <div class="average"><strong>Average Temperture:</strong> ${dayAfterAvg}˚F</div>
                <div class="max"><strong>Max Temperture:</strong> ${dayAfterMax}˚F</div>
                <div class="min"><strong>Min Temperture:</strong> ${dayAfterMin}˚F</div>
            </div>
        `;
    }).catch((err)=>{
         console.log(err);
    })
})



    

