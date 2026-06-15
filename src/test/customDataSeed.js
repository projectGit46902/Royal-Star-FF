import { db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import data from "./results.json" with { type: "json" };

const upload = async () => {
    console.log(data);
  for (const [date, values] of Object.entries(data)) {
    console.log("Uploading:", date);
    await setDoc(doc(db, "results", date), {
      values,
    });

    console.log("Uploaded:", date);
  }

  console.log("🔥 Upload completed!");
};

upload();