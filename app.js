const models = require('./models');

const consultaPropiedades = async () => {
    propiedades = await models.Propiedad.findAll();
    await propiedades.forEach(propiedad => {
        console.log(propiedad.dataValues);
    });
    models.sequelize.close();
}

const consultaPersonas = async () => {
    personas = await models.Persona.findAll();
    await personas.forEach(persona => {
        console.log(persona.dataValues);
    });
    models.sequelize.close();
}

const consultaPropietarios = async () => {
    propietarios = await models.Propietario.findAll();
    await propietarios.forEach(propietario => {
        console.log(propietario.dataValues);
    });
    models.sequelize.close();
}

const consultaArrendatarios = async () => {
    arrendatarios = await models.Arrendatario.findAll();
    await arrendatarios.forEach(arrendatario => {
        console.log(arrendatario.dataValues);
    });
    models.sequelize.close();
}

const agregaPropietarios = async (idPropiedad, idsPropietarios) => {
    const prop = await models.Propiedad.findByPk(idPropiedad);
    console.log(prop.dataValues);

    const personas = await models.Persona.findAll({
        where: {
            id: idsPropietarios
        }
    });
    personas.forEach(p => {
        console.log(p.dataValues);
    });

    await prop.addPropietarios(personas);
    const propietarios = await prop.getPropietarios();
    await propietarios.forEach(p => {
        console.log(p.nombre);
    });

    models.sequelize.close();
}

const agregaArrendatarios = async (idPropiedad, idsArrendatarios) => {
    const prop = await models.Propiedad.findByPk(idPropiedad);
    console.log(prop.dataValues);

    const personas = await models.Persona.findAll({
        where: {
            id: idsArrendatarios
        }
    });
    personas.forEach(p => {
        console.log(p.dataValues);
    });

    await prop.addArrendatarios(personas);
    const arrendatarios = await prop.getArrendatarios();
    await arrendatarios.forEach(p => {
        console.log(p.nombre);
    });

    models.sequelize.close();
}

// console.log("Personas:");
// consultaPersonas();

// console.log("Propiedades");
// consultaPropiedades();

// agregaPropietarios(1, 1);
// agregaPropietarios(2, [1, 2]);
// agregaPropietarios(3, [4, 5]);

// consultaPropietarios();

// agregaArrendatarios(1, 3);
// agregaArrendatarios(2, [5, 6]);
// agregaArrendatarios(3, 1);

// consultaArrendatarios();