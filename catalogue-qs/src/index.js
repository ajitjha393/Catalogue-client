import React from 'react';
import classes from './Catalogue.module.css';

const Catalogue = ({
	currentViewingNow,
	title,
	lastOpened,
	visitors,
	unreadVisitors,
	inquiries,
	unreadInquiries,
	productUrls,
	productCount,
}) => {
	return (
		<div className={classes.Container}>
			<div>
				<section className={classes.View}>
					{currentViewingNow + ' VIEWING NOW'}{' '}
				</section>

				<h1>{title}</h1>
				<section className={classes.LastSeen}>{lastOpened}</section>
				<section className={classes.stats}>
					<span>
						<img
							src="https://sx-web.firebaseapp.com/images/eye-fill.svg"
							alt="icon"
							width="30px"
							style={{
								textAlign: 'bottom',
							}}
						/>
						<span className={classes.white}>{visitors}</span>
					</span>
					<span className={classes.pending}>{'+' + unreadVisitors}</span>
					<span className={classes.circle}></span>
					<span>
						<img
							src="https://sx-web.firebaseapp.com/images/envelope.svg"
							alt=""
							width="30px"
						/>{' '}
						<span className={classes.white}>{inquiries}</span>
					</span>
					<span className={classes.pending}>{'+' + unreadInquiries}</span>
				</section>
			</div>

			<div className={classes.url}>
				<div>
					<div className={`${classes.cart} ${classes.ImageComponent} `}>
						<div className={classes.ImageComponent}>
							<a href={productUrls}>
								<img
									src="https://images.pexels.com/photos/792772/pexels-photo-792772.jpeg?cs=srgb&dl=pexels-anastasiya-lobanovskaya-792772.jpg&fm=jpg"
									alt=""
									width="80px"
									height="80px"
									className={classes.img1}
								/>
								<img
									src="https://images.pexels.com/photos/458669/pexels-photo-458669.jpeg?cs=srgb&dl=pexels-pixabay-458669.jpg&fm=jpg"
									alt=""
									width="80px"
									height="80px"
									className={classes.img2}
								/>
								<img
									src="https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt=""
									width="80px"
									height="80px"
									className={classes.img3}
								/>
								<img
									src="https://images.pexels.com/photos/5650050/pexels-photo-5650050.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									alt=""
									width="80px"
									height="80px"
									className={classes.img4}
								/>
							</a>
						</div>
					</div>
					<span className={classes.count}>{productCount}</span>
				</div>

				<div className={classes.footer}>
					<span className={classes.share}>
						<img
							src="https://sx-web.firebaseapp.com/images/share-fill.svg"
							alt=""
							width="50px"
							height="60px"
						/>{' '}
					</span>
					<span>
						<img
							src="https://sx-web.firebaseapp.com/images/whatsapp.svg"
							alt=""
							width="50px"
						/>{' '}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Catalogue;
