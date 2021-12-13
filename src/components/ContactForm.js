import React from 'react'
import { Layout, Button, Form, Input, InputNumber } from 'antd'
import emailjs from 'emailjs-com'

export default function ContactForm() {
	const { Content } = Layout

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	}

	/* eslint-disable no-template-curly-in-string */
	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
		number: {
			range: '${label} must be between ${min} and ${max}',
		},
	}
	/* eslint-enable no-template-curly-in-string */

	const sendEmail = e => {
		e.preventDefault()
		emailjs
			.sendForm(
				'service_t3e7e2s',
				'template_jrlvu8b',
				e.target,
				'user_HER4EqR744mIdVMF6MTK0',
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				},
			)
	}

	return (
		<Content>
			<Form
				{...layout}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}>
				<Form.Item
					name={['user', 'name']}
					label='Name'
					rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name={['user', 'email']}
					label='Email'
					rules={[{ type: 'email' }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name={['user', 'age']}
					label='Age'
					rules={[{ type: 'number', min: 0, max: 99 }]}>
					<InputNumber />
				</Form.Item>
				<Form.Item name={['user', 'website']} label='Website'>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'introduction']} label='Introduction'>
					<Input.TextArea />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<form onSubmit={sendEmail}>
				<label>Name</label>
				<input type='text' name='user_name' />
				<br />
				<label>Email</label>
				<input type='email' name='user_email' />
				<br />
				<label>Message</label>
				<textarea name='message' />
				<br />
				<input type='submit' value='Send' />
			</form>
		</Content>
	)
}
