import React, { useState } from 'react'

const ContactFormSection = () => {

    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]-)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/
        const valuesName = values.name;
        const valuesEmail = values.email;
        const valuesComment = values.comment;


        // fixa regex till dessa med
        // // const regex_name =
        // // const regex_password =

        

        if(!valuesName) {
            errors.name = "You must enter a name"
            document.getElementById('name').classList.add('error')
        } else {
            document.getElementById('name').classList.remove('error') 
        }

        if(!valuesEmail) {
        errors.email = "You must enter an e-mail address"
        document.getElementById('email').classList.add('error')
        }
        else if (!regex_email.test(valuesEmail)) {
        errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"
        document.getElementById('email').classList.add('error')
        } else 
        document.getElementById('email').classList.remove('error')

        if(!valuesComment) {
        errors.comment = "You must enter a comment"
        document.getElementById('comment').classList.add('error')
        }
        else if(valuesComment.length < 5) {
        errors.comment = "Your comment must be longer than 5 characters."
        document.getElementById('comment').classList.add('error')
        } else 
        document.getElementById('comment').classList.remove('error')

        

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else
            setSubmitted(false)
            
        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

    return (
        <section className="contact-form">
            <div className="container">
            {
                submitted ? (<div className="d-flex justify-content-center align-items-center">
                    <p>Thank you for commenting!</p>  
                    </div>)

                    :
                    (
                        <>
                            <h2>Come in Contact with Us</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.name}</div>
                                </div>
                                <div>
                                    <input id="email" type="email" placeholder="Your mail" value={contactForm.email} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.email}</div>
                                </div>
                                <div className="textarea">
                                    <textarea id="comment" placeholder="comments" value={contactForm.comment} onChange={handleChange} ></textarea>
                                    <div className="errorMessage">{formErrors.comment}</div>
                                </div>
                                <div>
                                    <button id="submit" type="submit" className="btn-theme"> Post Comments</button>
                                </div>
                            </form>
                        </>
                    )
                }
            </div>
        </section>
    )
 

}

export default ContactFormSection