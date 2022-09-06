
import Semaphore from "./core/Semaphore";
import { zzfx } from './ZzFX.micro.js';




export const sounds = {

  JUMP: () => play(1, 0.2, () => { zzfx(.1, 0, 493, 0, 0, .25, 0, 1.61, 1, 0, 286, 50, 20, 0, -0.1, 0, 0, 1.1, 0, .09) }),

  DAMAGE: () => play(2, 0.4, () => { zzfx(.3, 0, 65, .08, 0, .28, 0, 0, 1.8, 0, 50, 0, 0, 0, -2, 0, 0, .2, 0, 1) }),

  HIT: (p?) => play(3, 0.8, () => {
    zzfx(.5,.05,90+(p?30:0),.02,.02,.07,4,1,0,0,0,0,0,2,50,0,0,.7,.01,0);
  }),

  HEADOFF: () => play(30, 0.8, () => {
    zzfx(.5,.05,120,.03,.12,.07,4,1,1,1.1,150,0,.01,2,45,0,0,.2,.04,0)
   }),

  KEY: () => //play(4, .3, () => { 
    zzfx(.2, 0, 300, .1, .3, .1, 0, 1.61, 0, 0, 286, .06, .18, 0, 0, 0, 0, .4, .1, .09),
  //  }),
  UNLOCK: () => //play(5, .3, () => { 
    zzfx(.2, 0, 300 + 550, .1, .3, .1, 0, 1.61, 0, 0, 286, .06, .18, 0, 0, 0, 0, .4, .1, .09),
  //  }),

  SWORD: () => //play(6, 0.4, () => {
    zzfx(.4, .2, 150, .05, 0, .05, 0, 1, -1, 0, 0, 0, 0, 4, 0, 0, 0, 1, .02, 0),
  // }),

  ATTACK: () => play(7, 0.4, () => {
    zzfx(.4, .2, 250, .04, 0, .04, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0);
  }),
  ROPEUP: () => play(9, 3, () => { 
    zzfx(.2,.05,329.6276,.01,.29,1,0,1.6,1.2,0,-25,.15,20,0,0,0,0,.71,.18,.2);
  }),

  GAMEOVER: () => { }, // () => play(4, 0.4, () => { zzfx(1,.05,329.6276,.01,.29,.4,0,1.6,1.2,0,-25,.15,.03,0,0,0,0,.71,.18,.2); }),

  DIE: () => () => play(10, 0.4, () => {
    zzfx(1, .05, 329.6276, .01, .29, .4, 0, 1.6, 1.2, 0, -25, .15, .03, 0, 0, 0, 0, .71, .18, .2);
  }),

//zzfx(1,.05,50,0,.03,.01,1,1.61,-66,0,0,0,0,.5,0,0,0,1,0,0),
  HEART: () => zzfx(1.02, .05, 288, .02, .07, .15, 2, .87, -4.6, 0, -317, .04, 0, 0, 0, 0, 0, .71, .03, 0) ,
  DIAMOMD: () =>  zzfx(.03,.5,215,0,.02,.01,2,.1,90.6,0,150,0,0,0,0,0,0,3,.01,.62) ,
  
  BACKGROUND: () =>  setInterval(()=>zzfx(.1,5,25,.29,.08,1,0,.6,0,0,0,0,.1,0,0,0,0,.7,1,0), 500),

  GAMEWIN: () => { }, // () => play(4, 0.4, () => { }),


};

let sem = new Semaphore()

export function UpdateAudio(dt) {
  sem._update(dt)
}

function play(index: number, t: number = 0.3, callback: any) {
  if (!sem._ready("" + index)) return;
  callback()
  sem._lock("" + index, t)
}









