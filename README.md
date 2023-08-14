# Установка

1. Скачать проект из репозитория
2. Выполнить npm install
3. Выполнить npm run start
4. Игра запустится на localhost:8080

# Мотивация

В данный момент я занимаюсь разработкой собственной ECS-библиотеки для игр на Typescript, которую можно интегрировать с Pixi, ThreeJS, CocosCreator и другими графическими библиотеками или игровыми движками. Это тестовое задание стало отличным поводом протестировать библиотеку в действии. Для меня это тестовое стало больше как R&D по выявлению слабых сторон разрабатываемого инструмента.

Ниже я попытался вкратце описать на чем основывается проект для упрощения проведения ревью тестового задания.

[Исходный код Mysh](https://github.com/YettiKetchup/mysh)

[Интеграция с Pixi](https://github.com/YettiKetchup/mysh-pixi)
(пока очень сыро и грязно, но в целом свою работу выполняет)

# ECS и Mysh

## Коротко про Entity Component System

Итак, Entity Component System - это архитектурный шаблон проектирования, который позволяет разделять логику и данные, что привносит элементы декларативности и позволяет писать очень гибкий и устойчивый к изменениям код. А изменения в игровых проектах это история довольно частая и ECS отличное решение, чтобы эксперименты гейм-дизайнера с механиками не привели к обрушению всего игрового приложения.

Гибкость достигается за счет разделения всего и вся. Данные лежат отдельно от логики и не меняются под требования логики, логика ничего не знает про конкретные игровые объекты и работает исходя из набора данных. Игровые объекты же просто содержат в себе состояния и не обладают никаким поведением.

Чтобы было понятней, стоит рассмотреть на примерах. Допустим у нас есть класс игрока Player со свойством health, отвечающем за жизнь игрока, и методом, который жизнь восстанавливает. В “стандартном” ООП-подходе, назовем это так, мы бы реализовали что-то подобное:

```

  class Player {
    public health: number = 100;


    public heal(value: number): void {
      this.health += value;
    }
  }

```

Либо же можем вынести логику лечения в другой класс, который, собственно, по всем правилам декомпозиции должен как раз за это отвечать.

```

  class Player implements IHealable {
    public health: number = 100;
  }


  class HealingLogic {
    public heal(gameObject: IHealable, value: number): void {
      gameObject.health += value;
    }
  }

```

Но проблема в том, что у нас в игре объектов отвечающих за лечение может быть множество: пикапы, триггеры, условия окончания квестов, покупки бонусов, айтемы инвентаря, читы и прочее-прочее. Также нам возможно нужно “лечить” большое количество разных объектов: игроков, неписей, какие-то объекты окружения также могут обладать здоровьем, отвечающим за степень их повреждения и они также могут быть “исцелены”. И какие-то объекты после “лечения” могут инициировать события, какие-то нет. Что если после “лечения” вот того ящика нужно запустить квест или поменять его стадию? А что если изменить внешний вид, а у других внешний вид не меняется? И чем больше типов “лечилок” и “лечимых” объектов, тем больше у нас разница в поведении между этими объектами, тем больше абстракций, тем больше риска все сломать, когда нам где-то что-то нужно поменять. Да, есть GoF-паттерны, которые в 90% решают эти проблемы, но это еще нужно их всех помнить и понимать когда нам нужен паттерн State, а когда проще и лучше использовать Behaviour.

Entity Component System это один паттерн, который применяется ко всему приложению и решает все эти проблемы связанные с наделением объектов новым функционалом, его изменением. По-крайней мере большую их часть. Есть множество различных реализаций от строгих, где все, даже рендеринг объектов осуществляется через ECS, до гибридных, где ECS выносится на отдельный слой и работает только с игровыми объектами и их взаимоотношениями, а остальное вокруг них, реализовывается как угодно.

Все, с чем мы работаем используя такой подход, уже указано в названии паттерна, само ядро, а остальное это уже особенности реализации.

У нас есть Components, которые являются единицами данных отвечающих за состояние игрового объекта. В Компонентах мы храним только данные и никакой логики за очень редкими исключениями.

У нас есть Entities, которые являются игровыми объектами, которые приобретают определенные свойства храня в себе наборы Компонентов. Сущности также не могут хранить в себе никакой игровой логики, кроме той, которая управляет Компонентами внутри самой Сущности.

И у нас есть Systems, которые отвечают за логику работы Сущностей исходя из их набора компонентов. Никаких данных, относящихся к игровым объектам, Системы хранить в себе не могут.

Если бы мы попытались создать логику лечения из прошлого примера, то в Mysh это выглядело бы примерно так:

```

  class HealthComponent {
    public value: number = 100;
  }


  class HealingComponent {
    constructor(public value: number) {}
  }


  const player = new Entity();
  player.add(new HealthComponent());


  // Где-то в рантайме добавим еще один Компонент
  player.add(new HealingComponent(10));


  @Includes(HealthComponent, HealingComponent)
  class HealingSystem extends System {
    protected onExecute(entities: Filtered<Entity>): void {
      entities.loop((entity) => {
        const health = entity.get(HealthComponent);
        const healing = entity.get(HealingComponent);


        health.value += healing.value;


        entity.remove(HealingComponent);
      });
    }
  }

```

Что мы имеем. У нас есть Сущность player, которая содержит в себе компонент HealthComponent. Есть компонент HealingComponent, который также добавляется к Сущности игрока, но уже где-то в рантайме, мы не знаем когда. И есть Система HealingSystem, которая, допустим, выполняется каждый фрейм в игровом цикле. И как раз в этой системе мы и лечим нашего игрока. Но идея в том, что только мы знаем, что это игрок. Система этого не знает. Она работает со всеми Сущностями у которых есть Компоненты HealthComponent и HealingComponent. Как только к какой-то Сущности, у которой уже есть HealthComponent, добавится HealingComponent, Система тут же отработает и “подлечит” Сущность. А что это за Сущность - уже неважно. И для того, чтобы добавить новые типы объектов с логикой “излечения” нам нужно просто добавить к ним два компонента. Именно Компонента. Система существует в единичном экземпляре, она создается всего один раз. Да, она может быть вызвана в разных цепочках при разных условиях, но идея в том, что логика у нас одна для всех “исцеляемых” объектов. И эту логику не нужно создавать для каждого объекта отдельно, не нужно пробрасывать ее как зависимость, не нужно от нее наследоваться.

## Реализация Mysh

Mysh это гибридная реализация, которая отвечает только за поведение игровых объектов. Рендер и все, что с ним связано, как в случае с этим проектом, лежит на Pixi и все вьюхи игровых объектов создаются через класс ViewBuilder реализовывающий паттерн Builder. Что, кстати, оказалось на практике немного спорным решением в виду его незавершенности. Так как есть случаи, когда мне нужно было создавать вьюху через простенькую фабрику и уже результат передавать в билдер, потому что сам билдер уже разросся до безобразия и расширять еще сильнее как-то не очень хочется. Это можно увидеть в примере с текстами в данном проекте. В будущем, я планирую еще поиграться с тем, чтобы хотя бы на уровне best practices разделять вьюхи на фабрики, если это небольшие единицы, и билдеры, если это что-то сильно вложенное и комплексное.

Вообще Mysh сам по себе не работает ни с Pixi, ни с ThreeJS, за это отвечают интеграционные слои, которые вынесены в отдельные библиотеки. В случае с этим проектом, это mysh-pixi. Эти библиотеки выступают в роли обертки, которые интегрируют Mysh вместе с тем же Pixi. Создать универсальное решение для всего не представляется возможным из-за сильной разницы апих графических библиотек, но написать слой интеграции довольно просто.

Ниже приведено описание всех ключевых сущностей, которые есть в Mysh и MyshPixi.

### Component

Это обычные классы, которые хранят в себе данные и ничего более. Никакой логики, за исключением преобразования данных в гетерах, в компонентах быть не должно. Исключением могут быть объекты вьюх самого Pixi, которые добавляются к Сущности в качестве Компонентов. Компонент может быть пустым и выступать в роли тега. Компонент может быть реактивным, уведомляя всех подписчиков об изменении своих данных.

### Entity

Это игровой объект, который содержит в себе Компоненты. Единственная логика, которая может быть в Сущности - это логика управления Компонентами внутри самой Сущности. В mysh-pixi Сущности, в основном, создаются с помощью ViewBuilder, что привязывает ее к вьюхе на сцене. Однако, возможно создавать новую Сущность через конструктор и не добавлять в нее ссылку на Вьюху. Это бывает полезно, когда нужны какие-то внутренние Сущности не имеющие визуального представления. Например, такая создается в модуле end-game.module. Сущность также может біть реактивной и уведомлять подписчиков о различніх изменениях, таких как добавление и удаление Компонента, уничтожение, инициализация и так далее.

### System

Системы это логические “кирпичики” из которых строится вся логика игровых объектов. Система не может хранить в себе никаких данных, она получает набор Сущностей и обрабатывает их. Именно в Система описывается поведение игровых объектов в зависимости от набора данных. Системы регистрируются в Модуле через специальный объект provider. Момент выполнения Системы указывается в самой Системе через декораторы класса. Это могут быть как хуки жизненного цикла Модуля, либо реакции на изменения Сущностей и Компонентов, либо же реакция на кастомные ивенты. Система ничего не знает про конкретные Сущности, в декораторах устанавливается специальный объект-фильтрации, который содержит в себе список всех необходимых в наличии у Сущности Компонентов, чтобы Система смогла ее обработать.

### Module

Модуль необходим для регистрации Систем, чтобы они начали свою работу. С помощью Модулей можно группировать логику по области применения. Например, есть Модуль отвечающий за ресайз, есть Модуль отвечающий за механику стрельбы, есть Модуль отвечающий за обнаружение коллизий между игровыми объектами и так далее.

### Stage

Это игровая сцена. Ее задача регистрировать и выполнять модули, а также предзагружать ассеты.

### EntityStorage и EntitiesCollection

EntitiesCollection это хранилища в которых находятся наши Сущности. Их может быть сколько угодно, для разных Сущностей, отличных по своей предметной области. Например, в тестовом задании реализованы три разных Хранилища для игровых объектов, объектов интерфейса и и объектов визуальных эффектов. Иметь несколько Хранилищ полезно для оптимизации, так как Системы работающие с игровыми объектами, не будут искать эти самые объекты среди объектов интерфейса и и визуальных эффектов.

EntityStorage просто помогает создавать и получать нужные Хранилища. Также он умеет их комбинировать на случай, если нам нужно работать с Сущностями из нескольких Хранилищ.

### ViewBuilder

Класс реализовавший паттерн Builder, позволяющий быстро и просто создавать вьюхи с нужными параметрами и глубиной вложенности.

## Структура и организация кода

Мне очень нравится подход FSD в React, поэтому я постарался реализовать что-то подобное. Опять же, больше в качестве эксперимента, но результатом я, в целом, доволен и задумаюсь над тем, чтобы использовать это в продакшене.

Если вкратце, то FSD - архитектурно-структурное решение-методология, которое помогает организовывать файлы в проекте таким образом, чтобы избежать запутанных зависимостей между модулями. Основная идея это разбиение по слоям, чтобы избегать вертикальных зависимостей и зависимостей от слоев верхнего уровня нижними. Мы просто разбиваем наше приложение на слои по уровням абстракции: от самых абстрактных типа всяких тулзов до максимально конкретизированных вроде реализация игрового объекта танка и всей его логики. И нижние слои не могут обращаться к верхним. Более того, сущности на одном слое не могут взаимодействовать между собой. Например, если какой-то модуль использует другой модуль, то этот модуль следует перенести на слой выше.

Однако, в моей реализации слой для используемых во всем проекте Сущностей пришлось вынести отдельно и позволить ему использовать данные со всех слоев и слоям использовать данные из Entities. Это было необходимо для того, чтобы можно было наделять Сущности новым функционалом через Компоненты, при этом держать их в доступном из любого места. В противном случае нам бы приходилось “размазывать” Entity по всем слоям.

Самих слоев 7: app, stages, entities, modules, widgets, features, shared.

В **shared** мы храним общие для всего проекта вещи. Конфиги, типы, данные, апихи, тулзы с утилитами. Это самый нижний слой, поэтому он не может использовать ничего извне, но все слои выше могут пользоваться всем, что лежит в shared.

В \*\*features(()) хранятся модули с абстрактной логикой игровых объектов, которая может быть применена к чему угодно. Например, у нас есть модули shooter и damage, которые наделяют игровые объекты такими механиками как стрельба и получение повреждений. Тут стоит держать только абстрактные модули, которые не связаны ни с одним конкретным игровым объектом, а могут быть применены к нескольким. Сейчас модули shooter и damage используют только танки. Но если мы захотим добавить десант, самолеты и турели, которые обладают таким же функционалом, то они также смогут использовать эти модули.

В **widgets** лежат уже более конкретизированные модули для определенных игровых объектов, но при этом все еще сохраняется определенный уровень абстракции. Например, в модуле tank лежит логика, которая отвечает за то как танк себя ведет при стрельбе или получении урона. Но тут нет логики, которая определяет при каких условиях стреляет танк. Это выносится на уровень выше, в modules.

Ну и в **modules** лежат модули с самыим низким уровнем абстракции. Например battle модуль определяет то как игровые объекты ведут себя во время боя, когда стреляют, что происходит во время стрельбы и так далее. Благодаря такому разбиению логики по трем слоям мы получаем возможность как угодно расширять поведение наших объектов.

Чтобы не запутаться и грамотно распределить модули по слоям, нужно помнить, что в слое features мы храним игровую логику, которая может принадлежать множеству различных игровых объектов. “Какой-то объект может стрелять” - это может быть хоть танк, хоть турель, хоть лазерная установка. Кто именно стреляет мы тут знать не должны.

На слое widgets мы храним логику отвечающую за поведение конкретных игровых объектов, расширяя абстрактный функционал с уровня ниже, но при этом все еще не сильно кокретезируем случаи, когда именно это все происходит. “У танка при стрельбе анимируется пушка” - а как именно будет инициирована стрельба мы тоже не знаем. Это может быть клик по кнопке, событие сокета, триггер от бота.

А вот на слое modules мы уже вольны описывать конкретные кейсы поведения. “Когда пользователь нажал на кнопку его танк выстрелил” - тут уже минимум абстракции, все довольно конкретизировано.

В **entities** у нас лежат Сущности, которые используют Компоненты из разных слоев, а также могут быть использованы несколькими слоями одновременно. А такое может быть. Это единственный слой, который нарушает правило зависимостей только от нижних уровней, но это оправдано тем, что нам не придется размазывать Сущность по всем слоям.

В **stages** у нас хранятся сцены, которые используют все, что лежит в уровнях ниже.

В app мы храним все, что касается всего приложения: инициализация рендера, тикера, менеджера сцен и так далее.

# Теперь о самом проекте

## Что реализовано

Да в целом, все, что указано в ТЗ, и немного больше.

✅ Изометрическая top-down локация
✅ Два недвигающихся персонажа за статическими ограждениями
✅ Игра за одного персонажа
✅ Броски гранат с разными характеристиками
✅ Партиклы взрывов
✅ Механика попадания и промаха с перелетами и недолетами
✅ Для броска гранаты удерживать кнопку с индикацией силы броска
✅ Блокировка кнопок до тех пор, пока граната не взорвется
✅ Появление цели после того как игрок отпустил кнопку броска
✅ Полет гранаты по кривой траектории (Высота подлета зависит от дистанции, чем дальше, тем ниже летит)
✅ Нанесение урона противнику с обновлением хелсбара
✅ Завершение игры победой, если у противника осталось 0 хп
✅ Обновление счетчика снарядов
✅ Завершение игры поражением, если у игрока закончились все снаряды, а вражеский танк еще жив
⚠️ Игровой цикл, рестарт
✅ Ресайзы под мобильные девайсы с разными ориентациями
✅ Хорошая организация файлов в проекте
✅ Чистый код
❌ Комментарии
✅ Инициатива в работе с архитектурой

## Known Issues

- Игра рестартует через location.reload() вместо того, чтобы перезагрузить сцену через StageManager, поскольку тот пока не доделан.
