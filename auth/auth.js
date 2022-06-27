// import services and utilities
import { getUser, signIn, signUp } from '/services/auth-service.js';

// import component creators
import createAuthForm from '../components/AuthForm.js';
import createErrorMessage from '../components/ErrorMessage.js';

// declare state
const state = {
    error: '',
};

// write handler functions
async function handlePageLoad() {
    const user = await getUser();
    if (user) {
        location.replace('/');
        return;
    }

    display();
}

async function handleSignIn(email, password) {
    const response = await signIn(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);
}

function checkAuth(response) {
    if (response.error) {
        // eslint-disable-next-line no-console
        console.log(response.error);
        state.error = response.error.message;
        display();
    } else {
        location.replace('/');
    }
}

// Create each component:
const SignInForm = createAuthForm(document.querySelector('#sign-in-form'), {
    handleAuth: handleSignIn,
});
const SignUpForm = createAuthForm(document.querySelector('#sign-up-form'), {
    handleAuth: handleSignUp,
});
const ErrorMessage = createErrorMessage(document.querySelector('#error-message'));

// Roll-up display function that renders (calls with state) each component
function display() {
    SignInForm();
    SignUpForm();
    ErrorMessage({ errorMessage: state.error });
}

// Do page load actions
handlePageLoad();
