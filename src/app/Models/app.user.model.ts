export class User {
  constructor(
    public UserId: number,
    public UserName: string,
    public Password: string,
    public EmailAddress: string,
    public IsApproved: string,
    public Role: string
  ) {}
}
