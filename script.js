//ICONO DE HIDE EN NODO//
var hideIcon =
  '<svg width="24" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"' +
  'viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' +
  '<path fill="#757575" d="M316.332,195.662c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.944,0,15.083' +
  "c12.075,12.075,18.752,28.139,18.752,45.248c0,35.285-28.715,64-64,64c-17.109,0-33.173-6.656-45.248-18.752" +
  "c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.139-4.16,10.923,0,15.083c16.085,16.128,37.525,25.003,60.331,25.003" +
  'c47.061,0,85.333-38.272,85.333-85.333C341.334,233.187,332.46,211.747,316.332,195.662z"/>' +
  '<path fill="#757575" d="M270.87,172.131c-4.843-0.853-9.792-1.472-14.869-1.472c-47.061,0-85.333,38.272-85.333,85.333' +
  "c0,5.077,0.619,10.027,1.493,14.869c0.917,5.163,5.419,8.811,10.475,8.811c0.619,0,1.237-0.043,1.877-0.171" +
  "c5.781-1.024,9.664-6.571,8.64-12.352c-0.661-3.627-1.152-7.317-1.152-11.157c0-35.285,28.715-64,64-64" +
  'c3.84,0,7.531,0.491,11.157,1.131c5.675,1.152,11.328-2.859,12.352-8.64C280.534,178.702,276.652,173.155,270.87,172.131z"/>' +
  '<path fill="#757575" d="M509.462,249.102c-2.411-2.859-60.117-70.208-139.712-111.445c-5.163-2.709-11.669-0.661-14.379,4.587' +
  "c-2.709,5.227-0.661,11.669,4.587,14.379c61.312,31.744,110.293,81.28,127.04,99.371c-25.429,27.541-125.504,128-230.997,128" +
  "c-35.797,0-71.872-8.64-107.264-25.707c-5.248-2.581-11.669-0.341-14.229,4.971c-2.581,5.291-0.341,11.669,4.971,14.229" +
  "c38.293,18.496,77.504,27.84,116.523,27.84c131.435,0,248.555-136.619,253.483-142.443" +
  'C512.854,258.915,512.833,253.091,509.462,249.102z"/>' +
  '<path fill="#757575" d="M325.996,118.947c-24.277-8.171-47.829-12.288-69.995-12.288c-131.435,0-248.555,136.619-253.483,142.443' +
  "c-3.115,3.669-3.371,9.003-0.597,12.992c1.472,2.112,36.736,52.181,97.856,92.779c1.813,1.216,3.84,1.792,5.888,1.792" +
  "c3.435,0,6.827-1.664,8.875-4.8c3.264-4.885,1.92-11.52-2.987-14.763c-44.885-29.845-75.605-65.877-87.104-80.533" +
  "c24.555-26.667,125.291-128.576,231.552-128.576c19.861,0,41.131,3.755,63.189,11.157c5.589,2.005,11.648-1.088,13.504-6.699" +
  'C334.572,126.862,331.585,120.825,325.996,118.947z"/>' +
  '<path fill="#757575" d="M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083' +
  "c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211" +
  'C449.025,78.051,449.025,71.288,444.865,67.128z"/>';
//FUNCION PARA OCULTAR UN NODO EN NODOMENU//
var hide = function (id) {
  var node = chart.getNode(id);
  chart.collapse(node.pid, [id]);
};
/*Funciones para importar*/
function importJSONHandler() {
  chart.importJSON();
}
function importCSVHandler() {
  chart.importCSV();
}

