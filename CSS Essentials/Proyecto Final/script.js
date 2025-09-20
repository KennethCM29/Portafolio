const descriptions = {
    "España": "España es un país en Europa Occidental, conocido por su cultura, historia y gastronomía rica como el jamón y el vino.",
    "Italia": "Italia es una nación europea famosa por su arte renacentista, comida deliciosa como la pizza y pasta, y monumentos históricos como el Coliseo.",
    "Alemania": "Alemania es un país en Europa Central, líder en ingeniería, automóviles y cultura, con ciudades como Berlín y Múnich.",
        "Brasil": "Brasil es el país más grande de América del Sur, conocido por su biodiversidad, playas y pasión por el fútbol."
    };

    const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.addEventListener('click', () => {
                const country = img.alt;
                alert(descriptions[country]);
            });
        });
    
    