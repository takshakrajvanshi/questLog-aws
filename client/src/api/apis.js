const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const API_BASE = `${BASE_URL}/api/v1`;

export const authEndpoints = {
  SIGNUP_API: `${API_BASE}/auth/signup`,
  SIGNIN_API: `${API_BASE}/auth/signin`,
  LOGOUT_API: `${API_BASE}/auth/logout`,
};

export const settingEndpoints = {
  UPDATE_PROFILE_PICTURE_API: `${API_BASE}/profile/updateProfilePicture`,
  UPDATE_PROFILE_API: `${API_BASE}/profile/updateProfile`,
};

export const gamesEndpoints = {
  GET_ALL_GAMES_API: `${API_BASE}/games/getAllGames`,
  GET_GAME_BY_ID_API: `${API_BASE}/games/getGameById`,
};

export const orderEndPoints = {
  CREATE_ORDER_API: `${API_BASE}/order/createOrder`,
  GET_USER_ORDERS_API: `${API_BASE}/order/getUserOrders`,
};

export const paymentEndPoints = {
  PROCESS_PAYMENT_API: `${API_BASE}/payment/process`,
  STRIPE_API: `${API_BASE}/payment/stripeapi`,
};
