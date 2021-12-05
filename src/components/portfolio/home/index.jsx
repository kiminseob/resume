import React, { useEffect, useRef, useState } from 'react';

function Home() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 700;

    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 2.5;
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;

    setCtx(contextRef.current);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (isDrawing) {
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    }
  };

  return (
    <div className="home">
      <canvas
        ref={canvasRef}
        onMouseDownCapture={startDrawing}
        onMouseDown={drawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      />
    </div>
  );
}

export default Home;
