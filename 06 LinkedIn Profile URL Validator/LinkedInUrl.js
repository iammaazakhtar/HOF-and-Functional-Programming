function validateLinkedInURL(url) {
  const linkedInURLPattern =
    /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  if (linkedInURLPattern.test(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInURL("https://www.linkedin.com/in/jane_doe");
validateLinkedInURL("https://www.linkedin.com/in/alex-smith");
validateLinkedInURL("https://www.linkedin.com/in/user123");
validateLinkedInURL("https://www.linkedin.com/in/invalid-url");
validateLinkedInURL("http://www.linkedin.com/in/johndoe"); // Should not match due to "http://" instead of "https://"
validateLinkedInURL("https://www.linkedin.com/company/example"); // Should not match due to "/company/" instead of "/in/"
