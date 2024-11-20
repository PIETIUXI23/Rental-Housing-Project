import React, { useState } from 'react';
import styles from './AdminNavMenu.module.scss';

const AdminNavMenu = ({ onToggleMenu }) => {
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);

    return (
        <div className={styles.nav_menu}>
            <nav>
                <div className={styles.nav_toggle}>
                    <a onClick={onToggleMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <div className={styles.nav_toggle_right}>
                    <button
                        type="button"
                        className={styles.btn_success}
                        onClick={() => setIsNoteModalOpen(true)}
                        title="Ghi chú"
                    >
                        <i className="fa fa-sticky-note"></i>
                    </button>
                    <button
                        type="button"
                        className={styles.btn_primary}
                        onClick={() => setIsCalculatorModalOpen(true)}
                        title="Máy tính"
                    >
                        <i className="fa fa-calculator"></i>
                    </button>
                </div>
            </nav>

            {/* Note Modal */}
            {isNoteModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2>Ghi chú</h2>
                        <textarea rows="4" className={styles.note_textarea}></textarea>
                        <div className={styles.modal_footer}>
                            <button onClick={() => setIsNoteModalOpen(false)}>Đóng</button>
                            <button className={styles.btn_save}>Lưu</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Calculator Modal */}
            {isCalculatorModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2>Máy tính</h2>
                        {/* Add calculator component here */}
                        <div className={styles.modal_footer}>
                            <button onClick={() => setIsCalculatorModalOpen(false)}>Đóng</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminNavMenu;
