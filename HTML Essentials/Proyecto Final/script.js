function showAlert(img) {
    const alt = img.alt;
    if (alt.includes("Time Square")) {
        alert("Nueva York es una metrópolis global vibrante, situada en el sur del estado de Nueva York, famosa por su diversidad cultural, su economía financiera y sus icónicas atracciones como la Estatua de la Libertad y Times Square.");
        alert("Disfrute mucho esta ciudad")
    } else if (alt.includes("Ciudad de Kansas")) {
        alert("Kansas City es un área metropolitana dividida entre dos estados, Kansas City (Misuri) y Kansas City (Kansas), ubicada en la confluencia de los ríos Misuri y Kansas.");
        alert("Es una ciudad muy especial porque esconde mucho misticismo")
    } else if (alt.includes("Ciudad de Barcelona")) {
        alert("Barcelona es una ciudad española conocida por su arquitectura modernista, playas mediterráneas y una rica historia cultural.");
        alert("La ciudad del equipo de mis amores Barcelona F.C")
    }
}
