![logo_en](https://user-images.githubusercontent.com/2198826/46068471-e44d1900-c181-11e8-99cf-0234839623f5.png)

# [MetaHash](https://metahash.org/) JavaScript library
### Версия 0.2.0

------------

## Презентация
![46068734-88cf5b00-c182-11e8-8f89-acf0056f3593](https://user-images.githubusercontent.com/2198826/46261295-557e2a80-c4fa-11e8-992a-f958facdea0f.png) **[goo.gl/ptF2ei](https://goo.gl/ptF2ei)**

------------

## Песочница
![metahash-playground](https://user-images.githubusercontent.com/2198826/46261230-3501a080-c4f9-11e8-8390-84730faead28.png)

Песочница находится в [playground.html](playground.html).

[Запустить песочницу](https://epexa.github.io/metahash-js/playground.html) с GitHub Pages **(если нода работает только по HTTP без HTTPS, то в браузере нужно разрешить [запустить небезопасные скрипты](https://user-images.githubusercontent.com/2198826/46060896-5cf5aa80-c16d-11e8-9c50-9b8813923279.png))**.

------------

TODO:
- [ ] доработать песочницу
- [ ] метод getIpFromDns для получения ip-адреса ноды
- [ ] получение адреса (hash) по публичному ключу
- [ ] сделать версию для NodeJS (NPM)
- [ ] README на английском

------------

## Использование
1. Подключить MetaHash JavaScript библиотеку:
```html
<script src="https://epexa.github.io/metahash-js/metahash.min.js"></script>
или через CDN:
<script src="https://cdn.jsdelivr.net/gh/epexa/metahash-js@0.2.0/metahash.min.js"></script>
```
2. Если нужно изменить конфигурацию: адрес ноды, и т.д.:
```js
metahash.apiUrl = 'http://172.104.157.248:5795';
```
3. Вызвать необходимый метод. Методы возвращают коллбэк в котором есть две переменных: **res** - результат запроса и **err** - в случае ошибки:
```js
metahash.имяМетода(первыйПараметр, (res, err) => {
	if (res) console.log('имяМетода', res);
	else console.error('имяМетода', err)
});
```

------------

## Пример
Пример использования находится в [example.html](example.html).

[Запустить пример](https://epexa.github.io/metahash-js/example.html) с GitHub Pages **(если нода работает только по HTTP без HTTPS, то в браузере нужно разрешить [запустить небезопасные скрипты](https://user-images.githubusercontent.com/2198826/46060896-5cf5aa80-c16d-11e8-9c50-9b8813923279.png))**.

------------

## Конфигурация

- ### apiUrl
HTTP-адрес ноды.

Значение по умолчанию: "http://172.104.157.248:5795"

Пример использования:
```js
metahash.apiUrl = 'http://172.104.157.248:5795';
```

- ### tokenPrefix
Префикс токена для вывода значений баланса.

Значение по умолчанию: "MHC"

Пример использования:
```js
metahash.tokenPrefix = 'MHC';
```

------------

## Методы

- ### fetchBalance
Получение баланса адреса.

Параметры:
***address***

Пример использования:
```js
metahash.fetchBalance('0x009af1b05f5fa19d7054c0deeab32ecb3b1adac6c7f02b2c0b', (res, err) => {
	if (res) console.log('fetchBalance', res);
	else console.error('fetchBalance', err)
});
```

- ### fetchHistory
Получение транзакций по адресу.

Параметры:
***address***

Пример использования:
```js
metahash.fetchHistory('0x009af1b05f5fa19d7054c0deeab32ecb3b1adac6c7f02b2c0b', (res, err) => {
	if (res) console.log('fetchHistory', res);
	else console.error('fetchHistory', err)
});
```

- ### getTx
Получение информации о транзакции по хэшу.

Параметры:
***hash***

Пример использования:
```js
metahash.getTx('23fb8f98f1faecf04c23112ad47bba7b42ff7bcec0cdf22ce231061d02e9ad2c', (res, err) => {
	if (res) console.log('getTx', res);
	else console.error('getTx', err)
});
```

- ### createTx
Создание транзакции.

Параметры:
***to***

***value***

***fee***

***nonce***

***data***

***publicKeyHex***

***privateKey***

***youHashAddress***

Пример использования:
```js
metahash.apiUrl = 'http://139.162.42.43:9999';
let publicKeyBase64 = 'MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE8gBrTLUQxXDZQ4f/OpiFWe4dhNbEo11PtFkq/0NgXt+AxGwmiWUhojtI56Hj2H3QpxGZCqrjxldDC4IHzpyVfw=='; // from key.pub
let to = '0x0003f6441039b7f944c82ac62f7c124918e02c203b5820f5ed';
let value = 1000;
let fee = 0;
let nonce = null;
let data = '';
let publicKeyHex = metahash.base64toHex(publicKeyBase64); // convert from base64 to hex
/*
	1. openssl ec -in key.pem -noout -text
	2. copy "priv" value:
		42:d1:ae:22:4c:27:fc:02:a4:bc:43:b9:ec:47:6b:
		bd:21:b4:51:69:db:97:35:f9:c6:1d:31:a0:87:21:
		04:4f
	3. remove symbol ":"
*/
let privateKey = '42d1ae224c27fc02a4bc43b9ec476bbd21b45169db9735f9c61d31a08721044f';
let youHashAddress = '0x009b84f533aa2192456a7e944eb471183abbceafe678a98984';
metahash.createTx(to, value, fee, nonce, data, publicKeyHex, privateKey, youHashAddress, (res, err) => {
	if (res) console.log('createTx', res, 'http://mhscan.com/?page=tx&id=' + res.params);
	else console.error('createTx', err)
});
```

- ### balanceFormatter
Форматирование баланса в правильный вид.

Параметры:
***balance***

Пример использования:
```js
let balance = metahash.balanceFormatter(20962350000);
```

------------

## Поддержать проект:

BTC: [3LPVbQ8fu4um4aY16tpeie62kznGJywrai](bitcoin:3LPVbQ8fu4um4aY16tpeie62kznGJywrai)

ETH: [0x230D2C5aE86fFB69C8e6d575aB634f345aE497e5](ethereum:0x230D2C5aE86fFB69C8e6d575aB634f345aE497e5)

MHC: [0x00a1d0f653dd39c33255acac2f5ea4fb3c3ea5795908c3bf05](mhc:0x00a1d0f653dd39c33255acac2f5ea4fb3c3ea5795908c3bf05)

------------

## Контакты:

Telegram: [@epexa](https://t.me/epexa)

------------

## Лицензия
Apache License

Version 2.0, January 2004

Подробнее в [LICENSE](LICENSE).