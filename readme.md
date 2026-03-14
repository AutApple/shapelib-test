# shapelib

Библиотека TypeScript для работы с геометрическими фигурами.

## Сборка и установка
Склонируйте репозиторий, установите зависимости и скомпилируйте библиотеку:

```bash
git clone https://github.com/AutApple/shapelib-test
cd shapelib-test
npm install
npm run build
```

Затем в другом проекте установите её локально:
```bash
npm install ../shapelib-test
```
где ../shapelib-test — путь к директории библиотеки.

После установки библиотеку можно импортировать:
```ts
import { Rectangle } from 'shapelib';
```
## Использование

```ts
import { Rectangle, Circle, Triangle, ShapeScaleEvent } from 'shapelib';

// Rectangle
const rect = new Rectangle({ width: 10, height: 20 });
rect.getArea();       // 200
rect.getPerimeter();  // 60
rect.getDiagonal();   // 22.36
rect.isSquare();      // false
rect.addEventListener('scale', (e) => {
    console.log(`Rect got scaled by ${(e as ShapeScaleEvent).factor}`); 
});
rect.scale(2);        // Rectangle [width = 20, height = 40] + Rect got scaled by 2

// Circle
const circle = new Circle({ radius: 5 });
circle.getArea();       // 78.53
circle.getDiameter();   // 10
circle.getPerimeter();  // 31.41

// Triangle
const triangle = new Triangle({ a: 3, b: 4, c: 5 });
triangle.getArea();        // 6
triangle.isRight();        // true
triangle.isIsosceles();    // false
triangle.isEquilateral();  // false
```

## Добавление новых фигур

Создайте новый класс, наследующий `BaseShape`, и реализуйте необходимые методы:

```ts
import { BaseShape } from 'shapelib'

class Trapezoid extends BaseShape {
    constructor(config: TrapezoidConfiguration) { super() }
    getArea(): number { ... }
    getPerimeter(): number { ... }
    protected doScale(factor: number): Trapezoid { ... } // Наследовать нужно именно doScale, так как scale не абстрактный в силу того что диспатчит событие
    toString(): string { ... }
}
```