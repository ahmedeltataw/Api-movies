import sharp from 'sharp';
import fetch from "node-fetch"; // Import fetch
export async function processImage(url) {
    try {
        // Fetch the image and convert it to a buffer
        const response = await fetch(url);
        const imageBuffer = await response.buffer();

        // Resize and compress the image
        const processedImageBuffer = await sharp(imageBuffer)
            .jpeg({
                quality: 50,
                progressive:true,
                optimiseScans: true,
                trellisQuantization: true,
                differentialCoding: true,
            })
            .toBuffer();

        return `data:image/jpeg;base64,${processedImageBuffer.toString('base64')}`;
    } catch (error) {
        console.error('Error processing image:', error);
        return ''; // Return an empty string if there's an error
    }
}