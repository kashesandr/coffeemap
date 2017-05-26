import echarts from "echarts";
import echartsGl from "echarts-gl";
import normalizeCss from "normalize.css";

function pageHeight() {
    return window.innerHeight != null? window.innerHeight: document.body != null? document.body.clientHeight:null;
}
function pageWidth() {
    return window.innerWidth != null? window.innerWidth: document.body != null? document.body.clientWidth:null;
}

function addEvent(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
}

let option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: '/src/baseTexture.jpg',
        heightTexture: '/src/heightTexture.jpg',

        displacementScale: 0.1,

        shading: 'lambert',

        environment: '/src/environmentTexture.jpg',

        light: {
            ambient: {
                intensity: 0.8
            },
            main: {
                intensity: 0.8
            }
        },

        layers: []
    },
    series: []
};

let element = document.getElementById('chart');
function updateChartSize(el) {
    el.style.height = pageHeight()+'px';
    el.style.width = pageWidth()+'px';
}
updateChartSize(element);

addEvent(window, 'resize', function () {
    updateChartSize(element);
    chart.resize();
});

let chart = echarts.init(element);
chart.setOption(option);