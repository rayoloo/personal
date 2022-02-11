import React, { useState, useRef } from 'react'

import emailjs from 'emailjs-com'

import styles from '../styles/Contact.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function ContactForm() {
	const [sentPage, setSentPage] = useState(false)
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_yiprfx3',
				'template_jrlvu8b',
				form.current,
				'user_HER4EqR744mIdVMF6MTK0',
			)
			.then(
				result => {
					console.log(result.text)
					setSentPage(true)
				},
				error => {
					console.log(error.text)
				},
			)
	}

	return (
		<div id='contact'>
			<div className={styles.Contact}>
				<h1>Contact Me</h1>
				<br />
				<br />
				<div className={sentPage ? styles.hide : styles.container}>
					<form className={styles.form} ref={form} onSubmit={sendEmail}>
						<label>Name:</label>
						<input type='text' id='name' name='name' required={true} />
						<label>Email:</label>
						<input type='email' id='email ' name='email' required={true} />
						<label>Message:</label>
						<textarea
							id='message'
							name='message'
							rows='4'
							placeholder='Type a short message here.'
							required={true}
						/>
						<input type='submit' value='Send' />
					</form>
				</div>
				<div className={sentPage ? styles.show : styles.hide}>
					Email Sent <AiOutlineCheckCircle />
				</div>
			</div>
		</div>
	)
}
