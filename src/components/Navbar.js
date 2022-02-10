import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	const closeMenu = () => setClick(false)
	return (
		<div className={styles.navbar}>
			<a href='#hero'>
				<h1 className={styles.header}>Raymond Lam</h1>
			</a>

			<ul className={click ? `${styles.nav} ${styles.active}` : styles.nav}>
				<li>
					<a href='#about' onClick={closeMenu}>
						About
					</a>
				</li>
				<li>
					<a href='#projects' onClick={closeMenu}>
						Projects
					</a>
				</li>
				<li>
					<a href='#contact' onClick={closeMenu}>
						Contact
					</a>
				</li>
			</ul>
			<div onClick={handleClick} className={styles.hamburger}>
				{click ? (
					<AiOutlineClose className={styles.icon} />
				) : (
					<AiOutlineMenu className={styles.icon} />
				)}
			</div>
		</div>
	)
}

export default Navbar
