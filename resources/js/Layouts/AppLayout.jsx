import React, {useEffect} from "react"
import Login from "@/Pages/Auth/Login";
import {Link, usePage} from "@inertiajs/inertia-react";

const AppLayout = (props) => {

    const {authed} = usePage().props

    let scripts = [
        '../../app/assets/js/plugins.js',
        '../../app/assets/js/scripts.js'
    ]

    useEffect(async () => {
        for (const url of scripts) {
            const script = await document.createElement('script');
            script.src = await url;
            script.async = await false;
            await document.body.appendChild(script);
            console.log(url)
        }
        return () => {
            document.body.removeChild(script);

        }

    }, []);
    useEffect(() => {
        // close register model
        $('.modal , .reg-overlay').fadeOut(200);
        $("html, body").removeClass("hid-body");
        $(".modal_main").removeClass("vis_mr");
            try {
                initTowhub()
                console.log('init..')


            } catch (e) {
                console.log('script not loaded yet')
            }
        }, [props.children]
    )



    function AuthedProfile() {
        if (authed)
            return (
                <div className="header-user-menu">
                    <div className="header-user-name">
                                <span>
                                  <img src={`${authed.profile_photo_url}`} alt=""/>
                                </span>
                        Hello , {authed.name}
                    </div>
                    <ul>
                        <li>
                            <a href="dashboard-myprofile.html"> Edit profile</a>
                        </li>
                        <li>
                            <a href="dashboard-add-listing.html"> Add Listing</a>
                        </li>
                        <li>
                            <a href="dashboard-bookings.html"> Bookings </a>
                        </li>
                        <li>
                            <a href="dashboard-review.html"> Reviews </a>
                        </li>
                        <li>
                            <Link href="/logout" method="post">Log Out</Link>
                        </li>
                    </ul>
                </div>
            )
        return (
            <div className="show-reg-form modal-open avatar-img" data-srcav="images/avatar/3.jpg">
                <i
                    className="fal fa-user"/>Sign In
            </div>

        )
    }

    return (
        <div className="AppLayout">
            <div className="ahmed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cum,
                dicta, facilis id magni nam necessitatibus nulla qui rem repellendus veritatis voluptate! Ab, debitis,
                tenetur! Ipsa laboriosam modi officiis.
            </div>
            <div className="loader-wrap">
                <div className="loader-inner">
                    <div className="loader-inner-cirle"></div>
                </div>
            </div>
            <div id="main">
                {/* header */}
                <header className="main-header">
                    {/* logo*/}
                    <a href="index.html" className="logo-holder"><img src="images/logo.png"/></a>
                    {/* logo end*/}
                    {/* header-search_btn*/}
                    <div className="header-search_btn show-search-button"><i
                        className="fal fa-search"/><span>Search</span></div>
                    {/* header-search_btn end*/}
                    {/* header opt */}
                    <a href="dashboard-add-listing.html" className="add-list color-bg">Add Listing <span><i
                        className="fal fa-layer-plus"/></span></a>
                    <div className="cart-btn   show-header-modal" data-microtip-position="bottom" role="tooltip"
                         aria-label="Your Wishlist"><i className="fal fa-heart"/><span
                        className="cart-counter green-bg"/></div>

                    <div>
                        <AuthedProfile/>
                    </div>


                    {/* header opt end*/}
                    {/* lang-wrap*/}
                    <div className="lang-wrap">
                        <div className="show-lang"><span><i
                            className="fal fa-globe-europe"/><strong>En</strong></span><i
                            className="fa fa-caret-down arrlan"/></div>
                        <ul className="lang-tooltip lang-action no-list-style">
                            <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                            <li><a href="#" data-lantext="Fr">Français</a></li>
                            <li><a href="#" data-lantext="Es">Español</a></li>
                            <li><a href="#" data-lantext="De">Deutsch</a></li>
                        </ul>
                    </div>
                    {/* lang-wrap end*/}
                    {/* nav-button-wrap*/}
                    <div className="nav-button-wrap color-bg">
                        <div className="nav-button">
                            <span/><span/><span/>
                        </div>
                    </div>
                    {/* nav-button-wrap end*/}
                    {/*  navigation */}
                    <div className="nav-holder main-menu">
                        <nav>
                            <ul className="no-list-style">
                                <li>
                                    <a href="#">Home <i className="fa fa-caret-down"/></a>
                                    {/*second level */}
                                    <ul>
                                        <li><a href="index.html">Parallax Image</a></li>
                                        <li><a href="index2.html">Slider</a></li>
                                        <li><a href="index3.html">Slideshow</a></li>
                                        <li><a href="index4.html">Video</a></li>
                                        <li><a href="index5.html">Map</a></li>
                                    </ul>
                                    {/*second level end*/}
                                </li>
                                <li>
                                    <a href="#">Listings <i className="fa fa-caret-down"/></a>
                                    {/*second level */}
                                    <ul>
                                        <li><a href="listing.html">Column map</a></li>
                                        <li><a href="listing2.html">Column map 2</a></li>
                                        <li><a href="listing3.html">Fullwidth Map</a></li>
                                        <li><a href="listing4.html">Fullwidth Map 2</a></li>
                                        <li><a href="listing5.html">Without Map</a></li>
                                        <li><a href="listing6.html">Without Map 2</a></li>
                                        <li>
                                            <a href="#">Single <i className="fa fa-caret-down"/></a>
                                            {/*third  level  */}
                                            <ul>
                                                <li><a href="listing-single.html">Style 1</a></li>
                                                <li><a href="listing-single2.html">Style 2</a></li>
                                                <li><a href="listing-single3.html">Style 3</a></li>
                                                <li><a href="listing-single4.html">Style 4</a></li>
                                            </ul>
                                            {/*third  level end*/}
                                        </li>
                                    </ul>
                                    {/*second level end*/}
                                </li>
                                <li>
                                    <a href="blog.html">News</a>
                                </li>
                                <li>
                                    <a href="#" className="act-link">Pages <i className="fa fa-caret-down"/></a>
                                    {/*second level */}
                                    <ul>
                                        <li>
                                            <a href="#">Shop<i className="fa fa-caret-down"/></a>
                                            {/*third  level  */}
                                            <ul>
                                                <li><a href="shop.html">Products</a></li>
                                                <li><a href="product-single.html">Product single</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                            </ul>
                                            {/*third  level end*/}
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contacts.html">Contacts</a></li>
                                        <li><a href="author-single.html">User single</a></li>
                                        <li><a href="help.html">How it Works</a></li>
                                        <li><a href="booking.html">Booking</a></li>
                                        <li><a href="pricing-tables.html">Pricing</a></li>
                                        <li><a href="dashboard.html">User Dasboard</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                                        <li><a href="invoice.html">Invoice</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                    {/*second level end*/}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* navigation  end */}
                    {/* header-search_container */}
                    <div className="header-search_container header-search vis-search">
                        <div className="container small-container">
                            <div className="header-search-input-wrap fl-wrap">
                                {/* header-search-input */}
                                <div className="header-search-input">
                                    <label><i className="fal fa-keyboard"/></label>
                                    <input type="text" placeholder="What are you looking for ?" defaultValue/>
                                </div>
                                {/* header-search-input end */}
                                {/* header-search-input */}
                                <div className="header-search-input location autocomplete-container">
                                    <label><i className="fal fa-map-marker"/></label>
                                    <input type="text" placeholder="Location..." className="autocomplete-input"
                                           id="autocompleteid2" defaultValue/>
                                    <a href="#"><i className="fal fa-dot-circle"/></a>
                                </div>
                                {/* header-search-input end */}
                                {/* header-search-input */}
                                <div className="header-search-input header-search_selectinpt ">
                                    <select data-placeholder="Category" className="chosen-select no-radius">
                                        <option>All Categories</option>
                                        <option>All Categories</option>
                                        <option>Shops</option>
                                        <option>Hotels</option>
                                        <option>Restaurants</option>
                                        <option>Fitness</option>
                                        <option>Events</option>
                                    </select>
                                </div>
                                {/* header-search-input end */}
                                <button className="header-search-button green-bg"
                                        onClick="window.location.href='listing.html'"><i
                                    className="far fa-search"/> Search
                                </button>
                            </div>
                            <div className="header-search_close color-bg"><i className="fal fa-long-arrow-up"/></div>
                        </div>
                    </div>
                    {/* header-search_container  end */}
                    {/* wishlist-wrap*/}
                    <div className="header-modal novis_wishlist">
                        {/* header-modal-container*/}
                        <div className="header-modal-container scrollbar-inner fl-wrap" data-simplebar>
                            {/*widget-posts*/}
                            <div className="widget-posts  fl-wrap">
                                <ul className="no-list-style">
                                    <li>
                                        <div className="widget-posts-img"><a href="listing-single.html"><img
                                            src="images/gallery/thumbnail/1.png"/></a>
                                        </div>
                                        <div className="widget-posts-descr">
                                            <h4><a href="listing-single.html">Iconic Cafe</a></h4>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i
                                                className="fas fa-map-marker-alt"/> 40 Journal Square Plaza, NJ, USA</a>
                                            </div>
                                            <div className="widget-posts-descr-link"><a
                                                href="listing.html">Restaurants </a> <a href="listing.html">Cafe</a>
                                            </div>
                                            <div className="widget-posts-descr-score">4.1</div>
                                            <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-img"><a href="listing-single.html"><img
                                            src="images/gallery/thumbnail/2.png"/></a>
                                        </div>
                                        <div className="widget-posts-descr">
                                            <h4><a href="listing-single.html">MontePlaza Hotel</a></h4>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i
                                                className="fas fa-map-marker-alt"/> 70 Bright St New York, USA </a>
                                            </div>
                                            <div className="widget-posts-descr-link"><a href="listing.html">Hotels </a>
                                            </div>
                                            <div className="widget-posts-descr-score">5.0</div>
                                            <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-img"><a href="listing-single.html"><img
                                            src="images/gallery/thumbnail/3.png"/></a>
                                        </div>
                                        <div className="widget-posts-descr">
                                            <h4><a href="listing-single.html">Rocko Band in Marquee Club</a></h4>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i
                                                className="fas fa-map-marker-alt"/>75 Prince St, NY, USA</a></div>
                                            <div className="widget-posts-descr-link"><a href="listing.html">Events</a>
                                            </div>
                                            <div className="widget-posts-descr-score">4.2</div>
                                            <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-img"><a href="listing-single.html"><img
                                            src="images/gallery/thumbnail/4.png"/></a>
                                        </div>
                                        <div className="widget-posts-descr">
                                            <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i
                                                className="fas fa-map-marker-alt"/> W 85th St, New York, USA</a></div>
                                            <div className="widget-posts-descr-link"><a href="listing.html">Fitness</a>
                                                <a href="listing.html">Gym</a></div>
                                            <div className="widget-posts-descr-score">5.0</div>
                                            <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* widget-posts end*/}
                        </div>
                        {/* header-modal-container end*/}
                        <div className="header-modal-top fl-wrap">
                            <h4>Your Wishlist : <span><strong/> Locations</span></h4>
                            <div className="close-header-modal"><i className="far fa-times"/></div>
                        </div>
                    </div>
                    {/*wishlist-wrap end */}
                </header>
                {/* header end*/}
                {/* wrapper*/}
                <div id="wrapper">
                    {/* content*/}
                    <div className="content">
                        {
                            React.Children.map(props.children, child => {
                                return React.cloneElement(
                                    child,
                                    {scripts}
                                )
                            })
                        }
                    </div>
                    {/*content end*/}
                </div>
                {/* wrapper end*/}
                {/*footer */}
                <footer className="main-footer fl-wrap">
                    {/* footer-header*/}
                    <div className="footer-header fl-wrap grad ient-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="subscribe-header">
                                        <h3>Subscribe For a <span>Newsletter</span></h3>
                                        <p>Whant to be notified about new locations ? Just sign up.</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="subscribe-widget">
                                        <div className="subcribe-form">
                                            <form id="subscribe">
                                                <input className="enteremail fl-wrap" name="email" id="subscribe-email"
                                                       placeholder="Enter Your Email" spellCheck="false" type="text"/>
                                                <button type="submit" id="subscribe-button"
                                                        className="subscribe-button"><i className="fal fa-envelope"/>
                                                </button>
                                                <label htmlFor="subscribe-email" className="subscribe-message"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer-header end*/}
                    {/*footer-inner*/}
                    <div className="footer-inner   fl-wrap">
                        <div className="container">
                            <div className="row">
                                {/* footer-widget*/}
                                <div className="col-md-4">
                                    <div className="footer-widget fl-wrap">
                                        <div className="footer-logo"><a href="index.html"><img
                                            src="images/logo.png"/></a></div>
                                        <div className="footer-contacts-widget fl-wrap">
                                            <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa
                                                convallis cursus. Nulla eu mi magna. Etiam suscipit commodo
                                                gravida. </p>
                                            <ul className="footer-contacts fl-wrap no-list-style">
                                                <li><span><i className="fal fa-envelope"/> Mail :</span><a href="#"
                                                                                                           target="_blank">yourmail@domain.com</a>
                                                </li>
                                                <li><span><i className="fal fa-map-marker"/> Adress :</span><a href="#"
                                                                                                               target="_blank">USA
                                                    27TH Brooklyn NY</a></li>
                                                <li><span><i className="fal fa-phone"/> Phone :</span><a
                                                    href="#">+7(111)123456789</a></li>
                                            </ul>
                                            <div className="footer-social">
                                                <span>Find  us on: </span>
                                                <ul className="no-list-style">
                                                    <li><a href="#" target="_blank"><i
                                                        className="fab fa-facebook-f"/></a></li>
                                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a>
                                                    </li>
                                                    <li><a href="#" target="_blank"><i
                                                        className="fab fa-instagram"/></a></li>
                                                    <li><a href="#" target="_blank"><i className="fab fa-vk"/></a></li>
                                                    <li><a href="#" target="_blank"><i className="fab fa-whatsapp"/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* footer-widget end*/}
                                {/* footer-widget*/}
                                <div className="col-md-4">
                                    <div className="footer-widget fl-wrap">
                                        <h3>Our Last News</h3>
                                        <div className="footer-widget-posts fl-wrap">
                                            <ul className="no-list-style">
                                                <li className="clearfix">
                                                    <a href="#" className="widget-posts-img"><img src="images/all/4.jpg"
                                                                                                  className="respimg"/></a>
                                                    <div className="widget-posts-descr">
                                                        <a href="#">Vivamus dapibus rutrum</a>
                                                        <span className="widget-posts-date"><i
                                                            className="fal fa-calendar"/> 21 Mar 09.05 </span>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <a href="#" className="widget-posts-img"><img src="images/all/2.jpg"
                                                                                                  className="respimg"/></a>
                                                    <div className="widget-posts-descr">
                                                        <a href="#"> In hac habitasse platea</a>
                                                        <span className="widget-posts-date"><i
                                                            className="fal fa-calendar"/> 7 Mar 18.21 </span>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <a href="#" className="widget-posts-img"><img src="images/all/7.jpg"
                                                                                                  className="respimg"/></a>
                                                    <div className="widget-posts-descr">
                                                        <a href="#">Tortor tempor in porta</a>
                                                        <span className="widget-posts-date"><i
                                                            className="fal fa-calendar"/> 7 Mar 16.42 </span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <a href="blog.html" className="footer-link">Read all <i
                                                className="fal fa-long-arrow-right"/></a>
                                        </div>
                                    </div>
                                </div>
                                {/* footer-widget end*/}
                                {/* footer-widget  */}
                                <div className="col-md-4">
                                    <div className="footer-widget fl-wrap ">
                                        <h3>Our Twitter</h3>
                                        <div className="twitter-holder fl-wrap scrollbar-inner2" data-simplebar
                                             data-simplebar-auto-hide="false">
                                            <div id="footer-twiit"/>
                                        </div>
                                        <a href="#" className="footer-link twitter-link" target="_blank">Follow us <i
                                            className="fal fa-long-arrow-right"/></a>
                                    </div>
                                </div>
                                {/* footer-widget end*/}
                            </div>
                        </div>
                        {/* footer bg*/}
                        <div className="footer-bg" data-ran={4}/>
                        <div className="footer-wave">
                            <svg viewBox="0 0 100 25">
                                <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"/>
                            </svg>
                        </div>
                        {/* footer bg  end*/}
                    </div>
                    {/*footer-inner end */}
                    {/*sub-footer*/}
                    <div className="sub-footer  fl-wrap">
                        <div className="container">
                            <div className="copyright"> © Townhub 2019 . All rights reserved.</div>
                            <div className="lang-wrap">
                                <div className="show-lang"><span><i className="fal fa-globe-europe"/><strong>En</strong></span><i
                                    className="fa fa-caret-down arrlan"/></div>
                                <ul className="lang-tooltip lang-action no-list-style">
                                    <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                                    <li><a href="#" data-lantext="Fr">Français</a></li>
                                    <li><a href="#" data-lantext="Es">Español</a></li>
                                    <li><a href="#" data-lantext="De">Deutsch</a></li>
                                </ul>
                            </div>
                            <div className="subfooter-nav">
                                <ul className="no-list-style">
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*sub-footer end */}
                </footer>
                {/*footer end */}
                {/*map-modal */}
                <div className="map-modal-wrap">
                    <div className="map-modal-wrap-overlay"/>
                    <div className="map-modal-item">
                        <div className="map-modal-container fl-wrap">
                            <div className="map-modal fl-wrap">
                                <div id="singleMap" data-latitude="40.7" data-longitude="-73.1"/>
                            </div>
                            <h3><span>Location for : </span><a href="#">Listing Title</a></h3>
                            <div className="map-modal-close"><i className="fal fa-times"/></div>
                        </div>
                    </div>
                </div>
                {/*map-modal end */}
                {/*chat-widget */}
                <div className="chat-widget-button cwb tolt" data-microtip-position="left"
                     data-tooltip="Chat With Owner"><i className="fal fa-comments-alt"/></div>
                <div className="chat-widget_wrap not-vis-chat">
                    <div className="chat-widget_header">
                        <h3>Chat with <a href="author-single.html"> Alisa Noory</a></h3>
                        <div className="status st_online"><span/>Online</div>
                    </div>
                    <div className="chat-body" data-simplebar>
                        {/* message*/}
                        <div className="chat-message chat-message_guest fl-wrap">
                            <div className="dashboard-message-avatar">
                                <img src="images/avatar/4.jpg"/>
                            </div>
                            <span className="chat-message-user-name">Jessie</span>
                            <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                            <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare
                                vitae nunc. </p>
                        </div>
                        {/* message end*/}
                        {/* message*/}
                        <div className="chat-message chat-message_user fl-wrap">
                            <div className="dashboard-message-avatar">
                                <img src="images/avatar/5.jpg"/>
                            </div>
                            <span className="chat-message-user-name">Alica</span>
                            <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                            <p>Nulla eget erat consequat quam feugiat dapibus eget sed mauris.</p>
                        </div>
                        {/* message end*/}
                        {/* message*/}
                        <div className="chat-message chat-message_guest fl-wrap">
                            <div className="dashboard-message-avatar">
                                <img src="images/avatar/4.jpg"/>
                            </div>
                            <span className="chat-message-user-name">Jessie</span>
                            <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                            <p>Sed non neque faucibus, condimentum lectus at, accumsan enim. Fusce pretium egestas
                                cursus..</p>
                        </div>
                        {/* message end*/}
                    </div>
                    <div className="chat-widget_input fl-wrap">
                        <textarea placeholder="Type Message" defaultValue={""}/>
                        <button type="submit"><i className="fal fa-paper-plane"/></button>
                    </div>
                </div>
                {/*chat-widget end */}
                {/*register form */}
                <Login/>
                {/*register form end */}
                <a className="to-top"><i className="fas fa-caret-up"/></a>
            </div>
            {/*<Helmet>*/}
            {/*    <script src="../../assets/js/jquery.min.js" type="text/javascript" ></script>*/}
            {/*    <script src="../../assets/js/plugins.js" type="text/javascript" ></script>*/}
            {/*    <script src="../../assets/js/scripts.js" type="text/javascript" ></script>*/}
            {/*</Helmet>*/}


        </div>
    )
}
export default AppLayout

