import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faStickyNote } from '@fortawesome/free-solid-svg-icons';

function ACDocuments(props) {

    return (
        <div className="col-12  Secondary_top_header_bg b-r-5">
            <section className="col-12 p-0 documents pb-3 pt-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0  mb-4">
                    <FontAwesomeIcon className="float-left pr-2" size='3x' color='#ce5a24' icon={faTags} />
                    <h6 className="name_txt d-inline-block mt-2">Associated Documents</h6>
                </div>
                {
                    props.lstAssociates.map((d) => (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 pl-2 mb-4">
                            <FontAwesomeIcon className="float-left pr-2" size='3x' color='#7f8de1' icon={faStickyNote} />
                            <p className="name_txt link_txt d-inline-block mt-2 mb-0">{d.docName}</p>
                        </div>
                    ))
                }
                <p className="text-center m-0 border-top pt-1"><a className="link_txt" href="#">View All</a></p>
            </section>
        </div>
    );
}

export default ACDocuments;