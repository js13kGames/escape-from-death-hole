import V2 from "./V2"
import GameNode from "./GameNode";
import { Game } from "./../main";
import GameObject from "./GameObject";


export class SimpleCollision extends GameNode {

  _overlapRect(rect) {
    return this._children.filter((child) => {
      return this._check(rect, child);
    });
  }

  _check(a, b) {
    if (a === b || a._object._id === b._object._id) {
      return;
    }
    return this._rectRect(a, b);
  }

  _rectRect(a, b) {
    // aabb -- must be axis aligned
    return (
      a.p.x < b.p.x + b.w &&
      a.p.x + a.w > b.p.x &&
      a.p.y < b.p.y + b.h &&
      a.p.y + a.h > b.p.y
    );
  }

}

export class CollisionRect extends GameObject {
  public p: V2;
  public _object: GameObject;

  public _offset: V2;

  public w: number;
  public h: number;

  constructor(obj:any, offset: V2, w: number, h: number, lifeSpan: number = -1, add: boolean = false) {
    super();
    this.w = w;
    this.h = h;
    this._object = obj;
    this._offset = offset || new V2();

    this._update(0);

    this._lifeSpan = lifeSpan;

    if (add) {
      Game._scene._collisions._addChild(this);
    }
  }

  _update(dt) {
    super._update(dt);
    this.p = this._object._position._copy()._add(this._offset)._add(new V2(0, -this._object._z));
  }

  _draw(ctx: CanvasRenderingContext2D) {
    ctx.s();
    ctx.lw(1);
    ctx.ss("#f00");
    ctx.bp();
    ctx.rect(this.p.x, this.p.y, this.w, this.h);
    ctx.stroke();

    ctx.r();
  }
}
