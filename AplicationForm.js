import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../api';

function ApplicationForm() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await API.post('/application', data);
      setStatus({ success: true, message: res.data.message || 'Application submitted!' });
      reset();
    } catch (err) {
      setStatus({ success: false, message: err.response?.data?.message || 'Submission failed.' });
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Internship Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Full Name" required />
        <input {...register('email')} type="email" placeholder="Email" required />
        <input {...register('college')} placeholder="College Name" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Apply'}
        </button>
      </form>
      {status && <p className={status.success ? 'success' : 'error'}>{status.message}</p>}
    </div>
  );
}

export default ApplicationForm;
