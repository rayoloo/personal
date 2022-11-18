import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	const closeMenu = () => setClick(false)

	return (
		<div className={styles.navbar}>
			<div className={styles.mobileHeader}>
				<div onClick={handleClick} className={styles.hamburger}>
					{click ? (
						<AiOutlineClose className={styles.icon} />
					) : (
						<AiOutlineMenu className={styles.icon} />
					)}
				</div>

				<Link
					to='hero'
					smooth={true}
					offset={0}
					duration={500}
					onClick={closeMenu}>
					<h1 className={styles.header}>Raymond Lam</h1>
				</Link>
			</div>

			<ul className={click ? `${styles.nav} ${styles.active}` : styles.nav}>
				<li>
					<Link
						to='about'
						smooth={true}
						offset={-45}
						duration={500}
						onClick={closeMenu}>
						About
					</Link>
				</li>
				<li>
					<Link
						to='projects'
						smooth={true}
						offset={-35}
						duration={500}
						onClick={closeMenu}>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to='contact'
						smooth={true}
						offset={-15}
						duration={500}
						onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
