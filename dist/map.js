var map = L.map('map');
map.setView([39.60470549437551, -8.413797424060485], 6);

//  Basemaps
var B_OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var B_OTM = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
var no_base = L.tileLayer('');

//  1. Nascimentos e fecundidade
//      1.1. Nados Vivos
var L_CONC_NV2019 = L.geoJSON(PTconc, {
    style: style_NV_CONC_2019,
    onEachFeature: popup_NV_CONC_2019
});
var L_CONC_NV2011 = L.geoJSON(PTconc, {
    style: style_NV_CONC_2011,
    onEachFeature: popup_NV_CONC_2011
});
var L_CONC_NV2001 = L.geoJSON(PTconc, {
    style: style_NV_CONC_2001,
    onEachFeature: popup_NV_CONC_2001
});
var L_NUTS_NV2019 = L.geoJSON(PTnutsiii, {
    style: style_NV_NutsIII_2019,
    onEachFeature: popup_NV_NutsIII_2019
});
var L_NUTS_NV2011 = L.geoJSON(PTnutsiii, {
    style: style_NV_NutsIII_2011,
    onEachFeature: popup_NV_NutsIII_2011
});
var L_NUTS_NV2001 = L.geoJSON(PTnutsiii, {
    style: style_NV_NutsIII_2001,
    onEachFeature: popup_NV_NutsIII_2001
});
//      1.2. Taxa de natalidade
var L_CONC_TN2019 = L.geoJSON(PTconc, {
    style: style_TN_CONC_2019,
    onEachFeature: popup_TN_CONC_2019
}).addTo(map);
var L_CONC_TN2011 = L.geoJSON(PTconc, {
    style: style_TN_CONC_2011,
    onEachFeature: popup_TN_CONC_2011
});
var L_CONC_TN2001 = L.geoJSON(PTconc, {
    style: style_TN_CONC_2001,
    onEachFeature: popup_TN_CONC_2001
});
var L_NUTS_TN2019 = L.geoJSON(PTnutsiii, {
    style: style_TN_NutsIII_2019,
    onEachFeature: popup_TN_NutsIII_2019
});
var L_NUTS_TN2011 = L.geoJSON(PTnutsiii, {
    style: style_TN_NutsIII_2011,
    onEachFeature: popup_TN_NutsIII_2011
});
var L_NUTS_TN2001 = L.geoJSON(PTnutsiii, {
    style: style_TN_NutsIII_2001,
    onEachFeature: popup_TN_NutsIII_2001
});
//      1.3. Indice sintético de fecundidade
var L_CONC_ISF2019 = L.geoJSON(PTconc, {
    style: style_ISF_CONC_2019,
    onEachFeature: popup_ISF_CONC_2019
});
var L_CONC_ISF2011 = L.geoJSON(PTconc, {
    style: style_ISF_CONC_2011,
    onEachFeature: popup_ISF_CONC_2011
});
var L_CONC_ISF2001 = L.geoJSON(PTconc, {
    style: style_ISF_CONC_2001,
    onEachFeature: popup_ISF_CONC_2001
});
var L_NUTS_ISF2019 = L.geoJSON(PTnutsiii, {
    style: style_ISF_NutsIII_2019,
    onEachFeature: popup_ISF_NutsIII_2019
});
var L_NUTS_ISF2011 = L.geoJSON(PTnutsiii, {
    style: style_ISF_NutsIII_2011,
    onEachFeature: popup_ISF_NutsIII_2011
});
var L_NUTS_ISF2001 = L.geoJSON(PTnutsiii, {
    style: style_ISF_NutsIII_2001,
    onEachFeature: popup_ISF_NutsIII_2001
});
//      1.4. Taxa de Fecundidade
var L_CONC_TF2019 = L.geoJSON(PTconc, {
    style: style_TF_CONC_2019,
    onEachFeature: popup_TF_CONC_2019
});
var L_CONC_TF2011 = L.geoJSON(PTconc, {
    style: style_TF_CONC_2011,
    onEachFeature: popup_TF_CONC_2011
});
var L_CONC_TF2001 = L.geoJSON(PTconc, {
    style: style_TF_CONC_2001,
    onEachFeature: popup_TF_CONC_2001
});
var L_NUTS_TF2019 = L.geoJSON(PTnutsiii, {
    style: style_TF_NutsIII_2019,
    onEachFeature: popup_TF_NutsIII_2019
});
var L_NUTS_TF2011 = L.geoJSON(PTnutsiii, {
    style: style_TF_NutsIII_2011,
    onEachFeature: popup_TF_NutsIII_2011
});
var L_NUTS_TF2001 = L.geoJSON(PTnutsiii, {
    style: style_TF_NutsIII_2001,
    onEachFeature: popup_TF_NutsIII_2001
});

//  2. Óbitos
//      2.1 Óbitos totais
var L_CONC_OT2019 = L.geoJSON(PTconc, {
    style: style_OT_CONC_2019,
    onEachFeature: popup_OT_CONC_2019
});
var L_CONC_OT2011 = L.geoJSON(PTconc, {
    style: style_OT_CONC_2011,
    onEachFeature: popup_OT_CONC_2011
});
var L_CONC_OT2001 = L.geoJSON(PTconc, {
    style: style_OT_CONC_2001,
    onEachFeature: popup_OT_CONC_2001
});
var L_NUTS_OT2019 = L.geoJSON(PTnutsiii, {
    style: style_OT_NutsIII_2019,
    onEachFeature: popup_OT_NutsIII_2019
});
var L_NUTS_OT2011 = L.geoJSON(PTnutsiii, {
    style: style_OT_NutsIII_2011,
    onEachFeature: popup_OT_NutsIII_2011
});
var L_NUTS_OT2001 = L.geoJSON(PTnutsiii, {
    style: style_OT_NutsIII_2001,
    onEachFeature: popup_OT_NutsIII_2001
});
//     2.2. Óbitos <1 ano
var L_CONC_O12019 = L.geoJSON(PTconc, {
    style: style_O1_CONC_2019,
    onEachFeature: popup_O1_CONC_2019
});
var L_CONC_O12011 = L.geoJSON(PTconc, {
    style: style_O1_CONC_2011,
    onEachFeature: popup_O1_CONC_2011
});
var L_CONC_O12001 = L.geoJSON(PTconc, {
    style: style_O1_CONC_2001,
    onEachFeature: popup_O1_CONC_2001
});
var L_NUTS_O12019 = L.geoJSON(PTnutsiii, {
    style: style_O1_NUTSIII_2019,
    onEachFeature: popup_O1_NUTSIII_2019
});
var L_NUTS_O12011 = L.geoJSON(PTnutsiii, {
    style: style_O1_NUTSIII_2011,
    onEachFeature: popup_O1_NUTSIII_2011
});
var L_NUTS_O12001 = L.geoJSON(PTnutsiii, {
    style: style_O1_NUTSIII_2001,
    onEachFeature: popup_O1_NUTSIII_2001
});

//      2.3. Taxa de Mortalidade
var L_CONC_TM2019 = L.geoJSON(PTconc, {
    style: style_TM_CONC_2019,
    onEachFeature: popup_TM_CONC_2019
})
var L_CONC_TM2011 = L.geoJSON(PTconc, {
    style: style_TM_CONC_2011,
    onEachFeature: popup_TM_CONC_2011
});
var L_CONC_TM2001 = L.geoJSON(PTconc, {
    style: style_TM_CONC_2001,
    onEachFeature: popup_TM_CONC_2001
});
var L_NUTS_TM2019 = L.geoJSON(PTnutsiii, {
    style: style_TM_NutsIII_2019,
    onEachFeature: popup_TM_NutsIII_2019
});
var L_NUTS_TM2011 = L.geoJSON(PTnutsiii, {
    style: style_TM_NutsIII_2011,
    onEachFeature: popup_TM_NutsIII_2011
});
var L_NUTS_TM2001 = L.geoJSON(PTnutsiii, {
    style: style_TM_NutsIII_2001,
    onEachFeature: popup_TM_NutsIII_2001
});
//      2.4. Taxa de mortalidade infantil
var L_CONC_TMI2019 = L.geoJSON(PTconc, {
    style: style_TMI_CONC_2019,
    onEachFeature: popup_TMI_CONC_2019
});
var L_CONC_TMI2011 = L.geoJSON(PTconc, {
    style: style_TMI_CONC_2011,
    onEachFeature: popup_TMI_CONC_2011
});
var L_CONC_TMI2001 = L.geoJSON(PTconc, {
    style: style_TMI_CONC_2001,
    onEachFeature: popup_TMI_CONC_2001
});
var L_NUTS_TMI2019 = L.geoJSON(PTnutsiii, {
    style: style_TMI_NUTSIII_2019,
    onEachFeature: popup_TMI_NUTSIII_2019
});
var L_NUTS_TMI2011 = L.geoJSON(PTnutsiii, {
    style: style_TMI_NUTSIII_2011,
    onEachFeature: popup_TMI_NUTSIII_2011
});
var L_NUTS_TMI2001 = L.geoJSON(PTnutsiii, {
    style: style_TMI_NUTSIII_2001,
    onEachFeature: popup_TMI_NUTSIII_2001
});

//  3. Evolução da população
//      3.1. Crescimento natural
var L_CONC_CN2019 = L.geoJSON(PTconc, {
    style: style_CN_CONC_2019,
    onEachFeature: popup_CN_CONC_2019
});
var L_CONC_CN2011 = L.geoJSON(PTconc, {
    style: style_CN_CONC_2011,
    onEachFeature: popup_CN_CONC_2011
});
var L_CONC_CN2001 = L.geoJSON(PTconc, {
    style: style_CN_CONC_2001,
    onEachFeature: popup_CN_CONC_2001
});
var L_NUTS_CN2019 = L.geoJSON(PTnutsiii, {
    style: style_CN_NUTSIII_2019,
    onEachFeature: popup_CN_NUTSIII_2019
});
var L_NUTS_CN2011 = L.geoJSON(PTnutsiii, {
    style: style_CN_NUTSIII_2011,
    onEachFeature: popup_CN_NUTSIII_2011
});
var L_NUTS_CN2001 = L.geoJSON(PTnutsiii, {
    style: style_CN_NUTSIII_2001,
    onEachFeature: popup_CN_NUTSIII_2001
});

//      3.2. Taxa de crescimento natural
var L_CONC_TCN_2019 = L.geoJSON(PTconc, {
    style: style_TCN_CONC_2019,
    onEachFeature: popup_TCN_CONC_2019,
});
var L_CONC_TCN_2011 = L.geoJSON(PTconc, {
    style: style_TCN_CONC_2011,
    onEachFeature: popup_TCN_CONC_2011,
});
var L_CONC_TCN_2001 = L.geoJSON(PTconc, {
    style: style_TCN_CONC_2001,
    onEachFeature: popup_TCN_CONC_2001,
});
var L_NUTSIII_TCN_2019 = L.geoJSON(PTnutsiii, {
    style: style_TCN_NUTSIII_2019,
    onEachFeature: popup_TCN_NUTSIII_2019,
});
var L_NUTSIII_TCN_2011 = L.geoJSON(PTnutsiii, {
    style: style_TCN_NUTSIII_2011,
    onEachFeature: popup_TCN_NUTSIII_2011,
});
var L_NUTSIII_TCN_2001 = L.geoJSON(PTnutsiii, {
    style: style_TCN_NUTSIII_2001,
    onEachFeature: popup_TCN_NUTSIII_2001,
});

//      3.3. Saldo migratório
var L_CONC_SM2019 = L.geoJSON(PTconc, {
    style: style_SM_CONC_2019,
    onEachFeature: popup_SM_CONC_2019
});
var L_CONC_SM2011 = L.geoJSON(PTconc, {
    style: style_SM_CONC_2011,
    onEachFeature: popup_SM_CONC_2011
});
var L_CONC_SM2001 = L.geoJSON(PTconc, {
    style: style_SM_CONC_2001,
    onEachFeature: popup_SM_CONC_2001
});
var L_NUTS_SM2019 = L.geoJSON(PTnutsiii, {
    style: style_SM_NUTSIII_2019,
    onEachFeature: popup_SM_NUTSIII_2019
});
var L_NUTS_SM2011 = L.geoJSON(PTnutsiii, {
    style: style_SM_NUTSIII_2011,
    onEachFeature: popup_SM_NUTSIII_2011
});
var L_NUTS_SM2001 = L.geoJSON(PTnutsiii, {
    style: style_SM_NUTSIII_2001,
    onEachFeature: popup_SM_NUTSIII_2001
});

