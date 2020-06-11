// Datafeed implementation, will be added later
import Datafeed from './datafeed.js';

window.tvWidget = new TradingView.widget({
	symbol: 'Bitfinex:BTC/USD', // default symbol
	interval: '1D', // default interval
	fullscreen: true, // displays the chart in the fullscreen mode
	container_id: 'tv_chart_container',
	datafeed: Datafeed,
	library_path: '../charting_library_clonned_data/charting_library/',
	enable_features: ["control_bar"]
});
//Menu click izquierda
window.tvWidget.onChartReady(function() {
    window.tvWidget.onContextMenu(function(unixtime, price) {
        return [{
            position: "top",
            text: "First top menu item, time: " + unixtime + ", price: " + price,
            click: function() { alert("First clicked."); }
        },
        { text: "-", position: "top" },
        { text: "-Objects Tree..." },
      {
            position: "top",
            text: "Second top menu item 2",
            click: function() { alert("Second clicked."); }
        }, {
            position: "bottom",
            text: "Bottom menu item",
            click: function() { alert("Third clicked."); }
        }];
    });
});
window.tvWidget.onChartReady(function() {
    window.tvWidget.onContextMenu(function(unixtime, price) {
        return [{
            position: "top",
            text: "First top menu item, time: " + unixtime + ", price: " + price,
            click: function() { alert("First clicked."); }
        },
        { text: "-", position: "top" },
        { text: "-Objects Tree..." },
      {
            position: "top",
            text: "Second top menu item 2",
            click: function() { alert("Second clicked."); }
        }, {
            position: "bottom",
            text: "Bottom menu item",
            click: function() { alert("Third clicked."); }
        }];
    });
});
window.tvWidget.headerReady().then(function() {
    var button = window.tvWidget.createButton({ align: 'right' });
    button.setAttribute('title', 'My custom button tooltip');
    button.addEventListener('click', function() { alert("My custom button pressed!"); });
	button.textContent = 'My custom button caption';
});

var realConsoleLog = console.log;
        console.log = function () {
            var message = [].join.call(arguments, " ");
            $(".card-text").text(message);
            realConsoleLog.apply(console, arguments);
        };