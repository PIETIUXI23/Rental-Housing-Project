import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminSupport = () => {
    const [requests, setRequests] = useState([]);
    const [reply, setReply] = useState('');
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('/support-requests/pending');
            setRequests(response.data);
        };
        fetchRequests();
    }, []);

    const handleReply = async (id) => {
        try {
            await axios.post(`/support-requests/${id}/reply`, reply);
            alert('Đã trả lời yêu cầu!');
            setRequests(requests.filter((req) => req.id !== id)); // Xóa request đã trả lời khỏi danh sách
            setReply('');
            setSelectedRequest(null);
        } catch (error) {
            console.error(error);
            alert('Có lỗi xảy ra!');
        }
    };

    return (
        <div>
            <h1>Hỗ trợ yêu cầu</h1>
            <ul>
                {requests.map((req) => (
                    <li key={req.id}>
                        {req.content}
                        <button onClick={() => setSelectedRequest(req)}>Trả lời</button>
                    </li>
                ))}
            </ul>
            {selectedRequest && (
                <div>
                    <h2>Trả lời yêu cầu</h2>
                    <textarea
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Nhập nội dung trả lời..."
                    ></textarea>
                    <button onClick={() => handleReply(selectedRequest.id)}>Gửi</button>
                </div>
            )}
        </div>
    );
};

export default AdminSupport;