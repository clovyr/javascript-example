# About Clovyr Code

Clovyr Code delivers full-featured VSCode in the browser, connected directly to 
any public or private git repository. 

Learn more and try it out at [clovyr.app/code](https://clovyr.app/code)

Tip: Use `` CTRL+` `` to show/hide the terminal, and `CTRL+SHIFT+5` to open a new 
terminal. [More shortcuts](https://help.clovyr.io/code/keyboard-shortcuts)

# Clovyr Code JavaScript examples

This repository includes sample JavaScript apps for the
purpose of demonstrating the Clovyr Code JavaScript development environment.

[TodoMVC](http://todomvc.com/) is a project which offers the same Todo application 
implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today.
  * [AngularJS](https://angularjs.org/)
  * [React](https://reactjs.org/)
  * [Vue.js](https://vuejs.org/)
  * [VanillaJS](http://vanilla-js.com/)

## Running an example

1. Navigate to the example directory of your preferred JS framework:  
`cd ~/git/github.com/clovyr/javascript-example/examples/todomvc-react`
2. Install dependencies  
`npm install`
3. Run the server  
`npm run server`
4. In a new browser tab, enter the url of your Clovyr Code instance
prefixed by `8080-`
   * The URL for your instance is found in the green bar at the bottom of 
   the application space
   * For example, if your Code environment is `https://happy-otter.wnext.app`,  
   the served application is at `https://8080-happy-otter.wnext.app`. 
5. To stop the server, enter `CTRL+C` in the terminal where the program was
invoked

## Documentation

Find more documentation at https://help.clovyr.io.
