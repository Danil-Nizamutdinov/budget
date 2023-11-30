/* eslint-disable no-undef */
import axios from "axios";

const instans = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const userAPI = {
  async registration(email, password) {
    try {
      const res = await instans.post("user/registration", { email, password });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async login(email, password) {
    try {
      const res = await instans.post("user/login", { email, password });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const expensesAPI = {
  async creatExpenses(userId, name, price) {
    try {
      const res = await instans.post("expenses", { userId, name, price });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getExpenses(userId) {
    try {
      const res = await instans.get("expenses", {
        params: {
          userId,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteExpenses(userId, id) {
    try {
      const res = await instans.delete("expenses", {
        params: {
          userId,
          expenseId: id,
        },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export const purposeAPI = {
  async creatPurpose(userId, name, price) {
    try {
      const res = await instans.post("purpose", { userId, name, price });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getPurpose(userId) {
    const res = await instans.get("purpose", {
      params: {
        userId,
      },
    });

    return res.data;
  },
  async deletePurpose(purposeId) {
    try {
      const res = await instans.delete("purpose", {
        params: {
          purposeId,
        },
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const purposeItemAPI = {
  async creatPurposeItem(purposeId, name, price) {
    const res = await instans.post("purposeItem", { purposeId, name, price });
    return res.data;
  },
  async deletePurposeItem(purposeId, purposeItemId) {
    const res = await instans.delete("purposeItem", {
      params: { purposeId, purposeItemId },
    });
    return res.data;
  },
};
