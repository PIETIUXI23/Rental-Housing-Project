import React, { useState } from 'react';
import "src/Extension/bootstrap/dist/css/less/mixins/vendor-prefixes.less";

const CalculatorModal = () => {
    const [input, setInput] = useState('0');

    const handleClick = (value) => {
        setInput((prev) => (prev === '0' ? value : prev + value));
    };

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput('Error');
        }
    };

    return (
        <div id="CalculatorModal" className="modal fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document" style={{ width: '390px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Máy tính</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="calc-card">
                            <div id="screen" className="screen">
                                {input}
                            </div>
                            <div className="buttons">
                                {[...Array(10).keys()].map((num) => (
                                    <button key={num} className="digit" onClick={() => handleClick(num.toString())}>
                                        {num}
                                    </button>
                                ))}
                                <button onClick={() => setInput('0')}>C</button>
                                <button onClick={calculate}>=</button>
                                <button onClick={() => handleClick('+')}>+</button>
                                <button onClick={() => handleClick('-')}>-</button>
                                <button onClick={() => handleClick('*')}>x</button>
                                <button onClick={() => handleClick('/')}>÷</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorModal;
