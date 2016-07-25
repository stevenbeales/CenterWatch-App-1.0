A5.u.drag.useDragScrolling = 'always';
if(typeof DLG1_DlgObj == 'object') {
	DLG1_DlgObj._destroy();
	try {
		delete DLG1_DlgObj;
	} catch(e) {
		DLG1_DlgObj = undefined;
	}
};
;if(typeof DLG1_PanelObj != 'undefined') {
	var ele = $(DLG1_PanelObj.getPanelId());
	if(ele) {
		if(ele.parentNode) ele.parentNode.removeChild(ele);
	}
	delete DLG1_PanelObj;
}
;window['DLG1_PanelObj'] = new A5.PanelNavigator([
{
	name: 'PANEL_MAIN',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '<div class="A5CWLayout" style="width: 100%" >\n\t\n<div  class="iOS7List"   style="padding:0px; border: 0px;"  >\n\t<div id="DLG1.V.R1.LIST_MENU.CONTROL"  class="DLG1_LIST_MENU" style="overflow: auto; width: 100%; "></div>\n</div>\n\n</div>\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: {
			axis: 'both',
			stopPropogation: false,
			pull: {
				y: 'auto',
				x: 'auto'
			},
			indicator: {
				show: true,
				h: {
					show: true,
					location: 'right',
					offset: '0px',
					left: '0px',
					right: '0px'
				},
				v: {
					show: true,
					location: 'right',
					offset: '0px',
					top: '0px',
					bottom: '0px'
				}
			}
		},
		className: 'panel-body-main'
	},
	header: {
		html: '<div style="display:table; margin:auto;"><div class="A5CWLayout" style="width: " > \t<img id="DLG1.V.R1.IMAGE_LOGO"  src="images/logo.png" class="" style="border-width: 0px; padding: 5px; max-width: 100%; max-height: auto; box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; -webkit-box-sizing: border-box;" title=""     onerror="if(typeof DLG1_DlgObj != \'undefined\') DLG1_DlgObj._executeEvent(\'onImageError\',{element: this});"  /> </div> </div><div style="display:none;"></div>',
		show: true,
		style: 'background-color: white; font-size: 0px; border: 0px inset; width: 100%; height: 5%; z-index: 0; '
	},
	footer: {
	},
	overlay: {
	},
	onSize: function() {;
if(typeof DLG1_DlgObj != 'undefined') {var mObj = DLG1_DlgObj.getControl('LIST_MENU'); if(mObj) mObj.refresh();}}
})
},
{
	name: 'PANELCARD_CONDITION',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '<div class="">\n\t<td valign="top"><div><a class="iOS7NavigatorLink" id="74d3c296-9e7e-424a-b013-cb593148c673_CLOSEBUTTON" href="#" onclick="$(\'DLG1_DIVCONTAINER_74d3c296_9e7e_424a_b013_cb593148c673\').innerHTML = \'\'; $(\'74d3c296-9e7e-424a-b013-cb593148c673_CLOSEBUTTON\').style.display = \'none\';" style="display:none;">Close</a></div><div id="DLG1_DIVCONTAINER_74d3c296_9e7e_424a_b013_cb593148c673"></div></td>\n</div>\n\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: false
	},
	header: {
		html: '<div style="display:none;"></div>'
	},
	footer: {
	},
	overlay: {
	}
})
},
{
	name: 'PANELCARD_LOCATION',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '<div class="">\n\t<td valign="top"><div><a class="iOS7NavigatorLink" id="41b8fc79-ea86-4753-b61d-13a5409bd943_CLOSEBUTTON" href="#" onclick="$(\'DLG1_DIVCONTAINER_41b8fc79_ea86_4753_b61d_13a5409bd943\').innerHTML = \'\'; $(\'41b8fc79-ea86-4753-b61d-13a5409bd943_CLOSEBUTTON\').style.display = \'none\';" style="display:none;">Close</a></div><div id="DLG1_DIVCONTAINER_41b8fc79_ea86_4753_b61d_13a5409bd943"></div></td>\n</div>\n\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: false
	},
	header: {
		html: '<div style="display:none;"></div>'
	},
	footer: {
	},
	overlay: {
	}
})
},
{
	name: 'PANELCARD_KEYWORDS',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '<div class="">\n\t<td valign="top"><div><a class="iOS7NavigatorLink" id="f322a130-31c3-4e99-bcda-26240ab4b90c_CLOSEBUTTON" href="#" onclick="$(\'DLG1_DIVCONTAINER_f322a130_31c3_4e99_bcda_26240ab4b90c\').innerHTML = \'\'; $(\'f322a130-31c3-4e99-bcda-26240ab4b90c_CLOSEBUTTON\').style.display = \'none\';" style="display:none;">Close</a></div><div id="DLG1_DIVCONTAINER_f322a130_31c3_4e99_bcda_26240ab4b90c"></div></td>\n</div>\n\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: false
	},
	header: {
		html: '<div style="display:none;"></div>'
	},
	footer: {
	},
	overlay: {
	}
})
},
{
	name: 'PANELCARD_COMMUNITIES',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '\t<div class="">\n\t\t<div id="DLG1_DIVCONTAINER_381e629e_737c_48a0_b04b_1a61db363e06"   ><img src="loading.gif" /></div>\n\t</div>\n\t\t\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: false
	},
	header: {
		html: '<div style="display:table; margin:auto;"><div \tid="DLG1.V.R1.LEFT_BUTTONS"    \t\t\tclass="A5CWLayout "  style="position: absolute; left: 2px; "  > <div class="A5CWLayout" style="width: " > \t<button type="button" id="DLG1.V.R1.BUTTON_BACK"    ></button> </div> <div style="font: 0pt arial;clear:both;"></div> \t</div> <div \tid="DLG1.V.R1.CONTAINER_CENTER"    \t\t\tclass="A5CWLayout "  style=""  > <div style="display: table; margin: auto;"> <div class="A5CWLayout" style="width: " > \t<div id="DLG1.V.R1.STATICTEXT_COMMUNITIES" title=""  class="iOS7Heading" style="text-shadow: 2px 2px #ccc; box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; -webkit-box-sizing: border-box;"   >Communities</div> </div> <div style="font: 0pt arial;clear:both;"></div> \t</div> \t</div> </div><div style="display:none;"></div>',
		show: true,
		style: 'height: 40px; min-height: 40px; '
	},
	footer: {
	},
	overlay: {
	}
})
},
{
	name: 'PANELCARD_EDUCATIONMATERIAL',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '<div class="A5CWLayout">\n\t<td valign="top"><div><a class="iOS7NavigatorLink" id="65483301_e6ca_4cb2_bf01_12f04f523072_CLOSEBUTTON" href="#" onclick="$(\'DLG1_DIVCONTAINER_65483301_e6ca_4cb2_bf01_12f04f523072\').innerHTML = \'\'; $(\'65483301_e6ca_4cb2_bf01_12f04f523072_CLOSEBUTTON\').style.display = \'none\';" style="display:none;">Close</a></div><div id="DLG1_DIVCONTAINER_65483301_e6ca_4cb2_bf01_12f04f523072"></div></td>\n</div>\n\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: false
	},
	header: {
		html: '<div style="display:none;"></div>'
	},
	footer: {
	},
	overlay: {
	}
})
},
{
	name: 'PANELCARD_MYPROFILE',
	src: new A5.PanelCard({
	theme: 'iOS7',
	body: {
		content: {
			type: 'html',
			src: '<div class="">\n\t<td valign="top"><div><a class="iOS7NavigatorLink" id="4cf5a318_15ca_470f_a9b7_156863ee5c88_CLOSEBUTTON" href="#" onclick="$(\'DLG1_DIVCONTAINER_4cf5a318_15ca_470f_a9b7_156863ee5c88\').innerHTML = \'\'; $(\'4cf5a318_15ca_470f_a9b7_156863ee5c88_CLOSEBUTTON\').style.display = \'none\';" style="display:none;">Close</a></div><div id="DLG1_DIVCONTAINER_4cf5a318_15ca_470f_a9b7_156863ee5c88"></div></td>\n</div>\n\n<div style="clear: both; font: 0px arial; height: 0px; width: 0px;"></div>'
		},
		scroll: false
	},
	header: {
		html: '<div style="display:none;"></div>'
	},
	footer: {
	},
	overlay: {
	}
})
}
],{
	type: 'programmatic',
	flow: 'ltr',
	loopNavigate: true,
	onPanelActivate: function() {var panelName = this.state.activePanel;
if(panelName == 'PANELCARD_CONDITION') {
	DLG1_DlgObj._functions.runAction_74d3c296_9e7e_424a_b013_cb593148c673();;
}	
var panelName = this.state.activePanel;
if(panelName == 'PANELCARD_LOCATION') {
	DLG1_DlgObj._functions.runAction_41b8fc79_ea86_4753_b61d_13a5409bd943();;
}	
var panelName = this.state.activePanel;
if(panelName == 'PANELCARD_KEYWORDS') {
	DLG1_DlgObj._functions.runAction_f322a130_31c3_4e99_bcda_26240ab4b90c();;
}	
var panelName = this.state.activePanel;
if(panelName == 'PANELCARD_COMMUNITIES') {
	DLG1_DlgObj._functions.runAction_381e629e_737c_48a0_b04b_1a61db363e06();;
}	
var panelName = this.state.activePanel;
if(panelName == 'PANELCARD_EDUCATIONMATERIAL') {
	DLG1_DlgObj._functions.runAction_65483301_e6ca_4cb2_bf01_12f04f523072();;
}	
var panelName = this.state.activePanel;
if(panelName == 'PANELCARD_MYPROFILE') {
	DLG1_DlgObj._functions.runAction_4cf5a318_15ca_470f_a9b7_156863ee5c88();;
}
DLG1_DlgObj.refreshClientSideComputations();},
	onPanelActivateComplete: function() {if(this.state.activePanel == 'PANELCARD_CONDITION') { 
	var pChild = DLG1_DlgObj.getChildObject('FINDBYCONDITION','UX');
	if(pChild) pChild._executeEvent('onPanelActivate');
};
if(this.state.activePanel == 'PANELCARD_LOCATION') { 
	var pChild = DLG1_DlgObj.getChildObject('FINDBYLOCATION','UX');
	if(pChild) pChild._executeEvent('onPanelActivate');
};
if(this.state.activePanel == 'PANELCARD_KEYWORDS') { 
	var pChild = DLG1_DlgObj.getChildObject('FINDBYKEYWORDS','UX');
	if(pChild) pChild._executeEvent('onPanelActivate');
};
if(this.state.activePanel == 'PANELCARD_COMMUNITIES') { 
	var pChild = DLG1_DlgObj.getChildObject('COMMUNITIES','UX');
	if(pChild) pChild._executeEvent('onPanelActivate');
};
if(this.state.activePanel == 'PANELCARD_EDUCATIONMATERIAL') { 
	var pChild = DLG1_DlgObj.getChildObject('EDUCATIONMATERIAL','UX');
	if(pChild) pChild._executeEvent('onPanelActivate');
};
if(this.state.activePanel == 'PANELCARD_MYPROFILE') { 
	var pChild = DLG1_DlgObj.getChildObject('MYPROFILE','UX');
	if(pChild) pChild._executeEvent('onPanelActivate');
};},
	onSize: function() {;if(typeof DLG1_DlgObj != 'undefined') {
	if(typeof DLG1_DlgObj._findActiveLayoutRule != 'undefined') { 
		DLG1_DlgObj._findActiveLayoutRule();
	}
}},
	theme: 'iOS7',
	header: {
		show: false
	},
	footer: {
	},
	overlay: {
	},
	controls: {
		prev: {
			has: false
		},
		next: {
			has: false
		},
		back: {
			has: false
		},
		forward: {
			has: false
		}
	},
	body: {
	},
	animation: {
		type: 'fade',
		duration: 400
	}
})
var ele = window['DLG1_PanelObj'].create('DLG1.R1');
		var panelRootId = '{UXPRERENDEROUTPUTDIV}';
		var flagSizeToParent = true;
		var wf_alias = 'DLG1';
		if(panelRootId != '') { 
			if (!$(panelRootId)) panelRootId = '';
		}
		if(panelRootId != '') { 
			$(panelRootId).appendChild(ele);
			if(flagSizeToParent) { 
				window[wf_alias + '_PanelObj'].bindSize('parent');
			}
		} else { 
			document.body.insertBefore(ele,document.body.firstChild);
			window[wf_alias + '_PanelObj'].bindSize('window');
		}
