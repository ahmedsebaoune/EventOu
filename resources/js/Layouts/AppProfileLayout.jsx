// import $ from "@assets/js/jquery.min"
import { Link ,usePage} from '@inertiajs/inertia-react'

const AppProfileLayout = (props) => {
    props.scripts.push('../../app/assets/js/charts.js')
    props.scripts.push('../../app/assets/js/dashboard.js')
    const { url, component } = usePage()

        return (
            <div className="content">
                {/*  section  */}
                <section
                    className="parallax-section dashboard-header-sec gradient-bg"
                    data-scrollax-parent="true"
                >
                    <div className="container">
                        <div className="dashboard-breadcrumbs breadcrumbs">
                            <a href="#">Home</a>
                            <a href="#">Dashboard</a>
                            <span>Main page</span>
                        </div>
                        {/*Tariff Plan menu*/}
                        <div className="tfp-btn">
                            <span>Tariff Plan : </span> <strong>Extended</strong>
                        </div>
                        <div className="tfp-det">
                            <p>
                                You Are on <a href="#">Extended</a> . Use link bellow to view details
                                or upgrade.{" "}
                            </p>
                            <a href="#" className="tfp-det-btn color2-bg">
                                Details
                            </a>
                        </div>
                        {/*Tariff Plan menu end*/}
                        <div className="dashboard-header_conatiner fl-wrap dashboard-header_title">
                            <h1>
                                Welcome : <span>Alisa Noory</span>
                            </h1>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="dashboard-header fl-wrap">
                        <div className="container">
                            <div className="dashboard-header_conatiner fl-wrap">
                                <div className="dashboard-header-avatar">
                                    <img src="images/avatar/4.jpg" alt="" />
                                    <a
                                        href="dashboard-myprofile.html"
                                        className="color-bg edit-prof_btn"
                                    >
                                        <i className="fal fa-edit" />
                                    </a>
                                </div>
                                <div className="dashboard-header-stats-wrap">
                                    <div className="dashboard-header-stats">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                    <div className="dashboard-header-stats-item">
                                                        <i className="fal fa-map-marked" />
                                                        Active Listings
                                                        <span>21</span>
                                                    </div>
                                                </div>
                                                {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                    <div className="dashboard-header-stats-item">
                                                        <i className="fal fa-chart-bar" />
                                                        Listing Views
                                                        <span>1054</span>
                                                    </div>
                                                </div>
                                                {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                    <div className="dashboard-header-stats-item">
                                                        <i className="fal fa-comments-alt" />
                                                        Total Reviews
                                                        <span>79</span>
                                                    </div>
                                                </div>
                                                {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                    <div className="dashboard-header-stats-item">
                                                        <i className="fal fa-heart" />
                                                        Times Bookmarked
                                                        <span>654</span>
                                                    </div>
                                                </div>
                                                {/*  dashboard-header-stats-item end */}
                                            </div>
                                        </div>
                                    </div>
                                    {/*  dashboard-header-stats  end */}
                                    <div className="dhs-controls">
                                        <div className="dhs dhs-prev">
                                            <i className="fal fa-angle-left" />
                                        </div>
                                        <div className="dhs dhs-next">
                                            <i className="fal fa-angle-right" />
                                        </div>
                                    </div>
                                </div>
                                {/*  dashboard-header-stats-wrap end */}
                                <a className="add_new-dashboard">
                                    Add Listing <i className="fal fa-layer-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-figure" style={{ right: "-30px", top: 10 }} />
                    <div className="gradient-bg-figure" style={{ left: "-20px", bottom: 30 }} />
                    <div
                        className="circle-wrap"
                        style={{ left: 120, bottom: 120 }}
                        data-scrollax="properties: { translateY: '-200px' }"
                    >
                        <div className="circle_bg-bal circle_bg-bal_small" />
                    </div>
                    <div
                        className="circle-wrap"
                        style={{ right: 420, bottom: "-70px" }}
                        data-scrollax="properties: { translateY: '150px' }"
                    >
                        <div className="circle_bg-bal circle_bg-bal_big" />
                    </div>
                    <div
                        className="circle-wrap"
                        style={{ left: 420, top: "-70px" }}
                        data-scrollax="properties: { translateY: '100px' }"
                    >
                        <div className="circle_bg-bal circle_bg-bal_big" />
                    </div>
                    <div className="circle-wrap" style={{ left: "40%", bottom: "-70px" }}>
                        <div className="circle_bg-bal circle_bg-bal_middle" />
                    </div>
                    <div className="circle-wrap" style={{ right: "40%", top: "-10px" }}>
                        <div
                            className="circle_bg-bal circle_bg-bal_versmall"
                            data-scrollax="properties: { translateY: '-350px' }"
                        />
                    </div>
                    <div className="circle-wrap" style={{ right: "55%", top: 90 }}>
                        <div
                            className="circle_bg-bal circle_bg-bal_versmall"
                            data-scrollax="properties: { translateY: '-350px' }"
                        />
                    </div>
                </section>
                {/*  section  end*/}
                {/*  section  */}
                <section className="gray-bg main-dashboard-sec" id="sec1">
                    <div className="container">
                        {/*  dashboard-menu*/}
                        <div className="col-md-3">
                            <div className="mob-nav-content-btn color2-bg init-dsmen fl-wrap">
                                <i className="fal fa-bars" /> Dashboard menu
                            </div>
                            <div className="clearfix" />
                            <div className="fixed-bar fl-wrap" id="dash_menu">
                                <div className="user-profile-menu-wrap fl-wrap block_box">
                                    {/* user-profile-menu*/}
                                    <div className="user-profile-menu">
                                        <h3>Main</h3>
                                        <ul className="no-list-style">
                                            <li>
                                                <Link preserveScroll href="/profile" className={`${url =='/profile' ? 'user-profile-act' : ''}`}>
                                                    <i className="fal fa-chart-line" />
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="dashboard-feed.html">
                                                    <i className="fal fa-rss" />
                                                    Your Feed <span>7</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboard-myprofile.html">
                                                    <i className="fal fa-user-edit" /> Edit profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboard-messages.html">
                                                    <i className="fal fa-envelope" /> Messages <span>3</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboard-password.html">
                                                    <i className="fal fa-key" />
                                                    Change Password
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* user-profile-menu end*/}
                                    {/* user-profile-menu*/}
                                    <div className="user-profile-menu">
                                        <h3>Listings</h3>
                                        <ul className="no-list-style">
                                            <li>
                                                <Link preserveScroll href="/profile/events" className={`${url =='/profile/events' ? 'user-profile-act' : ''}`}>
                                                    <i className="fal fa-th-list" /> My Events
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="dashboard-bookings.html">
                                                    {" "}
                                                    <i className="fal fa-calendar-check" /> Bookings{" "}
                                                    <span>2</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboard-review.html">
                                                    <i className="fal fa-comments-alt" /> Reviews{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <Link preserveScroll href="/profile/event/add" className={`${url =='/profile/event/add' ? 'user-profile-act' : ''}`}>
                                                    <i className="fal fa-file-plus" /> Add Event
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* user-profile-menu end*/}
                                    <button className="logout_btn color2-bg">
                                        Log Out <i className="fas fa-sign-out" />
                                    </button>
                                </div>
                            </div>
                            <a
                                className="back-tofilters color2-bg custom-scroll-link fl-wrap"
                                href="#dash_menu"
                            >
                                Back to Menu
                                <i className="fas fa-caret-up" />
                            </a>
                        </div>
                        {/* dashboard-menu  end*/}
                        {/* dashboard content*/}
                        {props.children}
                        {/* dashboard content end*/}
                    </div>
                </section>
                {/*  section  end*/}
                <div className="limit-box fl-wrap" />
            </div>
        )
}
export default AppProfileLayout
