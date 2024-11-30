import { jwtDecode } from 'jwt-decode';

export const getUserRole = () => {
    const token = localStorage.getItem('token');

    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.role; // Trả về vai trò từ token
    } catch (error) {
        return null; // Trường hợp token không hợp lệ
    }
};

export const getFullName = () => {
    const token = localStorage.getItem('token');

    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.fullName; // Trả về vai trò từ token
    } catch (error) {
        return null; // Trường hợp token không hợp lệ
    }
};
