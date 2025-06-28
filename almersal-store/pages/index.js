import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AlMersalStore() {
  const [products, setProducts] = useState([
    {
      name: "ورق تصوير A4 80 جم",
      price: "132",
      description: "ورق تصوير عالي الجودة مناسب لجميع أنواع الطابعات.",
    },
    {
      name: "قلم جاف روتو",
      price: "4.5",
      description: "قلم جاف سلس للكتابة اليومية.",
    },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: "", price: "", description: "" });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">المرسال للتوريدات</h1>
      <h2 className="text-xl">منتجاتنا</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Card key={index}>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm">{product.description}</p>
              <p className="text-base font-bold">السعر: {product.price} جنيه</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl mb-2">إضافة منتج جديد</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="اسم المنتج"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <Input
            placeholder="السعر"
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <Textarea
            placeholder="وصف المنتج"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
        </div>
        <Button className="mt-4" onClick={addProduct}>
          إضافة المنتج
        </Button>
      </div>
    </div>
  );
}