const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminGifsicle = require('imagemin-gifsicle');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
    const inputDir = 'aset';
    const outputDir = 'aset/optimized';

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Optimizing images...');

    // Optimize PNG files
    await imagemin.default([`${inputDir}/*.png`], {
        destination: outputDir,
        plugins: [
            imageminPngquant.default({
                quality: [0.6, 0.8]
            })
        ]
    });

    // Optimize JPG files
    await imagemin.default([`${inputDir}/*.jpg`], {
        destination: outputDir,
        plugins: [
            imageminJpegtran.default({
                progressive: true
            })
        ]
    });

    // Optimize GIF files
    await imagemin.default([`${inputDir}/*.gif`], {
        destination: outputDir,
        plugins: [
            imageminGifsicle.default({
                optimizationLevel: 3,
                colors: 64
            })
        ]
    });

    // Convert to WebP
    await imagemin.default([`${inputDir}/*.{jpg,png}`], {
        destination: outputDir,
        plugins: [
            imageminWebp.default({
                quality: 75
            })
        ]
    });

    console.log('Image optimization complete!');
    console.log('Optimized images saved to:', outputDir);
}

optimizeImages().catch(console.error);
