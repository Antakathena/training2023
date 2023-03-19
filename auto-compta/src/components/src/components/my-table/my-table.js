"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModal = void 0;
const core_1 = require("@stencil/core");
let MyModal = class MyModal {
    constructor() {
        this.myheaders = ['date', 'montant', 'moyen', 'tiers', 'date de l\'opération', 'numéro de chèque', 'catégorie'];
    }
    /*     const dynamicTable = document.getElementById('dynamicTable');
        const btn = document.getElementById('dynamicTableButton');
    
        const functionCreateTable = function createTable (headersArray, operationsObject) {
            console.log('coucou');
            const headers = headersArray;
            const filling = operationsObject;
            // créer les headers
            const THead = dynamicTable.createTHead();
            const firstRow = THead.insertRow(0);
            for (let i = 0; i < headers.length; i++) {
                const columnHeader = firstRow.insertcell(i);
                const headerText = document.createTextNode(headers[i]);
                columnHeader.appendChild(headerText);
            };
            console.log(dynamicTable);
            console.log(filling); */
    /*     };
    
      functionCreateTable(myheaders, operationsObj[0]); */
    getTitle() {
        return this.myTitle;
    }
    render() {
        return (<article id='my-table'>
          <div id='titre-tableau'>Ce qui va se trouver là : {this.getTitle()}.</div>
          <table>
              <thead>
                  <tr>
                      <th scope='col'>date</th>
                      <th scope='col'>montant</th>
                      <th scope='col'>tiers</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>01/01/2023</td>
                      <td>100 €</td>
                      <td>Auchan</td>
                  </tr>
                  <tr>
                      <td>02/01/2023</td>
                      <td>200 €</td>
                      <td>Batbanane</td>
                  </tr>
              </tbody>
          </table>
      </article>);
    }
    ;
};
__decorate([
    (0, core_1.Prop)()
], MyModal.prototype, "myTitle", void 0);
__decorate([
    (0, core_1.Prop)()
], MyModal.prototype, "myheaders", void 0);
MyModal = __decorate([
    (0, core_1.Component)({
        tag: 'my-table',
        styleUrl: 'my-table.scss',
        shadow: false,
    })
], MyModal);
exports.MyModal = MyModal;
