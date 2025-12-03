// Ejercicio #1

class MyIterable {
    constructor() {
        this.set = new Set();
    }

    add(element) {
        this.set.add(element);
    }

    has(element) {
        return this.set.has(element);
    }

    del(element) {
        this.set.delete(element);
    }

    get length() {
        return this.set.size;
    }

    *[Symbol.iterator]() {
        for (let item of this.set) {
            yield item;
        }
    }
}

// Prueba de la clase
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);

console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5

// Ejercicio #2

function myDecorator(func) {
    const usedArgs = new Set();

    return function(...args) {
        const argsKey = JSON.stringify(args);
        if (usedArgs.has(argsKey)) {
            console.log(`arguments already used: ${args.join(',')}`);
        } else {
            usedArgs.add(argsKey);
            return func(...args);
        }
    };
}

// Prueba del decorador
let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5

// Ejercicio #3

function getPromiseArray(arr) {
    return arr.map(element => {
        return new Promise((resolve, reject) => {
            if (Number.isInteger(element) && element > 0) {
                setTimeout(() => resolve(element), element);
            } else {
                reject(new Error(`${element} is not a positive integer`));
            }
        });
    });
}

// Prueba de la función
let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> all: a is not a positive integer
Promise.any(promises1).then(a => console.log(`any: ${a}`))
.catch(e => console.log(`any: ${e.message}`)); // -> any: 10

// Ejercicio #4 

// Ejercicio #4

function getWeather(cities, info = 'all') {
    const cityArray = Array.isArray(cities) ? cities : [cities];
    const promises = cityArray.map(city => {
        const url = `http://localhost:3000/weather?city=${encodeURIComponent(city)}${info !== 'all' ? `&info=${info}` : ''}`;
        return fetch(url).then(response => response.json());
    });

    Promise.all(promises).then(results => {
        results.forEach(data => {
            console.log(`CITY: ${data.city}`);
            if (data.weather) {
                if (info === 'wind' || info === 'all') {
                    const wind = data.weather.wind;
                    if (wind) {
                        console.log(`WIND: ${wind.speed} m/s, ${wind.deg} deg`);
                        if (wind.speed > 15) {
                            console.log('WARNING! Wind speed over 15 m/s');
                        }
                    }
                }
                if (info === 'clouds' || info === 'all') {
                    console.log(`CLOUDS: ${data.weather.clouds} %`);
                }
                if (info === 'temp' || info === 'all') {
                    console.log(`TEMP: ${data.weather.temp} C`);
                    if (data.weather.temp < -20) {
                        console.log('WARNING! Temperature below -20 degrees');
                    }
                }
                if (info === 'precipitation' || info === 'all') {
                    console.log(`PRECIPITATION: ${data.weather.precipitation} %`);
                }
            }
            console.log(''); // Empty line between cities
        });
    }).catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

// Prueba de la función
let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %

// Ejercicio #5

async function getWeather(cities, info = 'all') {
    const cityArray = Array.isArray(cities) ? cities : [cities];
    const promises = cityArray.map(city => {
        const url = `http://localhost:3000/weather?city=${encodeURIComponent(city)}${info !== 'all' ? `&info=${info}` : ''}`;
        return fetch(url).then(response => response.json());
    });

    try {
        const results = await Promise.all(promises);
        results.forEach(data => {
            console.log(`CITY: ${data.city}`);
            if (data.weather) {
                if (info === 'wind' || info === 'all') {
                    const wind = data.weather.wind;
                    if (wind) {
                        console.log(`WIND: ${wind.speed} m/s, ${wind.deg} deg`);
                        if (wind.speed > 15) {
                            console.log('WARNING! Wind speed over 15 m/s');
                        }
                    }
                }
                if (info === 'clouds' || info === 'all') {
                    console.log(`CLOUDS: ${data.weather.clouds} %`);
                }
                if (info === 'temp' || info === 'all') {
                    console.log(`TEMP: ${data.weather.temp} C`);
                    if (data.weather.temp < -20) {
                        console.log('WARNING! Temperature below -20 degrees');
                    }
                }
                if (info === 'precipitation' || info === 'all') {
                    console.log(`PRECIPITATION: ${data.weather.precipitation} %`);
                }
            }
            console.log(''); // Empty line between cities
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Prueba de la función
let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %
