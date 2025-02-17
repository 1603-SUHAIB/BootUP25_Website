import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Nontechnicalcards.css";

const cards = [
{
  link: "#",
    cover: "https://media-hosting.imagekit.io//553a2a7e47a54bae/Valorant-logo%20(4).png?Expires=1834380331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1ZPjYFJqV6RfSPapVXLGmrwVTZJH6ym6-SbzDve-1tCnMBLavEpEyt-gPIUN6vSMmq9bPsh3-aCpFuFYVqN-VJtCOXl16zxRVmGkSgR0~7wUuUMSIX2NbgLC0iPYMQ-0pTlbNZd171swr9-2-2KYB~qBlqVcLcAQCr476Uo6D6EWf2VkiTdn2s-DASOBhswS66APodX7S3e9A11Hsw-u6O20ym9xbhyTmv8Pzw5ik2VvFaeDDsfmQ97RlJ6G~pCUARhmo94WLY6LKFnovbQ-qHQrjR~Rdql9khipQRacArzSquyjJO-uNuHRtD12kST7HUaRocbVOFuWS0WizC4lBA__",
    title: "https://media-hosting.imagekit.io//2a85e77895f8412a/Valorant-logo__5_-removebg-preview.png?Expires=1834380331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zcMeN~HmBi1m59MmyHVAAw00y-~s--1xwzF5lfcf6YCMP9W7lSuDzp3wf33WSyAQdmeQbCbpUEmRE0oXyp7x6CtMrktNcRk1bR3G~gDiTBKiwMYwiFO8W3RmhocCnKXb0TNEqy0WxAMhE5yVrUP~qyDNqvTeWULNqVTYCXZGcDNJtc~5drfAUwNjite7171rz6m3vcoaGz~mEJkNUT5GD-J9eo7DLmlT4rlK76Q1iC-ftpN2aEL2lhu3doAOABCzY7KLX0MZ1qKCaiJ2FVpZTO-wVgYzjOKANfUzcigHcWj07PUAhe8jhf1G7CF1VS6T-EjFak59f3fZ1utw5PRI4w__", 
    character: "https://media-hosting.imagekit.io//4ce7c1eddbf04d63/Valorant-logo__6_-removebg-preview.png?Expires=1834380331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=06XHYqshJNvv4FeOlDDRbRce213H4DMfNACA4958ktDpALaWCijNHgfThtR6QHTkvw2vSrvGQcEShf3jwN~8oNIvT95sJjljEJZSo3Xxe117~1xL1A-TOYSluj0NsjXTRpU2lPCs0qWpaSvq~eWSihqOQxyEhuqwIwjMHY9xJHrMTYi~e2IhNc-a-abojblaoFKgu3oM11TRFHh2pG131jZNeUP9qcniAsxMFGsRrtnJ6OkbQs-v5LEHrAiBxGruUM~L2u-LzFn~D76m~49ZXFibkh-H5x4~q1QCt14jR~K86nIUhoXrrel4MTv~Krjee61olk~aI-ZbSkqzu3RxxA__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//f9d7916e1ab3423f/Valorant-cover.png?Expires=1834377259&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uRnHY1cOZoEjtA5g7w4r7FlNhiiMDTt6eE06194pdlYkS9PHmtJu3DHIrzLN9SpSgw~2~TFRSHunnb3nvoY9BO14pfKgbGT7ay2iQYO~Ltl4spWwgoFJVWW60Gpy2BtDBEXfl~qBN2eVpyGFtUYSZ3KvUwHJ8ObE2VCQoxGj9R6Wv9JbByCjV3kIXuA8EbPjCZk9kEc4aYTY5JeHh--pM4lYjTInRtlt9qTEwtWDd7-URjPMDTPxsqWNadegZ935dxh4EuY8uUgQk0m-PTn-yMumyopdUSuPgE1jo4VhAA6ROzB~I6g-Jj~v2guybSO6AEbG5IViNsDNJiZl6BS~5w__",
    title: "https://media-hosting.imagekit.io//4c01d3d58d0241f1/Valorant-logo__1_-removebg-preview.png?Expires=1834378145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=THWbef0lVie0NBgaMRR9rxDHBVC~WisTu1MX0xO2LqMDfJ7ZjOkUAJAoCd-WZbyH4W4rquWEYaBy07Ww40b4pFlB1EoQ83CPRlL4o6mxh1z7fFRCWWC1m28vmYgN2cfkZIeGee-Wk89XYlBjBDYmVvBhF4lN9g~pxJVAq3BpyBYw93iMaWT2Dyvo-keLg1E-kkszW7Rv-yf1f8KihGqFTwYaiSWdRGoKxkWrHDJ4WScMXi14kS7O2RbSaMoQ8o5beXAl5xWLm4-GrpmS89fgG60gnvrs6lto24RPrYVgq8hVIUaqjrCnisz7nl5hJ~umzkWJCVDw9en0DnAiuqe~4w__", 
    character: "https://media-hosting.imagekit.io//f37fd9a3a8304e9f/Valorant-character-removebg-preview.png?Expires=1834377259&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gkpcLPL0n6ealZ3WC5mKeDZQDveJ83ZHltrSv9~XRORHeXAGah6BlJjsiy75BkRgoce6qvPxIxBSFSysEbo3KLG0tYsiA~hZ163OtuX3Mk5ARRkVnzpPAfyMuMYHXLWou6cSRBRdu9Ggr0tNQlDRQbG1gPYnEUC-IIbK6MipEgav3FX-GoGXqLyIvhptPHcO-tQ6c33LqimV~YcdVDM8stIhTcDKkPUYtI5jAKH5DADIlMhNX4XMDp8Pxgxznotc3Q-ABXVhSZKqIm~qhuMMXzUMK2OP0Zy1HNlbUJLHzyrv-WsjgpqbwwzXut~9ZjdKwB25cNJc8POIeVrKWv4uqQ__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//46a41cfb46e442bf/1.png?Expires=1834379605&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FZaK2RrWS~AGGFUt-RtuYsEvsqPzDXc0Kh0SpRaQDavG54OqpK4RYZ8PtHAl4yKcFlusBhcm1QzTEazCw~Yt3YCHFZcuaK8SgS1ZKto2SK-Xcu8AmKhFWzOCNuKEFnEF11nQdkRpgqsyC0pUBJw-S-DUzap5a47yadl0BjhvuKBd079zolHg-Q3iJUPZEGu5qzb8NhZ0TJ4-zsAJk1rJndXITTQuncZaBocMlelvhdqXRa5WcKEfRfbkur9d7jmiYb6naa7ZohcRfjbQJHaNTSJgu9wF9kCe7xWY9vrp8TZqL4ZU~lfVjoTFCI98nRWGCEUVM-oTBFah3XrrhoS9Yg__",
    title: "https://media-hosting.imagekit.io//3f658d5ed7ba4047/Valorant-logo__2_-removebg-preview.png?Expires=1834379774&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lqaymQvs4tpvsEVxZZjWqGOWGkelscL-RaagOgIQYQzZzVGznzvx7qp8LYwH7nw7UjqmxwuHnIhsX4wcQcnpziYKAxVlW425ULqyePvfMeo89mkelsrom4hvHw~slJoDh5WOJiqBpW1~VBGri7MvCBXKFdl0EylKNxeIWwfIVLegXKP-hROdHmq37j4OyqxauGi9G~qArSa5T2SnFBE7dILrxl4a4CJz6kDvrYwyhZeeiJhq6UFCeMdoyeNq4LLQdXWhy2TPfbaeTntbMfrKdcrFgjgOL955FLMfIbNxRcm-JKrIi~SEkBYDme4xnZ2HLXB66EVF3JCAk2loFM-94Q__", 
    character: "https://media-hosting.imagekit.io//faae9baf4bae400c/Valorant-logo__3_-removebg-preview.png?Expires=1834379971&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WWFX8Ed5yyPGRsslKH0bsQi5iZR2pP-1pUmmWVB5tDBWD2JC2g5hIzIeKe7xtmlbUFy3owCo2M1kjUkGIRtw25XKd1laJBkL6fNhR~~d~X5vf9kr8yvdpJpg8t5c6Wn0SFhK9T1TvTQVSgZoNW9X8nuipdb4qP4-WXVoaiVUa-Sov2YqzFoxjKzrY8SThqxWtTlYeRhYoioauuCDJ7Yq1fAviTt0QrYYf9k6TXn-0yDL9-b7UyfUvJQoEeD5WUfsQ7758~WSJi4wQ9DxL2WIjoCF0XnKKIkTxQodkTeOxXdV7h4KUFccIfzz02WhCIn763hg0B9mMAal1F6yIvzdlw__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//c54c61e1bd564d5d/image.jpg?Expires=1834325462&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nODJ76IdlPO7NMr22NyGMrfOeDb6ZWheq~aVp6ss1ZlpqT5~J738tS8h3PIL1f~k6tDaW3Tw6W9ub-HWh-R8jQI9GfAe4a1Rd13J9Sb-x4vjNB6R6rk33cMDtdYcAsXZssd5wY01Ed~KmfUyg9JY6a5qjJQpltjH5EwaB4SVv5mj1FmV0PLp1uRKYidBEDXPjcPb5qlmmTUX0BC6OGndMszeQxVqSlJjGAiWIoF6yYvVDahfctpwXn2xza3Qxm-hsaodO7m~Eba-L~SMdJdjixVGOc4SlYmIaMqotJ5G7Cjg2TvRP8cYFCa-RWVXByLM8IrtruvsXJcxVAz-93lKXQ__",
    title: "https://media-hosting.imagekit.io//d12651de158f4897/Logo.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mfc4g4iY-KopVvZZTZ7OFoyZMwscxY0N2IGlEQC4gvriFahiP5eIybtzWCGzlyq5y7znPj0rhk-95CUedMssqxQ96QR0R78hdHlfrSEADVvYiJBF1nmwZSrdcYQlh9ETbh1OT1vk2XZf4vQYWIIW8XnUd7GSI0SAlzp5OSOUeCfgJylbAp9jP8hPBWSn4ViT3xFPXQ6wg24zoyWjxXWYB4j7AIr73IVgWBb1vXOhk~wBO0S4lHtaKHFSr~oIS1-ljbkDA9b2M9hsjIVw-EP2RTUK5heSZH8M51jzwnQDyJEZsFnckpkGXefRb3PB46twrqwLQiSiEQbL3d0APri6cw__", 
    character: "https://media-hosting.imagekit.io//f56ecb0855ed4d30/popimage.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1tJJQtabgMvhwofKd1jZqs2Zv4T6KqYCZCYhiXConug5NYBvOGHTcsNjKjX7jDOA3oeEuKAnl59EkK-gq5kMnl9-Fq~bkpALJYEMo42vqq8ri02gTTVhe7c0CBRiPrRcDptIDVqHHFt3ePO4hvWWyyiNpra5Tq5UoRk7IWpy8qj0tnySPF-cJTvDCOwvouHRk2UR-HO4kaglvSrBNRHGbOLKDD8r0YT5LITZgwIgY6qCBwH8TRefQWYgYQUXNE1l8DZw0iOOwdqiKUPnIdL1dKV106GLs5ClPN7LULOEs-ikpCApeyalVCht7OKlNBxt-YJEkJANaM0EHO930GdaPA__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//c54c61e1bd564d5d/image.jpg?Expires=1834325462&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nODJ76IdlPO7NMr22NyGMrfOeDb6ZWheq~aVp6ss1ZlpqT5~J738tS8h3PIL1f~k6tDaW3Tw6W9ub-HWh-R8jQI9GfAe4a1Rd13J9Sb-x4vjNB6R6rk33cMDtdYcAsXZssd5wY01Ed~KmfUyg9JY6a5qjJQpltjH5EwaB4SVv5mj1FmV0PLp1uRKYidBEDXPjcPb5qlmmTUX0BC6OGndMszeQxVqSlJjGAiWIoF6yYvVDahfctpwXn2xza3Qxm-hsaodO7m~Eba-L~SMdJdjixVGOc4SlYmIaMqotJ5G7Cjg2TvRP8cYFCa-RWVXByLM8IrtruvsXJcxVAz-93lKXQ__",
    title: "https://media-hosting.imagekit.io//d12651de158f4897/Logo.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mfc4g4iY-KopVvZZTZ7OFoyZMwscxY0N2IGlEQC4gvriFahiP5eIybtzWCGzlyq5y7znPj0rhk-95CUedMssqxQ96QR0R78hdHlfrSEADVvYiJBF1nmwZSrdcYQlh9ETbh1OT1vk2XZf4vQYWIIW8XnUd7GSI0SAlzp5OSOUeCfgJylbAp9jP8hPBWSn4ViT3xFPXQ6wg24zoyWjxXWYB4j7AIr73IVgWBb1vXOhk~wBO0S4lHtaKHFSr~oIS1-ljbkDA9b2M9hsjIVw-EP2RTUK5heSZH8M51jzwnQDyJEZsFnckpkGXefRb3PB46twrqwLQiSiEQbL3d0APri6cw__", 
    character: "https://media-hosting.imagekit.io//f56ecb0855ed4d30/popimage.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1tJJQtabgMvhwofKd1jZqs2Zv4T6KqYCZCYhiXConug5NYBvOGHTcsNjKjX7jDOA3oeEuKAnl59EkK-gq5kMnl9-Fq~bkpALJYEMo42vqq8ri02gTTVhe7c0CBRiPrRcDptIDVqHHFt3ePO4hvWWyyiNpra5Tq5UoRk7IWpy8qj0tnySPF-cJTvDCOwvouHRk2UR-HO4kaglvSrBNRHGbOLKDD8r0YT5LITZgwIgY6qCBwH8TRefQWYgYQUXNE1l8DZw0iOOwdqiKUPnIdL1dKV106GLs5ClPN7LULOEs-ikpCApeyalVCht7OKlNBxt-YJEkJANaM0EHO930GdaPA__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//c54c61e1bd564d5d/image.jpg?Expires=1834325462&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nODJ76IdlPO7NMr22NyGMrfOeDb6ZWheq~aVp6ss1ZlpqT5~J738tS8h3PIL1f~k6tDaW3Tw6W9ub-HWh-R8jQI9GfAe4a1Rd13J9Sb-x4vjNB6R6rk33cMDtdYcAsXZssd5wY01Ed~KmfUyg9JY6a5qjJQpltjH5EwaB4SVv5mj1FmV0PLp1uRKYidBEDXPjcPb5qlmmTUX0BC6OGndMszeQxVqSlJjGAiWIoF6yYvVDahfctpwXn2xza3Qxm-hsaodO7m~Eba-L~SMdJdjixVGOc4SlYmIaMqotJ5G7Cjg2TvRP8cYFCa-RWVXByLM8IrtruvsXJcxVAz-93lKXQ__",
    title: "https://media-hosting.imagekit.io//d12651de158f4897/Logo.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mfc4g4iY-KopVvZZTZ7OFoyZMwscxY0N2IGlEQC4gvriFahiP5eIybtzWCGzlyq5y7znPj0rhk-95CUedMssqxQ96QR0R78hdHlfrSEADVvYiJBF1nmwZSrdcYQlh9ETbh1OT1vk2XZf4vQYWIIW8XnUd7GSI0SAlzp5OSOUeCfgJylbAp9jP8hPBWSn4ViT3xFPXQ6wg24zoyWjxXWYB4j7AIr73IVgWBb1vXOhk~wBO0S4lHtaKHFSr~oIS1-ljbkDA9b2M9hsjIVw-EP2RTUK5heSZH8M51jzwnQDyJEZsFnckpkGXefRb3PB46twrqwLQiSiEQbL3d0APri6cw__", 
    character: "https://media-hosting.imagekit.io//f56ecb0855ed4d30/popimage.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1tJJQtabgMvhwofKd1jZqs2Zv4T6KqYCZCYhiXConug5NYBvOGHTcsNjKjX7jDOA3oeEuKAnl59EkK-gq5kMnl9-Fq~bkpALJYEMo42vqq8ri02gTTVhe7c0CBRiPrRcDptIDVqHHFt3ePO4hvWWyyiNpra5Tq5UoRk7IWpy8qj0tnySPF-cJTvDCOwvouHRk2UR-HO4kaglvSrBNRHGbOLKDD8r0YT5LITZgwIgY6qCBwH8TRefQWYgYQUXNE1l8DZw0iOOwdqiKUPnIdL1dKV106GLs5ClPN7LULOEs-ikpCApeyalVCht7OKlNBxt-YJEkJANaM0EHO930GdaPA__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//c54c61e1bd564d5d/image.jpg?Expires=1834325462&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nODJ76IdlPO7NMr22NyGMrfOeDb6ZWheq~aVp6ss1ZlpqT5~J738tS8h3PIL1f~k6tDaW3Tw6W9ub-HWh-R8jQI9GfAe4a1Rd13J9Sb-x4vjNB6R6rk33cMDtdYcAsXZssd5wY01Ed~KmfUyg9JY6a5qjJQpltjH5EwaB4SVv5mj1FmV0PLp1uRKYidBEDXPjcPb5qlmmTUX0BC6OGndMszeQxVqSlJjGAiWIoF6yYvVDahfctpwXn2xza3Qxm-hsaodO7m~Eba-L~SMdJdjixVGOc4SlYmIaMqotJ5G7Cjg2TvRP8cYFCa-RWVXByLM8IrtruvsXJcxVAz-93lKXQ__",
    title: "https://media-hosting.imagekit.io//d12651de158f4897/Logo.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mfc4g4iY-KopVvZZTZ7OFoyZMwscxY0N2IGlEQC4gvriFahiP5eIybtzWCGzlyq5y7znPj0rhk-95CUedMssqxQ96QR0R78hdHlfrSEADVvYiJBF1nmwZSrdcYQlh9ETbh1OT1vk2XZf4vQYWIIW8XnUd7GSI0SAlzp5OSOUeCfgJylbAp9jP8hPBWSn4ViT3xFPXQ6wg24zoyWjxXWYB4j7AIr73IVgWBb1vXOhk~wBO0S4lHtaKHFSr~oIS1-ljbkDA9b2M9hsjIVw-EP2RTUK5heSZH8M51jzwnQDyJEZsFnckpkGXefRb3PB46twrqwLQiSiEQbL3d0APri6cw__", 
    character: "https://media-hosting.imagekit.io//f56ecb0855ed4d30/popimage.png?Expires=1834325537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1tJJQtabgMvhwofKd1jZqs2Zv4T6KqYCZCYhiXConug5NYBvOGHTcsNjKjX7jDOA3oeEuKAnl59EkK-gq5kMnl9-Fq~bkpALJYEMo42vqq8ri02gTTVhe7c0CBRiPrRcDptIDVqHHFt3ePO4hvWWyyiNpra5Tq5UoRk7IWpy8qj0tnySPF-cJTvDCOwvouHRk2UR-HO4kaglvSrBNRHGbOLKDD8r0YT5LITZgwIgY6qCBwH8TRefQWYgYQUXNE1l8DZw0iOOwdqiKUPnIdL1dKV106GLs5ClPN7LULOEs-ikpCApeyalVCht7OKlNBxt-YJEkJANaM0EHO930GdaPA__" 
},
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <ChevronRight size={28} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <ChevronLeft size={28} />
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "15px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  return (
    <section className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card-wrapper">
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="wrapper">
                  <img src={card.cover} alt="Cover" className="cover-image" />
                </div>
                <img src={card.title} alt="Title" className="title" />
                <img src={card.character} alt="Character" className="character" />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
