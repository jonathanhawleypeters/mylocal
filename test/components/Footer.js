import { renderComponent, expect } from '../test_helper';
import Footer from '../../src/client/components/Footer';

describe('Footer', () => {
  const application = renderComponent(Footer);
  it('Has navigation', () => {
    expect(application).to.contain('Home');
    expect(application).to.contain('Sign In');
    expect(application).to.contain('Sign Up');
  });
  it('Has an about statement', () => {
    expect(application).to.contain('About Us');
    expect(application).to.contain('We are passionate about bringing local communities together and encouraging both volunteerism and commerce.');
  });
  it('Has it\'s css styles', () => {
    expect(application.find('.nav')).to.exist;
    expect(application.find('.footer-links')).to.exist;
    expect(application.find('.nav-item')).to.exist;
    expect(application.find('.nav-link')).to.exist;
  });


});

