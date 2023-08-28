import httpService from './config/httpService';
import { PageConfig } from '../types/common';
import { APIs } from './config/api';

const userService = {
  getUsers(pageConfig: PageConfig) {
    return httpService.get(`${APIs.USERS}`, { params: pageConfig });
  },
};

export default userService;
