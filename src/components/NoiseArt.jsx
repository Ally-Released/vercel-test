import React, { useEffect, useRef } from 'react';

const NoiseArt = ({ 
    width = 200, 
    height = 100, 
    colors = ['#000000', '#FFD700'], 
    blockSize = 15 
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = width;
        canvas.height = height;

        for (let y = 0; y < height; y += blockSize) {
            for (let x = 0; x < width; x += blockSize) {
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                ctx.fillRect(x, y, blockSize, blockSize);
            }
        }
    }, [width, height, colors, blockSize]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
}

export default NoiseArt; 