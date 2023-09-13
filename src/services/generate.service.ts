import { baseRequest, generateRequest, sessionRequest } from './base.service';
import { APIs, VERSION } from './config/api';

const generateService = {
  checkingUpload(payload: any) {
    return baseRequest.post(VERSION.v1 + APIs.CHECKING_UPLOAD, payload);
  },
  getListStyles() {
    return baseRequest.get(VERSION.v1 + APIs.GET_LIST_STYLES);
  },
  generateImage(payload: any) {
    return generateRequest.post(VERSION.v1 + APIs.GENERATE_IMAGE, payload);
  },
  createSession(payload: any) {
    return sessionRequest.post(VERSION.v1 + APIs.CREATE_SESSION, payload);
  },
};

export default generateService;
