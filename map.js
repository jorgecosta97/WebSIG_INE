
// ..................................................................................................................................................... //
// ..................................................................................................................................................... //

// Criar o Mapa e definir o zoom e a coordenada central
var map = L.map('map'); // <- Criação do Mapa
map.setView([39.60470549437551, -8.413797424060485], 7); // Definição da coordenada central e do zoom


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Inserir os basemaps
//   -> OpenStreetMap:
var B_OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// ...Adicionar pelo menos 3 mapas de base... //


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Inserir as Camadas com informação espacial:
//   1. Densidade PoPulacional por município (2019, 2011, 2001)
//   -> Rampa de cores da densidade populacional
function definir_cor_DP(d) {
    return d > 142  ? '#bd0026' :
           d > 67   ? '#fecc5c' :
           d > 44   ? '#fd8d3c' :
           d > 28   ? '#fecc5c' :
                      '#ffffb2';
}

//   -> Funções para a densidade populacional de 2019 -> DP2019
//      -> Escolher a coluna para aplicar a respetiva cor ao poligono 
function DP2019_style(feature) {
    return {
        fillColor: definir_cor_DP(feature.properties.DP2019),
        weight: 0.5,
        opacity: 0.5,
        color: 'white',
        fillOpacity: 1
    };
}

//      -> Definir o Popup          ...Desenvolver o popup e modificar para ele aparecer quando o cursor passa for cima da feature...
function DP2019_popup(feature, layer){
    layer.bindPopup('<p> Densidade Populacional em ' + feature.properties.CONCELHO + ' (2019) = ' + feature.properties.DP2019 + ' </p>');
}



/*  -> Funções para a densidade populacional de 2011 -> DP2011
        -> Escolher a coluna para aplicar a respetiva cor ao poligono */
function DP2011_style(feature) {
    return {
        fillColor: definir_cor_DP(feature.properties.DP2011),
        weight: 0.5,
        opacity: 0.5,
        color: 'white',
        fillOpacity: 1
    };
}

//      -> Definir o Popup          ...Desenvolver o popup e modificar para ele aparecer quando o cursor passa for cima da feature...
function DP2011_popup(feature, layer){
    layer.bindPopup('<p> Densidade Populacional em ' + feature.properties.CONCELHO + ' (2011) = ' + feature.properties.DP2011 + ' </p>');
}



//   -> Funções para a densidade populacional de 2001 -> DP2001
//      -> Escolher a coluna para aplicar a respetiva cor ao poligono 
function DP2001_style(feature) {
    return {
        fillColor: definir_cor_DP(feature.properties.DP2001),
        weight: 0.5,
        opacity: 0.5,
        color: 'white',
        fillOpacity: 1
    };
}

//      -> Definir o Popup          ...Desenvolver o popup e modificar para ele aparecer quando o cursor passa for cima da feature...
function DP2001_popup(feature, layer){
    layer.bindPopup('<p> Densidade Populacional em ' + feature.properties.CONCELHO + ' (2001) = ' + feature.properties.DP2001 + ' </p>');
}


//   -> Carregar as camadas da Densidade populacional para o mapa
//      -> 2019
var L_DP2019 = L.geoJSON(PTconc, {
    style: DP2019_style,
    onEachFeature: DP2019_popup
}).addTo(map);

//      -> 2011
var L_DP2011 = L.geoJSON(PTconc, {
    style: DP2011_style,
    onEachFeature: DP2011_popup
});

//      -> 2001
var L_DP2001 = L.geoJSON(PTconc, {
    style: DP2001_style,
    onEachFeature: DP2001_popup
});




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //



/* Design e inserção dos elementos necessários ao mapa
    -> Menu para selecionar as layers
        -> Variavel com os basemaps
*/
var baseMaps = {
	"Open Street Map": B_OSM
};

/*
        -> Variavel com as camadas de informação espacial 
*/

var Overlays = {
	"Densidade populacional 2019":L_DP2019,
	"Densidade populacional 2011":L_DP2011,
	"Densidade populacional 2001":L_DP2001
};

//      -> Adicionar o menu com os basemaps e overlays 
L.control.layers(baseMaps, Overlays).addTo(map);

//      ...O objetivo final e ter este menu dividido em secções expansiveis e apenas permitir que se selecione 1 secção de cada vez...
/*var options = {
    //Make the "Landmarks" group exclusive (use radio inputs)
    exclusiveGroups: ["Densidade Populacional"],
    //Show a checkbox next to non-exclusive group labels for toggling all
    groupCheckboxes: true
};
//Use the custom grouped layer control, not "L.control.layers"
var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays, options);
map.addControl(layerControl);
// End of switcher control.
*/



//   -> Adicionar escala
L.control.scale({imperial: false}).addTo(map);

/* ........................................................................................................................................................

To do list:
-> simplificar e fazer o join das layers das nuts, e municipios das ilhas
-> adcionar uns exemplos com a info das nuts
-> juntar a info das ilhas à info do continente
-> carregar para o github
-> preparar a legenda
-> modificar o popup para ficar a aparecer ao passar o cursor

........................................................................................................................................................ */