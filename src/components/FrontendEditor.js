import { useState } from 'react';
import "./componentStyle/FrontendEditor.css";

const CodeEditor = () => {
  const demohtml = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Checkwave</title>
		<meta name="description" content="">
		<meta name="author" content="Hakim El Hattab">
	</head>
	<body>
		<div class="credits">
			<a href="https://github.com/hakimel/css/tree/master/checkwave" target="_blank">Source on GitHub</a>
			<a href="https://twitter.com/hakimel" target="_blank">Follow @hakimel</a>
		</div>
	</body>
</html>`;

  const democss = `html, body {
  font-family: Helvetica, sans-serif;
}
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  zoom: 1.4;
}
input {
  position: absolute;
  will-change: transform;
}
input.grow {
  animation: grow 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275);
}
@keyframes grow {
  0%     { transform: scale(1);       }
  30%    { transform: scale(2.5);     }
  100%   { transform: scale(1);       }
}
.credits {
	position: absolute;
	right: 20px;
	bottom: 25px;
	font-size: 15px;
	color: #fff;
}
.credits>* {
	vertical-align: middle;
	margin-left: 15px;
}
.credits a {
	padding: 8px 10px;
	color: #333;
	border: 2px solid #aaa;
	border-radius: 2px;
	text-decoration: none;
}
.credits a:hover {
	border-color: #666;
	color: #000;
}
`;

const demojs = `var RES_X = 15;
var RES_Y = 10;
var SIZE = 22;
// super laggy on mobile devices so ease up the res
if( /iphone|ipad|android/ig.test( navigator.userAgent ) ) {
	RES_X = 16;
	RES_Y = 16;
	SIZE = 25;
}
var entities = [];
var wrapper = document.createElement( 'div' );
wrapper.className = 'wrapper';
wrapper.style.width = ( RES_X * SIZE ) + 'px';
wrapper.style.height = ( RES_Y * SIZE ) + 'px';
document.body.appendChild( wrapper );
for( var x = 0; x < RES_X; x++ ) {
	for( var y = 0; y < RES_Y; y++ ) {
		var el = document.createElement( 'input' );
		el.setAttribute( 'type', 'checkbox' );
		wrapper.appendChild( el );
		var entity = {
			element: el,
			x: x * SIZE,
			y: y * SIZE
		}
		el.style.left = entity.x + 'px';
		el.style.top = entity.y + 'px';
		el.addEventListener( 'change', this.toggle.bind( this, entity ) );
		entities.push( entity );
	}
}
function toggle( targetEntity ) {
	var checked = targetEntity.element.checked;
	entities.forEach( function( entity ) {
		var dx = targetEntity.x - entity.x;
		var dy = targetEntity.y - entity.y;
		var distance = Math.sqrt( dx * dx + dy * dy );
		setTimeout( function() {
			entity.element.checked = checked;
			// re-run the animation, reading offsetWidth forces reflow
			entity.element.className = '';
			entity.element.offsetWidth;
			entity.element.className = 'grow';
		}, Math.round( distance * 1.8 ) );
	} );
}
setTimeout( function() {
	entities[ 0 ].element.checked = true;
	toggle( entities[ 0 ] );
}, 500 );
`;


  const [html, setHtml] = useState(demohtml);
  const [css, setCss] = useState(democss);
  const [js, setJs] = useState(demojs);
  


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
    <div className="h-screen flex flex-col bg-gray-100 frontEndEditor">
      <div className="flex-1 overflow-hidden output-screen p-4">
        <iframe
          title='frontend_editor'
          srcDoc={iframeSrc}
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex-1 flex row2 pl-4 pr-4 gap-4">
        <div className="flex-1 rounded-lg shadow-md p-4 editorInput">
          <h2 className="text-lg font-bold mb-2">HTML</h2>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-80 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex-1 rounded-lg shadow-md p-4 editorInput">
          <h2 className="text-lg font-bold mb-2">CSS</h2>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-80 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex-1 rounded-lg shadow-md p-4 editorInput">
          <h2 className="text-lg font-bold mb-2">JS</h2>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            className="w-full h-80 p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;



















/*import { useState } from 'react';

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
*/