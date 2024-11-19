// App.test.tsx
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { describe, it, expect } from 'vitest';
import { App } from '../src/App';
import { DateContext } from '../src/contextAPI/context';


const mockStore = configureStore([]);

describe('<App />', () => {
  it('should render the Sidebar component', () => {
    const initialState = {
      todo: {
        '18-11-2024': [] // Adjust to match your expected state structure
      }
    };
    const store = mockStore(initialState);
    const mockDateContextValue = { date: new Date('2024-11-18'), setDate: vitest.fn() };

    const { getByText } = render(
      <Provider store={store}>
        <DateContext.Provider value={mockDateContextValue}>
          
            <App />
          
        </DateContext.Provider>
      </Provider>
    );

    // Add your assertions here, for example:
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Upcoming')).toBeInTheDocument();
    expect(getByText('Completed')).toBeInTheDocument();
    expect(getByText('Incomplete')).toBeInTheDocument();
  });
});
