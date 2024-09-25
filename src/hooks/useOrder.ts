import { useEffect, useState } from "react";
import { Food, BillType } from "../types/types";

const useOrder = () => {

  const startingBill: BillType = {
    food: [],
    tipPer: 0,
    subtotal: 0,
    tip: 0,
    total: 0
  }

  const [bills, setBills] = useState<BillType[]>([])
  const [actualBill, setActualBill] = useState<BillType>(startingBill);

    const addBill = () => {
        setActualBill(startingBill);
        setBills((p: BillType[]) => [...p, actualBill]);
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
        const tipNoFixed = subtotal * (actualBill.tipPer / 100);
        const tip = Number(tipNoFixed.toFixed(2));
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