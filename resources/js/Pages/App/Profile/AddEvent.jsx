import { useForm, usePage } from "@inertiajs/inertia-react";

import { FilePond, registerPlugin } from "react-filepond";
import moment from "moment";
import { useState } from "react";
// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";
import {
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    TimePicker,
} from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddEvent = () => {
    // function later() {
    //     return new Promise(function (resolve) {
    //         setTimeout(resolve, 1000);
    //     });
    // }
    let { categories, AHMED, errors: validationErrors } = usePage().props;

    const [files, setFiles] = useState([]);
    categories = JSON.parse(categories);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        categorie: "",
        photo_path: "",
        entry_price: "",
        start_date: "",
        end_date: "",
        start_time: null,
        days: null,
    });

    const server = {
        url: "/uploads",
        headers: {
            "X-CSRF-TOKEN": `${document
                .getElementById("meta_token")
                .getAttribute("content")}`,
        },
    };

    // const firstRenderRef = useRef(true)
    // useEffect(async () => {
    //     if (firstRenderRef.current) {
    //         firstRenderRef.current = false;
    //     } else {
    //         try {
    //             await setData('photo_path',$('input[name="myname"]').value)
    //
    //         } catch (e) {
    //             console.log('files changes but no photo path')
    //         }
    //     }
    // }, [files])

    const submit = () => {
        $(".form").removeClass("form");
        post("/profile/event/add", {
            preserveScroll: true,
            forceFormData: true,
        });
    };
    const CategoriesOptions = () => {
        return categories.map((cat) => <Option>{cat["name"]}</Option>);
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
                                    label="price"
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

                                            console.log(date);
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
                    {/*<div className="col-md-4">*/}
                    {/*    <label>Date Debut</label>*/}
                    {/*    <DatePicker onSelect={moment(data.start_date, "DD-MM-YYYY").toDate()}*/}
                    {/*                onChange={(date) => setData("start_date", moment(date).format("DD-MM-YYYY"))}*/}
                    {/*                customInput={*/}
                    {/*                    <div className="listsearch-input-item clact date-container">*/}
                    {/*                        <span className="iconn-dec"><i className="fal fa-calendar"/></span>*/}

                    {/*                        <input type="text" placeholder="Event Date" value={data.start_date}/>*/}
                    {/*                        <span className="clear-singleinput"><i className="fal fa-times"*/}
                    {/*                                                               onClick={() => setData("start_date", "")}/></span>*/}
                    {/*                    </div>*/}
                    {/*                }*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                    {/*    <label>Ouverture</label>*/}
                    {/*    <DatePicker onSelect={moment(data.start_time, "DD-MM-YYYY").toDate()}*/}
                    {/*                onChange={(date) => setData("start_time", moment(date).format("DD-MM-YYYY"))}*/}
                    {/*                customInput={*/}
                    {/*                    <div className="listsearch-input-item clact date-container">*/}
                    {/*                        <span className="iconn-dec"><i className="fal fa-calendar"/></span>*/}

                    {/*                        <input type="text" placeholder="Event Date" value={data.start_time}/>*/}
                    {/*                        <span className="clear-singleinput"><i className="fal fa-times"*/}
                    {/*                                                               onClick={() => setData("start_time", "")}/></span>*/}
                    {/*                    </div>*/}
                    {/*                }*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>

                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
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
                    name="myname"
                    value=""
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(data.start_date, data.end_date);
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
