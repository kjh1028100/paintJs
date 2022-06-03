class Shape {
  constructor(sx, sy, ex, ey) {
    this.sx = sx;
    this.sy = sy;
    this.ex = ex;
    this.ey = ey;
    // this.color=color;
  }
}

class Rect extends Shape {
  constructor(sx, sy, ex, ey) {
    super(sx, sy, ex, ey);
    this.name = paints.length + 1;
  }
  getWidth() {
    return this.ex - this.sx;
  }
  getHeight() {
    return this.ey - this.sy;
  }
}

const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const eraser = document.querySelector(".js-eraser");
const restore = document.querySelector(".js-restore");
const CANVAS_SIZE = 600;
const Paint_key = "paint";
let drawing = false;
let moving = -1;
let paints = [];
let startX, startY; // 시작점
let endX, endY; // 끝점

const getTarget = (x, y) => {
  for (let i = 0; i < paints.length; i++) {
    if (
      x > paints[i].sx &&
      x < paints[i].ex &&
      y > paints[i].sy &&
      y < paints[i].ey
    ) {
      return i;
    }
  }
  return -1;
};

const drawRect = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < paints.length; i++) {
    let rect = paints[i];
    ctx.strokeRect(rect.sx, rect.sy, rect.ex - rect.sx, rect.ey - rect.sy);
  }
};

const handleMouseDown = (e) => {
  e.preventDefault();
  const { offsetX, offsetY } = e;
  startX = offsetX;
  startY = offsetY;
  moving = getTarget(startX, startY);
  if (moving === -1) {
    drawing = true;
  }
};

const savePaint = () => {
  localStorage.setItem(Paint_key, JSON.stringify(paints));
};

const handleMouseMove = (e) => {
  e.preventDefault();
  const { offsetX, offsetY } = e;
  endX = offsetX;
  endY = offsetY;
  if (drawing) {
    drawRect();
    ctx.strokeRect(startX, startY, endX - startX, endY - startY);
  }
  if (moving != -1) {
    const rect = paints[moving];
    const gapX = endX - startX;
    const gapY = endY - startY;
    rect.sx += gapX;
    rect.sy += gapY;
    rect.ex += gapX;
    rect.ey += gapY;
    startX = endX;
    startY = endY;
    drawRect();
    savePaint();
  }
};

const handleMouseUp = (e) => {
  if (drawing) {
    let x1 = Math.min(startX, endX);
    let y1 = Math.min(startY, endY);
    let x2 = Math.max(startX, endX);
    let y2 = Math.max(startY, endY);
    const newRect = new Rect(x1, y1, x2, y2);
    paints.push(newRect);
    savePaint();
  }
  drawing = false;
  moving = -1;
};

const handleEraserClick = (e) => {
  const { offsetX, offsetY } = e;
  ctx.clearRect(offsetX, offsetY, ctx.lineWidth, ctx.lineWidth);
};

const loadPaint = () => {
  const check = localStorage.getItem(Paint_key);
  if (check !== null) {
    paints = JSON.parse(check);
    drawRect();
  }
};

ctx.lineWidth = 1;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);
