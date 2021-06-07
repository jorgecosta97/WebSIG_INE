//  1. Nacimentos e fecundidade
//      1.1. Nados-vivos (1960, 2001, 2011, 2019)
//          Municipio
//              2019
function colors_NV_CONC_2019(d) {
    return  d > 361   ? '#004f8a' :
            d > 132   ? '#006db2' :
            d > 65    ? '#00a6e2' :
            d > 29    ? '#5ac5f3' :
                        '#d3edfc';
};
function style_NV_CONC_2019(feature) {
    return {
        fillColor: colors_NV_CONC_2019(feature.properties.Nados_vi_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_NV_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Nados-vivos</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Nados_vi_3.toFixed(2) + ' Indivíduos</p>');
};
//              2011
function colors_NV_CONC_2011(d) {
    return  d > 448   ? '#004f8a' :
            d > 169   ? '#006db2' :
            d > 76    ? '#00a6e2' :
            d > 38    ? '#5ac5f3' :
                        '#d3edfc';
};
function style_NV_CONC_2011(feature) {
    return {
        fillColor: colors_NV_CONC_2011(feature.properties.Nados_vi_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_NV_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Nados-vivos</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Nados_vi_2.toFixed(2) + ' Indivíduos</p>');
};
//              2001
function colors_NV_CONC_2001(d) {
    return  d > 511   ? '#004f8a' :
            d > 206   ? '#006db2' :
            d > 109   ? '#00a6e2' :
            d > 53    ? '#5ac5f3' :
                        '#d3edfc';
};
function style_NV_CONC_2001(feature) {
    return {
        fillColor: colors_NV_CONC_2001(feature.properties.Nados_vi_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_NV_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Nados-vivos</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Nados_vi_1.toFixed(2) + ' Indivíduos</p>');
};
//          Nuts III
//              201
function colors_NV_NutsIII_2019(d) {
    return  d > 3063   ? '#004f8a' :
            d > 2131   ? '#006db2' :
            d > 1486   ? '#00a6e2' :
            d > 734    ? '#5ac5f3' :
                         '#d3edfc';
};
function style_NV_NutsIII_2019(feature) {
    return {
        fillColor: colors_NV_NutsIII_2019(feature.properties.Nados_vi_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_NV_NutsIII_2019(feature, layer){
    layer.bindPopup('<h4>Nados-vivos</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Nados_vi_2.toFixed(2) + ' Indivíduos</p>');
};
//              2011
function colors_NV_NutsIII_2011(d) {
    return  d > 3667   ? '#004f8a' :
            d > 2467   ? '#006db2' :
            d > 1730   ? '#00a6e2' :
            d > 878    ? '#5ac5f3' :
                         '#d3edfc';
};
function style_NV_NutsIII_2011(feature) {
    return {
        fillColor: colors_NV_NutsIII_2011(feature.properties.Nados_vi_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_NV_NutsIII_2011(feature, layer){
    layer.bindPopup('<h4>Nados-vivos</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Nados_vi_2.toFixed(2) + ' Indivíduos</p>');
};
//              2001
function colors_NV_NutsIII_2001(d) {
    return  d > 4164   ? '#004f8a' :
            d > 3129   ? '#006db2' :
            d > 2288   ? '#00a6e2' :
            d > 1035   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_NV_NutsIII_2001(feature) {
    return {
        fillColor: colors_NV_NutsIII_2001(feature.properties.Nados_vi_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_NV_NutsIII_2001(feature, layer){
    layer.bindPopup('<h4>Nados-vivos</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Nados_vi_1.toFixed(2) + ' Indivíduos</p>');
};

//      1.2. Taxa de natalidade (2001, 2011, 2019)
//          Município
function colors_TN_CONC_2019(d) {
    return  d > 8.6   ? '#004f8a' :
            d > 7.4   ? '#006db2' :
            d > 6.4   ? '#00a6e2' :
            d > 5.3   ? '#5ac5f3' :
                        '#d3edfc';
};
//              2019
function style_TN_CONC_2019(feature) {
    return {
        fillColor: colors_TN_CONC_2019(feature.properties.TN2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TN_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de natalidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TN2019.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TN_CONC_2011(d) {
    return  d > 9.6   ? '#004f8a' :
            d > 8.3   ? '#006db2' :
            d > 7.4   ? '#00a6e2' :
            d > 6     ? '#5ac5f3' :
                        '#d3edfc';
};

function style_TN_CONC_2011(feature) {
    return {
        fillColor: colors_TN_CONC_2011(feature.properties.TN2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TN_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de natalidade</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TN2011.toFixed(2) + ' ‰</p>');
};
//              2001
function colors_TN_CONC_2001(d) {
    return  d > 11.6  ? '#004f8a' :
            d > 10.3  ? '#006db2' :
            d > 8.8   ? '#00a6e2' :
            d > 7.1   ? '#5ac5f3' :
                        '#d3edfc';
};

function style_TN_CONC_2001(feature) {
    return {
        fillColor: colors_TN_CONC_2001(feature.properties.TN2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TN_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de natalidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TN2001.toFixed(2) + ' ‰</p>');
};

//          Nuts III
function colors_TN_NutsIII_2019(d) {
    return  d > 8.16   ? '#004f8a' :
            d > 7.64   ? '#006db2' :
            d > 6.96   ? '#00a6e2' :
            d > 6.1    ? '#5ac5f3' :
                         '#d3edfc';
};
//              2019
function style_TN_NutsIII_2019(feature) {
    return {
        fillColor: colors_TN_NutsIII_2019(feature.properties.TN2019),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TN_NutsIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de natalidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TN2019.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TN_NutsIII_2011(d) {
    return  d > 9.0   ? '#004f8a' :
            d > 8.4    ? '#006db2' :
            d > 7.9    ? '#00a6e2' :
            d > 7.0    ? '#5ac5f3' :
                         '#d3edfc';
};

function style_TN_NutsIII_2011(feature) {
    return {
        fillColor: colors_TN_NutsIII_2011(feature.properties.TN2011),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TN_NutsIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de natalidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TN2011.toFixed(2) + ' ‰</p>');
};
//              2001
function colors_TN_NutsIII_2001(d) {
    return  d > 12.2   ? '#004f8a' :
            d > 10.5   ? '#006db2' :
            d > 9.1    ? '#00a6e2' :
            d > 7.9    ? '#5ac5f3' :
                         '#d3edfc';
};
function style_TN_NutsIII_2001(feature) {
    return {
        fillColor: colors_TN_NutsIII_2001(feature.properties.TN2001),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TN_NutsIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de natalidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TN2001.toFixed(2) + ' ‰</p>');
};

//      1.3. Índice sintético de fecundidade (2001, 2011, 2019)
//          Munícipio
//              2019
function colors_ISF_CONC_2019(d) {
    return  d > 1.46   ? '#004f8a' :
            d > 1.29   ? '#006db2' :
            d > 1.16   ? '#00a6e2' :
            d > 0.96   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_ISF_CONC_2019(feature) {
    return {
        fillColor: colors_ISF_CONC_2019(feature.properties.ISF2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISF_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice sintético de fecundidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ISF2019.toFixed(2) + ' Indivíduos</p>');
};
//              2011
function colors_ISF_CONC_2011(d) {
    return  d > 1.43   ? '#004f8a' :
            d > 1.29   ? '#006db2' :
            d > 1.19   ? '#00a6e2' :
            d > 1.07   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_ISF_CONC_2011(feature) {
    return {
        fillColor: colors_ISF_CONC_2011(feature.properties.ISF2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISF_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice sintético de fecundidade</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ISF2011.toFixed(2) + ' Indivíduos</p>');
};
//              2001
function colors_ISF_CONC_2001(d) {
    return  d > 1.46   ? '#004f8a' :
            d > 1.29   ? '#006db2' :
            d > 1.16   ? '#00a6e2' :
            d > 0.96   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_ISF_CONC_2001(feature) {
    return {
        fillColor: colors_ISF_CONC_2001(feature.properties.ISF2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISF_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice sintético de fecundidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.ISF2001.toFixed(2) + ' Indivíduos</p>');
};
//          Nuts III
//              2019
function colors_ISF_NutsIII_2019(d) {
    return  d > 1.38   ? '#004f8a' :
            d > 1.30   ? '#006db2' :
            d > 1.18   ? '#00a6e2' :
            d > 1.13    ? '#5ac5f3' :
                         '#d3edfc';
};
function style_ISF_NutsIII_2019(feature) {
    return {
        fillColor: colors_ISF_NutsIII_2019(feature.properties.ISF2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISF_NutsIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice sintético de fecundidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ISF2019.toFixed(2) + ' Indivíduos</p>');
};
//              2011
function colors_ISF_NutsIII_2011(d) {
    return  d > 1.40   ? '#004f8a' :
            d > 1.28   ? '#006db2' :
            d > 1.22   ? '#00a6e2' :
            d > 1.17    ? '#5ac5f3' :
                         '#d3edfc';
};
function style_ISF_NutsIII_2011(feature) {
    return {
        fillColor: colors_ISF_NutsIII_2011(feature.properties.ISF2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISF_NutsIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice sintético de fecundidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ISF2011.toFixed(2) + ' Indivíduos</p>');
};
//              2001
function colors_ISF_NutsIII_2001(d) {
    return  d > 1.56   ? '#004f8a' :
            d > 1.45   ? '#006db2' :
            d > 1.36   ? '#00a6e2' :
            d > 1.29   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_ISF_NutsIII_2001(feature) {
    return {
        fillColor: colors_ISF_NutsIII_2001(feature.properties.ISF2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISF_NutsIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice sintético de fecundidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ISF2001.toFixed(2) + ' Indivíduos</p>');
};
//      1.4. Taxa de fecundidade (2001, 2011, 2019)
//          Municipio
//              2019
function colors_TF_CONC_2019(d) {
    return  d > 38.3   ? '#004f8a' :
    d > 34.3   ? '#006db2' :
    d > 30.9   ? '#00a6e2' :
    d > 26.1   ? '#5ac5f3' :
                 '#d3edfc';
};
function style_TF_CONC_2019(feature) {
    return {
        fillColor: colors_TF_CONC_2019(feature.properties.TFecGera_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TF_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de fecundidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TFecGera_2.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TF_CONC_2011(d) {
    return  d > 40.6   ? '#004f8a' :
            d > 35.8   ? '#006db2' :
            d > 32.7   ? '#00a6e2' :
            d > 29.0   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_TF_CONC_2011(feature) {
    return {
        fillColor: colors_TF_CONC_2011(feature.properties.TFecGera_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TF_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de fecundidade</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TFecGera_1.toFixed(2) + ' ‰</p>');
};
//              2001
function colors_TF_CONC_2001(d) {
    return  d > 46.1   ? '#004f8a' :
    d > 42.2   ? '#006db2' :
    d > 38.8   ? '#00a6e2' :
    d > 34.6   ? '#5ac5f3' :
                 '#d3edfc';
};
function style_TF_CONC_2001(feature) {
    return {
        fillColor: colors_TF_CONC_2001(feature.properties.TFecGeral2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TF_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de fecundidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TFecGeral2.toFixed(2) + ' ‰</p>');
};

//          Nuts III
//              2019
function colors_TF_NutsIII_2019(d) {
    return  d > 36.8   ? '#004f8a' :
    d > 34.9   ? '#006db2' :
    d > 31.7   ? '#00a6e2' :
    d > 30.6   ? '#5ac5f3' :
                 '#d3edfc';
};
function style_TF_NutsIII_2019(feature) {
    return {
        fillColor: colors_TF_NutsIII_2019(feature.properties.TFecGera_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TF_NutsIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de fecundidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TFecGera_2.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TF_NutsIII_2011(d) {
    return  d > 44.2   ? '#004f8a' :
            d > 41.8   ? '#006db2' :
            d > 38.9   ? '#00a6e2' :
            d > 36.1   ? '#5ac5f3' :
                         '#d3edfc';
};
function style_TF_NutsIII_2011(feature) {
    return {
        fillColor: colors_TF_NutsIII_2011(feature.properties.TFecGera_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TF_NutsIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de fecundidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TFecGera_1.toFixed(2) + ' ‰</p>');
};
//              2001
function colors_TF_NutsIII_2001(d) {
    return  d > 44.2   ? '#004f8a' :
    d > 41.8   ? '#006db2' :
    d > 38.9   ? '#00a6e2' :
    d > 36.1   ? '#5ac5f3' :
                 '#d3edfc';
};
function style_TF_NutsIII_2001(feature) {
    return {
        fillColor: colors_TF_NutsIII_2001(feature.properties.TFecGeral2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TF_NutsIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de fecundidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TFecGeral2.toFixed(2) + ' ‰</p>');
};

//  2. Óbitos
//      2.1. Óbitos totais (1960, 2001, 2011, 2019)
//          Municipio
//              2019
function colors_OT_CONC_2019(d) {
    return  d > 476   ? '#980043' :
            d > 233   ? '#dd1c77' :
            d > 142   ? '#df65b0' :
            d > 90    ? '#d7b5d8' :
                        '#f1eef6';
};

function style_OT_CONC_2019(feature) {
    return {
        fillColor: colors_OT_CONC_2019(feature.properties.ObitosTo_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_OT_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Óbitos totais</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ObitosTo_1.toFixed(2) + '</p>');
};
//              2011
function colors_OT_CONC_2011(d) {
    return  d > 463   ? '#980043' :
            d > 228   ? '#dd1c77' :
            d > 143   ? '#df65b0' :
            d > 93    ? '#d7b5d8' :
                        '#f1eef6';
};
function style_OT_CONC_2011(feature) {
    return {
        fillColor: colors_OT_CONC_2011(feature.properties.ObitosTo_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_OT_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Óbitos totais</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ObitosTo_2.toFixed(2) + '</p>');
};
//              2001
function colors_OT_CONC_2001(d) {
    return  d > 458   ? '#980043' :
            d > 232   ? '#dd1c77' :
            d > 154   ? '#df65b0' :
            d > 99    ? '#d7b5d8' :
                        '#f1eef6';
};
function style_OT_CONC_2001(feature) {
    return {
        fillColor: colors_OT_CONC_2001(feature.properties.ObitosTo_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_OT_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Óbitos totais</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ObitosTo_3.toFixed(2) + '‰</p>');
};
//          Nuts III
//              2019
function colors_OT_NutsIII_2019(d) {
    return  d > 3721   ? '#980043' :
            d > 3280   ? '#dd1c77' :
            d > 2679   ? '#df65b0' :
            d > 1904   ? '#d7b5d8' :
                         '#f1eef6';
};
function style_OT_NutsIII_2019(feature) {
    return {
        fillColor: colors_OT_NutsIII_2019(feature.properties.ObitosTo_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_OT_NutsIII_2019(feature, layer){
    layer.bindPopup('<h4>Óbitos totais</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ObitosTo_1.toFixed(2) + '</p>');
};
function colors_OT_NutsIII_2011(d) {
    return  d > 3483   ? '#980043' :
            d > 3012   ? '#dd1c77' :
            d > 2481   ? '#df65b0' :
            d > 1888   ? '#d7b5d8' :
                         '#f1eef6';
};
function style_OT_NutsIII_2011(feature) {
    return {
        fillColor: colors_OT_NutsIII_2011(feature.properties.ObitosTo_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_OT_NutsIII_2011(feature, layer){
    layer.bindPopup('<h4>Óbitos totais</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ObitosTo_2.toFixed(2) + '</p>');
};
//              2011
function colors_OT_NutsIII_2001(d) {
    return  d > 3500   ? '#980043' :
            d > 3104   ? '#dd1c77' :
            d > 2765   ? '#df65b0' :
            d > 1993   ? '#d7b5d8' :
                         '#f1eef6';
};
function style_OT_NutsIII_2001(feature) {
    return {
        fillColor: colors_OT_NutsIII_2001(feature.properties.ObitosTo_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_OT_NutsIII_2001(feature, layer){
    layer.bindPopup('<h4>Óbitos totais</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.ObitosTo_3.toFixed(2) + '</p>');
};
//      2.2. Óbitos < 1 ano (1960, 2001, 2011, 2019)
//          Municipio
//              2019
function colors_O1_CONC_2019(d) {
    return  d > 4   ? '#980043' :
            d > 3   ? '#dd1c77' :
            d > 2   ? '#df65b0' :
            d > 1   ? '#d7b5d8' :
                      '#f1eef6';
};
function style_O1_CONC_2019(feature) {
    return {
        fillColor: colors_O1_CONC_2019(feature.properties.Obitos_1_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_O1_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Óbitos <1 ano</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Obitos_1_3.toFixed(2) + '</p>');
};
//              2011
function colors_O1_CONC_2011(d) {
    return  d > 4   ? '#980043' :
            d > 3   ? '#dd1c77' :
            d > 2   ? '#df65b0' :
            d > 1   ? '#d7b5d8' :
                      '#f1eef6';
};
function style_O1_CONC_2011(feature) {
    return {
        fillColor: colors_O1_CONC_2011(feature.properties.Obitos_1_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_O1_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Óbitos <1 ano</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Obitos_1_2.toFixed(2) + '</p>');
};
//              2001
function colors_O1_CONC_2001(d) {
    return  d > 5   ? '#980043' :
            d > 3   ? '#dd1c77' :
            d > 2   ? '#df65b0' :
            d > 1   ? '#d7b5d8' :
                      '#f1eef6';
};
function style_O1_CONC_2001(feature) {
    return {
        fillColor: colors_O1_CONC_2001(feature.properties.Obitos_1_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_O1_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Óbitos <1 ano</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Obitos_1_1.toFixed(2) + '</p>');
};
//          NUTSIII
//              2019
function colors_O1_NUTSIII_2019(d) {
    return  d > 7   ? '#980043' :
            d > 5   ? '#dd1c77' :
            d > 2   ? '#df65b0' :
            d > 1   ? '#d7b5d8' :
                      '#f1eef6';
};
function style_O1_NUTSIII_2019(feature) {
    return {
        fillColor: colors_O1_NUTSIII_2019(feature.properties.Obitos_1_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_O1_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Óbitos <1 ano</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Obitos_1_3.toFixed(2) + '</p>');
};
//              2011
function colors_O1_NUTSIII_2011(d) {
    return  d > 26   ? '#980043' :
            d > 17   ? '#dd1c77' :
            d > 11   ? '#df65b0' :
            d > 5    ? '#d7b5d8' :
                       '#f1eef6';
};
function style_O1_NUTSIII_2011(feature) {
    return {
        fillColor: colors_O1_NUTSIII_2011(feature.properties.Obitos_1_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_O1_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Óbitos <1 ano</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Obitos_1_1.toFixed(1) + '</p>');
};
//              2001
function colors_O1_NUTSIII_2001(d) {
    return  d > 26   ? '#980043' :
            d > 17   ? '#dd1c77' :
            d > 11   ? '#df65b0' :
            d > 5    ? '#d7b5d8' :
                       '#f1eef6';
};
function style_O1_NUTSIII_2001(feature) {
    return {
        fillColor: colors_O1_NUTSIII_2001(feature.properties.Obitos_1_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_O1_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Óbitos <1 ano</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Obitos_1_1.toFixed(2) + '</p>');
};

//      2.3. Taxa de mortalidade (2001, 2011, 2019) [done]
//          Municipio



//              2019
function colors_TM_CONC_2019(d) {
    return  d > 23.3   ? '#980043' :
            d > 17.1   ? '#dd1c77' :
            d > 13.3   ? '#df65b0' :
            d > 9.9    ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TM_CONC_2019(feature) {
    return {
        fillColor: colors_TM_CONC_2019(feature.properties.TM2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TM_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TM2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TM_CONC_2011(d) {
    return  d > 15.4   ? '#980043' :
            d > 13     ? '#dd1c77' :
            d > 10.9   ? '#df65b0' :
            d > 8.8    ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TM_CONC_2011(feature) {
    return {
        fillColor: colors_TM_CONC_2011(feature.properties.TM2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TM_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade</h4> <p>Município: ' + feature.properties.Anos + ' (2018) = ' + feature.properties.TM2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TM_CONC_2001(d) {
    return  d > 15.6   ? '#980043' :
            d > 13.2   ? '#dd1c77' :
            d > 11.5   ? '#df65b0' :
            d > 9.3    ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TM_CONC_2001(feature) {
    return {
        fillColor: colors_TM_CONC_2001(feature.properties.TM2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TM_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TM2001.toFixed(2) + '‰</p>');
};
//          Nuts III
//              2019
function colors_TM_NutsIII_2019(d) {
    return  d > 15.6   ? '#980043' :
            d > 13.4   ? '#dd1c77' :
            d > 12.3   ? '#df65b0' :
            d > 10.1   ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TM_NutsIII_2019(feature) {
    return {
        fillColor: colors_TM_NutsIII_2019(feature.properties.TM2019),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TM_NutsIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TM2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TM_NutsIII_2011(d) {
    return  d > 13.3   ? '#980043' :
            d > 11.7   ? '#dd1c77' :
            d > 10.3   ? '#df65b0' :
            d > 9      ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TM_NutsIII_2011(feature) {
    return {
        fillColor: colors_TM_NutsIII_2011(feature.properties.TM2011),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TM_NutsIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TM2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TM_NutsIII_2001(d) {
    return  d > 13     ? '#980043' :
            d > 12.3   ? '#dd1c77' :
            d > 11.3   ? '#df65b0' :
            d > 9.5    ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TM_NutsIII_2001(feature) {
    return {
        fillColor: colors_TM_NutsIII_2001(feature.properties.TM2001),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TM_NutsIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TM2001.toFixed(2) + '‰</p>');
};


//      2.4. Taxa de mortalidade infantil (2001, 2011, 2019)
//          Município
//              2019
function colors_TMI_CONC_2019(d) {
    return  d > 15.6    ? '#980043' :
            d > 8.8     ? '#dd1c77' :
            d > 4.3     ? '#df65b0' :
            d > 0.9     ? '#d7b5d8' :
                          '#f1eef6';
};
function style_TMI_CONC_2019(feature) {
    return {
        fillColor: colors_TMI_CONC_2019(feature.properties.TMI2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TMI_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade infantil</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TMI2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TMI_CONC_2011(d) {
    return  d > 27.8    ? '#980043' :
            d > 14.5    ? '#dd1c77' :
            d > 7.3     ? '#df65b0' :
            d > 2.2     ? '#d7b5d8' :
                          '#f1eef6';
};
function style_TMI_CONC_2011(feature) {
    return {
        fillColor: colors_TMI_CONC_2011(feature.properties.TMI2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TMI_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade infantil</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TMI2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TMI_CONC_2001(d) {
    return  d > 27.4    ? '#980043' :
            d > 12.8    ? '#dd1c77' :
            d > 6.1     ? '#df65b0' :
            d > 2.0     ? '#d7b5d8' :
                          '#f1eef6';
};
function style_TMI_CONC_2001(feature) {
    return {
        fillColor: colors_TMI_CONC_2001(feature.properties.TMI2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TMI_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade infantil</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TMI2001.toFixed(2) + '‰</p>');
};
//          NutsIII
//              2019
function colors_TMI_NUTSIII_2019(d) {
    return  d > 3.38    ? '#980043' :
            d > 2.84    ? '#dd1c77' :
            d > 1.98    ? '#df65b0' :
            d > 1.70    ? '#d7b5d8' :
                          '#f1eef6';
};
function style_TMI_NUTSIII_2019(feature) {
    return {
        fillColor: colors_TMI_NUTSIII_2019(feature.properties.TMI2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TMI_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade infantil</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TMI2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TMI_NUTSIII_2011(d) {
    return  d > 3.60    ? '#980043' :
            d > 3.00    ? '#dd1c77' :
            d > 2.80    ? '#df65b0' :
            d > 1.70    ? '#d7b5d8' :
                          '#f1eef6';
};
function style_TMI_NUTSIII_2011(feature) {
    return {
        fillColor: colors_TMI_NUTSIII_2011(feature.properties.TMI2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TMI_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade infantil</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TMI2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TMI_NUTSIII_2001(d) {
    return  d > 6.7    ? '#980043' :
            d > 5.1    ? '#dd1c77' :
            d > 5      ? '#df65b0' :
            d > 3      ? '#d7b5d8' :
                         '#f1eef6';
};
function style_TMI_NUTSIII_2001(feature) {
    return {
        fillColor: colors_TMI_NUTSIII_2001(feature.properties.TMI2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TMI_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de mortalidade infantil</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TMI2001.toFixed(2) + '‰</p>');
};



//  3. Evolução da população
//      3.1. Crescimento natural (2001, 2011, 2019)
//          Municipio
//              2019
function colors_CN_CONC_2019(d) {
    return  d > -0    ? '#feedde' :
            d > -59   ? '#bdd7e7' :
            d > -87   ? '#6baed6' :
            d > -140  ? '#3182bd' :
                        '#08519c';
};
function style_CN_CONC_2019(feature) {
    return {
        fillColor: colors_CN_CONC_2019(feature.properties.CN2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CN_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Crescimento Natural</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.CN2019.toFixed(2) + '</p>');
};
//              2011
function colors_CN_CONC_2011(d) {
    return  d > 0     ? '#feedde' :
            d > -36   ? '#bdd7e7' :
            d > -66   ? '#6baed6' :
            d > -101  ? '#3182bd' :
                        '#08519c';
};
function style_CN_CONC_2011(feature) {
    return {
        fillColor: colors_CN_CONC_2011(feature.properties.CN2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CN_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Crescimento Natural</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.CN2011.toFixed(2) + '</p>');
};
//              2001
function colors_CN_CONC_2001(d) {
    return  d > 71    ? '#fdbe85' :
            d > 0     ? '#feedde' :
            d > -47   ? '#bdd7e7' :
            d > -82   ? '#6baed6' :
                        '#3182bd';
};
function style_CN_CONC_2001(feature) {
    return {
        fillColor: colors_CN_CONC_2001(feature.properties.CN2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CN_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Crescimento Natural</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.CN2001.toFixed(2) + '</p>');
};
//          NUTSIII
//              2019
function colors_CN_NUTSIII_2019(d) {
    return  d > 0       ? '#feedde' :
            d > -922    ? '#bdd7e7' :
            d > -1206   ? '#6baed6' :
            d > -1580   ? '#3182bd' :
                          '#08519c';
};
function style_CN_NUTSIII_2019(feature) {
    return {
        fillColor: colors_CN_NUTSIII_2019(feature.properties.CN2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CN_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Crescimento Natural</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.CN2019.toFixed(2) + '</p>');
};
//              2011
function colors_CN_NUTSIII_2011(d) {
    return  d > 0     ? '#feedde' :
            d > -466  ? '#bdd7e7' :
            d > -820  ? '#6baed6' :
            d > -1010 ? '#3182bd' :
                        '#08519c';
};
function style_CN_NUTSIII_2011(feature) {
    return {
        fillColor: colors_CN_NUTSIII_2011(feature.properties.CN2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CN_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Crescimento Natural</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.CN2001.toFixed(1) + '</p>');
};
//              2001
function colors_CN_NUTSIII_2001(d) {
    return  d > 521    ? '#fdbe85' :
            d > 0      ? '#feedde' :
            d > -609   ? '#bdd7e7' :
            d > -939   ? '#6baed6' :
                         '#3182bd';
};
function style_CN_NUTSIII_2001(feature) {
    return {
        fillColor: colors_CN_NUTSIII_2001(feature.properties.CN2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CN_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Crescimento Natural</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.CN2001.toFixed(2) + '</p>');
};

//      3.2. Taxa de crescimento natural (2001, 2011, 2019)
//          CONC
//              2019
function colors_TCN_CONC_2019(d) {
    return  d > 0    ?  '#e1161a' :
            d > -3.1 ?  '#afd2e6' :
            d > -7.2 ?  '#3b8cc4' :
                        '#1a3262';
};
function style_TCN_CONC_2019(feature) {
    return {
        fillColor: colors_TCN_CONC_2019(feature.properties.TCN2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCN_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento natural</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TCN2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TCN_CONC_2011(d) {
    return  d > 0     ?  '#e1161a' :
            d > -4.7  ?  '#afd2e6' :
            d > -8.4  ?  '#3b8cc4' :
                        '#1a3262';
};
function style_TCN_CONC_2011(feature) {
    return {
        fillColor: colors_TCN_CONC_2011(feature.properties.TCN2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCN_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento natural</h4> <p>Município:: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TCN2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TCN_CONC_2001(d) {
    return  d > 0     ?  '#e1161a' :
            d > -6.8  ?  '#afd2e6' :
            d > -10  ?  '#3b8cc4' :
                         '#1a3262';
};
function style_TCN_CONC_2001(feature) {
    return {
        fillColor: colors_TCN_CONC_2001(feature.properties.TCN2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCN_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento natural</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TCN2001.toFixed(2) + '‰</p>');
};
//          NutsIII
//              2019
function colors_TCN_NUTSIII_2019(d) {
    return  d > 0    ?  '#e1161a' :
            d > -5   ?  '#afd2e6' :
            d > -10  ?  '#3b8cc4' :
                        '#1a3262';
};
function style_TCN_NUTSIII_2019(feature) {
    return {
        fillColor: colors_TCN_NUTSIII_2019(feature.properties.TCN2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCN_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento natural</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TCN2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TCN_NUTSIII_2011(d) {
    return  d > 0     ?  '#e1161a' :
            d > -3.4  ?  '#afd2e6' :
            d > -5.3  ?  '#3b8cc4' :
                         '#1a3262';
};
function style_TCN_NUTSIII_2011(feature) {
    return {
        fillColor: colors_TCN_NUTSIII_2011(feature.properties.TCN2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCN_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento natural</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TCN2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TCN_NUTSIII_2001(d) {
    return  d > 0     ?  '#e1161a' :
            d > -2.4  ?  '#afd2e6' :
            d > -4.8  ?  '#3b8cc4' :
                         '#1a3262';
};
function style_TCN_NUTSIII_2001(feature) {
    return {
        fillColor: colors_TCN_NUTSIII_2001(feature.properties.TCN2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCN_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento natural</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TCN2001.toFixed(2) + '‰</p>');
};

//      3.3. Saldo migratório (2001, 2011, 2019)
//          Municipio
//              2019
function colors_SM_CONC_2019(d) {
    return  d > 179  ? '#e6550d' :
            d > 68   ? '#fd8d3c' :
            d > 37   ? '#fdbe85' :
            d > 0    ? '#feedde' :
                       '#bdd7e7';
};
function style_SM_CONC_2019(feature) {
    return {
        fillColor: colors_SM_CONC_2019(feature.properties.SM2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_SM_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Saldo migratório</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.SM2019.toFixed(2) + '</p>');
};
//              2011
function colors_SM_CONC_2011(d) {
    return  d > 29    ? '#fdbe85' :
            d > 0     ? '#feedde' :
            d > -40   ? '#bdd7e7' :
            d > -104  ? '#6baed6' :
                        '#3182bd';
};
function style_SM_CONC_2011(feature) {
    return {
        fillColor: colors_SM_CONC_2011(feature.properties.SM2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_SM_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Saldo migratório</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.SM2011.toFixed(2) + '</p>');
};
//              2001
function colors_SM_CONC_2001(d) {
    return  d > 231  ? '#e6550d' :
            d > 69   ? '#fd8d3c' :
            d > 25   ? '#fdbe85' :
            d > 0    ? '#feedde' :
                       '#bdd7e7';
};
function style_SM_CONC_2001(feature) {
    return {
        fillColor: colors_SM_CONC_2001(feature.properties.SM2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_SM_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Saldo migratório</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.SM2001.toFixed(2) + '</p>');
};
//          NUTSIII
//              2019
function colors_SM_NUTSIII_2019(d) {
    return  d > 1851  ? '#e6550d' :
            d > 988   ? '#fd8d3c' :
            d > 676   ? '#fdbe85' :
            d > 0     ? '#feedde' :
                        '#bdd7e7';
};
function style_SM_NUTSIII_2019(feature) {
    return {
        fillColor: colors_SM_NUTSIII_2019(feature.properties.SM2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_SM_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Saldo migratório</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.SM2019.toFixed(2) + '</p>');
};
//              2011
function colors_SM_NUTSIII_2011(d) {
    return  d > 0       ? '#feedde' :
            d > -480    ? '#bdd7e7' :
            d > -670    ? '#6baed6' :
            d > -1530   ? '#3182bd' :
                          '#08519c';
};
function style_SM_NUTSIII_2011(feature) {
    return {
        fillColor: colors_SM_NUTSIII_2011(feature.properties.SM2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_SM_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Saldo migratório</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.SM2011.toFixed(1) + '</p>');
};
//              2001
function colors_SM_NUTSIII_2001(d) {
    return  d > 2135  ? '#e6550d' :
            d > 1409  ? '#fd8d3c' :
            d > 576   ? '#fdbe85' :
            d > 0     ? '#feedde' :
                        '#bdd7e7';
};
function style_SM_NUTSIII_2001(feature) {
    return {
        fillColor: colors_SM_NUTSIII_2001(feature.properties.SM2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_SM_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Saldo migratório</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.SM2001.toFixed(2) + '</p>');
};


//      3.4. Taxa de crescimento migratório (2001, 2011, 2019)
//          Município
//              2019
function colors_TCM_CONC_2019(d) {
    return  d > 8.96    ?   '#a63603' :
            d > 6.40    ?   '#e6550d' :
            d > 4.63    ?   '#fd8d3c' :
            d > 2.92    ?   '#fdbe85' :
            d > 0       ?   '#feedde' :
                            '#bdd7e7';
};
function style_TCM_CONC_2019(feature) {
    return {
        fillColor: colors_TCM_CONC_2019(feature.properties.TCM2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCM_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento migratório</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TCM2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TCM_CONC_2011(d) {
    return  d > 2.67    ?   '#fdbe85' :
            d > 0       ?   '#feedde' :
            d > -2.01   ?   '#bdd7e7' :
            d > -3.61   ?   '#6baed6' :
            d > -6.33   ?   '#3182bd' :
                            '#08519c';
};
function style_TCM_CONC_2011(feature) {//mudar cores
    return {
        fillColor: colors_TCM_CONC_2011(feature.properties.TCM2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCM_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento migratório</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TCM2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TCM_CONC_2001(d) {
    return  d > 10.22   ?   '#a63603' :
            d > 5.6     ?   '#e6550d' :
            d > 3.61    ?   '#fd8d3c' :
            d > 1.54    ?   '#fdbe85' :
            d > 0       ?   '#feedde' :
                            '#bdd7e7';
};
function style_TCM_CONC_2001(feature) {
    return {
        fillColor: colors_TCM_CONC_2001(feature.properties.TCM2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCM_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento migratório</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TCM2001.toFixed(2) + '‰</p>');
};
//          NUTS III
//              2019
function colors_TCM_NUTSIII_2019(d) {
    return  d > 8   ?   '#a63603' :
            d > 6   ?   '#e6550d' :
            d > 4   ?   '#fd8d3c' :
            d > 2   ?   '#fdbe85' :
            d > 0   ?   '#feedde' :
                        '#bdd7e7';
};
function style_TCM_NUTSIII_2019(feature) {
    return {
        fillColor: colors_TCM_NUTSIII_2019(feature.properties.TCM2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCM_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento migratório</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TCM2019.toFixed(2) + '‰</p>');
};
//              2011
function colors_TCM_NUTSIII_2011(d) {//mudar cores
    return  d > 0       ?   '#feedde' :
            d > -0.77   ?   '#eff3ff' :
            d > -2.27   ?   '#bdd7e7' :
            d > 2.76    ?   '#6baed6' :
            d > -4.4    ?   '#3182bd' :
                            '#08519c';
};
function style_TCM_NUTSIII_2011(feature) {
    return {
        fillColor: colors_TCM_NUTSIII_2011(feature.properties.TCM2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCM_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento migratório</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TCM2011.toFixed(2) + '‰</p>');
};
//              2001
function colors_TCM_NUTSIII_2001(d) {
    return  d > 7.84    ?   '#a63603' :
            d > 5.62    ?   '#e6550d' :
            d > 3.7     ?   '#fd8d3c' :
            d > 2.64    ?   '#fdbe85' :
            d > 0       ?   '#feedde' :
                            '#bdd7e7';
};
function style_TCM_NUTSIII_2001(feature) {
    return {
        fillColor: colors_TCM_NUTSIII_2001(feature.properties.TCM2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TCM_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento migratório</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TCM2001.toFixed(2) + '‰</p>');
};

//      3.5. Crescimento efetivo (2001, 2011, 2019)
//          Municipio
//              2019
function colors_CE_CONC_2019(d) {
    return  d > 55    ? '#004f8a' :
            d > 5     ? '#006db2' :
            d > -36   ? '#00a6e2' :
            d > -85   ? '#5ac5f3' :
                        '#d3edfc';
};
function style_CE_CONC_2019(feature) {
    return {
        fillColor: colors_CE_CONC_2019(feature.properties.CE2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CE_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Crescimento efetivo</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.CE2019.toFixed(2) + '</p>');
};
//              2011
function colors_CE_CONC_2011(d) {
    return  d > 6      ? '#004f8a' :
            d > 58     ? '#006db2' :
            d > -106   ? '#00a6e2' :
            d > -188   ? '#5ac5f3' :
                        '#d3edfc';
};
function style_CE_CONC_2011(feature) {
    return {
        fillColor: colors_CE_CONC_2011(feature.properties.CE2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CE_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Crescimento efetivo</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.CE2011.toFixed(2) + '</p>');
};
//              2001
function colors_CE_CONC_2001(d) {
    return  d > 306   ? '#004f8a' :
            d > 63    ? '#006db2' :
            d > -19   ? '#00a6e2' :
            d > -63   ? '#5ac5f3' :
                        '#d3edfc';
};
function style_CE_CONC_2001(feature) {
    return {
        fillColor: colors_CE_CONC_2001(feature.properties.CE2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CE_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Crescimento efetivo</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.CE2001.toFixed(2) + '</p>');
};
//          NUTSIII
//              2019
function colors_CE_NUTSIII_2019(d) {
    return  d > 550   ? '#004f8a' :
            d > -92   ? '#006db2' :
            d > -398   ? '#00a6e2' :
            d > -592   ? '#5ac5f3' :
                        '#d3edfc';
};
function style_CE_NUTSIII_2019(feature) {
    return {
        fillColor: colors_CE_NUTSIII_2019(feature.properties.CE2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CE_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Crescimento efetivo</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.CE2019.toFixed(2) + '</p>');
};
//              2011
function colors_CE_NUTSIII_2011(d) {
    return  d > 3530   ? '#004f8a' :
            d > 1549   ? '#006db2' :
            d > 184   ? '#00a6e2' :
            d > -441   ? '#5ac5f3' :
                        '#d3edfc';
};
function style_CE_NUTSIII_2011(feature) {
    return {
        fillColor: colors_CE_NUTSIII_2011(feature.properties.CE2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CE_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Crescimento efetivo</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.CE2001.toFixed(1) + '</p>');
};
//              2001
function colors_CE_NUTSIII_2001(d) {
    return  d > 3530   ? '#004f8a' :
            d > 1549   ? '#006db2' :
            d > 184   ? '#00a6e2' :
            d > -441   ? '#5ac5f3' :
                        '#d3edfc';
};
function style_CE_NUTSIII_2001(feature) {
    return {
        fillColor: colors_CE_NUTSIII_2001(feature.properties.CE2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_CE_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Crescimento efetivo</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.CE2001.toFixed(2) + '</p>');
};

//      3.6. Taxa de crescimento efetivo (2001, 2011, 2019) [done]
//          Municipio
function colors_TCE_CONC(d) {
    return d > 4.7      ? '#e34a33' :
           d > 0        ? '#fdbb84' :
           d > -11.3    ? '#7fcdbb' :
                          '#2c7fb8';
};
//              2019
function style_TCE_CONC_2019(feature) {
    return {
        fillColor: colors_TCE_CONC(feature.properties.TCE2019),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TCE_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento efetivo</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TCE2019.toFixed(2) + '%</p>');
};
//              2011
function style_TCE_CONC_2011(feature) {
    return {
        fillColor: colors_TCE_CONC(feature.properties.TCE2011),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TCE_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento efetivo</h4> <p>Município: ' + feature.properties.Anos + ' (20191 = ' + feature.properties.TCE2011.toFixed(2) + '%</p>');
};
//              2001
function style_TCE_CONC_2001(feature) {
    return {
        fillColor: colors_TCE_CONC(feature.properties.TCE2001),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TCE_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento efetivo</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TCE2001.toFixed(2) + '%</p>');
};
//          NUTS III
function colors_TCE_NUTSIII_2019(d) {
    return d > 5    ?   '#e34a33' :
           d > 0    ?   '#fdbb84' :
           d > -5   ?   '#7fcdbb' :
                        '#2c7fb8';
};
//              2019
function style_TCE_NUTSIII_2019(feature) {
    return {
        fillColor: colors_TCE_NUTSIII_2019(feature.properties.TCE2019),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TCE_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento efetivo</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TCE2019.toFixed(2) + '%</p>');
};
//              2011
function style_TCE_NUTSIII_2011(feature) {
    return {
        fillColor: colors_TCE_NUTSIII_2019(feature.properties.TCE2011),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TCE_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento efetivo</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TCE2011.toFixed(2) + '%</p>');
};
//              2001
function style_TCE_NUTSIII_2001(feature) {
    return {
        fillColor: colors_TCE_NUTSIII_2019(feature.properties.TCE2001),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_TCE_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de crescimento efetivo</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TCE2001.toFixed(2) + '%</p>');
};


//  4. População residente
//      4.1. População residente (2001, 2011, 2019)
//          Municipio
//              2019
function colors_PR_CONC_2019(d) {
    return  d > 45076   ? '#bd0026' :
            d > 20945   ? '#f03b20' :
            d > 11374   ? '#fd8d3c' :
            d > 6679    ? '#fecc5c' :
                          '#feffb1';
};
function style_PR_CONC_2019(feature) {
    return {
        fillColor: colors_PR_CONC_2019(feature.properties.Popresid_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PR_CONC_2019(feature, layer){
    layer.bindPopup('<h4>População residente</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Popresid_2 + ' hab.</p>');
};
//              2011
function colors_PR_CONC_2011(d) {
    return  d > 47729   ? '#bd0026' :
            d > 20522   ? '#f03b20' :
            d > 10828   ? '#fd8d3c' :
            d > 6049    ? '#fecc5c' :
                          '#feffb1';
};
function style_PR_CONC_2011(feature) {
    return {
        fillColor: colors_PR_CONC_2011(feature.properties.Popresid_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PR_CONC_2011(feature, layer){
    layer.bindPopup('<h4>População residente</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Popresid_1 + ' hab.</p>');
};
//              2001
function colors_PR_CONC_2001(d) {
    return  d > 45076   ? '#bd0026' :
            d > 20945   ? '#f03b20' :
            d > 11374   ? '#fd8d3c' :
            d > 6679    ? '#fecc5c' :
                          '#feffb1';
};
function style_PR_CONC_2001(feature) {
    return {
        fillColor: colors_PR_CONC_2001(feature.properties.Popresiden),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PR_CONC_2001(feature, layer){
    layer.bindPopup('<h4>População residente</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Popresiden + ' hab.</p>');
};
//          NUTSIII
//              2019
function colors_PR_NUTSIII_2019(d) {
    return  d > 400937   ? '#bd0026' :
            d > 275809   ? '#f03b20' :
            d > 242544   ? '#fd8d3c' :
            d > 126647   ? '#fecc5c' :
                           '#feffb1';
};
function style_PR_NUTSIII_2019(feature) {
    return {
        fillColor: colors_PR_NUTSIII_2019(feature.properties.Popresid_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PR_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>População residente</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Popresid_2 + ' hab.</p>');
};
//              2011
function colors_PR_NUTSIII_2011(d) {
    return  d > 400937   ? '#bd0026' :
            d > 275809   ? '#f03b20' :
            d > 242544   ? '#fd8d3c' :
            d > 126647   ? '#fecc5c' :
                           '#feffb1';
};
function style_PR_NUTSIII_2011(feature) {
    return {
        fillColor: colors_PR_NUTSIII_2011(feature.properties.Popresiden),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PR_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>População residente</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Popresiden + ' hab.</p>');
};
//              2001
function colors_PR_NUTSIII_2001(d) {
    return  d > 400937   ? '#bd0026' :
            d > 275809   ? '#f03b20' :
            d > 242544   ? '#fd8d3c' :
            d > 126647   ? '#fecc5c' :
                           '#feffb1';
};
function style_PR_NUTSIII_2001(feature) {
    return {
        fillColor: colors_PR_NUTSIII_2001(feature.properties.Popresiden),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PR_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>População residente</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Popresiden + ' hab.</p>');
};

//      4.2. Densidade populacional (2001, 2011, 2019) [done]
//          Municipio
//              2019
function colors_DP_CONC_2019(d) {
    return d > 142  ? '#bd0026' :
           d > 67   ? '#f03b20' :
           d > 44   ? '#fd8d3c' :
           d > 28   ? '#fecc5c' :
                      '#feffb1';
};
function style_DP_CONC_2019(feature) {
    return {
        fillColor: colors_DP_CONC_2019(feature.properties.DP2019),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_DP_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Densidade populacional</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.DP2019 + ' hab./km<sup>2</sup></p>');
};
//              2011
function colors_DP_CONC_2011(d) {
return  d > 249.1    ?   '#bd0026' :
        d > 103.8    ?   '#f03b20' :
        d > 48.1     ?   '#fd8d3c' :
        d > 21       ?   '#fecc5c' :
                         '#feffb1';
};
function style_DP_CONC_2011(feature) {
    return {
        fillColor: colors_DP_CONC_2011(feature.properties.DP2011),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_DP_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Densidade populacional</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.DP2011.toFixed(2) + ' hab./km<sup>2</sup></p>');
};
//              2001
function colors_DP_CONC_2001(d) {
    return  d > 226      ?   '#bd0026' :
            d > 103.5    ?   '#f03b20' :
            d > 51.7     ?   '#fd8d3c' :
            d > 22.5     ?   '#fecc5c' :
                             '#feffb1';
};
function style_DP_CONC_2001(feature) {
    return {
        fillColor: colors_DP_CONC_2001(feature.properties.DP2001),
        weight: 0.5,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_DP_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Densidade populacional</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.DP2001.toFixed(2) + ' hab./km<sup>2</sup></p>');
};

//          Nuts III
//              2019
function colors_DP_NutsIII_2019(d) {
    return d > 222.3    ?   '#bd0026' :
           d > 100.9    ?   '#f03b20' :
           d > 54       ?   '#fd8d3c' :
           d > 19.9     ?   '#fecc5c' :
                            '#feffb1';
};
function style_DP_NUTSIII_2019(feature) {
    return {
        fillColor: colors_DP_NutsIII_2019(feature.properties.DP2019),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_DP_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Densidade populacional</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.DP2019.toFixed(2) + ' hab./km<sup>2</sup></p>');
};
//              2011
function colors_DP_NutsIII_2011(d) {
    return d > 236.5    ?   '#bd0026' :
           d > 106.4    ?   '#f03b20' :
           d > 57.9     ?   '#fd8d3c' :
           d > 21.2     ?   '#fecc5c' :
                            '#feffb1';
};
function style_DP_NUTSIII_2011(feature) {
    return {
        fillColor: colors_DP_NutsIII_2011(feature.properties.DP2011),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_DP_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Densidade populacional</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.DP2011.toFixed(2) + ' hab./km<sup>2</sup></p>');
};
//              2001
function colors_DP_NutsIII_2001(d) {
    return d > 236.8    ?   '#bd0026' :
           d > 108.8    ?   '#f03b20' :
           d > 56.4     ?   '#fd8d3c' :
           d > 22.9     ?   '#fecc5c' :
                            '#feffb1';
};
function style_DP_NUTSIII_2001(feature) {
    return {
        fillColor: colors_DP_NutsIII_2001(feature.properties.DP2001),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
}
function popup_DP_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Densidade populacional</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.DP2001.toFixed(2) + ' hab./km<sup>2</sup></p>');
};


//  5. População estrangeira
//      5.1. População estrangeir com estatuto legal (2008, 2011, 2019)
//          Municipio
//              2019
function colors_PEL_CONC_2019(d) {
    return  d > 1495  ? '#bd0026' :
            d > 461   ? '#f03b20' :
            d > 208   ? '#fd8d3c' :
            d > 90    ? '#fecc5d' :
                        '#feffb1';
};

function style_PEL_CONC_2019(feature) {
    return {
        fillColor: colors_PEL_CONC_2019(feature.properties.PopEstra_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PEL_CONC_2019(feature, layer){
    layer.bindPopup('<h4>População estrangeira com estatuto legal</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.PopEstra_2 + ' hab.</p>');
};
//              2011
function colors_PEL_CONC_2011(d) {
    return  d > 1119  ? '#bd0026' :
            d > 395   ? '#f03b20' :
            d > 159   ? '#fd8d3c' :
            d > 78    ? '#fecc5d' :
                        '#feffb1';
};
function style_PEL_CONC_2011(feature) {
    return {
        fillColor: colors_PEL_CONC_2011(feature.properties.PopEstra_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PEL_CONC_2011(feature, layer){
    layer.bindPopup('<h4>População estrangeira com estatuto legal</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.PopEstra_1 + ' hab.</p>');
};
//              2008
function colors_PEL_CONC_2008(d) {
    return  d > 1100  ? '#bd0026' :
            d > 346   ? '#f03b20' :
            d > 129   ? '#fd8d3c' :
            d > 62    ? '#fecc5d' :
                        '#feffb1';
};
function style_PEL_CONC_2008(feature) {
    return {
        fillColor: colors_PEL_CONC_2008(feature.properties.PopEstrang),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PEL_CONC_2008(feature, layer){
    layer.bindPopup('<h4>População estrangeira com estatuto legal</h4> <p>Município: ' + feature.properties.Anos + ' (2008) = ' + feature.properties.PopEstrang + 'hab.</p>');
};
//          NUTSIII
//              2019
function colors_PEL_NUTSIII_2019(d) {
    return  d > 12995  ? '#bd0026' :
            d > 8579   ? '#f03b20' :
            d > 4640   ? '#fd8d3c' :
            d > 2789   ? '#fecc5d' :
                         '#feffb1';
};
function style_PEL_NUTSIII_2019(feature) {
    return {
        fillColor: colors_PEL_NUTSIII_2019(feature.properties.PopEstra_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PEL_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>População estrangeira com estatuto legal</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.PopEstra_2 + ' hab.</p>');
};
//              2011
function colors_PEL_NUTSIII_2011(d) {
    return  d > 10145  ? '#bd0026' :
            d > 5367   ? '#f03b20' :
            d > 2960   ? '#fd8d3c' :
            d > 2207   ? '#fecc5d' :
                         '#feffb1';
};
function style_PEL_NUTSIII_2011(feature) {
    return {
        fillColor: colors_PEL_NUTSIII_2011(feature.properties.PopEstrang),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PEL_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>População estrangeira com estatuto legal</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.PopEstrang + ' hab.</p>');
};
//              2008
function colors_PEL_NUTSIII_2008(d) {
    return  d > 10145  ? '#bd0026' :
            d > 5367   ? '#f03b20' :
            d > 2960   ? '#fd8d3c' :
            d > 2207   ? '#fecc5d' :
                         '#feffb1';
};
function style_PEL_NUTSIII_2008(feature) {
    return {
        fillColor: colors_PEL_NUTSIII_2008(feature.properties.PopEstrang),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_PEL_NUTSIII_2008(feature, layer){
    layer.bindPopup('<h4>População estrangeira com estatuto legal</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2008) = ' + feature.properties.PopEstrang + ' hab.</p>');
};

//  6. Casamentos e divóricos
//      6.1. Taxa de divorcialidade (1960, 2001, 2011, 2019)
//          Municipio
//              2019
function colors_TD_CONC_2019(d) {
    return  d > 2.3   ? '#cc560c' :
            d > 2     ? '#ef821d' :
            d > 1.7   ? '#fdb350' :
            d > 1.3   ? '#ffe19b' :
                        '#feffd1';
};
function style_TD_CONC_2019(feature) {
    return {
        fillColor: colors_TD_CONC_2019(feature.properties.Tdivorci_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TD_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de divorcialidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Tdivorci_3.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TD_CONC_2011(d) {
    return  d > 2.9   ? '#cc560c' :
            d > 2.5   ? '#ef821d' :
            d > 2.1   ? '#fdb350' :
            d > 1.6   ? '#ffe19b' :
                        '#feffd1';
};
function style_TD_CONC_2011(feature) {
    return {
        fillColor: colors_TD_CONC_2011(feature.properties.Tdivorci_2),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TD_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de divorcialidade</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Tdivorci_2.toFixed(2) + ' ‰</p>');
};
//              2001
function colors_TD_CONC_2001(d) {
    return  d > 2.1   ? '#cc560c' :
            d > 1.5   ? '#ef821d' :
            d > 1.1   ? '#fdb350' :
            d > 0.7   ? '#ffe19b' :
                        '#feffd1';
};
function style_TD_CONC_2001(feature) {
    return {
        fillColor: colors_TD_CONC_2001(feature.properties.Tdivorci_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TD_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de divorcialidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Tdivorci_1.toFixed(2) + '‰</p>');
};
//          NUTSIII
//              2019
function colors_TD_NUTSIII_2019(d) {
    return  d > 2     ? '#cc560c' :
            d > 1.9   ? '#ef821d' :
            d > 1.8   ? '#fdb350' :
            d > 1.6   ? '#ffe19b' :
                        '#feffd1';
};
function style_TD_NUTSIII_2019(feature) {
    return {
        fillColor: colors_TD_NUTSIII_2019(feature.properties.Tdivorci_3),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TD_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de divorcialidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.Tdivorci_3.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TD_NUTSIII_2011(d) {
    return  d > 1.9   ? '#cc560c' :
            d > 1.6   ? '#ef821d' :
            d > 1.4   ? '#fdb350' :
            d > 1.2   ? '#ffe19b' :
                        '#feffd1';
};
function style_TD_NUTSIII_2011(feature) {
    return {
        fillColor: colors_TD_NUTSIII_2011(feature.properties.Tdivorci_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TD_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de divorcialidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.Tdivorci_1.toFixed(1) + ' ‰</p>');
};
//              2001
function colors_TD_NUTSIII_2001(d) {
    return  d > 1.9   ? '#cc560c' :
            d > 1.6   ? '#ef821d' :
            d > 1.4   ? '#fdb350' :
            d > 1.2   ? '#ffe19b' :
                        '#feffd1';
};
function style_TD_NUTSIII_2001(feature) {
    return {
        fillColor: colors_TD_NUTSIII_2001(feature.properties.Tdivorci_1),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TD_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de divorcialidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.Tdivorci_1.toFixed(2) + ' ‰</p>');
};

//      6.2. Taxa de nupcialidade (2001, 2011, 2019)
//          Municipio
//              2019
function colors_TNUP_CONC_2019(d) {
    return  d > 4.3   ? '#cc560c' :
            d > 3.3   ? '#ef821d' :
            d > 2.7   ? '#fdb350' :
            d > 2     ? '#ffe19b' :
                        '#feffd1';
};
function style_TNUP_CONC_2019(feature) {
    return {
        fillColor: colors_TNUP_CONC_2019(feature.properties.TNupc2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TNUP_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de nupcialidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TNupc2019.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TNUP_CONC_2011(d) {
    return  d > 4.2   ? '#cc560c' :
            d > 3.6   ? '#ef821d' :
            d > 3     ? '#fdb350' :
            d > 2.4   ? '#ffe19b' :
                        '#feffd1';
};
function style_TNUP_CONC_2011(feature) {
    return {
        fillColor: colors_TNUP_CONC_2011(feature.properties.TNupc2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TNUP_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de nupcialidade</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TNupc2011.toFixed(2) + ' ‰</p>');
};
//              2001
function colors_TNUP_CONC_2001(d) {
    return  d > 6.5   ? '#cc560c' :
            d > 5.7   ? '#ef821d' :
            d > 5.1   ? '#fdb350' :
            d > 4.3   ? '#ffe19b' :
                        '#feffd1';
};
function style_TNUP_CONC_2001(feature) {
    return {
        fillColor: colors_TNUP_CONC_2001(feature.properties.TNupc2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TNUP_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de nupcialidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TNupc2001.toFixed(2) + '‰</p>');
};
//          NUTSIII
//              2019
function colors_TNUP_NUTSIII_2019(d) {
    return  d > 3.6   ? '#cc560c' :
            d > 3.1   ? '#ef821d' :
            d > 2.7   ? '#fdb350' :
            d > 2.6   ? '#ffe19b' :
                        '#feffd1';
};
function style_TNUP_NUTSIII_2019(feature) {
    return {
        fillColor: colors_TNUP_NUTSIII_2019(feature.properties.TNupc2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TNUP_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Taxa de nupcialidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.TNupc2019.toFixed(2) + ' ‰</p>');
};
//              2011
function colors_TNUP_NUTSIII_2011(d) {
    return  d > 6.6   ? '#cc560c' :
            d > 6     ? '#ef821d' :
            d > 5.3   ? '#fdb350' :
            d > 4.7   ? '#ffe19b' :
                        '#feffd1';
};
function style_TNUP_NUTSIII_2011(feature) {
    return {
        fillColor: colors_TNUP_NUTSIII_2011(feature.properties.TNupc2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TNUP_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Taxa de nupcialidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.TNupc2001.toFixed(1) + ' ‰</p>');
};
//              2001
function colors_TNUP_NUTSIII_2001(d) {
    return  d > 6.6   ? '#cc560c' :
            d > 6     ? '#ef821d' :
            d > 5.3   ? '#fdb350' :
            d > 4.7   ? '#ffe19b' :
                        '#feffd1';
};
function style_TNUP_NUTSIII_2001(feature) {
    return {
        fillColor: colors_TNUP_NUTSIII_2001(feature.properties.TNupc2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_TNUP_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Taxa de nupcialidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.TNupc2001.toFixed(2) + ' ‰</p>');
};

//  7. Indicadores de envelhecimento
//      7.1. Índice de envelhecimento (2001, 2011, 2019)
//          Nuts III
//              2019
function colors_IE_CONC_2019(d) {
    return  d > 312.8   ?   '#024823' :
            d > 261.6   ?   '#007038' :
            d > 214.7   ?   '#239b37' :
            d > 172.5   ?   '#a0b939' :
            d > 145     ?   '#c3da82' :
                            '#d6e9cd';
};
function style_IE_CONC_2019(feature) {
    return {
        fillColor: colors_IE_CONC_2019(feature.properties.IE2019),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_IE_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice de envelhecimento</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IE2019.toFixed(2) + '(%)</p>');
};
//              2011
function colors_IE_CONC_2011(d) {
    return  d > 267.9   ?   '#024823' :
            d > 203.2   ?   '#007038' :
            d > 171.7   ?   '#239b37' :
            d > 137     ?   '#a0b939' :
            d > 106.2   ?   '#c3da82' :
                            '#d6e9cd';
};
function style_IE_CONC_2011(feature) {
    return {
        fillColor: colors_IE_CONC_2011(feature.properties.IE2011),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_IE_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice de envelhecimento</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IE2011.toFixed(2) + '(%)</p>');
};
//              2001
function colors_IE_CONC_2001(d) {
    return  d > 212.7   ?   '#024823' :
            d > 168.5   ?   '#007038' :
            d > 140     ?   '#239b37' :
            d > 113.7   ?   '#a0b939' :
            d > 88.9    ?   '#c3da82' :
                            '#d6e9cd';
};
function style_IE_CONC_2001(feature) {
    return {
        fillColor: colors_IE_CONC_2001(feature.properties.IE2011),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_IE_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice de envelhecimento</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IE2001.toFixed(2) + '(%)</p>');
};

//          Nuts III
//              2019
function colors_IE_NutsIII_2019(d) {
    return  d > 255.1   ?   '#024823' :
            d > 221.3   ?   '#007038' :
            d > 214.0   ?   '#239b37' :
            d > 171.7   ?   '#a0b939' :
            d > 145.9   ?   '#c3da82' :
                            '#d6e9cd';
};
function style_IE_NUTSIII_2019(feature) {
    return {
        fillColor: colors_IE_NutsIII_2019(feature.properties.IE2019),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_IE_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice de envelhecimento</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IE2019.toFixed(2) + '(%)</p>');
};
//              2011
function colors_IE_NutsIII_2011(d) {
    return  d > 207.9   ?   '#024823' :
            d > 171.4   ?   '#007038' :
            d > 127.5   ?   '#239b37' :
            d > 127.3   ?   '#a0b939' :
            d > 91.5    ?   '#c3da82' :
                            '#d6e9cd';
};
function style_IE_NUTSIII_2011(feature) {
    return {
        fillColor: colors_IE_NutsIII_2011(feature.properties.IE2011),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_IE_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice de envelhecimento</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IE2011.toFixed(2) + '(%)</p>');
};
//              2001
function colors_IE_NutsIII_2001(d) {
    return  d > 194.1   ?   '#024823' :
            d > 152.6   ?   '#007038' :
            d > 127.6   ?   '#239b37' :
            d > 107.9   ?   '#a0b939' :
            d > 75.1    ?   '#c3da82' :
                            '#d6e9cd';
};
function style_IE_NUTSIII_2001(feature) {
    return {
        fillColor: colors_IE_NutsIII_2001(feature.properties.IE2001),
        weight: 1,
        opacity: 1,
        color: '#000000',
        fillOpacity: 1
    };
};
function popup_IE_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice de envelhecimento</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IE2001.toFixed(2) + '(%)</p>');
};

//      7.2. Índice de longevidade (2001, 2011, 2019)
//          Municipio
//              2019
function colors_IL_CONC_2019(d) {
    return  d > 57.8   ? '#007038' :
            d > 54.4   ? '#239b37' :
            d > 50.9   ? '#a0b939' :
            d > 46.5   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IL_CONC_2019(feature) {
    return {
        fillColor: colors_IL_CONC_2019(feature.properties.ILong2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IL_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice de longevidade</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ILong2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IL_CONC_2011(d) {
    return  d > 55.5   ? '#007038' :
            d > 52.5   ? '#239b37' :
            d > 50.1   ? '#a0b939' :
            d > 46.2   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IL_CONC_2011(feature) {
    return {
        fillColor: colors_IL_CONC_2011(feature.properties.ILong2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IL_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice de longevidade</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ILong2011.toFixed(2) + ' N.º</p>');
};
//              2001
function colors_IL_CONC_2001(d) {
    return  d > 46.6   ? '#007038' :
            d > 44.1   ? '#239b37' :
            d > 42.4   ? '#a0b939' :
            d > 40.5   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IL_CONC_2001(feature) {
    return {
        fillColor: colors_IL_CONC_2001(feature.properties.ILong2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IL_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice de longevidade</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.ILong2001.toFixed(2) + 'N.º</p>');
};
//          NUTSIII
//              2019
function colors_IL_NUTSIII_2019(d) {
    return  d > 55     ? '#007038' :
            d > 52.9   ? '#239b37' :
            d > 49.9   ? '#a0b939' :
            d > 44.8   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IL_NUTSIII_2019(feature) {
    return {
        fillColor: colors_IL_NUTSIII_2019(feature.properties.ILong2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IL_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice de longevidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ILong2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IL_NUTSIII_2011(d) {
    return  d > 44.6   ? '#007038' :
            d > 43.5   ? '#239b37' :
            d > 41.9   ? '#a0b939' :
            d > 40.2   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IL_NUTSIII_2011(feature) {
    return {
        fillColor: colors_IL_NUTSIII_2011(feature.properties.ILong2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IL_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice de longevidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ILong2001.toFixed(1) + ' N.º</p>');
};
//              2001
function colors_IL_NUTSIII_2001(d) {
    return  d > 44.6   ? '#007038' :
            d > 43.5   ? '#239b37' :
            d > 41.9   ? '#a0b939' :
            d > 40.2   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IL_NUTSIII_2001(feature) {
    return {
        fillColor: colors_IL_NUTSIII_2001(feature.properties.ILong2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IL_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice de longevidade</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.ILong2001.toFixed(2) + ' N.º</p>');
};

//      7.3. Índice de dependência de jovens (2001, 2011, 2019)
//          Municipio
//              2019
function colors_IDJ_CONC_2019(d) {
    return  d > 21.2   ? '#007038' :
            d > 19.5   ? '#239b37' :
            d > 17.9   ? '#a0b939' :
            d > 16.2   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDJ_CONC_2019(feature) {
    return {
        fillColor: colors_IDJ_CONC_2019(feature.properties.IDJ2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDJ_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de jovens</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IDJ2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IDJ_CONC_2011(d) {
    return  d > 24     ? '#007038' :
            d > 22.3   ? '#239b37' :
            d > 20.8   ? '#a0b939' :
            d > 19     ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDJ_CONC_2011(feature) {
    return {
        fillColor: colors_IDJ_CONC_2011(feature.properties.IDJ2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDJ_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de jovens</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IDJ2011.toFixed(2) + ' N.º</p>');
};
//              2001
function colors_IDJ_CONC_2001(d) {
    return  d > 26.6   ? '#007038' :
            d > 24.1   ? '#239b37' :
            d > 22.5   ? '#a0b939' :
            d > 20.9   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDJ_CONC_2001(feature) {
    return {
        fillColor: colors_IDJ_CONC_2001(feature.properties.IDJ2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDJ_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de jovens</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IDJ2001.toFixed(2) + 'N.º</p>');
};
//          NUTSIII
//              2019
function colors_IDJ_NUTSIII_2019(d) {
    return  d > 20.7   ? '#007038' :
            d > 19.7   ? '#239b37' :
            d > 18.8   ? '#a0b939' :
            d > 17.6   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDJ_NUTSIII_2019(feature) {
    return {
        fillColor: colors_IDJ_NUTSIII_2019(feature.properties.IDJ2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDJ_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de jovens</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IDJ2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IDJ_NUTSIII_2011(d) {
    return  d > 28.2   ? '#007038' :
            d > 24.2   ? '#239b37' :
            d > 22.3   ? '#a0b939' :
            d > 21.9   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDJ_NUTSIII_2011(feature) {
    return {
        fillColor: colors_IDJ_NUTSIII_2011(feature.properties.IDJ2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDJ_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de jovens</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IDJ2001.toFixed(1) + ' N.º</p>');
};
//              2001
function colors_IDJ_NUTSIII_2001(d) {
    return  d > 28.2   ? '#007038' :
            d > 24.2   ? '#239b37' :
            d > 22.3   ? '#a0b939' :
            d > 21.9   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDJ_NUTSIII_2001(feature) {
    return {
        fillColor: colors_IDJ_NUTSIII_2001(feature.properties.IDJ2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDJ_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de jovens</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IDJ2001.toFixed(2) + ' N.º</p>');
};

//      7.4. Índice de dependência de idosos (2001, 2011, 2019)
//          Municipio
//              2019
function colors_IDI_CONC_2019(d) {
    return  d > 49.8   ? '#007038' :
            d > 41.7   ? '#239b37' :
            d > 35.5   ? '#a0b939' :
            d > 29.4   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDI_CONC_2019(feature) {
    return {
        fillColor: colors_IDI_CONC_2019(feature.properties.IDI2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDI_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de idosos</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IDI2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IDI_CONC_2011(d) {
    return  d > 46.5   ? '#007038' :
            d > 37.9   ? '#239b37' :
            d > 31.3   ? '#a0b939' :
            d > 25.2   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDI_CONC_2011(feature) {
    return {
        fillColor: colors_IDI_CONC_2011(feature.properties.IDI2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDI_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de idosos</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IDI2011.toFixed(2) + ' N.º</p>');
};
//              2001
function colors_IDI_CONC_2001(d) {
    return  d > 42.9   ? '#007038' :
            d > 34.6   ? '#239b37' :
            d > 28.7   ? '#a0b939' :
            d > 22.4   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDI_CONC_2001(feature) {
    return {
        fillColor: colors_IDI_CONC_2001(feature.properties.IDI2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDI_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de idosos</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IDI2001.toFixed(2) + 'N.º</p>');
};
//          NUTSIII
//              2019
function colors_IDI_NUTSIII_2019(d) {
    return  d > 43     ? '#007038' :
            d > 39.9   ? '#239b37' :
            d > 35.3   ? '#a0b939' :
            d > 26.8   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDI_NUTSIII_2019(feature) {
    return {
        fillColor: colors_IDI_NUTSIII_2019(feature.properties.IDI2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDI_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de idosos</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IDI2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IDI_NUTSIII_2011(d) {
    return  d > 35.7   ? '#007038' :
            d > 30.9   ? '#239b37' :
            d > 27.2   ? '#a0b939' :
            d > 19.8   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDI_NUTSIII_2011(feature) {
    return {
        fillColor: colors_IDI_NUTSIII_2011(feature.properties.IDI2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDI_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de idosos</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IDI2001.toFixed(1) + ' N.º</p>');
};
//              2001
function colors_IDI_NUTSIII_2001(d) {
    return  d > 35.7   ? '#007038' :
            d > 30.9   ? '#239b37' :
            d > 27.2   ? '#a0b939' :
            d > 19.8   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDI_NUTSIII_2001(feature) {
    return {
        fillColor: colors_IDI_NUTSIII_2001(feature.properties.IDI2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDI_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice de dependência de idosos</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IDI2001.toFixed(2) + ' N.º</p>');
};
//      7.5. Índice de dependência total (2001, 2011, 2019)
//          Municipio
//              2019
function colors_IDT_CONC_2019(d) {
    return  d > 66.5   ? '#007038' :
            d > 60.5   ? '#239b37' :
            d > 54.8   ? '#a0b939' :
            d > 49.3   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDT_CONC_2019(feature) {
    return {
        fillColor: colors_IDT_CONC_2019(feature.properties.IDT2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDT_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice de dependência total</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IDT2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IDT_CONC_2011(d) {
    return  d > 66     ? '#007038' :
            d > 58.9   ? '#239b37' :
            d > 54.3   ? '#a0b939' :
            d > 49     ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDT_CONC_2011(feature) {
    return {
        fillColor: colors_IDT_CONC_2011(feature.properties.IDT2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDT_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice de dependência total</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IDT2011.toFixed(2) + ' N.º</p>');
};
//              2001
function colors_IDT_CONC_2001(d) {
    return  d > 65.7   ? '#007038' :
            d > 58.5   ? '#239b37' :
            d > 52.8   ? '#a0b939' :
            d > 47.7   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDT_CONC_2001(feature) {
    return {
        fillColor: colors_IDT_CONC_2001(feature.properties.IDT2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDT_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice de dependência total</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IDT2001.toFixed(2) + 'N.º</p>');
};
//          NUTSIII
//              2019
function colors_IDT_NUTSIII_2019(d) {
    return  d > 62.7   ? '#007038' :
            d > 59.5   ? '#239b37' :
            d > 55.7   ? '#a0b939' :
            d > 45.5   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDT_NUTSIII_2019(feature) {
    return {
        fillColor: colors_IDT_NUTSIII_2019(feature.properties.IDT2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDT_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice de dependência total</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.IDT2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_IDT_NUTSIII_2011(d) {
    return  d > 58.3   ? '#007038' :
            d > 54.4   ? '#239b37' :
            d > 51.1   ? '#a0b939' :
            d > 47.7   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDT_NUTSIII_2011(feature) {
    return {
        fillColor: colors_IDT_NUTSIII_2011(feature.properties.IDT2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDT_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice de dependência total</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.IDT2001.toFixed(1) + ' N.º</p>');
};
//              2001
function colors_IDT_NUTSIII_2001(d) {
    return  d > 58.3   ? '#007038' :
            d > 54.4   ? '#239b37' :
            d > 51.1   ? '#a0b939' :
            d > 47.7   ? '#c3da82' :
                         '#d6e9cd';
};
function style_IDT_NUTSIII_2001(feature) {
    return {
        fillColor: colors_IDT_NUTSIII_2001(feature.properties.IDT2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_IDT_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice de dependência total</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.IDT2001.toFixed(2) + ' N.º</p>');
};

//      7.6. Índice de sustentabilidade potencial (2001, 2011, 2019)
//          Municipio
//              2019
function colors_ISP_CONC_2019(d) {
    return  d > 3.5   ? '#007038' :
            d > 2.9   ? '#239b37' :
            d > 2.4   ? '#a0b939' :
            d > 2     ? '#c3da82' :
                        '#d6e9cd';
};
function style_ISP_CONC_2019(feature) {
    return {
        fillColor: colors_ISP_CONC_2019(feature.properties.ISP2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISP_CONC_2019(feature, layer){
    layer.bindPopup('<h4>Índice de sustentabilidade potencial</h4> <p>Município: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ISP2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_ISP_CONC_2011(d) {
    return  d > 4.1   ? '#007038' :
            d > 3.3   ? '#239b37' :
            d > 2.7   ? '#a0b939' :
            d > 2.2   ? '#c3da82' :
                        '#d6e9cd';
};
function style_ISP_CONC_2011(feature) {
    return {
        fillColor: colors_ISP_CONC_2011(feature.properties.ISP2011),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISP_CONC_2011(feature, layer){
    layer.bindPopup('<h4>Índice de sustentabilidade potencial</h4> <p>Município: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ISP2011.toFixed(2) + ' N.º</p>');
};
//              2001
function colors_ISP_CONC_2001(d) {
    return  d > 4.5   ? '#007038' :
            d > 3.5   ? '#239b37' :
            d > 2.9   ? '#a0b939' :
            d > 2.3   ? '#c3da82' :
                        '#d6e9cd';
};
function style_ISP_CONC_2001(feature) {
    return {
        fillColor: colors_ISP_CONC_2001(feature.properties.ISP2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISP_CONC_2001(feature, layer){
    layer.bindPopup('<h4>Índice de sustentabilidade potencial</h4> <p>Município: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.ISP2001.toFixed(2) + 'N.º</p>');
};
//          NUTSIII
//              2019
function colors_ISP_NUTSIII_2019(d) {
    return  d > 3.7   ? '#007038' :
            d > 2.9   ? '#239b37' :
            d > 2.5   ? '#a0b939' :
            d > 2.2   ? '#c3da82' :
                        '#d6e9cd';
};
function style_ISP_NUTSIII_2019(feature) {
    return {
        fillColor: colors_ISP_NUTSIII_2019(feature.properties.ISP2019),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISP_NUTSIII_2019(feature, layer){
    layer.bindPopup('<h4>Índice de sustentabilidade potencial</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2019) = ' + feature.properties.ISP2019.toFixed(2) + ' N.º</p>');
};
//              2011
function colors_ISP_NUTSIII_2011(d) {
    return  d > 5.1   ? '#007038' :
            d > 3.7   ? '#239b37' :
            d > 3.2   ? '#a0b939' :
            d > 2.7   ? '#c3da82' :
                        '#d6e9cd';
};
function style_ISP_NUTSIII_2011(feature) {
    return {
        fillColor: colors_ISP_NUTSIII_2011(feature.properties.ISP2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISP_NUTSIII_2011(feature, layer){
    layer.bindPopup('<h4>Índice de sustentabilidade potencial</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2011) = ' + feature.properties.ISP2001.toFixed(1) + ' N.º</p>');
};
//              2001
function colors_ISP_NUTSIII_2001(d) {
    return  d > 5.1   ? '#007038' :
            d > 3.7   ? '#239b37' :
            d > 3.2   ? '#a0b939' :
            d > 2.7   ? '#c3da82' :
                        '#d6e9cd';
};
function style_ISP_NUTSIII_2001(feature) {
    return {
        fillColor: colors_ISP_NUTSIII_2001(feature.properties.ISP2001),
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
    };
};
function popup_ISP_NUTSIII_2001(feature, layer){
    layer.bindPopup('<h4>Índice de sustentabilidade potencial</h4> <p>NUTS III: ' + feature.properties.Anos + ' (2001) = ' + feature.properties.ISP2001.toFixed(2) + ' N.º</p>');
};