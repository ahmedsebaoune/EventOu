import EventCardFullSection from "../../Components/EventCardFullSection";
import CityCardList from "../../Components/CityCardList";
import EventCardCategory from "@/Components/EventCardCategorie";

const Home = () => {



    return (
        <div>
            <section className="hero-section" data-scrollax-parent="true">
                <div className="bg-tabs-wrap">
                    <div
                        className="bg-parallax-wrap"
                        data-scrollax="properties: { translateY: '200px' }"
                    >
                        <div
                            className="bg bg_tabs"
                            data-bg="images/bg/hero/1.jpg"
                        />
                        <div className="overlay op7" />
                    </div>
                </div>
                <div className="container small-container">
                    <div className="intro-item fl-wrap">
                        <span className="section-separator" />
                        <div className="bubbles">
                            <h1>Explore Best Places In City</h1>
                        </div>
                        <h3>
                            Find some of the best tips from around the city from
                            our partners and friends.
                        </h3>
                    </div>
                    {/* main-search-input-tabs*/}
                    <div className="main-search-input-tabs  tabs-act fl-wrap">
                        <ul className="tabs-menu change_bg no-list-style">
                            <li className="current">
                                <a
                                    href="#tab-inpt2"
                                    data-bgtab="images/bg/hero/2.jpg"
                                >
                                    {" "}
                                    Events
                                </a>
                            </li>
                        </ul>
                        {/*tabs */}
                        <div className="tabs-container fl-wrap  ">
                            <div className="tab">
                                <div
                                    id="tab-inpt2"
                                    className="tab-content first-tab"
                                >
                                    <div className="main-search-input-wrap fl-wrap">
                                        <div className="main-search-input fl-wrap">
                                            <div className="main-search-input-item">
                                                <label>
                                                    <i className="fal fa-handshake-alt" />
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Event Name or Place"
                                                    defaultValue
                                                />
                                            </div>
                                            <div className="main-search-input-item">
                                                <select
                                                    data-placeholder="Loaction"
                                                    className="chosen-select on-radius"
                                                >
                                                    <option>All Cities</option>
                                                    <option>New York</option>
                                                    <option>London</option>
                                                    <option>Paris</option>
                                                    <option>Kiev</option>
                                                    <option>Moscow</option>
                                                    <option>Dubai</option>
                                                    <option>Rome</option>
                                                    <option>Beijing</option>
                                                </select>
                                            </div>
                                            <div className="main-search-input-item">
                                                <select
                                                    data-placeholder="All Categories"
                                                    className="chosen-select"
                                                >
                                                    <option>
                                                        All Categories
                                                    </option>
                                                    <option>Shops</option>
                                                    <option>Hotels</option>
                                                    <option>Restaurants</option>
                                                    <option>Fitness</option>
                                                    <option>Events</option>
                                                </select>
                                            </div>

                                            <button
                                                className="main-search-button color2-bg"
                                                onclick="window.location.href='listing.html'"
                                            >
                                                Search{" "}
                                                <i className="far fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*tabs end*/}
                    </div>
                    {/* main-search-input-tabs end*/}
                    <div className="hero-categories fl-wrap">
                        <h4 className="hero-categories_title">
                            Just looking around ? Use quick search by category :
                        </h4>
                        <ul className="no-list-style">
                            <li>
                                <a href="listing.html">
                                    <i className="far fa-cheeseburger" />
                                    <span>Restaurants</span>
                                </a>
                            </li>
                            <li>
                                <a href="listing.html">
                                    <i className="far fa-bed" />
                                    <span>Hotels</span>
                                </a>
                            </li>
                            <li>
                                <a href="listing.html">
                                    <i className="far fa-shopping-bag" />
                                    <span>Shops</span>
                                </a>
                            </li>
                            <li>
                                <a href="listing.html">
                                    <i className="far fa-dumbbell" />
                                    <span>Fitness</span>
                                </a>
                            </li>
                            <li>
                                <a href="listing.html">
                                    <i className="far fa-cocktail" />
                                    <span>Events</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-sec-link">
                    <a href="#sec1" className="custom-scroll-link">
                        <i className="fal fa-angle-double-down" />
                    </a>
                </div>
            </section>
            <EventCardFullSection />
            <CityCardList />
            <EventCardCategory />
            {/* how it works section */}
            <section data-scrollax-parent="true">
                <div class="container">
                    <div class="section-title">
                        <h2>How it works</h2>
                        <div class="section-subtitle">
                            Discover &amp; Connect{" "}
                        </div>
                        <span class="section-separator"></span>
                        <p>
                            Morbi varius, nulla sit amet rutrum elementum, est
                            elit finibus tellus, ut tristique elit risus at
                            metus.
                        </p>
                    </div>
                    <div class="process-wrap fl-wrap">
                        <ul class="no-list-style">
                            <li>
                                <div class="process-item">
                                    <span class="process-count">01 </span>
                                    <div class="time-line-icon">
                                        <i class="fal fa-map-marker-alt"></i>
                                    </div>
                                    <h4> Find Interesting Place</h4>
                                    <p>
                                        Proin dapibus nisl ornare diam varius
                                        tempus. Aenean a quam luctus, finibus
                                        tellus ut, convallis eros sollicitudin
                                        turpis.
                                    </p>
                                </div>
                                <span class="pr-dec"></span>
                            </li>
                            <li>
                                <div class="process-item">
                                    <span class="process-count">02</span>
                                    <div class="time-line-icon">
                                        <i class="fal fa-mail-bulk"></i>
                                    </div>
                                    <h4> Contact a Few Owners</h4>
                                    <p>
                                        Faucibus ante, in porttitor tellus
                                        blandit et. Phasellus tincidunt metus
                                        lectus sollicitudin feugiat pharetra
                                        consectetur.
                                    </p>
                                </div>
                                <span class="pr-dec"></span>
                            </li>
                            <li>
                                <div class="process-item">
                                    <span class="process-count">03</span>
                                    <div class="time-line-icon">
                                        <i class="fal fa-layer-plus"></i>
                                    </div>
                                    <h4> Make a Listing</h4>
                                    <p>
                                        Maecenas pulvinar, risus in facilisis
                                        dignissim, quam nisi hendrerit nulla, id
                                        vestibulum metus nullam viverra porta.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div class="process-end">
                            <i class="fal fa-check"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
