import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function ACActivity() {
    return (
        <div className="col-12  Secondary_top_header_bg b-r-5 mt-2">
        <Tabs defaultActiveKey="Activity" className="project-tab">
            <Tab eventKey="Activity" className="p-4" title="Activity">
                1
            </Tab>
            <Tab eventKey="Chatter" className="p-4" title="Chatter">
                2
            </Tab>
        </Tabs>
        </div>
    );
}

export default ACActivity;