export abstract class MyGraphicsPrimitive2D {

  protected _coordinate_1: number[] = [1, 4]
  protected _coordinate_2: number[] = [2, 2]

  protected moveFigure(offset: number = 5): number[] {
    return (this._coordinate_1.map(item => item + offset) , this._coordinate_2.map(item => item + offset))
  }
}











