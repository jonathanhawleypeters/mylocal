import { expect } from '../test_helper';
import server from '../../src/client/components/App';

describe('Express Server', () => {
  it('has routes', () => {
    expect(renderComponent(App)).to.contain('Home');
    expect(renderComponent(App)).to.contain('Sign in');
    expect(renderComponent(App)).to.contain('Sign up');
  });
});
