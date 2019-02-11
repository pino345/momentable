# MOMENTABLE
> A clone of the productivity chrome app Momentum on Vanilla JS --Made with help of Nomad Coders

👉 [momentable](https://pino345.github.io/momentable/)

#### css
- `display: grid`


#### js
- clock.js
    - 실시간 디지털 시계
    - Date, setInterval

- greeting.js
    - 사용자 이름 저장하고 불러오기
    - localStorage

- todo.js
    - localStorage에 할 일 목록 array로 저장하기
    - 할 일 목록 지우기
        - html에서 해당 요소 찾고 지우기
        - localStorage에서 해당 요소 지우고 저장하기
    - event.preventDefault
    - node.appendChild(node), localStorage.setItem(keyName, keyValue), JSON.stringify, JSON.parse
    - console.dir, event.target.parentNode, Node.removeChild, Array.prototype.filter
    
- bg.js
    - 1.jpg, 2.jpg, 3.jpg 중 랜덤으로 이미지 선택
    - Math.random
    

- weather.js
    - 사용자의 현재 위치 날씨 알려주기
    - Navigator.geolocation, position.coords.latitude, position.coords.longitude
    - [openweathermap api](https://openweathermap.org/api)
    
- unsplash.js
    - unsplash에서 랜덤 이미지 10개 받고, 0~10 이미지 중 랜덤 선택
    - [unsplash api](https://unsplash.com/developers)