import React, { useState } from 'react';
import ACHeader from './acHeader';
import ACMain from './acMain';
import ACDocuments from './acDocuments';
import ACActivity from './acActivity';
import './../App.css';

function Account() {

    const [acData] = useState({
        acDetails: {
            acName: 'Ohana, Inc.',
            acNumber: 'A4383668',
            acType: 'chakkaravarthi',
            acIndustry: 'Chakkaravarthi',
            acTotalSales: '$41,860.00',
            totalEmp: '20,050',
            dsa: 308,
            acTypeId: 2,
            acIndustryId: 2
        },
        lstACType: [{ value: 0, label: '-- Select --' }, { value: 1, label: 'No Data' }, { value: 2, label: 'Enterprise' }],
        lstACIndustry: [{ value: 0, label: '-- Select --' }, { value: 1, label: 'No Data' }, { value: 2, label: 'Biotecnology' }],
        lstSponsors: [
            { name: 'Emily Waters', title: 'CIO', pic: 'user', notes: 'Due to the widespread use of tables across third-party widgets like calendars and date pickers.' },
            { name: 'Bob Hodges', title: 'Head of corporate Productivity', pic: 'user', notes: 'we’ve designed our tables.' }
        ],
        lstAssociates: [
            { docName: 'Ohana,Inc Business Review' },
            { docName: 'Ohana Account Plan' },
            { docName: 'Big Bet Close Plan - Ohana,Inc.-New Business-40k' }
        ]
    });

    const { acDetails, lstAssociates } = acData;

    return (
        <div className="container-fluid">
            <ACHeader acDetails={acDetails} />
            <div className="col-12 mt-3">
                <div className="row">
                    <ACMain acData={acData} />
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 b-r-5 pr-0">
                        <ACDocuments lstAssociates={lstAssociates} />
                        <ACActivity />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
