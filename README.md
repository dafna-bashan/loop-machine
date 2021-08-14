Project description - Loop Machine

This is a small frontend application consisting of loops. You can change any loop active state. There is a central play or stop button that activates or stops the playing loops. The app allows you to put together different loops, save them as mixes and delete them.
I could not apply the synchronization of the loops so any loop will play immediately if its mode is set to active and the central button is activated.

I used the React JS library in conjunction with Redux's status management, including the Thunk Middleware since the service simulates asynchronous service.
The app has a central state where the entities of the loop and mix exist, as well as a Boolean value that describes whether the active loops are playing.

The app has two pages. The home page that leads to the loop machine page. The loop machine page manages the interaction with the state and the service. It contains all the functions that manipulate the state. The information is transferred from the main page as a prop to the other components.
The main page renders a number of components:
* LoopControlBtn - The main button component that controls the playing or stoping the loops.
* LoopList - The list of loops renders LoopPreview, preview for each loop.
* AddMix - A component that allows you to add a new mix by saving the list of loops according to the current state.
* Mixlist - The mix list renders MixPreview, a preview of each mix that can be clicked to change back the state of the loops according to that mix. it also allows the user to delete it from the list.