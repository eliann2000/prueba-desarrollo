module.exports = (sequelize, DataTypes) => {
	const Progreso = sequelize.define('Progreso', {
	  fecha: {
		type: DataTypes.DATE,
		allowNull: false,
	  },
	  cumplido: {
		type: DataTypes.BOOLEAN,
		allowNull: false, // Ajustado para que sea obligatorio
	  },
	});
  
	Progreso.associate = (models) => {
	  Progreso.belongsTo(models.Habito, {
		foreignKey: 'idHabito', // Alineado con tu diagrama de entidad-relación
		as: 'habito',
	  });
	};
  
	return Progreso;
  };
  