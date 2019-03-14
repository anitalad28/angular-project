export class PersonalInfo {
    constructor(
      public PersonUniqueId: number,
      public FirstName: string,
      public MiddleName: string,
      public LastName: string,
      public DateOfBirth: string,
      public Age: string,
      public FlatBunglowNo: string,
      public SocietyName: string,
      public StreetAreaName: string,
      public City: string,
      public State: string,
      public Pincode: string,
      public PhoneNo: string,
      public MobileNo: string,
      public PhysicalDisability: string,
      public BirthSign: string,
      public loggedInUserId: number
    ) {}
  }

export const Gender = ['Male', 'Female', 'Transgender'];

export const MaritalStatus = [ 'Married', 'Unmarried', 'Divorced', 'Widow', 'Widower' ];

export const EducationalStatues = [ 'PhD', 'Post-Graduate', 'Under-Graduate', 'HSC', 'SSC', 'Illiterate' ];
