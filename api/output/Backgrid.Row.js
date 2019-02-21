Ext.data.JsonP.Backgrid_Row({
  "tagname": "class",
  "name": "Backgrid.Row",
  "autodetected": {
  },
  "files": [
    {
      "filename": "row.js",
      "href": null
    }
  ],
  "extends": "Backgrid.View",
  "members": [
    {
      "name": "tagName",
      "tagname": "property",
      "owner": "Backgrid.Row",
      "id": "property-tagName",
      "meta": {
      }
    },
    {
      "name": "initialize",
      "tagname": "method",
      "owner": "Backgrid.Row",
      "id": "method-initialize",
      "meta": {
      }
    },
    {
      "name": "makeCell",
      "tagname": "method",
      "owner": "Backgrid.Row",
      "id": "method-makeCell",
      "meta": {
        "protected": true
      }
    },
    {
      "name": "remove",
      "tagname": "method",
      "owner": "Backgrid.Row",
      "id": "method-remove",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "render",
      "tagname": "method",
      "owner": "Backgrid.Row",
      "id": "method-render",
      "meta": {
        "chainable": true
      }
    }
  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "id": "class-Backgrid.Row",
  "short_doc": "Row is a simple container view that takes a model instance and a list of\ncolumn metadata describing how each of the m...",
  "component": false,
  "superclasses": [
    "Backgrid.View"
  ],
  "subclasses": [
    "Backgrid.HeaderRow"
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backgrid.View<div class='subclass '><strong>Backgrid.Row</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.HeaderRow' rel='Backgrid.HeaderRow' class='docClass'>Backgrid.HeaderRow</a></div></pre><div class='doc-contents'><p>Row is a simple container view that takes a model instance and a list of\ncolumn metadata describing how each of the model's attribute is to be\nrendered, and apply the appropriate cell to each attribute.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-property-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;tr&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes a row view instance. ...</div><div class='long'><p>Initializes a row view instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>The model instance to render.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.model is undefined.</p>\n</div></li></ul></div></div></div><div id='method-makeCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-makeCell' class='name expandable'>makeCell</a>( <span class='pre'>column, options</span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Factory method for making a cell. ...</div><div class='long'><p>Factory method for making a cell. Used by <a href=\"#!/api/Backgrid.Row-method-initialize\" rel=\"Backgrid.Row-method-initialize\" class=\"docClass\">initialize</a> internally. Override\nthis to provide an appropriate cell instance for a custom Row subclass.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>The options passed to <a href=\"#!/api/Backgrid.Row-method-initialize\" rel=\"Backgrid.Row-method-initialize\" class=\"docClass\">initialize</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Clean up this row and its cells. ...</div><div class='long'><p>Clean up this row and its cells.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Renders a row of cells for this row's model. ...</div><div class='long'><p>Renders a row of cells for this row's model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>",
  "meta": {
  }
});