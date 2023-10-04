// DOM elements
const valueEl = document.getElementById('value')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const plusFiveBtn = document.getElementById('plusFive')
const minusFiveBtn = document.getElementById('minusFive')
const incrementeIfOddBtn = document.getElementById('incrementIfOdd')
const incrementeAsyncBtn = document.getElementById('incremenAsync')


// initial state value
const initialState = {
    value: 0
}

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'counter/addFive':
            return { value: state.value + 5 }
        case 'counter/subFive':
            return { value: state.value - 5 }
        default:
        return state
    }
}

// action object definitions
const addAction = {
  type: 'counter/incremented'
}

const subAction = {
  type: 'counter/decremented'
}

const addFiveAction = {
  type: 'counter/addFive'
}

const subFiveAction = {
  type: 'counter/subFive'
}


// generating the store
let store = Redux.createStore(counterReducer)

// defining render
const render = () => {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
}

// establishing dispatch functions
const addOne = () => {
  store.dispatch(addAction)
}

const subOne = () => {
  store.dispatch(subAction)
}

const addFive = () => {
  store.dispatch(addFiveAction)
}

const subFive = () => {
  store.dispatch(subFiveAction)
}

const incrementIfOdd = () => {
  if (store.getState().value % 2 != 0) {
    store.dispatch(addAction)
  }
}

const incremenAsync = () => {
  setTimeout(() => {
    store.dispatch(addAction)
  }, 1000)
}

// event listeners
plusBtn.addEventListener('click', addOne)
minusBtn.addEventListener('click', subOne)
plusFiveBtn.addEventListener('click', addFive)
minusFiveBtn.addEventListener('click', subFive)
incrementIfOddBtn.addEventListener('click', incrementIfOdd)
incrementAsyncBtn.addEventListener('click', incrementAsync)


// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)