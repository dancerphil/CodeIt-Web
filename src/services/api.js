import { stringify } from 'qs';
import request from '../utils/request';

async function r(url, body) {
  if (body) {
    const req = await request(url, { method: 'POST', body });
    const { error_code } = req;
    if (error_code === 0) {
      return req;
    }
    throw new Error(`error_code: ${error_code}`);
  }
  return request(url, { method: 'POST' });
}

export async function login(params) {
  return r('/api/user/login', params);
}

export async function profile() {
  return r('/api/user/profile');
}

export async function course() {
  return r('/api/class/find');
}

export async function lesson(id) {
  return r('/api/class/lesson/find', { cid: id });
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
