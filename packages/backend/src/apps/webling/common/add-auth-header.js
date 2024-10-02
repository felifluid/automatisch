const addAuthHeader = ($, requestConfig) => {
    const apikey = $.auth.data.apikey;
  
    if (apikey) {
      requestConfig.headers = {
        apikey: apikey
      };
    }
  
    return requestConfig;
  };
  
  export default addAuthHeader;
  