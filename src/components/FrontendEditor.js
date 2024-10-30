import { useState } from 'react';

const CodeEditor = () => {
  const [html, setHtml] = useState('<h1>Hello World!</h1>');
  const [css, setCss] = useState('body { background-color: #f2f2f2; }');
  const [js, setJs] = useState('console.log("Hello World!");');

  const iframeSrc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden output-screen">
        <iframe
          title='frontend_editor'
          srcDoc={iframeSrc}
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>
      <div className="flex-1 flex row2">
        <div className="flex-1">
          <h2 className="text-lg font-bold p-2">HTML</h2>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-full p-2 border border-gray-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold p-2">CSS</h2>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-full p-2 border border-gray-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold p-2">JS</h2>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            className="w-full h-full p-2 border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
