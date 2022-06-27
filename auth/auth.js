// import services and utilities
import { getUser, signIn, signUp } from '/services/auth-service.js';

// import component creators
import createAuthForm from '../components/AuthForm.js';

// declare state
// TODO: implement error message component and use this bit of state.
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
    display();
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);
    display();
}

function checkAuth(response) {
    if (response.error) {
        // eslint-disable-next-line no-console
        console.log(response.error);
        state.error = response.error.message;
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

// Roll-up display function that renders (calls with state) each component
function display() {
    SignInForm();
    SignUpForm();
}

// Do page load actions
handlePageLoad();
