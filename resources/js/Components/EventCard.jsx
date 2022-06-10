const EventCard = () => {
    return (
        <div>
            <div className="listing-item">
                <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img">
                        <div className="geodir-js-favorite_btn"><i
                            className="fal fa-heart"/><span>Save</span></div>
                        <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                            <img src="images/all/1.jpg" alt/>
                        </a>
                        <div className="listing-avatar"><a href="author-single.html"><img
                            src="images/avatar/1.jpg" alt/></a>
                            <span
                                className="avatar-tooltip">Added By  <strong>Alisa Noory</strong></span>
                        </div>
                        <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"/>Open
                            Now
                        </div>
                        <div className="geodir-category-opt">
                            <div className="listing-rating-count-wrap">
                                <div className="review-score">4.8</div>
                                <div className="listing-rating card-popup-rainingvis"
                                     data-starrating2={5}/>
                                <br/>
                                <div className="reviews-count">12 reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="geodir-category-content fl-wrap title-sin_item">
                        <div className="geodir-category-content-title fl-wrap">
                            <div className="geodir-category-content-title-item">
                                <h3 className="title-sin_map"><a href="listing-single.html">Luxary
                                    Resaturant</a><span className="verified-badge"><i
                                    className="fal fa-check"/></span></h3>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i
                                    className="fas fa-map-marker-alt"/> 27th Brooklyn New York, USA</a>
                                </div>
                            </div>
                        </div>
                        <div className="geodir-category-text fl-wrap">
                            <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer
                                gravida orci a justo sodales.</p>
                            <div className="facilities-list fl-wrap">
                                <div className="facilities-list-title">Facilities :</div>
                                <ul className="no-list-style">
                                    <li className="tolt" data-microtip-position="top"
                                        data-tooltip="Free WiFi"><i className="fal fa-wifi"/></li>
                                    <li className="tolt" data-microtip-position="top"
                                        data-tooltip="Parking"><i className="fal fa-parking"/></li>
                                    <li className="tolt" data-microtip-position="top"
                                        data-tooltip="Non-smoking Rooms"><i
                                        className="fal fa-smoking-ban"/></li>
                                    <li className="tolt" data-microtip-position="top"
                                        data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="geodir-category-footer fl-wrap">
                            <a className="listing-item-category-wrap">
                                <div className="listing-item-category red-bg"><i
                                    className="fal fa-cheeseburger"/></div>
                                <span>Restaurants</span>
                            </a>
                            <div className="geodir-opt-list">
                                <ul className="no-list-style">
                                    <li><a href="#" className="show_gcc"><i
                                        className="fal fa-envelope"/><span
                                        className="geodir-opt-tooltip">Contact Info</span></a></li>
                                    <li><a href="#1" className="single-map-item"
                                           data-newlatitude="40.72956781"
                                           data-newlongitude="-73.99726866"><i
                                        className="fal fa-map-marker-alt"/><span
                                        className="geodir-opt-tooltip">On the map <strong>1</strong></span>
                                    </a></li>
                                    <li>
                                        <div className="dynamic-gal gdop-list-link"
                                             data-dynamicpath="[{'src': 'images/all/1.jpg'},{'src': 'images/all/24.jpg'}, {'src': 'images/all/12.jpg'}]">
                                            <i className="fal fa-search-plus"/><span
                                            className="geodir-opt-tooltip">Gallery</span></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="price-level geodir-category_price">
                                <span className="price-level-item" data-pricerating={3}/>
                                <span className="price-name-tooltip">Pricey</span>
                            </div>
                            <div className="geodir-category_contacts">
                                <div className="close_gcc"><i className="fal fa-times-circle"/></div>
                                <ul className="no-list-style">
                                    <li><span><i className="fal fa-phone"/> Call : </span><a
                                        href="#">+38099231212</a></li>
                                    <li><span><i className="fal fa-envelope"/> Write : </span><a
                                        href="#">yourmail@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default EventCard
