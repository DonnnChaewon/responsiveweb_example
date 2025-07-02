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
            ...formData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log('Form Submitted:', formData);

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
            <section class='py-10 bg-gradient-to-b from-indigo-900 to-purple-900'>
                <div class='container'>
                    <div class='card shadow-lg border border-1'>
                        <div class='card-body bg-gradient-to-b from-indigo-500 to-purple-500'>
                            <div class='row'>
                                <div class='col-md-6 border-left'>
                                    <h5 class='text-2xl font-bold text-gray-200'>Contact Form</h5>
                                    <hr />
                                    <form onSubmit={handleSubmit}>
                                        <div class='form-group'>
                                            <label class='mb-1'>Full Name</label>
                                            <input
                                                type='text'
                                                name='fullName'
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                class='form-control'
                                                placeholder='Full Name'
                                                required
                                            />
                                        </div>
                                        <div class='form-group'>
                                            <label class='mb-1'>Phone Number</label>
                                            <input
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                class='form-control'
                                                placeholder='Phone Number'
                                                required
                                            />
                                        </div>
                                        <div class='form-group'>
                                            <label class='mb-1'>Email</label>
                                            <input
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                class='form-control'
                                                placeholder='Email'
                                                required
                                            />
                                        </div>
                                        <div class='form-group'>
                                            <label class='mb-1'>Message</label>
                                            <textarea
                                                name='message'
                                                rows='5'
                                                value={formData.message}
                                                onChange={handleChange}
                                                class='form-control'
                                                placeholder='Type your message'
                                                required
                                            ></textarea>
                                        </div>
                                        <div class='form-group py-3'>
                                            <button type='submit' class='btn btn-dark shadow w-100'>Send Message</button>
                                        </div>
                                    </form>
                                </div>

                                <div class='col-md-6 border-start'>
                                    <h5 class='text-2xl font-bold text-gray-200'>Address Information</h5>
                                    <hr />
                                    <p class='text-base'>San Francisco, California, USA</p>
                                    <p class='text-base'>Phone: +1 1234567890</p>
                                    <p class='text-base'>Email: email@domain.com</p>
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