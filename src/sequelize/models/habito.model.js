module.exports = (sequelize, DataTypes) => {
	const Habito = sequelize.define('Habito', {
	  nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  descripcion: {
		type: DataTypes.STRING,
	  },
	  frecuencia: {
		type: DataTypes.INTEGER, // Modificado a INTEGER para coincidir con tu diagrama
		allowNull: false,
	  },
	  notificaciones: {
		type: DataTypes.BOOLEAN,
		defaultValue: false, // Agregado para manejar las notificaciones
	  },
	});
  
	Habito.associate = (models) => {
	  Habito.belongsTo(models.Usuario, {
		foreignKey: 'idUsuario', // Alineado con tu diagrama de entidad-relación
		as: 'usuario',
	  });
	  Habito.hasMany(models.Progreso, {
		foreignKey: 'idHabito', // Alineado con tu diagrama de entidad-relación
		as: 'progresos',
	  });
	};
  
	return Habito;
  };
  