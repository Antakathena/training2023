import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.scss',
  shadow: false,
})
export class MyModal {

    @Prop() myTitle: string;
    @Prop() myheaders = ['date', 'montant', 'moyen', 'tiers', 'date de l\'opération', 'numéro de chèque', 'catégorie'];

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

  private getTitle(): string {
    return this.myTitle;
  }

  render() {
    return (
      <article id='my-table'>
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
      </article>
      );
    };
  }
