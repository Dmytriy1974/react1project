import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "ea843934-577f-4e93-9f11-fb9f43afd3a2" },
});

export const userApi = {
  getUsers(currentPage = 1, pageSize = 50) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const authApi = {
  me() {
    return instance.get(`auth/me`);
  },
};

export const followApi = {
  deleteFriend(userId) {
    return instance.delete(`follow/${userId}`);
  },

  addFriend(userId) {
    return instance.post(`follow/${userId}`);
  },
};
