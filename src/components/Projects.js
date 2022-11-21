import React from 'react'
import styles from '../styles/Project.module.css'
import Card from '../components/AboutCards'

import RFIDpicture from '../assets/rfid/cover.jpg'
import spotify from '../assets/spotify.png'
import defi from '../assets/defi.png'
import realestate from '../assets/realestate.png'
import space from '../assets/space.png'
import pokedex from '../assets/pokedex.png'
import stock from '../assets/stock.png'
import food from '../assets/Food.png'

const Projects = () => {
	return (
		<div className={styles.temp} id='projects'>
			<h1>Projects</h1>
			<div className={styles.projectSection}>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<Card
							tag1='Website Design'
							tag1Style='tag-red'
							tag2='Backend'
							tag2Style='tag-purple'
							imageLink={food}
							heading={'Gourmet Today'}
							text={
								'Online meal preparation service with a wide selection of caterers.'
							}
						/>
					</div>
					<div className={styles.card}>
						<Card
							tag1='Website Design'
							tag1Style='tag-red'
							imageLink={defi}
							heading={'DeFi'}
							text={'Decentralized Trading'}
						/>
					</div>
					<div className={styles.card}>
						<Card
							tag1='Website Design'
							tag1Style='tag-red'
							imageLink={realestate}
							heading={'Real Estate'}
							text={'Home to Rent or Sell.'}
						/>
					</div>
					<div className={styles.card}>
						<Card
							tag1='Website Design'
							tag1Style='tag-red'
							imageLink={space}
							heading={'Space Exploration'}
							text={'Looking for accommodation while space traveling?'}
						/>
					</div>
					<div className={styles.card}>
						<Card
							tag1='API'
							tag1Style='tag-purple'
							tag2='Website Design'
							tag2Style='tag-red'
							imageLink={pokedex}
							heading={'Pokedex'}
							text={'Encyclopedia of Pokemon powered by PokeAPI.'}
						/>
					</div>
					<div className={styles.card}>
						<Card
							tag2='FullStack Application'
							tag2Style='tag-orange'
							tag1='API'
							tag1Style='tag-purple'
							imageLink={spotify}
							heading={'Spotify Rooms'}
							text={'Private rooms to listen to music with friends.'}
						/>
					</div>
					<div className={styles.card}>
						<Card
							imageLink={stock}
							tag1='Python'
							tag1Style='tag-yellow'
							tag2='Tensorflow'
							tag2Style='tag-green'
							heading={'Stock Forecast'}
							text={
								'Forecast the closing value of a single security for the upcoming 30 days.'
							}
						/>
					</div>
					<div className={styles.card}>
						<Card
							imageLink={RFIDpicture}
							tag1='Arduino'
							tag1Style='tag-teal'
							heading={'RFID Security Door'}
							text={'Motorized door that opens to approved key fobs'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
