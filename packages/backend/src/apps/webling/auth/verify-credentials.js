const verifyCredentials = async ($) => {
  const url = '/api/1/calendar';

  await $.http.get(url);

  await $.auth.set({
    screenName: $.auth.data.screenName,
  });
};

export default verifyCredentials;
