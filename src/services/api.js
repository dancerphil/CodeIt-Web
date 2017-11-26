import { stringify } from 'qs';
import request from '../utils/request';

const r = (url, body) => {
  if (body) {
    return request(url, { method: 'POST', body });
  }
  return request(url, { method: 'POST' });
};

export async function login(params) {
  return r('/api/user/login', params);
}
export async function course() {
  return r('/api/class/find');
}

export async function queryProjectNotice() {
  return r('/api/project/notice');
}

export async function queryActivities() {
  return r('/api/activities');
}

export async function queryRule(params) {
  return r(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return r('/api/rule', params);
}

export async function addRule(params) {
  return r('/api/rule', params);
}

export async function fakeSubmitForm(params) {
  return r('/api/forms', params);
}

export async function fakeChartData() {
  return r('/api/fake_chart_data');
}

export async function queryTags() {
  return r('/api/tags');
}

export async function queryBasicProfile() {
  return r('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return r('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return r(`/api/fake_list?${stringify(params)}`);
}


export async function fakeMobileLogin(params) {
  return r('/api/login/mobile', params);
}

export async function fakeRegister(params) {
  return r('/api/register', params);
}

export async function queryNotices() {
  return r('/api/notices');
}
