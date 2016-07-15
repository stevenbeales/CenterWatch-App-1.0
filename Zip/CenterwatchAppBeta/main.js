var CWApp = (function () {

    var _isNumeric = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	
	var abbreviate = function(str, max, suffix) {
		if (str.length === 0) {
			return '';
		}		

		if((str = str.replace(/^\s+|\s+$/g, '').replace(/[\r\n]*\s*[\r\n]+/g, ' ').replace(/[ \t]+/g, ' ')).length <= max) {
			return str;
		} 

		var abbr = '';
		str = str.split(' ');
		suffix = (typeof suffix !== 'undefined' ? suffix : ' ...');
		max -= suffix.length;
	  
		for(var len = str.length, i = 0; i < len; i++) {
			if((abbr + str[i]).length < max) {
			  abbr += str[i] + ' ';
			}
			else { 
				break; 
			}
		}
		return abbr.replace(/[ ]$/g, '') + suffix;
	};
			
	var addSiteMarkers = function(mapObj, lObj, groupName) { 			
		mapObj.removeMarkerGroup(groupName);
		var settings = {
			group: groupName, 
			icon: {
				anchor: {
				}
			},
			title: '',
			detail: {
				has: false
			},
			overlay: {
				has: false,
				data: '1mi',
				fill: {
					opacity: 1
				},
				stroke: {
					width: 1,
					opacity: 1
				}
			},
			draggable: false,
			animation: false,
			emphasis: false,
			emphasize: false,
			onAddComplete: false
		};

		var arr = [];
		var lat, lon, city, state;
		var _d = lObj._data;
		for(var len = _d.length, i = 0; i < len; i++) { 
			delete arr;
			arr = [];
			lat = _d[i].latitude;
			lon = _d[i].longitude;
			city = _d[i].city;
			state = _d[i].state;
			if (_isNumeric(lat) && _isNumeric(lon)) {
				arr.push(lat);
				arr.push(lon);
				settings.title = city + ', ' + state;
				mapObj.addMarker('MYMARKER_' + i,arr,settings);
			}
		}
		mapObj.viewMarkerGroups(groupName);
	};
	
	var goBackToMainMenu = function(ux) {
		var parentObject = ux.getParentObject();
		var mainPanel = parentObject.panelSetActive('PANEL_MAIN', true);
	};

 	return {
		abbreviate: abbreviate,
		addSiteMarkers: addSiteMarkers,
		goBackToMainMenu: goBackToMainMenu
	};
})();




