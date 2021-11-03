import React from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div className="home">
            <Carousel

                infiniteLoop={true}
                slidesPerView={1}
                showArrows={true}
                showThumbs={true}
                autoPlay={true}
            >
                <div className="home_image1" >
                    <div className="home_sarlavha">
                        <h1>Welcome!</h1>
                        <p style={{ paddingTop: "30px" }}>If you want to know more about us then subscribe to our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi ipsum provident beatae officiis amet veritatis omnis!</p>
                    </div>

                    <div className="card_wrapper">
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQy6tnrlr0UPFQyn2vKxv5wB-dsNBPX2CvQ&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0A1ofGrr0QZTA1AflBRaIVqmOxYOjqiHybQ&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcG7jmcwvTDMsVApBMGAnyKvvGC6YflRmRA&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>

                <div className="home_image2" >
                    <div className="home_sarlavha">
                        <h1>What do you want to find on the site</h1>
                        <p style={{ paddingTop: "30px" }}>If you want to know more about us then subscribe to our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi ipsum provident beatae officiis amet veritatis omnis!</p>
                    </div>

                    <div className="card_wrapper">
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W3OQu7aV3P9ESh1Fr_GygTavheGNhAztIQ&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://1.bp.blogspot.com/-73cnIBCDJ6Y/Xoq9_OnKuRI/AAAAAAAAnsQ/pJy9sOrujzAy1mzOIoVve8cFsV5HY8RTACLcBGAsYHQ/w680/Kaho%2BNaa...%2BPyaar%2BHai%2BImages%252C%2BWallpapers.JPG" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzomp4HnG5eTEEG1MqiUE7x9pNT6Zk0jhyg&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>

                <div className="home_image3" >
                    <div className="home_sarlavha">
                        <h1>What else do you like?</h1>
                        <p style={{ paddingTop: "30px" }}>If you want to know more about us then subscribe to our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi ipsum provident beatae officiis amet veritatis omnis!</p>
                    </div>

                    <div className="card_wrapper">
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W3OQu7aV3P9ESh1Fr_GygTavheGNhAztIQ&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://1.bp.blogspot.com/-73cnIBCDJ6Y/Xoq9_OnKuRI/AAAAAAAAnsQ/pJy9sOrujzAy1mzOIoVve8cFsV5HY8RTACLcBGAsYHQ/w680/Kaho%2BNaa...%2BPyaar%2BHai%2BImages%252C%2BWallpapers.JPG" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzomp4HnG5eTEEG1MqiUE7x9pNT6Zk0jhyg&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>

                <div className="home_image4" >
                    <div className="home_sarlavha">
                        <h1>Want to know about us?</h1>
                        <p style={{ paddingTop: "30px" }}>If you want to know more about us then subscribe to our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi ipsum provident beatae officiis amet veritatis omnis!</p>
                    </div>

                    <div className="card_wrapper">
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W3OQu7aV3P9ESh1Fr_GygTavheGNhAztIQ&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://1.bp.blogspot.com/-73cnIBCDJ6Y/Xoq9_OnKuRI/AAAAAAAAnsQ/pJy9sOrujzAy1mzOIoVve8cFsV5HY8RTACLcBGAsYHQ/w680/Kaho%2BNaa...%2BPyaar%2BHai%2BImages%252C%2BWallpapers.JPG" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image_card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzomp4HnG5eTEEG1MqiUE7x9pNT6Zk0jhyg&usqp=CAU" alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Home
