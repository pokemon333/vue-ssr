import express from 'express';
import path from 'path';
import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cheerio from 'cheerio';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const PORT = process.env.PORT || 5000;

const productionDir = 'dist';

app.use(express.static(productionDir));

app.get('/test',(req,res)=>{
    res.send('Testing guys');
})

app.get('/cars/:id', (req, res) => {
    try {
        const fileContent = readFileSync(`${productionDir}/index.html`, 'utf8');
        

        const $ = cheerio.load(fileContent);
        

        // Modify title
        $('title').text('detail');

        // Modify meta tags
        $('meta[name="description"]').remove(); // Remove existing description meta tag
        $('head').append('<meta name="description" content="detail">'); // Add new description meta tag
        
        $('meta[property="og:type"]').remove(); // Remove existing og:type meta tag
        $('head').append('<meta property="og:type" content="website">'); // Add new og:type meta tag
        
        $('meta[property="og:image"]').remove(); // Remove existing og:image meta tag
        $('head').append('<meta property="og:image" content="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww">'); // Add new og:image meta tag
        
        $('meta[property="og:url"]').remove(); // Remove existing og:url meta tag
        $('head').append('<meta property="og:url" content="www.minshinsaw.com">'); // Add new og:url meta tag
        
        $('meta[property="twitter:title"]').remove(); // Remove existing twitter:title meta tag
        $('head').append('<meta property="twitter:title" content="detail">'); // Add new twitter:title meta tag
        
        $('meta[property="twitter:description"]').remove(); // Remove existing twitter:description meta tag
        $('head').append('<meta property="twitter:description" content="detail">'); // Add new twitter:description meta tag
        
        $('meta[property="twitter:image"]').remove(); // Remove existing twitter:image meta tag
        $('head').append('<meta property="twitter:image" content="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww">'); // Add new twitter:image meta tag
        

        

        res.send($.html());
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('*', (req, res) => {
    res.sendFile('index.html', { root: path.resolve(__dirname, productionDir) });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
