import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({
    mobile: '',
    email: '',
    fullName: '',
  });

  const handleChange = (eve: any) => {
    const { name, value } = eve.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const phonePattern = /^\d{10}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[a-zA-Z\s]+$/;

  const validatePhoneNumber = (phone: string) => {
    if (!phonePattern.test(phone)) {
      return 'Phone number must be exactly 10 digits and contain only numbers.';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validateFullName = (name: string) => {
    if (!namePattern.test(name)) {
      return 'Name can only contain letters and spaces.';
    }
    return '';
  };

  const handleSubmit = async (eve: any) => {
    eve.preventDefault();
    setIsSubmitting(true);
    const phoneError = validatePhoneNumber(formData.mobile);
    const emailError = validateEmail(formData.email);
    const nameError = validateFullName(formData.fullName);

    if (phoneError || emailError || nameError) {
      setErrors({
        mobile: phoneError,
        email: emailError,
        fullName: nameError,
      });
      setIsSubmitting(false);
      return;
    } else {
      setErrors({
        mobile: '',
        email: '',
        fullName: '',
      });
    }

    const data = {
      data: [
        {
          full_name: formData.fullName,
          email_address: formData.email,
          mobile_number: formData.mobile,
          email_subject: formData.subject,
          message: formData.message,
        },
      ],
    };

    try {
      const res = await fetch('https://sheetdb.io/api/v1/yx0e7b5lnxjkb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage('There was an error sending the message.');
      }
    } catch (error) {
      setResponseMessage('There was an error sending the message.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className='contact' id='contact'>
      <h2 className='heading'>
        Contact <span>Me</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <input
            type='text'
            placeholder='Full Name'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
          />
          <span className='error'>{errors.fullName}</span>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <span className='error'>{errors.email}</span>
        </div>
        <div className='input-box'>
          <input
            type='tel'
            placeholder='Mobile Number'
            name='mobile'
            value={formData.mobile}
            onChange={handleChange}
            maxLength={10}
            pattern='\d{10}'
          />
          <span className='error'>{errors.mobile}</span>
          <input
            type='text'
            placeholder='Email Subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <textarea
          placeholder='Your Message'
          name='message'
          cols={30}
          rows={10}
          value={formData.message}
          onChange={handleChange}
        />
        <input
          type='submit'
          value={isSubmitting ? 'Sending...' : 'Send Message'}
          className='btn'
          disabled={isSubmitting}
        />
      </form>
    </section>
  );
};
