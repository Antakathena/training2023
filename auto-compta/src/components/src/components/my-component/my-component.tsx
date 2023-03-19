import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() name: string;
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @Prop() age: number;

  private getName(): string {
    return this.name;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private getAge(): number {
    return this.age;
  }

  render() {
    return <div>Hello, World! I'm {this.getName()}. {this.getText()}. I'm {this.getAge()} years old.</div>;
  }
}
