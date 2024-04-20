

function getinfo(){
    let b = document.getElementById('cityname').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+b+'&appid=3045dd712ffe6e702e3245525ac7fa38&units=metric')
    .then(response => response.json()).then(data => {
      console.log(data)
      abc=data
      // temperature
      document.getElementById('temperature').innerHTML = (abc["main"]['temp']).toFixed(1)+"°c"
    
      // humidity
      document.getElementById('humidity').innerHTML = abc["main"]['humidity']+'%'
    
      // city
      document.getElementById('city').innerHTML = abc['name']+", "+abc['sys']['country']
    
      // clouds
      document.getElementById('clouds').innerHTML = abc['clouds']['all']+"%"
    
      // windspeed
      document.getElementById('windspeed').innerHTML = abc['wind']['speed']+"km/h"
    
      // description
      capdesc = abc['weather'][0]['description']
      capdescoutput = capdesc.charAt(0).toUpperCase()+capdesc.slice(1)
      document.getElementById('description').innerHTML = capdescoutput
      console.log(abc)
    
      if(abc['clouds']['all']>=70){
        document.body.style.backgroundImage = "url('pexels-eberhard-grossgasteiger-1019991.jpg')";
      
      }
      if(abc['clouds']['all']<=50 && abc['clouds']['all']>=30){
        document.body.style.backgroundImage = "url('pexels-josh-sorenson-1384901.jpg')";
      }
      if(abc['clouds']['all']<30){
        document.body.style.backgroundImage = "url('pexels-jimmy-chan-1117403.jpg')";
    
      }
    })
    }
    
    
    // let fulllink ='https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=3045dd712ffe6e702e3245525ac7fa38'