import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Nontechnicalcards.css";

const cards = [
{
  link: "#",
    cover: "https://media-hosting.imagekit.io//396791590c654328/Valorant-logo%20(19).png?Expires=1834410272&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BeObskEo~bBg3LXnpCl5ySeEzOZdr5AOB6fsKE0PfFdgIh1ngAFi5yTISw2FMepuBijIdhh-skFL5ry64CDwWyn7kGIrgdfFaNsEwvFIStnKzwl4ri-y99L5PlpvBqf6roGmTxdWEq-kD6~vkMJVrvT4nNwV2FTfUDAEA5XKkpEGUlPUfQNeZhvtMQpJ~QGTGOQtx4dc65-IW6aCy5VMiwl9Bj70EvMjGC8gVPUpGn5xsNmYKMdjKjp~LiupOSz3RpbXnVlsBgr5NR8dSKLqlDX5UJzLwT-7BNc6nDJzYtCucbD-A2~gLUjdz4FM1jmHG1qQv8QRR0A6-g8eKb6zNQ__",
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
  cover: "https://media-hosting.imagekit.io//34a240e28d9c4421/Valorant-logo%20(1).png?Expires=1834410848&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CBjXXJo8~RQ6xYUIJ0UekYmIMzMj4adKVdPvkOEZ7A~cqCbMs7rMJxN19PyPKQPXyqQFHYjTl7LgtZFQDMXt-HVCSfPuhMNzCk1VVXn4wekotl~Cl-PWUz1ZNYC8lJN~w-qTqbSmZigAqgN0Q4GipyTpuavcU~fykkCdgmpnm3ogGrrf7pRT8n05A2Iex87QexqR8y5Z-qIrSfG4QdkcFDcd-u4LZyZCH~DzkxJ0xyKQLDbdcphbYCCNs~ynOcPfLiNd33phE2PqLa~mPAVlkgtdfF-991UL-bOS8ruJlhQb~mP73s1zs4Zi2DjsSdLLbmvC7OGiYReYtnwg0za9yg__",
    title: "https://media-hosting.imagekit.io//3f658d5ed7ba4047/Valorant-logo__2_-removebg-preview.png?Expires=1834379774&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lqaymQvs4tpvsEVxZZjWqGOWGkelscL-RaagOgIQYQzZzVGznzvx7qp8LYwH7nw7UjqmxwuHnIhsX4wcQcnpziYKAxVlW425ULqyePvfMeo89mkelsrom4hvHw~slJoDh5WOJiqBpW1~VBGri7MvCBXKFdl0EylKNxeIWwfIVLegXKP-hROdHmq37j4OyqxauGi9G~qArSa5T2SnFBE7dILrxl4a4CJz6kDvrYwyhZeeiJhq6UFCeMdoyeNq4LLQdXWhy2TPfbaeTntbMfrKdcrFgjgOL955FLMfIbNxRcm-JKrIi~SEkBYDme4xnZ2HLXB66EVF3JCAk2loFM-94Q__", 
    character: "https://media-hosting.imagekit.io//95be4f92f70240db/Valorant-logo__2_-removebg-preview.png?Expires=1834411028&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Iay6Mma2Epie3VfUo1VlRkwfYZABfU8JTPpRyZWMc95royjfP2-pZ1-1gQLjCs~qGY3-sBoK9uXaCH~GhfRoa-A-T4mZXFOlpafgwYRlLF2~4d~gstE7cuZc9MJpoh9uo-laHJczFj74xw43r3WtLE6d0yXT7YvD3d8xnOyX0vLNRpaL8T37y4mnmtmDOe5aOUNFeaed1tYCqRV5ZpcoCzflcZE-s5FeQFMhgUSkVsoVA09Z-H~nwse7fue0rOhOUaD~xiLpbMx~yxj0JDNoMKuxs04F5fLiaZyMQIDjX62JPXdhPMVgl~14JGSaIu~UcdAEEsAHsHbd9G8Zk4aI~w__" 
},
{ 
    link: "#",
    cover: "https://media-hosting.imagekit.io//e2725935ba4e4859/Valorant-logo%20(16).png?Expires=1834402668&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BWI1~i3AANsG-F5SYAfLD6SjbtQ0z88QFu5RcABrBYb7BzeuRC0zKbl3DnPv8La1ZgdeA2Rqwar7b198t0aygvbFxxMz6J8D6oBjtltwOwFS9ujf7G0EjdqRrmDO-UWqKR0nnBvgR-sn2mL-PCfNm8BOSuJz5WMBLgyDGzWw136Ef4RejIOpPwozZMNtDAoIKu8Az8b5WncnJ8VFUd3iJKP3PYIG550XKXg~DxIYgdNK2DcnKefLdmkwXdKr5yNQ65Ae0ouUAzooCkePoUqlxI0Rr~3Kk~4Eky3hdbIL6OsF~l4AvsKy7PQWSn6b~Pf7t7HJt9mB3xPGA00kotspRA__",
      title: "https://media-hosting.imagekit.io//0dc899e870d64e24/Valorant-logo__18_-removebg-preview.png?Expires=1834404570&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UEarvK4yiRAlGnvapk8MWFvpvk~9UWzp01gyrmkBzQ1S01um55oyj~RXlM506sMI1T-xU0ZW6C4vq-wSiso~dpgSBUpsjKj7YAYcmz86Sk3AZG-YeaZzPWJqpRa~G6~XBjb9bSpz8YCE6~paF6uYe1GwL04LghfLxz9JQ9q0Z1B773bRrnc33HfoBZOSoVNpyHTCHpkqikeXvER64Nvppe33DiLwpVagkabaozQr~13Qfr74HXs0ALQTBkRBJJPwgxOIElikPZARJmDjJq2fks7jwvdbnGLEDSLGxLcw25QVVRGEWZLDeG5myrfkcpRlor9-0FrYSpMBii7XAdBSow__", 
      character: "https://media-hosting.imagekit.io//55c1992446764ce7/Valorant-logo__17_-removebg-preview.png?Expires=1834402849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f0Fh4SQNmsxXDkshlyv2WBwD36By1McwUfUqedDlmEFxGUaTuXh8tLAhJuR3o~LmPq7gCV-XJwIBr5od2tbesWpDoJ9JgWUOcBxgqi45ha-cokYaadA1o-ZMDiTCumxK7atFu7-ClAefjz7b5UfrhHu3vpKo3aLW32sP2ayDsYEYb5zno84AHrfbN5a-W948FioMKCUhOPNmcvll67E9sE4YiuA7cXXlCFKuNgESSVvTxqngS9jw8cbJI2Vl-MRsrzkXwLWp74UzLDqPnHUX3SUtGM5KJZ5bp6uJWV5dM8iBZg3IWsIvCUlheOwPjeq5iz45lV3QvIWu~1C1SX968g__" 
  },
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//a2483474ff6947b6/Valorant-logo%20(10).png?Expires=1834399389&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Yr8KWWaAH3Ju1LXk8XVPBHMQEhC5AajOCMpPyWFIZ2PSE6ezzS632Nl6aOhtYTqkH5lRIiDznxoNlzJH-KMqe5TO0X2Vc8aHUteKezlUZh1MQhXiPsc6TYv0WD4bYBF7okbRUINr70jmSz-a3b3laZilg0C-l~6cbPe4tb4BVYiaptLTXAO839rH7jvS0mFg3Ub-gVUJ3kw7FU1URPm34VjyxykjAhtgIjX~8NAsGIkRhWghySivh72pZXUmhqRtjSk6mWH3aIPDFXClyLylaLZlJetS4zsUIlFJAsSRPi6yMkoblBqtUT5-AQTAj9WnzsT6vEKosxAD7YgX-Dvtfg__",
    title: "https://media-hosting.imagekit.io//82964ad4482d441b/Valorant-logo__12_-removebg-preview.png?Expires=1834399389&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rSUqxmo7VTE1USI9jjAtbxYOd76Hqu5OzapQ9j4qXK3lhN1PPIZi8qydv6gAnxqQq~a7lWFSknavzyCY4kRuDLyFfr9HB1ZlGG9KgOzdPJnhshG9ejEpA7g9eY7uIh-jqhP~FdNX5ZVSACi~RPs60wxzrHaEXUc-u3YUzgk6v6hA59TUTd0DibtFIVpt0j~SmB7lJiV5rbBEQ-6fFWRxfHs6kaFhfymQ5AFbzt24vVeSyMpe~udp77JN0TF2iWXgsivgs5mr2PqW1a2ZtpywLhxKckuHmOhh4WZ4uV-48DKVMnw4yibgRxQ2Wm20nEFwvF1Tdn2K6r0ksPob07G4bg__", 
    character: "https://media-hosting.imagekit.io//018966f7a07849ac/Valorant-logo__11_-removebg-preview.png?Expires=1834399389&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OjRY1aJFQf3h7uUAEiYc-Mo3MBkuYBBBTLPDFJK-eOPj9EY9bfCw3aql4xTskB8uiyo0119abJsdcHn6LEUQE2bE92BYbyMLXzVvhBFGWkrkHk7tconl9SF91A0saTn-~oSfR0D0DEmWLBpTAkFJ27-genAe6V25I9XN02HojMhuTMU1I46scfPMjaqGMwu1~eAKdcgWKCsckxKYaySFg-Pd4-AnPA1YKK3w1XmPmuVONTZgRiXn10eZs-wwU4SUzGgg-SnovbDbnnh78L0a3pAcEJxan~9tA5kV8Fw9dd7snqxQWPKUeTnABP3sQz~Hm3zDfLTWKIlGPFFRWDkPfw__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//d8ab2881d86b48c3/Valorant-logo%20(13).png?Expires=1834400616&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1xUl7FvucUhwXi~vjFaeQM5-mhMvWIylT~Mtv1WmHZThY8RasU8Rv7doVWmYx09Tr18-81jL6ZB4TXjA~5fCVvH7XnAQhUmsqbf0Dl23z0WCPGgJvWL4E4rKiDqpNTa1jZinoneXa3AU-SzBuTM39UYDfR9D~SPX9b8kOARXzcHZExSnJq70qr63C6NktLhyD5aJBCK2-YOmJM2NnYJCjVhiKysCp3tbdpZqVepOgC3Ox80aidPdvSt3jC6zOLP2byCI1inaFjOQHQaUdjklROdi9Gcdc~Y1UDYk8xjAWh0EaSPbXka8kCAp-eVo8RQPv1tCZ3uW9-sz04bS9nOf2w__",
    title: "https://media-hosting.imagekit.io//94baae0d9b8a4c5a/output__23_-removebg-preview.png?Expires=1834400869&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WHtU22v2ERV2Ls5lrth1ieLgcBFPXIwqarduqAllPxLvlM-SWYRmvQzP9UpWw2UADLVRJ7OpnJBZDvV4b7Rp7Y66Yzjn7jnFiVDJDZ-EgGlKc6sd3egGONQAcUp8IkB17jgxKZ-bjbaO-06ya1O4YCYBYRt0gfEhZb~i~sYieBxVTNfRcf~yrJ1M-tUrB3FYXJ4xSrxOF-Z1a-k6eM3FWlGw8b5Q-aVCDq~gaBG6685KkZii8Y5o~z6T2BrBGLWYuHprDvePpFutAIjlaT7s0tedoO8xfF9BcZjf6MY6CLdA2WaU4R~XUwYe3Q1sGjNSN~cOgGSNulwrOc1QO6wy6Q__", 
    character: "https://media-hosting.imagekit.io//3b48d089a3b24d31/Valorant-logo__15_-removebg-preview.png?Expires=1834400616&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WinH8WWMm7ojRAAHjBFKUNsIRxw6RIr40zWWPe5JmX8CXjtiLZc52y-mrcFlqBPXEt75nXdqFvURzrXlaIaHYAlbEVMNZ2Yqxa-oobC2zOYQth499ggqmoNzwMscV7T8NRBwwJ~SMxXASTI6Z1BnTQy5p49IdK~NBvwgy7krEVTalVlTVrVDl11YSVOaYcO4gGlQjcnkXeZdsq5JEhwj5BokJt2arXh333bc5oZTG4TlMnw-JprWm~I-xxNbb6oUoRE6aDNJnvs~KoGPDWmosGE-~r3-2RNECsyIrmVc75gu3JhUzULLVFQaNJnHHhoEtP5YZR67c4ALGQZ0NPX0nA__" 
},
{ 
  link: "#",
  cover: "https://media-hosting.imagekit.io//a50bbf1e74334e6c/output%20(27).jpg?Expires=1834401396&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=e9e3TMjDfl4SZGspEnsajw1Vea2XtoreSDWRaps7xZprCxoUIYGF1luR8ZiEzB8yitelfyJo1c50FSax1xvMYlvNNjjI0Yl9iVWfwlFfR017fCv0XocivaH0HYJEobPJPsfgpNec20w9H8mz4XVePYCUfMX3mj~XFvYa4T7FgslnrWHir~MCwUkYhMrEQCSLjFjN6xVsGfxyaLmlD49c3xmjZWw1yhbYrGxlAHM9W0qE6tf80IAzxEVDmn5OH~K~aVRpOPp-U45ZSBZcdVxsnFb3jw4lo7HpQViJHZH6taRtGATpIHJ-Av5XIOoxmowWdg5jtPsZyXRna-hzVElgKA__",
    title: "https://media-hosting.imagekit.io//96422eb970024b68/output__28_-removebg-preview.png?Expires=1834401396&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S0JNz4zSQG3FFoOteef9SR6Vp3CUxHZYqOGCxSodRySEGUkX1CCVegBX9NJ1vwyDXEYklkpo54oj5WnamRPYW7z1xxXc0YM1WGL-rw1Ovj86msyX1-5GUMEYwWPpJIBgu9mxWu2EGI3gWtdsDwxTLcN9xFQVp76kk5GrTon4OUoaEM7VLA3dKL~lVyBtXSdA-MTgit8NfEzRkTz2t8ifJh-ADSi2zrpqFk4jLItOaRi5G-X2GTxLyVjuBpnkG-nnNOLM5f7JU09uGBmXV1LuYtTec4YczTY91xY5XSp2qMBU0MUmF18yjT4r7si65wrLe~SD7o~gdd6kUBlYwmtt1w__", 
    character: "https://media-hosting.imagekit.io//259645b1b59e4761/output__29_-removebg-preview.png?Expires=1834401396&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PAK8y~9waobszN~yn8bU7EVaRa5yFZYCoTNETVZ-Iv-ue88GgJ-KJqR7RBV30DgOPDRnLY~nRiuT4F5dRDKto6n5z6OaglvlZ8NkhJdckCA2Y1DsJp~NJway3KPOwbP9xJQiUW6B~iMwzdxzUxFgd~0KBtkDAJAUvXN638PhrRzh2Ofa1XeqKii402~n1eQQ6bPed3eawTazxyDVP-vJrp3WOcmKgcUbmZsAgYq2ITJZPlsWlcNmsAxJyxwTJ9wdsDpYjBw0yXkTiVKueEGppBAYcXplxD~3z0P9hlRQXSWuAozw8Zl8zrtSOldV0bVQ4YYvim~-KBoKt1rBIZ-SpQ__" 
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
