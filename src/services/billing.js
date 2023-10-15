import { child, get, set, ref, push, orderByChild } from 'firebase/database';
import db from '../data/firebaseConfig.js';

//Devuelve todas las finanzas de un usuario
export async function getBilling(userId) {
    try {
        //Read all data from finanza
        const snapshot = await get(child(ref(db), `finanza/`));
        if (snapshot.exists()) {
            const data = snapshot.val();
            //Filter data by userId
            const filteredData = Object.keys(data)
                .filter(key => data[key].userId === userId).map(key => data[key]);
            return filteredData;
        } else {
            throw new Error("No data available");
        }
    } catch (error) {
        alert(error.message);
    }
}

//Devuelve todas las finanzas de un usuario ordenadas por fecha
export async function getBillingOrderByDate(userId, currentDate) {
    try {
        //Read all data from finanza
        const snapshot = await get(child(ref(db), `finanza/`));
        if (snapshot.exists()) {
            const data = snapshot.val();
            //Filter data by userId
            const filteredData = Object.keys(data)
                .filter(key => data[key].userId === userId).map(key => data[key]);
            //Filter data by date
            const filteredDataByDate = filteredData.filter(item => item.date === currentDate);
            return filteredDataByDate;
        } else {
            throw new Error("No data available");
        }
    } catch (error) {
        alert(error.message);
    }
}

//Obtener el balance de un usuario
export async function getBalance(userId, currentDate) {
    try {
        const data = await getBillingOrderByDate(userId, currentDate);
        data.reduce((a, b) => a + (b['type'] === "Ingreso" ? b['amount'] : -b['amount']), 0);
        return data.reduce((a, b) => a + (b['type'] === "Ingreso" ? b['amount'] : -b['amount']), 0);
    } catch (error) {
        alert(error.message);
    }
}

//Guarda en finanza/{autoId}
//@TODO: Si es gasto inicar el autoId con "EXP-", si es ingreso iniciar con "INC-"
export function postBilling(description, amount, date, type, userId) {
    const newFinanza = ref(db, `finanza/`);
    const newFinanzaRef = push(newFinanza);
    set(newFinanzaRef, {
        description: description,
        amount: amount,
        date: date,
        type: type,
        userId: userId
    });
}