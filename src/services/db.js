import { v4 as uuidv4 } from "uuid";
import singleton from "../utils/singleton";

/**
 * account: { id, name, email ,groups[]}
 * group: { id, name }
 * member: { id, accountId, groupId }
 * message: { id, message, groupId, accountId }
 */

const db = {
  messages: [],
  accounts: [],
  members: [],
  groups: [],
};

function Db() {
  function createAccount(props) {
    const id = uuidv4();
    const account = { ...props, id, groups: [] };
    db.accounts.push(account);
    return Promise.resolve(account);
  }

  function createGroup(props) {
    const id = uuidv4();
    const group = { ...props, id };
    db.groups.push(group);
    return Promise.resolve(group);
  }

  function getMessagesByGroup(groupId) {
    const groupMessages = db.messages.filter((m) => m.groupId === groupId);
    return Promise.resolve(groupMessages);
  }


  ///////1
  function addAccountToGroup(props) {
    const accounts = db.accounts.filter((n) => n.name === props.nameAccount)
    if (!accounts) {
      return Promise.reject("no Account");
    }
    const group = db.groups.find((g) => g.name === props.nameGroup)
    console.log(db.groups)
    if (!group) {
      return Promise.reject("no Group");
    }
    accounts.forEach(element => {
      element.groups.push(group.id)
    });
    return Promise.resolve(accounts);
  }


  //////2
  function getAccountOfGr(nameGroup) {
    const group = db.groups.find((g) => g.name === nameGroup);
    if (!group) {
      return Promise.reject("no Group");
    }
    const accountsInGroup = db.accounts.filter((account) => account.groups.find((item) => item === group.id));
    if (!accountsInGroup) {
      return Promise.reject("no AccountsInGroup");
    }
    return Promise.resolve(accountsInGroup.map((item) => item.name));
  }

  return {
    createAccount,
    createGroup,
    getMessagesByGroup,
    addAccountToGroup,
    getAccountOfGr
  };
}
export default singleton(Db);
