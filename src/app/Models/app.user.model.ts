export class User {
  constructor(
    public UserId: number,
    public Username: string,
    public Password: string,
    public EmailAddress: string,
    public IsApproved: string,
    public PersonalInfo: string,
    public Role: string,
  ) {}
}
