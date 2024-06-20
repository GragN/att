function ctg(x) { 
    return 1 / Math.tan(x) 
}

function C0 (S0, f) {
    const C0 = (2 * S0) * Math.tan((Math.PI / 4)+(f / 2))
    return C0
}

function model_1 ({z = 0, qh = 0, qH = 0, f = 0, S0 = 0}) {
    const y = 0.027
    const qv = y * z
    if (qv > qH && qH > qh) {
        const Kmin = Math.pow(ctg((Math.PI / 4)+(f / 2)), 2) - ((C0(S0, f) / qv) * Math.pow(ctg((Math.PI / 4)+(f / 2)), 2))
        console.log('case 1')
        return Kmin
    } else if (qH > qv && qv > qh) {
        const KH = (C0(S0, f) / qv) + ((qh / qv) * Math.pow(Math.tan((Math.PI / 4)+(f / 2)), 2))
        console.log('case 2')
        return KH
    } else if (qH > qh && qh > qv) {
        const Kmax = Math.pow(Math.tan((Math.PI / 4)+(f / 2)), 2) + (C0(S0, f) / qv)
        console.log('case 3')
        return Kmax
    } else {
        // console.log('z', z, 'qh', qh, 'qH', qH, 'f', f, 'S0', S0, 'y', y, 'qv', qv, 'C0(S0, f)', C0(S0, f))
        // return 'нет совпадений'
    }
}

function model_2 ({b, fj}) {
    const Kmin = (Math.tan(b)) / (Math.tan(b + fj))
    const Kmax = (Math.tan(b + fj)) / (Math.tan(b))
    return [Kmax, Kmin]
}

function model_3 ({A, B, q3}) {
    const c = A + B * Math.pow(q3, (1/2))
    return c
}

function model_4 ({i, j, g}) {
    let sum = 0
    for (let x = 0; x < i; x ++) {
        sum += (j[x].q - j[i].q) * g * j[x].h
    }

    const qzi = Math.round((j[i].q * g * j[i].h) + sum) 
    const qhi =  Math.round((j[i].v1 * (j[i].E / j[i].E1)) * (1 / (1 - j[i].v)) * qzi) 

    return [qzi, qhi]
}

export {model_1, model_2, model_3, model_4}