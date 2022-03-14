const express = require("express");

const trasporter = require("mongoose");
const app = express();

const connect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/evaluation");
};

const usersSchema = mongoose.Schema({
  firstname: { type: String, require: true },
  middlename: { type: String, require: false },
  lastname: { type: String, require: true },
  age: { type: Number, require: true },
  mail: { type: email, require: true },
  address: { type: String, require: true },
  gender: { type: String, require: false },
  type: { type: String, require: false, default: "custmer" },
  //update time
});

const Users = mongoose.mode("users", usersSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await Users.find().lean().exec();
    return res.status(200).send({ users: users });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

app.post("/users", async (req, res) => {
  try {
    const users = await Users.create(req.body);
    return res.status(200).send({ users: users });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

const branch = mongoose.Schema({
  name: { type: String, require: true },
  IFSC: { type: String, require: false },
  MICR: { type: Number, require: true },
  address: { type: String, require: true },

  //update time
});

app.get("/branch", async (req, res) => {
  try {
    const branch = await Users.find().lean().exec();
    return res.status(200).send({ branch: branch });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

app.post("/branch", async (req, res) => {
  try {
    const branch = await branch.create(req.body);
    return res.status(200).send({ branch: branch });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

const master = mongoose.Schema({
  balance: { type: Number, require: true },
  //update time
});

app.get("/master", async (req, res) => {
  try {
    const master = await master.find().lean().exec();
    return res.status(200).send({ master: master });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

app.post("/master", async (req, res) => {
  try {
    const master = await master.create(req.body);
    return res.status(200).send({ master: master });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

const saving = mongoose.Schema({
  balance: { type: Number, require: true },
  intrest: { type: Number, require: false },
  accountnum: { type: Number, require: true },

  //update time
});

app.get("/saving", async (req, res) => {
  try {
    const saving = await saving.find().lean().exec();
    return res.status(200).send({ saving: saving });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

app.post("/saving", async (req, res) => {
  try {
    const saving = await saving.create(req.body);
    return res.status(200).send({ saving: saving });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

const fixed = mongoose.Schema({
  balance: { type: Number, require: true },
  intrest: { type: Number, require: false },
  accountnum: { type: Number, require: true },
  startdate: { type: Number, require: true },
  maturitydate: { type: Number, require: true },

  //update time
});

app.get("/fixed", async (req, res) => {
  try {
    const fixed = await fixed.find().lean().exec();
    return res.status(200).send({ fixed: fixed });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

app.post("/fixed", async (req, res) => {
  try {
    const fixed = await fixed.create(req.body);
    return res.status(200).send({ fixed: fixed });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
});

app.listen(5000, async (req, res) => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("listen on 5000");
});
