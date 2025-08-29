import React, {useRef, useState} from "react";
import { HomeContactStyles } from "../styles/home/HomeContact";
import Select from "react-select";
import {customSelectStyles} from "../styles/common/CustomSelect";
import * as yup from "yup";
import useForm from "../../hooks/useForm";
import {postNewsletterApi} from "../../api";
import styled from "styled-components";

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

function HomeContact({ data, newsletterRef, customClass = "" }) {
  if (!data) return null;
  const { label, title } = data;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState();
  const [formValidation, setFormValidation] = useState();

  // const newsletterRef = useRef(null);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("email-invalid").required("email-required"),
    company: yup.string().required(),
  });

  const { inputs, handleChange, updateInputs, clearForm } = useForm({
    name: "",
    company: "",
    email: "",
    contact_when_datasheet_ready: false,
  });

  const handleValidationSingle = async (e) => {
    let { name, value, type } = e.target;
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
      contact_when_datasheet_ready: inputs.contact_when_datasheet_ready ? "Yes" : "",
    };

    const res = await postNewsletterApi(data).catch((err) => {
      console.error(err);
      setFormError(err.response);
      return false;
    });

    if (res?.status === 200) {
      clearForm({
        contact_when_datasheet_ready: false,
      });
      setIsSuccess(true);
      newsletterRef.current.scrollIntoView();
    }

    setIsLoading(false);
  };

  return (
    <HomeContactStyles>
      <div className={`contactBlock contactBlock--home ${customClass}`} ref={newsletterRef}>
        <div
            className={`newsletterForm ${
                isSuccess ? "is-success" : ""
            }`}
        >
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 mb-md-0 mb-4">
              <h4 className="heading--block heading--block--title mb-0 d-inline-block mb-4 js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
              <h4 className="heading--block heading--block--success mb-0 d-inline-block mb-4 js-animation--fade">
                <span className="heading--block__text">Success</span>
              </h4>
            </div>
          </div>
          <div className="row row--form">
            <div className="col-md-4 col-lg-6 col-12 mb-md-0 mb-4">
              <h2 className="h2 pt-1 js-animation--chars">{title}</h2>
            </div>
            <div className="col-xxl-4 col-lg-5 col-md-6 col-12 offset-lg-1 offset-md-1">
              {formError && (
                  <ErrorStyles>
                    <p>
                      <strong>An error has occurred. Please try again.</strong>
                      {formError.data.message}
                    </p>
                  </ErrorStyles>
              )}
              <form onSubmit={handleSubmit} className="formNewsletter">
                <div className="row">
                  <div className="col-12">
                    <div
                        className={`form-group form-group--required is-required form-group--silver ${
                            formValidation?.name ? "error" : ""
                        }`}
                    >
                      <div className="form-group__inner">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name={`name`}
                            value={inputs.name}
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
                  <div className="col-12">
                    <div className={`form-group form-group--required is-required form-group--silver ${
                        formValidation?.company ? "error" : ""
                    }`}>
                      <div className="form-group__inner">
                        <input
                            type="text"
                            placeholder="Company"
                            name={`company`}
                            value={inputs.company}
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
                  <div className="col-12">
                    <div
                        className={`form-group form-group--required is-required form-group--silver ${
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
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <div className="d-sm-flex flex flex-wrap">
                        <div className="form-check form-check-newsletter me-sm-2">
                          <label className="form-check__label">
                            <input
                                type="checkbox"
                                name={`contact_when_datasheet_ready`}
                                checked={inputs.contact_when_datasheet_ready}
                                value={inputs.contact_when_datasheet_ready}
                                onChange={onChange}
                            />
                            <span className="form-check__checkbox_black"></span>
                            <span className="form-check__text">Give me a nod when the datasheet is ready!</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-12 mb-0">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="btn w-100 btn--large btn--bg btn--bg--white js-link--btn js-animation--fade is-animation-loading"
                    >
                      <span className="js-link__text">Subscribe Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row row--success">
            <div className="col-lg-4 col-sm-6 col-12">
              <p className="mb-0 desc--large">
                A huge high-five for subscribing to our newsletter! We really appreciate it - stay tuned!
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </HomeContactStyles>
  );
}

export default HomeContact;
