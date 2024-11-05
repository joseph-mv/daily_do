import '@testing-library/jest-dom';
import 'fake-indexeddb/auto';

// setupTests.ts or setupTests.js
// setupTests.ts
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Vitest's mock function
      removeListener: vi.fn(), // Vitest's mock function
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
  
  
