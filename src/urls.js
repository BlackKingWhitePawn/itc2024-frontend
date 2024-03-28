const API_URL = 'http://92.63.105.20:8100/api';

const URLS = {
    API_URL: API_URL,
    LOGIN: `${API_URL}/auth/login`,
    COMPANY: (id) => `${API_URL}/companies/company?company_id=${id}`,
    ACCOUNTS: `${API_URL}/accounts/`,
    ACCOUNT: (id, page) => `${API_URL}/accounts/account?account_id=${id}&page=${page}`,
}

export default URLS