//      3.4. Taxa de crescimento migratório
var L_CONC_TCM_2019 = L.geoJSON(PTconc, {
    style: style_TCM_CONC_2019,
    onEachFeature: popup_TCM_CONC_2019,
});
var L_CONC_TCM_2011 = L.geoJSON(PTconc, {
    style: style_TCM_CONC_2011,
    onEachFeature: popup_TCM_CONC_2011
});
var L_CONC_TCM_2001 = L.geoJSON(PTconc, {
    style: style_TCM_CONC_2001,
    onEachFeature: popup_TCM_CONC_2001,
});
var L_NUTSIII_TCM_2019 = L.geoJSON(PTnutsiii, {
    style: style_TCM_NUTSIII_2019,
    onEachFeature: popup_TCM_NUTSIII_2019,
});
var L_NUTSIII_TCM_2011 = L.geoJSON(PTnutsiii, {
    style: style_TCM_NUTSIII_2011,
    onEachFeature: popup_TCM_NUTSIII_2011,
});
var L_NUTSIII_TCM_2001 = L.geoJSON(PTnutsiii, {
    style: style_TCM_NUTSIII_2001,
    onEachFeature: popup_TCM_NUTSIII_2001
});

//      3.5. Crescimento efetivo
var L_CONC_CE2019 = L.geoJSON(PTconc, {
    style: style_CE_CONC_2019,
    onEachFeature: popup_CE_CONC_2019
});
var L_CONC_CE2011 = L.geoJSON(PTconc, {
    style: style_CE_CONC_2011,
    onEachFeature: popup_CE_CONC_2011
});
var L_CONC_CE2001 = L.geoJSON(PTconc, {
    style: style_CE_CONC_2001,
    onEachFeature: popup_CE_CONC_2001
});
var L_NUTS_CE2019 = L.geoJSON(PTnutsiii, {
    style: style_CE_NUTSIII_2019,
    onEachFeature: popup_CE_NUTSIII_2019
});
var L_NUTS_CE2011 = L.geoJSON(PTnutsiii, {
    style: style_CE_NUTSIII_2011,
    onEachFeature: popup_CE_NUTSIII_2011
});
var L_NUTS_CE2001 = L.geoJSON(PTnutsiii, {
    style: style_CE_NUTSIII_2001,
    onEachFeature: popup_CE_NUTSIII_2001
});

//      3.6. Taxa de Crescimento efetivo
var L_CONC_TCE_2019 = L.geoJSON(PTconc, {
    style: style_TCE_CONC_2019,
    onEachFeature: popup_TCE_CONC_2019,
});
var L_CONC_TCE_2011 = L.geoJSON(PTconc, {
    style: style_TCE_CONC_2011,
    onEachFeature: popup_TCE_CONC_2011
});
var L_CONC_TCE_2001 = L.geoJSON(PTconc, {
    style: style_TCE_CONC_2001,
    onEachFeature: popup_TCE_CONC_2001
});
var L_NUTSIII_TCE_2019 = L.geoJSON(PTnutsiii, {
    style: style_TCE_NUTSIII_2019,
    onEachFeature: popup_TCE_NUTSIII_2019,
});
var L_NUTSIII_TCE_2011 = L.geoJSON(PTnutsiii, {
    style: style_TCE_NUTSIII_2011,
    onEachFeature: popup_TCE_NUTSIII_2011,
});
var L_NUTSIII_TCE_2001 = L.geoJSON(PTnutsiii, {
    style: style_TCE_NUTSIII_2001,
    onEachFeature: popup_TCE_NUTSIII_2001
});



//  4. População residente
//      4.1. População residente
var L_CONC_PR2019 = L.geoJSON(PTconc, {
    style: style_PR_CONC_2019,
    onEachFeature: popup_PR_CONC_2019
});
var L_CONC_PR2011 = L.geoJSON(PTconc, {
    style: style_PR_CONC_2011,
    onEachFeature: popup_PR_CONC_2011
});
var L_CONC_PR2001 = L.geoJSON(PTconc, {
    style: style_PR_CONC_2001,
    onEachFeature: popup_PR_CONC_2001
});
var L_NUTS_PR2019 = L.geoJSON(PTnutsiii, {
    style: style_PR_NUTSIII_2019,
    onEachFeature: popup_PR_NUTSIII_2019
});
var L_NUTS_PR2011 = L.geoJSON(PTnutsiii, {
    style: style_PR_NUTSIII_2011,
    onEachFeature: popup_PR_NUTSIII_2011
});
var L_NUTS_PR2001 = L.geoJSON(PTnutsiii, {
    style: style_PR_NUTSIII_2001,
    onEachFeature: popup_PR_NUTSIII_2001
});

//      4.2. Densidade populacional
var L_DP2019 = L.geoJSON(PTconc, {
    style: style_DP_CONC_2019,
    onEachFeature: popup_DP_CONC_2019,
});
var L_DP2011 = L.geoJSON(PTconc, {
    style: style_DP_CONC_2011,
    onEachFeature: popup_DP_CONC_2011
});
var L_DP2001 = L.geoJSON(PTconc, {
    style: style_DP_CONC_2001,
    onEachFeature: popup_DP_CONC_2001
});
var L_NUTS_DP2019 = L.geoJSON(PTnutsiii, {
    style: style_DP_NUTSIII_2019,
    onEachFeature: popup_DP_NUTSIII_2019
});
var L_NUTS_DP2011 = L.geoJSON(PTnutsiii, {
    style: style_DP_NUTSIII_2011,
    onEachFeature: popup_DP_NUTSIII_2011
});
var L_NUTS_DP2001 = L.geoJSON(PTnutsiii, {
    style: style_DP_NUTSIII_2001,
    onEachFeature: popup_DP_NUTSIII_2001
});



//  5. População estrangeira
//      5.1. População estrangeira com estatuto legal
var L_CONC_PEL2019 = L.geoJSON(PTconc, {
    style: style_PEL_CONC_2019,
    onEachFeature: popup_PEL_CONC_2019
});
var L_CONC_PEL2011 = L.geoJSON(PTconc, {
    style: style_PEL_CONC_2011,
    onEachFeature: popup_PEL_CONC_2011
});
var L_CONC_PEL2008 = L.geoJSON(PTconc, {
    style: style_PEL_CONC_2008,
    onEachFeature: popup_PEL_CONC_2008
});
var L_NUTS_PEL2019 = L.geoJSON(PTnutsiii, {
    style: style_PEL_NUTSIII_2019,
    onEachFeature: popup_PEL_NUTSIII_2019
});
var L_NUTS_PEL2011 = L.geoJSON(PTnutsiii, {
    style: style_PEL_NUTSIII_2011,
    onEachFeature: popup_PEL_NUTSIII_2011
});
var L_NUTS_PEL2008 = L.geoJSON(PTnutsiii, {
    style: style_PEL_NUTSIII_2008,
    onEachFeature: popup_PEL_NUTSIII_2008
});

//  6. Casamentos e divóricos
//      6.1. Taxa de divorcialidade (1960, 2001, 2011, 2019)
var L_CONC_TD2019 = L.geoJSON(PTconc, {
    style: style_TD_CONC_2019,
    onEachFeature: popup_TD_CONC_2019
});
var L_CONC_TD2011 = L.geoJSON(PTconc, {
    style: style_TD_CONC_2011,
    onEachFeature: popup_TD_CONC_2011
});
var L_CONC_TD2001 = L.geoJSON(PTconc, {
    style: style_TD_CONC_2001,
    onEachFeature: popup_TD_CONC_2001
});
var L_NUTS_TD2019 = L.geoJSON(PTnutsiii, {
    style: style_TD_NUTSIII_2019,
    onEachFeature: popup_TD_NUTSIII_2019
});
var L_NUTS_TD2011 = L.geoJSON(PTnutsiii, {
    style: style_TD_NUTSIII_2011,
    onEachFeature: popup_TD_NUTSIII_2011
});
var L_NUTS_TD2001 = L.geoJSON(PTnutsiii, {
    style: style_TD_NUTSIII_2001,
    onEachFeature: popup_TD_NUTSIII_2001
});

//      6.2. Taxa de nupcialidade (2001, 2011, 2019)
var L_CONC_TNUP2019 = L.geoJSON(PTconc, {
    style: style_TNUP_CONC_2019,
    onEachFeature: popup_TNUP_CONC_2019
});
var L_CONC_TNUP2011 = L.geoJSON(PTconc, {
    style: style_TNUP_CONC_2011,
    onEachFeature: popup_TNUP_CONC_2011
});
var L_CONC_TNUP2001 = L.geoJSON(PTconc, {
    style: style_TNUP_CONC_2001,
    onEachFeature: popup_TNUP_CONC_2001
});
var L_NUTS_TNUP2019 = L.geoJSON(PTnutsiii, {
    style: style_TNUP_NUTSIII_2019,
    onEachFeature: popup_TNUP_NUTSIII_2019
});
var L_NUTS_TNUP2011 = L.geoJSON(PTnutsiii, {
    style: style_TNUP_NUTSIII_2011,
    onEachFeature: popup_TNUP_NUTSIII_2011
});
var L_NUTS_TNUP2001 = L.geoJSON(PTnutsiii, {
    style: style_TNUP_NUTSIII_2001,
    onEachFeature: popup_TNUP_NUTSIII_2001
});

//  7. Indicadores de envelhecimento
var L_IE2019 = L.geoJSON(PTconc, {
    style: style_IE_CONC_2019,
    onEachFeature: popup_IE_CONC_2019,
});
var L_IE2011 = L.geoJSON(PTconc, {
    style: style_IE_CONC_2011,
    onEachFeature: popup_IE_CONC_2011
});
var L_IE2001 = L.geoJSON(PTconc, {
    style: style_IE_CONC_2001,
    onEachFeature: popup_IE_CONC_2001
});
var L_NUTS_IE2019 = L.geoJSON(PTnutsiii, {
    style: style_IE_NUTSIII_2019,
    onEachFeature: popup_IE_NUTSIII_2019
});
var L_NUTS_IE2011 = L.geoJSON(PTnutsiii, {
    style: style_IE_NUTSIII_2011,
    onEachFeature: popup_IE_NUTSIII_2011
});

var L_NUTS_IE2001 = L.geoJSON(PTnutsiii, {
    style: style_IE_NUTSIII_2001,
    onEachFeature: popup_IE_NUTSIII_2001
});
var L_CONC_IL2019 = L.geoJSON(PTconc, {
    style: style_IL_CONC_2019,
    onEachFeature: popup_IL_CONC_2019
});
var L_CONC_IL2011 = L.geoJSON(PTconc, {
    style: style_IL_CONC_2011,
    onEachFeature: popup_IL_CONC_2011
});
var L_CONC_IL2001 = L.geoJSON(PTconc, {
    style: style_IL_CONC_2001,
    onEachFeature: popup_IL_CONC_2001
});
var L_NUTS_IL2019 = L.geoJSON(PTnutsiii, {
    style: style_IL_NUTSIII_2019,
    onEachFeature: popup_IL_NUTSIII_2019
});
var L_NUTS_IL2011 = L.geoJSON(PTnutsiii, {
    style: style_IL_NUTSIII_2011,
    onEachFeature: popup_IL_NUTSIII_2011
});
var L_NUTS_IL2001 = L.geoJSON(PTnutsiii, {
    style: style_IL_NUTSIII_2001,
    onEachFeature: popup_IL_NUTSIII_2001
});

var L_CONC_IDJ2019 = L.geoJSON(PTconc, {
    style: style_IDJ_CONC_2019,
    onEachFeature: popup_IDJ_CONC_2019
});
var L_CONC_IDJ2011 = L.geoJSON(PTconc, {
    style: style_IDJ_CONC_2011,
    onEachFeature: popup_IDJ_CONC_2011
});
var L_CONC_IDJ2001 = L.geoJSON(PTconc, {
    style: style_IDJ_CONC_2001,
    onEachFeature: popup_IDJ_CONC_2001
});
var L_NUTS_IDJ2019 = L.geoJSON(PTnutsiii, {
    style: style_IDJ_NUTSIII_2019,
    onEachFeature: popup_IDJ_NUTSIII_2019
});
var L_NUTS_IDJ2011 = L.geoJSON(PTnutsiii, {
    style: style_IDJ_NUTSIII_2011,
    onEachFeature: popup_IDJ_NUTSIII_2011
});
var L_NUTS_IDJ2001 = L.geoJSON(PTnutsiii, {
    style: style_IDJ_NUTSIII_2001,
    onEachFeature: popup_IDJ_NUTSIII_2001
});

