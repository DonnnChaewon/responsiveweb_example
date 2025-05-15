import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log('Form Submitted:', formData);

        // Optionally send to backend API here...

        // Reset form
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    return (
        <div>
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>Contact Us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>Home / Contact Us</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 border-left'>
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <label className='mb-1'>Full Name</label>
                                            <input
                                                type='text'
                                                name='fullName'
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className='form-control'
                                                placeholder='Full Name'
                                                required
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1'>Phone Number</label>
                                            <input
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className='form-control'
                                                placeholder='Phone Number'
                                                required
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1'>Email</label>
                                            <input
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                className='form-control'
                                                placeholder='Email'
                                                required
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1'>Message</label>
                                            <textarea
                                                name='message'
                                                rows='5'
                                                value={formData.message}
                                                onChange={handleChange}
                                                className='form-control'
                                                placeholder='Type your message'
                                                required
                                            ></textarea>
                                        </div>
                                        <div className='form-group py-3'>
                                            <button type='submit' className='btn btn-secondary shadow w-100'>
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className='col-md-6 border-start'>
                                    <h5 className='main-heading'>Address Information</h5>
                                    <div className='underline'></div>
                                    <p>San Francisco, California, USA</p>
                                    <p>Phone: +1 1234567890</p>
                                    <p>Email: email@domain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;