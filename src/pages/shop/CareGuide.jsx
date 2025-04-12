

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CareGuide = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const careGuide = [
    {
      question: "Innovations",
      htmlContent:
        "<p>Lightweight, breathable, and effortlessly sleek, the Tree Breezer is your go-to flat. It has a carbon footprint of 2.7 kg CO2e. Learn more about carbon footprint labeling and our commitments to reduce our impact.</p><p>Best For: Day-to-night, warmer weather, everyday wear</p><p>Thermoregulating Material: Lightweight, breathable eucalyptus fiber provides next-level comfort</p><p>Versatile Design: Wear-with-everything classic style, great for the office</p><p>Sustainable Materials:</p><p>FSC-certified TENCEL™ Lyocell (eucalyptus tree fiber) upper</p><p>SweetFoam® midsole made with sugarcane-based green EVA</p><p>Castor bean oil-based insole foam</p><p>Where It’s Made: Vietnam. Learn more about our operations</p>",
    },
    {
      question: "Size & Fit Guidance",
      htmlContent:
        "<p>Breezers come in half sizes, and here's why: when it comes to ensuring the perfect fit, the most important area is the navicular bone (fancy talk for “the top of your foot”). Since the Breezers leave that area wide open, the toe, heel, and collar become extra important, and half sizes help optimize fit.</p><h2>Women's Breezers</h2>",
    },
    {
      question: "Care Guide",
      htmlContent:
        "<p>Remove the insoles.</p><p>Place shoes in a delicates bag (pro tip: a pillowcase works too).</p><p>Choose a gentle cycle with cold water & mild detergent.</p><p>Shake out any excess water & set aside to air dry</p><p>Shoes will regain their original shape with one or two wears. </p><p>Want the full refresh experience? Swap in some new insoles.</p>",
    },
    {
      question: "Shipping & Returns",
      htmlContent:
        "<p>Free shipping on orders over $75, and easy returns accepted within 30 days. Lightly worn shoes get donated to Soles4Souls. Visit our Returns Portal.*</p><p>Final Sale items cannot be returned or exchanged. Final Sale items include: gift cards, insoles, and items tagged final sale on our website and in Allbirds retail stores.</p><p>Need it sooner? See if the style you want is available at a store near you.</p>",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="care-container">
      {careGuide.map((item, index) => (
        <div key={index} className="care-item">
          <div
            className="care-question-container"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="care-question">{item.question}</h3>
            <FaChevronDown
              className={`care-icon ${activeIndex === index ? "rotate" : ""}`}
            />
          </div>
          {activeIndex === index && (
            <div>
              <p
                className="care-answer"
                dangerouslySetInnerHTML={{ __html: item.htmlContent }}
              ></p>
          
              {item.question === "Size & Fit Guidance" && (
                <table className="size-chart">
                  <tbody>
                    <tr>
                      <th>US</th>
                      <td>5</td>
                      <td>5.5</td>
                      <td>6</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>7.5</td>
                      <td>8</td>
                      <td>8.5</td>
                      <td>9</td>
                      <td>9.5</td>
                      <td>10</td>
                      <td>10.5</td>
                      <td>11</td>
                      <td>11.5</td>
                    </tr>
                    <tr>
                      <th>EU</th>
                      <td>35</td>
                      <td>35.5</td>
                      <td>36</td>
                      <td>36.5</td>
                      <td>39.5</td>
                      <td>40</td>
                      <td>41.5</td>
                      <td>42</td>
                      <td>42.5</td>
                      <td>43</td>
                      <td>43.5</td>
                      <td>44</td>
                      <td>44.5</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <th>UK</th>
                      <td>2.5</td>
                      <td>3.5</td>
                      <td>4.5</td>
                      <td>5.5</td>
                      <td>6.5</td>
                      <td>7.5</td>
                      <td>8.5</td>
                      <td>9.5</td>
                      <td>10</td>
                      <td>10.5</td>
                      <td>11</td>
                      <td>11.5</td>
                      <td>12</td>
                      <td>12.5</td>
                    </tr>
                    <tr>
                      <th>cm</th>
                      <td>24.5</td>
                      <td>25.0</td>
                      <td>25.5</td>
                      <td>26.0</td>
                      <td>26.5</td>
                      <td>27.0</td>
                      <td>27.5</td>
                      <td>28.0</td>
                      <td>28.5</td>
                      <td>29.0</td>
                      <td>29.5</td>
                      <td>30.0</td>
                      <td>30.5</td>
                      <td>31.0</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      ))}
      <div style={{ marginLeft: "20px" }}></div>
    </div>
  );
};

export default CareGuide;
