import { expect } from '../test_helper';
import { signupUser, signinUser, authError, signoutUser } from '../../src/client/actions';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../../src/client/constants';



describe('UserAuthentication', () => {

    let savedAction;
    describe('Sign in user', () => {
      before((done) => {
        const signin = signinUser({email:'asdf@asdf.com', password:'asdf' });
        signin((action)=>{
          savedAction = action;
        })
        setTimeout(() => {
          done()
        }, 1000)        
      })
      it('should return an AUTH_ERROR action', () => {
          expect(savedAction.type).to.equal(AUTH_ERROR);
      });
      it('should notify of incorrect login', () => {
          expect(savedAction.payload).to.equal('Wrong login')
      });
    });
    
  describe('Displays Errors', () => {
    it('should have action type auth error', () => {
      const error = authError("");
      expect(error.type).to.equal(AUTH_ERROR);
    });

    it('should have payload error its given', () => {
      const error = authError('Please try again');
      expect(error.payload).to.equal('Please try again');
    });
  });

});