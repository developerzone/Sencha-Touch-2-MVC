Ext.data.JsonP.Ext_chart_interactions_Reset({"html_meta":{"author":null,"docauthor":null},"mixins":[],"code_type":"ext_define","inheritable":false,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='docClass'>Ext.chart.interactions.Abstract</a><div class='subclass '><strong>Ext.chart.interactions.Reset</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.mixin.Identifiable</div><div class='dependency'>Ext.mixin.Observable</div><h4>Files</h4><div class='dependency'><a href='source/Reset.html#Ext-chart-interactions-Reset' target='_blank'>Reset.js</a></div></pre><div class='doc-contents'><p>The Reset interaction allows resetting of all previous user interactions with\nthe chart. By default the reset is triggered by a double-tap on the empty chart\narea; to customize the event use the event config.</p>\n\n<p>To attach this interaction to a chart, include an entry in the chart's\n<a href=\"#!/api/Ext.chart.Chart-cfg-interactions\" rel=\"Ext.chart.Chart-cfg-interactions\" class=\"docClass\">interactions</a> config with the <code>reset</code> type:</p>\n\n<pre><code>new <a href=\"#!/api/Ext.chart.Chart\" rel=\"Ext.chart.Chart\" class=\"docClass\">Ext.chart.Chart</a>({\n    renderTo: Ext.getBody(),\n    width: 800,\n    height: 600,\n    store: store1,\n    axes: [ ...some axes options... ],\n    series: [ ...some series options... ],\n    interactions: [{\n        type: 'reset'\n    }]\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-chart' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-cfg-chart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-cfg-chart' class='name expandable'>chart</a><span> : <a href=\"#!/api/Ext.chart.Chart\" rel=\"Ext.chart.Chart\" class=\"docClass\">Ext.chart.Chart</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-confirm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Reset'>Ext.chart.interactions.Reset</span><br/><a href='source/Reset.html#Ext-chart-interactions-Reset-cfg-confirm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Reset-cfg-confirm' class='name expandable'>confirm</a><span> : Boolean</span></div><div class='description'><div class='short'>If set to true, a dialog will be presented to the user to confirm that they want to reset\nthe chart. ...</div><div class='long'><p>If set to <code>true</code>, a dialog will be presented to the user to confirm that they want to reset\nthe chart.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-confirmText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Reset'>Ext.chart.interactions.Reset</span><br/><a href='source/Reset.html#Ext-chart-interactions-Reset-cfg-confirmText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Reset-cfg-confirmText' class='name expandable'>confirmText</a><span> : String</span></div><div class='description'><div class='short'>Specifies the text displayed in the confirmation dialog, if confirm is true. ...</div><div class='long'><p>Specifies the text displayed in the confirmation dialog, if <a href=\"#!/api/Ext.chart.interactions.Reset-cfg-confirm\" rel=\"Ext.chart.interactions.Reset-cfg-confirm\" class=\"docClass\">confirm</a> is <code>true</code>.</p>\n<p>Defaults to: <code>&quot;Reset the chart?&quot;</code></p></div></div></div><div id='cfg-confirmTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Reset'>Ext.chart.interactions.Reset</span><br/><a href='source/Reset.html#Ext-chart-interactions-Reset-cfg-confirmTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Reset-cfg-confirmTitle' class='name expandable'>confirmTitle</a><span> : String</span></div><div class='description'><div class='short'>Specifies the title displayed in the confirmation dialog, if confirm is true. ...</div><div class='long'><p>Specifies the title displayed in the confirmation dialog, if <a href=\"#!/api/Ext.chart.interactions.Reset-cfg-confirm\" rel=\"Ext.chart.interactions.Reset-cfg-confirm\" class=\"docClass\">confirm</a> is <code>true</code>.</p>\n<p>Defaults to: <code>&quot;Reset&quot;</code></p></div></div></div><div id='cfg-gesture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Reset'>Ext.chart.interactions.Reset</span><br/><a href='source/Reset.html#Ext-chart-interactions-Reset-cfg-gesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Reset-cfg-gesture' class='name expandable'>gesture</a><span> : String</span></div><div class='description'><div class='short'>Defines the gesture type that should trigger the chart reset. ...</div><div class='long'><p>Defines the gesture type that should trigger the chart reset. Gestures that occur on a series\nitem will be ignored.</p>\n<p>Defaults to: <code>&quot;doubletap&quot;</code></p><p>Overrides: <a href='#!/api/Ext.chart.interactions.Abstract-cfg-gesture' rel='Ext.chart.interactions.Abstract-cfg-gesture' class='docClass'>Ext.chart.interactions.Abstract.gesture</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChartListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-addChartListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-addChartListener' class='name expandable'>addChartListener</a>( <span class='pre'>Object name, Object fn, Object scope, Object opts</span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Add an event listener to this interaction's chart. ...</div><div class='long'><p>Add an event listener to this interaction's chart. All ineteraction event listeners\nshould be attached using this method, since it adds logic for honoring event locks.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemForEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-getItemForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemForEvent' class='name expandable'>getItemForEvent</a>( <span class='pre'>Event e</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Find and return a single series item corresponding to the given event,\nor null if no matching item is found. ...</div><div class='long'><p>Find and return a single series item corresponding to the given event,\nor null if no matching item is found.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the item object or null if none found.</p>\n</div></li></ul></div></div></div><div id='method-getItemsForEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-getItemsForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemsForEvent' class='name expandable'>getItemsForEvent</a>( <span class='pre'>Event e</span> ) : Array<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Find and return all series items corresponding to the given event. ...</div><div class='long'><p>Find and return all series items corresponding to the given event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>array of matching item objects</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>A method to be implemented by subclasses where all event attachment should occur. ...</div><div class='long'><p>A method to be implemented by subclasses where all event attachment should occur.</p>\n</div></div></div><div id='method-onGesture' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-onGesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-onGesture' class='name expandable'>onGesture</a>( <span class='pre'></span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Placeholder method. ...</div><div class='long'><p>Placeholder method.</p>\n</div></div></div></div></div></div></div>","subclasses":[],"component":false,"meta":{"author":["Nicolas Garcia Belmonte <nicolas@sencha.com>"],"docauthor":["Jason Johnston <jason@sencha.com>"]},"mixedInto":[],"aliases":{},"superclasses":["Ext.Base","Ext.chart.interactions.Abstract"],"parentMixins":["Ext.mixin.Identifiable","Ext.mixin.Observable"],"inheritdoc":null,"members":{"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"addChartListener","id":"method-addChartListener"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"getItemForEvent","id":"method-getItemForEvent"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"getItemsForEvent","id":"method-getItemsForEvent"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"initialize","id":"method-initialize"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"onGesture","id":"method-onGesture"}],"cfg":[{"meta":{},"owner":"Ext.chart.interactions.Abstract","tagname":"cfg","name":"chart","id":"cfg-chart"},{"meta":{},"owner":"Ext.chart.interactions.Reset","tagname":"cfg","name":"confirm","id":"cfg-confirm"},{"meta":{},"owner":"Ext.chart.interactions.Reset","tagname":"cfg","name":"confirmText","id":"cfg-confirmText"},{"meta":{},"owner":"Ext.chart.interactions.Reset","tagname":"cfg","name":"confirmTitle","id":"cfg-confirmTitle"},{"meta":{},"owner":"Ext.chart.interactions.Reset","tagname":"cfg","name":"gesture","id":"cfg-gesture"}]},"tagname":"class","extends":"Ext.chart.interactions.Abstract","name":"Ext.chart.interactions.Reset","alternateClassNames":[],"requires":[],"files":[{"href":"Reset.html#Ext-chart-interactions-Reset","filename":"Reset.js"}],"singleton":false,"id":"class-Ext.chart.interactions.Reset","statics":{"property":[],"event":[],"css_var":[],"css_mixin":[],"method":[],"cfg":[]}});