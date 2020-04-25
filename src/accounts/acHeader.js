import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faSitemap } from '@fortawesome/free-solid-svg-icons';

function ACHeader(props) {

    const {
        acName,
        acNumber,
        acType,
        acIndustry,
        acTotalSales,
        totalEmp,
        dsa
    } = props.acDetails;

    return (
        <>
            <div className="col-12 pt-2 pb-2 top_header_bg b-t-l-r">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <FontAwesomeIcon className="float-left pr-2" size='3x' color='#7f8de1' icon={faTasks} />
                        <span className="sub_txt d-block">Account</span>
                        <h6 className="name_txt d-inline-bloc">*{acName} <FontAwesomeIcon className="ml-2" size='1x' color='#8d8b8a' icon={faSitemap} /></h6>
                    </div>
                </div>
            </div>
            <div class="col-12 pt-3 pb-3 Secondary_top_header_bg b-b-l-r">
                <div className="d-flex justify-content-start flex-wrap">

                    <div className="pl-3 pr-4 mt-2 mb-2">
                        <span className="d-block sub_txt">Account Number</span>
                        <span className="bind_txt">{acNumber}</span>
                    </div>

                    <div className="pl-3 pr-4 mt-2 mb-2">
                        <span className="d-block sub_txt">Type</span>
                        <span className="bind_txt">{acType}</span>
                    </div>

                    <div className="pl-3 pr-4 mt-2 mb-2">
                        <span className="d-block sub_txt">Industry</span>
                        <span className="bind_txt">{acIndustry}</span>
                    </div>

                    <div className="pl-3 pr-4 mt-2 mb-2">
                        <span className="d-block sub_txt">Total Sales</span>
                        <span className="bind_txt">{acTotalSales}</span>
                    </div>

                    <div className="pl-3 pr-4 mt-2 mb-2">
                        <span className="d-block sub_txt">Employees</span>
                        <span className="bind_txt">{totalEmp}</span>
                    </div>

                    <div className="pl-3 pr-4 mt-2 mb-2">
                        <span className="d-block sub_txt">Days Since Activity</span>
                        <span className="bind_txt">{dsa}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ACHeader;