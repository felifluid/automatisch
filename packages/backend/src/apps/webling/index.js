import defineApp from '../../helpers/define-app.js';
import auth from './auth/index.js'
import actions from './actions/index.js';
import dynamicData from './dynamic-data/index.js';
import setBaseUrl from './common/set-base-url.js';
import addAuthHeader from './common/add-auth-header.js';

export default defineApp({
  name: 'Webling',
  key: 'webling',
  iconUrl: '',
  authDocUrl: '{DOCS_URL}/apps/webling/connection',
  supportsConnections: true,
  baseUrl: '',
  apiBaseUrl: '',
  primaryColor: '17a2b8',
  beforeRequest: [setBaseUrl, addAuthHeader],
  auth,
  actions,
  dynamicData
});