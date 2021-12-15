/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const Canvas = (props) => {
  const canvasRef = useRef(null);
  //
  //
  //
  //
  // Classes
  //
  class Painting {
    constructor(context) {
      this.context = context;
    }
    initPainting() {
      // Creating agent array
      this.agents = [];
      for (let i = 0; i < 40; i++) {
        const x = random.range(0, 900);
        const y = random.range(0, 900);
        this.agents.push(new Agent(x, y));
      }

      // Creating blank canvas
      this.context.fillStyle = "white";
      this.context.fillRect(0, 0, 900, 900);
    }

    paint() {
      this.context.clearRect(
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );
      this.agents.forEach((agent) => {
        agent.update();
        agent.draw(this.context);
        agent.bounce(900, 900);
      });

      // Stroke
      for (let i = 0; i < this.agents.length; i++) {
        let agent = this.agents[i];

        for (let j = i + 1; j < this.agents.length; j++) {
          let other = this.agents[j];

          const dist = agent.pos.getDistance(other.pos);

          if (dist > 200) continue;
          this.context.lineWidth = math.mapRange(dist, 0, 200, 12, 1);
          this.context.beginPath();
          this.context.moveTo(agent.pos.x, agent.pos.y);
          this.context.lineTo(other.pos.x, other.pos.y);
          this.context.stroke();
        }
      }
    }
  }

  class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    getDistance(v) {
      const dx = this.x - v.x;
      const dy = this.y - v.y;

      return Math.sqrt(dx * dx + dy * dy);
    }
  }

  //
  class Agent {
    constructor(x, y) {
      this.pos = new Vector(x, y);
      this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
      this.radius = random.range(4, 12);
    }

    update(context) {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    }

    bounce(width, height) {
      if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
      if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
    }

    draw(context) {
      context.fillStyle = "black";

      context.lineWidth = 4;

      context.beginPath();
      context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
      context.stroke();
      context.closePath();
    }
  }
  // –––––––––––––––––––––––––––––– End of classes
  let painting;
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    painting = new Painting(context);
    painting.initPainting();

    const render = () => {
      painting.paint();
      animationFrameId = requestAnimationFrame(render);
    };

    render();
  }, [painting]);

  return <canvas height="900" width="900" ref={canvasRef} {...props} />;
};
