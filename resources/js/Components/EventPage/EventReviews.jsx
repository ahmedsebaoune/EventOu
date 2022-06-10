const EventReviews = () => {
    return (
        <div className="list-single-main-item fl-wrap block_box" id="sec5">
            <div className="list-single-main-item-title">
                <h3>
                    Item Reviews - <span> 2 </span>
                </h3>
            </div>
            {/*reviews-score-wrap*/}
            <div className="reviews-score-wrap fl-wrap">
                <div className="review-score-total">
                    <span className="review-score-total-item">4.1</span>
                    <div
                        className="listing-rating card-popup-rainingvis"
                        data-starrating2={5}
                    />
                </div>
                <div className="review-score-detail">
                    {/* review-score-detail-list*/}
                    <div className="review-score-detail-list">
                        {/* rate item*/}
                        <div className="rate-item">
                            <div className="rate-item-title">
                                <span>Quality</span>
                            </div>
                            <div className="rate-item-bg" data-percent="100%">
                                <div className="rate-item-line gradient-bg" />
                            </div>
                            <div className="rate-item-percent">5.0</div>
                        </div>
                        {/* rate item end*/}
                        {/* rate item*/}
                        <div className="rate-item">
                            <div className="rate-item-title">
                                <span>Location</span>
                            </div>
                            <div className="rate-item-bg" data-percent="90%">
                                <div className="rate-item-line gradient-bg" />
                            </div>
                            <div className="rate-item-percent">4.0</div>
                        </div>
                        {/* rate item end*/}
                        {/* rate item*/}
                        <div className="rate-item">
                            <div className="rate-item-title">
                                <span>Price</span>
                            </div>
                            <div className="rate-item-bg" data-percent="60%">
                                <div className="rate-item-line gradient-bg" />
                            </div>
                            <div className="rate-item-percent">3.0</div>
                        </div>
                        {/* rate item end*/}
                        {/* rate item*/}
                        <div className="rate-item">
                            <div className="rate-item-title">
                                <span>Service</span>
                            </div>
                            <div className="rate-item-bg" data-percent="80%">
                                <div className="rate-item-line gradient-bg" />
                            </div>
                            <div className="rate-item-percent">4.0</div>
                        </div>
                        {/* rate item end*/}
                    </div>
                    {/* review-score-detail-list end*/}
                </div>
            </div>
            {/* reviews-score-wrap end */}
            <div className="list-single-main-item_content fl-wrap">
                <div className="reviews-comments-wrap">
                    {/* reviews-comments-item */}
                    <div className="reviews-comments-item">
                        <div className="review-comments-avatar">
                            <img src="images/avatar/4.jpg" alt="" />
                        </div>
                        <div className="reviews-comments-item-text fl-wrap">
                            <div className="reviews-comments-header fl-wrap">
                                <h4>
                                    <a href="#">Liza Rose</a>
                                </h4>
                                <div className="review-score-user">
                                    <span className="review-score-user_item">4.2</span>
                                    <div
                                        className="listing-rating card-popup-rainingvis"
                                        data-starrating2={4}
                                    />
                                </div>
                            </div>
                            <p>
                                " Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                                mollis pretium. "
                            </p>
                            <div className="reviews-comments-item-footer fl-wrap">
                                <div className="reviews-comments-item-date">
              <span>
                <i className="far fa-calendar-check" />
                12 April 2018
              </span>
                                </div>
                                <a href="#" className="rate-review">
                                    <i className="fal fa-thumbs-up" /> Helpful Review <span>2</span>{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*reviews-comments-item end*/}
                    {/* reviews-comments-item */}
                    <div className="reviews-comments-item">
                        <div className="review-comments-avatar">
                            <img src="images/avatar/6.jpg" alt="" />
                        </div>
                        <div className="reviews-comments-item-text fl-wrap">
                            <div className="reviews-comments-header fl-wrap">
                                <h4>
                                    <a href="#">Adam Koncy</a>
                                </h4>
                                <div className="review-score-user">
                                    <span className="review-score-user_item">5.0</span>
                                    <div
                                        className="listing-rating card-popup-rainingvis"
                                        data-starrating2={5}
                                    />
                                </div>
                            </div>
                            <p>
                                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                posuere convallis purus non cursus. Cras metus neque, gravida
                                sodales massa ut. "
                            </p>
                            <div className="review-images ">
                                <a href="images/all/18.jpg" className="image-popup">
                                    <img src="images/all/18.jpg" alt="" />
                                </a>
                                <a href="images/all/24.jpg" className="image-popup">
                                    <img src="images/all/24.jpg" alt="" />
                                </a>
                            </div>
                            <div className="reviews-comments-item-footer fl-wrap">
                                <div className="reviews-comments-item-date">
              <span>
                <i className="far fa-calendar-check" />
                03 December 2017
              </span>
                                </div>
                                <a href="#" className="rate-review">
                                    <i className="fal fa-thumbs-up" /> Helpful Review <span>4</span>{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*reviews-comments-item end*/}
                </div>
            </div>
        </div>

    )
}


export default EventReviews
