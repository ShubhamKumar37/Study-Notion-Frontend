const baseUrl = process.env.REACT_APP_BASE_URL;
console.log("this is the baseUrl = ", baseUrl);

export const userAuthApis = {
  LOGIN_USER: `${baseUrl}/user`,
  SIGNUP_USER: `${baseUrl}/user`,
  LOGOUT_USER: `${baseUrl}/user/logout`,
  SENDOTP_USER: `${baseUrl}/user/sendotp`,
  PASSWORD_CHANGE_USER: `${baseUrl}/user/password-change`,
  PASSWORD_TOKEN_USER: `${baseUrl}/user/password-token`,
  PASSWORD_RESET_USER: `${baseUrl}/user/password-reset`,
};

export const courseApis = {
  GET_ALL_COURSE: `${baseUrl}/course`,
  GET_COURSE_DETAIL: `${baseUrl}/course/:courseId`,
  DELETE_COURSE: `${baseUrl}/course/:courseId`,
  UPDATE_COURSE: `${baseUrl}/course`,
  CREATE_COURSE: `${baseUrl}/course`,
};

export const sectionApis = {
  GET_ALL_SECTION: `${baseUrl}/course/section/:courseId`,
  CREATE_SECTION: `${baseUrl}/course/section/:courseId`,
  UPDATE_SECTION: `${baseUrl}/course/section/:sectionId`,
  DELETE_SECTION: `${baseUrl}/course/section/:courseId`,
};

export const subSectionApis = {
  UPDATE_SUBSECTION_TEXT: `${baseUrl}/course/subsection`,
  DELETE_SUBSECTION: `${baseUrl}/course/subsection/:sectionId`,
  CREATE_SUBSECTION: `${baseUrl}/course/subsection/:sectionId`,
  UPDATE_SUBsECTION_VIDEO: `${baseUrl}/course/subsection/:subSectionId`,
};

export const profileApis = {
  GET_USER_DETAIL: `${baseUrl}/profile`,
  UPDATE_PROFILE: `${baseUrl}/profile`,
  USER_COURSE_ENROLLED: `${baseUrl}/profile/course-enrolled`,
  UPDATE_PROFILE_PICTURE: `${baseUrl}/profile/pp`,
};

export const categoryApis = {
  CREATE_CATEGORY: `${baseUrl}/category`,
  GET_ALL_CATEGORY: `${baseUrl}/category`,
  GET_CATEGORY_DETAIL: `${baseUrl}/category/:categoryId`,
  UPDATE_CATEGORY: `${baseUrl}/category/:categoryId`,
};

export const commentApis = {
  CREATE_COMMENT: `${baseUrl}/comment/:courseId`,
  GET_AVERAGE_RATING: `${baseUrl}/comment/avg-rating/:courseId`,
  GET_ALL_COURSE_COMMENT: `${baseUrl}/comment/:courseId`,
  GET_ALL_COMMENT: `${baseUrl}/comment`,
  UPDATE_COMMENT: `${baseUrl}/comment/:commentId`,
  DELETE_COMMENT: `${baseUrl}/comment/:commentId`,
};

