 export class Internship {
    private _businessName: string;
    private _location: { lat: number; lon: number };
  
    constructor(businessname: string, location: { lat: number; lon: number }) {
      this._businessName = businessname;
      this._location = location;
    }
  
    getLocation(): { lat: number; lon: number } {
      return this._location;
    }
  
    getBusinessName(): string {
      return this._businessName;
    }
  }
  
  
  const internship = new Internship("Business", { lat: 123, lon: 456 });
  
  console.log(internship.getBusinessName()); 
  console.log(internship.getLocation()); 
  