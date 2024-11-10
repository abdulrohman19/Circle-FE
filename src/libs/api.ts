import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsIm5hbWUiOiJhY2NvdW50IiwiYWRkcmVzcyI6Ik5ldyBZb3JrIiwiZW1haWwiOiJhY2NvdW50QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFROUWhiVk9EZkRNaFQyZHdGWnhITWUuZXhXYm1TUGJyQjk1amNYYWd4ZGtPd05kRmdjZmtXIiwiaWF0IjoxNzMxMDE4NTE5LCJleHAiOjE3MzExMDQ5MTl9.S0L55REYBtFFhZVWjETDm0EqT0b_mbq349udAo9U0JU",
  },
});

