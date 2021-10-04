// This files has functions to convert different temperature units

// Functions take temperature value as a arguement and returns corresponding converted value



const celsius_to_fahrenheit = (celsius ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit

    return  Math.round(( (celsius) * 9 / 5) + 32 );

}

const celsius_to_kelvin = (celsius) => {

    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin

    return  Math.round( (celsius) + 273.15 )
}


const celsius_to_rankine = (celsius ) => {

    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale

    return  Math.round(( (celsius) * 9 / 5) + 491.67 )
}


const fahrenheit_to_celsius = (fahrenheit ) => {

    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
   
    return  Math.round(( (fahrenheit) - 32) * 5 / 9 )
}

const fahrenheit_to_kelvin = (fahrenheit ) => {
  
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin

    return  Math.round((( (fahrenheit) - 32) * 5 / 9) + 273.15 )
}

const fahrenheit_to_rankine = (fahrenheit ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
   
    return  Math.round( (fahrenheit) + 459.67 )
}

const kelvin_to_celsius = (kelvin ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    
    return  Math.round( (kelvin) - 273.15 )

}

const kelvin_to_fahrenheit = (kelvin ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
   
   
    return  Math.round((( (kelvin) - 273.15) * 9 / 5) + 32 )
}

const kelvin_to_rankine = (kelvin ) => {

    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale

    return  Math.round(( (kelvin) * 9 / 5) )
}

const rankine_to_celsius = (rankine ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  
    return  Math.round(( (rankine) - 491.67) * 5 / 9 )
}

const rankine_to_fahrenheit = (rankine ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
   
    return  Math.round( (rankine) - 459.67 )
}


const rankine_to_kelvin = (rankine ) => {
   
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
   
    return  Math.round(( (rankine) * 5 / 9) )
}

const reaumur_to_kelvin = (reaumur ) => {
 
    // Reference:- http://www.csgnetwork.com/temp2conv.html

    return  Math.round(( (reaumur) * 1.25 + 273.15) )
}

const reaumur_to_fahrenheit = (reaumur ) => {
   
    // Reference:- http://www.csgnetwork.com/temp2conv.html
   
    return  Math.round(( (reaumur) * 2.25 + 32) )
}

const reaumur_to_celsius = (reaumur ) => {

    // Reference:- http://www.csgnetwork.com/temp2conv.html

    return  Math.round(( (reaumur) * 1.25) )
}

const reaumur_to_rankine = (reaumur ) => {
  
    // Reference:- http://www.csgnetwork.com/temp2conv.html

    return  Math.round(( (reaumur) * 2.25 + 32 + 459.67) )
}

export {
    celsius_to_fahrenheit,celsius_to_kelvin,celsius_to_rankine,
    fahrenheit_to_celsius,fahrenheit_to_kelvin,fahrenheit_to_rankine,
    kelvin_to_celsius,kelvin_to_fahrenheit,kelvin_to_rankine,
    rankine_to_celsius,rankine_to_fahrenheit,rankine_to_kelvin,
    reaumur_to_celsius,reaumur_to_fahrenheit,reaumur_to_kelvin,reaumur_to_rankine
}