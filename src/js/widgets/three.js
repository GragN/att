import Option from './option';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class Three {
    constructor () {
        this.three = this.three.bind(this)
    }

    three () {
        console.log('трии работает')

        // параметры
        const option = new Option().option()

        // создание сцены
        const scene = new THREE.Scene()

        // установка размеров камеры
        const sizes = {
            width: 390,
            height: 390
        }

        // объявление камеры
        const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height)
        // установка камеры расстояния по z
        camera.position.x = option.camera_position_x
        camera.position.y = option.camera_position_y
        camera.position.z = option.camera_position_z
        
        // установка геометрии и материала
        const geometry = new THREE.BoxGeometry(option.geometry, option.geometry, option.geometry)
        const material = new THREE.MeshNormalMaterial()

        // функция создания сетки кубов и установки их расстояния
        let arr = []
        if (option.distance > 1) {
            for (let x = option.distance - option.geometry; x < option.number_of_cubes.x * option.distance; x += option.distance) {
                for (let y = option.distance - option.geometry; y < option.number_of_cubes.y * option.distance; y += option.distance) {
                    for (let z = option.distance - option.geometry; z < option.number_of_cubes.z * option.distance; z += option.distance) {
                        const mesh = new THREE.Mesh(geometry, material)
                        mesh.position.set(x, y, z)
                        arr.push(mesh)
                    }
                }
            }
        } else {
            for (let x = 0; x < option.number_of_cubes.x; x += 1) {
                for (let y = 0; y < option.number_of_cubes.y; y += 1) {
                    for (let z = 0; z < option.number_of_cubes.z; z += 1) {
                        const mesh = new THREE.Mesh(geometry, material)
                        mesh.position.set(x, y, z)
                        arr.push(mesh)
                    }
                }
            }
        }

        // добавление сетки в сцену
        scene.add(...arr)
        // добавление камеры в сцену
        scene.add(camera)

        // потом опишу
        const canvas = document.querySelector('.canvas_three')

        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        const renderer = new THREE.WebGLRenderer({canvas})
        renderer.setSize(sizes.height, sizes.width)
        renderer.render(scene, camera)

        const tick = () => {
            controls.update();
            renderer.render(scene, camera);

            window.requestAnimationFrame(tick);
        }

        tick()

    }
}