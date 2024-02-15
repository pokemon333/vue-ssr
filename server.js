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
        
        $('title').text('detail');

        $('meta[name="description"]').remove(); 
        $('head').append('<meta name="description" content="detail">');
        
        $('meta[property="og:type"]').remove(); 
        $('head').append('<meta property="og:type" content="website">');
        
        $('meta[property="og:image"]').remove(); 
        $('head').append('<meta property="og:image" content="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww">'); 
        
        $('meta[property="og:url"]').remove();
        $('head').append('<meta property="og:url" content="www.minshinsaw.com">'); 
        
        $('meta[property="twitter:title"]').remove();
        $('head').append('<meta property="twitter:title" content="detail">'); 
        
        $('meta[property="twitter:description"]').remove(); 
        $('head').append('<meta property="twitter:description" content="detail">'); 
        
        $('meta[property="twitter:image"]').remove(); 
        $('head').append('<meta property="twitter:image" content="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww">'); 
        
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
