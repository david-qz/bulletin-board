export default function createErrorMessage(root) {
    return ({ errorMessage }) => {
        root.textContent = errorMessage;
    };
}
