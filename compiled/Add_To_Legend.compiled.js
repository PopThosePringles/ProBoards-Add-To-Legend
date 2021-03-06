"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, null, [{
		key: "init",
		value: function init() {
			this.PLUGIN_ID = "pd_add_to_legend";
			this.items = [];
			this.route = pb.data("route");

			this.setup();

			if (this.items.length > 0) {
				$(this.ready.bind(this));
			}
		}
	}, {
		key: "ready",
		value: function ready() {
			var $legend = $(".container.legend");

			if ($legend.length == 1) {
				var $tr = $legend.find("tr:last");

				for (var i = 0; i < this.items.length; ++i) {
					$tr.append("<td><img src='" + this.items[i].image + "' /> <span>" + this.items[i].text + "</span></td>");
				}
			}
		}
	}, {
		key: "setup",
		value: function setup() {
			var plugin = pb.plugin.get(this.PLUGIN_ID);

			if (plugin && plugin.settings) {
				var settings = plugin.settings;

				if (settings.items.length) {
					for (var i = 0; i < settings.items.length; ++i) {
						var home_check = (this.route.name == "forum" || this.route.name == "home") && settings.items[i].location.indexOf("1") > -1;
						var board_check = this.route.name == "board" && settings.items[i].location.indexOf("2") > -1;

						if (home_check || board_check) {
							this.items.push(settings.items[i]);
						}
					}
				}
			}
		}
	}]);

	return _class;
})().init();
