const EventCardCategory = () => {
    return (
        <div>
            <section>
                <div className="container big-container">
                    <div className="section-title">
                        <h2>
                            <span>Most Popular Palces</span>
                        </h2>
                        <div className="section-subtitle">Best Listings</div>
                        <span className="section-separator" />
                        <p>
                            Proin dapibus nisl ornare diam varius tempus. Aenean
                            a quam luctus, finibus tellus ut, convallis eros
                            sollicitudin turpis.
                        </p>
                    </div>
                    <div className="listing-filters gallery-filters fl-wrap">
                        <a
                            href="#"
                            className="gallery-filter  gallery-filter-active"
                            data-filter="*"
                        >
                            All Categories
                        </a>
                        <a
                            href="#"
                            className="gallery-filter"
                            data-filter=".restaurant"
                        >
                            Restaurants{" "}
                        </a>
                        <a
                            href="#"
                            className="gallery-filter"
                            data-filter=".hotels"
                        >
                            Hotels
                        </a>
                        <a
                            href="#"
                            className="gallery-filter"
                            data-filter=".events"
                        >
                            Events
                        </a>
                        <a
                            href="#"
                            className="gallery-filter"
                            data-filter=".fitness"
                        >
                            Fitness
                        </a>
                    </div>
                    <div className="grid-item-holder gallery-items fl-wrap">
                        {/*  gallery-item*/}
                        <div className="gallery-item restaurant events">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/1.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Alisa Noory</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_open">
                                            <i className="fal fa-lock-open" />
                                            Open Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    4.8
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    12 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        Luxary Resaturant
                                                    </a>
                                                    <span className="verified-badge">
                                                        <i className="fal fa-check" />
                                                    </span>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        27th Brooklyn New York,
                                                        USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category red-bg">
                                                    <i className="fal fa-cheeseburger" />
                                                </div>
                                                <span>Restaurants</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#1"
                                                            className="single-map-item"
                                                            data-newlatitude="40.72956781"
                                                            data-newlongitude="-73.99726866"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    1
                                                                </strong>
                                                            </span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/1.jpg'},{'src': 'images/all/24.jpg'}, {'src': 'images/all/12.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={3}
                                                />
                                                <span className="price-name-tooltip">
                                                    Pricey
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/*  gallery-item*/}
                        <div className="gallery-item events">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/9.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Mark Rose</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date color-bg">
                                            <i className="fal fa-clock" />
                                            27 may 2019
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    4.2
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={4}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    6 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap ">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        Rocko Band in Marquee
                                                        Club
                                                    </a>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        75 Prince St, NY, USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category purp-bg">
                                                    <i className="fal fa-cocktail" />
                                                </div>
                                                <span>Events</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.88496706"
                                                            data-newlongitude="-73.88191222"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    2
                                                                </strong>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/9.jpg'},{'src': 'images/all/32.jpg'}, {'src': 'images/all/23.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={4}
                                                />
                                                <span className="price-name-tooltip">
                                                    Ultra High
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/* gallery-item  */}
                        <div className="gallery-item fitness">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/31.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/4.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Lisa Smith</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_close">
                                            <i className="fal fa-lock" />
                                            Close Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    3.8
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={3}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    4 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        Premium Fitness Gym
                                                    </a>
                                                    <span className="verified-badge">
                                                        <i className="fal fa-check" />
                                                    </span>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        W 85th St, New York, USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category blue-bg">
                                                    <i className="fal fa-dumbbell" />
                                                </div>
                                                <span>Fitness / Gym</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.94982541"
                                                            data-newlongitude="-73.84357452"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    3
                                                                </strong>
                                                            </span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/31.jpg'},{'src': 'images/all/10.jpg'}, {'src': 'images/all/15.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={2}
                                                />
                                                <span className="price-name-tooltip">
                                                    Moderate
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/* gallery-item  */}
                        <div className="gallery-item hotels">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/16.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Kliff Antony</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_open">
                                            <i className="fal fa-lock-open" />
                                            Open Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    5.0
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    4 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        MontePlaza Hotel
                                                    </a>
                                                    <span className="verified-badge">
                                                        <i className="fal fa-check" />
                                                    </span>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        70 Bright St New York,
                                                        USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category  yellow-bg">
                                                    <i className="fal fa-bed" />
                                                </div>
                                                <span>Hotels</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.72228267"
                                                            data-newlongitude="-73.99246214"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    4
                                                                </strong>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/16.jpg'},{'src': 'images/all/27.jpg'}, {'src': 'images/all/20.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={4}
                                                />
                                                <span className="price-name-tooltip">
                                                    Ultra High
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/* gallery-item  */}
                        <div className="gallery-item hotels">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/28.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/5.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Nasty Wood</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_open">
                                            <i className="fal fa-lock-open" />
                                            Open Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    4.7
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    9 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        Handmade Shop
                                                    </a>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        34-42 Montgomery St ,
                                                        NY, USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category green-bg">
                                                    <i className="fal fa-cart-arrow-down" />
                                                </div>
                                                <span>Shopping</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.88496706"
                                                            data-newlongitude="-73.88191222"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    5
                                                                </strong>
                                                            </span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/28.jpg'},{'src': 'images/all/29.jpg'}, {'src': 'images/all/30.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={3}
                                                />
                                                <span className="price-name-tooltip">
                                                    Pricey
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/* gallery-item  */}
                        <div className="gallery-item  restaurant hotels">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/18.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Alisa Noory</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_close">
                                            <i className="fal fa-lock-open" />
                                            Close Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    4.1
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={4}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    26 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        Iconic Cafe in Manhattan
                                                    </a>
                                                    <span className="verified-badge">
                                                        <i className="fal fa-check" />
                                                    </span>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        40 Journal Square Plaza,
                                                        NJ, USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category red-bg">
                                                    <i className="fal fa-cheeseburger" />
                                                </div>
                                                <span>Restaurants</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.76221766"
                                                            data-newlongitude="-73.96511769"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    6
                                                                </strong>
                                                            </span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/18.jpg'},{'src': 'images/all/21.jpg'}, {'src': 'images/all/22.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={2}
                                                />
                                                <span className="price-name-tooltip">
                                                    Moderate
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/* gallery-item  */}
                        <div className="gallery-item fitness">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/52.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Lisa Smith</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_close">
                                            <i className="fal fa-lock" />
                                            Close Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    4.1
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={4}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    56 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        BodyStrong Gym
                                                    </a>
                                                    <span className="verified-badge">
                                                        <i className="fal fa-check" />
                                                    </span>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        W 85th St, New York, USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category blue-bg">
                                                    <i className="fal fa-dumbbell" />
                                                </div>
                                                <span>Fitness / Gym</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.94982541"
                                                            data-newlongitude="-73.84357452"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    7
                                                                </strong>
                                                            </span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/10.jpg'},{'src': 'images/all/14.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={2}
                                                />
                                                <span className="price-name-tooltip">
                                                    Moderate
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                        {/* gallery-item  */}
                        <div className="gallery-item hotels">
                            {/* listing-item  */}
                            <div className="listing-item">
                                <article className="geodir-category-listing fl-wrap">
                                    <div className="geodir-category-img">
                                        <div className="geodir-js-favorite_btn">
                                            <i className="fal fa-heart" />
                                            <span>Save</span>
                                        </div>
                                        <a
                                            href="listing-single.html"
                                            className="geodir-category-img-wrap fl-wrap"
                                        >
                                            <img
                                                src="images/all/62.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="listing-avatar">
                                            <a href="author-single.html">
                                                <img
                                                    src="images/avatar/4.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <span className="avatar-tooltip">
                                                Added By{" "}
                                                <strong>Nasty Wood</strong>
                                            </span>
                                        </div>
                                        <div className="geodir_status_date gsd_open">
                                            <i className="fal fa-lock-open" />
                                            Open Now
                                        </div>
                                        <div className="geodir-category-opt">
                                            <div className="listing-rating-count-wrap">
                                                <div className="review-score">
                                                    4.7
                                                </div>
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <br />
                                                <div className="reviews-count">
                                                    9 reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-content fl-wrap title-sin_item">
                                        <div className="geodir-category-content-title fl-wrap">
                                            <div className="geodir-category-content-title-item">
                                                <h3 className="title-sin_map">
                                                    <a href="listing-single.html">
                                                        Family Store
                                                    </a>
                                                </h3>
                                                <div className="geodir-category-location fl-wrap">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt" />{" "}
                                                        34-42 Montgomery St ,
                                                        NY, USA
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="geodir-category-text fl-wrap">
                                            <p className="small-text">
                                                Sed interdum metus at nisi
                                                tempor laoreet. Integer gravida
                                                orci a justo sodales.
                                            </p>
                                            <div className="facilities-list fl-wrap">
                                                <div className="facilities-list-title">
                                                    Facilities :
                                                </div>
                                                <ul className="no-list-style">
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Free WiFi"
                                                    >
                                                        <i className="fal fa-wifi" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Parking"
                                                    >
                                                        <i className="fal fa-parking" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Non-smoking Rooms"
                                                    >
                                                        <i className="fal fa-smoking-ban" />
                                                    </li>
                                                    <li
                                                        className="tolt"
                                                        data-microtip-position="top"
                                                        data-tooltip="Pets Friendly"
                                                    >
                                                        <i className="fal fa-dog-leashed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="geodir-category-footer fl-wrap">
                                            <a className="listing-item-category-wrap">
                                                <div className="listing-item-category green-bg">
                                                    <i className="fal fa-cart-arrow-down" />
                                                </div>
                                                <span>Shopping</span>
                                            </a>
                                            <div className="geodir-opt-list">
                                                <ul className="no-list-style">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="show_gcc"
                                                        >
                                                            <i className="fal fa-envelope" />
                                                            <span className="geodir-opt-tooltip">
                                                                Contact Info
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="single-map-item"
                                                            data-newlatitude="40.88496706"
                                                            data-newlongitude="-73.88191222"
                                                        >
                                                            <i className="fal fa-map-marker-alt" />
                                                            <span className="geodir-opt-tooltip">
                                                                On the map{" "}
                                                                <strong>
                                                                    5
                                                                </strong>
                                                            </span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="dynamic-gal gdop-list-link"
                                                            data-dynamicpath="[{'src': 'images/all/28.jpg'},{'src': 'images/all/29.jpg'}, {'src': 'images/all/30.jpg'}]"
                                                        >
                                                            <i className="fal fa-search-plus" />
                                                            <span className="geodir-opt-tooltip">
                                                                Gallery
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="price-level geodir-category_price">
                                                <span
                                                    className="price-level-item"
                                                    data-pricerating={3}
                                                />
                                                <span className="price-name-tooltip">
                                                    Pricey
                                                </span>
                                            </div>
                                            <div className="geodir-category_contacts">
                                                <div className="close_gcc">
                                                    <i className="fal fa-times-circle" />
                                                </div>
                                                <ul className="no-list-style">
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-phone" />{" "}
                                                            Call :{" "}
                                                        </span>
                                                        <a href="#">
                                                            +38099231212
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fal fa-envelope" />{" "}
                                                            Write :{" "}
                                                        </span>
                                                        <a href="#">
                                                            yourmail@domain.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* listing-item end */}
                        </div>
                        {/* gallery-item  end*/}
                    </div>
                    <a href="listing.html" className="btn  dec_btn  color2-bg">
                        Check Out All Listings
                        <i className="fal fa-arrow-alt-right" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default EventCardCategory;
