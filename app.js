// import services and utilities
import { getUser, signOut } from '/services/auth-service.js';
import { getBulletins } from '/services/data-service.js';

// import component creators
import createNewPostButton from './components/NewPostButton.js';
import createSignInOut from './components/SignInOut.js';
import createBulletinList from '/components/BulletinList.js';

// declare state
const state = {
    user: null,
    bulletins: [],
    get signedIn() {
        return !!this.user;
    }
};

// write handler functions
async function handlePageLoad() {
    state.bulletins = await getBulletins();
    state.user = await getUser();

    display();
}

async function handleSignInOut() {
    if (state.signedIn) {
        await signOut();
        state.user = null;
        display();
    } else {
        location.replace('/auth');
    }
}

function handleNewPost() {
    location.assign('/create-post');
}

// Create each component:
const NewPostButton = createNewPostButton(document.querySelector('#new-post'), {
    handleNewPost
});
const SignInOut = createSignInOut(document.querySelector('#sign-in-out'), {
    handleSignInOut
});
const BulletinList = createBulletinList(document.querySelector('#bulletin-list'));

// Roll-up display function that renders (calls with state) each component
function display() {
    NewPostButton();
    SignInOut({
        signedIn: state.signedIn,
        username: state.user?.email,
    });
    BulletinList({ bulletins: state.bulletins });
}

// Do page load actions
handlePageLoad();
