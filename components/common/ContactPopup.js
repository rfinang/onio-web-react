import { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import Select from "react-select";
import useForm from "../../hooks/useForm";
import { useAppContext } from "../../context/AppContext";
import { postContactApi } from "../../api";
import { ContactPopupStyles } from "../styles/block/ContactPopup";
import { customSelectStyles } from "../styles/common/CustomSelect";
import { Button } from "../ui";
const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;
function ContactPopup({ contactReason, dataGlobal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState();
  const [formValidation, setFormValidation] = useState();
  const { dispatch } = useAppContext();
  const reasons = ["I want to talk", "Investment", "Press"];
  const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email("email-invalid").required("email-required"),
    reason_for_contacting: yup.string().required(),
  });
  let whitepaper_url = dataGlobal?.whitepaper?.url;

  const { inputs, handleChange, updateInputs, clearForm } = useForm({
    first_name: "",
    last_name: "",
    company: "",
    job_title: "",
    email: "",
    message: "",
    reason_for_contacting: "",
    // remote control
    whitepaper: false,
    // invesment
    request_pitch_deck: false,
    request_a_meeting: false,
    // I want to talk
    about_my_project: false,
    about_other: false,
    project_status: "",
    estimated_annual_volume: "",
  });

  const reasonHandleChange = (e) => {
    const { value } = e;

    switch (value) {
      case reasons[0]:
        updateInputs({
          whitepaper: false,
          request_pitch_deck: false,
          request_a_meeting: false,
          reason_for_contacting: value,
        });

        break;
      // case reasons[1]:
      //   updateInputs({
      //     about_my_project: false,
      //     about_other: false,
      //     request_pitch_deck: false,
      //     request_a_meeting: false,
      //     reason_for_contacting: value,
      //     project_status: "",
      //     estimated_annual_volume: "",
      //   });
      //
      //   break;
      case reasons[1]:
        updateInputs({
          about_my_project: false,
          about_other: false,
          whitepaper: false,
          reason_for_contacting: value,
          project_status: "",
          estimated_annual_volume: "",
        });

        break;

      default:
        updateInputs({
          whitepaper: false,
          request_pitch_deck: false,
          request_a_meeting: false,
          about_my_project: false,
          about_other: false,
          project_status: "",
          estimated_annual_volume: "",
          reason_for_contacting: value,
        });
        break;
    }
    let errors = formValidation;
    if (errors) {
      delete errors['reason_for_contacting'];
      setFormValidation(errors);
    }

  };
  const customSelectChange = (e, name) => {
    const { value } = e;
    updateInputs({
      [name]: value,
    });
  };
  const handleValidation = async () => {
    let errors = {};
    let flag = false;
    await schema
      .validate(inputs, {
        abortEarly: false,
      })
      .then((valid) => {
        if (valid) {
          setFormValidation(null);
          flag = true;
        }
      })
      .catch((err) => {
        for (let el of err.inner) {
          errors = {
            ...errors,
            [el.path]: el.message,
          };
        }
        setFormValidation(errors);
      });
    return flag;
  };
  const handleValidationSingle = async (e) => {
    let { name, value } = e.target;
    let errors = formValidation;
    if (!errors) return;
    await schema
        .validate({
          [name]: value
        }, {
          abortEarly: false,
        })
        .then((valid) => {
          if (valid) {
            setFormValidation(null);
          }
        })
        .catch((err) => {
          let stillError = false;
          for (let el of err.inner) {
            if (el.path === name) {
              stillError = true
              errors = {
                ...errors,
                [el.path]: el.message,
              };
            }
          }
          if (!stillError) {
            delete errors[name];
          }
          setFormValidation(null);
          setFormValidation(errors);
        });
  };
  const onChange = async (e) => {
    handleChange(e);
    await handleValidationSingle(e);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const flag = await handleValidation();

    if (!flag) {
      setIsLoading(false);

      return;
    }
    const data = {
      ...inputs,
      whitepaper: inputs.whitepaper ? "Yes" : "",
      request_pitch_deck: inputs.request_pitch_deck ? "Yes" : "",
      request_a_meeting: inputs.request_a_meeting ? "Yes" : "",
      about_my_project: inputs.about_my_project ? "Yes" : "",
      about_other: inputs.about_other ? "Yes" : "",
    };

    const res = await postContactApi(data).catch((err) => {
      console.error(err);
      setFormError(err.response);
      return false;
    });

    if (res?.status === 200) {
      if (inputs.whitepaper && whitepaper_url) {
        window.location.assign(whitepaper_url, '_blank');
      }
      clearForm({
        whitepaper: false,
        request_pitch_deck: false,
        request_a_meeting: false,
        about_my_project: false,
        about_other: false,
      });
      setIsSuccess(true);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    const myModalEl = document.getElementById("contactModal");
    myModalEl.addEventListener("hidden.bs.modal", function () {
      if (isSuccess) {
        setIsSuccess(false);
      }
    });
  }, [isSuccess]);
  useEffect(() => {
    const myModalEl = document.getElementById("contactModal");
    myModalEl.addEventListener("hidden.bs.modal", function () {
      dispatch({
        type: "change_contact",
        value: "",
      });
    });
    switch (contactReason) {
      case "#contact-form-talk":
        updateInputs({
          reason_for_contacting: reasons[0],
        });
        break;

      case "#contact-form-my-project":
        updateInputs({
          reason_for_contacting: reasons[0],
          about_my_project: true,
        });
        break;
      // case "#contact-form-whitepaper":
      //   updateInputs({
      //     reason_for_contacting: reasons[1],
      //     whitepaper: true,
      //   });
      //   break;
      // case "#contact-form-batteryless-remote":
      //   updateInputs({
      //     reason_for_contacting: reasons[1],
      //   });
      //   break;
      case "#contact-form-investment":
        updateInputs({
          reason_for_contacting: reasons[1],
        });
        break;
      case "#contact-form-press":
        updateInputs({
          reason_for_contacting: reasons[2],
        });
        break;
      case "#contact-form-other":
        updateInputs({
          reason_for_contacting: reasons[0],
        });
        break;

      default:
        updateInputs({
          reason_for_contacting: "",
        });
        break;
    }
  }, [contactReason]);
  const reasonContacting = reasons.map((item) => ({ value: item, label: item }));
  return (
    <ContactPopupStyles
      className="modal fade modal-contact"
      id="contactModal"
      tabIndex={-1}
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div
              className={`popup--main popup--main--full popup--main--contactForm ${
                isSuccess ? "is-success" : ""
              }`}
            >
              <div className="popup--main-body">
                <div className="container">
                  <div className="row align-items-center mb-4 pb-sm-0 pb-1">
                    <div className="col-lg-2 col-sm-3 col-auto">
                      <h4 className="heading--block heading--block--title heading--block--white mb-0 d-block">
                        <span className="heading--block__text">Contact Us</span>
                      </h4>
                      <h4 className="heading--block heading--block--success heading--block--white mb-0">
                        <span className="heading--block__text">Success</span>
                      </h4>
                    </div>
                    <div className="col-auto ms-auto">
                      <button
                        className="popupClose popupClose--white"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <span className="popupClose__text">Close</span>
                        <span>
                          <img src="/icons/i-close.svg" alt="close" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="row row--form">
                    <div className="col-md-3 col-12 mb-5 pt-1">
                      <p className="desc--large mb-0 text-white">
                        Reach out to us and we will get back to you shortly
                      </p>
                    </div>
                    <div className="col-lg-8 col-md-9 offset-lg-1">
                      {formError && (
                        <ErrorStyles>
                          <p>
                            <strong>Shoot!</strong>
                            {formError.data.message}
                          </p>
                        </ErrorStyles>
                      )}
                      <form onSubmit={handleSubmit} className="formContact">
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div
                              className={`form-group form-group--required is-required form-group--white ${
                                formValidation?.first_name ? "error" : ""
                              }`}
                            >
                              <div className="form-group__inner">
                                <input
                                  type="text"
                                  placeholder="First Name"
                                  name={`first_name`}
                                  value={inputs.first_name}
                                  onChange={onChange}
                                />
                                <span className="form-group__required"></span>
                              </div>
                              <span className="form-group__alert required-alert">
                                Required Field
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div
                              className={`form-group form-group--required is-required form-group--white ${
                                formValidation?.last_name ? "error" : ""
                              }`}
                            >
                              <div className="form-group__inner">
                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  name={`last_name`}
                                  value={inputs.last_name}
                                  onChange={onChange}
                                />
                                <span className="form-group__required"></span>
                              </div>
                              <span className="form-group__alert required-alert">
                                Required Field
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="form-group form-group--white">
                              <div className="form-group__inner">
                                <input
                                  type="text"
                                  placeholder="Company"
                                  name={`company`}
                                  value={inputs.company}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="form-group form-group--white" data-offset=".4">
                              <div className="form-group__inner">
                                <input
                                  type="text"
                                  placeholder="Job Title"
                                  name={`job_title`}
                                  value={inputs.job_title}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div
                              className={`form-group form-group--required is-required form-group--white ${
                                formValidation?.email === "email-invalid" ? "error-email" : ""
                              } ${formValidation?.email === "email-required" ? "error" : ""}`}
                            >
                              <div className="form-group__inner">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  name={`email`}
                                  value={inputs.email}
                                  onChange={onChange}
                                />
                                <span className="form-group__required"></span>
                              </div>
                              <span className="form-group__alert required-alert">
                                Required Field
                              </span>
                              <span className="form-group__alert email-alert">Invalid Email</span>
                            </div>
                          </div>

                          <div className="col-sm-6 col-12">
                            <div
                              className={`form-group form-group--required is-required form-group--white ${
                                formValidation?.reason_for_contacting ? "error" : ""
                              }`}
                            >
                              <Select
                                styles={customSelectStyles}
                                instanceId="reason_for_contacting"
                                name={`reason_for_contacting`}
                                value={reasonContacting.find(
                                  (obj) => obj.value === inputs.reason_for_contacting
                                )}
                                onChange={reasonHandleChange}
                                options={reasons.map((item) => ({ value: item, label: item }))}
                                placeholder="Reason for Contacting"
                                isClearable={false}
                                components={{
                                  DropdownIndicator: () => (
                                    <svg
                                      width="27"
                                      height="16"
                                      viewBox="0 0 27 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                                        stroke="white"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  ),
                                }}
                              />

                              <span className="form-group__alert required-alert">
                                Required Field
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6 col-12 order-sm-0 order-1">
                            <div className="form-group form-group--white">
                              <textarea
                                placeholder="Message"
                                name={`message`}
                                value={inputs.message}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12 order-sm-1 order-0 mb-sm-0 mb-3">
                            {inputs.reason_for_contacting === reasons[0] && (
                              <>
                                <div className="form-group">
                                  <p className="text-white">About:</p>
                                  <div className="d-sm-flex flex flex-wrap">
                                    <div className="form-check form-check--white me-sm-2">
                                      <label className="form-check__label">
                                        <input
                                          type="checkbox"
                                          name={`about_my_project`}
                                          checked={inputs.about_my_project}
                                          value={inputs.about_my_project}
                                          onChange={handleChange}
                                        />
                                        <span className="form-check__checkbox"></span>
                                        <span className="form-check__text">My Project</span>
                                      </label>
                                    </div>
                                    <div className="form-check form-check--white me-sm-2">
                                      <label className="form-check__label">
                                        <input
                                          type="checkbox"
                                          name={`about_other`}
                                          checked={inputs.about_other}
                                          value={inputs.about_other}
                                          onChange={handleChange}
                                        />
                                        <span className="form-check__checkbox"></span>
                                        <span className="form-check__text">Other</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                {inputs.about_my_project === true && (
                                  <>
                                    <div className="form-group form-group--white">
                                      <Select
                                        styles={customSelectStyles}
                                        instanceId="project_status"
                                        name={`project_status`}
                                        value={reasonContacting.find(
                                          (obj) => obj.value === inputs.project_status
                                        )}
                                        onChange={(e) => customSelectChange(e, "project_status")}
                                        options={[
                                          {
                                            value: "Idea/Evaluation",
                                            label: "Idea/Evaluation",
                                          },
                                          {
                                            value: "Proof of Concept",
                                            label: "Proof of Concept",
                                          },
                                          {
                                            value: "Completed Product",
                                            label: "Completed Product",
                                          },
                                          {
                                            value: "Product in Market",
                                            label: "Product in Market",
                                          },
                                        ]}
                                        placeholder="Project status"
                                        isClearable={false}
                                        components={{
                                          DropdownIndicator: () => (
                                            <svg
                                              width="27"
                                              height="16"
                                              viewBox="0 0 27 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                                                stroke="white"
                                                strokeWidth="2"
                                              />
                                            </svg>
                                          ),
                                        }}
                                      />
                                    </div>
                                    <div className="form-group form-group--white">
                                      <Select
                                        styles={customSelectStyles}
                                        instanceId="estimated_annual_volume"
                                        name={`estimated_annual_volume`}
                                        value={reasonContacting.find(
                                          (obj) => obj.value === inputs.estimated_annual_volume
                                        )}
                                        onChange={(e) =>
                                          customSelectChange(e, "estimated_annual_volume")
                                        }
                                        options={[
                                          {
                                            value: "< 500K",
                                            label: "<500K",
                                          },
                                          {
                                            value: "1M - 10M",
                                            label: "1M - 10M",
                                          },
                                          {
                                            value: "> 10M",
                                            label: "> 10M",
                                          },
                                        ]}
                                        placeholder="Estimated Annual Volume"
                                        isClearable={false}
                                        components={{
                                          DropdownIndicator: () => (
                                            <svg
                                              width="27"
                                              height="16"
                                              viewBox="0 0 27 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                                                stroke="white"
                                                strokeWidth="2"
                                              />
                                            </svg>
                                          ),
                                        }}
                                      />
                                    </div>
                                  </>
                                )}
                              </>
                            )}
                            {/*{inputs.reason_for_contacting === reasons[1] && whitepaper_url && (*/}
                            {/*  <div className="form-group">*/}
                            {/*    <p className="text-white">Select applicable:</p>*/}
                            {/*    <div className="d-sm-flex flex flex-wrap">*/}
                            {/*      <div className="form-check form-check--white me-sm-2">*/}
                            {/*        <label className="form-check__label">*/}
                            {/*          <input*/}
                            {/*            type="checkbox"*/}
                            {/*            name={`whitepaper`}*/}
                            {/*            checked={inputs.whitepaper}*/}
                            {/*            value={inputs.whitepaper}*/}
                            {/*            onChange={handleChange}*/}
                            {/*          />*/}
                            {/*          <span className="form-check__checkbox"></span>*/}
                            {/*          <span className="form-check__text">Download Whitepaper</span>*/}
                            {/*        </label>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*)}*/}
                            {inputs.reason_for_contacting === reasons[1] && (
                              <div className="form-group">
                                <p className="text-white">Select applicable:</p>
                                <div className="form-check form-check--white">
                                  <label className="form-check__label">
                                    <input
                                      type="checkbox"
                                      name={`request_pitch_deck`}
                                      checked={inputs.request_pitch_deck}
                                      value={inputs.request_pitch_deck}
                                      onChange={handleChange}
                                    />
                                    <span className="form-check__checkbox"></span>
                                    <span className="form-check__text">Request Pitch-Deck</span>
                                  </label>
                                </div>
                                <div className="form-check form-check--white">
                                  <label className="form-check__label">
                                    <input
                                      type="checkbox"
                                      name={`request_a_meeting`}
                                      checked={inputs.request_a_meeting}
                                      value={inputs.request_a_meeting}
                                      onChange={handleChange}
                                    />
                                    <span className="form-check__checkbox"></span>
                                    <span className="form-check__text">Request a Meeting</span>
                                  </label>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-12 mb-0">
                            <Button
                              disabled={isLoading}
                              type="submit"
                              variant="outline"
                              size="lg"
                              fullWidth={true}
                              loading={isLoading}
                              className="js-link--btn bg-white text-dark border-white"
                            >
                              Send Inquiry
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row row--success">
                    <div className="col-lg-4 col-sm-6 col-12">
                      <p className="mb-0 desc--large text-white">
                        Thanks for contacting us. One of our team will be in touch shortly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactPopupStyles>
  );
}

export default ContactPopup;
