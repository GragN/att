import { model_1, model_2, model_3, model_4 } from "./functions";
import { data } from "./data";


function exe (model) {
    let array = []
    if (model == 'model_1') {
        for (let x = 0; x < data.model_1.length; x ++) {
            const result = Math.round(model_1(data.model_1[x].z, data.model_1[x].qh, data.model_1[x].qH, data.model_1[x].f, data.model_1[x].S0))
            array.push(result)
        }
    } else if (model == 'model_2') {
        for (let x = 0; x < data.model_2.length; x ++) {
            const result = Math.round(model_2(data.model_2[x].b, data.model_2[x].fj))
            array.push(result)
        }
    } else if (model == 'model_3') {
        for (let x = 0; x < data.model_3.length; x ++) {
            const result = Math.round(model_3(data.model_3[x].A, data.model_3[x].B, data.model_3[x].q3))
            array.push(result)
        }
    } else if (model == 'model_4') {
        for (let x = 0; x < data.model_4.length; x ++) {
            const result = model_4(3, data.model_4[x].j, 10)
            array.push(result)
        }
    }
    return array
}

export {exe}