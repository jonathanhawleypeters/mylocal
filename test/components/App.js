import { renderComponent, expect } from '../test_helper';
import App from '../../src/client/components/App';

describe('App', () => {
  it('Renders a component', () => {
    expect(renderComponent(App)).to.contain('Home');
    expect(renderComponent(App)).to.contain('Sign in');
    expect(renderComponent(App)).to.contain('Sign up');
  });
});
