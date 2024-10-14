export default function ExceptionHandler(error, request, response, next) {
    console.error(error.message);
    response.status(500).send('Something broke!');
}
