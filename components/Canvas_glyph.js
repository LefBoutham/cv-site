/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const typedCanvas = useRef(null);

  class Painting {
    constructor(context, typeCanvas, width, height) {
      this.context = context;
      this.typeCanvas = typeCanvas;
      this.typeContext = this.typeCanvas.getContext("2d");
      this.width = width;
      this.height = height;

      this.cell = 20;
      this.cols = Math.floor(this.width / this.cell);
      this.rows = Math.floor(this.height / this.cell);
      this.typeCanvas.width = this.cols;
      this.typeCanvas.height = this.rows;

      this.numCells = this.cols * this.rows;
    }
    initPainting(frameCount) {
      const context = this.context;
      const typeContext = this.typeContext;
      const width = this.width;
      const height = this.height;
      const cell = this.cell;
      const cols = this.cols;
      const rows = this.rows;
      const numCells = this.numCells;

      // Creating blank canvas
      typeContext.fillStyle = "black";
      typeContext.fillRect(0, 0, cols, rows);

      typeContext.fillStyle = "white";
      typeContext.font = `${cols * 1.2}px serif`;
      typeContext.textBaseline = "top";

      const text = "A";

      const metrics = typeContext.measureText(text);
      const mx = metrics.actualBoundingBoxLeft * -1;
      const my = metrics.actualBoundingBoxAscent * -1;
      const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
      const mh =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

      const tx = (cols - mw) * 0.5 - mx;
      const ty = (rows - mh) * 0.5 - my;

      typeContext.save();
      typeContext.translate(tx, ty);

      typeContext.beginPath();
      typeContext.rect(mx, my, mw, mh);
      typeContext.stroke();

      typeContext.fillText(text, 0, 0);
      typeContext.restore();

      const typeData = typeContext.getImageData(0, 0, cols, rows).data;

      context.testBaseline = "middle";
      context.textAlign = "center";

      // Draw glyph and hide typeContext behind background
      context.drawImage(this.typeCanvas, 0, 0);
      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < numCells; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);

        const x = col * cell;
        const y = row * cell;

        const r = typeData[i * 4 + 0];
        const g = typeData[i * 4 + 1];
        const b = typeData[i * 4 + 2];
        const a = typeData[i * 4 + 3];

        const fontFamily = "serif";

        const glyph = this.getGlyph(r, text);

        const radius = cell * 0.3;
        if (Math.random() < 0.1) radius = cell * 0.6;

        context.fillStyle = `rgb(${r},${g},${b})`;

        context.save();
        context.translate(x, y);
        context.translate(cell * 0.5, cell * 0.5);

        context.beginPath();
        context.arc(cell, cell, radius, 0, Math.PI * 2);
        context.fill();

        context.restore();
      }
    }
    getGlyph(v, text) {
      if (v < 50) return "";
      if (v < 100) return ".";
      if (v < 150) return "-";
      if (v < 200) return "+";

      const glyphs = "_= /".split("");

      return random.pick(glyphs);
    }
  }

  // –––––––––––––––––––––––––––––– End of classes
  let painting;
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const typeCanvas = typedCanvas.current;

    let frameCount = 0;
    let animationFrameId;

    painting = new Painting(context, typeCanvas, canvas.width, canvas.height);
    painting.initPainting(frameCount);

    const render = () => {
      frameCount += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
  }, [painting]);

  return (
    <div>
      <canvas
        height="900"
        width="900"
        style={{ display: "none", opacity: "0" }}
        ref={typedCanvas}
        {...props}
      />
      <canvas height="900" width="900" ref={canvasRef} {...props} />
    </div>
  );
};

//export default Canvas;