var L_CONC_IDI2019 = L.geoJSON(PTconc, {
    style: style_IDI_CONC_2019,
    onEachFeature: popup_IDI_CONC_2019
});
var L_CONC_IDI2011 = L.geoJSON(PTconc, {
    style: style_IDI_CONC_2011,
    onEachFeature: popup_IDI_CONC_2011
});
var L_CONC_IDI2001 = L.geoJSON(PTconc, {
    style: style_IDI_CONC_2001,
    onEachFeature: popup_IDI_CONC_2001
});
var L_NUTS_IDI2019 = L.geoJSON(PTnutsiii, {
    style: style_IDI_NUTSIII_2019,
    onEachFeature: popup_IDI_NUTSIII_2019
});
var L_NUTS_IDI2011 = L.geoJSON(PTnutsiii, {
    style: style_IDI_NUTSIII_2011,
    onEachFeature: popup_IDI_NUTSIII_2011
});
var L_NUTS_IDI2001 = L.geoJSON(PTnutsiii, {
    style: style_IDI_NUTSIII_2001,
    onEachFeature: popup_IDI_NUTSIII_2001
});

var L_CONC_IDT2019 = L.geoJSON(PTconc, {
    style: style_IDT_CONC_2019,
    onEachFeature: popup_IDT_CONC_2019
});
var L_CONC_IDT2011 = L.geoJSON(PTconc, {
    style: style_IDT_CONC_2011,
    onEachFeature: popup_IDT_CONC_2011
});
var L_CONC_IDT2001 = L.geoJSON(PTconc, {
    style: style_IDT_CONC_2001,
    onEachFeature: popup_IDT_CONC_2001
});
var L_NUTS_IDT2019 = L.geoJSON(PTnutsiii, {
    style: style_IDT_NUTSIII_2019,
    onEachFeature: popup_IDT_NUTSIII_2019
});
var L_NUTS_IDT2011 = L.geoJSON(PTnutsiii, {
    style: style_IDT_NUTSIII_2011,
    onEachFeature: popup_IDT_NUTSIII_2011
});
var L_NUTS_IDT2001 = L.geoJSON(PTnutsiii, {
    style: style_IDT_NUTSIII_2001,
    onEachFeature: popup_IDT_NUTSIII_2001
});

var L_CONC_ISP2019 = L.geoJSON(PTconc, {
    style: style_ISP_CONC_2019,
    onEachFeature: popup_ISP_CONC_2019
});
var L_CONC_ISP2011 = L.geoJSON(PTconc, {
    style: style_ISP_CONC_2011,
    onEachFeature: popup_ISP_CONC_2011
});
var L_CONC_ISP2001 = L.geoJSON(PTconc, {
    style: style_ISP_CONC_2001,
    onEachFeature: popup_ISP_CONC_2001
});
var L_NUTS_ISP2019 = L.geoJSON(PTnutsiii, {
    style: style_ISP_NUTSIII_2019,
    onEachFeature: popup_ISP_NUTSIII_2019
});
var L_NUTS_ISP2011 = L.geoJSON(PTnutsiii, {
    style: style_ISP_NUTSIII_2011,
    onEachFeature: popup_ISP_NUTSIII_2011
});
var L_NUTS_ISP2001 = L.geoJSON(PTnutsiii, {
    style: style_ISP_NUTSIII_2001,
    onEachFeature: popup_ISP_NUTSIII_2001
});

//  Sedes de Distrito
var L_sedes_distrito = L.geoJson(sedes, {
    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
        radius: 0.9,
        fillOpacity: 1,
        color: "#000000",
      });
    },
    onEachFeature: function (feature, marker) {
      marker.bindPopup("<h3>" + feature.properties.nome + "</h3>")
    },
}).addTo(map);

//Menus
var baseMaps = {
    "OpenStreetMap": B_OSM,
    "Topografia": B_OTM,
    "Remover fundo": no_base
};
L.control.layers(baseMaps, {}, {
    collapsed: false
}).addTo(map);

var layers = [
    {
        groupName : "Nascimentos e fecundidade  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //1.1. Nados-vivos
            "Nados-vivos, Município (2019)": L_CONC_NV2019,
            "Nados-vivos, Município (2011)": L_CONC_NV2011,
            "Nados-vivos, Município (2001)": L_CONC_NV2001,
            "Nados-vivos, Nuts III (2019)": L_NUTS_NV2019,
            "Nados-vivos, Nuts III (2011)": L_NUTS_NV2011,
            "Nados-vivos, Nuts III (2001)": L_NUTS_NV2001,
            //1.2. Taxa de Natalidade
            "Taxa de natalidade, Município (2019)": L_CONC_TN2019,
            "Taxa de natalidade, Município (2011)": L_CONC_TN2011,
            "Taxa de natalidade, Município (2001)": L_CONC_TN2001,
            "Taxa de natalidade, Nuts III (2019)": L_NUTS_TN2019,
            "Taxa de natalidade, Nuts III (2011)": L_NUTS_TN2011,
            "Taxa de natalidade, Nuts III (2001)": L_NUTS_TN2001,
            //1.3. Indice Sintetico de Fecundidade
            "Índice sintético de fecundidade, Município (2019)": L_CONC_ISF2019,
            "Índice sintético de fecundidade, Município (2011)": L_CONC_ISF2011,
            "Índice sintético de fecundidade, Município (2001)": L_CONC_ISF2001,
            "Índice sintético de fecundidade, Nuts III (2019)": L_NUTS_ISF2019,
            "Índice sintético de fecundidade, Nuts III (2011)": L_NUTS_ISF2011,
            "Índice sintético de fecundidade, Nuts III (2001)": L_NUTS_ISF2001,
            //1.4. Taxa de Fecundidade
            "Taxa de fecundidade, Município (2019)": L_CONC_TF2019,
            "Taxa de fecundidade, Município (2011)": L_CONC_TF2011,
            "Taxa de fecundidade, Município (2001)": L_CONC_TF2001,
            "Taxa de fecundidade, Nuts III (2019)": L_NUTS_TF2019,
            "Taxa de fecundidade, Nuts III (2011)": L_NUTS_TF2011,
            "Taxa de fecundidade, Nuts III (2001)": L_NUTS_TF2001
        }
    },{
        groupName : "Óbitos  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //Obitos totais
            "Óbitos totais, Município (2019)": L_CONC_OT2019,
            "Óbitos totais, Município (2011)": L_CONC_OT2011,
            "Óbitos totais, Município (2001)": L_CONC_OT2001,
            "Óbitos totais, Nuts III (2019)": L_NUTS_OT2019,
            "Óbitos totais, Nuts III (2011)": L_NUTS_OT2011,
            "Óbitos totais, Nuts III (2001)": L_NUTS_OT2001,
            //Obitos <1 ano
            "Óbitos <1 ano, Município (2019)": L_CONC_O12019,
            "Óbitos <1 ano, Município (2011)": L_CONC_O12011,
            "Óbitos <1 ano, Município (2001)": L_CONC_O12001,
            "Óbitos <1 ano, Nuts III (2019)": L_NUTS_O12019,
            "Óbitos <1 ano, Nuts III (2011)": L_NUTS_O12011,
            "Óbitos <1 ano, Nuts III (2001)": L_NUTS_O12001,
            //Taxa de mortalidade
            "Taxa de mortalidade, Município (2019)":L_CONC_TM2019,
            "Taxa de mortalidade, Município (2011)":L_CONC_TM2011,
            "Taxa de mortalidade, Município (2001)":L_CONC_TM2001,
            "Taxa de mortalidade, Nuts III (2019)": L_NUTS_TM2019,
            "Taxa de mortalidade, Nuts III (2011)": L_NUTS_TM2011,
            "Taxa de mortalidade, Nuts III (2001)": L_NUTS_TM2001,
            //Taxa de mortalidade infantil
            "Taxa de mortalidade infantil, Município (2019)":L_CONC_TMI2019,
            "Taxa de mortalidade infantil, Município (2011)":L_CONC_TMI2011,
            "Taxa de mortalidade infantil, Município (2001)":L_CONC_TMI2001,
            "Taxa de mortalidade infantil, Nuts III (2019)": L_NUTS_TMI2019,
            "Taxa de mortalidade infantil, Nuts III (2011)": L_NUTS_TMI2011,
            "Taxa de mortalidade infantil, Nuts III (2001)": L_NUTS_TMI2001
        }
    },{
        groupName : "Evolução da população  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //Crescimento natural
            "Crescimento Natural, Município (2019)": L_CONC_CN2019,
            "Crescimento Natural, Município (2011)": L_CONC_CN2011,
            "Crescimento Natural, Município (2001)": L_CONC_CN2001,
            "Crescimento Natural, Nuts III (2019)": L_NUTS_CN2019,
            "Crescimento Natural, Nuts III (2011)": L_NUTS_CN2011,
            "Crescimento Natural, Nuts III (2001)": L_NUTS_CN2001,
            //Taxa de crescimento natural
            "Taxa de crescimento natural, Município (2019)":L_CONC_TCN_2019,
            "Taxa de crescimento natural, Município (2011)":L_CONC_TCN_2011,
            "Taxa de crescimento natural, Município (2001)":L_CONC_TCN_2001,
            "Taxa de crescimento natural, Nuts III (2019)":L_NUTSIII_TCN_2019,
            "Taxa de crescimento natural, Nuts III (2011)":L_NUTSIII_TCN_2011,
            "Taxa de crescimento natural, Nuts III (2001)":L_NUTSIII_TCN_2001,
            //Saldo migratório
            "Saldo migratório, Município (2019)": L_CONC_SM2019,
            "Saldo migratório, Município (2011)": L_CONC_SM2011,
            "Saldo migratório, Município (2001)": L_CONC_SM2001,
            "Saldo migratório, Nuts III (2019)": L_NUTS_SM2019,
            "Saldo migratório, Nuts III (2011)": L_NUTS_SM2011,
            "Saldo migratório, Nuts III (2001)": L_NUTS_SM2001,
            //Taxa de crescimento migratório
            "Taxa de crescimento migratório, Município (2019)":L_CONC_TCM_2019,
            "Taxa de crescimento migratório, Município (2011)":L_CONC_TCM_2011,
            "Taxa de crescimento migratório, Município (2001)":L_CONC_TCM_2001,
            "Taxa de crescimento migratório, Nuts III (2019)":L_NUTSIII_TCM_2019,
            "Taxa de crescimento migratório, Nuts III (2011)":L_NUTSIII_TCM_2011,
            "Taxa de crescimento migratório, Nuts III (2001)":L_NUTSIII_TCM_2001,
            //crescimento efetivo
            "Crescimento efetivo, Município (2019)": L_CONC_CE2019,
            "Crescimento efetivo, Município (2011)": L_CONC_CE2011,
            "Crescimento efetivo, Município (2001)": L_CONC_CE2001,
            "Crescimento efetivo, Nuts III (2019)": L_NUTS_CE2019,
            "Crescimento efetivo, Nuts III (2011)": L_NUTS_CE2011,
            "Crescimento efetivo, Nuts III (2001)": L_NUTS_CE2001,
            //Taxa de crescimento efetivo
            "Taxa de crescimento efetivo, Município (2019)":L_CONC_TCE_2019,
            "Taxa de crescimento efetivo, Município (2011)":L_CONC_TCE_2011,
            "Taxa de crescimento efetivo, Município (2001)":L_CONC_TCE_2001,
            "Taxa de crescimento efetivo, Nuts III (2019)":L_NUTSIII_TCE_2019,
            "Taxa de crescimento efetivo, Nuts III (2011)":L_NUTSIII_TCE_2011,
            "Taxa de crescimento efetivo, Nuts III (2001)":L_NUTSIII_TCE_2001
        }
    },{
        groupName : "População residente  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //Populacao residente
            "População residente, Município (2019)": L_CONC_PR2019,
            "População residente, Município (2011)": L_CONC_PR2011,
            "População residente, Município (2001)": L_CONC_PR2001,
            "População residente, Nuts III (2019)": L_NUTS_PR2019,
            "População residente, Nuts III (2011)": L_NUTS_PR2011,
            "População residente, Nuts III (2001)": L_NUTS_PR2001,
            //Densidade populacional
            "Densidade populacional, Município (2019)": L_DP2019,
	        "Densidade populacional, Município (2011)": L_DP2011,
            "Densidade populacional, Município (2001)": L_DP2001,
            "Densidade populacional, Nuts III (2019)": L_NUTS_DP2019,
            "Densidade populacional, Nuts III (2011)": L_NUTS_DP2011,
            "Densidade populacional, Nuts III (2001)": L_NUTS_DP2001
        }
    },{
        groupName : "População estrangeira  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //População estrangeira com estatuto legal
            "População estrangeira com estatuto legal, Município (2019)": L_CONC_PEL2019,
            "População estrangeira com estatuto legal, Município (2011)": L_CONC_PEL2011,
            "População estrangeira com estatuto legal, Município (2008)": L_CONC_PEL2008,
            "População estrangeira com estatuto legal, Nuts III (2019)": L_NUTS_PEL2019,
            "População estrangeira com estatuto legal, Nuts III (2011)": L_NUTS_PEL2011,
            "População estrangeira com estatuto legal, Nuts III (2008)": L_NUTS_PEL2008
        }
    },{ 
        groupName : "Casamentos e divórcios  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //Taxa de divorcialidade
            "Taxa de divorcialidade, Município (2019)": L_CONC_TD2019,
            "Taxa de divorcialidade, Município (2011)": L_CONC_TD2011,
            "Taxa de divorcialidade, Município (2001)": L_CONC_TD2001,
            "Taxa de divorcialidade, Nuts III (2019)": L_NUTS_TD2019,
            "Taxa de divorcialidade, Nuts III (2011)": L_NUTS_TD2011,
            "Taxa de divorcialidade, Nuts III (2001)": L_NUTS_TD2001,
            //Taxa de Nupcialidade
            "Taxa de nupcialidade, Município (2019)": L_CONC_TNUP2019,
            "Taxa de nupcialidade, Município (2011)": L_CONC_TNUP2011,
            "Taxa de nupcialidade, Município (2001)": L_CONC_TNUP2001,
            "Taxa de nupcialidade, Nuts III (2019)": L_NUTS_TNUP2019,
            "Taxa de nupcialidade, Nuts III (2011)": L_NUTS_TNUP2011,
            "Taxa de nupcialidade, Nuts III (2001)": L_NUTS_TNUP2001
        }
    },{
        groupName :"Indicadores de envelhecimento  <a href='https://www.escolavirtual.pt/e-manuais/html5-reader/cloud-reader/kitaboo-reflowable.html#/main/https;%7C%7Cwww.escolavirtual.pt%7Cemanuais-cs%7C9789896478414-TE-01%7Chtml5%7C9789896478414-TE-01-lite%7C?bat=MKD0RrS2Z9yFkYz3nscYFM8kj1VrpI9PmWCjmjhyVNv4l5Vvpd1GK1o6091V0ZA8&readerType=new&pageMode=double&page=36&menu=thumbnail' target='_blank' rel='noopener noreferrer'>&#128214</a>",
        expanded : false,
        layers    : {
            //Indice de envelhecimento
            "Índice de envelhecimento, Município (2019)": L_IE2019,
	        "Índice de envelhecimento, Município (2011)": L_IE2011,
            "Índice de envelhecimento, Município (2001)": L_IE2001,
            "Índice de envelhecimento, Nuts III (2019)": L_NUTS_IE2019,
            "Índice de envelhecimento, Nuts III (2011)": L_NUTS_IE2011,
            "Índice de envelhecimento, Nuts III (2001)": L_NUTS_IE2001,
            //Indice de longevidade
            "Índice de longevidade, Município (2019)": L_CONC_IL2019,
            "Índice de longevidade, Município (2011)": L_CONC_IL2011,
            "Índice de longevidade, Município (2001)": L_CONC_IL2001,
            "Índice de longevidade, Nuts III (2019)": L_NUTS_IL2019,
            "Índice de longevidade, Nuts III (2011)": L_NUTS_IL2011,
            "Índice de longevidade, Nuts III (2001)": L_NUTS_IL2001,
            //Indice de dependencia de jovens
            "Índice de dependência de jovens, Município (2019)": L_CONC_IDJ2019,
            "Índice de dependência de jovens, Município (2011)": L_CONC_IDJ2011,
            "Índice de dependência de jovens, Município (2001)": L_CONC_IDJ2001,
            "Índice de dependência de jovens, Nuts III (2019)": L_NUTS_IDJ2019,
            "Índice de dependência de jovens, Nuts III (2011)": L_NUTS_IDJ2011,
            "Índice de dependência de jovens, Nuts III (2001)": L_NUTS_IDJ2001,
            //Indice de dependencia de idosos
            "Índice de dependência de idosos, Município (2019)": L_CONC_IDI2019,
            "Índice de dependência de idosos, Município (2011)": L_CONC_IDI2011,
            "Índice de dependência de idosos, Município (2001)": L_CONC_IDI2001,
            "Índice de dependência de idosos, Nuts III (2019)": L_NUTS_IDI2019,
            "Índice de dependência de idosos, Nuts III (2011)": L_NUTS_IDI2011,
            "Índice de dependência de idosos, Nuts III (2001)": L_NUTS_IDI2001,
            //Indice de dependencia total
            "Índice de dependência total, Município (2019)": L_CONC_IDT2019,
            "Índice de dependência total, Município (2011)": L_CONC_IDT2011,
            "Índice de dependência total, Município (2001)": L_CONC_IDT2001,
            "Índice de dependência total, Nuts III (2019)": L_NUTS_IDT2019,
            "Índice de dependência total, Nuts III (2011)": L_NUTS_IDT2011,
            "Índice de dependência total, Nuts III (2001)": L_NUTS_IDT2001,
            //Indice de Sustentabilidade potencial
            "Índice de sustentabilidade potencial, Município (2019)": L_CONC_ISP2019,
            "Índice de sustentabilidade potencial, Município (2011)": L_CONC_ISP2011,
            "Índice de sustentabilidade potencial, Município (2001)": L_CONC_ISP2001,
            "Índice de sustentabilidade potencial, Nuts III (2019)": L_NUTS_ISP2019,
            "Índice de sustentabilidade potencial, Nuts III (2011)": L_NUTS_ISP2011,
            "Índice de sustentabilidade potencial, Nuts III (2001)": L_NUTS_ISP2001,
        }
    }
];

