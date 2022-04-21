# GeckoSVG

GeckoSVG is a library to create and modify SVG graphics

Install:
```
npm i --save geckosvg
```

Usage:

```
import {GeckoSVG} from 'geckosvg'

const gecko = GeckoSVG.create();
document.body.appendChild(gecko);


gecko.width = 500;
gecko.height = 500;

gecko.ellipse(250, 250, 90)
  .fill('hsl(350, 100%, 88%)')
  .stroke('#000')
  .strokeWidth(7);

//Mouth
gecko
  .path('M 200,260 L 300,260 C 280,320 220,320 200,260 z')
  .fill('red')
  .stroke('#000')
  .strokeWidth(3);

//teeth

gecko
  .rect(225, 260, 20, 20)
  .fill('#fff')
  .stroke('#000')
  .strokeWidth(3);

gecko
  .rect(255, 260, 20, 20)
  .fill('#fff')
  .stroke('#000')
  .strokeWidth(3);

//Eyes that follow mouse
const eyePositions = [[220, 220], [280, 220]];
const eyeSize = 20;
const pupilSize = 5;

for (const pos of eyePositions) {
  const eye = gecko.ellipse(pos[0], pos[1], eyeSize)
    .fill('#fff')
    .stroke('#000')
    .strokeWidth(3);

  //pupil
  const pupil = gecko.ellipse(pos[0], pos[1], pupilSize)
    .fill('#000');

  document.addEventListener('mousemove', (e) => {
    //get client bounds
    const clientBounds = eye.$el.getBoundingClientRect();
    //get position of pupil
    const bounds = {
      x: pos[0],
      y: pos[1]
    }

    //get position of mouse in svg space
    const mouse = {
      x: e.clientX - clientBounds.x - eyeSize + bounds.x,
      y: e.clientY - clientBounds.y - eyeSize + bounds.y,
    }

    //get angle of mouse in relation to pupil
    const angle = Math.atan2(mouse.y - bounds.y, mouse.x - bounds.x,);

    //get distance between pupil origin and mouse and constrain so pupil stays inside eye
    const radius = Math.min(Math.sqrt(
      ((mouse.x - bounds.x) * (mouse.x - bounds.x)) +
      (mouse.y - bounds.y) * (mouse.y - bounds.y)
    ), eyeSize * 0.65);

    //get new pupil pos
    const point = {
      x: bounds.x + Math.cos(angle) * radius,
      y: bounds.y + Math.sin(angle) * radius
    }

    //move pupil towards mouse
    pupil.pos(point.x, point.y);
  });
}

```