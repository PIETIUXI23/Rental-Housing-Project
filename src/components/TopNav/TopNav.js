import React from "react";
import "src/Extension/bootstrap/dist/css/less/mixins/vendor-prefixes.less";

const TopNav = () => {
    return (
        <div className="nav_menu">
            <nav>
                <div className="nav toggle">
                    <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                </div>
                <div className="nav toggle" style={{ float: "right", textAlign: "right", width: "150px" }}>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#NoteModal" title="Ghi chú">
                        <i className="fa fa-sticky-note"></i>
                    </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#CalculatorModal" title="Máy tính">
                        <i className="fa fa-calculator"></i>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;
