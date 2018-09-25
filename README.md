# [MetaHash](https://metahash.org/) JavaScript library
### Версия 0.1.0

------------

## Использование
1. Подключить MetaHash JavaScript библиотеку;
2. Если нужно изменить конфигурацию: адрес ноды, и т.д.;
3. Вызвать необходимый метод. Методы возвращают коллбэк в котором есть две переменных: **res** - результат запроса и **err** - в случае ошибки.

------------

## Пример
Пример использования находится в [example.html](example.html).

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
metahash.balanceFormatter(20962350000);
```

------------