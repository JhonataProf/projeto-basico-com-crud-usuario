import { DataTypes, Model } from "sequelize";
import sequelize from "../database";
import User from "./user-model";

export class Cliente extends Model {
  id!: number;
  nome!: string;
  endereco!: string;
  telefone!: string;
  userId!: number;
  user!: User;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Name of the target model
        key: "id", // Key in the target model that we're referencing
      },
    },
  },
  {
    sequelize,
    modelName: "Cliente",
  }
);
Cliente.belongsTo(User, { foreignKey: "userId", as: "user" });
export default Cliente;
