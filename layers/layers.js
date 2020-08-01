var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_departement_0 = new ol.format.GeoJSON();
var features_departement_0 = format_departement_0.readFeatures(json_departement_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departement_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_departement_0.addFeatures(features_departement_0);var lyr_departement_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departement_0, 
                style: style_departement_0,
                title: '<img src="styles/legend/departement_0.png" /> departement'
            });var format_arrondissement_1 = new ol.format.GeoJSON();
var features_arrondissement_1 = format_arrondissement_1.readFeatures(json_arrondissement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrondissement_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_arrondissement_1.addFeatures(features_arrondissement_1);var lyr_arrondissement_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrondissement_1, 
                style: style_arrondissement_1,
                title: '<img src="styles/legend/arrondissement_1.png" /> arrondissement'
            });var format_localite_2 = new ol.format.GeoJSON();
var features_localite_2 = format_localite_2.readFeatures(json_localite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localite_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_localite_2.addFeatures(features_localite_2);var lyr_localite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localite_2, 
                style: style_localite_2,
                title: '<img src="styles/legend/localite_2.png" /> localite'
            });var format_route_3 = new ol.format.GeoJSON();
var features_route_3 = format_route_3.readFeatures(json_route_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_route_3.addFeatures(features_route_3);var lyr_route_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_route_3, 
                style: style_route_3,
                title: '<img src="styles/legend/route_3.png" /> route'
            });var format_poste_agricole_4 = new ol.format.GeoJSON();
var features_poste_agricole_4 = format_poste_agricole_4.readFeatures(json_poste_agricole_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poste_agricole_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_poste_agricole_4.addFeatures(features_poste_agricole_4);cluster_poste_agricole_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_poste_agricole_4
});var lyr_poste_agricole_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_poste_agricole_4, 
                style: style_poste_agricole_4,
                title: '<img src="styles/legend/poste_agricole_4.png" /> poste_agricole'
            });

lyr_departement_0.setVisible(true);lyr_arrondissement_1.setVisible(true);lyr_localite_2.setVisible(true);lyr_route_3.setVisible(true);lyr_poste_agricole_4.setVisible(true);
var layersList = [baseLayer,lyr_departement_0,lyr_arrondissement_1,lyr_localite_2,lyr_route_3,lyr_poste_agricole_4];
lyr_departement_0.set('fieldAliases', {'id_dep': 'id_dep', 'mon_dep': 'mon_dep', 'pop_dep': 'pop_dep', 'sup_dep': 'sup_dep', });
lyr_arrondissement_1.set('fieldAliases', {'id_arr': 'id_arr', 'nom_arr': 'nom_arr', 'sup_arr': 'sup_arr', 'pop_arr': 'pop_arr', 'id_dep': 'id_dep', });
lyr_localite_2.set('fieldAliases', {'id': 'id', 'nom_local': 'nom_local', });
lyr_route_3.set('fieldAliases', {'id_route': 'id_route', 'code': 'code', 'Type_route': 'Type_route', });
lyr_poste_agricole_4.set('fieldAliases', {'id_p_a': 'id_p_a', 'nom_p_a': 'nom_p_a', 'nom_cpa': 'nom_cpa', 'tel': 'tel', 'nom_zone': 'nom_zone', 'id_arr': 'id_arr', });
lyr_departement_0.set('fieldImages', {'id_dep': 'TextEdit', 'mon_dep': 'TextEdit', 'pop_dep': 'TextEdit', 'sup_dep': 'TextEdit', });
lyr_arrondissement_1.set('fieldImages', {'id_arr': 'TextEdit', 'nom_arr': 'TextEdit', 'sup_arr': 'TextEdit', 'pop_arr': 'TextEdit', 'id_dep': 'TextEdit', });
lyr_localite_2.set('fieldImages', {'id': 'TextEdit', 'nom_local': 'TextEdit', });
lyr_route_3.set('fieldImages', {'id_route': 'TextEdit', 'code': 'TextEdit', 'Type_route': 'TextEdit', });
lyr_poste_agricole_4.set('fieldImages', {'id_p_a': 'TextEdit', 'nom_p_a': 'TextEdit', 'nom_cpa': 'TextEdit', 'tel': 'TextEdit', 'nom_zone': 'TextEdit', 'id_arr': 'TextEdit', });
lyr_departement_0.set('fieldLabels', {'id_dep': 'inline label', 'mon_dep': 'inline label', 'pop_dep': 'inline label', 'sup_dep': 'inline label', });
lyr_arrondissement_1.set('fieldLabels', {'id_arr': 'inline label', 'nom_arr': 'inline label', 'sup_arr': 'inline label', 'pop_arr': 'inline label', 'id_dep': 'inline label', });
lyr_localite_2.set('fieldLabels', {'id': 'inline label', 'nom_local': 'inline label', });
lyr_route_3.set('fieldLabels', {'id_route': 'inline label', 'code': 'inline label', 'Type_route': 'inline label', });
lyr_poste_agricole_4.set('fieldLabels', {'id_p_a': 'inline label', 'nom_p_a': 'inline label', 'nom_cpa': 'inline label', 'tel': 'inline label', 'nom_zone': 'inline label', 'id_arr': 'inline label', });
lyr_poste_agricole_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});