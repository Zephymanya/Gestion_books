import mongoose from "mongoose";

export const connexion = async () => {
  // if (mongoose.connections[0]) {
  //   return console.log("erreur inattendue");
  // }
  await mongoose
    .connect(
      "mongodb+srv://Zephy:Z0827579017m@cluster0.uxsswrg.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connexion reussi"))
    .catch((err) => console.log("erreur de connexion"));
};
mongoose.set("strictQuery", true);
