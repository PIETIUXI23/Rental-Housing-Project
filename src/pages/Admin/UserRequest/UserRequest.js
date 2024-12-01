import React, { useState } from 'react';
import axios from 'axios';

const UserRequest = () => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const supportRequest = {
            content,
            status: 0, // Mặc định trạng thái là "Chưa xử lý"
            createdAt: new Date(),
        };

        try {
            await axios.post('/support-requests', supportRequest);
            alert('Yêu cầu hỗ trợ đã được gửi!');
            setContent('');
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu hỗ trợ:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Gửi Yêu Cầu Hỗ Trợ</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Nhập nội dung yêu cầu hỗ trợ..."
                required
            />
            <button type="submit">Gửi</button>
        </form>
    );
};

export default UserRequest;