var overlayers = [
    { 
        groupName : "Elementos adicionais",
        expanded : false,
        layers    : {
            "Capitais de Distrito": L_sedes_distrito
        }
    }
];

var options = {
    container_width 	: "350px",
    container_maxHeight : "450px", 
    group_maxHeight     : "999px",
    exclusive       	: true
};

L.Control.styledLayerControl(layers, overlayers, options).addTo(map);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Adicionar escala
L.control.scale({imperial: false}).addTo(map);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Butao para fazer zoom
var pt_continental = { 
    lat: 39.7,
    lng: -8.3,
    zoom: 7
};

var madeira = {
    lat: 32.8,
    lng: -16.7,
    zoom: 10
}; 

var acores = {
    lat: 38.3,
    lng: -28.2,
    zoom: 8
}; 
  
L.easyButton('<div id="btportugal"></div>',function(btn,map){
    map.setView([pt_continental.lat, pt_continental.lng], pt_continental.zoom);
},'Centrar em Portugal Continental').addTo(map);

L.easyButton('<div id="btmadeira"></div>',function(btn,map){
    map.setView([madeira.lat, madeira.lng], madeira.zoom);
},'Centrar no Arquipélago da Madeira').addTo(map);

L.easyButton('<div id="btacores"></div>',function(btn,map){
    map.setView([acores.lat, acores.lng], acores.zoom);
},'Centrar no Arquipélago dos Açores').addTo(map);


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
//  Ferramenta para medir
L.control.polylineMeasure ({position:'topleft', unit:'metres', showBearings:false, clearMeasurementsOnStop: false, showClearControl: true, showUnitControl: false}).addTo (map);
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */



