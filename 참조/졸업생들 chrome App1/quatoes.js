const quotes = [
    {
        quote: "나약한 태도는 그 사람 자체도 나약하게 만든다.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: "월트 디즈니"
    },
    {
        quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
        author: "스티브 잡스"
    },{
        quote: "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라",
        author: "헬렌 켈러"
    },{
        quote: "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다.",
        author: "토마스 에디슨"
    },{
        quote: "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다.",
        author: "워렌 버핏"
    },{
        quote: "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다.",
        author: "벤자민 프랭클린"
    },{
        quote: "네가 누구인지, 무엇인지 말해 줄 사람은 필요 없다. 너는 그냥 너 자신일 뿐이다.",
        author: "존 레논"
    },{
        quote: "성공의 비결은 모르겠다. 하지만 실패의 비결은 알고 있다. 모든 사람들을 기쁘게 하려는 것이다.",
        author: "빌 코스비"
    },{
        quote: "‘지금이 최악이야’라고 말할 수 있는 한 지금이 최악은 아니다.",
        author: "윌리엄 셰익스피어"
    },{
        quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
        author: "미상"
    },{
        quote: "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
        author: "스와미 비베카난다"
    },{
        quote: "성공한 사람을 볼 때 당신은 대중에게 드러난 영예만 보지, 절대 그 영예를 얻기 위해 했던 개인적 희생은 보지 않는다.",
        author: "바입하브 샤"
    },{
        quote: "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
        author: "엘리너 루즈벨트"
    },{
        quote: "광기와 천재성 사이의 거리는 성공으로만 측정된다.",
        author: "브루스 페어스타인"
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayquote.quote;
author.innerText = todayquote.author;
