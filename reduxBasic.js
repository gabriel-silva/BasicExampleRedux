    function reducers(state = 0, action) {

      switch (action.type) {

        case 'INCREMENTO': return state + 1;

        case 'DECREMENTO': return state - 1;

        default:
          return state;

      }

    }

    let store = Redux.createStore(reducers);

    document.write(store.getState() + '<br />');

    store.dispatch({ type: 'INCREMENTO' })

    document.write(store.getState() + '<br />');

    store.dispatch({ type: 'DECREMENTO' })

    document.write(store.getState() + '<br />');
