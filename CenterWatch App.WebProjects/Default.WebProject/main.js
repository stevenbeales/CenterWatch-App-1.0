function abbreviate(str, max, suffix) {
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
}

function addSiteMarkers(ux, groupSite) { 
	var mapObj = ux.getControl('MAP_TRIALS');
	mapObj.removeMarkerGroup(groupSite);

	var settings = {
		group: groupSite, 
		icon: {
			anchor: {
			}
		},
		title: 'XX',
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
	var lObj = ux.getControl('_LIST_TRIALS');
		var _d = lObj._data;
		for(var i = 0; i < _d.length; i++) { 
			delete arr;
			arr = [];
			arr.push(_d[i].latitude);
			arr.push(_d[i].longitude);
			mapObj.addMarker('MYMARKER_' + i,arr,settings);
		}
	mapObj.viewMarkerGroups(groupSite);
}

