# Notes Log
## Hello React
pnpm install --save react react-dom express body-parser express-react-views@0.9.0 babel@5.8.23

atom installed most popular jsx package.
copy and pasted code
learnyoureact verify program.js


## Components
React's JSX conventions UpperCase for Classes
and lowerCase for elements
```jsx
  export default class MyComponent extends React.Component {/*...*/};
  let myElement = <MyComponent someProperty={true} />;
  ReactDOM.render(myElement, document.getElementById('example'));
```
again copy and paste code, got to introduced to the render and jsx function syntax
```js
render() {
  return <h1 className='header'>i am some jsx</h1>
}
```
remember to use **className** instead of **class** when using react

## Props
props are the way that react passes data (or state) from parent to child components. it looks very similar to an html attribute. data can also be passed with the angular brackets.

within an class `this.props` is populated with attributes
`this.props.children` is populated with nested content.

had some problems with passing inline styles.