//CHECKBOX PARA OCULTAR//
var focusMode = false;
function dmodeclick() {
  if (chart.config.nodeMenu == null) {
    chart.config.nodeMenu = nodeMenu;
    chart.config.nodeMouseClick = OrgChart.action.details;
  } else {
    chart.config.nodeMenu = null;
    chart.config.nodeMouseClick = OrgChart.action.none;
  }
  chart.draw();
}
function fmodeclick() {
  focusMode = !focusMode;
}
//HACE QUE LAS LINEAS NO PASEN ENCIMA DEL NODO//
OrgChart.RENDER_LINKS_BEFORE_NODES = true;
/*CREAR ORGANIGRAMA*/
var chart = new OrgChart(document.getElementById("tree"), {
  /*OPCIONES*/
  // COLAPSAR LOS NODOS A NIVEL 2 Y OCULTAR TODOS LOS HIJOS DESPLEGADOS//
  collapse: {
    level: 1,
    allChildren: true,
  },
  //ARRASTRAR Y SOLTAR//
  enableDragDrop: true,
  //ALINIACION//
  scaleInitial: OrgChart.match.boundary,
  //MOVER NODOS Y QUE SE QUEDEN ESTATICOS//
  movable: OrgChart.movable.node,
  //MOVER ARBOLES Y QUE SE QUEDEN ESTATICOS//
  movable: OrgChart.movable.tree,
  //FORMA COMO SE ACOMODAN LOS NODOS//
  toolbar: {
    layout: true,
    zoom: true,
    fit: true,
    expandAll: true,
  },
  ////////////////////////////////////////////
  //PLANTILLA//
  template: "myTemplate",
  ////////////////////////////////////////////
  menu: {
    pdfPreview: {
      text: "PDF Preview",
      icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
      onClick: preview
    },
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    csv: { text: "Export CSV" },
    json: { text: "Export JSON" },
    importCSV: {
      text: "Import CSV",
      icon: OrgChart.icon.csv(24, 24, "red"),
      onClick: importCSVHandler,
    },
    importJSON: {
      text: "Import JSON",
      icon: OrgChart.icon.json(24, 24, "red"),
      onClick: importJSONHandler,
    },
    "focus-mode": {
      icon: function () {
        var checked = focusMode == true ? "checked" : "";
        return (
          '<input id="focus-mode" class="check-box" onclick="fmodeclick()" type="checkbox" ' +
          checked +
          ">"
        );
      },
      text: '<label for="focus-mode">Focus On/Off</label>',
      onClick: function () {
        return false;
      },
    },
    
  },
  ////////////////////////////////////////////
  nodeMenu: {
    pdfPreview: {
      text: "PDF Preview",
      icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
      onClick: preview
    },
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    svg: { text: "Export SVG" },
    details: { text: "Details" },
    edit: { text: "Edit" },
    add: { text: "Add" },
    remove: { text: "Remove" },
    hide: {
      icon: hideIcon,
      text: "Hide",
      onClick: hide,
    },
  },
  ////////////////////////////////////////////
  nodeBinding: {
    field_0: "title",
    field_1: "name",
  },

  ////////////////////////////////////////////
  editForm: {
    generateElementsFromFields: true,
    elements: [
      {
        type: "textbox",
        label: "Posición",
        binding: "title",
      },
      {
        type: "textbox",
        label: "Nombre",
        binding: "name",
      },
      {
        type: "textbox",
        label: "Sociedad",
        binding: "Sociedad",
      },
      {
        type: "textbox",
        label: "Ubicación",
        binding: "SubDivision",
      },
      {
        type: "textbox",
        label: "Jefe directo",
        binding: "Supervisor",
      },
      {
        type: "textbox",
        label: "Área",
        binding: "Area",
      },
      {
        type: "textbox",
        label: "Gerencia",
        binding: "Gerencia",
      },
    ],
  },
  //ALINIACION//
  align: OrgChart.ORIENTATION,
  
});
//QUE CUANDO SE OCULTE SE OCULTE TODO LO DESPLEGADO//
function iterate(c, n, collapseIds, id) {
  if (id != n.id) {
    collapseIds.push(n.id);
  }

  for (var i = 0; i < n.childrenIds.length; i++) {
    iterate(c, c.getNode(n.childrenIds[i]), collapseIds, id);
  }
}

chart.onExpandCollpaseButtonClick((args) => {
  if (args.collapsing) {
    var node = chart.getNode(args.id);
    var collapseIds = [];
    iterate(chart, node, collapseIds, args.id);
    chart.expandCollapse(args.id, [], collapseIds);
    return false;
  }
});

//COLAPSA LOS OTROS NODOS QUE NO SE SELECCIONARON/
// chart.on("expcollclick", function (sender, collapse, id, ids) {
//   if (!collapse) {
//     sender.center(id, {
//       parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
//       childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
//       rippleId: id,
//     });
//     return false;
//   }
// });
chart.on("expcollclick", function (sender, collpase, id, ids) {
  if (focusMode) {
    var node = sender.getNode(id);
    var centerId = id;
    var rippleId = id;
    if (collpase) {
      var node = sender.getNode(id);
      if (node.parent == null) return true;
      centerId = node.pid;
    }
    sender.center(centerId, {
      parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
      childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
      rippleId: rippleId,
      vertical: false,
      horizontal: true,
    });
    return false;
  } else {
    return true;
  }
});

////////////////////////
function preview() {
  OrgChart.pdfPrevUI.show(chart, {
      format: 'A4',
      landscape: true,
      padding: 50
  });
}

//NODOS//
chart.load([]);
//////////////////////
