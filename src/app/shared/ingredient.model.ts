export class Ingredient {
  /*
    public name: string;
    public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
  This is the old way of declaring a model with TS. The shortcut below does the same thing
  as writing it out the long way.
*/
  constructor(public name: string, public amount: number) {}
}
