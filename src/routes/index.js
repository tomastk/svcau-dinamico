import { Router } from "express";
const router = Router();

const pages = [
    {slug: '/', title: 'Guía de introducción a la Seguridad Vial', ejsName: 'index'},
    {slug: '/sobre-nosotros', title: 'Acerca de este sitio web', ejsName: 'about'},
    {slug: '/descargas', title: 'Descargas', ejsName: 'downloads'},
    {slug: '/reglas-de-transito', title: 'Reglas de Tránsito', ejsName: 'reglas'},
    {slug: '/seguridad-en-vehiculo', title: 'Seguridad en Vehiculo', ejsName: 'seguridad'},
    {slug: '/conduccion', title: 'Conducción', ejsName: 'conduccion'},
    {slug: '/conduccion-eficiente', title: 'Conducción Eficiente', ejsName: 'conduccion-eficiente'},
    {slug: '/mantenimiento', title: 'Mantenimiento', ejsName: 'mantenimiento'},
    {slug: '/condiciones-psicofisicas-del-conductor', title: 'Condiciones Psicofisicas del conductor', ejsName: 'condiciones'}
]


pages.forEach(page => {
    router.get(page.slug, (req, res) => {
        res.render(page.ejsName, {title: page.title})
    })
})


// router.get('/', (req, res) => res.render('index'))

export default router;