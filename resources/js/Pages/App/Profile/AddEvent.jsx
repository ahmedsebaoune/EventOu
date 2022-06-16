import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";

// moment.js Library for time manipulation
import moment from "moment";


//FilePond imports
import { FilePond, registerPlugin } from "react-filepond";

// FilePond styles
import "filepond/dist/filepond.min.css";

// FilePond the plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);



// OpenLayers imports
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
import LayerGroup from "ol/layer/Group";
import LayerSwitcher from "ol-layerswitcher";
import { BaseLayerOptions, GroupLayerOptions } from "ol-layerswitcher";
import VectorImage from "ol/layer/VectorImage";
import GeoJSON from "ol/format/GeoJSON";
import BingMaps from "ol/source/BingMaps";
import { Stroke, Style, Fill, Circle, Icon } from "ol/style";
import hospitalPin from "@/Icons/hospital.png";

// OpenLayers Plugins
import Marker from "ol-marker-feature";
import Popup from "ol-popup";

// OpenLayers Styles
import markerStyle from "ol-marker-feature/style";
import "ol/ol.css";
import "ol-popup/src/ol-popup.css";
import "ol-layerswitcher/dist/ol-layerswitcher.css";



// AntDesign imports
import {
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    TimePicker,
    Collapse,
} from "antd";
import {coordinates} from "ol/geom/flat/reverse";
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Panel } = Collapse;
const { TextArea } = Input;


const axios = require("axios").default;





