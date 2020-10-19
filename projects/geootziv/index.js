import './index.html';
import './main.css';

const ready = () => {
  ymaps.ready(init);

var placemarks = [
    {
        latitude: 52.97,
        longitude: 23.31,
        hintContent: 'хинт1',
        balloonContent: 'балун1',
    },
    {
        latitude: 52.94,
        longitude: 23.25,
        hintContent: 'хинт1',
        balloonContent: 'балун2',
    },
    {
        latitude: 52.93,
        longitude: 23.34,
        hintContent: 'хинт1',
        balloonContent: 'балун3',
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [52.94, 23.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '/projects/geootziv/img/icon-active.png',
                iconImageSize: [44, 66],
                iconImageOffset: [-23, -57],
            }
            );
    }

    var clusterer = new ymaps.Clusterer({
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}

};


document.addEventListener('DOMContentLoaded', ready);