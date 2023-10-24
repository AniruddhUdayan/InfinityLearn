export function getQueryParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = {};
  
    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }
  
    return params;
  }
  