const Schedule = (props) => (
    <Collapse accordion>
        {Array.from(Array(props.days + 1), (e, i) => {
            return (
                <Panel header={`Day ${i + 1}`} key={i + 1}>
                    <Form.Item label="Description">
                        <TextArea
                            value={props.data.days_desc[`day ${i + 1}`]}
                            rows={4}
                            placeholder="le programme du jour"
                            maxLength={60}
                            onChange={(e) => {
                                e.preventDefault();
                                props.setData("days_desc", {
                                    ...props.data.days_desc,
                                    [`day${i + 1}`]: e.target.value,
                                });
                            }}
                        />
                    </Form.Item>
                </Panel>
            );
        })}
    </Collapse>
);
const AddEvent = () => {

    // props
    let {
        categories,
        cities,
        AHMED,
        errors: validationErrors,
        testEvents,
        app_url,
    } = usePage().props;

    // states
    const [communes, setCommunes] = useState([""]);
    // for FilePond
    const [files, setFiles] = useState([]);
    const [days, setDays] = useState(0);
    //for OpenLayers
    const [map, setMap] = useState();
    // My current location
    const [coord, setCoord] = useState();
    // to generate GeoJSON data from database records
    const [geoJsonData, setGeoJsonData] = useState();

    //parisng data to from JSON
    categories = JSON.parse(categories);
    cities = JSON.parse(cities);
    testEvents = JSON.parse(testEvents);


    // Inertia form methode
    const { transform, data, setData, post, processing, errors } = useForm({
        name: "",
        categorie: "",
        photo_path: "",
        entry_price: "",
        start_date: "",
        end_date: "",
        start_time: null,
        city: "",
        commune: "",
        days_desc: {},
        marker: null,
    });

    // Inertia transform methode it executes before Posting the data
    transform((data) => ({
        ...data,
        days_desc: JSON.stringify(data.days_desc),
    }));



    // calculate days and update the days state when changing on DateRange Ant component
    useEffect(() => {
        const d = Math.floor(
            moment(data.end_date).diff(moment(data.start_date), "days")
        );
        setDays(isNaN(d) ? 0 : d);
    }, [data.end_date, data.start_date]);



    // ComponentDidMount we transform records data into GeoJSON  and we get the current location
    useEffect(() => {

        // GeoJSON header
        const GeoJsonData = {
            type: "FeatureCollection",
            features: [],
        };

        // populating the features array using the latitude a nd longitude from records
        testEvents.forEach((event) => {
            const geoPoint = {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [event.long, event.lat],
                },
                properties: { prop0: "value0" },
            };
            GeoJsonData.features.push(geoPoint);
        });

        // converting to JSON format
        setGeoJsonData(JSON.stringify(GeoJsonData));



        // Get the current location
        if (navigator.geolocation) {
            // supported
            function successCallback(position) {
                setCoord([position.coords.longitude, position.coords.latitude]);
                console.log(position.coords.latitude); // 43.2132209
                console.log(position.coords.longitude); // 27.9571503
            }
            function errorCallback(position) {
                setCoord([3.2355296, 36.7539567]);
            }
            navigator.geolocation.getCurrentPosition(
                successCallback,
                errorCallback
            );
        }
    }, []);





    // Bing Maps data set
    const imagerySet = [
        "RoadOnDemand",
        "Aerial",
        "AerialWithLabelsOnDemand",
        "CanvasDark",
        "OrdnanceSurvey",
    ];



    // to check for the first render
    const firstRenderRef = useRef(false);

    // it runs when the coord state changes so when our current coordinates are fetched from the navigator we can run this bloc
    useEffect(() => {

        //if not the first render
        if (firstRenderRef.current) {

            //defining the Base Layers
            var bing = new TileLayer({
                visible: true,
                preload: Infinity,

                source: new BingMaps({
                    // We need a key to get the layer from the provider.
                    // Sign in with Bing Maps and you will get your key (for free)
                    key: "AmEz68EsgxMS7-3QTj751pD5voAPsuMDHce8lXQk5K3CCQGS1en4nCUFcEU4jdLN",
                    imagerySet: "Road", // or 'Road', 'AerialWithLabels', etc.
                    interpolate: true,
                    // use maxZoom 19 to see stretched tiles instead of the Bing Maps
                    // "no photos at this zoom level" tiles
                    maxZoom: 19,
                }),
            });

            var osm = new TileLayer({
                title: "OpenStreetMap",
                type: "base",
                source: new OSM(),
                visible: false,
            });

            var nationalmap = new TileLayer({
                title: "nationalmap",
                type: "base",
                source: new XYZ({
                    attributions:
                        "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL",
                    url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                }),
                visible: false,
            });

            //defining the layersGroup
            const baseLayers = new LayerGroup({
                title: "Base map",
                layers: [bing, osm, nationalmap],
            });



            // style for the dots on the geoJSON
            const geoJSONStyle = new Style({
                image: new Circle({
                    radius: 20,
                    fill: new Fill({
                        color: "#ff9900",
                        opacity: 0.6,
                    }),
                    stroke: new Stroke({
                        color: "#ffcc00",
                        opacity: 0.4,
                    }),
                }),
            });

            // defining VectorLayer (data to display on the map)
            const vector = new VectorImage({
                //we can defin a source of the data or we can define an array of features a feature could be which could be a dot polygone
                source: new VectorSource({
                    // to encode variable as URL
                    url: "data:," + encodeURIComponent(geoJsonData),
                    format: new GeoJSON(),
                    // features: [
                    //     new GeoJSON().readFeatures(geoJsonData, {
                    //         dataProjection: "EPSG:4326",
                    //         featureProjection: "EPSG:4326",
                    //     }),
                    // ],
                }),
                //the style of the data we can use callback function(feature,resolution) to style a feature based on some attributes inside the feature
                style: new Style({
                    image: new Icon({
                        size: [82, 82],
                        scale: 0.5,
                        anchorXUnits: 'pixels',
                        anchorYUnits: 'pixels',
                        anchor: [25, 82],
                        src: hospitalPin,
                    }),
                }),
                visible: true,
            });

            // Creating the Map
            const olmap = new Map({
                target: ref.current,
                view: new View({
                    projection: "EPSG:4326",
                    center: coord,
                    zoom: 7,
                }),
            });

           // adding the base Layer Group
            olmap.addLayer(baseLayers);

            // adding the vector layer
            olmap.addLayer(vector);



            // layerswitcher package
            const layerSwitcher = new LayerSwitcher({
                activationMode: "click",
                startActive: true,
                tipLabel: "chilren",
                collapseTipLabel: "Collapse Layer",
            });

            //add it as control
            olmap.addControl(layerSwitcher);

            // to render it
            layerSwitcher.renderPanel();



            //creating single marker on click
            let marker = null;

            olmap.on("click", function (e) {

                //if marker exist we remove (we want only one)
                if (marker) marker.dispose();

                // creating marker from event coordinates
                marker = new Marker(e.coordinate);

                // add info attribute to marker
                marker.set("info", "I am a marker.");

                //add the marker to the map
                marker.setMap(olmap);

                // update coordinates of the form to save it in database
                setData("marker", e.coordinate);

                // creating popup
                const popup = new Popup({ offset: [0, 0] });

                //add it to the map
                olmap.addOverlay(popup);

                // on click on the marker
                marker.on("click", function () {

                    // we show the popup exactly on the marker coordinates and we show the info attribute
                    popup.show(marker.getLocation(), marker.get("info"));
                });
            });

            // set the map state
            setMap(olmap);

        //    if the first time we change the value
        } else firstRenderRef.current = true;
    }, [coord]);




    // FilPond server data to upload image
    const server = {
        url: "/uploads",
        headers: {
            "X-CSRF-TOKEN": `${document
                .getElementById("meta_token")
                .getAttribute("content")}`,
        },
    };



    // reference of the map HTML element
    const ref = useRef();
    // const initialMap = new Map({
    //     target: ref.current,
    //     layers: [
    //         // USGS Topo
    //         new TileLayer({
    //             source: new XYZ({
    //                 url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
    //             }),
    //         }),

    //         new VectorLayer({
    //             source: new VectorSource(),
    //         }),
    //     ],
    //     view: new View({
    //         projection: "EPSG:3857",
    //         center: [0, 0],
    //         zoom: 2,
    //     }),
    //     controls: [],
    // });

    //callback to get the Communes when city select Component changes
    const changeCommunes = (city) => {
        // app_url is Inertia shared prop
        axios.defaults.baseURL = app_url;
        console.log(app_url);

        //call the api route to get the data
        axios
            .get(`${city}/communes`)
            .then(function (response) {
                setCommunes(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };



    const submit = () => {
        console.log(data);
        $(".form").removeClass("form");
        post("/profile/event/add", {
            preserveScroll: true,
            forceFormData: true,
        });
    };



    return (
        <div className="col-md-9">
            <Form
                onFinish={submit}
                className="form"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
            >
                <div className="dashboard-title   fl-wrap">
                    <h3>Add Event</h3>
                </div>
                {/* profile-edit-container*/}
                <div className="profile-edit-container fl-wrap block_box">
                    {validationErrors && (
                        <div>
                            <div className="red-bg_color">
                                {validationErrors.days}
                            </div>
                            <div className="red-bg_color">
                                {validationErrors.photo_path}
                            </div>
                            <div className="red-bg_color">
                                {validationErrors.categorie}
                            </div>
                        </div>
                    )}

                    <div className="custom-form">
                        <Form.Item
                            label="Event Title"
                            validateStatus={validationErrors.name && "error"}
                            help={validationErrors.name}
                        >
                            <Input
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                prefix={<i className="fal  fa-briefcase" />}
                            />
                        </Form.Item>
                        <Row>
                            <Col span="12">
                                <Form.Item
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}
                                    label="Type / Category"
                                    validateStatus={
                                        validationErrors.categorie && "error"
                                    }
                                    help={validationErrors.categorie}
                                >
                                    <Select
                                        value={data.categorie}
                                        onChange={(e) =>
                                            setData("categorie", e)
                                        }
                                        prefix={
                                            <i className="fal fa-hamburger " />
                                        }
                                    >
                                        {categories.map((cat) => (
                                            <Option value={cat["id"]}>
                                                {cat["name"]}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span="12">
                                <Form.Item
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}
                                    label="prix"
                                    validateStatus={
                                        validationErrors.entry_price && "error"
                                    }
                                    help={validationErrors.entry_price}
                                >
                                    <InputNumber
                                        style={{ width: "100%" }}
                                        value={data.entry_price}
                                        onChange={(value) =>
                                            setData("entry_price", value)
                                        }
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="profile-edit-container fl-wrap block_box">
                    <div className="dashboard-title fl-wrap">
                        <h3>Timing</h3>
                    </div>
                    <div className="custom-form">
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 24 }}
                                    label="Dates"
                                    validateStatus={
                                        validationErrors.start_date ||
                                        validationErrors.end_date
                                            ? "error"
                                            : ""
                                    }
                                    help={
                                        (validationErrors.start_date ||
                                            validationErrors.end_date) &&
                                        validationErrors.start_date +
                                            validationErrors.end_date
                                    }
                                >
                                    <RangePicker
                                        value={[
                                            moment(data.start_date).isValid()
                                                ? moment(data.start_date)
                                                : "",
                                            moment(data.end_date).isValid()
                                                ? moment(data.end_date)
                                                : "",
                                        ]}
                                        onChange={(date) => {
                                            setData((data) => ({
                                                ...data,
                                                start_date: moment(
                                                    date[0]
                                                ).format("YYYY-MM-DD"),
                                                end_date: moment(
                                                    date[1]
                                                ).format("YYYY-MM-DD"),
                                            }));
                                        }}
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    labelCol={{ span: 10 }}
                                    wrapperCol={{ span: 14 }}
                                    label="Heur d'ouverture"
                                    validateStatus={
                                        validationErrors.start_time && "error"
                                    }
                                    help={validationErrors.start_time}
                                >
                                    <TimePicker
                                        value={
                                            moment(data.start_time).isValid()
                                                ? moment(data.start_time)
                                                : data.start_time
                                        }
                                        format={"HH:mm"}
                                        onChange={(timeString) => {
                                            setData(
                                                "start_time",
                                                moment(timeString).format(
                                                    "HH:mm"
                                                )
                                            );
                                        }}
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="profile-edit-container fl-wrap block_box">
                    <div className="dashboard-title fl-wrap">
                        <h3>Programme du l'evenemnt</h3>
                    </div>
                    <div className="custom-form">
                        <Schedule days={days} data={data} setData={setData} />
                    </div>
                </div>
                <div className="profile-edit-container fl-wrap block_box">
                    <div className="dashboard-title fl-wrap">
                        <h3>Localisation</h3>
                    </div>
                    <div className="custom-form">
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}
                                    label="Wilaya"
                                    validateStatus={
                                        validationErrors.city && "error"
                                    }
                                    help={validationErrors.city}
                                >
                                    <Select
                                        value={data.city}
                                        onChange={(value) => {
                                            setData((data) => ({
                                                ...data,
                                                city: value,
                                                commune: "",
                                            }));
                                            changeCommunes(value);
                                        }}
                                        prefix={
                                            <i className="fal fa-hamburger " />
                                        }
                                    >
                                        {cities.map((city) => (
                                            <Option value={city["code"]}>
                                                {city["name"]}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}
                                    label="Commune"
                                    validateStatus={
                                        validationErrors.commune && "error"
                                    }
                                    help={validationErrors.commune}
                                >
                                    <Select
                                        value={data.commune}
                                        onChange={(e) => {
                                            setData("commune", e);
                                        }}
                                        prefix={
                                            <i className="fal fa-hamburger " />
                                        }
                                    >
                                        {communes.map((cm) => (
                                            <Option value={cm["id"]}>
                                                {cm["name"]}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24">
                                <div
                                    style={{ width: "100%", height: "400px" }}
                                    ref={ref}
                                ></div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="profile-edit-container fl-wrap block_box">
                    <div className="dashboard-title fl-wrap">
                        <h3>Telecharger des images</h3>
                    </div>
                    <div className="custom-form">
                        {/*FilePond COmponent*/}
                        <FilePond

                            files={files}
                            onupdatefiles={setFiles}
                            {/* when files are uploaded and their foldername is back as input value */}
                            onprocessfiles={() => {
                                setData(
                                    "photo_path",
                                    document
                                        .querySelector('input[name="myname"]')
                                        .getAttribute("value")
                                );
                            }}
                            allowMultiple={false}
                            chunkUploads={true}
                            chuckSize={20000}
                            // maxFiles={3}
                            server={server}
                            {/*name of the input field*/}
                            name="myname"

                            value=""
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                    </div>
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(data.days_desc);
                    }}
                >
                    click
                </button>
                <button
                    className="btn color2-bg  float-btn"
                    disabled={processing}
                >
                    Send Listing
                    <i className="fal fa-paper-plane" />
                </button>
            </Form>
        </div>
    );
};

export default AddEvent;
