import '@testing-library/jest-dom';

// jsdom has no IntersectionObserver (used by ScrollAnimation)
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserverMock;
