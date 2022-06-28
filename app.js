// import services and utilities
import { getUser, signOut } from '/services/auth-service.js';
import { getBulletins, deleteBulletin } from '/services/data-service.js';

// import component creators
import createNewBulletinButton from './components/NewBulletinButton.js';
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
        const searchParams = new URLSearchParams();
        searchParams.set('from', '/');
        location.assign('/auth/?' + searchParams.toString());
    }
}

function handleNewBulletin() {
    location.assign('/create-post');
}

async function handleDeleteBulletin(id) {
    if (state.signedIn) {
        const response = await deleteBulletin(id);

        if (!response.error) {
            state.bulletins = await getBulletins();
            display();
        }
    }
}

// Create each component:
const NewBulletinButton = createNewBulletinButton(document.querySelector('#post-bulletin'), {
    handleNewBulletin
});
const SignInOut = createSignInOut(document.querySelector('#sign-in-out'), {
    handleSignInOut
});
const BulletinList = createBulletinList(document.querySelector('#bulletin-list'), {
    handleDeleteBulletin
});

// Roll-up display function that renders (calls with state) each component
function display() {
    NewBulletinButton({ signedIn: true }); // Leaving this until I decide if this button should hide
    SignInOut({
        signedIn: state.signedIn,
        username: state.user?.email,
    });
    BulletinList({ bulletins: state.bulletins });
}

// Do page load actions
handlePageLoad();
