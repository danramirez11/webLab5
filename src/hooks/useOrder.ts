import { useEffect, useState } from "react";
import { Food, BillType } from "../types/types";

const useOrder = () => {
    
    const [actualBill, setActualBill] = useState<BillType>({
      food: [],
      tipPer: 0,
      subtotal: 0,
      tip: 0,
      total: 0
  });

    const addBill = () => {
        setActualBill({
          food: [],
          tipPer: 0,
          subtotal: 0,
          tip: 0,
          total: 0
      });
    };

    const addFood = (food: Food) => {
        if (actualBill.food.some((item) => item.id === food.id)) {
          setActualBill((p: BillType) => ({
            ...p,
            food: p.food.map((item) =>
              item.id === food.id ? { ...item, quantity: item.quantity + food.quantity } : item
            ),
          }));
        } else {
          setActualBill((p: BillType) => ({ ...p, food: [...p.food, food] }));
        }
      }

      const removeFood = (food: Food) => {
        if (actualBill.food.some((item) => item.id === food.id)) {
          setActualBill((p: BillType) => ({
            ...p,
            food: p.food.map((item) =>
              item.id === food.id
                ? { ...item, quantity: Math.max(item.quantity - 1, 0) } 
                : item
            ).filter((item) => item.quantity > 0),
          }));
        }
      };

    const addTip = (tip: number) => {
        setActualBill((p: BillType) => {
            return {
                ...p,
                tipPer: tip
            }
        })
    }

    const calculateBill = () => {
        const subtotal = actualBill.food.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tip = subtotal * (actualBill.tipPer / 100);
        const total = subtotal + tip;
      
        setActualBill((prevBill) => ({
          ...prevBill,
          subtotal,
          tip,
          total,
        }));
      };

    useEffect(() => {
        calculateBill();
    }, [actualBill.food, actualBill.tipPer])

    return { 
        actualBill, 
        addBill, 
        addFood,
        removeFood,
        addTip,
    };
}

export default useOrder;