import {MyAreaPrimitive2D} from "./myAreaPrimitive2D.js";

export class MyRectangle extends MyAreaPrimitive2D {

  getSquare(): number {
    return (this.getHeight() * this.getWidth())
  }

  private getHeight(): number {
    return (this._coordinate_1[1] - this._coordinate_2[1])
  }

  private getWidth(): number {
    return (this._coordinate_2[0] - this._coordinate_1[0])
  }
}
