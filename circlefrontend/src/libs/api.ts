import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJnaWJyYW4iLCJhZGRyZXNzIjoic29sbyIsImVtYWlsIjoiZnVmdWZhZmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkNExBbzFDRmw4R1FMSmxOYTNoRkxXT3NyZ0x1Ly5UQmcuL3BwdWNwOEswWm1hM1ZIS1Z3V3UiLCJpYXQiOjE3MzA4ODYyMTIsImV4cCI6MTczMDk3MjYxMn0.3NeMoqJNw4YCw9SHM0JyHK89TyC-lS-ayumbR-4cF9A",
  },
});

