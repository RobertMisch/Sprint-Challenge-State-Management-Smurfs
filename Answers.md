What problem does the context API help solve?

	it solves for prop drilling by making a single place have the state that you would send down as props

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	The Redux store is read only. The only way to modify application state when using Redux is by dispatching actions. The reducer pattern is a great state management pattern that allows us to write pure functions to manage state changes in a predictable manner. the store is the redux object that contains these and state. thus why it is the single source of truth.

What is the difference between Application state and Component state? When would be a good time to use one over the other?

	application state is the global immutable state, while component state is mutable. you would want to use component state for something that only happens and needs to be tracked in one component, while you would use application state as your global state

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

	redux thunk is middleware that allows us to perform async actions without holding up the application waiting for a response due to redux being synchronus.

What is your favorite state management system you've learned and this sprint? Please explain why!

	redux seems super cool, especially with its hooks. It has the power to get large applications wrangled and managed. context + reducers seems the way to go for simple projects though just due to easy of use. if I had to pick a favorite redux wins out currently due to how explicit everything is. the less under the hood the better.

