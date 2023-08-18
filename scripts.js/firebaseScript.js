// Connecting Firebase

import app from "../firebaseConfig.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// // reference the database

const database = getDatabase(app);

// reference the inventory section of the database
