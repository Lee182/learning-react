# Notes Log
## Hello React
pnpm install --save react react-dom express body-parser express-react-views@0.9.0 babel@5.8.23

atom installed most popular jsx package.
copy and pasted code
learnyoureact verify program.js


## Components
React's JSX conventions UpperCase for Classes
and lowerCase for elements
```js
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

## Prop types
prop types will give a warning when an alternative type is given.
```js
class MyComponent extends React.Component {
  /* ... */
}
MyComponent.propTypes = {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
};
```

## setState
```js
constructor(props) {
  super(props)
  this.state = {checked: false}
}
handleChange(e) {
  this.setState({checked: !this.state.checked})
}
render() {
  // console.log(this.props)
  var a = {"border": "1px solid black"}
  return (<tr>
    <td style={{border: "1px solid black"}}>
      <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
    </td>
    <td style={a}>{this.props.title}</td>
    <td style={a}>{this.props.children}</td>
  </tr>)
}
```
used this syntax within a component to update `this.state.checked`.
Confuzed about server-side rendered app, not clear in intro.

## CSS
uses inline style binding of.
```js
<h1 style={styleObj.heading}>Hello World</h1>
```

## Props from server
Working with lists in this example
```js
var todos = data.map(()=>{
  return <Todo title=o.title key=o.title>detail=o.detail</Todo>
})
<tbody>
  {todos}
</tbody>
```
Note also in this expamle `constructor(props)` and `super(props)` has been used to apply props to this. And that data has to flow from the parent `TodoBox` to `TodoList` to then make the `Todo` elments.

## React on the frontend
```bash
npm install --save browserify babelify babel-preset-react babel-preset-es2015
```
ran into the following error
```bash
Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
events.js:163
      throw er; // Unhandled 'error' event
      ^

Error: Cannot find module 'loose-envify' from '/Users/lee/jono/webdev-projects/learning-react/learnyoureact/node_modules/react-dom'
```
so therefor i omitted the propsTypes code from views/index.jsx
and ran `npm install --save loose-envify`

after resolving them errors, i can now use the [React Developer Tools Firefox extention](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) and debug the react state.

now the application size is
  index.html   1.11KB
  bundle.js  723.84KB

## Completed css2
basically conditional style binding, where the style is updated with the state change.
