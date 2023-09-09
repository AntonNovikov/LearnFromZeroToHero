import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './App'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root'));
// root2.render(
//   <h1>Hello</h1>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// function tick(){
//   const element = (
//     <div>
//       <h1>
//         Hello
//       </h1>
//       <h2>
//         Time is {new Date().toLocaleTimeString()}
//       </h2>
//     </div>
//   ); 
//   root.render(
//   element
// ); 
//   return element;

// }



// // tick();
// setInterval(tick, 1500);

function Hello(props) {
  return <h2> hello, {props.name}</h2>;
}

// const elem = <Hello name="AlexIS"/>;

function App(){
  return(
    <div>
    <Hello name="AlexIS"/>
    <Hello name="ddddd"/>
    <Hello name="Addd"/>
    </div>

  );
}


// root.render(elem);

root.render(<App />);
// root.render(<Hello />);