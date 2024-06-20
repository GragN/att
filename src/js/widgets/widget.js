import { data } from "./data"
import { model_1, model_2, model_3, model_4 } from "./functions"
import Chart from 'chart.js/auto'

export default class Popover {
  constructor(element) {
    this.element = element;

    // binds
    this.popover = this.popover.bind(this);
    this.select_model = this.select_model.bind(this)
    this.btn_calculate = this.btn_calculate.bind(this)
    this.btn_delete = this.btn_delete.bind(this)
    this.btn_append = this.btn_append.bind(this)

    this.btn1 = this.element.querySelector(".btn");
    this.btn1.addEventListener("click", this.popover);

    this.btn2 = this.element.querySelector('.btn_calculate')
    this.btn2.addEventListener("click", this.btn_calculate)

    this.btn3 = this.element.querySelector('.btn_delete')
    this.btn3.addEventListener("click", this.btn_delete)

    this.btn4 = this.element.querySelector('.btn_append')
    this.btn4.addEventListener("click", this.btn_append)

    this.select1 = this.element.querySelector('.select_model')
    this.select1.addEventListener('click', this.select_model)

    this.select2 = this.element.querySelector('.select_model_data')

    this.span1 = this.element.querySelector('.span_result_number')

    this.input1 = this.element.querySelector('.input_data')

    this.textarea = this.element.querySelector('.textarea')

    this.functional = this.element.querySelector('.functional')

    this.list1 = this.element.querySelector('.list')

    this.ctx = this.element.querySelector('.canvas_chart').getContext('2d')

    this.chart = null

    this.img_model_1 = this.element.querySelector('.img_model_1')
    this.img_model_2 = this.element.querySelector('.img_model_2')
    this.img_model_3 = this.element.querySelector('.img_model_3')
    this.img_model_4 = this.element.querySelector('.img_model_4')

    this.imgg = this.element.querySelectorAll('.img_general')
  }

  function_textarea() {
    this.textarea.innerHTML = `${JSON.stringify(data)}`
    const s = window.getComputedStyle(this.functional)
    this.list1.style.height = s.height
    this.textarea.style.height = `calc(${s.height} - 40px)`
    this.textarea.style.maxHeight = `calc(${s.height} - 40px)`
    this.textarea.style.minHeight = `calc(${s.height} - 40px)`    
  }

