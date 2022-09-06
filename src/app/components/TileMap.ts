import { mapDim, setMapDim } from "../configuration";
import GameObject from "../core/GameObject";
import { M } from "../core/utils";
import V2 from "../core/V2";
import BaseTile from "./BaseTile";
import { TileType } from "./createTiles";

var impulseDuration = 400;



class TileMap extends GameObject {



  public _map: any[] = [];

  public _impulseIsoPosition: V2;
  public _impulseDelayCounter: number;
  public _impulseRadius: number;
  public _impulseCounter: number = 0;

  constructor(spritesheet, dim = {x:5, y:5}) {
    super();

    setMapDim(dim)

    for (var i = mapDim.y; i--;) {
      var tileMapRow = [];
      for (var j = mapDim.x; j--;) {

        var tile: BaseTile;
        var tileType = TileType._BASE;

        tile = new BaseTile(j, i, 20, spritesheet, tileType); // height 20

        this._addChild(tile);
        tileMapRow.push(tile);
      }

      this._map.push(tileMapRow.reverse());
    }

    this._map.reverse();
  }

}

export default TileMap;
