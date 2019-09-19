import axios from "axios";
import { FETCH_USER, FETCH_BLOGS, FETCH_BLOG, DELETE_BLOG } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/user");

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBlogs = () => async dispatch => {
    const res = await axios.get("/api/blogs");

    dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const fetchBlog = id => async dispatch => {
    const res = await axios.get(`/api/blogs/${id}`);

    dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const deleteBlog = id => async dispatch => {
    await axios.delete(`/api/blogs/${id}`);
    dispatch({ type: DELETE_BLOG, payload: id });
};
