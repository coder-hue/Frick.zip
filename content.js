function blockScamDomains() {
    const blockedDomains = [".zip", ".mov"];
    const excludedDomains = ["www.google.", "www.bing.", "www.yahoo."]; // Add other search engine domains if needed
  
    const currentDomain = window.location.hostname;
  
    // Check if the URL contains a blocked domain, excluding search engine domains
    if (blockedDomains.some(domain => currentDomain.endsWith(domain)) && !excludedDomains.some(domain => currentDomain.includes(domain))) {
      // Store the original URL in the local storage
      chrome.storage.local.set({ originalURL: window.location.href });
  
      // Redirect the user to the warning page
      const warningPageURL = chrome.runtime.getURL("warning.html");
      window.location.href = warningPageURL;
    }
  }
  
  blockScamDomains();
  