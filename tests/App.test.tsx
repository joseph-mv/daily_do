// import { render, screen } from '@testing-library/react';
// import App from '../src/App';
// describe('<App/>',()=>{
//     it('it shoud render',()=>{
//        render(<App/>)
//        screen.debug()
//     })
// })


import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../src/App';  // Adjust the import path as necessary

const mockStore = configureStore([]);
const store = mockStore({ /* your initial state */ });

describe('<App />', () => {
    it('should render the Sidebar component', () => {
        render(
          <Provider store={store}>
            <App />
          </Provider>
        );
        // Assuming the Sidebar component has some text or element that can be queried
        const sidebarElement = screen.getByText(/daily-do/i);
        expect(sidebarElement).toBeInTheDocument();
      });
});
