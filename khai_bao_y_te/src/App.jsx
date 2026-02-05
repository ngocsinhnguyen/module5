import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./App.css";

const SEX_LIST = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' }
];

function App() {
  const [declarations, setDeclarations] = useState([]);

  const initialValues = {
    name: '',
    number: '',
    year: '',
    gender: 'male',
    nationality: '',
    company: '',
    department: '',
    hasInsurance: false,
    province: '',
    district: '',
    ward: '',
    address: '',
    phone: '',
    email: '',
    travel: '',
    symptoms: [],
    exposures: []
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Bắt buộc';
    if (!values.number) errors.number = 'Bắt buộc';
    if (!values.year) {
      errors.year = 'Bắt buộc';
    } else if (parseInt(values.year) <= 1900) {
      errors.year = 'Số năm sinh phải > 1900';
    }
    if (!values.nationality) errors.nationality = 'Bắt buộc';
    if (!values.province) errors.province = 'Bắt buộc';
    if (!values.district) errors.district = 'Bắt buộc';
    if (!values.ward) errors.ward = 'Bắt buộc';
    if (!values.address) errors.address = 'Bắt buộc';
    if (!values.phone) errors.phone = 'Bắt buộc';

    if (!values.email) {
      errors.email = 'Bắt buộc';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    alert('Khai báo thành công!');
    setDeclarations([...declarations, values]);
    resetForm();
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1 className="title">Tờ khai y tế</h1>
        <Formik
          initialValues={initialValues}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="health-form">
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="name">Họ tên <span className="required">*</span></label>
                  <Field
                    id="name"
                    className={errors.name && touched.name ? 'error-input' : ''}
                    name="name"
                  />
                  <ErrorMessage name="name" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="number">Số hộ chiếu /CMND <span className="required">*</span></label>
                  <Field
                    id="number"
                    className={errors.number && touched.number ? 'error-input' : ''}
                    name="number"
                  />
                  <ErrorMessage name="number" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="year">Năm sinh <span className="required">*</span></label>
                  <Field
                    id="year"
                    className={errors.year && touched.year ? 'error-input' : ''}
                    name="year"
                  />
                  <ErrorMessage name="year" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label>Giới tính</label>
                  <div className="gender-options">
                    {SEX_LIST.map((sex) => (
                      <label key={sex.value} className="radio-label">
                        <Field
                          type="radio"
                          name="gender"
                          value={sex.value}
                        />
                        <span>{sex.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="nationality">Quốc tịch <span className="required">*</span></label>
                  <Field
                    id="nationality"
                    className={errors.nationality && touched.nationality ? 'error-input' : ''}
                    name="nationality"
                  />
                  <ErrorMessage name="nationality" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Công ty làm việc</label>
                  <Field id="company" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Bộ phận làm việc</label>
                  <Field id="department" name="department" />
                </div>

                <div className="form-group checkbox-container full-width">
                  <label className="checkbox-label-main">
                    <Field
                      type="checkbox"
                      name="hasInsurance"
                    />
                    <span>Có thẻ bảo hiểm y tế</span>
                  </label>
                </div>
              </div>

              <h2 className="section-title">Địa chỉ liên lạc tại Việt Nam</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="province">Tỉnh thành <span className="required">*</span></label>
                  <Field
                    id="province"
                    className={errors.province && touched.province ? 'error-input' : ''}
                    name="province"
                  />
                  <ErrorMessage name="province" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="district">Quận /huyện <span className="required">*</span></label>
                  <Field
                    id="district"
                    className={errors.district && touched.district ? 'error-input' : ''}
                    name="district"
                  />
                  <ErrorMessage name="district" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="ward">Phường /xã <span className="required">*</span></label>
                  <Field
                    id="ward"
                    className={errors.ward && touched.ward ? 'error-input' : ''}
                    name="ward"
                  />
                  <ErrorMessage name="ward" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Số nhà, phố, tổ dân phố... <span className="required">*</span></label>
                  <Field
                    id="address"
                    className={errors.address && touched.address ? 'error-input' : ''}
                    name="address"
                  />
                  <ErrorMessage name="address" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Điện thoại <span className="required">*</span></label>
                  <Field
                    id="phone"
                    className={errors.phone && touched.phone ? 'error-input' : ''}
                    name="phone"
                  />
                  <ErrorMessage name="phone" component="span" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <Field
                    id="email"
                    className={errors.email && touched.email ? 'error-input' : ''}
                    name="email"
                  />
                  <ErrorMessage name="email" component="span" className="error-message" />
                </div>
              </div>

              <div className="form-section">
                <h3>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào?</h3>
                <Field
                  id="travel"
                  as="textarea"
                  name="travel"
                  rows="3"
                />
              </div>

              <div className="form-section">
                <h3>Dấu hiệu trong 14 ngày qua:</h3>
                <div className="checkbox-grid">
                  {['Sốt', 'Ho', 'Khó thở', 'Viêm phổi', 'Đau họng', 'Mệt mỏi'].map((s, i) => (
                    <label key={i} className="checkbox-item">
                      <Field
                        type="checkbox"
                        name="symptoms"
                        value={s}
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <h3>Tiếp xúc trong 14 ngày qua:</h3>
                <div className="checkbox-stack">
                  {[
                    'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19',
                    'Người từ nước có bệnh COVID-19',
                    'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)'
                  ].map((e, i) => (
                    <label key={i} className="checkbox-item">
                      <Field
                        type="checkbox"
                        name="exposures"
                        value={e}
                      />
                      <span>{e}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">Gửi tờ khai</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {declarations.length > 0 && (
        <div className="table-container">
          <h2 className="section-title">Danh sách đã khai báo</h2>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Họ tên</th>
                  <th>Số hộ chiếu</th>
                  <th>Năm sinh</th>
                  <th>Email</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {declarations.map((d, i) => (
                  <tr key={i}>
                    <td>{d.name}</td>
                    <td>{d.number}</td>
                    <td>{d.year}</td>
                    <td>{d.email}</td>
                    <td>
                      <button className="btn-view" onClick={() => console.log(d)}>Xem chi tiết</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
