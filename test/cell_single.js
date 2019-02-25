/*
  backgrid
  http://github.com/cloudflare/backgrid
  Copyright (c) 2013-present Cloudflare, Inc. and contributors
  Licensed under the MIT license.
*/
function emit(element, event) {
  if (element.dispatchEvent) {
    element.dispatchEvent(event);
  }
  else if (element.fireEvent) {
    element.fireEvent("on" + event.type, event);
  }
}

describe("A Cell", function () {

  var book;
  var column;
  var cell;

  beforeEach(function () {
    book = new Backbone.Model({
      title: "title"
    });

    column = {
      name: "title",
      cell: "string"
    };

    cell = new Backgrid.Cell({
      model: book,
      column: column
    });
  });

  // it("uses the formatter from the column if one is given", function () {
  //
  //   var formatter = {
  //     fromRaw: function (rawValue) {
  //       return rawValue;
  //     },
  //     toRaw: function (formattedValue) {
  //       return formattedValue;
  //     }
  //   };
  //
  //   column = {
  //     name: "title",
  //     cell: "string",
  //     formatter: formatter
  //   };
  //
  //   cell = new Backgrid.Cell({
  //     model: book,
  //     column: column
  //   });
  //
  //   expect(cell.formatter).toBe(formatter);
  // });

  // it("adds an editable, sortable and a renderable class to the cell if these column attributes are true", function () {
  //   column = {
  //     name: "title",
  //     cell: "string"
  //   };
  //
  //   cell = new Backgrid.Cell({
  //     model: book,
  //     column: column
  //   });
  //
  //   expect($(cell.el).hasClass("editable")).toBe(true);
  //   expect($(cell.el).hasClass("sortable")).toBe(true);
  //   expect($(cell.el).hasClass("renderable")).toBe(true);
  //
  //   // cell.column.set("editable", false);
  //   // expect($(cell.el).hasClass("editable")).toBe(false);
  //   //
  //   // cell.column.set("sortable", false);
  //   // expect($(cell.el).hasClass("sortable")).toBe(false);
  //   //
  //   // cell.column.set("renderable", false);
  //   // expect($(cell.el).hasClass("renderable")).toBe(false);
  //
  //   var TrueCol = Backgrid.Column.extend({
  //     mySortable: function () { return true; },
  //     myRenderable: function () { return true; },
  //     myEditable: function () { return true; }
  //   });
  //
  //   var FalseCol = Backgrid.Column.extend({
  //     mySortable: function () { return false; },
  //     myRenderable: function () { return false; },
  //     myEditable: function () { return false; }
  //   });
  //
  //   column = new TrueCol({
  //     name: "title",
  //     cell: "string",
  //     sortable: "mySortable",
  //     renderable: "myRenderable",
  //     editable: "myEditable"
  //   });
  //
  //   cell = new Backgrid.Cell({
  //     model: book,
  //     column: column
  //   });
  //
  //   expect($(cell.el).hasClass("editable")).toBe(true);
  //   expect($(cell.el).hasClass("sortable")).toBe(true);
  //   expect($(cell.el).hasClass("renderable")).toBe(true);
  //
  //   column = new FalseCol({
  //     name: "title",
  //     cell: "string",
  //     sortable: "mySortable",
  //     renderable: "myRenderable",
  //     editable: "myEditable"
  //   });
  //
  //   cell = new Backgrid.Cell({
  //     model: book,
  //     column: column
  //   });
  //
  //   expect($(cell.el).hasClass("editable")).toBe(false);
  //   expect($(cell.el).hasClass("sortable")).toBe(false);
  //   expect($(cell.el).hasClass("renderable")).toBe(false);
  //
  //   column = new Backgrid.Column({
  //     name: "title",
  //     cell: "string",
  //     sortable: function () { return true; },
  //     editable: function () { return true; },
  //     renderable: function () { return true; }
  //   });
  //
  //   cell = new Backgrid.Cell({
  //     model: book,
  //     column: column
  //   });
  //
  //   expect($(cell.el).hasClass("editable")).toBe(true);
  //   expect($(cell.el).hasClass("sortable")).toBe(true);
  //   expect($(cell.el).hasClass("renderable")).toBe(true);
  // });

  // it("renders a td with the model value formatted for display", function () {
  //   cell.render();
  //   expect($(cell.el).text()).toBe("title");
  // });

  it("#472 updates editable, sortable, and renderable when rerendering", function () {

    function starable (model) {
      console.log('---> STARABLE', model.get("title") == "Alice in Wonderland");
      return model.get("title") == "Alice in Wonderland";
    }

    var TestCol = Backgrid.Column.extend({
      myEditable: starable,
      myRenderable: starable,
      mySortable: starable
    });

    column = new TestCol({
      name: "title",
      cell: "string",
      editable: "myEditable",
      renderable: "myRenderable",
      sortable: "mySortable"
    });

    cell = new Backgrid.Cell({
      model: book,
      column: column
    });

    cell.render();

    book.set("title", "Alice in Wonderland");
    expect($(cell.el).hasClass("editable")).toBe(true);
    expect($(cell.el).hasClass("sortable")).toBe(true);
    expect($(cell.el).hasClass("renderable")).toBe(true);

    book.set("title", "Oliver Twist");
    expect($(cell.el).hasClass("editable")).toBe(false);
    expect($(cell.el).hasClass("sortable")).toBe(false);
    expect($(cell.el).hasClass("renderable")).toBe(false);
  });

  // it("goes into edit mode on click", function () {
  //   cell.render();
  //   $(cell.el).click();
  //   expect($(cell.el).hasClass("editor")).toBe(true);
  // });

  // it("goes into edit mode when `enterEditMode` is called", function () {
  //   cell.render();
  //   cell.enterEditMode();
  //   expect($(cell.el).hasClass("editor")).toBe(true);
  // });

  // it("goes back into display mode when `exitEditMode` is called", function () {
  //   cell.render();
  //
  //   $(cell.el).click();
  //   cell.exitEditMode();
  //   expect($(cell.el).hasClass("editor")).toBe(false);
  //   expect($(cell.el).text()).toBe("title");
  // });

  // it("renders error when the editor triggers 'backgrid:error'", function () {
  //
  //   cell.formatter = {
  //     fromRaw: function () {},
  //     toRaw: function () {}
  //   };
  //
  //   cell.render();
  //   $(cell.el).click();
  //
  //   var editor = cell.currentEditor;
  //   $(editor.el).val(undefined);
  //
  //   // var enter = $.Event("keydown", { keyCode: 13 });
  //   // $(editor.el).trigger(enter);
  //   emit(editor.el, SyntheticEvent("keydown", {keyCode: 13, bubbles: true, cancelable: true}));
  //
  //   expect($(cell.el).hasClass("error")).toBe(true);
  //   expect($(cell.el).hasClass("editor")).toBe(true);
  // });

  // it("removes the editor correctly when removing the cell", function() {
  //   cell.render();
  //   $(cell.el).click();
  //
  //   var editor = cell.currentEditor;
  //
  //   spyOn(editor, "remove");
  //
  //   cell.remove("argument1", "argument2");
  //
  //   expect(editor.remove).toHaveBeenCalledWith("argument1", "argument2");
  // });

  // describe("when the model value has changed", function () {
  //   it("refreshes during display mode", function () {
  //     cell.render();
  //     book.set("title", "another title");
  //     expect($(cell.el).text()).toBe("another title");
  //   });
  //
  //   it("does not refresh during display mode if the change was silenced", function () {
  //     cell.render();
  //     book.set("title", "another title", {silent: true});
  //     expect($(cell.el).text()).toBe("title");
  //   });
  //
  //   it("does not refresh during edit mode", function () {
  //     cell.render();
  //     $(cell.el).click();
  //     book.set("title", "another title");
  //     expect($(cell.el).find("input[type=text]").val(), "title");
  //   });
  // });

});
