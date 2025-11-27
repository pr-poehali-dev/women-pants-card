import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <Card className="max-w-4xl w-full overflow-hidden border-0 shadow-none">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12">
          <div className="relative group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-50">
              <img
                src="https://cdn.poehali.dev/files/177f7748-d6d9-4893-aa25-c0d075599e12.png"
                alt="Женские вельветовые брюки"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black">
                Женские брюки
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light">
                Вельветовые
              </p>
            </div>

            <div className="h-px bg-gray-200 w-full" />

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-light text-black">4 990 ₽</span>
                <span className="text-lg text-gray-400 line-through">6 990 ₽</span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Классические женские брюки из мягкого вельвета. Идеальная посадка и комфорт на весь день. 
                Универсальная модель для создания стильных образов.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-black">Размер</label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border transition-all duration-200 ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400 text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-black hover:bg-gray-800 text-white h-14 text-base font-light tracking-wide transition-colors duration-200"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Добавить в корзину
            </Button>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center space-y-1">
                <Icon name="Truck" size={24} className="mx-auto text-gray-600" />
                <p className="text-xs text-gray-600">Бесплатная доставка</p>
              </div>
              <div className="text-center space-y-1">
                <Icon name="RefreshCw" size={24} className="mx-auto text-gray-600" />
                <p className="text-xs text-gray-600">Возврат 14 дней</p>
              </div>
              <div className="text-center space-y-1">
                <Icon name="ShieldCheck" size={24} className="mx-auto text-gray-600" />
                <p className="text-xs text-gray-600">Гарантия качества</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
