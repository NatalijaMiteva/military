export class User {
  public id: string; // the id from users
  public entityId: number; // the id from doctors/staff
  public email: string;
  public name: string;
  public authorities: Array<string>;
  public personal: any;
  public title: string;
  public type: string;

  constructor(id: string, entityId: number, email: string, name: string, authorities: Array<string>,
              personal: any, title: string, type: string) {
    this.id = id;
    this.entityId = entityId;
    this.email = email;
    this.name = name;
    this.authorities = authorities;
    this.personal = personal;
    this.title = title;
    this.type = type;
  }

  hasAuthority(authority: string): boolean {
    return this.authorities.indexOf(authority) !== -1;
  }
}
