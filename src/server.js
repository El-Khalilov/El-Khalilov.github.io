import express  from 'express';
const path = require('path');

// import React    from 'react';
// import ReactDom from 'react-dom/server';
// import App from './components/App';

const app             = express();
const publicPath     = express.static(path.join(__dirname, 'public'), { redirect : false });

const indexPath  = path.join(__dirname, 'dist/index.html');

app.use(publicPath);
app.get('/', (_, res) => res.sendFile(indexPath));
app.get('*', (_, res) => res.sendFile(indexPath));

app.use('/public', express.static('public'));
// const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

//
// // app.use(express.static(`${assetUrl}/public`));
//
//
// function renderHTML() {
//   return `
//     <!DOCTYPE html>
//       <html>
//       <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Eldar Khalilov</title>
//           <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
//       </head>
//       <body>
//         <div id="react-view"></div>
//         <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
//       </body>
//     </html>
//   `;
// }

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
