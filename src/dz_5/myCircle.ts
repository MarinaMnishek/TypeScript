import {MyAreaPrimitive2D} from "./myAreaPrimitive2D.js";

export class MyCircle extends MyAreaPrimitive2D {
  getSquare(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  protected centerOfCircle: number[]

  public radius: number = 9

}
