const quotes = [
    {
        quote : "좋은 책을 읽는 것은 과거의 가장 훌륭한 사람들과 대화하는 것이다.",
        author :"르네 데카르트",
    },
    {
        quote : "삶에 대한 절망 없이는 삶에 대한 희망도 없다.",
        author :"알베르 카뮈",
    },
    {
        quote : "역경은 희망으로 극복된다.",
        author :"메난드로스",
    },
    {
        quote : "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
        author :"나폴레옹 보나파르트",
    },
    {
        quote : "행복은 목적지가 아니다. 행복은 잘 살고 있는 삶의 부산물이다.",
        author :"엘리너 루스벨트",
    },
    {
        quote : "행복은 사소한 것에 있다.",
        author :"존 러스킨",
    },
    {
        quote : "가장 행복한 사람은 행복을 더 많이 가지려는 사람이 아니라 더 많이 나누어주려는 사람이다.",
        author :"H.잭슨 브라운 주니어",
    },
    {
        quote : "실패를 두려워하지 마라. 실패란 없다",
        author :"마일스 데이비스",
    },
    {
        quote : "나에게 특별한 재능이 있는 것은 아니다. 단지 정열적인 호기심을 가지고 있을 뿐이다.",
        author :"아인슈타인",
    },
    {
        quote : "사람은 습관으로 행동하므로, 올바른 사고와 행동을 빠른 시일 내에 습관화 해야한다.",
        author :"워런 버핏",
    }
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");



const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText =todaysQuote.quote;
author.innerText=todaysQuote.author;