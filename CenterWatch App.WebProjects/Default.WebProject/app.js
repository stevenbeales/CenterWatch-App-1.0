var CWApp = (function () {
	"use strict";
	var abbreviate = function (str, max, suffix) {
		if (str.length === 0) {
			return '';
		}
		if ((str = str.replace(/^\s+|\s+$/g, '').replace(/[\r\n]*\s*[\r\n]+/g, ' ').replace(/[ \t]+/g, ' ')).length <= max) {
			return str;
		}
		var abbr = '';
		str = str.split(' ');
		suffix = (typeof suffix !== 'undefined' ? suffix : ' ...');
		max -= suffix.length;
		for (var len = str.length, i = 0; i < len; i++) {
			if ((abbr + str[i]).length < max) {
				abbr += str[i] + ' ';
			}
			else {
				break;
			}
		}
		return abbr.replace(/[ ]$/g, '') + suffix;
	};

	var addSiteMarkers = function (mapObj, lObj, groupName) {
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
		for (var len = _d.length, i = 0; i < len; i++) {
			arr = arr.slice(0, 0);
			lat = _d[i].latitude;
			lon = _d[i].longitude;
			city = _d[i].city;
			state = _d[i].state;
			if (_isNumeric(lat) && _isNumeric(lon)) {
				arr.push(lat);
				arr.push(lon);
				settings.title = city + ', ' + state;
				mapObj.addMarker('MYMARKER_' + i, arr, settings);
			}
		}
		mapObj.viewMarkerGroups(groupName);
	};

	var executeMenuAction = function(self, item) {
		switch (item) {
			case 'FindByCondition':
			self.panelSetActive('PANELCARD_CONDITION', true);
			break;
			case 'FindByLocation':
			self.panelSetActive('PANELCARD_LOCATION', true);
				break;
			case 'FindByKeywords':
			self.panelSetActive('PANELCARD_KEYWORDS', true);
				break;
			case 'GotoCommunity':
				if (typeof window.plugins == 'object') {
					window.open('http://www.centerwatch.com/health-resources/general/', 'CenterWatch', '_system');
				}
				else {
					self.panelSetActive('PANELCARD_COMMUNITIES', true);
				}
				break;
			case 'FindEducationalMaterials':
				self.panelSetActive('PANELCARD_EDUCATIONMATERIAL', true);
				break;
			case 'MyProfile':
				self.panelSetActive('PANELCARD_MYPROFILE', true);
				break;
			case '':
				break;
			default:
				console.log('menu ' + item + ' not found.');
		}
	};

	var goBackToMainMenu = function (ux) {
		var parentObject = ux.getParentObject();
		var mainPanel = parentObject.panelSetActive('PANEL_MAIN', true);
	};

	var populateDetailTabs = function(self) {
		var overview = self.getPointer('PLACEHOLDER_OVERVIEW');
		var eligibility = self.getPointer('PLACEHOLDER_ELIGIBILITY');
		var moreinfo = self.getPointer('PLACEHOLDER_MOREINFO');
		var contact = self.getPointer('PLACEHOLDER_CONTACT');
		var lObj = self.getControl('LIST_TRIALS');
		_populateOverview(overview, lObj);
		_populateEligibility(eligibility, lObj);
		_populateMoreInfo(moreinfo, lObj);
		_populateContact(contact, lObj);
	};

	var _populate = function(ele, lObj, content) {
		var _data = {};
		if(lObj) {
			var row = lObj.selection[0];
			if(typeof row != 'undefined') {
				 _data = lObj.getData(lObj.selection[0]);
			}
		}
		var _templateArray = [];
		_templateArray.push(content);
		var _template = _templateArray.join('\n');
		var settings = { template: _template};
		var html = A5.u.template.expand(_data,settings);
		ele.innerHTML = html;
	};

	var _populateContact = function(ele, lObj) {
		_populate(ele, lObj, '<a href="#Contact">{contact}</a>');
	};

	var _populateEligibility = function(ele, lObj) {
		_populate(ele, lObj, '<a href="#Eligibility">{eligibility}</a>');
	};

	var _populateMoreInfo = function(ele, lObj) {
		_populate(ele, lObj, '<a href="#MoreInfo">{moreinfo}</a>');
	};

	var _populateOverview = function(ele, lObj) {
		_populate(ele, lObj, '<a href="#Overview">{overview}</a>');
	};

	var _isNumeric = function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	return {
		abbreviate: abbreviate,
		addSiteMarkers: addSiteMarkers,
		executeMenuAction: executeMenuAction,
		goBackToMainMenu: goBackToMainMenu,
		populateDetailTabs: populateDetailTabs
	};
})();