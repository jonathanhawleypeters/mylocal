import { renderComponent, expect } from '../test_helper';
import App                         from '../../src/client/components/App';

describe('App', () => {
  const application = renderComponent(App);
  it('Renders a component', () => {
    expect(application).to.contain('Home');
    expect(application).to.contain('Sign in');
    expect(application).to.contain('Sign up');
    expect(application.find('.navbar')).to.exist;
  });
  describe('Sign In/ Sign Up Buttons', () => {
    it('should have a Sign In button', () => {
      expect(application.find('.signin')).to.exist;      
    })
    it('should have a Sign Up button', () => {
      expect(application.find('.signup')).to.exist;      
    })
  });
});

