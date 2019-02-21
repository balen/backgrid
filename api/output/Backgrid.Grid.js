Ext.data.JsonP.Backgrid_Grid({
  "tagname": "class",
  "name": "Backgrid.Grid",
  "autodetected": {
  },
  "files": [
    {
      "filename": "grid.js",
      "href": null
    }
  ],
  "extends": "Backgrid.View",
  "members": [
    {
      "name": "body",
      "tagname": "property",
      "owner": "Backgrid.Grid",
      "id": "property-body",
      "meta": {
      }
    },
    {
      "name": "className",
      "tagname": "property",
      "owner": "Backgrid.Grid",
      "id": "property-className",
      "meta": {
      }
    },
    {
      "name": "footer",
      "tagname": "property",
      "owner": "Backgrid.Grid",
      "id": "property-footer",
      "meta": {
      }
    },
    {
      "name": "header",
      "tagname": "property",
      "owner": "Backgrid.Grid",
      "id": "property-header",
      "meta": {
      }
    },
    {
      "name": "tagName",
      "tagname": "property",
      "owner": "Backgrid.Grid",
      "id": "property-tagName",
      "meta": {
      }
    },
    {
      "name": "initialize",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-initialize",
      "meta": {
      }
    },
    {
      "name": "insertColumn",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-insertColumn",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "insertRow",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-insertRow",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "remove",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-remove",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "removeColumn",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-removeColumn",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "removeRow",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-removeRow",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "render",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-render",
      "meta": {
        "chainable": true
      }
    },
    {
      "name": "sort",
      "tagname": "method",
      "owner": "Backgrid.Grid",
      "id": "method-sort",
      "meta": {
        "chainable": true
      }
    }
  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "id": "class-Backgrid.Grid",
  "short_doc": "Grid represents a data grid that has a header, body and an optional footer. ...",
  "component": false,
  "superclasses": [
    "Backgrid.View"
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backgrid.View<div class='subclass '><strong>Backgrid.Grid</strong></div></div></pre><div class='doc-contents'><p>Grid represents a data grid that has a header, body and an optional footer.</p>\n\n<p>By default, a Grid treats each model in a collection as a row, and each\nattribute in a model as a column. To render a grid you must provide a list of\ncolumn metadata and a collection to the Grid constructor. Just like any\nBackgrid.View class, the grid is rendered as a DOM node fragment when you\ncall render().</p>\n\n<pre><code>var grid = <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a>({\n  columns: [{ name: \"id\", label: \"ID\", type: \"string\" },\n   // ...\n  ],\n  collections: books\n});\n\n$(\"#table-container\").append(grid.render().el);\n</code></pre>\n\n<p>Optionally, if you want to customize the rendering of the grid's header and\nfooter, you may choose to extend <a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a> and <a href=\"#!/api/Backgrid.Footer\" rel=\"Backgrid.Footer\" class=\"docClass\">Backgrid.Footer</a>, and\nthen supply that class or an instance of that class to the Grid constructor.\nSee the documentation for Header and Footer for further details.</p>\n\n<pre><code>var grid = <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a>({\n  columns: [{ name: \"id\", label: \"ID\", type: \"string\" }],\n  collections: books,\n  header: Backgrid.Header.extend({\n       //...\n  }),\n  footer: Backgrid.Paginator\n});\n</code></pre>\n\n<p>Finally, if you want to override how the rows are rendered in the table body,\nyou can supply a Body subclass as the <code>body</code> attribute that uses a different\nRow class.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a></li>\n<li><a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a></li>\n<li><a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a></li>\n<li><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></li>\n<li><a href=\"#!/api/Backgrid.Footer\" rel=\"Backgrid.Footer\" class=\"docClass\">Backgrid.Footer</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-body' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-body' class='name expandable'>body</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-className' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-className' class='name expandable'>className</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;backgrid&quot;</code></p></div></div></div><div id='property-footer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-footer' class='name expandable'>footer</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-header' class='name expandable'>header</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;table&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes a Grid instance. ...</div><div class='long'><p>Initializes a Grid instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Columns\" rel=\"Backgrid.Columns\" class=\"docClass\">Backgrid.Columns</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'><p>The collection of tabular model data to display.</p>\n</div></li><li><span class='pre'>caption</span> : string (optional)<div class='sub-desc'><p>An optional caption to be added to the table.</p>\n<p>Defaults to: <code>string</code></p></div></li><li><span class='pre'>header</span> : <a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a> (optional)<div class='sub-desc'><p>An optional Header class to override the default.</p>\n<p>Defaults to: <code>Backgrid.Header</code></p></div></li><li><span class='pre'>body</span> : <a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a> (optional)<div class='sub-desc'><p>An optional Body class to override the default.</p>\n<p>Defaults to: <code>Backgrid.Body</code></p></div></li><li><span class='pre'>row</span> : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a> (optional)<div class='sub-desc'><p>An optional Row class to override the default.</p>\n<p>Defaults to: <code>Backgrid.Row</code></p></div></li><li><span class='pre'>footer</span> : <a href=\"#!/api/Backgrid.Footer\" rel=\"Backgrid.Footer\" class=\"docClass\">Backgrid.Footer</a> (optional)<div class='sub-desc'><p>An optional Footer class.</p>\n<p>Defaults to: <code>Backgrid.Footer</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-insertColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-insertColumn' class='name expandable'>insertColumn</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Delegates to Backgrid.Columns#add for adding a column. ...</div><div class='long'><p>Delegates to Backgrid.Columns#add for adding a column. Subviews can listen\nto the <code>add</code> event from their internal <code>columns</code> if rerendering needs to\nhappen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Options for <code>Backgrid.Columns#add</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-insertRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-insertRow' class='name expandable'>insertRow</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Delegates to Backgrid.Body.insertRow. ...</div><div class='long'><p>Delegates to <a href=\"#!/api/Backgrid.Body-method-insertRow\" rel=\"Backgrid.Body-method-insertRow\" class=\"docClass\">Backgrid.Body.insertRow</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Clean up this grid and its subviews. ...</div><div class='long'><p>Clean up this grid and its subviews.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-removeColumn' class='name expandable'>removeColumn</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Delegates to Backgrid.Columns#remove for removing a column. ...</div><div class='long'><p>Delegates to Backgrid.Columns#remove for removing a column. Subviews can\nlisten to the <code>remove</code> event from the internal <code>columns</code> if rerendering\nneeds to happen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Options for <code>Backgrid.Columns#remove</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-removeRow' class='name expandable'>removeRow</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Delegates to Backgrid.Body.removeRow. ...</div><div class='long'><p>Delegates to <a href=\"#!/api/Backgrid.Body-method-removeRow\" rel=\"Backgrid.Body-method-removeRow\" class=\"docClass\">Backgrid.Body.removeRow</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Renders the grid's caption, then header, then footer, then finally the body. ...</div><div class='long'><p>Renders the grid's caption, then header, then footer, then finally the body. Triggers a\nBackbone <code>backgrid:rendered</code> event along with a reference to the grid when\nthe it has successfully been rendered.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-sort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-sort' class='name expandable'>sort</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Delegates to Backgrid.Body.sort. ...</div><div class='long'><p>Delegates to <a href=\"#!/api/Backgrid.Body-method-sort\" rel=\"Backgrid.Body-method-sort\" class=\"docClass\">Backgrid.Body.sort</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>",
  "meta": {
  }
});