
class ErrorHandlerService {

    static error(message) {
      // TODO call error register
      throw new Error(`Error: ${message}`);
    }

    static log(message) {
      console.log(message);
    }
}

export default ErrorHandlerService;
