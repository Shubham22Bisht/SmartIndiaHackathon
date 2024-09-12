import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const scholarshipApplications = [
        { id: 1, appId: 101, name: 'John Doe', institution: 'University A', status: 'Pending' },
        { id: 2, appId: 102, name: 'Jane Smith', institution: 'University B', status: 'Approved' },
        { id: 3, appId: 103, name: 'Alice Johnson', institution: 'University C', status: 'Rejected' }
    ];

    const [statusFilter, setStatusFilter] = useState('');
    const [institutionFilter, setInstitutionFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    const filteredApplications = scholarshipApplications.filter(app => {
        return (statusFilter ? app.status === statusFilter : true) &&
               (institutionFilter ? app.institution.toLowerCase().includes(institutionFilter.toLowerCase()) : true) &&
               (nameFilter ? app.name.toLowerCase().includes(nameFilter.toLowerCase()) : true);
    });

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Scholarship Portal Dashboard</h1>
            </header>
            <div className="top-widgets">
                <div className="widget applications">
                    <h2>Applications</h2>
                    <p>Number of New Applications: 12</p>
                    <p>Applications in Review: 8</p>
                    <p>Accepted Applications: 20</p>
                </div>
                <div className="widget activities">
                    <h2>Recent Activities</h2>
                    <ul>
                        <li>Reviewed application #1124</li>
                        <li>Accepted application #1023</li>
                        <li>Rejected application #1352</li>
                    </ul>
                </div>
                <div className="widget notices">
                    <h2>Important Notices</h2>
                    <p>New scholarship policies effective from next month.</p>
                </div>
            </div>
            <div className="widget table-widget">
                <h2>Scholarship Applications</h2>
                <div className="filters-row">  {/* Wrapper for filters */}
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={nameFilter}
                        onChange={e => setNameFilter(e.target.value)}
                        className="search-input"
                    />
                    <input
                        type="text"
                        placeholder="Search by Institution"
                        value={institutionFilter}
                        onChange={e => setInstitutionFilter(e.target.value)}
                        className="search-input"
                    />
                    <select onChange={e => setStatusFilter(e.target.value)} className="filter-select">
                        <option value="">Filter by Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Application ID</th>
                            <th>Name</th>
                            <th>Institution Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map(app => (
                            <tr key={app.id}>
                                <td>{app.appId}</td>
                                <td>{app.name}</td>
                                <td>{app.institution}</td>
                                <td>{app.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
