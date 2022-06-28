// import services and utilities
import { getUser } from '/services/auth-service.js';
import { postBulletin } from '/services/data-service.js';

// import component creators
import createNewBulletinForm from '/components/NewBulletinForm.js';

// write handler functions
async function handlePageLoad() {
    const user = await getUser();
    if (!user) {
        const searchParams = new URLSearchParams();
        searchParams.set('from', '/create-post');
        location.replace('/auth/?' + searchParams.toString());
        return;
    }

    display();
}

function handleNewBulletin({ title, content, contactInfo }) {
    postBulletin(title, content, contactInfo);
    location.assign('/');
}

// Create each component:
const NewBulletinForm = createNewBulletinForm(document.querySelector('#new-form'), {
    handleNewBulletin
});

// Roll-up display function that renders (calls with state) each component
function display() {
    NewBulletinForm();
}

// Do page load actions
handlePageLoad();
