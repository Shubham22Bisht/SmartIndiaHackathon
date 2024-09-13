import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';


let dummy = [
    {
      name: 'User Name 1',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500001',
      dob: '1990-01-01',
      email_id: 'user1@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 1,
      flag: 4
    },
    {
      name: 'User Name 2',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500002',
      dob: '1990-01-01',
      email_id: 'user2@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 2,
      flag: 2
    },
    {
      name: 'User Name 3',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500003',
      dob: '1990-01-01',
      email_id: 'user3@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 3,
      flag: 0
    },
    {
      name: 'User Name 4',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500004',
      dob: '1990-01-01',
      email_id: 'user4@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 4,
      flag: 4
    },
    {
      name: 'User Name 5',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500005',
      dob: '1990-01-01',
      email_id: 'user5@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 5,
      flag: 0
    },
    {
      name: 'User Name 6',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500006',
      dob: '1990-01-01',
      email_id: 'user6@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 6,
      flag: 3
    },
    {
      name: 'User Name 7',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500007',
      dob: '1990-01-01',
      email_id: 'user7@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 7,
      flag: 3
    },
    {
      name: 'User Name 8',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500008',
      dob: '1990-01-01',
      email_id: 'user8@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 8,
      flag: 0
    },
    {
      name: 'User Name 9',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500009',
      dob: '1990-01-01',
      email_id: 'user9@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 9,
      flag: 4
    },
    {
      name: 'User Name 10',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500010',
      dob: '1990-01-01',
      email_id: 'user10@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 10,
      flag: -1
    },
    {
      name: 'User Name 11',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500011',
      dob: '1990-01-01',
      email_id: 'user11@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 11,
      flag: 3
    },
    {
      name: 'User Name 12',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500012',
      dob: '1990-01-01',
      email_id: 'user12@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 12,
      flag: 0
    },
    {
      name: 'User Name 13',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500013',
      dob: '1990-01-01',
      email_id: 'user13@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 13,
      flag: 2
    },
    {
      name: 'User Name 14',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500014',
      dob: '1990-01-01',
      email_id: 'user14@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 14,
      flag: -1
    },
    {
      name: 'User Name 15',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500015',
      dob: '1990-01-01',
      email_id: 'user15@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 15,
      flag: 4
    },
    {
      name: 'User Name 16',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500016',
      dob: '1990-01-01',
      email_id: 'user16@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 16,
      flag: 4
    },
    {
      name: 'User Name 17',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500017',
      dob: '1990-01-01',
      email_id: 'user17@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 17,
      flag: 4
    },
    {
      name: 'User Name 18',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500018',
      dob: '1990-01-01',
      email_id: 'user18@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 18,
      flag: 1
    },
    {
      name: 'User Name 19',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500019',
      dob: '1990-01-01',
      email_id: 'user19@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 19,
      flag: 2
    },
    {
      name: 'User Name 20',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500020',
      dob: '1990-01-01',
      email_id: 'user20@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 20,
      flag: 3
    },
    {
      name: 'User Name 21',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500021',
      dob: '1990-01-01',
      email_id: 'user21@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 21,
      flag: 4
    },
    {
      name: 'User Name 22',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500022',
      dob: '1990-01-01',
      email_id: 'user22@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 22,
      flag: 1
    },
    {
      name: 'User Name 23',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500023',
      dob: '1990-01-01',
      email_id: 'user23@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 23,
      flag: 3
    },
    {
      name: 'User Name 24',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500024',
      dob: '1990-01-01',
      email_id: 'user24@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 24,
      flag: -1
    },
    {
      name: 'User Name 25',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500025',
      dob: '1990-01-01',
      email_id: 'user25@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 25,
      flag: 0
    },
    {
      name: 'User Name 26',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500026',
      dob: '1990-01-01',
      email_id: 'user26@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 26,
      flag: 3
    },
    {
      name: 'User Name 27',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500027',
      dob: '1990-01-01',
      email_id: 'user27@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 27,
      flag: 4
    },
    {
      name: 'User Name 28',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500028',
      dob: '1990-01-01',
      email_id: 'user28@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 28,
      flag: 0
    },
    {
      name: 'User Name 29',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500029',
      dob: '1990-01-01',
      email_id: 'user29@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 29,
      flag: -1
    },
    {
      name: 'User Name 30',
      fathers_name: "Father's Name",
      mothers_name: "Mother's Name",
      aadhar_no: '123456789012',
      mobile_no: '9876500030',
      dob: '1990-01-01',
      email_id: 'user30@example.com',
      age: 30,
      state_of_domicile: 'State',
      scholarship_category: 'Category',
      acc_holder_name: 'Account Holder',
      acc_no: '1234567890',
      ifsc: 'BANK0001234',
      user_id: 30,
      flag: 4
    }
  ];

const Dashboard = () => {
    const [scholarshipApplications, setScholarshipApplications] = useState(dummy);
    const [statusFilter, setStatusFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    
    function getStatusFilterFromFlag(flag){
        if(flag==-1){
           return "Rejected";
        }else if(flag==4){
           return "Approved";
        }else return "Pending";
    }

    const navigate = useNavigate();
    const handleRowClick = (userId) => {
        
        navigate(`/form/${userId}`);
    };

    // useEffect(() => {
    //     async function fetchScholarshipApplications() {
    //         const url = "";
    //         try {
    //             const response = await axios.get(url);
    //             setScholarshipApplications(response.data);
    //         } catch (error) {
    //             console.error("Failed to fetch data:", error);
    //         }
    //     }
    //     fetchScholarshipApplications();
    // }, []);
    console.log(Array.isArray(scholarshipApplications));
    const filteredApplications = scholarshipApplications.filter(app => {
        return (statusFilter ? statusFilter===getStatusFilterFromFlag(app.flag) : true) &&
               (nameFilter ? app.name.toLowerCase().includes(nameFilter.toLowerCase()) : true);
    });

    const reviewCount = scholarshipApplications.filter(app => app.flag !== 4 && app.flag!=-1).length;
    const approvedCount = scholarshipApplications.filter(app => app.flag === 4).length;

    

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Scholarship Portal Dashboard</h1>
            </header>
            <div className="top-widgets">
                
            <div className="card">
    <h2>Applications</h2>
    <p className="zoom-text">{`${scholarshipApplications.length}`}</p>
</div>
<div className="card">
    <h2>In Review</h2>
    <p className="zoom-text">{`${reviewCount}`}</p>
</div>
<div className="card">
    <h2>Accepted Applications</h2>
    <p className="zoom-text">{`${approvedCount}`}</p>
</div>

                {/* <div className="card">
                    <h2>Applications</h2>
                    <p>{`Number of New Applications: ${scholarshipApplications.length}`}</p>
                </div>
                <div className="card">
                    <h2>In Review</h2>
                    <p>{`Applications in Review: ${reviewCount}`}</p>
                </div>
                <div className="card">
                    <h2>Accepted Applications</h2>
                    <p>{`Accepted Applications: ${approvedCount}`}</p>
                
                </div> */}
                
            </div>
            
            <div className="widget table-widget">
                <h2>Scholarship Applications</h2>
                <div className="filters-row">
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={nameFilter}
                        onChange={e => setNameFilter(e.target.value)}
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
                            <th>Father's Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map(user => (
                           <tr key={user.user_id} onClick={() => handleRowClick(user.user_id)}>
                                <td>{user.user_id}</td>
                                <td>{user.name}</td>
                                <td>{user.fathers_name}</td>
                                <td>{user.flag === 4 ? 'Approved' : user.flag==-1? 'Rejected': 'Pending'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
