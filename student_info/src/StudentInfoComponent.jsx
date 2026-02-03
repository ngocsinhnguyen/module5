import React, { Component } from 'react';

class StudentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: 'Nguyễn Văn A', age: 30, address: 'Hà Nội' },
      ]
    };
  }

  render() {
    const { students } = this.state;

    return (
      <div className="container">
        <h1>Student Information</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="id-cell">{student.id}</td>
                  <td className="name-cell">{student.name}</td>
                  <td>
                    <span className="age-badge">{student.age}</span>
                  </td>
                  <td className="address-cell">{student.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentInfoComponent;
