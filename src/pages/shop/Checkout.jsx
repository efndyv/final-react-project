import React, { useState } from "react";
import Swal from "sweetalert2";
import image from "../../assets/image/svg/download.svg";
import image3 from "../../assets/image/procecLogo.webp";
import image4 from "../../assets/image/svg/Leobank_logo.png";
import { Link } from "react-router-dom";
import image5 from "../../assets/image/payment/amex.Csr7hRoy.svg";
import image6 from "../../assets/image/payment/discover.C7UbFpNb.svg";
import image7 from "../../assets/image/payment/mastercard.1c4_lyMp.svg";
import image8 from "../../assets/image/payment/visa.sxIq5Dot.svg";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Default olaraq Credit Card seçilir
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    zip: "",
    state: "",
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvc: "",
    paypalEmail: "",
    afterpayPhone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    if (e.target.value.trim() !== "") {
      setErrors({ ...errors, [e.target.id]: false });
    }
  };

  const handleSubmit = () => {
    let newErrors = {};

    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "address",
      "city",
      "zip",
      "state",
      "country",
      "company",
      "apartment",
    ];

    if (paymentMethod === "creditCard") {
      requiredFields.push("cardNumber", "cardHolder", "expiry", "cvc");
    } else if (paymentMethod === "paypal") {
      requiredFields.push("paypalEmail");
    } else if (paymentMethod === "afterpay") {
      requiredFields.push("afterpayPhone");
    }

    requiredFields.forEach((key) => {
      if (!formData[key] || !formData[key].trim()) {
        newErrors[key] = `${key} is required`;
      }
    });

    if (paymentMethod === "creditCard" && formData.cardNumber) {
      const cardNumberWithoutDashes = formData.cardNumber.replace(/-/g, "");
      if (cardNumberWithoutDashes.length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
    }

    if (paymentMethod === "creditCard" && formData.cvc) {
      if (formData.cvc.length !== 3) {
        newErrors.cvc = "CVC must be 3 digits";
      }
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      Swal.fire({
        title: "Payment Successful!",
        text: "Your order has been placed successfully",
        icon: "success",
        confirmButtonText: "OK",
        draggable: true,
      });
    } else {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all required fields correctly",
        icon: "error",
        confirmButtonText: "OK",
        draggable: true,
      });
    }
  };
  return (
    <div className="checkout-container">
      <div className="barofb">
        <Link to={"/"}>
          <img src={image3} alt="Logo" />
        </Link>
      </div>
      <div className="borderDiv"></div>
      <p className="expressCheck">Express Checkout</p>
      <div className="payBtn">
        <button className="paypalBtn">
          <img src={image} alt="Paypal" />
        </button>
        <button className="leoBtn">
          <img src={image4} alt="Leobank" />
        </button>
      </div>
      <p className="expressCheck">OR</p>

      <div className="checkout-sections">
        <section className="contact-section">
          <h2>Contact</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={{ borderColor: errors.email ? "red" : "#ccc" }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Email is required
                </p>
              )}
            </div>
          </form>
        </section>

        <section className="delivery-section">
          <h2>Delivery</h2>
          <form>
            <div className="form-group">
              <select
                id="country"
                value={formData.country}
                onChange={handleChange}
                style={{ borderColor: errors.country ? "red" : "#ccc" }}
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
              </select>
              {errors.country && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Country is required
                </p>
              )}
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                style={{ borderColor: errors.firstName ? "red" : "#ccc" }}
              />
              {errors.firstName && (
                <p style={{ color: "red", fontSize: "12px" }}></p>
              )}
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                style={{ borderColor: errors.lastName ? "red" : "#ccc" }}
              />
              {errors.lastName && (
                <p style={{ color: "red", fontSize: "12px" }}></p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                style={{ borderColor: errors.company ? "red" : "#ccc" }}
              />
              {errors.company && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Company is required
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                style={{ borderColor: errors.address ? "red" : "#ccc" }}
              />
              {errors.address && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Address is required
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="apartment"
                placeholder="Apartment, suite, etc."
                value={formData.apartment}
                onChange={handleChange}
                style={{ borderColor: errors.apartment ? "red" : "#ccc" }}
              />
              {errors.apartment && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Apartment is required
                </p>
              )}
            </div>

            <div className="zipItem">
              <input
                type="text"
                id="city"
                placeholder="City"
                value={formData.city}
                onChange={(e) => {
                  const originalValue = e.target.value;
                  const value = originalValue.replace(/[^a-zA-Z\s]/g, "");

                  if (originalValue !== value) {
                    alert("Only letters are allowed.");
                  }

                  setFormData({ ...formData, city: value });

                  if (errors.city) {
                    setErrors({ ...errors, city: "" });
                  }
                }}
                style={{ borderColor: errors.city ? "red" : "#ccc" }}
              />

              <input
                type="text"
                id="zip"
                placeholder="ZIP code"
                maxLength={5}
                value={formData.zip}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Sadece rakamları al
                  setFormData({ ...formData, zip: value });

                  if (errors.zip) {
                    setErrors({ ...errors, zip: "" });
                  }
                }}
                style={{ borderColor: errors.zip ? "red" : "#ccc" }}
              />

              <select
                id="state"
                value={formData.state}
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value });

                  if (errors.state) {
                    setErrors({ ...errors, state: "" });
                  }
                }}
                style={{ borderColor: errors.state ? "red" : "#ccc" }}
              >
                <option value="">State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
              </select>
            </div>
          </form>
        </section>

        <section className="payment-section">
          <h2>Payment</h2>
          <div className="payment-methods">
            <label
              className={`payment-method ${
                paymentMethod === "creditCard" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
              />
              <div className="payment-method-content">
                <img src={image7} width={"50px"} alt="Mastercard" />
                <img src={image8} width={"50px"} alt="Visa" />
                <img src={image6} width={"50px"} alt="Discover" />
                <img src={image5} width={"50px"} alt="Amex" />
              </div>
            </label>

            <label
              className={`payment-method ${
                paymentMethod === "paypal" ? "active" : ""
              }`}
              style={{ background: "#ffc439", padding: "20px 92px 15px 15px" }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <div className="payment-method-content">
                <img src={image} alt="Paypal" />
              </div>
            </label>

            <label
              className={`payment-method ${
                paymentMethod === "afterpay" ? "active" : ""
              }`}
              style={{ background: "black", padding: "20px 92px 15px 15px" }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="afterpay"
                checked={paymentMethod === "afterpay"}
                onChange={() => setPaymentMethod("afterpay")}
              />
              <div className="payment-method-content">
                <img src={image4} alt="Leobank" width={"100px"} />
              </div>
            </label>
          </div>

          <form>
            {paymentMethod === "creditCard" && (
              <>
                <div className="form-group">
                  <input
                    type="text"
                    id="cardNumber"
                    maxLength={19}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    value={formData.cardNumber}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      value = value.slice(0, 16);

                      let formattedValue =
                        value.match(/.{1,4}/g)?.join("-") || "";

                      setFormData({ ...formData, cardNumber: formattedValue });

                      if (errors.cardNumber) {
                        setErrors({ ...errors, cardNumber: "" });
                      }
                    }}
                    style={{ borderColor: errors.cardNumber ? "red" : "#ccc" }}
                  />
                  {errors.cardNumber && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      Card number is required
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="cardHolder"
                    placeholder="Name on Card"
                    value={formData.cardHolder}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                      setFormData({ ...formData, cardHolder: value });

                      if (errors.cardHolder) {
                        setErrors({ ...errors, cardHolder: "" });
                      }
                    }}
                    style={{ borderColor: errors.cardHolder ? "red" : "#ccc" }}
                  />
                  {errors.cardHolder && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      Card holder name is required
                    </p>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={formData.expiry}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        value = value.slice(0, 4);

                        if (value.length > 2) {
                          value = value.slice(0, 2) + "/" + value.slice(2);
                        }

                        setFormData({ ...formData, expiry: value });

                        if (errors.expiry) {
                          setErrors({ ...errors, expiry: "" });
                        }
                      }}
                      style={{ borderColor: errors.expiry ? "red" : "#ccc" }}
                    />
                    {errors.expiry && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        Expiry date is required
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="cvc"
                      placeholder="CVC"
                      value={formData.cvc}
                      maxLength={3}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setFormData({ ...formData, cvc: value });

                        if (errors.cvc) {
                          setErrors({ ...errors, cvc: "" });
                        }
                      }}
                      style={{ borderColor: errors.cvc ? "red" : "#ccc" }}
                    />
                    {errors.cvc && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        CVC is required
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

            {paymentMethod === "paypal" && (
              <div className="form-group">
                <input
                  type="email"
                  id="paypalEmail"
                  placeholder="Enter your PayPal email"
                  value={formData.paypalEmail}
                  onChange={(e) => {
                    setFormData({ ...formData, paypalEmail: e.target.value });

                    if (errors.paypalEmail) {
                      setErrors({ ...errors, paypalEmail: "" });
                    }
                  }}
                  style={{ borderColor: errors.paypalEmail ? "red" : "#ccc" }}
                />
                {errors.paypalEmail && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    PayPal email is required
                  </p>
                )}
              </div>
            )}

            {paymentMethod === "afterpay" && (
              <div className="form-group">
                <input
                  type="text"
                  id="afterpayPhone"
                  placeholder="+994 (XX) XXX-XX-XX"
                  value={formData.afterpayPhone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");

                    if (!value.startsWith("994")) {
                      value = "994";
                    }

                    value = value.slice(0, 12);

                    let formattedValue = `+994 (${value.slice(
                      3,
                      5
                    )}) ${value.slice(5, 8)}-${value.slice(
                      8,
                      10
                    )}-${value.slice(10, 12)}`.trim();

                    setFormData({ ...formData, afterpayPhone: formattedValue });

                    if (errors.afterpayPhone) {
                      setErrors({ ...errors, afterpayPhone: "" });
                    }
                  }}
                  style={{ borderColor: errors.afterpayPhone ? "red" : "#ccc" }}
                />
                {errors.afterpayPhone && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    Phone number is required
                  </p>
                )}
              </div>
            )}

            <button
              type="button"
              className="pay-now-btn"
              onClick={handleSubmit}
            >
              Pay Now
            </button>
          </form>
        </section>
      </div>
      <div className="refundPolicy">
        <Link to={"/"}>Refund policy</Link>
        <Link to={"/"}>Privacy policy</Link>
        <Link to={"/"}>Terms of services</Link>
      </div>
      <p className="termsofService">
        By placing this order, you agree to our Terms of Service and understand
        our Privacy Policy.
      </p>
    </div>
  );
};

export default Checkout;
