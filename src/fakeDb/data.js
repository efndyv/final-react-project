// Box Data

import image19 from "../assets/image/cardcarousel/Hanami_Night_Natural_White_1.avif";
import image20 from "../assets/image/cardcarousel/Lounger_Lift_Natural_White_Hanami_Night_Twilight_White.avif";
import image21 from "../assets/image/cardcarousel/MENS_TREE_RUNNER_NAVY_NIGHT_DARK_NAVY.avif";
import image22 from "../assets/image/cardcarousel/Trail_Runner_SWT_Blizzard_Hanami_Night_Blizzard.avif";
import image23 from "../assets/image/cardcarousel/8.avif";
import image24 from "../assets/image/cardcarousel/Tree_Dasher_2_Blizzard_Hanami_Night_Natural_White.avif";
import image25 from "../assets/image/cardcarousel/Tree_Lounger_Hanami_Night_Natural_White.avif";
import image26 from "../assets/image/cardcarousel/WOMENS_TREE_BREEZER_JET_BLACK_BLACK.avif";
import image27 from "../assets/image/cardcarousel/2.avif";
import image28 from "../assets/image/cardcarousel/1.avif";
import image29 from "../assets/image/cardcarousel/sear.avif";
import image30 from "../assets/image/cardcarousel/5.avif";

//Slider Data
import image40 from "../assets/image/slide/1.avif";
import image50 from "../assets/image/slide/2.avif";
import image55 from "../assets/image/slide/3.avif";
import image60 from "../assets/image/slide/4.avif";
import image65 from "../assets/image/slide/5.avif";
import image70 from "../assets/image/slide/6.avif";
import image75 from "../assets/image/slide/7.avif";
import image80 from "../assets/image/slide/8.avif";

//Products
import image90 from "../assets/image/detail/allbirds1.avif";
import image91 from "../assets/image/detail/allbirds2.avif";
import image92 from "../assets/image/detail/allbirds3.avif";
import image93 from "../assets/image/detail/allbirds4.avif";
import image94 from "../assets/image/detail/allbirds5.avif";
import image95 from "../assets/image/detail/allbirds6.avif";
import image96 from "../assets/image/detail/allbirds7.avif";
import image97 from "../assets/image/detail/allbirds8.avif";

import image98 from "../assets/image/detail/allbirds10.avif";
import image99 from "../assets/image/detail/allbirds11.avif";
import image100 from "../assets/image/detail/allbirds12.avif";
import image101 from "../assets/image/detail/allbirds13.avif";
import image102 from "../assets/image/detail/allbirds14.avif";
import image103 from "../assets/image/detail/allbirds15.avif";
import image104 from "../assets/image/detail/allbirds16.avif";
import image105 from "../assets/image/detail/allbirds17.avif";

import image106 from "../assets/image/detail/allbirds20.avif";
import image107 from "../assets/image/detail/allbirds21.avif";
import image112 from "../assets/image/detail/allbirds12.avif";
import image108 from "../assets/image/detail/allbirds23.avif";
import image109 from "../assets/image/detail/allbirds24.avif";
import image110 from "../assets/image/detail/allbirds25.avif";
import image111 from "../assets/image/detail/allbirds26.avif";
import image113 from "../assets/image/detail/allbirds17.avif";

const fakeSliderData = [
  {
    id: 100,
    img: image40,
  },
  {
    id: 101,
    img: image50,
  },
  {
    id: 102,
    img: image55,
  },
  {
    id: 103,
    img: image60,
  },
  {
    id: 104,
    img: image65,
  },
  {
    id: 105,
    img: image70,
  },
  {
    id: 106,
    img: image75,
  },
  {
    id: 107,
    img: image80,
  },
];

export const productsData = [
  {
    id: 31,
    link: "/women",
    title: "Women's Tree Dasher 2",

    price: "$135",
    img: image20,
    sliderData: fakeSliderData,
  },
  {
    id: 32,
    link: "/men",
    title: "Men's Tree Loungers",

    price: "$100",
    img: image21,
    sliderData: fakeSliderData,
  },
  {
    id: 33,
    link: "/women",
    title: "Women's Loungers Lift",

    price: "$105",
    img: image22,
    sliderData: fakeSliderData,
  },
  {
    id: 34,
    link: "/men",
    title: "Men's Trail Runners",

    price: "$140",
    img: image23,
    sliderData: fakeSliderData,
  },
  {
    id: 35,
    link: "/women",
    title: "Women's Tree Runners",

    price: "$98",
    img: image24,
    sliderData: fakeSliderData,
  },
  {
    id: 36,
    link: "/men",
    title: "Men's Tree Runners",

    price: "$98",
    img: image25,
    sliderData: fakeSliderData,
  },
  {
    id: 37,
    link: "/women",
    title: "Women's Tree Breezers",

    price: "$100",
    img: image26,
    sliderData: fakeSliderData,
  },
  {
    id: 38,
    link: "/men",
    title: "Men's Tree Runner Go",

    price: "$120",
    img: image19,
    sliderData: fakeSliderData,
  },
  {
    id: 39,
    link: "/men",
    title: "Men's Tree Dasher Relay",

    price: "$120",
    img: image30,
    sliderData: fakeSliderData,
  },
  {
    id: 40,
    link: "/men",
    title: "Men's Tree Toppers",

    price: "$120",
    img: image29,
    sliderData: fakeSliderData,
  },
  {
    id: 43,
    link: "/women",
    title: "Women's Tree Toppers ",
    price: "$110",
    img: image27,
    sliderData: fakeSliderData,
  },
  {
    id: 44,
    link: "/women",
    title: "Women's Tree Toppers 2",
    price: "$110",
    img: image28,
    sliderData: fakeSliderData,
  },
];

export const shoesData = [
  {
    id: 1,
    color: "gray",
    images: [
      image90,
      image91,
      image92,
      image93,
      image94,
      image95,
      image96,
      image97,
    ],
    colorImage: "rgb(166, 166, 166)",
  },
  {
    id: 2,
    color: "white",
    images: [
      image98,
      image99,
      image100,
      image101,
      image102,
      image103,
      image104,
      image105,
    ],
    colorImage: "rgb(255, 255, 255)",
  },
  {
    id: 3,
    color: "blue",
    images: [
      image106,
      image107,
      image112,
      image109,
      ,
      image111,
      image110,
      image108,
      image113,
    ],
    colorImage: "rgb(13, 103, 248)",
  },
];
