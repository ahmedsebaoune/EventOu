import RegisterEvent from "@/Components/EventPage/RegisterEvent";
import Location from "@/Components/EventPage/Location";
import EventHost from "@/Components/EventPage/EventHost";
import SimilarEvents from "@/Components/EventPage/SimilarEvents";
import EventSpeakers from "@/Components/EventPage/EventSpeakers";
import EventSchedule from "@/Components/EventPage/EventSchedule";
import AddReviews from "@/Components/EventPage/AddReview";
import EventReviews from "@/Components/EventPage/EventReviews";

const Event = () => {
    return (
        <div className="content">
            <section
                className="listing-hero-section hidden-section"
                data-scrollax-parent="true"
                id="sec1"
            >
                <div className="bg-parallax-wrap">
                    <div className="overlay"/>
                    <div className="media-container video-parallax">
                        <div className="bg mob-bg par-elem" data-bg="images/bg/9.jpg"/>
                        <div className="video-container">
                            <video autoPlay="" loop="" muted="" className="bgvid">
                                <source
                                    src="video/2.mp4"
                                    type="video/mp4"
                                    data-scrollax="properties: { translateY: '30%' }"
                                />
                            </video>
                        </div>
                        {/*
                              Vimeo code

                               <div  class="background-vimeo" data-vim="97871257"> </div> */}
                        {/*
                              Youtube code

                               <div  class="background-youtube-wrapper" data-vid="Hg5iNVSp2z8" data-mv="1"> </div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="list-single-header-item  fl-wrap">
                        <div className="row">
                            <div className="col-md-9">
                                <h1>
                                    Digital Event In City Hall{" "}
                                    <span className="verified-badge">
                <i className="fal fa-check"/>
              </span>
                                </h1>
                                <div className="geodir-category-location fl-wrap">
                                    <a href="#">
                                        <i className="fas fa-map-marker-alt"/> 70 Bright St New York,
                                        USA
                                    </a>{" "}
                                    <a href="#">
                                        {" "}
                                        <i className="fal fa-phone"/>
                                        +38099231212
                                    </a>{" "}
                                    <a href="#">
                                        <i className="fal fa-envelope"/> yourmail@domain.com
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <a
                                    className="fl-wrap list-single-header-column custom-scroll-link "
                                    href="#sec5"
                                >
                                    <div className="listing-rating-count-wrap single-list-count">
                                        <div className="review-score">4.1</div>
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={4}
                                        />
                                        <br/>
                                        <div className="reviews-count">2 reviews</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="list-single-header_bottom fl-wrap">
                        <a className="listing-item-category-wrap">
                            <div className="listing-item-category purp-bg">
                                <i className="fal fa-cocktail"/>
                            </div>
                            <span>Events</span>
                        </a>
                        <div className="list-single-author">
                            {" "}
                            <a href="author-single.html">
            <span className="author_avatar">
              {" "}
                <img alt="" src="images/avatar/5.jpg"/>
            </span>
                                By Alisa Noory
                            </a>
                        </div>
                        <div className="geodir_status_date color-bg">
                            <i className="fal fa-clock"/>
                            27 may 2019
                        </div>
                        <div className="box-widget counter-widget" data-countdate="09/12/2021">
                            <div className="countdown">
                                <div className="countdown-item">
                                    <span className="days rot">00</span>
                                    <p>days</p>
                                </div>
                                <div className="countdown-item">
                                    <span className="hours rot">00</span>
                                    <p>hours </p>
                                </div>
                                <div className="countdown-item">
                                    <span className="minutes rot2">00</span>
                                    <p>minutes </p>
                                </div>
                                <div className="countdown-item">
                                    <span className="seconds rot2">00</span>
                                    <p>seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="list-single-stats cws">
                            <ul className="no-list-style">
                                <li>
              <span className="viewed-counter">
                <i className="fas fa-eye"/> Viewed - 156{" "}
              </span>
                                </li>
                                <li>
              <span className="bookmark-counter">
                <i className="fas fa-heart"/> Bookmark - 24{" "}
              </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* scroll-nav-wrapper*/}
            <div className="scroll-nav-wrapper fl-wrap">
                <div className="container">
                    <nav className="scroll-nav scroll-init">
                        <ul className="no-list-style">
                            <li>
                                <a className="act-scrlink" href="#sec1">
                                    <i className="fal fa-images"/> Top
                                </a>
                            </li>
                            <li>
                                <a href="#sec2">
                                    <i className="fal fa-info"/>
                                    Details
                                </a>
                            </li>
                            <li>
                                <a href="#sec3">
                                    <i className="fal fa-calendar-check"/>
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a href="#sec4">
                                    <i className="fal fa-microphone"/>
                                    Speakers
                                </a>
                            </li>
                            <li>
                                <a href="#sec5">
                                    <i className="fal fa-comments-alt"/>
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="scroll-nav-wrapper-opt">
                        <a href="#" className="scroll-nav-wrapper-opt-btn">
                            {" "}
                            <i className="fas fa-heart"/> Save{" "}
                        </a>
                        <a href="#" className="scroll-nav-wrapper-opt-btn showshare">
                            {" "}
                            <i className="fas fa-share"/> Share{" "}
                        </a>
                        <div className="share-holder hid-share">
                            <div className="share-container  isShare"/>
                        </div>
                        <div className="show-more-snopt">
                            <i className="fal fa-ellipsis-h"/>
                        </div>
                        <div className="show-more-snopt-tooltip">
                            <a href="#">
                                {" "}
                                <i className="fas fa-comment-alt"/> Write a review
                            </a>
                            <a href="#">
                                {" "}
                                <i className="fas fa-flag-alt"/> Report{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* scroll-nav-wrapper end*/}
            <section className="gray-bg no-top-padding">
                <div className="container">
                    <div className="breadcrumbs inline-breadcrumbs fl-wrap">
                        <a href="#">Home</a>
                        <a href="#">Listings</a>
                        <a href="#">New York</a>
                        <span>Listing Single</span>
                    </div>
                    <div className="clearfix"/>
                    <div className="row">
                        {/* list-single-main-wrapper-col */}
                        <div className="col-md-8">
                            {/* list-single-main-wrapper */}
                            <div className="list-single-main-wrapper fl-wrap" id="sec2">
                                <div className="list-single-main-media fl-wrap">
                                    <div className="single-slider-wrap">
                                        <div className="single-slider fl-wrap">
                                            <div className="swiper-container">
                                                <div className="swiper-wrapper lightgallery">
                                                    <div className="swiper-slide hov_zoom">
                                                        <img src="images/all/50.jpg" alt=""/>
                                                        <a
                                                            href="images/all/5.jpg"
                                                            className="box-media-zoom   popup-image"
                                                        >
                                                            <i className="fal fa-search"/>
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide hov_zoom">
                                                        <img src="images/all/51.jpg" alt=""/>
                                                        <a
                                                            href="images/all/1.jpg"
                                                            className="box-media-zoom   popup-image"
                                                        >
                                                            <i className="fal fa-search"/>
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide hov_zoom">
                                                        <img src="images/all/49.jpg" alt=""/>
                                                        <a
                                                            href="images/all/3.jpg"
                                                            className="box-media-zoom   popup-image"
                                                        >
                                                            <i className="fal fa-search"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listing-carousel_pagination">
                                            <div className="listing-carousel_pagination-wrap">
                                                <div className="ss-slider-pagination"/>
                                            </div>
                                        </div>
                                        <div className="ss-slider-cont ss-slider-cont-prev color2-bg">
                                            <i className="fal fa-long-arrow-left"/>
                                        </div>
                                        <div className="ss-slider-cont ss-slider-cont-next color2-bg">
                                            <i className="fal fa-long-arrow-right"/>
                                        </div>
                                    </div>
                                </div>
                                {/* list-single-main-item */}
                                <div className="list-single-main-item fl-wrap block_box">
                                    <div className="list-single-main-item-title">
                                        <h3>Description</h3>
                                    </div>
                                    <div className="list-single-main-item_content fl-wrap">
                                        <p>
                                            Praesent eros turpis, commodo vel justo at, pulvinar mollis
                                            eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim.
                                            Cras vitae nulla condimentum, semper dolor non, faucibus
                                            dolor. Vivamus adipiscing eros quis orci fringilla, sed
                                            pretium lectus viverra. Pellentesque habitant morbi tristique
                                            senectus et netus et malesuada fames ac turpis egestas. Donec
                                            nec velit non odio aliquam suscipit. Sed non neque faucibus,
                                            condimentum lectus at, accumsan enim.{" "}
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                                            Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                                            suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                                            Curabitur convallis fringilla diam sed aliquam. Sed tempor
                                            iaculis massa faucibus feugiat. In fermentum facilisis massa,
                                            a consequat purus viverra.
                                        </p>
                                        <a href="#" className="btn color2-bg    float-btn">
                                            Visit Website
                                            <i className="fal fa-chevron-right"/>
                                        </a>
                                    </div>
                                </div>
                                {/* list-single-main-item end */}
                                {/* list-single-main-item */}
                                <div className="list-single-main-item fl-wrap block_box">
                                    <div className="list-single-main-item-title">
                                        <h3>Listing Features</h3>
                                    </div>
                                    <div className="list-single-main-item_content fl-wrap">
                                        <div className="listing-features fl-wrap">
                                            <ul className="no-list-style">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-rocket"/> Elevator in building
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-wifi"/> Free Wi Fi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-motorcycle"/> Free Parking
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-cloud"/> Air Conditioned
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart"/> Online Ordering
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-paw"/> Pet Friendly
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* list-single-main-item end */}
                                {/* accordion*/}
                                <EventSchedule/>
                                {/* accordion end */}
                                {/* list-single-main-item*/}
                                <EventSpeakers/>
                                {/* list-single-main-item end */}
                                {/* list-single-main-item */}
                                <EventReviews/>
                                {/* list-single-main-item end */}
                                {/* list-single-main-item */}
                                <AddReviews/>
                                {/* list-single-main-item end */}
                            </div>
                        </div>
                        {/* list-single-main-wrapper-col end */}
                        {/* list-single-sidebar */}
                        <div className="col-md-4">
                            {/*box-widget-item */}
                            <RegisterEvent/>
                            {/*box-widget-item end */}
                            {/*box-widget-item */}
                            <Location/>
                            {/*box-widget-item end */}
                            {/*box-widget-item */}
                            <div className="box-widget-item fl-wrap block_box">
                                <div className="box-widget-item-header">
                                    <h3> Price Range </h3>
                                </div>
                                <div className="box-widget">
                                    <div className="box-widget-content">
                                        <div className="claim-price-wdget fl-wrap">
                                            <div className="claim-price-wdget-content fl-wrap">
                                                <div className="pricerange fl-wrap">
                                                    <span>Price : </span> 81$ - 320${" "}
                                                </div>
                                                <div className="claim-widget-link fl-wrap">
                                                    <span>Own or work here?</span>
                                                    <a href="#">Claim Now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*box-widget-item end */}
                            {/*box-widget-item */}
                            <EventHost/>
                            {/*box-widget-item end */}
                            {/*box-widget-item */}
                            <SimilarEvents/>
                            {/*box-widget-item end */}
                            {/*box-widget-item */}
                            <div className="box-widget-item fl-wrap block_box">
                                <div className="box-widget-item-header">
                                    <h3>Tags</h3>
                                </div>
                                <div className="box-widget   fl-wrap">
                                    <div className="box-widget-content">
                                        <div className="list-single-tags tags-stylwrap">
                                            <a href="#">Hotel</a>
                                            <a href="#">Hostel</a>
                                            <a href="#">Room</a>
                                            <a href="#">Spa</a>
                                            <a href="#">Restourant</a>
                                            <a href="#">Parking</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*box-widget-item end */}
                        </div>
                        {/* list-single-sidebar end */}
                    </div>
                </div>
            </section>
            <div className="limit-box fl-wrap"/>
        </div>

    )
}

export default Event
