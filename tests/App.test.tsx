
import { render } from "@testing-library/react";
import App from "../src/App.tsx";
describe("App",()=>{
    it('should render started',()=>{
        // __mocks__/matchMediaMock.js
window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
  
        render(<App/>)
        
    })
})

