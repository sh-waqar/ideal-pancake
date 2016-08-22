class FeedFormController {
  constructor() {
    this.urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    this.showError = false;
    this.submitted = false;
  }

  requestFeed(formFields) {
    if (formFields.$invalid) {
      this.submitted = true;
      this.showError = true;
      return;
    } else {
      this.submitted = false;
      this.showError = false;
      this.makeRequest({ url: formFields.$viewValue });
    }
  }
}

export default FeedFormController;