//  Legendas
//      1. Nascimentos e fecundidade
//          1.2. Nados-vivos
var legenda_NV_CONC_2019 = L.control({ position: "bottomleft" });
legenda_NV_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Nados-vivos (Indivíduos)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[361; 5926]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[132; 361[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[65; 132[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[29; 65[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[1; 29[</span><br>';
    return div;
};
var legenda_NV_CONC_2011 = L.control({ position: "bottomleft" });
legenda_NV_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Nados-vivos (Indivíduos)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[448; 5733]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[169; 448[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[76; 169[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[38; 76[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[2; 38[</span><br>';
    return div;
};
var legenda_NV_CONC_2001 = L.control({ position: "bottomleft" });
legenda_NV_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Nados-vivos (Indivíduos)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[511; 5604]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[206; 511[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[109; 206[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[53; 109[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[3; 53[</span><br>';
    return div;
};
var legenda_NV_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_NV_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Nados-vivos (Indivíduos)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[3063; 29652]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[2131; 3063[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1486; 2131[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[734; 1486[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[424; 734[</span><br>';
    return div;
};
var legenda_NV_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_NV_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Nados-vivos (Indivíduos)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[3667; 31127]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[2467; 3667[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1730; 2467[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[878; 1730[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[525; 878[</span><br>';
    return div;
};
var legenda_NV_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_NV_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Nados-vivos (Indivíduos)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[4164; 31604]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[3129; 4164[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[2288; 3129[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1035; 2288[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[713; 1035[</span><br>';
    return div;
};

//          1.2. Taxa de natalidade
var legenda_TN_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TN_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de natalidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[8.6; 12]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[7.4; 8.6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[6.4; 7.4[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[5.3; 6.4[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[1.5; 5.3 [</span><br>';
    return div;
};
var legenda_TN_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TN_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de natalidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[9.6; 14.8]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[8.3; 9.6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[7.4; 8.3[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[6.0; 7.4[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[2.2; 6.0[</span><br>';
    return div;
};
var legenda_TN_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TN_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de natalidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[11.6 17.8]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[10.3; 11.6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[8.8; 10.3[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[7.1; 8.8[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[2.7; 7.1[</span><br>';
    return div;
};
var legenda_TN_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TN_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de natalidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[8.16; 10.4]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[7.64; 8.16[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[6.96; 7.64[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[6.1; 6.96[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[4.9; 6.1 [</span><br>';
    return div;
};
var legenda_TN_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TN_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de natalidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[9.0; 11.1]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[8.4; 9.0[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[7.9; 8.4[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[7.0; 7.9[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[5.6; 7.0 [</span><br>';
    return div;
};
var legenda_TN_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TN_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de natalidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[12.2; 12.9]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[10.5; 12.2[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[9.1; 10.5[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[7.9; 9.1[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[7.2; 7.9 [</span><br>';
    return div;
};
//      1.3 Índice sintético de fecundidade
var legenda_ISF_CONC_2019 = L.control({ position: "bottomleft" });
legenda_ISF_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice sintético de fecundidade (Indivíduos)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1,46; 2,32]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1,29; 1,46[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1,16; 1,29[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[0,96; 1,16[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0,26; 0,96[</span><br>';
    return div;
};
var legenda_ISF_CONC_2011 = L.control({ position: "bottomleft" });
legenda_ISF_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice sintético de fecundidade (Indivíduos)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1,43; 1,91]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1,29; 1,43[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1,19; 1,29[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1,07; 1,19[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0,39; 1,07[</span><br>';
    return div;
};
var legenda_ISF_CONC_2001 = L.control({ position: "bottomleft" });
legenda_ISF_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice sintético de fecundidade (Indivíduos)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1,55; 2,15]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1,45; 1,55[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1,36; 1,45[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1,22; 1,36[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0,66; 1,22[</span><br>';
    return div;
};
var legenda_ISF_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_ISF_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice sintético de fecundidade (Indivíduos)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1,38; 1,74]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1,30; 1,38[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1,18; 1,30[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1,13; 1,18[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0,93; 1,13[</span><br>';
    return div;
};
var legenda_ISF_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_ISF_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice sintético de fecundidade (Indivíduos)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1,40; 1,57]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1,28; 1,40[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1,22; 1,28[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1,17; 1,22[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[1,06; 1,17[</span><br>';
    return div;
};
var legenda_ISF_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_ISF_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice sintético de fecundidade (Indivíduos)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1,56; 1,67]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1,45; 1,56[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1,36; 1,45[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1,29; 1,36[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[1,22; 1,29[</span><br>';
    return div;
};

//      1.4. Taxa de fecundidade
var legenda_TF_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TF_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de fecundidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[38,3; 62,1]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[34,3; 38,3[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[30,9; 34,3[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[26,1; 30,9[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[9,5; 26,1[</span><br>';
    return div;
};
var legenda_TF_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TF_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de fecundidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[40,6; 55]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[35,8; 40,6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[32,7; 35,8[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[29; 32,7[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[10,5; 29,0[</span><br>';
    return div;
};
var legenda_TF_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TF_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de fecundidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[46,1; 68,6]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[42,2; 46,1[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[38,8; 42,2[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[34,6; 38,8[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[16,2; 34,6[</span><br>';
    return div;
};
var legenda_TF_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TF_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de fecundidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[36,8; 46,5]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[34,9; 36,8[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[31,7; 34,9[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[30,6; 31,7[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[25,9; 30,6[</span><br>';
    return div;
};
var legenda_TF_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TF_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de fecundidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[37,6; 46,5]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[35,5; 37,6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[34,4; 35,5[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[31,8; 34,4[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[27,9; 31,8[</span><br>';
    return div;
};
var legenda_TF_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TF_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de fecundidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[44,2; 50,4]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[41,8; 44,2[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[38,9; 41,8[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[36,1; 38,9[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[32,8; 36,1[</span><br>';
    return div;
};


//      2. Óbitos
//          2.1. Óbitos totais
var legenda_OT_CONC_2019 = L.control({ position: "bottomleft" });
legenda_OT_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos totais</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[476; 6601]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[233; 476[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[142; 233[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[90; 142[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[9; 90[</span><br>';
    return div;
};
var legenda_OT_CONC_2011 = L.control({ position: "bottomleft" });
legenda_OT_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos totais</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[463; 6619]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[228; 463[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[143; 228[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[93; 143[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[3; 93[</span><br>';
    return div;
};
var legenda_OT_CONC_2001 = L.control({ position: "bottomleft" });
legenda_OT_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos totais</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[458; 8139]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[242; 458[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[154; 242[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[99; 154[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[4; 99[</span><br>';
    return div;
};
var legenda_OT_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_OT_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos totais</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[3721; 28270]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[3280; 3721[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2679; 3280[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1904; 2679[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[1288; 1904[</span><br>';
    return div;
};
var legenda_OT_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_OT_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos totais</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[3483; 25380]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[3012; 3483[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2481; 3012[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1888; 2481[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[1262; 1888[</span><br>';
    return div;
};
var legenda_OT_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_OT_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos totais</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[3500; 25649]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[3104; 3500[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2765; 3104[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1993; 2765[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[1271; 1993[</span><br>';
    return div;
};

//          2.2. Óbitos <1 ano
var legenda_O1_CONC_2019 = L.control({ position: "bottomleft" });
legenda_O1_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos <1 ano</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[4; 22]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[3; 4[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2; 3[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1; 2[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[0; 1[</span><br>';
    return div;
};
var legenda_O1_CONC_2011 = L.control({ position: "bottomleft" });
legenda_O1_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos <1 ano</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[4; 21]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[3; 4[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2; 3[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1; 2[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[0; 1[</span><br>';
    return div;
};
var legenda_O1_CONC_2001 = L.control({ position: "bottomleft" });
legenda_O1_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos <1 ano</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[5; 30]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[3; 5[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2; 3[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1; 2[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[0; 1[</span><br>';
    return div;
};
var legenda_O1_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_O1_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos <1 ano</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[7; 104]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[5; 7[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[2; 5[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[1; 2[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[0; 1[</span><br>';
    return div;
};
var legenda_O1_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_O1_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos <1 ano</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[12; 113]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[8; 12[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[3; 8[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[2; 3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[1; 2[</span><br>';
    return div;
};
var legenda_O1_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_O1_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Óbitos <1 ano</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[26; 138]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[17; 26[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[11; 17[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[5; 11[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[2; 5[</span><br>';
    return div;
};

//          2.3. Taxa de Mortalidade
var legenda_TM_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TM_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[23.3; 37.7]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[17.1; 23.3[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[13.3; 17.1[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[9.9; 13.3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[6.2; 9.9[</span><br>';
    return div;
};
var legenda_TM_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TM_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[23.3; 37.7]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[17.1; 23.3[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[13.3; 17.1[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[9.9; 13.3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[6.2; 9.9[</span><br>';
    return div;
};
var legenda_TM_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TM_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[23.3; 37.7]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[17.1; 23.3[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[13.3; 17.1[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[9.9; 13.3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[6.2; 9.9[</span><br>';
    return div;
};
var legenda_TM_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TM_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[15.6; 18.2]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[13.4; 15.6[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[12.3; 13.4[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[10.1; 12.3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[7.8; 10.1[</span><br>';
    return div;
};
var legenda_TM_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TM_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[15.6; 18.2]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[13.4; 15.6[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[12.3; 13.4[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[10.1; 12.3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[7.8; 10.1[</span><br>';
    return div;
};
var legenda_TM_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TM_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #980043"></i><span>[15.6; 18.2]</span><br>';
    div.innerHTML += '<i style="background: #dd1c77"></i><span>[13.4; 15.6[</span><br>';
    div.innerHTML += '<i style="background: #df65b0"></i><span>[12.3; 13.4[</span><br>';
    div.innerHTML += '<i style="background: #d7b5d8"></i><span>[10.1; 12.3[</span><br>';
    div.innerHTML += '<i style="background: #f1eef6"></i><span>[7.8; 10.1[</span><br>';
    return div;
};

//          2.4. Taxa de mortalidade infantil
var legenda_TMI_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TMI_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade infantil (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #7e1d7c"></i><span>[15.6; 45.5]</span><br>';
    div.innerHTML += '<i style="background: #83559e"></i><span>[8.8; 15.6[</span><br>';
    div.innerHTML += '<i style="background: #8b95c6"></i><span>[4.3; 8.8[</span><br>';
    div.innerHTML += '<i style="background: #b3cce2"></i><span>[0.9; 4.3[</span><br>';
    div.innerHTML += '<i style="background: #ecf4f7"></i><span>[0; 0.9[</span><br>';
    return div;
};
var legenda_TMI_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TMI_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade infantil (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #7e1d7c"></i><span>[27.8; 66.7]</span><br>';
    div.innerHTML += '<i style="background: #83559e"></i><span>[14.5; 27.8[</span><br>';
    div.innerHTML += '<i style="background: #8b95c6"></i><span>[7.3; 14.5[</span><br>';
    div.innerHTML += '<i style="background: #b3cce2"></i><span>[2.2; 7.3[</span><br>';
    div.innerHTML += '<i style="background: #ecf4f7"></i><span>[0; 2.2[</span><br>';
    return div;
};
var legenda_TMI_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TMI_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade infantil (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #7e1d7c"></i><span>[27.4; 52.6]</span><br>';
    div.innerHTML += '<i style="background: #83559e"></i><span>[12.8; 27.4[</span><br>';
    div.innerHTML += '<i style="background: #8b95c6"></i><span>[6.1; 12.8[</span><br>';
    div.innerHTML += '<i style="background: #b3cce2"></i><span>[2.0; 6.1[</span><br>';
    div.innerHTML += '<i style="background: #ecf4f7"></i><span>[0; 2.0[</span><br>';
    return div;
};
var legenda_TMI_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TMI_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade infantil (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #7e1d7c"></i><span>[3.38; 6.8]</span><br>';
    div.innerHTML += '<i style="background: #83559e"></i><span>[2.84; 3.38[</span><br>';
    div.innerHTML += '<i style="background: #8b95c6"></i><span>[1.98; 2.84[</span><br>';
    div.innerHTML += '<i style="background: #b3cce2"></i><span>[1.7; 1.98[</span><br>';
    div.innerHTML += '<i style="background: #ecf4f7"></i><span>[0; 1.7[</span><br>';
    return div;
};
var legenda_TMI_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TMI_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade infantil (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #7e1d7c"></i><span>[3.6; 5.3]</span><br>';
    div.innerHTML += '<i style="background: #83559e"></i><span>[3.0; 3.6[</span><br>';
    div.innerHTML += '<i style="background: #8b95c6"></i><span>[2.8; 3.0[</span><br>';
    div.innerHTML += '<i style="background: #b3cce2"></i><span>[1.7; 2.8[</span><br>';
    div.innerHTML += '<i style="background: #ecf4f7"></i><span>[1.1; 1.7[</span><br>';
    return div;
};
var legenda_TMI_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TMI_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de mortalidade infantil (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #7e1d7c"></i><span>[6.7; 10.3]</span><br>';
    div.innerHTML += '<i style="background: #83559e"></i><span>[5.1; 6.7[</span><br>';
    div.innerHTML += '<i style="background: #8b95c6"></i><span>[4.0; 5.1[</span><br>';
    div.innerHTML += '<i style="background: #b3cce2"></i><span>[3.0; 4.0[</span><br>';
    div.innerHTML += '<i style="background: #ecf4f7"></i><span>[1.9; 3.0[</span><br>';
    return div;
};


//  4. População
//      4.1. População residente
var legenda_PR_CONC_2019 = L.control({ position: "bottomleft" });
legenda_PR_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População residente (hab.)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[45076; 563149]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[20945; 45076[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[11374; 20945[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[6679; 11374[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[426; 6679[</span><br>';
    return div;
};
var legenda_PR_CONC_2011 = L.control({ position: "bottomleft" });
legenda_PR_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População residente (hab.)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[47729; 547733]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[20522; 47729[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[10828; 20522[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[6049; 10828[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[430; 6049[</span><br>';
    return div;
};
var legenda_PR_CONC_2001 = L.control({ position: "bottomleft" });
legenda_PR_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População residente (hab.)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[45076; 563149]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[20945; 45076[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[11374; 20945[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[6679; 11374[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[426; 6679[</span><br>';
    return div;
};
var legenda_PR_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_PR_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População residente (hab.)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[400937; 2678695]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[275809; 400937[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[242544; 275809[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[126647; 242544[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[94232; 126647[</span><br>';
    return div;
};
var legenda_PR_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_PR_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População residente (hab.)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[425411; 2821876]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[267785; 425411[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[244836; 267785[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[118506; 244836[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[89063; 118506[</span><br>';
    return div;
};
var legenda_PR_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_PR_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População residente (hab.)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[400937; 2678695]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[275809; 400937[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[242544; 275809[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[126647; 242544[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[94232; 126647[</span><br>';
    return div;
};

//      4.2. Densidade Populacional
var legenda_DP_CONC_2019 = L.control({ position: "bottomleft" });
legenda_DP_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Densidade populacional (hab./km<sup>2</sup>)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[552; 1367]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[190; 552[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[121; 190[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[70; 121[</span><br>';
    div.innerHTML += '<i style="background: #ffffb2"></i><span>[28; 70[</span><br>';
    return div;
};
var legenda_DP_CONC_2011 = L.control({ position: "bottomleft" });
legenda_DP_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Densidade populacional (hab./km<sup>2</sup>)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[249.1; 7376.1]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[103.8; 249.1[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[48.1; 103.8[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[23; 48.1[</span><br>';
    div.innerHTML += '<i style="background: #ffffb2"></i><span>[5; 21[</span><br>';
    return div;
};
var legenda_DP_CONC_2001 = L.control({ position: "bottomleft" });
legenda_DP_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Densidade populacional (hab./km<sup>2</sup>)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[226; 7375.5]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[103.5; 226[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[51.7; 103.5[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[22.5; 51.7[</span><br>';
    div.innerHTML += '<i style="background: #ffffb2"></i><span>[6.5; 22.5[</span><br>';
    return div;
};
var legenda_DP_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_DP_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Densidade populacional (hab./km<sup>2</sup>)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[222,3; 946,8]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[100,9; 222,3[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[54; 100,9[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[19,9; 54[</span><br>';
    div.innerHTML += '<i style="background: #ffffb2"></i><span>[13,6; 19,9[</span><br>';
    return div;
};
var legenda_DP_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_DP_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Densidade populacional (hab./km<sup>2</sup>)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011)</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[236.5; 941]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[106.4; 236.5[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[57.9; 106.4[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[21.2; 57.9[</span><br>';
    div.innerHTML += '<i style="background: #ffffb2"></i><span>[14.8; 21.2[</span><br>';
    return div;
};
var legenda_DP_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_DP_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Densidade populacional (hab./km<sup>2</sup>)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[236.8; 899.6]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[108.8; 236.8[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[56.4; 108.8[</span><br>';
    div.innerHTML += '<i style="background: #fecc5c"></i><span>[22.9; 56.4[</span><br>';
    div.innerHTML += '<i style="background: #ffffb2"></i><span>[15.8; 22.9[</span><br>';
    return div;
};



//      3. Evolução da população
//          3.1 Crescimento Natural
var legenda_CN_CONC_2019 = L.control({ position: "bottomleft" });
legenda_CN_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento Natural</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[-27; 1280]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-59; -27[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-87; -59[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-140; -87[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-1017; -140[</span><br>';
    return div;
};
var legenda_CN_CONC_2011 = L.control({ position: "bottomleft" });
legenda_CN_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento Natural</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[-6; 1823]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-36; -6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-66; -36[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-101; -66[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-886; -101[</span><br>';
    return div;
};
var legenda_CN_CONC_2001 = L.control({ position: "bottomleft" });
legenda_CN_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento Natural</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[71; 2936]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-19; 71[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-47; -19[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-82; -47[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-2535; -82[</span><br>';
    return div;
};
var legenda_CN_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_CN_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento Natural</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[-585; 1382]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-922; -585[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-1206; -922[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-1580; -1206[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-2421; -1580[</span><br>';
    return div;
};
var legenda_CN_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_CN_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento Natural</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[373; 1382]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-466; 373[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-820; -466[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1010; -820[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-1780; 1010[</span><br>';
    return div;
};
var legenda_CN_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_CN_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento Natural</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[521; 5955]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-429; 521[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-609; -429[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-939; -609[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-1492; -939[</span><br>';
    return div;
};

//          3.2. Taxa de crescimento natural
var legenda_TCN_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TCN_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento natural (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #e1161a"></i><span>[0; 4,2]</span><br>';
    div.innerHTML += '<i style="background: #afd2e6"></i><span>[-6,8; 0[</span><br>';
    div.innerHTML += '<i style="background: #3b8cc4"></i><span>[-10,6; -6,8[</span><br>';
    div.innerHTML += '<i style="background: #1a3262"></i><span>[-32,7; -10,6[</span><br>';
    return div;
};
var legenda_TCN_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TCN_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento natural (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #e1161a"></i><span>[0; 5,3]</span><br>';
    div.innerHTML += '<i style="background: #afd2e6"></i><span>[-4,7; 0[</span><br>';
    div.innerHTML += '<i style="background: #3b8cc4"></i><span>[-8,4; -4,7[</span><br>';
    div.innerHTML += '<i style="background: #1a3262"></i><span>[-23,8; -8,4[</span><br>';
    return div;
};
var legenda_TCN_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TCN_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento natural (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #e1161a"></i><span>[0; 8,4]</span><br>';
    div.innerHTML += '<i style="background: #afd2e6"></i><span>[-3,1; 0[</span><br>';
    div.innerHTML += '<i style="background: #3b8cc4"></i><span>[-7,2; -3,1[</span><br>';
    div.innerHTML += '<i style="background: #1a3262"></i><span>[-22; -7,2[</span><br>';
    return div;
};
var legenda_TCN_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TCN_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento natural (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #e1161a"></i><span>[0; 0,6]</span><br>';
    div.innerHTML += '<i style="background: #afd2e6"></i><span>[-5; 0[</span><br>';
    div.innerHTML += '<i style="background: #3b8cc4"></i><span>[-10; -5[</span><br>';
    div.innerHTML += '<i style="background: #1a3262"></i><span>[-11,8; -10[</span><br>';
    return div;
};
var legenda_TCN_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TCN_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento natural (‰)</h5>";
    div.innerHTML += "<h4> NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #e1161a"></i><span>[0; 2,3]</span><br>';
    div.innerHTML += '<i style="background: #afd2e6"></i><span>[-3,4; 0[</span><br>';
    div.innerHTML += '<i style="background: #3b8cc4"></i><span>[-5,3; -3,4[</span><br>';
    div.innerHTML += '<i style="background: #1a3262"></i><span>[-9,3; -5,3[</span><br>';
    return div;
};
var legenda_TCN_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TCN_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento natural (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #e1161a"></i><span>[0; 5,5]</span><br>';
    div.innerHTML += '<i style="background: #afd2e6"></i><span>[-2,4; 0[</span><br>';
    div.innerHTML += '<i style="background: #3b8cc4"></i><span>[-4,8; -2,4[</span><br>';
    div.innerHTML += '<i style="background: #1a3262"></i><span>[-8,3; -4,8[</span><br>';
    return div;
};
//      3.3. Saldo migratório
var legenda_SM_CONC_2019 = L.control({ position: "bottomleft" });
legenda_SM_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Saldo migratório</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[179; 2970]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[68; 179[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[37; 68[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[13; 37[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-470; 13[</span><br>';
    return div;
};
var legenda_SM_CONC_2011 = L.control({ position: "bottomleft" });
legenda_SM_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Saldo migratório</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[29; 1756]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-10; 29[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-40; -10[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-104; -40[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-10124; -104[</span><br>';
    return div;
};
var legenda_SM_CONC_2001 = L.control({ position: "bottomleft" });
legenda_SM_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Saldo migratório</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[231; 3955]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[69; 231[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[25; 69[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-5; 25[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-944; -5[</span><br>';
    return div;
};
var legenda_SM_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_SM_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Saldo migratório</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1851; 15558]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[988; 1851[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[676; 988[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[265; 676[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-694; 265[</span><br>';
    return div;
};
var legenda_SM_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_SM_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Saldo migratório</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[53; 641]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-480; 53[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-670; -480[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-1530; -670[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-5106; -1530[</span><br>';
    return div;
};
var legenda_SM_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_SM_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Saldo migratório</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[2135; 21011]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1409; 2135[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[576; 1409[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[209; 576[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-405; 209[</span><br>';
    return div;
};
//      3.4. Taxa de crescimento migratório
var legenda_TCM_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TCM_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento migratório (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #c01414"></i><span>[8.96; 20.83]</span><br>';
    div.innerHTML += '<i style="background: #d44837"></i><span>[6.4; 8.96[</span><br>';
    div.innerHTML += '<i style="background: #e28679"></i><span>[4.63; 6.4[</span><br>';
    div.innerHTML += '<i style="background: #eeb8ac"></i><span>[2.96; 4.63[</span><br>';
    div.innerHTML += '<i style="background: #f8e4dd"></i><span>[0; 2.96[</span><br>';
    div.innerHTML += '<i style="background: #72b2d8"></i><span>[-8,96; 0[</span><br>';
    return div;
};
var legenda_TCM_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TCM_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento migratório (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #c01414"></i><span>[2.67; 37.21]</span><br>';
    div.innerHTML += '<i style="background: #d44837"></i><span>[0; 2.67[</span><br>';
    div.innerHTML += '<i style="background: #e28679"></i><span>[-2.01; 0[</span><br>';
    div.innerHTML += '<i style="background: #eeb8ac"></i><span>[-3.79; -2.01[</span><br>';
    div.innerHTML += '<i style="background: #f8e4dd"></i><span>[-6.33; -3.79[</span><br>';
    div.innerHTML += '<i style="background: #72b2d8"></i><span>[-26.7; -6.33[</span><br>';
    return div;
};
var legenda_TCM_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TCM_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento migratório (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #c01414"></i><span>[10.22; 41.61]</span><br>';
    div.innerHTML += '<i style="background: #d44837"></i><span>[5.6; 10.22[</span><br>';
    div.innerHTML += '<i style="background: #e28679"></i><span>[3.61; 5.6[</span><br>';
    div.innerHTML += '<i style="background: #eeb8ac"></i><span>[1.54; 3.61[</span><br>';
    div.innerHTML += '<i style="background: #f8e4dd"></i><span>[0; 1.54[</span><br>';
    div.innerHTML += '<i style="background: #72b2d8"></i><span>[-7.84; 0[</span><br>';
    return div;
};
var legenda_TCM_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TCM_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento migratório (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #c01414"></i><span>[8; 8.87]</span><br>';
    div.innerHTML += '<i style="background: #d44837"></i><span>[6; 8[</span><br>';
    div.innerHTML += '<i style="background: #e28679"></i><span>[4; 6[</span><br>';
    div.innerHTML += '<i style="background: #eeb8ac"></i><span>[2; 4[</span><br>';
    div.innerHTML += '<i style="background: #f8e4dd"></i><span>[0; 2[</span><br>';
    div.innerHTML += '<i style="background: #72b2d8"></i><span>[-1.67, 0[</span><br>';
    return div;
};
var legenda_TCM_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TCM_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento migratório (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #c01414"></i><span>[0; 2.5]</span><br>';
    div.innerHTML += '<i style="background: #d44837"></i><span>[-0.7; 0[</span><br>';
    div.innerHTML += '<i style="background: #e28679"></i><span>[-2.27; -0.77[</span><br>';
    div.innerHTML += '<i style="background: #eeb8ac"></i><span>[-2.76; -2.27[</span><br>';
    div.innerHTML += '<i style="background: #f8e4dd"></i><span>[-4.4; -2.76[</span><br>';
    div.innerHTML += '<i style="background: #72b2d8"></i><span>[-13.05; -4.4[</span><br>';
    return div;
};
var legenda_TCM_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TCM_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento migratório (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #c01414"></i><span>[7.84; 20.4]</span><br>';
    div.innerHTML += '<i style="background: #d44837"></i><span>[5.62; 7.84[</span><br>';
    div.innerHTML += '<i style="background: #e28679"></i><span>[3.7; 5.62[</span><br>';
    div.innerHTML += '<i style="background: #eeb8ac"></i><span>[-2.64; 3.7[</span><br>';
    div.innerHTML += '<i style="background: #f8e4dd"></i><span>[0; 2.64[</span><br>';
    div.innerHTML += '<i style="background: #72b2d8"></i><span>[-0.93; 0[</span><br>';
    return div;
};

//          3.5. Crescimento Efetivo
var legenda_CE_CONC_2019 = L.control({ position: "bottomleft" });
legenda_CE_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento efetivo</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[55; 2968]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[5; 55[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-36; 5[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-85; -36[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-632; -85[</span><br>';
    return div;
};
var legenda_CE_CONC_2011 = L.control({ position: "bottomleft" });
legenda_CE_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento efetivo</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[6; 2526]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[58; 6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-106; 58[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-188; -106[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-11010; -188[</span><br>';
    return div;
};
var legenda_CE_CONC_2001 = L.control({ position: "bottomleft" });
legenda_CE_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento efetivo</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[306; 4493]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[63; 306[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-19; 63[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-63; -19[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-1761; -63[</span><br>';
    return div;
};
var legenda_CE_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_CE_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento efetivo</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[550; 16940]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-92; 550[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-398; -92[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-592; -398[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-1621; -592[</span><br>';
    return div;
};
var legenda_CE_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_CE_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento efetivo</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[-234; 4289]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[-1083; -234[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[-1416; -1083[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-2084; -1416[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-5164; -2084[</span><br>';
    return div;
};
var legenda_CE_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_CE_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Crescimento efetivo</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[3530; 26966]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1549; 3530[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[184; 1549[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[-441; 184[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[-1295; -441[</span><br>';
    return div;
};

//          3.6. Taxa de Crescimento Efetivo
var legenda_TCE_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TCE_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento efetivo (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #e34a33"></i><span>[4,7; 21,4]</span><br>';
    div.innerHTML += '<i style="background: #fdbb84"></i><span>[0; 4,7[</span><br>';
    div.innerHTML += '<i style="background: #7fcdbbf"></i><span>[-11,3; 0[</span><br>';
    div.innerHTML += '<i style="background: #2c7fb8"></i><span>[-39,4; -11,3[</span><br>';
    return div;
};
var legenda_TCE_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TCE_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento efetivo (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #e34a33"></i><span>[4,7; 21,4]</span><br>';
    div.innerHTML += '<i style="background: #fdbb84"></i><span>[0; 4,7[</span><br>';
    div.innerHTML += '<i style="background: #7fcdbbf"></i><span>[-11,3; 0[</span><br>';
    div.innerHTML += '<i style="background: #2c7fb8"></i><span>[-39,4; -11,3[</span><br>';
    return div;
};
var legenda_TCE_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TCE_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento efetivo (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #e34a33"></i><span>[4,7; 21,4]</span><br>';
    div.innerHTML += '<i style="background: #fdbb84"></i><span>[0; 4,7[</span><br>';
    div.innerHTML += '<i style="background: #7fcdbbf"></i><span>[-11,3; 0[</span><br>';
    div.innerHTML += '<i style="background: #2c7fb8"></i><span>[-39,4; -11,3[</span><br>';
    return div;
};
var legenda_TCE_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TCE_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento efetivo (‰)</h5>";
    div.innerHTML += "<h4>Nuts III, 2019</h4>";
    div.innerHTML += '<i style="background: #e34a33"></i><span>[5; 5,9]</span><br>';
    div.innerHTML += '<i style="background: #fdbb84"></i><span>[0; 5[</span><br>';
    div.innerHTML += '<i style="background: #7fcdbbf"></i><span>[-5; 0[</span><br>';
    div.innerHTML += '<i style="background: #2c7fb8"></i><span>[-9; -5[</span><br>';
    return div;
};
var legenda_TCE_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TCE_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento efetivo (‰)</h5>";
    div.innerHTML += "<h4>Nuts III, 2011</h4>";
    div.innerHTML += '<i style="background: #e34a33"></i><span>[5; 5,9]</span><br>';
    div.innerHTML += '<i style="background: #fdbb84"></i><span>[0; 5[</span><br>';
    div.innerHTML += '<i style="background: #7fcdbbf"></i><span>[-5; 0[</span><br>';
    div.innerHTML += '<i style="background: #2c7fb8"></i><span>[-9; -5[</span><br>';
    return div;
};
var legenda_TCE_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TCE_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de crescimento efetivo (‰)</h5>";
    div.innerHTML += "<h4>Nuts III, 2001</h4>";
    div.innerHTML += '<i style="background: #e34a33"></i><span>[5; 5,9]</span><br>';
    div.innerHTML += '<i style="background: #fdbb84"></i><span>[0; 5[</span><br>';
    div.innerHTML += '<i style="background: #7fcdbbf"></i><span>[-5; 0[</span><br>';
    div.innerHTML += '<i style="background: #2c7fb8"></i><span>[-9; -5[</span><br>';
    return div;
};

//  5. População estrangeira
//      5.1. População estrangeira com estatuto legal
var legenda_PEL_CONC_2019 = L.control({ position: "bottomleft" });
legenda_PEL_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População estrangeira com estatuto legal (hab.)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[1495; 98151]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[461; 1495[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[208; 461[</span><br>';
    div.innerHTML += '<i style="background: #fecc5d"></i><span>[90; 208[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[10; 90[</span><br>';
    return div;
};
var legenda_PEL_CONC_2011 = L.control({ position: "bottomleft" });
legenda_PEL_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População estrangeira com estatuto legal (hab.)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[1119; 44128]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[395; 1119[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[159; 395[</span><br>';
    div.innerHTML += '<i style="background: #fecc5d"></i><span>[78; 159[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[7; 78[</span><br>';
    return div;
};
var legenda_PEL_CONC_2008 = L.control({ position: "bottomleft" });
legenda_PEL_CONC_2008.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População estrangeira com estatuto legal (hab.)</h5>";
    div.innerHTML += "<h4>Município, 2008</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[1100; 42396]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[346; 1100[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[129; 346[</span><br>';
    div.innerHTML += '<i style="background: #fecc5d"></i><span>[62; 129[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[4; 62[</span><br>';
    return div;
};
var legenda_PEL_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_PEL_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População estrangeira com estatuto legal (hab.)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[12995; 298175]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[8579; 12995[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[4640; 8579[</span><br>';
    div.innerHTML += '<i style="background: #fecc5d"></i><span>[2789; 4640[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[1182; 2789[</span><br>';
    return div;
};
var legenda_PEL_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_PEL_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População estrangeira com estatuto legal (hab.)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[10239; 217779]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[6386; 10239[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[3442; 6386[</span><br>';
    div.innerHTML += '<i style="background: #fecc5d"></i><span>[2329; 3442[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[1047; 2329[</span><br>';
    return div;
};
var legenda_PEL_NUTS_2008 = L.control({ position: "bottomleft" });
legenda_PEL_NUTS_2008.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>População estrangeira com estatuto legal (hab.)</h5>";
    div.innerHTML += "<h4>NUTS III, 2008</h4>";
    div.innerHTML += '<i style="background: #bd0026"></i><span>[10145; 224089]</span><br>';
    div.innerHTML += '<i style="background: #f03b20"></i><span>[5367; 10145[</span><br>';
    div.innerHTML += '<i style="background: #fd8d3c"></i><span>[2960; 5367[</span><br>';
    div.innerHTML += '<i style="background: #fecc5d"></i><span>[2207; 2960[</span><br>';
    div.innerHTML += '<i style="background: #feffb1"></i><span>[896; 2207[</span><br>';
    return div;
};

//  6. Casamentos e divóricos
//      6.1. Taxa de divorcialidade (1960, 2001, 2011, 2019)
var legenda_TD_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TD_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de divorcialidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[2.3; 3.7]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[2; 2.3[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1.7; 2[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1.3; 1.7[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0; 1.3[</span><br>';
    return div;
};
var legenda_TD_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TD_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de divorcialidade(‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[2.9; 4.9]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[2.5; 2.9[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[2.1; 2.5[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1.6; 2.1[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0; 1.6[</span><br>';
    return div;
};
var legenda_TD_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TD_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de divorcialidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[2.1; 5.5]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1.5; 2.1[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1.1; 1.5[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[0.7; 1.1[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0; 0.7[</span><br>';
    return div;
};
var legenda_TD_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TD_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de divorcialidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[2; 2.4]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1.9; 2[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1.8; 1.9[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1.6; 1.8[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[1.5; 1.6[</span><br>';
    return div;
};
var legenda_TD_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TD_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de divorcialidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[2.7; 3.1]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[2.5; 2.7[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[2.3; 2.5[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[2.1; 2.3[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[1.9; 2.1[</span><br>';
    return div;
};
var legenda_TD_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TD_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de divorcialidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[1.9; 2.6]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[1.6; 1.9[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[1.4; 1.6[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[1.2; 1.4[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0.9; 1.2[</span><br>';
    return div;
};
//      6.2. Taxa de nupcialidade (2001, 2011, 2019)
var legenda_TNUP_CONC_2019 = L.control({ position: "bottomleft" });
legenda_TNUP_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de nupcialidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[4.3; 24.4]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[3.3; 4.3[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[2.7; 3.3[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[2; 2.7[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0; 2[</span><br>';
    return div;
};
var legenda_TNUP_CONC_2011 = L.control({ position: "bottomleft" });
legenda_TNUP_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de nupcialidade(‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[4.2; 6.8]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[3.6; 4.2[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[3; 3.6[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[2.4; 3[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0; 2.4[</span><br>';
    return div;
};
var legenda_TNUP_CONC_2001 = L.control({ position: "bottomleft" });
legenda_TNUP_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de nupcialidade (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[6.5; 10]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[5.7; 6.5[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[5.1; 5.7[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[4.3; 5.1[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[0; 4.3[</span><br>';
    return div;
};
var legenda_TNUP_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_TNUP_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de nupcialidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[3.6; 3.9]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[3.1; 3.6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[2.7; 3.1[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[2.6; 2.7[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[2.1; 2.6[</span><br>';
    return div;
};
var legenda_TNUP_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_TNUP_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de nupcialidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[3.9; 4.1]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[3.6; 3.9[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[3.3; 3.6[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[2.9; 3.3[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[2.2; 2.9[</span><br>';
    return div;
};
var legenda_TNUP_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_TNUP_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Taxa de nupcialidade (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #004f8a"></i><span>[6.6; 7.1]</span><br>';
    div.innerHTML += '<i style="background: #006db2"></i><span>[6; 6.6[</span><br>';
    div.innerHTML += '<i style="background: #00a6e2"></i><span>[5.3; 6[</span><br>';
    div.innerHTML += '<i style="background: #5ac5f3"></i><span>[4.7; 5.3[</span><br>';
    div.innerHTML += '<i style="background: #d3edfc"></i><span>[4; 4.7[</span><br>';
    return div;
};

//  7. Indicadores de envelhecimento
//      7.1. Índice de envelhecimento (2001, 2011, 2019)
var legenda_IE_CONC_2019 = L.control({ position: "bottomleft" });
legenda_IE_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de envelhecimento (‰)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #024823"></i><span>[312.8; 704.6]</span><br>';
    div.innerHTML += '<i style="background: #007038"></i><span>[261.6; 312.8[</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[214.7; 261.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[172.5; 214.7[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[145; 172.5[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[96.4; 145[</span><br>';
    return div;
};
var legenda_IE_CONC_2011 = L.control({ position: "bottomleft" });
legenda_IE_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de envelhecimento (‰)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #024823"></i><span>[267.9; 683.2]</span><br>';
    div.innerHTML += '<i style="background: #007038"></i><span>[203.2; 267.9[</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[171.7; 203.2[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[137; 171.7[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[106.2; 137[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[58; 106.2[</span><br>';
    return div;
};
var legenda_IE_CONC_2001 = L.control({ position: "bottomleft" });
legenda_IE_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de envelhecimento (‰)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #024823"></i><span>[212.7; 529.6]</span><br>';
    div.innerHTML += '<i style="background: #007038"></i><span>[168.5; 212.7[</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[140; 168.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[113.7; 140[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[88.9; 113.7[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[38.8; 88.9[</span><br>';
    return div;
};
var legenda_IE_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_IE_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de envelhecimento (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #024823"></i><span>[255.1; 326.2]</span><br>';
    div.innerHTML += '<i style="background: #007038"></i><span>[221.3; 255.1[</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[214; 221.3[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[171.7; 214[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[145.9; 171.7[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[129.5; 145.9[</span><br>';
    return div;
};
var legenda_IE_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_IE_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de envelhecimento (‰)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #024823"></i><span>[207.9; 254]</span><br>';
    div.innerHTML += '<i style="background: #007038"></i><span>[171.4; 207.9[</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[147.5; 171.4[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[127.3; 147.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[91.5; 127.3 [</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[71.6; 91.5[</span><br>';
    return div;
};
var legenda_IE_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_IE_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>Índice de envelhecimento (‰)</h4>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #024823"></i><span>[194.1; 237.1]</span><br>';
    div.innerHTML += '<i style="background: #007038"></i><span>[152.6; 194.1[</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[127.6.5; 152.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[107.5; 127.6[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[75.1; 107.5[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[56.6; 75.1[</span><br>';
    return div;
};
//      7.2.
var legenda_IL_CONC_2019 = L.control({ position: "bottomleft" });
legenda_IL_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de longevidade (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[57.8; 73.3]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[54.4; 57.8[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[50.9; 54.4[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[46.5; 50.9[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[38.1; 46.5[</span><br>';
    return div;
};
var legenda_IL_CONC_2011 = L.control({ position: "bottomleft" });
legenda_IL_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de longevidade(N.º)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[55.5; 68.1]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[52.5; 55.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[50.1; 52.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[46.2; 50.1[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[37.4; 46.2[</span><br>';
    return div;
};
var legenda_IL_CONC_2001 = L.control({ position: "bottomleft" });
legenda_IL_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de longevidade (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[46.6; 51.6]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[44.1; 46.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[42.4; 44.1[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[40.5; 42.4[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[35.5; 40.5[</span><br>';
    return div;
};
var legenda_IL_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_IL_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de longevidade (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[55; 57.8]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[52.9; 55[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[49.9; 52.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[44.8; 49.9[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[43.3; 44.8[</span><br>';
    return div;
};
var legenda_IL_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_IL_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de longevidade (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[53.5; 58.4]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[51.3; 53.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[48.8; 51.3[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[46.3; 48.8[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[44.8; 46.3[</span><br>';
    return div;
};
var legenda_IL_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_IL_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de longevidade (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[44.6; 47.4]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[43.5; 44.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[41.9; 43.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[40.2; 41.9[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[39; 40.2[</span><br>';
    return div;
};
//      7.3. IDJ
var legenda_IDJ_CONC_2019 = L.control({ position: "bottomleft" });
legenda_IDJ_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de jovens (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[21.2; 29.8]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[19.5; 21.2[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[17.9; 19.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[16.2; 17.9[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[10.1; 16.2[</span><br>';
    return div;
};
var legenda_IDJ_CONC_2011 = L.control({ position: "bottomleft" });
legenda_IDJ_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de jovens(N.º)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[24; 34.2]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[22.3; 24[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[20.8; 22.3[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[19; 20.8[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[11; 19[</span><br>';
    return div;
};
var legenda_IDJ_CONC_2001 = L.control({ position: "bottomleft" });
legenda_IDJ_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de jovens (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[26.6; 44.8]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[24.1; 26.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[22.5; 24.1[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[20.9; 22.5[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[14.8; 20.9[</span><br>';
    return div;
};
var legenda_IDJ_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_IDJ_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de jovens (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[20.7; 25.6]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[19.7; 20.7[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[18.8; 19.7[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[17.6; 18.8[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[15.5; 17.6[</span><br>';
    return div;
};
var legenda_IDJ_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_IDJ_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de jovens (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[23.6; 26.1]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[22; 23.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[21.1; 22[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[20; 21.1[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[18.4; 20[</span><br>';
    return div;
};
var legenda_IDJ_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_IDJ_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de jovens (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[28.2; 32.9]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[24.2; 28.2[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[22.3; 24.2[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[21.9; 22.3[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[20; 21.9[</span><br>';
    return div;
};
//7.4
var legenda_IDI_CONC_2019 = L.control({ position: "bottomleft" });
legenda_IDI_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de idosos (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[49.8; 97.9]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[41.7; 49.8[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[35.5; 41.7[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[29.4; 35.5[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[12.4; 29.4[</span><br>';
    return div;
};
var legenda_IDI_CONC_2011 = L.control({ position: "bottomleft" });
legenda_IDI_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de idosos(N.º)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[46.5; 92.3]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[37.9; 46.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[31.3; 37.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[25.2; 31.3[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[11.8; 25.2[</span><br>';
    return div;
};
var legenda_IDI_CONC_2001 = L.control({ position: "bottomleft" });
legenda_IDI_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de idosos (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[42.9; 82.7]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[34.6; 42.9[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[28.7; 34.6[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[22.4; 28.7[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[12.2; 22.4[</span><br>';
    return div;
};
var legenda_IDI_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_IDI_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de idosos (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[43; 50.6]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[39.9; 43[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[35.3; 39.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[26.8; 35.3[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[21.2; 26.8[</span><br>';
    return div;
};
var legenda_IDI_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_IDI_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de idosos (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[39; 48.4]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[35.3; 39[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[30; 35.3[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[20.6; 30[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[18.7; 20.6[</span><br>';
    return div;
};
var legenda_IDI_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_IDI_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência de idosos (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[35.7; 47.5]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[30.9; 35.7[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[27.2; 30.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[19.8; 27.2[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[17; 19.8[</span><br>';
    return div;
};

//      7.5. IDT
var legenda_IDT_CONC_2019 = L.control({ position: "bottomleft" });
legenda_IDT_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência total (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[66.5; 112.9]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[60.5; 66.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[54.8; 60.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[49.3; 54.8[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[36; 49.3[</span><br>';
    return div;
};
var legenda_IDT_CONC_2011 = L.control({ position: "bottomleft" });
legenda_IDT_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência total(N.º)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[66; 108.1]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[58.9; 66[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[54.3; 58.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[49; 54.3[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[37.3; 49[</span><br>';
    return div;
};
var legenda_IDT_CONC_2001 = L.control({ position: "bottomleft" });
legenda_IDT_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência total (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[65.7; 100.9]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[58.5; 65.7[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[52.8; 58.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[47.7; 52.8[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[37.1; 47.7[</span><br>';
    return div;
};
var legenda_IDT_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_IDT_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência total (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[62.7; 67.9]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[59.5; 62.7[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[55.7; 59.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[45.5; 55.7[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[43.1; 45.5[</span><br>';
    return div;
};
var legenda_IDT_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_IDT_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência total (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[61.6; 67.4]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[57.4; 61.6[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[53.6; 57.4[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[44.9; 53.6[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[42.9; 44.9[</span><br>';
    return div;
};
var legenda_IDT_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_IDT_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de dependência total (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[58.3; 67.5]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[54.4; 58.3[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[51.1; 54.4[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[47.7; 51.1[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[42.7; 47.7[</span><br>';
    return div;
};

//      7.6. 
var legenda_ISP_CONC_2019 = L.control({ position: "bottomleft" });
legenda_ISP_CONC_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de sustentabilidade potencial (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[3.5; 8]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[2.9; 3.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[2.4; 2.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[2; 2.4[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[1; 2[</span><br>';
    return div;
};
var legenda_ISP_CONC_2011 = L.control({ position: "bottomleft" });
legenda_ISP_CONC_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de sustentabilidade potencial(N.º)</h5>";
    div.innerHTML += "<h4>Município, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[4.1; 8.5]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[3.3; 4.1[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[2.7; 3.3[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[2.2; 2.7[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[1.1; 2.2[</span><br>';
    return div;
};
var legenda_ISP_CONC_2001 = L.control({ position: "bottomleft" });
legenda_ISP_CONC_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de sustentabilidade potencial (N.º)</h5>";
    div.innerHTML += "<h4>Município, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[4.5; 8.2]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[3.5; 4.5[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[2.9; 3.5[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[2.3; 2.9[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[1.2; 2.3[</span><br>';
    return div;
};
var legenda_ISP_NUTS_2019 = L.control({ position: "bottomleft" });
legenda_ISP_NUTS_2019.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de sustentabilidade potencial (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2019</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[3.7; 4.7]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[2.9; 3.7[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[2.5; 2.9[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[2.2; 2.5[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[2; 2.2[</span><br>';
    return div;
};
var legenda_ISP_NUTS_2011 = L.control({ position: "bottomleft" });
legenda_ISP_NUTS_2011.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de sustentabilidade potencial (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2011</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[4.8; 5.3]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[3.4; 4.8[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[2.8; 3.4[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[2.3; 2.8[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[2.1; 2.3[</span><br>';
    return div;
};
var legenda_ISP_NUTS_2001 = L.control({ position: "bottomleft" });
legenda_ISP_NUTS_2001.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Índice de sustentabilidade potencial (N.º)</h5>";
    div.innerHTML += "<h4>NUTS III, 2001</h4>";
    div.innerHTML += '<i style="background: #007038"></i><span>[5.1; 5.9]</span><br>';
    div.innerHTML += '<i style="background: #239b37"></i><span>[3.7; 5.1[</span><br>';
    div.innerHTML += '<i style="background: #a0b939"></i><span>[3.2; 3.7[</span><br>';
    div.innerHTML += '<i style="background: #c3da82"></i><span>[2.7; 3.2[</span><br>';
    div.innerHTML += '<i style="background: #d6e9cd"></i><span>[2.1; 2.7[</span><br>';
    return div;
};

var legenda_ativa = legenda_TN_CONC_2019;
legenda_ativa.addTo(map);
//  Mudar legenda
//      1. Nascimentos e fecundidade
//          1.1. Nados-vivos
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Nados-vivos, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_NV_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Nados-vivos, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_NV_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Nados-vivos, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_NV_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Nados-vivos, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_NV_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Nados-vivos, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_NV_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Nados-vivos, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_NV_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
//          1.2. Taxa de natalidade
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de natalidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TN_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de natalidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TN_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Taxa de natalidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TN_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Taxa de natalidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TN_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Taxa de natalidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TN_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de natalidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TN_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
//          1.3. Índice sintético de fecundidade
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice sintético de fecundidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISF_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice sintético de fecundidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISF_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Índice sintético de fecundidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISF_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Índice sintético de fecundidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISF_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Índice sintético de fecundidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISF_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice sintético de fecundidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISF_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
//          1.3. Taxa de fecundidade
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de fecundidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TF_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de fecundidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TF_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Taxa de fecundidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TF_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Taxa de fecundidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TF_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Taxa de fecundidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TF_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de fecundidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TF_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      4.1. População residente
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "População residente, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PR_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "População residente, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PR_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "População residente, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PR_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "População residente, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PR_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "População residente, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PR_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "População residente, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PR_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
//      4.2. Densidade populacional
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Densidade populacional, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_DP_CONC_2019;
        legenda_ativa.addTo(map);        
    }else if (eventLayer.name === "Densidade populacional, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_DP_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Densidade populacional, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_DP_CONC_2001;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Densidade populacional, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_DP_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Densidade populacional, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_DP_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Densidade populacional, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_DP_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      3.1 Crescimento Natural
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Crescimento Natural, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CN_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Crescimento Natural, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CN_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Crescimento Natural, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CN_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Crescimento Natural, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CN_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Crescimento Natural, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CN_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Crescimento Natural, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CN_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      3.2. Taxa de crescimento natural
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de crescimento natural, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCN_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento natural, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCN_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento natural, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCN_CONC_2001;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento natural, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCN_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento natural, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCN_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento natural, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCN_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      3.3. Saldo migratório
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Saldo migratório, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_SM_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Saldo migratório, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_SM_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Saldo migratório, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_SM_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Saldo migratório, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_SM_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Saldo migratório, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_SM_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Saldo migratório, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_SM_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      3.4 Taxa de crescimento migratório
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de crescimento migratório, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCM_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento migratório, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCM_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento migratório, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCM_CONC_2001;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento migratório, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCM_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento migratório, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCM_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento migratório, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCM_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      3.5. Crescimento efetivo
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Crescimento efetivo, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CE_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Crescimento efetivo, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CE_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Crescimento efetivo, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CE_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Crescimento efetivo, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CE_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Crescimento efetivo, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CE_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Crescimento efetivo, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_CE_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      3.6. Taxa de Crescimento Efetivo
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de crescimento efetivo, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCE_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento efetivo, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCE_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento efetivo, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCE_CONC_2001;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento efetivo, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCE_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento efetivo, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCE_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de crescimento efetivo, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TCE_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
/* ................................................................................................................................................ */ 
/* ................................................................................................................................................ */ 

//      2. Óbitos
//          2.1. Óbitos totais
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Óbitos totais, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_OT_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Óbitos totais, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_OT_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Óbitos totais, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_OT_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Óbitos totais, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_OT_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Óbitos totais, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_OT_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Óbitos totais, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_OT_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//          2.2. Óbitos <1 ano
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Óbitos <1 ano, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_O1_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Óbitos <1 ano, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_O1_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Óbitos <1 ano, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_O1_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Óbitos <1 ano, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_O1_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Óbitos <1 ano, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_O1_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Óbitos <1 ano, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_O1_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//          2.3. Taxa de Mortalidade
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de mortalidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TM_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TM_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TM_CONC_2001;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TM_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TM_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TM_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//          2.4. Taxa de mortalidade infantil
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de mortalidade infantil, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TMI_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade infantil, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TMI_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade infantil, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TMI_CONC_2001;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade infantil, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TMI_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade infantil, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TMI_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de mortalidade infantil, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TMI_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
/* ................................................................................................................................................ */ 
/* ................................................................................................................................................ */ 


//  5. População Estrangeira
//      5.1. População estrangeira com estatuto legal
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "População estrangeira com estatuto legal, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PEL_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "População estrangeira com estatuto legal, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PEL_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "População estrangeira com estatuto legal, Município (2008)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PEL_CONC_2008;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "População estrangeira com estatuto legal, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PEL_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "População estrangeira com estatuto legal, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PEL_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "População estrangeira com estatuto legal, Nuts III (2008)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_PEL_NUTS_2008;
        legenda_ativa.addTo(map);
    }else {
}});
/* ................................................................................................................................................ */ 
/* ................................................................................................................................................ */ 


//  6. Casamentos e divóricos
//      6.1. Taxa de divorcialidade (1960, 2001, 2011, 2019)
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de divorcialidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TD_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de divorcialidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TD_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Taxa de divorcialidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TD_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Taxa de divorcialidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TD_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Taxa de divorcialidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TD_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de divorcialidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TD_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      6.2. Taxa de nupcialidade (2001, 2011, 2019)
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Taxa de nupcialidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TNUP_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de nupcialidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TNUP_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Taxa de nupcialidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TNUP_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Taxa de nupcialidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TNUP_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Taxa de nupcialidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TNUP_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Taxa de nupcialidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_TNUP_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});


//  7. Indicadores de envelhecimento
//      7.1. Índice de envelhecimento 
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice de envelhecimento, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IE_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de envelhecimento, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IE_CONC_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de envelhecimento, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IE_CONC_2001;
        legenda_ativa.addTo(map);
    }else  if (eventLayer.name === "Índice de envelhecimento, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IE_NUTS_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de envelhecimento, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IE_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de envelhecimento, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IE_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
//      7.2. IL
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice de longevidade, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IL_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de longevidade, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IL_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Índice de longevidade, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IL_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Índice de longevidade, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IL_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Índice de longevidade, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IL_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de longevidade, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IL_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});
//      7.3. IDJ
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice de dependência de jovens, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDJ_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de dependência de jovens, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDJ_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Índice de dependência de jovens, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDJ_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Índice de dependência de jovens, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDJ_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Índice de dependência de jovens, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDJ_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de dependência de jovens, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDJ_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      7.4.
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice de dependência de idosos, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDI_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de dependência de idosos, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDI_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Índice de dependência de idosos, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDI_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Índice de dependência de idosos, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDI_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Índice de dependência de idosos, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDI_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de dependência de idosos, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDI_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      7.5.
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice de dependência total, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDT_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de dependência total, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDT_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Índice de dependência total, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDT_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Índice de dependência total, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDT_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Índice de dependência total, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDT_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de dependência total, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_IDT_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//      7.6.
map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === "Índice de sustentabilidade potencial, Município (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISP_CONC_2019;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de sustentabilidade potencial, Município (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISP_CONC_2011;
        legenda_ativa.addTo(map);       
    }else if (eventLayer.name === "Índice de sustentabilidade potencial, Município (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISP_CONC_2001;
        legenda_ativa.addTo(map);   
    }else if (eventLayer.name === "Índice de sustentabilidade potencial, Nuts III (2019)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISP_NUTS_2019;
        legenda_ativa.addTo(map);  
    }else if (eventLayer.name === "Índice de sustentabilidade potencial, Nuts III (2011)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISP_NUTS_2011;
        legenda_ativa.addTo(map);
    }else if (eventLayer.name === "Índice de sustentabilidade potencial, Nuts III (2001)") {
        this.removeControl(legenda_ativa);
        legenda_ativa = legenda_ISP_NUTS_2001;
        legenda_ativa.addTo(map);
    }else {
}});

//--------------------------------------------------------------------------------------------
var logo = L.control({ position: "bottomright" });
logo.onAdd = function(map) {
  var div = L.DomUtil.create("div", "logo");
  div.innerHTML += '<a href="https://www.arealeditores.pt/" target="_blank"> <div id="areal"></div></a>'
  return div;
};

logo.addTo(map);

var logo = L.control({ position: "bottomright" });
logo.onAdd = function(map) {
  var div = L.DomUtil.create("div", "manual_capa");
  div.innerHTML += '<a href="#" target="_blank"> <div id="capa"></div></a>'

  return div;
};
logo.addTo(map);

map.on('baselayerchange', function (event) {
    L_sedes_distrito.bringToFront();
});

// Easyprint 
L.easyPrint({
    tileLayer: B_OSM,
    sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
    filename: 'myMap',
    exportOnly: true,
    hideControlContainer: true
}).addTo(map);