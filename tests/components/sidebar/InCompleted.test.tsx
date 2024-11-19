// InCompleted.test.tsx
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { describe, it, expect } from 'vitest';
import { InitialState } from '../../../src/redux/reducers/type';
import { DateContext } from '../../../src/contextAPI/context';
import InCompleted from '../../../src/components/inCompleted/InCompleted';


const mockStore = configureStore<InitialState>([]);

describe('<InCompleted />', () => {
  it('renders the InCompleted component with incomplete todos', () => {
    const initialState: InitialState = {
      todo: {
        '17-11-2024': {
          count: 2,
          todoList: [
            {
              checked: false,
              task: 'Incomplete Task 1',
              time: '10:00 AM',
              project: 'Project A',
              description: 'Description of Incomplete Task 1',
            },
            {
              checked: true,
              task: 'Completed Task 1',
              time: '11:00 AM',
              project: 'Project B',
              description: 'Description of Completed Task 1',
            },
          ],
          completed:1
        },
        '16-11-2024': {
          count: 1,
          todoList: [
            {
              checked: false,
              task: 'Incomplete Task 2',
              time: '01:00 PM',
              project: 'Project C',
              description: 'Description of Incomplete Task 2',
            },
          ],
          completed:0
        },
      },
      projects:["home"]
    };
    
    const store = mockStore(initialState);

    const mockDateContextValue = { date: new Date('2024-11-18'), setDate: () => {} };

    const { getByText } = render(
      <Provider store={store}>
        <DateContext.Provider value={mockDateContextValue}>
          <InCompleted />
        </DateContext.Provider>
      </Provider>
    );

    expect(getByText('Incomplete')).toBeInTheDocument();
    expect(getByText('17-11-2024')).toBeInTheDocument();
    expect(getByText('16-11-2024')).toBeInTheDocument();
    expect(getByText('Incomplete Task 1')).toBeInTheDocument();
    expect(getByText('Incomplete Task 2')).toBeInTheDocument();
    expect(() => getByText('Completed Task 1')).toThrow(); // Ensure completed tasks are not rendered
  });
});

