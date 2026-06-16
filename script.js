// ──────────────────────────────────────────────
// DATOS: 207 proyectos de título aprobados
// Programa de Diseño UCH — plan vigente desde 2019
// Semestres: 2021-2 a 2024-2
// Fuente: marotapia.github.io/sitioweb
// ──────────────────────────────────────────────

const proyectos = [
    { semestre: "2021-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.2, examen: 6.5 },
    { semestre: "2021-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 5.8, examen: 6.0 },
    { semestre: "2021-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.5, examen: 7.0 },
    { semestre: "2021-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.0, examen: 7.0 },
    { semestre: "2021-2", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 5.5, examen: 6.0 },
    { semestre: "2021-2", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.3, examen: 5.7 },
    { semestre: "2021-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.8, examen: 6.3 },
    { semestre: "2021-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.2, examen: 5.5 },
    { semestre: "2021-2", titulo: "Diseñadora", guia: "Hans Stange Marcus", pt1: 6.0, examen: 6.5 },
    { semestre: "2021-2", titulo: "Diseñador", guia: "Hans Stange Marcus", pt1: 5.5, examen: 5.8 },
    { semestre: "2021-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Lorna Lares López", pt1: 6.1, examen: 6.2 },
    { semestre: "2021-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Pablo Domínguez González", pt1: 5.7, examen: 6.0 },
    { semestre: "2022-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.8, examen: 7.0 },
    { semestre: "2022-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.3, examen: 6.5 },
    { semestre: "2022-1", titulo: "Diseñadora", guia: "Eduardo Castillo Espinoza", pt1: 5.9, examen: 6.2 },
    { semestre: "2022-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.9, examen: 7.0 },
    { semestre: "2022-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.5, examen: 6.8 },
    { semestre: "2022-1", titulo: "Diseñadora", guia: "Rubén Jacob Dazarola", pt1: 5.8, examen: 6.0 },
    { semestre: "2022-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.5, examen: 5.8 },
    { semestre: "2022-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 6.0, examen: 6.5 },
    { semestre: "2022-1", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.3, examen: 7.0 },
    { semestre: "2022-1", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 5.8, examen: 6.1 },
    { semestre: "2022-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Hans Stange Marcus", pt1: 6.2, examen: 6.7 },
    { semestre: "2022-1", titulo: "Diseñador", guia: "Alfredo Mora Briones", pt1: 5.5, examen: 5.8 },
    { semestre: "2022-1", titulo: "Diseñadora", guia: "Alfredo Mora Briones", pt1: 6.0, examen: 6.3 },
    { semestre: "2022-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "Pablo Domínguez González", pt1: 5.8, examen: 6.0 },
    { semestre: "2022-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Lorna Lares López", pt1: 6.3, examen: 6.5 },
    { semestre: "2022-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Paola Benavides Bermúdez", pt1: 5.5, examen: 5.9 },
    { semestre: "2022-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.5, examen: 6.8 },
    { semestre: "2022-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.0, examen: 6.3 },
    { semestre: "2022-2", titulo: "Diseñadora", guia: "Eduardo Castillo Espinoza", pt1: 5.7, examen: 6.0 },
    { semestre: "2022-2", titulo: "Diseñador", guia: "Eduardo Castillo Espinoza", pt1: 5.5, examen: 5.8 },
    { semestre: "2022-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 7.0, examen: 7.0 },
    { semestre: "2022-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.3, examen: 6.5 },
    { semestre: "2022-2", titulo: "Diseñadora", guia: "Rubén Jacob Dazarola", pt1: 6.0, examen: 6.2 },
    { semestre: "2022-2", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.8, examen: 6.1 },
    { semestre: "2022-2", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 6.0, examen: 6.4 },
    { semestre: "2022-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.3, examen: 5.5 },
    { semestre: "2022-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.8, examen: 6.0 },
    { semestre: "2022-2", titulo: "Diseñador", guia: "Hans Stange Marcus", pt1: 5.8, examen: 6.0 },
    { semestre: "2022-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Hans Stange Marcus", pt1: 6.5, examen: 6.8 },
    { semestre: "2022-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Mauricio Vico Sánchez", pt1: 6.0, examen: 6.2 },
    { semestre: "2022-2", titulo: "Diseñadora", guia: "Alfredo Mora Briones", pt1: 5.5, examen: 5.7 },
    { semestre: "2022-2", titulo: "Diseñador", guia: "Pablo Domínguez González", pt1: 6.0, examen: 6.5 },
    { semestre: "2022-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Paola Benavides Bermúdez", pt1: 5.7, examen: 6.0 },
    { semestre: "2022-2", titulo: "Diseñadora", guia: "Lorna Lares López", pt1: 6.0, examen: 6.3 },
    { semestre: "2022-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Gabriela Pradenas Guentherodt", pt1: 5.8, examen: 6.1 },
    { semestre: "2022-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Gabriela Pradenas Guentherodt", pt1: 6.2, examen: 6.5 },
    { semestre: "2022-2", titulo: "Diseñador", guia: "Daniel Reyes León", pt1: 5.5, examen: 5.8 },
    { semestre: "2023-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.7, examen: 7.0 },
    { semestre: "2023-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.2, examen: 6.5 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Eduardo Castillo Espinoza", pt1: 5.8, examen: 6.2 },
    { semestre: "2023-1", titulo: "Diseñador", guia: "Eduardo Castillo Espinoza", pt1: 5.5, examen: 5.7 },
    { semestre: "2023-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.8, examen: 7.0 },
    { semestre: "2023-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.3, examen: 6.7 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Rubén Jacob Dazarola", pt1: 5.9, examen: 6.0 },
    { semestre: "2023-1", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.7, examen: 6.0 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 6.1, examen: 6.4 },
    { semestre: "2023-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.5, examen: 5.8 },
    { semestre: "2023-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 6.0, examen: 6.3 },
    { semestre: "2023-1", titulo: "Diseñador", guia: "Hans Stange Marcus", pt1: 5.8, examen: 6.2 },
    { semestre: "2023-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Hans Stange Marcus", pt1: 6.5, examen: 6.8 },
    { semestre: "2023-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Pablo Domínguez González", pt1: 5.7, examen: 6.0 },
    { semestre: "2023-1", titulo: "Diseñador", guia: "Alfredo Mora Briones", pt1: 5.5, examen: 5.9 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Alfredo Mora Briones", pt1: 6.0, examen: 6.4 },
    { semestre: "2023-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Mauricio Vico Sánchez", pt1: 6.0, examen: 6.3 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Paola Benavides Bermúdez", pt1: 5.8, examen: 6.0 },
    { semestre: "2023-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Lorna Lares López", pt1: 6.3, examen: 6.6 },
    { semestre: "2023-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Gabriela Pradenas Guentherodt", pt1: 5.8, examen: 6.0 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Macarena Ruiz Balart", pt1: 5.7, examen: 5.9 },
    { semestre: "2023-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "René Perea Morales", pt1: 5.5, examen: 5.8 },
    { semestre: "2023-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Iván Méndez Olivares", pt1: 5.8, examen: 6.2 },
    { semestre: "2023-1", titulo: "Diseñadora", guia: "Andrea Wechsler Pizarro", pt1: 6.0, examen: 6.5 },
    { semestre: "2023-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.5, examen: 7.0 },
    { semestre: "2023-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.0, examen: 6.4 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Eduardo Castillo Espinoza", pt1: 5.8, examen: 6.0 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "Eduardo Castillo Espinoza", pt1: 5.5, examen: 5.8 },
    { semestre: "2023-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.9, examen: 7.0 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "Rubén Jacob Dazarola", pt1: 5.8, examen: 6.2 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Rubén Jacob Dazarola", pt1: 6.0, examen: 6.3 },
    { semestre: "2023-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Felipe Cortez Orellana", pt1: 5.8, examen: 6.2 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 6.0, examen: 6.5 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.5, examen: 5.8 },
    { semestre: "2023-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.8, examen: 6.0 },
    { semestre: "2023-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.5, examen: 5.7 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Hans Stange Marcus", pt1: 6.2, examen: 6.5 },
    { semestre: "2023-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Hans Stange Marcus", pt1: 5.8, examen: 6.0 },
    { semestre: "2023-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Mauricio Vico Sánchez", pt1: 6.0, examen: 6.4 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "Alfredo Mora Briones", pt1: 5.7, examen: 6.0 },
    { semestre: "2023-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Pablo Domínguez González", pt1: 5.8, examen: 6.2 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "Pablo Domínguez González", pt1: 6.0, examen: 6.3 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Lorna Lares López", pt1: 6.1, examen: 6.5 },
    { semestre: "2023-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Gabriela Pradenas Guentherodt", pt1: 5.8, examen: 6.0 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Macarena Ruiz Balart", pt1: 5.5, examen: 5.9 },
    { semestre: "2023-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Iván Méndez Olivares", pt1: 5.8, examen: 6.1 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "René Perea Morales", pt1: 5.5, examen: 5.8 },
    { semestre: "2023-2", titulo: "Diseñadora", guia: "Andrea Wechsler Pizarro", pt1: 6.0, examen: 6.4 },
    { semestre: "2023-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Bruno Perelli Soto", pt1: 5.5, examen: 5.7 },
    { semestre: "2023-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Jenny Abud Carrillo", pt1: 6.2, examen: 6.5 },
    { semestre: "2023-2", titulo: "Diseñador", guia: "Paola De la Sotta Lazzerini", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.8, examen: 7.0 },
    { semestre: "2024-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.3, examen: 6.6 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Eduardo Castillo Espinoza", pt1: 5.8, examen: 6.1 },
    { semestre: "2024-1", titulo: "Diseñador", guia: "Eduardo Castillo Espinoza", pt1: 5.5, examen: 5.9 },
    { semestre: "2024-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 7.0, examen: 7.0 },
    { semestre: "2024-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.5, examen: 6.8 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Rubén Jacob Dazarola", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-1", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.8, examen: 6.2 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 6.2, examen: 6.6 },
    { semestre: "2024-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-1", titulo: "Diseñador", guia: "Hans Stange Marcus", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Hans Stange Marcus", pt1: 6.5, examen: 6.8 },
    { semestre: "2024-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Mauricio Vico Sánchez", pt1: 6.2, examen: 6.5 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Alfredo Mora Briones", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "Pablo Domínguez González", pt1: 5.8, examen: 6.2 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Lorna Lares López", pt1: 6.2, examen: 6.5 },
    { semestre: "2024-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Gabriela Pradenas Guentherodt", pt1: 5.8, examen: 6.1 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Macarena Ruiz Balart", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Iván Méndez Olivares", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-1", titulo: "Diseñador", guia: "René Perea Morales", pt1: 5.5, examen: 5.9 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Andrea Wechsler Pizarro", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-1", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Jenny Abud Carrillo", pt1: 6.3, examen: 6.6 },
    { semestre: "2024-1", titulo: "Diseñador", guia: "Paola De la Sotta Lazzerini", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-1", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Bruno Perelli Soto", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-1", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Sergio Donoso Cisternas", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Rodrigo Dueñas Santander", pt1: 5.5, examen: 5.7 },
    { semestre: "2024-1", titulo: "Diseñador con mención Industrial y Servicios", guia: "Pamela Gatica Ramírez", pt1: 5.8, examen: 6.2 },
    { semestre: "2024-1", titulo: "Diseñadora", guia: "Trinidad Jove Avilés", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-1", titulo: "Diseñador", guia: "Juan Carlos Lepe Muñoz", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 7.0, examen: 7.0 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Eduardo Castillo Espinoza", pt1: 6.5, examen: 6.7 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Eduardo Castillo Espinoza", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Eduardo Castillo Espinoza", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.8, examen: 7.0 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Rubén Jacob Dazarola", pt1: 6.3, examen: 6.7 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Rubén Jacob Dazarola", pt1: 5.9, examen: 6.2 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Rubén Jacob Dazarola", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Felipe Cortez Orellana", pt1: 6.2, examen: 6.5 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Felipe Cortez Orellana", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Felipe Cortez Orellana", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Cristián Gómez Moya", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Hans Stange Marcus", pt1: 5.8, examen: 6.2 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Hans Stange Marcus", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Mauricio Vico Sánchez", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Alfredo Mora Briones", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Pablo Domínguez González", pt1: 5.8, examen: 6.2 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Pablo Domínguez González", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Lorna Lares López", pt1: 6.3, examen: 6.7 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Gabriela Pradenas Guentherodt", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Macarena Ruiz Balart", pt1: 5.5, examen: 5.9 },
    { semestre: "2024-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Iván Méndez Olivares", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "René Perea Morales", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Andrea Wechsler Pizarro", pt1: 6.2, examen: 6.5 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Jenny Abud Carrillo", pt1: 6.5, examen: 6.8 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Paola De la Sotta Lazzerini", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Bruno Perelli Soto", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Sergio Donoso Cisternas", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Rodrigo Dueñas Santander", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Pamela Gatica Ramírez", pt1: 5.8, examen: 6.2 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Trinidad Jove Avilés", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Juan Carlos Lepe Muñoz", pt1: 5.7, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Félix Maldonado de la Fuente", pt1: 5.8, examen: 6.1 },
    { semestre: "2024-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Antonio Marín Pacheco", pt1: 5.5, examen: 5.9 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Raúl Molina Oyarzún", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "María Paz Morales Mujica", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Pablo Nuñez Gutiérrez", pt1: 6.2, examen: 6.5 },
    { semestre: "2024-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Verónica Ode Saleh", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Roberto Osses Flores", pt1: 5.8, examen: 6.1 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Sebastián Pagueguy Fenner", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñadora con mención Industrial y Servicios", guia: "Gabriela Pradenas Guentherodt", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñador", guia: "Daniel Reyes León", pt1: 5.5, examen: 5.7 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Rebeca Silva Roquefort", pt1: 6.0, examen: 6.3 },
    { semestre: "2024-2", titulo: "Diseñador con mención en Visualidad y Medios", guia: "Leonardo Soto Calquín", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Mauricio Tapia Reyes", pt1: 6.0, examen: 6.4 },
    { semestre: "2024-2", titulo: "Diseñador con mención Industrial y Servicios", guia: "Osvaldo Zorzano Betancourt", pt1: 5.5, examen: 5.8 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Mariana Young Araya", pt1: 6.2, examen: 6.5 },
    { semestre: "2024-2", titulo: "Diseñadora", guia: "Mónica Santibañez Boric", pt1: 5.8, examen: 6.0 },
    { semestre: "2024-2", titulo: "Diseñadora con mención en Visualidad y Medios", guia: "Paola Benavides Bermúdez", pt1: 6.0, examen: 6.3 },
];

// ──────────────────────────────────────────────
// CHART 1: Barras agrupadas — Inscripción vs Aprobación por semestre
// ──────────────────────────────────────────────

const semestres = ["2021-2", "2022-1", "2022-2", "2023-1", "2023-2", "2024-1", "2024-2"];
const inscriptos = [18, 22, 25, 30, 32, 38, 42];
const aprobados  = [12, 18, 20, 25, 26, 32, 36];

const fontBase = { family: "'Georama', sans-serif", size: 11 };
const colorMuted = "#999";
const tooltipBase = {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    titleColor: "#111",
    bodyColor: "#555",
    titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
    bodyFont: fontBase,
    padding: 10,
};

new Chart(document.getElementById("barrasInscripcion"), {
    type: "bar",
    data: {
        labels: semestres,
        datasets: [
            {
                label: "Inscritos en PT II",
                data: inscriptos,
                backgroundColor: "rgba(100, 140, 190, 0.75)",
                borderColor: "rgba(100, 140, 190, 1)",
                borderWidth: 0,
                borderRadius: 2,
            },
            {
                label: "Exámenes aprobados",
                data: aprobados,
                backgroundColor: "rgba(241, 142, 45, 0.8)",
                borderColor: "rgba(241, 142, 45, 1)",
                borderWidth: 0,
                borderRadius: 2,
            },
        ],
    },
    options: {
        scales: {
            x: {
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: { font: fontBase, color: colorMuted },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: fontBase,
                    color: colorMuted,
                    stepSize: 5,
                    callback: v => Number.isInteger(v) ? v : null,
                },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: fontBase,
                    color: colorMuted,
                    boxWidth: 12,
                    padding: 16,
                },
            },
            tooltip: {
                ...tooltipBase,
                callbacks: {
                    label: ctx => {
                        const v = ctx.parsed.y;
                        const total = inscriptos[ctx.dataIndex];
                        if (ctx.datasetIndex === 1) {
                            const pct = ((v / total) * 100).toFixed(0);
                            return `${ctx.dataset.label}: ${v} (${pct}% de inscritos)`;
                        }
                        return `${ctx.dataset.label}: ${v}`;
                    },
                },
            },
        },
    },
});

// ──────────────────────────────────────────────
// CHART 2: Dispersión — Nota PT I vs Nota Examen
// ──────────────────────────────────────────────

const scatterData = proyectos.map(p => ({
    x: p.pt1,
    y: p.examen,
    guia: p.guia,
    titulo: p.titulo,
    semestre: p.semestre,
}));

new Chart(document.getElementById("dispersionNotas"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Proyecto aprobado",
                data: scatterData,
                backgroundColor: "rgba(241,142,45,0.45)",
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: "Referencia (igual nota)",
                type: "line",
                data: [{ x: 4, y: 4 }, { x: 7, y: 7 }],
                borderColor: "rgba(102,102,102,0.25)",
                borderWidth: 1.5,
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                min: 4,
                max: 7,
                position: "bottom",
                title: {
                    display: true,
                    text: "Nota Proyecto de Título I",
                    font: fontBase,
                    color: colorMuted,
                },
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: fontBase,
                    color: colorMuted,
                    stepSize: 0.5,
                },
            },
            y: {
                min: 4,
                max: 7,
                title: {
                    display: true,
                    text: "Nota Examen de Título",
                    font: fontBase,
                    color: colorMuted,
                },
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: fontBase,
                    color: colorMuted,
                    stepSize: 0.5,
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                ...tooltipBase,
                filter: item => item.datasetIndex === 0,
                callbacks: {
                    label: ctx => {
                        const p = ctx.raw;
                        return [
                            p.titulo,
                            `Guía: ${p.guia}`,
                            `Semestre: ${p.semestre}`,
                            `PT I: ${p.x} → Examen: ${p.y}`,
                        ];
                    },
                },
            },
        },
    },
});

// ──────────────────────────────────────────────
// TABLA DINÁMICA CON BUSCADOR
// ──────────────────────────────────────────────

const tbody = document.getElementById("tabla-body");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sin-resultados");

function renderTabla(filtro) {
    const termino = filtro.toLowerCase().trim();
    const filtrados = proyectos.filter(p => {
        const texto = `${p.semestre} ${p.titulo} ${p.guia}`.toLowerCase();
        return texto.includes(termino);
    });

    tbody.innerHTML = "";

    if (filtrados.length === 0) {
        sinResultados.hidden = false;
        return;
    }

    sinResultados.hidden = true;

    filtrados.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.semestre}</td>
            <td>${p.titulo}</td>
            <td>${p.guia}</td>
            <td>${p.pt1.toFixed(1)}</td>
            <td>${p.examen.toFixed(1)}</td>
        `;
        tbody.appendChild(tr);
    });
}

buscador.addEventListener("input", e => renderTabla(e.target.value));

// Render inicial
renderTabla("");
