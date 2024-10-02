const setBaseUrl = ($, requestConfig) => {
    const baseUrl = 'https://' + $.auth.data.instanceUrl;

    requestConfig.baseURL = baseUrl;
  
    return requestConfig;
  };
  
  export default setBaseUrl;
  