import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../api';

function OfferLetterForm() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await API.post('/offer-letter', data);
      setStatus({ success: true, message: res.data.message || 'Offer letter generated!' });
      reset();
    } catch (err) {
      setStatus({ success: false, message: err.response?.data?.message || 'Failed to generate offer letter.' });
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Generate Offer Letter</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('userId')} placeholder="User ID" required />
        <input {...register('position')} placeholder="Position" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Generate'}
        </button>
      </form>
      {status && <p className={status.success ? 'success' : 'error'}>{status.message}</p>}
    </div>
  );
}

export default OfferLetterForm;
