import express from 'express';
import compression from 'compression';
import { handler as ssrHandler } from './dist/server/entry.mjs';
const app = express();
const PORT = process.env.PORT || 4321;
// Enable text compression (gzip, deflate, or brotli)
app.use(compression());
const base = '/';

// Serve the public directory (where your Astro.js build will be)
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

// Catch-all route to serve the Astro.js application


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});