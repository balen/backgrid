Ext.data.JsonP.Backgrid_BooleanCellEditor({
  "tagname": "class",
  "name": "Backgrid.BooleanCellEditor",
  "autodetected": {
  },
  "files": [
    {
      "filename": "cell.js",
      "href": null
    }
  ],
  "extends": "Backgrid.CellEditor",
  "members": [
    {
      "name": "attributes",
      "tagname": "property",
      "owner": "Backgrid.BooleanCellEditor",
      "id": "property-attributes",
      "meta": {
      }
    },
    {
      "name": "events",
      "tagname": "property",
      "owner": "Backgrid.BooleanCellEditor",
      "id": "property-events",
      "meta": {
      }
    },
    {
      "name": "tagName",
      "tagname": "property",
      "owner": "Backgrid.BooleanCellEditor",
      "id": "property-tagName",
      "meta": {
      }
    },
    {
      "name": "enterOrExitEditMode",
      "tagname": "method",
      "owner": "Backgrid.BooleanCellEditor",
      "id": "method-enterOrExitEditMode",
      "meta": {
      }
    },
    {
      "name": "initialize",
      "tagname": "method",
      "owner": "Backgrid.CellEditor",
      "id": "method-initialize",
      "meta": {
      }
    },
    {
      "name": "postRender",
      "tagname": "method",
      "owner": "Backgrid.CellEditor",
      "id": "method-postRender",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "render",
      "tagname": "method",
      "owner": "Backgrid.BooleanCellEditor",
      "id": "method-render",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "saveOrCancel",
      "tagname": "method",
      "owner": "Backgrid.BooleanCellEditor",
      "id": "method-saveOrCancel",
      "meta": {
      }
    }
  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "id": "class-Backgrid.BooleanCellEditor",
  "component": false,
  "superclasses": [
    "Backgrid.View",
    "Backgrid.CellEditor"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "mixins": [

  ],
  "parentMixins": [

  ],
  "requires": [

  ],
  "uses": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backgrid.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><strong>Backgrid.BooleanCellEditor</strong></div></div></div></pre><div class='doc-contents'><p>BooleanCellEditor renders a checkbox as its editor.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCellEditor'>Backgrid.BooleanCellEditor</span><br/></div><a href='#!/api/Backgrid.BooleanCellEditor-property-attributes' class='name expandable'>attributes</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCellEditor'>Backgrid.BooleanCellEditor</span><br/></div><a href='#!/api/Backgrid.BooleanCellEditor-property-events' class='name expandable'>events</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCellEditor'>Backgrid.BooleanCellEditor</span><br/></div><a href='#!/api/Backgrid.BooleanCellEditor-property-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;input&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterOrExitEditMode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCellEditor'>Backgrid.BooleanCellEditor</span><br/></div><a href='#!/api/Backgrid.BooleanCellEditor-method-enterOrExitEditMode' class='name expandable'>enterOrExitEditMode</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Hack to deal with the case where <code>blur</code> is fired before\n<code>change</code> and <code>click</code> on a checkbox.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a><div class='sub-desc'>\n</div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>formatter</code> is not a formatter instance, or when\n<code>model</code> or <code>column</code> are undefined.</p>\n</div></li></ul></div></div></div><div id='method-postRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'>model, column</span> ) : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Post-rendering setup and initialization. ...</div><div class='long'><p>Post-rendering setup and initialization. Focuses the cell editor's <code>el</code> in\nthis default implementation. <strong>Should</strong> be called by Cell classes after\ncalling Backgrid.CellEditor#render.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCellEditor'>Backgrid.BooleanCellEditor</span><br/></div><a href='#!/api/Backgrid.BooleanCellEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.BooleanCellEditor\" rel=\"Backgrid.BooleanCellEditor\" class=\"docClass\">Backgrid.BooleanCellEditor</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Renders a checkbox and check it if the model value of this column is true,\nuncheck otherwise. ...</div><div class='long'><p>Renders a checkbox and check it if the model value of this column is true,\nuncheck otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.BooleanCellEditor\" rel=\"Backgrid.BooleanCellEditor\" class=\"docClass\">Backgrid.BooleanCellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-saveOrCancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCellEditor'>Backgrid.BooleanCellEditor</span><br/></div><a href='#!/api/Backgrid.BooleanCellEditor-method-saveOrCancel' class='name expandable'>saveOrCancel</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Save the value into the model if the event is <code>change</code> or\none of the keyboard navigation key presses. Exit edit mode without saving\nif <code>escape</code> was pressed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>",
  "meta": {
  }
});