import { useEffect, useState } from "react";
import { Food, Bill } from "../types/types";

const useOrder = () => {
    const startingBill = {
        food: [],
        tipPer: 0,
        subtotal: 0,
        tip: 0,
        total: 0
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [bills, setBills] = useState<Bill[]>([]);
    const [actualBill, setActualBill] = useState<Bill>(startingBill);

    const addBill = (bill: Bill) => {
        setBills((p) => [...p, bill]);
        setActualBill(startingBill);
    };

    const addFood = (food: Food) => {
        if (actualBill.food.some((item) => item.id === food.id)) {
            setActualBill((p: Bill) => {
                return {
                    ...p,
                    food: p.food.map((item) => {
                        if (item.id === food.id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1
                            }
                        }
                        return item;
                    })
                }
            })
        } else {
            setActualBill((p: Bill) => {
                return {
                    ...p,
                    food: [...p.food, food]
                }
            })
        }
    }

    const removeFood = (food: Food) => {
        if (actualBill.food.some((item) => item.id === food.id)) {
            setActualBill((p: Bill) => {
                return {
                    ...p,
                    food: p.food.map((item) => {
                        if (item.id === food.id) {
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            }
                        }
                        return item;
                    }).filter((item) => item.quantity > 0)
                }
            })
    }}

    const addTip = (tip: number) => {
        setActualBill((p: Bill) => {
            return {
                ...p,
                tipPer: tip
            }
        })
    }

    const calculateBill = () => {
        const subtotal = actualBill.food.reduce((acc, item) => acc + item.price*item.quantity, 0);
        const tip = subtotal * (actualBill.tipPer / 100);
        const total = subtotal + tip;

        setActualBill((p) => {
            return {
                ...p,
                subtotal,
                tip,
                total
            }
        })
    }

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