DLG1_PanelObj._panelPath = {
	PANEL_MAIN: 'PANEL_MAIN',
	PANELCARD_CONDITION: 'PANELCARD_CONDITION',
	PANELCARD_LOCATION: 'PANELCARD_LOCATION',
	PANELCARD_KEYWORDS: 'PANELCARD_KEYWORDS',
	PANELCARD_COMMUNITIES: 'PANELCARD_COMMUNITIES',
	PANELCARD_EDUCATIONMATERIAL: 'PANELCARD_EDUCATIONMATERIAL',
	PANELCARD_MYPROFILE: 'PANELCARD_MYPROFILE'
}
DLG1_PanelObj._displayNames = {
PANEL_MAIN : 'PANEL_MAIN',PANELCARD_CONDITION : 'PANELCARD_CONDITION',PANELCARD_LOCATION : 'PANELCARD_LOCATION',PANELCARD_KEYWORDS : 'PANELCARD_KEYWORDS',PANELCARD_COMMUNITIES : 'PANELCARD_COMMUNITIES',PANELCARD_EDUCATIONMATERIAL : 'PANELCARD_EDUCATIONMATERIAL',PANELCARD_MYPROFILE : 'PANELCARD_MYPROFILE',PANELNAVIGATOR_HOME : 'PANELNAVIGATOR_HOME'
};
if(typeof DLG1_DlgObj == 'object') DLG1_DlgObj._destroy();
var DLG1_DlgObj = new A5.DialogComponentHelper('DLG1',{
	ajaxURL: 'http://69.7.228.180/centerappv1/CLINICALTRIALS.a5wcmp?__virtualPage=__a5RunDialog.a5w&__dialogFilename=CLINICALTRIALS&__alias=DLG1&__unsaved=no',
	_embeddedMode: false,
	_livePreviewInBuilder: false,
	componentGUID: 'f0e954d2-9dbd-458f-a7e0-e45d295f18b1',
	columnInfo: {'LIST_MENU': {info: {controlType: 'List'}, hiddenVal: false, type: 'control', isCalc: false, hlp: '', isArray: false, dataType: 'C'  }},
	originalValues: [{
	'LIST_MENU': ''
}],
	defaultValues: {
	LIST_MENU: ''
},
	datePickerMonthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	datePickerDayNames: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	datePickerTodayButton: 'Today',
	datePickerCloseButton: '',
	datePickerFirstDayOfWeek: 1,
	resetFormMessage: '<div style="padding: .25in;">Are you sure you want to reset the form?<div>',
	resetFormTitle: '',
	resetFormIcon: '',
	dirtyFormMessage: '<div style="padding: .25in;">You must first save your changes or cancel changes by clicking the Reset button.<div>',
	dirtyFormTitle: '',
	dirtyFormIcon: '',
	deleteRecordDialogTitle: '',
	deleteRecordDialogMessage: '',	
	ssDateFormat: 'MM/dd/yyyy',
	styleName: 'iOS7',
	_fieldHelpers_DIALOG2: [],
	parentComponentAlias: '',
	submitIfHasClientSideErrors: false, 
	rowErrors: {
				showMessageBox: false,
				messageBoxTitle: 'Error',
				style: 'color: red; width: 6in; height: 2in;'
		},
	fieldErrors: {
		type: 'block', 
		className: 'errorText',
		inputClassName: 'iOS7EditError',
		edit: { 
			container: { className: 'iOS7EditBGError'}
		},
		icon: 'cssIcon=iOS7Icon iOS7IconError',
		global: {
			contId: 'DLG1.GLOBALERRORS',
			hoverClassName: 'errorTextHighlight',
			hoverInputClassName: 'errorInputHighlight'
		}
	},
		_canAjaxCallback: function(e) {
DLG1_DlgObj.showWaitMessage('page',{useCSSAnimation: true,cssAnimationSettings: {size: '32'}});
		},
		__afterAjaxCallbackComplete: function(e) {
DLG1_DlgObj.hideWaitMessage('page');
		},
		onAjaxCallbackFailed: function(e) {
if (typeof window.plugins == 'object') {
	window.plugins.toast.showShortCenter('Call to server failed');
}
else { 
	console.log('Call to server failed'); 
}
		},
		onAjaxCallbackNotAvailable: function(e) {
if (typeof window.plugins == 'object') {
	window.plugins.toast.showShortCenter('Device is offline');
}
else { 
	console.log('Device is offline'); 
}
		},
		onPhoneGapReady: function(e) {
StatusBar.overlaysWebView(false);
StatusBar.hide();
		},
		onConnectionChange: function(e) {
var _state = e.online ? 'online.' : 'offline.';
if (typeof window.plugins == 'object') {
	window.plugins.toast.showShortCenter('Device is now ' + _state);
}
else { 
	console.log('Device is now ' + _state); 
}
		}
	});
