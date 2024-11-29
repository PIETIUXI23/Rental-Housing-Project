import { jwtDecode } from 'jwt-decode';

export const getUserRole = () => {
    const token = localStorage.getItem('token');
    console.log('ok');

    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.role; // Trả về vai trò từ token
    } catch (error) {
        return null; // Trường hợp token không hợp lệ
    }
};
