const EventCardFull = () => {
    return (
        <div className="swiper-slide">
            <div className="listing-slider-item fl-wrap">
                {/* listing-item  */}
                <div className="listing-item listing_carditem">
                    <article className="geodir-category-listing fl-wrap">
                        <div className="geodir-category-img">
                            <div className="geodir-js-favorite_btn"><i
                                className="fal fa-heart"/><span>Save</span></div>
                            <a href="listing-single.html"
                               className="geodir-category-img-wrap fl-wrap">
                                <img src="images/all/48.jpg" alt/>
                            </a>
                            <div className="geodir_status_date gsd_open"><i
                                className="fal fa-lock-open"/>Open Now
                            </div>
                            <div className="geodir-category-opt">
                                <div className="geodir-category-opt_title">
                                    <h4><a href="listing-single.html">The Goggi Restaurant</a></h4>
                                    <div className="geodir-category-location"><a href="#"><i
                                        className="fas fa-map-marker-alt"/> 34-42 Montgomery St ,
                                        NY, USA</a></div>
                                </div>
                                <div className="listing-rating-count-wrap">
                                    <div className="review-score">4.1</div>
                                    <div className="listing-rating card-popup-rainingvis"
                                         data-starrating2={4}/>
                                    <br/>
                                    <div className="reviews-count">26 reviews</div>
                                </div>
                                <div className="listing_carditem_footer fl-wrap">
                                    <a className="listing-item-category-wrap" href="#">
                                        <div className="listing-item-category red-bg"><i
                                            className="fal fa-cheeseburger"/></div>
                                        <span>Restaurants</span>
                                    </a>
                                    <div className="price-level geodir-category_price">
                                        <span className="price-level-item" data-pricerating={2}/>
                                        <span className="price-name-tooltip">Pricey</span>
                                    </div>
                                    <div className="post-author"><a href="#"><img
                                        src="images/avatar/4.jpg" alt/><span>By , Alisa Noory</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                {/* listing-item end */}
            </div>
        </div>)
}


export default EventCardFull
