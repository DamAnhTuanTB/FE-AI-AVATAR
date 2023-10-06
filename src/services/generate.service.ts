import {
  baseRequest,
  generateRequest,
  baseServerRequest,
  baseServerDownloadImage,
} from './base.service';
import axios from 'axios';
import { APIs, VERSION } from './config/api';

interface ListPriceType {
  type: 'main' | 'sale50' | 'sale25';
}

const generateService = {
  getInfoUser() {
    return baseServerRequest.get(VERSION.v1 + APIs.GET_USER);
  },
  checkUserExist(id: string) {
    return baseServerRequest.get(VERSION.v1 + APIs.CHECK_USER_EXIST + `/${id}`);
  },
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
    return baseServerRequest.post(VERSION.v1 + APIs.CREATE_SESSION, payload);
  },
  getListPrice(payload: ListPriceType) {
    return baseServerRequest.get(VERSION.v1 + APIs.GET_LIST_PRICE, payload);
  },
  purchaseNow(payload: any) {
    return baseServerRequest.post(VERSION.v1 + APIs.PURCHASE_NOW, payload);
  },
  getListSession() {
    return baseServerRequest.get(VERSION.v1 + APIs.GET_LIST_SESSION);
  },
  getPreSignFile(params: { filename: string }) {
    return baseServerRequest.get(VERSION.v1 + APIs.GET_PRESIGN_FILE, params);
  },
  uploadFileS3(url: string, body: any) {
    return axios.post(url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getDetailSession(id: string) {
    return baseServerRequest.get(
      VERSION.v1 + APIs.GET_DETAIL_SESSION + `/${id}`
    );
  },
  downloadAvatar(params: any) {
    return baseServerRequest.get(
      VERSION.v1 + APIs.DOWNLOAD_ALL_AVATAR_WITH_STYLE,
      params
    );
  },
  sendMail(payload: any) {
    return baseServerRequest.post(VERSION.v1 + APIs.SEND_MAIL, payload);
  },
  downloadImage(params: any) {
    return baseServerDownloadImage.get(
      VERSION.v1 + APIs.DOWNLOAD_IMAGE,
      params
    );
  },
};

export default generateService;
