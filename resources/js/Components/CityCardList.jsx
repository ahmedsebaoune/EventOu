import CityCard from './CityCard'


const CityCardList = () => {
    return (
        <div>
            <section className="gray-bg hidden-section particles-wrapper">
                <div className="container">
                    <div className="section-title">
                        <h2>Explore Best Cities</h2>
                        <div className="section-subtitle">Catalog of Categories</div>
                        <span className="section-separator"/>
                        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.</p>
                    </div>
                    <div className="listing-item-grid_container fl-wrap">
                        <div className="row">
                            {/*  listing-item-grid  */}
                            <CityCard/>
                            <CityCard/>
                            <CityCard/>
                            <CityCard/>
                            <CityCard/>
                            <CityCard/>
                            {/*  listing-item-grid end  */}
                        </div>
                    </div>
                    <a href="listing.html" className="btn dec_btn   color2-bg">View All Cities<i
                        className="fal fa-arrow-alt-right"/></a>
                </div>
            </section>

        </div>
    )
}


export default CityCardList
