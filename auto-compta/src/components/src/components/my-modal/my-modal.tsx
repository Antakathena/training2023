import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss',
  shadow: false,
})
export class MyModal {

  @Prop() myTitle: string;


  private getTitle(): string {
    return this.myTitle;
  }

  render() {
    return <div>Future modale here : {this.getTitle()}.</div>;
  }
}
