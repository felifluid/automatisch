import verifyCredentials from './verify-credentials.js';
import isStillVerified from './is-still-verified.js';

export default {
  fields: [
    {
      key: 'screenName',
      label: 'Screen Name',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Screen name of your connection to be used on Automatisch UI.',
      clickToCopy: false,
    },
    {
      key: 'instanceUrl',
      label: 'Webling instance URL',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: 'example.webling.ch',
      description: 'The base URL of your Webling instance',
      clickToCopy: true,
    },
    {
      key: 'apikey',
      label: 'Your API-Key',
      type: 'string',
      required: true,
      readOnly: false,
      value: '',
      description: 'Webling API-Key of your instance.',
      variables: true,
      clickToCopy: false,
    },
  ],
  verifyCredentials,
  isStillVerified,
};
