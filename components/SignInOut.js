export default function createSignInOut(root, { handleSignInOut }) {
    const button = root.querySelector('button');
    const userDisplay = root.querySelector('span');

    button.addEventListener('click', () => {
        handleSignInOut();
    });

    return ({ signedIn, username }) => {
        button.textContent = signedIn ? 'Sign Out' : 'Sign In';
        userDisplay.textContent = signedIn ? username : '';
    };
}