  function_chart() {
    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Значение по умолчанию'],
        datasets: [{
          data: [0],
          label: 'Значение по умолчанию',
          borderWidth: 1
        },
       ]
      }
    })
  }

  select_model() {
    if (this.select1.value == 'Модель 1') {
      this.input1.placeholder = '{"z":0,"qh":0,"qH":0,"f":0,"S0":0}'
      this.select2.innerHTML = ''

      for (let x = 0; x < data.model_1.length; x ++) {
        const o = document.createElement("option");
        this.select2.appendChild(o)
        o.innerHTML = `
        z: ${data.model_1[x].z}, 
        qh: ${data.model_1[x].qh}, 
        qH: ${data.model_1[x].qH}, 
        f: ${data.model_1[x].f},
        S0: ${data.model_1[x].S0}`
      }

      for (let x = 0; x < this.imgg.length; x ++) {
        this.imgg[x].style.display = 'none'
      }
      this.img_model_1.style.display = 'block'
    }
    else if (this.select1.value == 'Модель 2') {
      this.input1.placeholder = '{"b":0,"fj":0}'
      this.select2.innerHTML = ''

      for (let x = 0; x < data.model_2.length; x ++) {
        const o = document.createElement("option");
        this.select2.appendChild(o)
        o.innerHTML = `
        b: ${data.model_2[x].b}, 
        fj: ${data.model_2[x].fj}`
      }

      for (let x = 0; x < this.imgg.length; x ++) {
        this.imgg[x].style.display = 'none'
      }
      this.img_model_2.style.display = 'block'

    }
    else if (this.select1.value == 'Модель 3') {
      this.input1.placeholder = '{"A":0,"B":0,"q3":0}'
      this.select2.innerHTML = ''

      for (let x = 0; x < data.model_3.length; x ++) {
        const o = document.createElement("option");
        this.select2.appendChild(o)
        o.innerHTML = `
        A: ${data.model_3[x].A}, 
        B: ${data.model_3[x].B}, 
        q3: ${data.model_3[x].q3},`
    }

    for (let x = 0; x < this.imgg.length; x ++) {
      this.imgg[x].style.display = 'none'
    }
    this.img_model_3.style.display = 'block'
  }
  else if (this.select1.value == 'Модель 4') {
    this.input1.placeholder = '{"j":[bif data],"g":0,"i":0}'
    this.select2.innerHTML = ''

    for (let x = 0; x < data.model_4.length; x ++) {
      const o = document.createElement("option");
      this.select2.appendChild(o)
      o.innerHTML = `
      j: [bid data], 
      g: ${data.model_4[x].g}, 
      i: ${data.model_4[x].i},`
  }

  for (let x = 0; x < this.imgg.length; x ++) {
    this.imgg[x].style.display = 'none'
  }
  this.img_model_4.style.display = 'block'
  }
}

  btn_calculate() {
    if (this.select1.value == 'Модель 1') {
      this.span1.innerHTML = `${model_1(data.model_1[this.select2.selectedIndex])}`
      this.function_textarea()
    } 
    else if (this.select1.value == 'Модель 2') {
      this.span1.innerHTML = `${model_2(data.model_2[this.select2.selectedIndex])}`
      this.function_textarea()
    }
    else if (this.select1.value == 'Модель 3') {
      this.span1.innerHTML = `${model_3(data.model_3[this.select2.selectedIndex])}`
      this.function_textarea()
    }
    else if (this.select1.value == 'Модель 4') {
      this.span1.innerHTML = `${model_4(data.model_4[this.select2.selectedIndex])}`
      this.function_textarea()
    }
  }

  btn_delete() {
    if (this.select1.value == 'Модель 1') {
      data.model_1.splice(this.select2.selectedIndex, 1)
      this.select_model()
      this.function_textarea()
    } 
    else if (this.select1.value == 'Модель 2') {
      data.model_2.splice(this.select2.selectedIndex, 1)
      this.select_model()
      this.function_textarea()
    }
    else if (this.select1.value == 'Модель 3') {
      data.model_3.splice(this.select2.selectedIndex, 1)
      this.select_model()
      this.function_textarea()
    }
    else if (this.select1.value == 'Модель 4') {
      data.model_4.splice(this.select2.selectedIndex, 1)
      this.select_model()
      this.function_textarea()
    }
  }

  btn_append() {
    const p = this.input1.value
    if (this.select1.value == 'Модель 1' && p.includes('{')) {
      try {
        const p = JSON.parse(this.input1.value)
        data.model_1.push(p)
        this.select_model()
        this.function_textarea()
      } catch {
        this.input1.value = ''
        this.input1.placeholder = 'Некорректные данные'
      }
    } 
    else if (this.select1.value == 'Модель 2' && p.includes('{')) {
      try {
        const p = JSON.parse(this.input1.value)
        data.model_2.push(p)
        this.select_model()
        this.function_textarea()
      } catch {
        this.input1.value = ''
        this.input1.placeholder = 'Некорректные данные'
      }
    } 
    else if (this.select1.value == 'Модель 3' && p.includes('{')) {
      try {
        const p = JSON.parse(this.input1.value)
        data.model_3.push(p)
        this.select_model()
        this.function_textarea()
      } catch {
        this.input1.value = ''
        this.input1.placeholder = 'Некорректные данные'
      }
    } 
    else if (this.select1.value == 'Модель 4' && p.includes('{')) {
      try {
        const p = JSON.parse(this.input1.value)
        data.model_4.push(p)
        this.select_model()
        this.function_textarea()
      } catch {
        this.input1.value = ''
        this.input1.placeholder = 'Некорректные данные'
      }
    } 
    else {
        this.input1.value = ''
        this.input1.placeholder = 'Некорректные данные'
    }
  }

  popover() {
    if (this.select1.value == 'Модель 1') {
      let array = []
      const labels = []
      for (let x = 0; x < data.model_1.length; x ++) {
        array.push(model_1(data.model_1[x]))
        labels.push(x + 1)
      }
      
      this.chart.data.labels = labels

      this.chart.data = {
        labels: labels,
        datasets: [{
          data: array,
          label: 'Cases',
          borderWidth: 2
        }
       ]
      }
      this.chart.update()
    }
    else if (this.select1.value == 'Модель 2') {
      let array = []
      const labels = []
      const Kmax = []
      const Kmin = []
      for (let x = 0; x < data.model_2.length; x ++) {
        array.push(model_2(data.model_2[x]))
        Kmax.push(array[x][0])
        Kmin.push(array[x][1])
        labels.push(x + 1)
      }

      this.chart.data.labels = labels

      this.chart.data = {
        labels: labels,
        datasets: [{
          data: Kmax,
          label: 'Kmax',
          borderWidth: 2
        },
        {
          data: Kmin,
          label: 'Kmin',
          borderWidth: 2
        },
       ]
      }
      this.chart.update()
    }
    else if (this.select1.value == 'Модель 3') {
      let array = []
      const labels = []
      for (let x = 0; x < data.model_3.length; x ++) {
        array.push(model_3(data.model_3[x]))
        labels.push(x + 1)
      }
      
      this.chart.data.labels = labels

      this.chart.data = {
        labels: labels,
        datasets: [{
          data: array,
          label: 'c',
          borderWidth: 2
        }
       ]
      }
      this.chart.update()
    }
    else if (this.select1.value == 'Модель 4') {
      let array = []
      const labels = []
      const qzi = []
      const qhi = []
      for (let x = 0; x < data.model_4.length; x ++) {
        array.push(model_4(data.model_4[x]))
        qzi.push(array[x][0])
        qhi.push(array[x][1])
        labels.push(x + 1)
      }

      this.chart.data.labels = labels

      this.chart.data = {
        labels: labels,
        datasets: [{
          data: qzi,
          label: 'qzi',
          borderWidth: 2
        },
        {
          data: qhi,
          label: 'qhi',
          borderWidth: 2
        },
       ]
      }
      this.chart.update()
    }
  }
}
