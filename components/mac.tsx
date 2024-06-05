import React, { useEffect, useId } from 'react';
// import { Application } from '@splinetool/runtime';

const Mac = () => {
  const id = useId();

  useEffect(() => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    // const app = new Application(canvas);
    // app.load('https://prod.spline.design/pyznar0hkU6Xpxqi/scene.splinecode');
  }, []);
  return (
    <canvas
      onMouseEnter={() => {
        document.body.style.overflowY = 'hidden';
      }}
      onMouseLeave={() => {
        document.body.style.overflowY = 'auto';
      }}
      id={id}></canvas>
  );
};

export default Mac;
