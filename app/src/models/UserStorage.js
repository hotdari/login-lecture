"use strict";

class UserStorage {
  static #users = {
    id: ["admin", "관리자", "김팀장"],
    password: ["admin", "1234", "123456"],
    name: ["홍길동", "테스터", "김테스트"]
  }

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
};

module.exports = UserStorage