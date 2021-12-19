import React, { useState, useRef, useEffect } from 'react'
import { Layout, Button, Form, Input, Alert } from 'antd'
import emailjs from 'emailjs-com'

export default function ContactForm() {
	const [form, setForm] = useState({ name: '', user_email: '', message: '' })
	const [showSuccess, setShowSuccess] = useState(false)
	const [showError, setShowError] = useState(false)
	const firstUpdate = useRef(true)

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false
			return
		}

		sendEmail()
		// eslint-disable-next-line
	}, [form])

	const { Content } = Layout

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 8 },
	}

	function sendEmail() {
		emailjs
			.send(
				'service_yiprfx3',
				'template_jrlvu8b',
				form,
				'user_HER4EqR744mIdVMF6MTK0',
			)
			.then(
				result => {
					console.log(result.text)
					setShowError(false)
					setShowSuccess(true)
				},
				error => {
					console.log(error.text)
					setShowSuccess(false)
					setShowError(true)
				},
			)
	}

	/* eslint-disable no-template-curly-in-string */
	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
	}
	/* eslint-enable no-template-curly-in-string */

	const onFinish = values => {
		setForm({
			name: values.name,
			user_email: values.email,
			message: values.message,
		})
	}

	function AlertShow() {
		if (showSuccess) {
			return <Alert message='Email Sent' type='success' closable />
		} else if (showError) {
			return <Alert message='Error Sending Email' type='error' closable />
		} else {
			return <div></div>
		}
	}

	return (
		<Content>
			<AlertShow />
			<br />
			<br />
			<br />
			<Form
				{...layout}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}>
				<Form.Item name='name' label='Name' rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name='email'
					label='Email'
					rules={[{ type: 'email', required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name='message' label='Message' rules={[{ required: true }]}>
					<Input.TextArea />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Content>
	)
}
