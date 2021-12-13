import React from 'react'
import { Layout, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default function ResumeComponent() {
	const { Content } = Layout
	const resumeLink =
		'https://drive.google.com/u/0/uc?id=1BR-g3xiQqkBeL8NMKDqBhmsODcHQOFxc&export=download'
	return (
		<Content>
			<br />
			<div style={{ position: 'absolute', right: '30px', top: '100px' }}>
				<Button
					type='primary'
					icon={<DownloadOutlined />}
					size='large'
					href={resumeLink}>
					Download
				</Button>
			</div>
			<br />
			<div style={{ textAlign: 'center', height: '92%' }}>
				<iframe
					title='resume document'
					src='https://docs.google.com/document/d/e/2PACX-1vT1pH_bopEpWRAtSRtGPkByCPWiWWQrj4QhSBsP-rQM-pymPe2_-N4Vj-xZ7jQxIkuKiO4RpspLtm5Y/pub?embedded=true'
					height='100%'
					width='50%'
				/>
			</div>
		</Content>
	)
}

// complete project section with more informations and maybe a gallery of screenshots
// complete project section of resume and write a cover letter CodeOutlined
// apply for stripe job position
