import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	const closeMenu = () => setClick(false)
	return (
		<div className={styles.navbar}>
			<Link
				to='hero'
				spy={true}
				smooth={true}
				offset={-90}
				duration={500}
				onClick={closeMenu}>
				<h1 className={styles.header}>Raymond Lam</h1>
			</Link>

			<ul className={click ? `${styles.nav} ${styles.active}` : styles.nav}>
				<li>
					<Link
						to='about'
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						onClick={closeMenu}>
						About
					</Link>
				</li>
				<li>
					<Link
						to='projects'
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						onClick={closeMenu}>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						onClick={closeMenu}>
						Contact
					</Link>
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