DLG1_DlgObj._onOrientationChange =  function(e) { ;
DLG1_DlgObj._findActiveLayoutRule();
;  };
A5.__componentObj = DLG1_DlgObj;
DLG1_DlgObj._tabObjects = [];
DLG1_DlgObj._functions.runAction_74d3c296_9e7e_424a_b013_cb593148c673 = function() {
		var go = new Object();
		go.dialog2Name = 'FindByCondition';
	go.type = 'dialog2';
	go.alias = 'DLG1_FINDBYCONDITION';
	go.workingMessage = '<img src="loading.gif" />';
	go.flagTimer = 'F';
	go.flagQueryEcho = 'F';
	go.flagDebugMode = 'F';
	go.userFilter = '';
	go.baseFilter = '';
	go.userOrder = '';
	go.overrideSettings = 'style_name=`iOS7`'+'||';
	go.arguments = '';
	go.localArguments = '';
	go.linkDefinition = '';
	go.placeHolderValues = '';
	go.parameterBucket = $gvs('DLG1.PARAMETERBUCKET');
	go.argumentValueBucket = $gvs('DLG1.ARGUMENTVALUES');
	go.a5_default_path = 'C_colon_|A5Webroot|livepreview';
	go.onLoadCompleteJavascript = '';
	if(typeof DLG1_DlgObj.gridId != 'undefined') go._thisGridAlias = DLG1_DlgObj.gridId;
	if(typeof DLG1_DlgObj.dialogId != 'undefined') go._thisGridAlias = DLG1_DlgObj.dialogId;
	var panelCardId = DLG1_DlgObj.panelGetId('PANELCARD_CONDITION','body');
if($(panelCardId + '.SCROLLWRAPPER')) panelCardId = panelCardId + '.SCROLLWRAPPER';
go.dialog2Div = panelCardId;
	A5.component.runGenericComponent(go);
}
DLG1_DlgObj._functions.runAction_41b8fc79_ea86_4753_b61d_13a5409bd943 = function() {
		var go = new Object();
		go.dialog2Name = 'FindByLocation';
	go.type = 'dialog2';
	go.alias = 'DLG1_FINDBYLOCATION';
	go.workingMessage = '<img src="loading.gif" />';
	go.flagTimer = 'F';
	go.flagQueryEcho = 'F';
	go.flagDebugMode = 'F';
	go.userFilter = '';
	go.baseFilter = '';
	go.userOrder = '';
	go.overrideSettings = 'style_name=`iOS7`'+'||';
	go.arguments = '';
	go.localArguments = '';
	go.linkDefinition = '';
	go.placeHolderValues = '';
	go.parameterBucket = $gvs('DLG1.PARAMETERBUCKET');
	go.argumentValueBucket = $gvs('DLG1.ARGUMENTVALUES');
	go.a5_default_path = 'C_colon_|A5Webroot|livepreview';
	go.onLoadCompleteJavascript = '';
	if(typeof DLG1_DlgObj.gridId != 'undefined') go._thisGridAlias = DLG1_DlgObj.gridId;
	if(typeof DLG1_DlgObj.dialogId != 'undefined') go._thisGridAlias = DLG1_DlgObj.dialogId;
	var panelCardId = DLG1_DlgObj.panelGetId('PANELCARD_LOCATION','body');
if($(panelCardId + '.SCROLLWRAPPER')) panelCardId = panelCardId + '.SCROLLWRAPPER';
go.dialog2Div = panelCardId;
	A5.component.runGenericComponent(go);
}
DLG1_DlgObj._functions.runAction_f322a130_31c3_4e99_bcda_26240ab4b90c = function() {
		var go = new Object();
		go.dialog2Name = 'FindByKeywords';
	go.type = 'dialog2';
	go.alias = 'DLG1_FINDBYKEYWORDS';
	go.workingMessage = '<img src="loading.gif" />';
	go.flagTimer = 'F';
	go.flagQueryEcho = 'F';
	go.flagDebugMode = 'F';
	go.userFilter = '';
	go.baseFilter = '';
	go.userOrder = '';
	go.overrideSettings = 'style_name=`iOS7`'+'||';
	go.arguments = '';
	go.localArguments = '';
	go.linkDefinition = '';
	go.placeHolderValues = '';
	go.parameterBucket = $gvs('DLG1.PARAMETERBUCKET');
	go.argumentValueBucket = $gvs('DLG1.ARGUMENTVALUES');
	go.a5_default_path = 'C_colon_|A5Webroot|livepreview';
	go.onLoadCompleteJavascript = '';
	if(typeof DLG1_DlgObj.gridId != 'undefined') go._thisGridAlias = DLG1_DlgObj.gridId;
	if(typeof DLG1_DlgObj.dialogId != 'undefined') go._thisGridAlias = DLG1_DlgObj.dialogId;
	var panelCardId = DLG1_DlgObj.panelGetId('PANELCARD_KEYWORDS','body');
if($(panelCardId + '.SCROLLWRAPPER')) panelCardId = panelCardId + '.SCROLLWRAPPER';
go.dialog2Div = panelCardId;
	A5.component.runGenericComponent(go);
}
DLG1_DlgObj._functions.runAction_381e629e_737c_48a0_b04b_1a61db363e06 = function() {
		var go = new Object();
		go.dialog2Name = 'Communities';
	go.type = 'dialog2';
	go.alias = 'DLG1_COMMUNITIES';
	go.workingMessage = '<img src="loading.gif" />';
	go.flagTimer = 'F';
	go.flagQueryEcho = 'F';
	go.flagDebugMode = 'F';
	go.userFilter = '';
	go.baseFilter = '';
	go.userOrder = '';
	go.overrideSettings = 'style_name=`iOS7`'+'||';
	go.arguments = '';
	go.localArguments = '';
	go.linkDefinition = '';
	go.placeHolderValues = '';
	go.parameterBucket = $gvs('DLG1.PARAMETERBUCKET');
	go.argumentValueBucket = $gvs('DLG1.ARGUMENTVALUES');
	go.a5_default_path = 'C_colon_|A5Webroot|livepreview';
	go.onLoadCompleteJavascript = '';
	if(typeof DLG1_DlgObj.gridId != 'undefined') go._thisGridAlias = DLG1_DlgObj.gridId;
	if(typeof DLG1_DlgObj.dialogId != 'undefined') go._thisGridAlias = DLG1_DlgObj.dialogId;
	var panelCardId = DLG1_DlgObj.panelGetId('PANELCARD_COMMUNITIES','body');
if($(panelCardId + '.SCROLLWRAPPER')) panelCardId = panelCardId + '.SCROLLWRAPPER';
go.dialog2Div = panelCardId;
	A5.component.runGenericComponent(go);
}
DLG1_DlgObj._functions.runAction_65483301_e6ca_4cb2_bf01_12f04f523072 = function() {
		var go = new Object();
		go.dialog2Name = 'EducationMaterial';
	go.type = 'dialog2';
	go.alias = 'DLG1_EDUCATIONMATERIAL';
	go.workingMessage = '<img src="loading.gif" />';
	go.flagTimer = 'F';
	go.flagQueryEcho = 'F';
	go.flagDebugMode = 'F';
	go.userFilter = '';
	go.baseFilter = '';
	go.userOrder = '';
	go.overrideSettings = 'style_name=`iOS7`'+'||';
	go.arguments = '';
	go.localArguments = '';
	go.linkDefinition = '';
	go.placeHolderValues = '';
	go.parameterBucket = $gvs('DLG1.PARAMETERBUCKET');
	go.argumentValueBucket = $gvs('DLG1.ARGUMENTVALUES');
	go.a5_default_path = 'C_colon_|A5Webroot|livepreview';
	go.onLoadCompleteJavascript = '';
	if(typeof DLG1_DlgObj.gridId != 'undefined') go._thisGridAlias = DLG1_DlgObj.gridId;
	if(typeof DLG1_DlgObj.dialogId != 'undefined') go._thisGridAlias = DLG1_DlgObj.dialogId;
	var panelCardId = DLG1_DlgObj.panelGetId('PANELCARD_EDUCATIONMATERIAL','body');
if($(panelCardId + '.SCROLLWRAPPER')) panelCardId = panelCardId + '.SCROLLWRAPPER';
go.dialog2Div = panelCardId;
	A5.component.runGenericComponent(go);
}
DLG1_DlgObj._functions.runAction_4cf5a318_15ca_470f_a9b7_156863ee5c88 = function() {
		var go = new Object();
		go.dialog2Name = 'MyProfile';
	go.type = 'dialog2';
	go.alias = 'DLG1_MYPROFILE';
	go.workingMessage = '<img src="loading.gif" />';
	go.flagTimer = 'F';
	go.flagQueryEcho = 'F';
	go.flagDebugMode = 'F';
	go.userFilter = '';
	go.baseFilter = '';
	go.userOrder = '';
	go.overrideSettings = 'style_name=`iOS7`'+'||';
	go.arguments = '';
	go.localArguments = '';
	go.linkDefinition = '';
	go.placeHolderValues = '';
	go.parameterBucket = $gvs('DLG1.PARAMETERBUCKET');
	go.argumentValueBucket = $gvs('DLG1.ARGUMENTVALUES');
	go.a5_default_path = 'C_colon_|A5Webroot|livepreview';
	go.onLoadCompleteJavascript = '';
	if(typeof DLG1_DlgObj.gridId != 'undefined') go._thisGridAlias = DLG1_DlgObj.gridId;
	if(typeof DLG1_DlgObj.dialogId != 'undefined') go._thisGridAlias = DLG1_DlgObj.dialogId;
	var panelCardId = DLG1_DlgObj.panelGetId('PANELCARD_MYPROFILE','body');
if($(panelCardId + '.SCROLLWRAPPER')) panelCardId = panelCardId + '.SCROLLWRAPPER';
go.dialog2Div = panelCardId;
	A5.component.runGenericComponent(go);
}
DLG1_DlgObj.lookups = {
};
DLG1_DlgObj.setStateInfo({
	__dialogGuid: '11905014-56e4-478e-917d-dbfd82b5ab69',
	argumentsBoundToCotrols: '',
	__sgr: '',
	__dtfmt: 'MM/dd/yyyy',
	__tfmt: ''
});
DLG1_DlgObj._cascadingControls = [];
DLG1_DlgObj._cascadingControlsChildren = [];
DLG1_DlgObj.setStateInfo({ });
A5.msgBox.theme = 'iOS7';
A5.msgBox.buttonWidth = '1in';
DLG1_DlgObj._defaultWindowTitleDirection = 'ltr';
DLG1_DlgObj._controlContainers = {}
DLG1_DlgObj._panelCardControls = {
LIST_MENU:'PANEL_MAIN'
}
DLG1_DlgObj._buttons = {};
DLG1_DlgObj._buttons['BUTTON_BACK'] = new A5.Button({
	layout: 'text',
	style: 'box-sizing: border-box; -moz-box-sizing: border-box; -ms-box-sizing: border-box; -webkit-box-sizing: border-box;',
	html: 'Back',
	onClick: function() { 
},
	theme: 'iOS7:left'
});
DLG1_DlgObj._buttons['BUTTON_BACK'].bind('DLG1.V.R1.BUTTON_BACK');
DLG1_DlgObj._listViewSettings['LIST_MENU'] = {
	_dataSourceType: 'Static',
	_listFields: [
	{
		name: 'MenuName',
		defaultValue: 'return this._controlDefaultValueForListField(\'MenuName\');'
	},
	{
		name: 'Image',
		defaultValue: 'return this._controlDefaultValueForListField(\'Image\');'
	},
	{
		name: 'Action',
		defaultValue: 'return this._controlDefaultValueForListField(\'Action\');'
	},
	{
		name: 'Icon',
		defaultValue: 'return this._controlDefaultValueForListField(\'Icon\');'
	}
],
	_searchPartHas: false,
	_mediaFields: [],
	_mediaTypes: {
},
	_phoneGap: {
		mediaFiles: {
			protectedRead: false,
			target: 'server',
			targetFilenameFunction: 'return \'<DeviceId>_\' +e.object.listFieldName + \'_\' + A5.ts() + \'_\' +e.name',
			showProgress: false,
			download: {
				autodownloadFilesOnPullSynch: false,
				deleteOrphansAfterSync: false,
				targetFolder: '_AAFiles',
				showProgress: false
			},
			onErrorFunction: function(array,fileNumber,error) { }
		}
	},
	_dvmode: 'enter',
	_hasDetailView: false,
	theme: 'iOS7',
	scroll: {
		axis: 'both',
		indicator: {
			show: true,
			h: {
				show: true,
				location: 'right',
				offset: '0px',
				left: '0px',
				right: '0px'
			},
			v: {
				show: true,
				location: 'right',
				offset: '0px',
				top: '0px',
				bottom: '0px'
			}
		},
		momentum: {
			allow: true
		},
		pull: {
			y: 'auto',
			x: 'auto'
		}
	},
	layout: 'Default',
	listVariableName: 'LIST_MENU',
	listVariableNameTrueCase: 'LIST_MENU',
	_hostComponentId: 'DLG1',
	_includeCRC: false,
	allParentLists: [],
	onBeforeItemDraw: function(data,index) {;
data.Image_FIXEDCSSICON = A5.u.icon.html(data.Image,'style="float: left; "');
data.Icon_FIXEDCSSICON = A5.u.icon.html(data.Icon,'style="float: right;  color: #646464; "');
;
;},
	__flagPersist: false,
	onBeforeUpdateRow: function(index,data){;},
	onUpdateRow: function(index,data){;},
	onBeforeAddRows: function(data,info){;},
	onAddRows: function(data,info){;},
	onBeforeRemoveRows: function(rows){;},
	onRemoveRows: function(rows){;},
	onListDraw: function(data,startIndex) {
if(A5.flags.isMobile) $e.add(this.contId+'.CONTENT','abstractdown',function(e) {$e.preventDefault(e);});},
	childLists: [],
	childListEndpoints: ['LIST_MENU'],
	_populateAllChildLists: function() { },
	onSelect: function() {DLG1_DlgObj._listRowSelect('LIST_MENU',this);
;
this._selectedRow = this.selection[0];},
	onClick: function() {
CWApp.executeMenuAction(DLG1_DlgObj, this.selectionData[0].Action);
DLG1_DlgObj._listSystemOnClick('LIST_MENU',this.selection[0]);},
	layouts: {
		Default: {
			type: 'column',
			showColumnTitles: false,
			item: {
				style: 'color: #646464; font-size: 0px; border-color: #f7f7f7; padding-top: 20px; padding-bottom: 20px;'
			},
			columns: [
				{
					header: {
						html: 'Image'
					},
					resize: false,
					data: {
						template: '<span id="DLG1.LIST_MENU.IMAGE.I.{*dataRow}"><i>{Image_FIXEDCSSICON}</i></span>&nbsp;'
					},
					order: 'Image',
					width: 'flex(1)'
				},
				{
					header: {
						html: 'Menuname'
					},
					resize: false,
					data: {
						template: '<span class="MenuName" style="font-size: 18px; "><span id="DLG1.LIST_MENU.MENUNAME.I.{*dataRow}">{MenuName}</span></span>&nbsp;'
					},
					order: 'MenuName',
					width: 'flex(5)'
				},
				{
					header: {
						html: 'Icon'
					},
					resize: false,
					data: {
						template: '<span id="DLG1.LIST_MENU.ICON.I.{*dataRow}"><i>{Icon_FIXEDCSSICON}</i></span>&nbsp;'
					},
					order: 'Icon',
					width: 'flex(1)'
				}			
]
		}
	},
	content: {
		header: {
			show: false
		},
		footer: {
			show: false
		}
	},
	systemEvents: {
		onTap: function(e) {},
		afterAjaxCallback: function(e) {},
		afterClientSideFilter: function(e) {},
		beforeServerSideSort: function(e) {},
		afterServerSideSort: function(e) {},
		onSwipe: function(e) {},
		onScroll: function(e) {},
		onPullRelease: function(e) {},
		onPull: function(e) {},
		onPullEnd: function(e) {},
		afterSearchComplete: function(e) {},
		beforeSearch: function(e) {},
		onSearchResultTooLarge: function(e) {},
		onSearchResultTooLargeForLocalStorage: function(e) {},
		onBeforePersistToLocalStorage: function(e) {},
		onPersistToLocalStorage: function(e) {},
		onRestoreFromLocalStorage: function(e) {},
		afterRenderComplete: function(e) {},
		beforeFetchMore: function(e) {},
		afterFetchMore: function(e) {},
		beforePageNavigate: function(e) {},
		afterPageNavigate: function(e) {},
		beforeRefreshRow: function(e) {},
		afterRefreshRow: function(e) {},
		afterServerSideSummaryCompute: function(summary) {},
		_afterAjaxCallback: function() {this._refreshStateMessages();}
	},
	_clientsideSummary: [],
	computeClientSideSummaryValues: function(e) {},
	_executeEvent: function(event,obj) { 
	return DLG1_DlgObj._list_executeEvent('LIST_MENU',event,obj);
}
,
	_selectAll: function() {
	var v = this._values;
	var v2 = [].concat(v);
	this.setValue(v2,false);
}
,
	searchList: function() { 
	if(this._searchPartStyle == 'querybyform') { 
		if(this._dvmode != 'search') return false;
	}
	var obj = typeof arguments[0] != 'undefined' ? arguments[0] : {};
	var mode = 'serverSide';
	if(typeof obj.searchMode != 'undefined') mode = obj.searchMode;
	mode = mode.toLowerCase();
	if(mode.indexOf('auto') == 0) { 
		if(this.listIsDirty()) mode = 'clientside';
		else {
			if(this._dataSourceType.toLowerCase() == 'sql' || this._dataSourceType.toLowerCase() == 'dbf') {
				mode = 'serverside';
			} else { 
				mode = 'clientside';
			}
		}
	}
	if(this._dataSourceType.toLowerCase() == 'static') mode = 'clientside';
	var parentList = this.parentList;
	if(typeof parentList != 'undefined') {
		if(parentList != '') mode = 'clientside';
	}
	var flagDirty = false;
	if(this.listIsDirty) flagDirty = this.listIsDirty();
	var flagResult = DLG1_DlgObj._list_executeEvent(this.listVariableName,'beforeSearch',{searchMode: 'search', searchWhere: mode, listIsDirty: flagDirty});
	if(!flagResult) return false;
	if(mode == 'serverside') {
		this._searchListServerSide(obj);
	} else if(mode == 'clientside') { 
		this._searchPartSubmit_clientSideFilter();
		var rowCount = this._rData.length;
		DLG1_DlgObj._list_executeEvent(this.listVariableName,'afterSearchComplete',{searchMode: 'search', searchWhere: mode, recordsInQuery: rowCount});
	}
}
,
	_searchListServerSide: function() { 
	var obj = typeof arguments[0] != 'undefined' ? arguments[0] : {};
	var _d={};
	var flagDirty = false;
	if(this.listIsDirty) flagDirty = this.listIsDirty();
	if(flagDirty) { 
		alert('Can\'t execute server-side search because List has edits that have not yet been synchronized.');
		return false;
	}
	_d.listId = this.listVariableName
	var _data = A5.ajax.buildURLParam('__searchInfo',JSON.stringify(_d));
	_data = _data + '&' + A5.ajax.buildURLParam('__searchOptions',JSON.stringify(obj));
	this.filter = false;
	DLG1_DlgObj.ajaxCallback('','','system:ListSearchPart','',_data);
}
,
	clearSearchList: function() { 
	var obj = typeof arguments[0] != 'undefined' ? arguments[0] : {};
	var mode = 'serverSide';
	if(typeof obj.searchMode != 'undefined') mode = obj.searchMode;
	mode = mode.toLowerCase();
	if(mode.indexOf('auto') == 0) { 
		if(this.listIsDirty()) mode = 'clientside';
		else mode = 'serverside';
	}
	if(this._dataSourceType.toLowerCase() == 'static') mode = 'clientside';
	var parentList = this.parentList;
	if(typeof parentList != 'undefined') {
		if(parentList != '') mode = 'clientside';
	}
	var flagResult = DLG1_DlgObj._list_executeEvent(this.listVariableName,'beforeSearch',{searchMode: 'clear', searchWhere: mode});
	if(!flagResult) return false;
	if(mode == 'serverside') {
		this._clearSearchListServerSide();
	} else if(mode == 'clientside') { 
		this._searchPartSubmit_clientSideFilterClear();
		var rowCount = this._rData.length;
		DLG1_DlgObj._list_executeEvent(this.listVariableName,'afterSearchComplete',{searchMode: 'clear', searchWhere: mode, recordsInQuery: rowCount});
	}
}
,
	_clearSearchListServerSide: function() { 
	var _d={};
	_d.listId = this.listVariableName
	var _data = A5.ajax.buildURLParam('__searchInfo',JSON.stringify(_d));
	DLG1_DlgObj.ajaxCallback('','','system:ListSearchPartClear','',_data);
}
,
	_str: function(txt) {
	txt = txt.replace("'","\\'");
	txt = '\'' + txt + '\'';
	return txt;
}
,
	_QBF: function(txt) { 
	var o = {};
	o.v2 = '';
	o.v1 = txt;
	o.flag = false;
	if(txt.indexOf('>=') >= 0) {
		o.op = '>=';
		o.v1 = txt.substr(2);
		o.flag = true;
	} else if (txt.indexOf('<=') >= 0 ) { 
		o.op = '<=';
		o.v1 = txt.substr(2);
		o.flag = true;
	} else if (txt.indexOf('>') >= 0 ) {
		o.op = '>';
		o.v1 = txt.substr(1);
		o.flag = true;
	} else if (txt.indexOf('<') >= 0)  { 
		o.op = '<';
		o.v1 = txt.substr(1);
		o.flag = true;
	} else if (txt.indexOf('..') == 0)  {
		o.op = '<=';
		o.v1 = txt.substr(2);
		o.flag = true;
	} else if ( txt.indexOf('..', txt.length - '..'.length) !== -1 ) { 
		//ends with ..
		o.op = '>=';
		txt = txt.split('..')
		o.v1 = txt[0];
		o.flag = true;
	} else if (txt.indexOf('..') > 0 ) {
		o.op = 'between'
		txt = txt.split('..');
		o.v1 = txt[0];
		o.v2 = txt[1];
		o.flag = true;
	}
	return o;
}
,
	_match: function(data,field,val,obj) { 
	var flagKeyword = false;
	if(typeof obj.flagKeyword != 'undefined') flagKeyword = obj.flagKeyword;
	if(flagKeyword) { 
		var obj_i = this._searchFieldOptions[field.toUpperCase()];
		this._setSearchOps(obj,obj_i);
	}
	var _d = '';
	var _v = val;
	var flagC = false;
	if(obj.type == 'c') {
		flagC = true;
		if(!obj.caseSensitive) _v = _v.toLowerCase();
	} else { 
		//non mumeric searches are only mode 1 or -1
		if(obj.mode > 1) obj.mode = 1;
		if(obj.mode < -1) obj.mode = -1;
	}
	var flag = false;
	obj.usesQBFOperator = false;
	if(obj.qbf) { 
		_v = _v.split(',');
	} else {
		_v = [_v];
	}
	var o = {}
	var r = '';
	var _vals = [];
	for(var i = 0; i < _v.length; i++) { 
		if(obj.qbf) {
			o = this._QBF(_v[i]);
		} else {
			o.flag = false;
			o.v1 = _v[i];
			o.v2 = '';
		}
		if(typeof data[field] != 'undefined') {
			if(data[field] != null) { 
				_d = data[field];
				if(obj.type == 'n') { 
					o.v1 = Number(o.v1);
					o.v2 = Number(o.v2);
					_d = Number(_d);
				} else if (obj.type == 'l') { 
					o.v1 = $u.s.toBool(o.v1);
					o.v2 = $u.s.toBool(o.v2);
					_d = $u.s.toBool(_d);
				} else if (obj.type == 'd') { 
					o.v1 = A5.stringToDate(o.v1,obj.dateFormat);
					o.v2 = A5.stringToDate(o.v2,obj.dateFormat);
					if(typeof _d == 'string') _d = A5.stringToDate(_d,obj.dateFormat);
					if(o.v1 != '' && o.v1 != null ) o.v1 = o.v1.getTime();
					if(o.v2 != '' && o.v2 != null ) o.v2 = o.v2.getTime();
					if(_d != '' && _d != null ) _d = _d.getTime();
				}
				if(flagC) {if(!obj.caseSensitive && typeof _d == 'string') _d = _d.toLowerCase();}
				if(o.flag) { 
					//has qbf operators
					if(o.op == 'between') {
						if(flagC) {
							if(_d.substr(0,o.v1.length) >= o.v1 && _d.substr(0,o.v2.length) <= o.v2 ) flag = true;
						} else { 
							if(_d >= o.v1 && _d <= o.v2 && (typeof _d == typeof o.v1)  ) flag = true;
						}
					} else { 
						if(flagC) _d = _d.substr(0,o.v1.length)
						if(o.op == '>=') if( _d >= o.v1) flag = true;
						if(o.op == '<=') if( _d <= o.v1) flag = true;
						if(o.op == '>') if(_d > o.v1) flag = true;
						if(o.op == '<') if(_d < o.v1) flag = true;
					}
				} else { 
					if(obj.mode == 1 || obj.mode == -1 ) {
						if(obj.mode == 1) if(_d == o.v1) flag = true;; //match
						if(obj.mode == -1) if(!(_d == o.v1)) flag = true;; //match
					} else if (obj.mode == 2 || obj.mode == -2) { 
						if(obj.mode == 2) if(_d.indexOf(o.v1) > -1) flag = true; //contains
						if(obj.mode == -2) if(!(_d.indexOf(o.v1) > -1)) flag = true;
					} else if (obj.mode == 3 || obj.mode == -3) { 
						if(obj.mode == 3) if(_d.indexOf(o.v1) == 0) flag = true; //starts with
						if(obj.mode == -3) if(!(_d.indexOf(o.v1) == 0)) flag = true; //starts with
					}
				}
				if(o.v1 != '') {
					if(_vals.indexOf(o.v1) == -1) { 
						_vals.push(o.v1);
					}
				}
				if(o.v2 != '') {
					if(_vals.indexOf(o.v2) == -1) { 
						_vals.push(o.v2);
					}
				}
			}
		}
	}
	if(flag) { 
		if(typeof this._state.highlight == 'undefined') this._state.highlight = {};
		this._state.highlight[field.toUpperCase()] = _vals;
	} else { 
		//this._state.highlight[field.toUpperCase()] = [];
	}
	return flag;
}
,
	_setSearchOps: function(obj,obj_i) { 
	obj.mode = obj_i.option;
	obj.qbf = obj_i.qbf;
	obj.type = obj_i.type;
	//obj.treatAs = obj_i.treatAs;
}
,
	_searchPartOperator: '&&',
	_searchPartSubmit_clientSideFilter: function() { 
	if(!this._searchPartHas) return true;
	//_searchPartStyle: 'individualcontrols'
	this._state.highlight = {};
	if(this._searchPartStyle == 'singlekeywordcontrol') { 
		var searchFor = DLG1_DlgObj.getValue(this._keywordSearchControl);
		var arr = this._keywordSearchFields;
		var expn = [];
		var expn_i = '';
		var obj = {};
		//obj.caseSensitive = false;
		//obj.qbf = true;
		//obj.mode = 1;
		obj.flagKeyword = true;
		var objStr = JSON.stringify(obj)
		for(var i = 0; i < arr.length; i++) { 
			expn_i = 'this._match(data,' +this._str(arr[i]) + ',' + this._str(searchFor) + ','+objStr+')';
			expn.push(expn_i);
		}
		expn = expn.join('||');
		//alert(expn);
	} else if ( this._searchPartStyle == 'individualcontrols' || this._searchPartStyle == 'querybyform'  ) { 
		var map = this._searchPart.fieldMap;
		var val = '';
		var expn = [];
		var expn_i = '';
		var obj = {};
		obj.caseSensitive = false;
		//obj.qbf = true;
		//obj.mode = 2;
		//var objStr = JSON.stringify(obj)
		var ac = [];
		var aco = {};
		var _highlight = {};
		if(this._searchPartStyle == 'individualcontrols') {
			for(var i = 0; i < map.length; i++) { 
				val = DLG1_DlgObj.getValue(map[i].control);
				if(val != '') {
					obj_i = this._searchFieldOptions[map[i].field.toUpperCase()];
					this._setSearchOps(obj,obj_i);
					expn_i = 'this._match(data,' +this._str(map[i].field) + ',' + this._str(val) + ','+JSON.stringify(obj)+')';
					expn.push(expn_i);
				}
			}
		} else if (this._searchPartStyle == 'querybyform' ) { 
			var controlName = '';
			for(var i = 0; i < this._listFields.length; i++) { 
				controlName = this._getUXDetailViewControlName(this._listFields[i].name);
				if(controlName != '') {
					val = DLG1_DlgObj.getValue(controlName);
					if(val != '') {
						obj_i = this._searchFieldOptions[map[i].field.toUpperCase()];
						this._setSearchOps(obj,obj_i);
						expn_i = 'this._match(data,' +this._str(this._listFields[i].name) + ',' + this._str(val) + ','+JSON.stringify(obj)+')';
						expn.push(expn_i);
						aco.control = controlName;
						aco.value = val;
						ac.push(aco);
					}
				}
			}
			this.__queryByFormValues = ac;
			DLG1_DlgObj._setDVClean(this);
		}	
		var operator = '&&';
		if(typeof this._searchPartOperator != 'undefined') operator = this._searchPartOperator;
		expn = expn.join(' '+operator+' ');
	} 
	if (this._showSearchDebugInfo) {
		var ele = $('DLG1.V.R1.' + this._searchDebugPH);
		if(ele) ele.innerHTML = expn;
	}
	//user did not fill in any search fields
	if(expn == '') return true;
	var fnTxt = 'if(' + expn + ') {return true;} else { return false;}'
	var searchFunction = new Function('data',fnTxt);
	this.setFilter(searchFunction);
	if(this._rData.length > 0) this.setValue(0);
}
,
	_searchPartSubmit_clientSideFilterClear: function() { 
if(!this._searchPartHas) return true;
	this._state.highlight = {};
	this.setFilter(false);
	var map = this._searchPart.fieldMap;
	var val = '';
	var od = DLG1_DlgObj.originalValues[0];
	for(var i = 0; i < map.length; i++) {
		var val = od[map[i].control.toUpperCase()];
		if(typeof val != 'undefined') DLG1_DlgObj.setValue(map[i].control,val,false);
	}
	this.setFilter(false);
	delete this.__queryByFormValues;
	DLG1_DlgObj._setDVClean(this);
	if(this._data.length > 0) this.setValue(0);
	if (this._showSearchDebugInfo) {
		var ele = $('DLG1.V.R1.' + this._searchDebugPH);
		if(ele) ele.innerHTML = '';
	}
}
,
	detailViewIsDirty: function() { return false; },
	populateUXControls: function() { return true; },
	listIsDirty: function() { return false; },
	lookupValue: function(key,name,keyValue) {	var _d = this._data;
	var indx = A5FindPropInArray(_d,key,keyValue);
	var rv = '';
	if(indx >=0) {
		if(name == '__rowData__') return _d[indx];
		rv =  _d[indx][name];
	} else {
		//null out all properties in row
		var _d2 = {};
		if(typeof _d[0] == 'undefined') { return {}} ;
		for(var n in _d[0]) {
			_d2[n] = '&nbsp;';
		}
		rv = _d2;
	}
	return rv;
}
,
	allowNullSelection: true,
	allowNullDeselection: false,
	loopNavigate: false,
	loopNavigateNullSelection: false,
	refreshChildLists: function() {DLG1_DlgObj._listRefreshCascadingLists('LIST_MENU'); },
	rowExpander: function(rowNumber) { 
	var mode = typeof arguments[2] != 'undefined' ? arguments[2] : 'toggle';
	if(typeof rowNumber == 'undefined' || rowNumber == '' ) {
		rowNumber = this.selection[0];
		if(typeof rowNumber == 'undefined') return false;
	}
	var animObj = typeof arguments[1] != 'undefined' ? arguments[1] : {};
	var ele = $(this._hostComponentId + '.' + this.listVariableName + '.ROWEXPANDER.' + rowNumber);
	if(ele) {
		if(mode == 'toggle') A5.u.element.toggle(ele,animObj);
		if(mode == 'show') A5.u.element.show(ele,animObj);
		if(mode == 'hide') A5.u.element.hide(ele,animObj);
	}
}
,
	afterClientSideSummaryCompute: function(csSummary) { },
	selectCurrentLayout: function(name) { 
var pl = this.layouts[name];
if(typeof pl == 'undefined') return false;
this.setLayout(name);
if(pl.type == 'column') {
	this.columnLayout.header.show = this.layouts[name].showColumnTitles; 
	this.refresh();
}
},
	onFilter: function() { 	var e = {}; 
	e.rowCount = this._values.length;  
	var ele = $('DLG1.__listId__.RECORDCOUNT'); 
	if(ele) {ele.innerHTML = e.rowCount;}; 
	if(this.persistToStorage) { this.persistToStorage({});} 
	(function(e) {   })(e);
}
,
	serverSideSort: function(column) {
var e = {};
e.column = column;
var result = this.systemEvents.beforeServerSideSort(e);
if(result == false) return false;
var obj = {};
obj.cmd = 'sort';
obj.column = column;
obj.layoutName = this.layout;
obj.listState = this._state;
var data = '_listId=LIST_MENU&' + A5.ajax.buildURLParam('_cmdObj',$u.o.toJSON(obj));
DLG1_DlgObj.ajaxCallback('','','system:listServerSideSort','',data);
},
	filterListClientSide: function(searchFor) {
//var result = this.systemEvents.beforeClientSideFilter();
//if(result == false) return false;
if(searchFor != '') {
	//fixes bug in Chrome when searching on dates strings that use forward slashes
	searchFor = searchFor.replace(/\//g,'\\/');
	this.setFilter({'MenuName': RegExp('' + searchFor,'i'), 'Action': RegExp('' + searchFor,'i')});
} else this.setFilter(false);
var rowCount = this._values.length;
//var e = {};
//e.rowCount = rowCount;
//this.systemEvents.afterClientSideFilter(e);
var ele = $('DLG1.LIST_MENU.RECORDCOUNT');
if(ele) ele.innerHTML = rowCount;
}
,
	scrollToClosestValue: function(val) { 	
	if(typeof val != 'string') val = val.join('');
	var flagCI = typeof arguments[1] != 'undefined' ? arguments[1] : false;
	var pos = typeof arguments[2] != 'undefined' ? arguments[2] : 'top';
	var anim = typeof arguments[3] != 'undefined' ? arguments[3] : {}
	var _d = this._rData;
	var len = val.length;
	var _d2;
	var i2 = -1;
	if(flagCI) val = val.toLowerCase();
	for(var i = 0 ; i < _d.length; i++) {
		i2 = i;
		_d2 = String(_d[i]['*value']);
		_d2 = _d2.substr(0,len);
		_d2 = $u.s.pad(_d2,len,' ','l');
		if(flagCI) _d2 = _d2.toLowerCase();
		if(val <= _d2){
			 break;
		}
	}
	if(i2 > -1) { 
		this.scrollToItem(i2,{mode: pos, animation: anim});
	}
}
,
	_refreshStateMessages: function() {
	var ele = '';
	ele = $('DLG1.LIST_MENU.PAGENUMBER');
	if(ele) ele.innerHTML = this._state.page;
	ele = $('DLG1.LIST_MENU.PAGECOUNT');
	if(ele) ele.innerHTML = this._state.pageCount;
	ele = $('DLG1.LIST_MENU.PAGECOUNT.PAGESELECTOR');
	if(ele) ele.innerHTML = this._state.pageCount;	
	ele = $('DLG1.LIST_MENU.LISTSTATE');
	if(ele) {
		var listState = $u.o.toJSON(this._state);
		ele.innerHTML = listState;
	}
	//navigation buttons	
	ele = DLG1_DlgObj._buttons['BUTTON_LISTNAV_NEXT.LIST_MENU'];
	if(ele) {
		if(this._state.page == this._state.pageCount || this._state.pageCount == 0) ele.setDisabled(true);
		else ele.setDisabled(false);
	}
	ele = DLG1_DlgObj._buttons['BUTTON_LISTNAV_LAST.LIST_MENU'];
	if(ele) {
		if(this._state.page == this._state.pageCount || this._state.pageCount == 0) ele.setDisabled(true);
		else ele.setDisabled(false);
	}
	ele = DLG1_DlgObj._buttons['BUTTON_LISTNAV_FIRST.LIST_MENU'];
	if(ele) {
		if(this._state.page == 1 || this._state.pageCount == 0) ele.setDisabled(true);
		else ele.setDisabled(false);
	}
	ele = DLG1_DlgObj._buttons['BUTTON_LISTNAV_PREV.LIST_MENU'];
	if(ele) {
		if(this._state.page == 1 || this._state.pageCount == 0 ) ele.setDisabled(true);
		else ele.setDisabled(false);
	}
	ele = $('DLG1.V.R1.A5SYSTEM_LIST_PAGESELECTOR_LIST_MENU');
	if(ele) {
		var data = this._recordNavigatorLinks;
		if(data) A5.form.populateSelect(ele,this._state.page,data,true);
	}
}
,
	columnLayout: {
		header: {
			show: false
		}
	},
	_getRoute: function() { 
	var obj  = typeof arguments[1] != 'undefined' ? arguments[1] : [];
	var mode = typeof arguments[0] != 'undefined' ? arguments[0] : 'rowNumber'; //
	if(typeof this.selection[0] == 'undefined') return false;
	if(typeof this.getData(this.selection[0]) == 'undefined') return false;
	if(mode == 'rowNumber') obj.push({list: this.listVariableName, row: this.getData(this.selection[0])['*key']});
	else obj.push({list: this.listVariableName, row: this.getData(this.selection[0]).__primaryKey});
	for(var i = 0; i < this.childLists.length; i++) { 
		var lname = this.childLists[i];
		var lObj = window[this._hostComponentId + '_DlgObj'].getControl(lname);
		if(lObj) lObj._getRoute(mode,obj);
	}
	return obj;
}
,
	_setRoute: function(route) { 
	if(typeof route == 'undefined') { 
		route = this.__currentRoute;
		if(typeof route == 'undefined') return false;
	}
	var lObj = '';
	var row = '';
	for(var i = 0; i < route.length; i++) {
		lObj = window[this._hostComponentId + '_DlgObj'].getControl(route[i].list);
		row = route[i].row;
		var flag = typeof this._restoringList != 'undefined' ? !this._restoringList : true;
		if(typeof row != 'undefined') {
			var rowFixed = '';
			if(typeof lObj._dataMap == 'undefined') return false;
			//var msg = JSON.stringify(lObj._dataMap);
			//alert('route[i].row:' + route[i].row + ' ------ ' + msg);
			rowFixed = lObj._dataMap.indexOf(route[i].row);
			lObj.setValue(rowFixed,flag);
			if(this._clearServerSideErrors) this._clearServerSideErrors();
			if(this._showServerSideErrors) this._showServerSideErrors();
			if(this._showWriteConflictErrors) this._showWriteConflictErrors();
		}
	}
}
,
	_useServerSideSyncLog: false,
	_searchHighlighting: false
};
DLG1_DlgObj._listViewData['LIST_MENU'] = A5DataArrayToObject(['MenuName','Image','Action','Icon'],[['By Medical Condition','svgIcon=#cwcaduceus-blue:24','FindByCondition','svgIcon=#cwarrow:14'],['By Location','svgIcon=#cwmagnifier-tool-on-earth-globe:24','FindByLocation','svgIcon=#cwarrow:14'],['By Keywords','svgIcon=#cwkeyword-search:24','FindByKeywords','svgIcon=#cwarrow:14'],['Patient Communities','svgIcon=#cwCommunity:24','GotoCommunity','svgIcon=#cwarrow:14'],['Educational Materials','svgIcon=#cwEducation:24','FindEducationalMaterials','svgIcon=#cwarrow:14'],['My Profile','svgIcon=#cwprofile:24','MyProfile','svgIcon=#cwarrow:14']]);
;
DLG1_DlgObj.setStateInfo({ 	__dialogGuid: '11905014-56e4-478e-917d-dbfd82b5ab69', 	__dtfmt: 'MM/dd/yyyy' });
DLG1_DlgObj._controls['LIST_MENU'] =  { type: 'list',  data: DLG1_DlgObj._listViewData['LIST_MENU'],  settings: DLG1_DlgObj._listViewSettings['LIST_MENU'] }
DLG1_DlgObj.setVariables({});
DLG1_DlgObj._dataBoundControls = [];
DLG1_DlgObj._primaryTableAlias = '';
DLG1_DlgObj._listControlsInfo = {};
DLG1_DlgObj._functions.__fillContainer_LIST_MENU = function() { 
	var path = DLG1_PanelObj._panelPath['PANEL_MAIN'];
	if(typeof path != 'undefined') {
		var panel = DLG1_PanelObj.getPanel(path);
		var id = panel.src.getPanelId('body');
	} else {
		var id = DLG1_PanelObj.getPanelId('body');
	}
	DLG1_DlgObj._listViewSettings['LIST_MENU'].containerId = id;
	//blow away any existing content in the panel
	$(id).innerHTML = '';
}
DLG1_DlgObj._functions.__fillContainer_LIST_MENU();
DLG1_DlgObj._hasPanels = true;
DLG1_DlgObj._hasOnSynchronizeEvent = false;
A5.__dtfmt = 'MM/dd/yyyy';A5.__tfmt = '';
A5.__flagWorkingPreview = false;
A5.__flagIIS = false;
A5.__flagSimulateIIS = true;
DLG1_DlgObj._functions.calcOrientation = function() { 
	if(typeof DLG1_DlgObj == 'undefined') return '';
	var orientation = DLG1_DlgObj.getOrientation();
	if( orientation == 'landscape') {
			//landscape
			if(DLG1_DlgObj._orientation != 'landscape') {
				DLG1_DlgObj._fireWatches(1);	
				DLG1_DlgObj._orientation = 'landscape';
				DLG1_DlgObj._executeEvent('onOrientationChange',{orientation: 'landscape'});
			}
	} else {
		//portrait
		if(DLG1_DlgObj._orientation != 'portrait') {
				DLG1_DlgObj._fireWatches(1);	
				DLG1_DlgObj._orientation = 'portrait';
				DLG1_DlgObj._executeEvent('onOrientationChange',{orientation: 'portrait'});
			}
	}
}
	A5.flags.cordovaLoaded = true;
	try {
		document.addEventListener('deviceready', function() { 
			DLG1_DlgObj._executeEvent('onCordovaReady',{});
			DLG1_DlgObj._executeEvent('onPhoneGapReady',{});
			DLG1_DlgObj._cordovaReady = true;
			navigator.geolocation.getAccuratePosition = function(geolocationSuccess, geolocationError, options) {
	var _lastCheckedPosition = null;
	var _locationEventCount = 0;
	options = options || {};
	options.context = this;
    function _checkLocation(pos) {
        _lastCheckedPosition = pos;
        _locationEventCount++;
        if ((pos.coords.accuracy <= options.desiredAccuracy) && (_locationEventCount > options.ignoreResultCount)) {
            clearTimeout(_timerID);
            navigator.geolocation.clearWatch(_watchID);
            _foundPosition(pos);
        } 
    }
    function _stopLocationCheck() {
    	 var error = {};
    	 error.code = 0;
    	 error.message = 'Timeout: No results';
        navigator.geolocation.clearWatch(_watchID);
        _lastCheckedPosition ? _foundPosition(_lastCheckedPosition) : geolocationError.call(options.context,error);
    }
    function _onError(error) {
        clearTimeout(_timerID);
        navigator.geolocation.clearWatch(_watchID);
        geolocationError.call(options.context,error);
    }
    function _foundPosition(pos) {
        geolocationSuccess.call(options.context,pos);
    }
    if (!options.maxWait) {            
    	options.maxWait = 10000; 
    }	
    if (!options.desiredAccuracy) {
    	  options.desiredAccuracy = 20; 
    }
    if (!options.timeout) {
        options.timeout = options.maxWait;
	 }
	 if (!options.ignoreResultCount) {
	 		options.ignoreResultCount = 1;
	 }
    options.maximumAge = 0; 
    options.enableHighAccuracy = true; 
    var _watchID = navigator.geolocation.watchPosition(_checkLocation, _onError, options);
    var _timerID = setTimeout(_stopLocationCheck, options.maxWait); 
}
		} , false);	
	}
	catch(err) {}
DLG1_DlgObj._waitGif = 'css/A5System/Images/wait.gif';
DLG1_DlgObj._embeddedUXComponents = {
'FINDBYCONDITION' : {arguments: []},'FINDBYLOCATION' : {arguments: []},'FINDBYKEYWORDS' : {arguments: []},'COMMUNITIES' : {arguments: []},'EDUCATIONMATERIAL' : {arguments: []},'MYPROFILE' : {arguments: []}
}
DLG1_DlgObj._layoutMode = 'containerwidth';
DLG1_DlgObj._responsiveRulesMode = 'firsttrue';
DLG1_DlgObj.__controlNesting = {
PANELHEADER_MAIN: [],
PANELHEADER_COMMUNITIES: ['container:LEFT_BUTTONS','container:CONTAINER_CENTER'],
LEFT_BUTTONS: [],
CONTAINER_CENTER: []
}
DLG1_DlgObj._listsDV = [];
DLG1_DlgObj._listControls = ['LIST_MENU']
DLG1_DlgObj._localStorageSettings = {namespace: 'ALPHA_CWHome',friendlyName: 'Center Watch Home',description: 'Home screen',persistVariableValues: false,__version: 1,persistComponentState: false,workingPreviewTestingFolder: 'Local Storage Testing',restore: {variables: true,data: false,state: true},compressData: false,minify: false,variablesToNotPersist: '',workingPreviewTestingMode: 'Filesystem',compressListData: false}
DLG1_DlgObj.__r = ['3rkeltoSdQc=']
DLG1_DlgObj._staticHTMLMode = false
DLG1_DlgObj._EDITOR_EDITORSET = {};
DLG1_DlgObj.styleName = 'iOS7';
DLG1_DlgObj.styleVersion = 3
DLG1_DlgObj.framesInfo = {
};
DLG1_DlgObj._noPersist = []
$e.add('DLG1.V.R1.BUTTON_BACK',A5.d.evnts.click,function(e) {
DLG1_DlgObj.panelSetActive('PANEL_MAIN',true);
},this,false,'DLG1.V.R1.BUTTON_BACK');

DLG1_DlgObj.prepare();DLG1_DlgObj.populate(DLG1_DlgObj.originalValues[0]);
DLG1_DlgObj._fireWatches(1);

if(!A5.flags.isMobile) $e.add(window,'resize',DLG1_DlgObj._functions.calcOrientation);
else $e.add(window,'orientationchange',DLG1_DlgObj._orientationChangeHandler,DLG1_DlgObj,true);
DLG1_DlgObj._functions.calcOrientation();

var listObj = DLG1_DlgObj.getControl('LIST_MENU');
if(listObj) listObj._state.recordCount = 6;
if(listObj) listObj._state.recordCountFormatted = '6';
if(listObj) listObj._state.lastBreakValue = '<None>';
if(listObj) listObj._state.pageCount = 0;
if(listObj) listObj._state.pageSize = 20;
if(listObj) {var ele = $('DLG1.LIST_MENU.RECORDCOUNT'); if(ele) ele.innerHTML = listObj._state.recordCountFormatted;};
if(listObj) listObj._state.paginated = false;

if(listObj) listObj._state.filter = '';
if(listObj) listObj._state.having = '';
if(listObj) listObj._state.order = '';
if(listObj) listObj._state.filterParameters = '';
if(listObj) listObj._state.highlight = {  };
if(listObj) listObj._state.whereClause = '';
if(listObj) listObj._state.whereParameters = '';
		
		var flagPersist = false;
		if(typeof listObj._flagPersistDataOK != 'undefined') { 
			if(listObj._flagPersistDataOK) { 
				var data = listObj._data;
				listObj.persistToStorage({mode:'populate', data: data});
			}
		}
		
		
;
DLG1_DlgObj._list_executeEvent('LIST_MENU','afterRenderComplete',{});

if(listObj._refreshStateMessages) listObj._refreshStateMessages();

setTimeout(function() { },0);
DLG1_DlgObj._listsWithJSFuncDataSource = {};

DLG1_DlgObj._executeEvent('onInitializeComplete');
DLG1_DlgObj.initialized = true;

DLG1_DlgObj._onRenderComplete = function() { DLG1_DlgObj._runJSOnLoad(); DLG1_DlgObj._findActiveLayoutRule(); }; 

setTimeout(function() { var p = DLG1_DlgObj.panelGet('PANELNAVIGATOR_HOME'); if(p._sizing == 'window') { p._sizeWindow();} else { p.refresh(); } },100);
setTimeout(function() {DLG1_DlgObj._executeEvent('onRenderComplete'); DLG1_DlgObj.flagRenderComplete = true;  DLG1_DlgObj._restoreFromLocalStorage(); },1);

var o2 = 'portrait';
if(window.innerHeight < window.innerWidth) o2 = 'landscape';
DLG1_DlgObj._screen = {h: window.innerHeight, w: window.innerWidth, o: o2};

DLG1_DlgObj._getOnlineStatus();
try {
window.addEventListener("offline",function() { DLG1_DlgObj._fireOnConnectionChangeEvent() });
window.addEventListener("online",function() { DLG1_DlgObj._fireOnConnectionChangeEvent() });
} catch(err){}

setTimeout(function() {$e.execute('device.screen','a5resize')},1);
setTimeout(function() { },10);;
DLG1_DlgObj._activeLanguage = '<Default>';