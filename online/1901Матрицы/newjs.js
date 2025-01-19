// Добавление/Удаление элементов в массивах
{
    /* 
    Добавление:
    1. В начало - .unshift()
    2. В конец - .push()
    3. В любое место в массиве - .splice(на какую позицию(индекс), насколько вправо от этого индекса, что добавляем)

    Доп:
    slice([start], [end]) - возвращает элементы, начиная со start, заканчивая end(end не включается в эти элементы).
    concat(arr1, arr2) - объединяет элементы списков и отдельные элементы в 1 ряд

    arr1 = [1, 2]
    arr.concat(arr1, [3, 4], 5, 6) // [1, 2, 3, 4, 5, 6]

    */
    document.write("<h2>Добавление элементов в массивах</h2>");
    const massiv = [1, 5, 2, 6, 8];
    document.write(`Изначальный массив: ${massiv}<br>`)

    massiv.unshift(100);
    document.write(`Массив после использования функции добавления в начало .unshift(): ${massiv}<br>`);

    massiv.push(110);
    document.write(`Массив после использования функции добавления в конец .push(): ${massiv}<br>`);

    massiv.splice(3, 0, 215); // 
    document.write(`Массив после использования функции добавления в любое место: ${massiv}<br><br>`);


    /*
    Удаление:
    1. Из начала: .shift()
    2. Из конца: .pop()
    3. Из произвольного места: .splice(начиная с какого индекса, сколько элементов, что вставить вместо, что вставить вместо.......) Что вставить вместо - необязательные параметры
    */
    document.write("<h2 style=>Удаление элементов в массивах</h2>");
    let arr = [1, 67, 1, 5 , 3, 2, 5];
    document.write(`Изначальный массив: ${arr}`);

    arr.shift();
    document.write(`Массив после удаления первого элемента из массива .shift(): ${arr}<br>`);

    arr.pop();
    document.write(`Массив после удаления последнего элемента из массива .pop(): ${arr}<br>`);

    arr.splice(3, 1);
    document.write(`Массив после удаления произольного элемента из массива .splice(3, 1): ${arr}. splice имеет большое количество применений.<br><br><br>`);
    /*
    .splice() имеет довольно обширный функционал


    let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
        // удалить 2 первых элемента
    let removed = arr.splice(0, 2);
    alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов


    let arr = ["Я", "изучаю", "JavaScript"];
    // с индекса 2
    // удалить 0 элементов
    // вставить "сложный", "язык"
    arr.splice(2, 0, "сложный", "язык");
    alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"
    */
}

{
    // Копирование массивов
    document.write("<h2>Копирование массивов</h2>")
    const mas = [1, 5, 2, 5, 2];
    document.write(`Массив, с которым работаем: ${mas}. `);
    document.write("Копировать массив mas через let masCopy = mas <b>НЕЛЬЗЯ</b>! Так будут возникать непредвиденные дефекты программы. Программа будет запускаться, но мы иногда будем получать не то, что хотели. Изменения в массиве mas будут отображаться и в masCopy, чего не всегда хочется. Лучше сделать копию, создав новый список и его заполнить элементами старого списка.<br><br>");
    
    // Как же тогда создать копию массива mas правильно? 
    const masCopy = new Array(mas.length);
    for (let i = 0; i < masCopy.length; i++) {
        masCopy[i] = mas[i];
    }
}

{
    // Деструктуризация
    document.write("<h2>Деструктуризация</h2>")
    document.write("Деструктуризация - разбиение массива на отдельные элементы. Происходит это при помощи ... перед названием массива (...arr - создает копию массива пока-что<br>")
    let mas2 = [1, 5, 2, 6, 2] 
    document.write([...mas2] + "<br><br>");
}


// Пример
document.write("<h2>Практическая задача </h2>");
document.write("<h3 style='max-width: 70%'>Есть 2 массива(любые)</h3>");

let arr1 = [1, 2, 3, 4, 5, 6, 2];
let arr2 = [3, 6, 13, 5, 10, 14, 2, 3, 3, 3, 3, 13, 13, 13, 10, 9, 1];
document.write(`Первый массив: ${arr1}.<br>Второй массив: ${arr2}<br>`);

let newarr1 = new Array();
let newarr2 = new Array();
{
    newarr1 = [...arr1];
    let unique = new Array();

    for (let i = 0; i < arr2.length; i++) {
        if (!unique.includes(arr2[i])) {
            unique.push(arr2[i])
        }
    }
    newarr1 = [newarr1, ...unique];
    document.write("<b>1й массив содержит все элементы первого массива и уникальные значения из второго:</b> " + newarr1);
}

{   
    let uniq = new Array();
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                uniq.push(arr2[j]);
            }
        }
    }

    let uniq2 = new Array();
    for (let i = 0; i < uniq.length; i++) {
        if (!uniq2.includes(uniq[i])) {
            uniq2.push(uniq[i]);
        }
    }
    document.write("<br><b>Нужно создать еще 2 массива. 2й массив содержит только те значения, которые есть и в первом, и втором массивах:</b> " + uniq2); 
}
