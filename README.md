# [MetaHash](https://metahash.org/) JavaScript library
### Версия 0.1.0

------------

## Использование
1. Подключить MetaHash JavaScript библиотеку:
```
<script src="https://epexa.github.io/metahash-js/metahash.js"></script>
```
2. Если нужно изменить конфигурацию: адрес ноды, и т.д.:
```js
metahash.apiUrl = '172.104.157.248:5795';
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

Значение по умолчанию: "172.104.157.248:5795"

Пример использования:
```js
metahash.apiUrl = '172.104.157.248:5795';
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

------------

## Контакты:

Telegram: @epexa

------------

## Лицензия
Apache License

Version 2.0, January 2004

Подробнее в [LICENSE](LICENSE).