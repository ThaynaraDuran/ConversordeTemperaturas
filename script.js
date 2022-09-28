
const buttonConvert = document.getElementById("btn");

form.addEventListener("submit", function(e) {
    e.preventDefault();
})


buttonConvert.onclick = function() {

    let input = document.getElementById("degree").value
    const convertFrom = document.getElementById("convertFrom").value
    const convertTo = document.getElementById("convertTo").value

    const element = document.getElementById('result');
    if(element.firstElementChild){
        element.firstElementChild.remove()
    }
    
    
    if(convertFrom == "celsius" && convertTo == "fahrenheit"){
        celsiusToFahrenheit(input);
    } else if(convertFrom == "fahrenheit" && convertTo == "celsius"){
        fahrenheitToCelsius(input)
    } else if(convertFrom == "celsius" && convertTo == "kelvin"){
        celsiusToKelvin(input)
    }else if(convertFrom == "kelvin" && convertTo == "celsius"){
        celsiusToKelvin(input)
    }else if (convertFrom == "fahrenheit" && convertTo == "kelvin"){
        fahrenheitToKelvin(input) 
    } else if (convertFrom == "kelvin" && convertTo == "fahrenheit"){
        kelvinToFahrenheit(input)  
    } else if (convertFrom === convertTo){
        insertElement(Number(input))
    }

      
}

function insertElement(e){
    let result = document.createElement("p");
    result.innerText = e.toFixed(2);
 
    const p = document.getElementById("result");
    return  p.prepend(result)
}

    
function celsiusToFahrenheit(control){
   let fah = control * 9/5 + 32
   insertElement(fah)
   
}

    
function fahrenheitToCelsius(control){
   let cel = (control - 32) * 5/9
   insertElement(cel)
}

function celsiusToKelvin(control){  
    if(document.getElementById("convertFrom").value == "celsius" && document.getElementById("convertTo").value == "kelvin"){
        let kel = Number(control) + 273.15
    insertElement(kel)
    } else if(document.getElementById("convertFrom").value == "kelvin" && document.getElementById("convertTo").value == "celsius"){
        let kel = control - 273.15
   insertElement(kel)
    }
    
}
function fahrenheitToKelvin(control){
    let cel = (control - 32) * 5/9
    let kel = cel + 273.15
    insertElement(kel)
}

function kelvinToFahrenheit(control){
    let kel = control - 273.15
    let fah = kel * 9/5 + 32
    insertElement(fah)
}


