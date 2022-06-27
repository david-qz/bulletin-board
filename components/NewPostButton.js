export default function createNewPostButton(button, { handleNewPost }) {
    button.addEventListener('click', () => {
        handleNewPost();
    });

    return ({ signedIn }) => {
        button.classList.toggle('hidden', !signedIn);
    };
}
