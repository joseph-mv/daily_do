
import  { createContext} from 'react';

// Define the context value type
interface DateContextType {
    date: Date;
    setDate: (date: Date) => void;
  }
  
  // Create a default value for the context
  const defaultValue: DateContextType = {
    date: new Date(),
    setDate: () => {},
  };
  
  // Create the context with the default value
  export const DateContext = createContext<DateContextType>(defaultValue);

  
