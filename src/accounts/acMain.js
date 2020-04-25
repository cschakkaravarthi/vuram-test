import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import userImage from './../assets/images/user.png';


function ACMain(props) {

    const createDDL = (lst, selectedValue) => (
        <select value={selectedValue} className="form-control form-control-sm" >
            {lst.map((data) => (
                <option value={data.value}>{data.label}</option>
            ))}
        </select>
    );

    const { acDetails: { acName, acTypeId, acIndustryId, totalEmp }, lstACType, lstACIndustry, lstSponsors } = props.acData;

    return (
        <>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 Secondary_top_header_bg b-r-5">
                <Tabs defaultActiveKey="accountPlan" id="uncontrolled-tab-example" className="project-tab">
                    <Tab eventKey="Details" className="p-4" title="Home">
                        1
                    </Tab>
                    <Tab eventKey="Related" className="p-4" title="Profile">
                        2
                    </Tab>
                    <Tab eventKey="accountPlan" className="p-4" title="Account plan">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 mb-4">
                            <FontAwesomeIcon className="float-left pr-2" size='3x' color='#ce5a24' icon={faTags} />
                            <h5 className="name_txt d-inline-block mt-2">Account Details</h5>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 clearfix p-0 mt-2 mb-2">
                            <h6 className="name_txt d-inline-block float-left mt-2  mr-3">Account Name</h6>

                            <div className="form-group">
                                <input type="textbox" className="form-control w-25" id="exampleFormControlInput1" placeholder={acName} />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 clearfix p-0 mt-2 mb-2">
                            <h6 className="name_txt">Account Meta Data</h6>

                            <div className="col-12 p-0">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td className="light_gray_bg">
                                                <span className="form-control form-control-sm">
                                                    Account Type
                                                </span>
                                            </td>
                                            <td>
                                                {createDDL(lstACType, acTypeId)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="light_gray_bg">
                                                <span className="form-control form-control-sm">
                                                    Industry
                                                </span>
                                            </td>
                                            <td>
                                                {createDDL(lstACIndustry, acIndustryId)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="light_gray_bg">
                                                <span className="form-control form-control-sm">
                                                    Employees
                                                </span>
                                            </td>
                                            <td>
                                                <span className="form-control form-control-sm">{totalEmp}</span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                                <a className="link_txt" href="#">+ Add Another Info</a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 clearfix p-0 mt-2 mb-2">
                            <h6 className="name_txt">Sponsors</h6>

                            <div className="col-12 p-0">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Picture</th>
                                            <th scope="col">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            lstSponsors.map((d) => (
                                                <tr>
                                                <td className="blue_bg">
                                                    {d.name}
                                                      </td>
                                                <td className="lightblue_bg">
                                                   {d.title}
                                                      </td>
                                                <td className="lightblue_bg text-center">
                                                    <img className="" src={userImage} width="50px" />
                                                </td>
                                                <td className="">
                                                    {d.notes}
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                                <a className="link_txt" href="#">+ Add Sponsor</a>
                            </div>

                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 clearfix p-0 mt-2 mb-2">
                            <h6 className="name_txt">Account Description</h6>
                        </div>
                    </Tab>
                    <Tab eventKey="businessReview" className="p-4" title="Business Review">
                        4
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default ACMain; 