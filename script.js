function showResponsabilidades(pId){
    if (pId === "responsabilidades1"){
        document.getElementById(pId).innerHTML = "Planificación y gestión de proyectos de construcción Coordinación de equipos interdisciplinarios Control de presupuesto y cumplimiento de plazos Negociación con clientes y proveedores";
    } else if (pId === "responsabilidades2"){
        document.getElementById(pId).innerHTML = "Administración y gestión de los procesos de contratación y selección Capacitación y desarrollo de empleados Implementación de políticas y procedimientos de recursos humanos Resolución de conflictos y problemas laborales"
    } else {
        document.getElementById(pId).innerHTML = "Analisis de las ventas y estrategias para maximizar los beneficios Capacitación y supervisión del equipo de ventas Desarrollo de nuevas oportunidades de negocio Creación de informes de ventas y presentaciones para la gerencia"
    }
}