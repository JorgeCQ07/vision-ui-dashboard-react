import { child, get, set, ref, push, orderByChild } from 'firebase/database';
import db from '../data/firebaseConfig.js';

//ID sequences
const counters = require("../data/counters");
const nextIncId = counters.nextIncId;
const nextExpId = counters.nextExpId;

// ...
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
// export async function getBillingOrderByDate(userId, currentDate) {
//     try {
//         //Read all data from finanza
//         const snapshot = await get(child(ref(db), `finanza/`));
//         if (snapshot.exists()) {
//             const data = snapshot.val();
//             //Filter data by userId
//             const filteredData = Object.keys(data)
//                 .filter(key => data[key].userId === userId).map(key => data[key]);
//             //Filter data by current month
//             const currentMonth = currentDate.split("/")[0];
//             const filteredDataByMonth = filteredData.filter(key => key.date.split("/")[0] === currentMonth);
//             return filteredDataByMonth;

//         } else {
//             throw new Error("No data available");
//         }
//     } catch (error) {
//         alert(error.message);
//     }
// }
export async function getBillingOrderByDate(userId, currentDate) {
    try {
        //Read all data from finanza
        const snapshot = await get(child(ref(db), `finanza/`));
        if (snapshot.exists()) {
            const data = snapshot.val();
            //Filter data by userId
            const filteredData = Object.keys(data)
                .filter(key => data[key].userId === userId)
                .map(key => ({ ...data[key], id: key }));
            //Filter data by current month
            const currentMonth = currentDate.split("/")[0];
            const filteredDataByMonth = filteredData.filter(
                key => key.date.split("/")[0] === currentMonth
            );
            return filteredDataByMonth;
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
export function postBilling(description, amount, date, type, userId) {
    let nextId;
    if (type === "Ingreso") {
        const nextIncId = counters.nextIncId;
        nextId = `INC-${nextIncId.toString().padStart(3, "0")}`;
        counters.nextIncId = nextIncId + 1;
    } else {
        const nextExpId = counters.nextExpId;
        nextId = `EXP-${nextExpId.toString().padStart(3, "0")}`;
        counters.nextExpId = nextExpId + 1;
    }

    const newFinanza = {
        description: description,
        amount: amount,
        date: date,
        type: type,
        userId: userId
    };

    // TODO: Send newFinanza to server
    set(ref(db, `finanza/${nextId}`), newFinanza);
}