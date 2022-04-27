import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Keyboard, Thumbs } from "swiper";
import { theme } from "styles";
import { useProductContext } from "context";
import { IMAGES_PATH } from "constants";
import * as Styles from "./styles";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, A11y, Keyboard, Thumbs]);

export function ImagesSlider() {
	const { data } = useProductContext();

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const imagesList = data.photos.map((photo, index) => (
		<SwiperSlide key={index}>
			<Styles.Image
				src={IMAGES_PATH + photo}
				alt={`${data.name} Image ${index + 1}`}
				layout="fill"
				objectFit="cover"
			/>
		</SwiperSlide>
	));

	return (
		<Styles.Images>
			<Swiper
				style={{
					"--swiper-navigation-color": theme.colors.black.main,
					"--swiper-navigation-size": "30px",
				}}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				className="product-images-big-slider"
			>
				{imagesList}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				className="product-images-small-slider"
			>
				{imagesList}
			</Swiper>
		</Styles.Images>
	);
}
