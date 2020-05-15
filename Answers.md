# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library for building user interfaces
- create interactive UIs easily
- build components that manage their own state
- create complex apps from small reusable pieces
Problems it solves: allows for pages to have data that changes over time at high rates without user refreshing the page and does so using a virtual DOM

1. Describe component state.

State is data that is private and fully controlled by the component. It is local/encapsulated within the component so it is not accessible to any component other than the one that owns and sets it.

1. Describe props.

- props are arbitrary inputs that are passed through components as object arguments
- props are read-only → react components must act like pure functions with respect to their props
- When we want to pass information held on state inside one component to another component, we pass them as props.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

- A side effect is anything that affects something outside the scope of the function being executed.
- can sync our side effects with state and props changes by passing in a dependency array as the second argument to the effect hook