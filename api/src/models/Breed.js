const { DataTypes, Op, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Breed = sequelize.define(
    "Breed",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Breed name is required.",
          },
          is: {
            args: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gim,
            msg: "Invalid breed name.",
          },
          len: {
            args: [3, 40],
            msg: "The breed name should be between 3 and 40 characters.",
          },
          iUnique(value, next) {
            Breed.findAll({
              where: { name: { [Op.iLike]: value } },
            })
              .then((name) => {
                if (name.length > 0) {
                  throw new Error();
                }
                return next();
              })
              .catch((e) => next("The breed with that name already exists."));
          },
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Required height.",
          },
          is: {
            args: /^([0-9]{1,2}) - ([0-9]{1,2})$/,
            msg: "Invalid height format.",
          },
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^([0-9]{1,2}) - ([0-9]{1,2})$/,
            msg: "Invalid weight format.",
          },
        },
      },
      life_span: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([0-9]{1,2}) - ([0-9]{1,2})$/,
            msg: "Invalid life span format.",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: "Invalid image url.",
          },
        },
      },
      defaultImage: {
        type: DataTypes.STRING,
        defaultValue: "./notImage.jpg",
      },
    },
    { timestamps: false }
  );
};
