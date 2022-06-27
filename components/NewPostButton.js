export default function createNewPostButton(button, { handleNewPost }) {
    button.addEventListener('click', () => {
        handleNewPost();
    });

    return () => {};
}
